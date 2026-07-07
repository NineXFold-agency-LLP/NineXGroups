"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  Wrench,
  Layers,
  Shield,
  Users,
  Repeat,
  Link as LinkIcon,
  Cloud,
  LayoutGrid,
  BarChart3,
} from "lucide-react";

const FONT = { fontFamily: "'Inter', sans-serif" } as const;
const EASE = [0.22, 1, 0.36, 1] as const;

const approach = [
  {
    icon: <Wrench size={22} strokeWidth={1.5} />,
    t: "Right tool, honest advice.",
    d: "We start from your problem and pick the platform that fits, not the other way around.",
  },
  {
    icon: <Layers size={22} strokeWidth={1.5} />,
    t: "Real depth, not surface familiarity.",
    d: "Our teams know these systems well enough to make them do things the average implementer cannot.",
  },
  {
    icon: <Shield size={22} strokeWidth={1.5} />,
    t: "Built to last.",
    d: "We implement for maintainability and scale, so your platform is an asset in three years, not a rebuild.",
  },
];

const categories = [
  {
    n: "01",
    icon: <Cloud size={22} strokeWidth={1.5} />,
    t: "AI & Cloud",
    d: "The foundation of almost everything we build. We work across the leading AI platforms and the major clouds to design infrastructure and intelligence that is secure, scalable, and cost-aware.",
    bullets: [
      "OpenAI, Anthropic, and the wider generative AI ecosystem",
      "Amazon Web Services (AWS)",
      "Microsoft Azure",
      "Google Cloud",
    ],
  },
  {
    n: "02",
    icon: <LayoutGrid size={22} strokeWidth={1.5} />,
    t: "Enterprise Applications & CRM",
    d: "The systems that run the business day to day. We implement, customize, and connect the platforms that power sales, service, marketing, and operations.",
    bullets: ["Salesforce", "Microsoft Dynamics", "HubSpot", "GoHighLevel", "Leading ERP and business-systems platforms"],
  },
  {
    n: "03",
    icon: <BarChart3 size={22} strokeWidth={1.5} />,
    t: "Data & Analytics",
    d: "Transformation runs on trustworthy data. We build the platforms that collect, unify, and make sense of it, then put intelligence on top.",
    bullets: ["Modern data platforms and warehousing", "Business intelligence and visualization tools", "AI and ML model deployment"],
  },
];

const meansForYou = [
  {
    icon: <Users size={22} strokeWidth={1.5} />,
    t: "Senior teams who know the platform in depth.",
    d: "We use more than the demo flow. We know where these systems bend and where they break, and we build accordingly.",
  },
  {
    icon: <Repeat size={22} strokeWidth={1.5} />,
    t: "Patterns from real engagements.",
    d: "We bring proven approaches and hard-won judgment, not theory pulled from a vendor pitch.",
  },
  {
    icon: <Layers size={22} strokeWidth={1.5} />,
    t: "Architecture built to scale and stay maintainable.",
    d: "What we build is designed to grow with you and to be supportable long after go-live.",
  },
  {
    icon: <LinkIcon size={22} strokeWidth={1.5} />,
    t: "One partner for the whole stack.",
    d: "Strategy, platform, build, and outcome ownership in a single group, with no finger-pointing between vendors.",
  },
];

const platforms = [
  "OpenAI",
  "Anthropic",
  "AWS",
  "Microsoft Azure",
  "Google Cloud",
  "Salesforce",
  "Databricks",
  "HubSpot",
  "HighLevel",
];

