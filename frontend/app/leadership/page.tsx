"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";

const INK = "#1A1A1A";
const MUTED = "#6B6B6B";
const ACCENT = "#1959FA";
const BG = "#F7F5F2";
const PHOTO_BG = "#E8E6E3";

type Leader = {
  name: string;
  role: string;
  image?: string;
  linkedin?: string;
  category: "executive";
};

const leaders: Leader[] = [
  {
    name: "Pratyush Nayak",
    role: "Founder & Chief Executive Officer",
    category: "executive",
    linkedin: "https://www.linkedin.com/company/ninexgroup/",
  },
  {
    name: "Prabhash Nayak",
    role: "Co-Founder & Chief Technology Officer",
    category: "executive",
    linkedin: "https://www.linkedin.com/company/ninexgroup/",
  },
];

const tabs = [{ id: "executive" as const, label: "Executive Leadership" }];

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function LeaderCard({ leader, index }: { leader: Leader; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className="group"
    >
      <div className="relative aspect-[4/5] w-full overflow-hidden" style={{ background: PHOTO_BG }}>
        {leader.image ? (
          <Image
            src={leader.image}
            alt={leader.name}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            className="object-cover object-top grayscale transition-transform duration-500 group-hover:scale-[1.03]"
          />
        ) : (
          <div className="flex h-full w-full items-end justify-center">
            <svg
              viewBox="0 0 120 140"
              className="h-[88%] w-auto opacity-40"
              fill="#9CA3AF"
              aria-hidden
            >
              <circle cx="60" cy="48" r="28" />
              <path d="M12 140c0-32 22-52 48-52s48 20 48 52z" />
            </svg>
          </div>
        )}

        {leader.linkedin && (
          <a
            href={leader.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${leader.name} on LinkedIn`}
            className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-sm bg-black/45 text-white transition-colors hover:bg-black/70"
          >
            <LinkedInIcon className="h-3.5 w-3.5" />
          </a>
        )}
      </div>

      <h3
        className="mt-4 text-[13px] font-bold uppercase tracking-[0.06em] sm:text-[14px]"
        style={{ color: INK }}
      >
        {leader.name}
      </h3>
      <p className="mt-1.5 text-[13px] leading-snug sm:text-[14px]" style={{ color: MUTED }}>
        {leader.role}
      </p>
    </motion.article>
  );
}

export default function LeadershipPage() {
  const [activeTab, setActiveTab] = useState<(typeof tabs)[number]["id"]>("executive");

  const visible = leaders.filter((l) => l.category === activeTab);

  return (
    <section className="min-h-[70vh] px-5 py-14 sm:px-8 sm:py-16 lg:px-12 lg:py-20" style={{ background: BG }}>
      <div className="mx-auto max-w-[1200px]">
        <motion.header
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          <h1
            className="text-[42px] font-bold leading-[1.05] tracking-[-0.03em] sm:text-[52px] lg:text-[64px]"
            style={{ color: INK }}
          >
            Leadership
          </h1>
          <p className="mt-3 text-[18px] font-medium sm:text-[20px]" style={{ color: MUTED }}>
            Meet our Leaders
          </p>
        </motion.header>

        {/* Category tabs */}
        <div className="mt-10 border-b border-black/10 sm:mt-12">
          <div className="-mb-px flex flex-wrap gap-x-8 gap-y-2" role="tablist" aria-label="Leadership categories">
            {tabs.map((tab) => {
              const active = activeTab === tab.id;
              const count = leaders.filter((l) => l.category === tab.id).length;
              return (
                <button
                  key={tab.id}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  disabled={count === 0}
                  onClick={() => setActiveTab(tab.id)}
                  className={`relative pb-3 text-[14px] transition-colors disabled:cursor-not-allowed disabled:opacity-40 sm:text-[15px] ${
                    active ? "font-semibold" : "font-normal hover:opacity-80"
                  }`}
                  style={{ color: active ? INK : MUTED }}
                >
                  {tab.label}
                  {active && (
                    <motion.span
                      layoutId="leadership-tab"
                      className="absolute inset-x-0 -bottom-px h-[2px]"
                      style={{ background: ACCENT }}
                    />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Grid */}
        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-8">
          {visible.length > 0 ? (
            visible.map((leader, i) => <LeaderCard key={leader.name} leader={leader} index={i} />)
          ) : (
            <p className="col-span-full py-16 text-center text-[15px]" style={{ color: MUTED }}>
              Leaders in this category will be announced soon.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
