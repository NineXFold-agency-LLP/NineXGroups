import type { Metadata } from "next";
import SubPageHero from "@/components/sections/common/SubPageHero";
import OurVision from "../OurVision";
import ValuesSection from "../ValuesSection";
import ClientSuccessMetricsSection from "../ClientSuccessMetricsSection";
import {
  BarChart3,
  SlidersHorizontal,
  User,
} from "lucide-react";
import WhatWeDoSection from "../WhatWeDo";

export const metadata: Metadata = {
  title: "Marketing Platforms | Marketing Automation & Growth Stacks | NineXConnect",
  description:
    "Design and implement marketing automation and growth platforms — Marketo, HubSpot, Salesforce Marketing Cloud, Adobe — that nurture leads and prove pipeline contribution. Explore Marketing Platforms.",
  keywords: [
    "marketing platforms",
    "marketing automation",
    "Marketo",
    "HubSpot",
    "Salesforce Marketing Cloud",
    "lead nurturing",
    "NineXConnect",
  ],
  openGraph: {
    title: "Marketing Platforms | NineXConnect",
    description:
      "Marketing automation platforms that generate pipeline and prove ROI.",
  },
};

const metricGroups = [
  {
    icon: <BarChart3 size={22} strokeWidth={1.5} />,
    title: "Challenge",
    items: [
      ["8+", "disconnected marketing tools"],
      ["0", "reliable multi-touch attribution"],
      ["MANUAL", "campaigns built without reusable workflows"],
      ["LOW", "lead-to-opportunity conversion"],
      ["GAP", "CRM and marketing data out of sync"],
    ],
    footerTitle: "MARTECH CHAOS",
    footerText: "DISCONNECTED. MANUAL.",
    showArrow: true,
  },
  {
    icon: <SlidersHorizontal size={22} strokeWidth={1.5} />,
    title: "Solution",
    items: [
      ["MAP", "Marketo / HubSpot / Marketing Cloud"],
      ["NURTURE", "Lifecycle nurture programs"],
      ["SCORE", "Lead scoring aligned to sales"],
      ["SYNC", "Bi-directional CRM integration"],
      ["ROI", "Campaign and attribution dashboards"],
      ["5M", "platform implementation"],
    ],
    footerTitle: "GROWTH PLATFORM",
    footerText: "AUTOMATED. ATTRIBUTABLE.",
    showArrow: false,
  },
  {
    icon: <User size={22} strokeWidth={1.5} />,
    title: "Results",
    items: [
      ["60%", "increase in marketing qualified leads"],
      ["40%", "improvement in lead-to-opportunity"],
      ["50%", "reduction in cost per lead"],
      ["70%", "time savings through automation"],
      ["100%", "visibility into campaign ROI"],
      ["6M", "ROI realization"],
    ],
    footerTitle: "MARKETING IMPACT",
    footerText: "SCALABLE. PROVEN.",
    showArrow: false,
  },
];

const cards = [
  {
    title: "Marketing Automation Platform Implementation",
    highlight:
      "Marketo, HubSpot, Pardot, and Salesforce Marketing Cloud done right",
    description:
      "We implement marketing automation with email programs, forms, landing pages, lead scoring, CRM sync, and governance — so campaigns run reliably and sales receives sales-ready leads.",
  },
  {
    title: "Lead Nurture & Lifecycle Programs",
    highlight:
      "Move prospects from awareness to opportunity automatically",
    description:
      "We design nurture tracks by persona and stage — welcome, education, product, re-engagement — with progressive profiling and behavioral triggers that improve conversion without more media spend.",
  },
  {
    title: "Lead Scoring & Sales Handoff",
    highlight:
      "Align marketing and sales on what 'ready' means",
    description:
      "We build demographic and behavioral scoring models, SLAs, and routing so high-intent leads reach the right rep fast — and recycled leads return to nurture cleanly.",
  },
  {
    title: "Campaign Operations & Templates",
    highlight:
      "Launch faster with reusable, brand-safe building blocks",
    description:
      "We create email templates, modular content blocks, UTM standards, and campaign playbooks so marketing ops can deploy programs in days instead of weeks.",
  },
  {
    title: "Marketing Data & CRM Integration",
    highlight:
      "One lifecycle view from first click to closed-won",
    description:
      "We integrate marketing platforms with CRM, webinars, events, and advertising — cleaning fields, syncing statuses, and eliminating the data gaps that break attribution.",
  },
  {
    title: "Attribution & Performance Dashboards",
    highlight:
      "Prove pipeline contribution and optimize budget",
    description:
      "We implement campaign tracking, multi-touch attribution, and executive dashboards so leadership sees which programs create revenue — not just clicks.",
  },
];

export default function Page() {
  return (
    <>
      <SubPageHero
        backgroundImage="/images/bg-image/Connect-bg.png"
        headline="Marketing platforms that generate pipeline and prove ROI"
        subheadline="We design and implement marketing automation and growth platforms — Salesforce Marketing Cloud, HubSpot, Marketo, Adobe, and related stacks — that nurture leads, align with sales, and attribute revenue outcomes."
      />
      <OurVision
        eyebrow="OUR VISION"
        leftTitle={[
          "ATTRACT.",
          "NURTURE.",
          "CONVERT.",
          "PROVE.",
        ]}
        title="Marketing technology that leadership can measure and trust."
        description="NineXConnect implements marketing platforms that turn campaigns into a repeatable growth system — with automation, scoring, CRM alignment, and attribution that connect every pound of spend to pipeline."
        image="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1600&auto=format&fit=crop"
      />

      <ValuesSection
        eyebrow="OUR VALUES"
        title="The principles behind every marketing platform we implement."
        description="Platforms without process create more clutter. We implement for adoption, data quality, and commercial accountability."
        quote="Pipeline Is the Metric That Matters"
        quoteDescription="We configure every workflow and report to connect marketing activity to pipeline and revenue — not vanity metrics."
        tags={[
          "Automation",
          "Attribution",
          "Alignment",
        ]}
        image="https://images.unsplash.com/photo-1545987796-200677ee1011?w=600&q=80"
      />
      <WhatWeDoSection cards={cards} />
      <ClientSuccessMetricsSection
        metricGroups={metricGroups}
      />
    </>
  );
}