export default function PartnerEcosystem() {
  const reduce = useReducedMotion();
  const rise = (i = 0) => ({
    initial: { opacity: 0, y: reduce ? 0 : 22 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-60px" },
    transition: { duration: 0.55, ease: EASE, delay: i * 0.05 },
  });

  return (
    <main style={FONT} className="w-full overflow-x-hidden bg-[#f3f3f1] text-[#0A1633]">
      <section className="mx-auto w-full max-w-[1220px] px-5 sm:px-6 lg:px-8 pt-[72px] sm:pt-[96px] pb-[48px]">
        <div className="mb-7 flex items-center gap-[10px]">
          <span className="h-[7px] w-[7px] bg-[#2563EB]" />
          <span className="text-[11px] font-medium uppercase tracking-[3px] text-[#0A1633]/60">
            Partners · Partner Ecosystem
          </span>
        </div>
        <motion.h1
          {...rise()}
          className="max-w-[18ch] text-[42px] font-medium leading-[0.92] tracking-[-0.045em] sm:text-[58px] lg:text-[72px]"
        >
          We build on the{" "}
          <span className="bg-gradient-to-r from-[#0A1633] to-[#2563EB] bg-clip-text text-transparent">
            platforms
          </span>{" "}
          that run modern business.
        </motion.h1>
        <motion.p
          {...rise(1)}
          className="mt-7 max-w-[600px] text-[15px] leading-[1.7] text-[#0A1633]/70 sm:text-[16px]"
        >
          Great transformation work is built on good platforms. We select tools with senior teams who actually know them,
          rather than learning the manual on your dime — and we bring the best capabilities in the market to the
          problems our clients are trying to solve.
        </motion.p>
      </section>

      <section className="mx-auto w-full max-w-[1220px] px-5 sm:px-6 lg:px-8 pb-[64px]">
        <motion.h2
          {...rise()}
          className="mb-10 max-w-[20ch] text-[30px] font-medium leading-[1.04] tracking-[-0.035em] sm:text-[42px]"
        >
          Platform fluent,{" "}
          <span className="bg-gradient-to-r from-[#0A1633] to-[#2563EB] bg-clip-text text-transparent">
            not platform religious.
          </span>
        </motion.h2>
        <div className="grid grid-cols-1 gap-[1px] border border-[#0A1633]/10 bg-[#0A1633]/10 sm:grid-cols-3">
          {approach.map((item, i) => (
            <motion.div
              key={item.t}
              {...rise(i)}
              className="group bg-[#f7f6f4] p-7 transition-colors duration-300 hover:bg-white sm:p-8"
            >
              <span className="flex h-[48px] w-[48px] items-center justify-center rounded-full border border-[#2563EB] text-[#2563EB] transition-colors duration-300 group-hover:bg-[#2563EB] group-hover:text-white">
                {item.icon}
              </span>
              <h3 className="mt-6 text-[20px] font-medium tracking-[-0.02em]">{item.t}</h3>
              <p className="mt-3 text-[13px] leading-[1.7] text-[#0A1633]/65">{item.d}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-[1220px] px-5 sm:px-6 lg:px-8 pb-[64px]">
        <motion.h2
          {...rise()}
          className="mb-10 max-w-[16ch] text-[30px] font-medium leading-[1.04] tracking-[-0.035em] sm:text-[42px]"
        >
          Platforms we work across
        </motion.h2>
        <div className="grid grid-cols-1 gap-[1px] border border-[#0A1633]/10 bg-[#0A1633]/10">
          {categories.map((cat, i) => (
            <motion.div key={cat.t} {...rise(i)} className="bg-[#f7f6f4] p-8 sm:p-10">
              <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
                <div className="max-w-[560px]">
                  <div className="flex items-center gap-4">
                    <span className="text-[13px] tabular-nums text-[#0A1633]/30">{cat.n}</span>
                    <span className="flex h-[48px] w-[48px] items-center justify-center rounded-full border border-[#2563EB] text-[#2563EB]">
                      {cat.icon}
                    </span>
                  </div>
                  <h3 className="mt-5 text-[24px] font-medium tracking-[-0.025em] sm:text-[28px]">{cat.t}</h3>
                  <p className="mt-3 text-[14px] leading-[1.7] text-[#0A1633]/65">{cat.d}</p>
                </div>
                <ul className="grid gap-2.5 sm:min-w-[280px]">
                  {cat.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-2.5 text-[13px] leading-[1.6] text-[#0A1633]/70">
                      <span className="mt-[7px] h-[5px] w-[5px] shrink-0 rounded-full bg-[#2563EB]" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-[1220px] px-5 sm:px-6 lg:px-8 pb-[64px]">
        <motion.h2
          {...rise()}
          className="mb-10 max-w-[18ch] text-[30px] font-medium leading-[1.04] tracking-[-0.035em] sm:text-[42px]"
        >
          What this means for you
        </motion.h2>
        <div className="grid grid-cols-1 gap-[1px] border border-[#0A1633]/10 bg-[#0A1633]/10 sm:grid-cols-2 lg:grid-cols-4">
          {meansForYou.map((item, i) => (
            <motion.div
              key={item.t}
              {...rise(i)}
              className="group bg-[#f7f6f4] p-7 transition-colors duration-300 hover:bg-white sm:p-8"
            >
              <span className="flex h-[48px] w-[48px] items-center justify-center rounded-full border border-[#2563EB] text-[#2563EB] transition-colors duration-300 group-hover:bg-[#2563EB] group-hover:text-white">
                {item.icon}
              </span>
              <h3 className="mt-6 text-[18px] font-medium tracking-[-0.02em]">{item.t}</h3>
              <p className="mt-3 text-[13px] leading-[1.7] text-[#0A1633]/65">{item.d}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-[1220px] px-5 sm:px-6 lg:px-8 pb-[64px]">
        <motion.p {...rise()} className="mb-6 text-[11px] font-medium uppercase tracking-[3px] text-[#0A1633]/50">
          Platforms we work with
        </motion.p>
        <div className="grid grid-cols-2 gap-[1px] border border-[#0A1633]/10 bg-[#0A1633]/10 sm:grid-cols-3 lg:grid-cols-5">
          {platforms.map((name, i) => (
            <motion.div
              key={name}
              {...rise(i)}
              className="flex items-center justify-center bg-[#f7f6f4] px-4 py-6 text-center text-[14px] font-medium text-[#0A1633]/75"
            >
              {name}
            </motion.div>
          ))}
          <motion.div
            {...rise(platforms.length)}
            className="flex items-center justify-center bg-[#f7f6f4] px-4 py-6 text-center text-[13px] font-semibold uppercase tracking-[1px] text-[#2563EB]"
          >
            + More
          </motion.div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-[1220px] px-5 sm:px-6 lg:px-8 pb-[100px]">
        <motion.div {...rise()} className="relative overflow-hidden bg-[#0A1633] p-10 text-white sm:p-14">
          <div className="absolute -right-32 -top-32 h-[360px] w-[360px] bg-[#2563EB]/30 blur-[140px]" />
          <div className="relative max-w-[720px]">
            <p className="text-[11px] font-medium uppercase tracking-[3px] text-white/50">As we grow the ecosystem</p>
            <h3 className="mt-5 text-[28px] font-medium leading-[1.1] tracking-[-0.035em] sm:text-[40px]">
              Our commitment is not to any single vendor.{" "}
              <span className="bg-gradient-to-r from-white to-[#93B4FF] bg-clip-text text-transparent">
                It is to bringing the best capabilities in the market to the problems our clients are trying to solve.
              </span>
            </h3>
            <p className="mt-5 max-w-[520px] text-[14px] leading-[1.7] text-white/65">
              As we grow, we keep deepening and formalizing these relationships across the ecosystem, and we add new
              platforms as our clients&apos; needs evolve.
            </p>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
