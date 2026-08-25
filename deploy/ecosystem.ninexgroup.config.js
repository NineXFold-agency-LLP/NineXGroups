/**
 * PM2 ecosystem for NineXGroups — lives under /root/apps/ninexfold (NOT production).
 * Start: pm2 start /root/apps/ninexfold/deploy/ecosystem.ninexgroup.config.js
 */
module.exports = {
  apps: [
    {
      name: "ninexgroup-web",
      cwd: "/root/apps/ninexfold/frontend",
      script: "npm",
      args: "start",
      instances: 1,
      exec_mode: "fork",
      env: {
        NODE_ENV: "production",
        PORT: 3012,
      },
      max_memory_restart: "512M",
      time: true,
    },
  ],
};
