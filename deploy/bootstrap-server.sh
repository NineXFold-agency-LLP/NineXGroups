#!/usr/bin/env bash
# One-time bootstrap for NineXGroups on the same droplet as ninexhoomie.
# Installs under /root/apps/ninexfold — does NOT touch /root/apps/production.
set -euo pipefail

REPO_URL="${REPO_URL:-https://github.com/NineXFold-agency-LLP/NineXGroups.git}"
APPS_ROOT="${APPS_ROOT:-/root/apps}"
LIVE_DIR="${LIVE_DIR:-$APPS_ROOT/ninexfold}"
BRANCH="${BRANCH:-main}"
PORT="${PORT:-3012}"

if [ "$(id -u)" -ne 0 ]; then
  echo "Run as root on the droplet."
  exit 1
fi

echo "==> Ensuring Node/npm and pm2 are available..."
command -v node >/dev/null
command -v npm >/dev/null
command -v pm2 >/dev/null
command -v nginx >/dev/null

mkdir -p "$APPS_ROOT"
git config --global --add safe.directory '*' || true

if [ -d "$LIVE_DIR/.git" ]; then
  echo "==> Updating existing clone at $LIVE_DIR"
  git -C "$LIVE_DIR" fetch origin "$BRANCH"
  git -C "$LIVE_DIR" checkout "$BRANCH"
  git -C "$LIVE_DIR" reset --hard "origin/$BRANCH"
else
  echo "==> Cloning into $LIVE_DIR (isolated from production)"
  rm -rf "$LIVE_DIR"
  git clone --branch "$BRANCH" "$REPO_URL" "$LIVE_DIR"
fi

ENV_LIVE="$LIVE_DIR/frontend/.env"
ENV_EXAMPLE="$LIVE_DIR/deploy/env/frontend.production.env.example"
if [ ! -f "$ENV_LIVE" ]; then
  if [ -f "$ENV_EXAMPLE" ]; then
    cp "$ENV_EXAMPLE" "$ENV_LIVE"
    echo "==> Created $ENV_LIVE from example — fill AWS keys if needed, then re-run build if required."
  elif [ -f "$LIVE_DIR/frontend/.env.example" ]; then
    cp "$LIVE_DIR/frontend/.env.example" "$ENV_LIVE"
    echo "==> Created $ENV_LIVE from frontend/.env.example"
  else
    cat > "$ENV_LIVE" <<'EOF'
NEXT_PUBLIC_SITE_URL=https://ninexgroup.co.in
EOF
    echo "==> Created minimal $ENV_LIVE"
  fi
fi

# Keep SITE_URL on production domain if missing
if ! grep -q '^NEXT_PUBLIC_SITE_URL=' "$ENV_LIVE" 2>/dev/null; then
  echo 'NEXT_PUBLIC_SITE_URL=https://ninexgroup.co.in' >> "$ENV_LIVE"
fi

echo "==> Building frontend (live process not started yet / existing ninexhoomie untouched)..."
cd "$LIVE_DIR/frontend"
npm ci
NODE_OPTIONS=--max-old-space-size=2048 npm run build

NGINX_SRC="$LIVE_DIR/deploy/nginx/ninexgroup.conf"
NGINX_DEST="/etc/nginx/sites-available/ninexgroup"
echo "==> Installing nginx site $NGINX_DEST (does not edit ninexhoomie-production)"
cp "$NGINX_SRC" "$NGINX_DEST"
ln -sfn "$NGINX_DEST" /etc/nginx/sites-enabled/ninexgroup
nginx -t
systemctl reload nginx

ECOSYSTEM="$LIVE_DIR/deploy/ecosystem.ninexgroup.config.js"
echo "==> Starting PM2 app ninexgroup-web on port $PORT"
if pm2 describe ninexgroup-web >/dev/null 2>&1; then
  pm2 reload ninexgroup-web
else
  pm2 start "$ECOSYSTEM"
fi
pm2 save

echo ""
echo "Bootstrap complete."
echo "  Live dir:  $LIVE_DIR"
echo "  PM2 name:  ninexgroup-web"
echo "  Port:      $PORT"
echo "  Nginx:     ninexgroup → ninexgroup.co.in / www"
echo ""
echo "Issue TLS (after DNS A records point here):"
echo "  certbot --nginx -d ninexgroup.co.in -d www.ninexgroup.co.in"
echo ""
echo "Smoke checks:"
echo "  pm2 list | rg ninexgroup"
echo "  curl -I http://127.0.0.1:$PORT"
echo "  curl -I https://ninexhoomie.com"
echo "  curl -I https://ninexgroup.co.in"
