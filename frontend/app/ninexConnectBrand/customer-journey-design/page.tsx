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
  title: "Customer Journey Design | Journey Mapping & Orchestration | NineXConnect",
  description:
    "Engineer seamless, intelligent customer journeys across every touchpoint — from awareness to advocacy — with mapping, orchestration, and personalization. Schedule a Journey Design Workshop.",
  keywords: [
    "customer journey design",
    "journey mapping",
    "journey orchestration",
    "personalization",
    "CX design",
    "NineXConnect",
  ],
  openGraph: {
    title: "Customer Journey Design | NineXConnect",
    description:
      "Customer journey design that turns every touchpoint into a connected, measurable experience.",
  },
};

const metricGroups = [
  {
    icon: <BarChart3 size={22} strokeWidth={1.5} />,
    title: "Challenge",
    items: [
      ["12+", "disconnected customer touchpoints"],
      ["DROP", "high drop-off between awareness and purchase"],
      ["SILO", "marketing, sales, and service journeys misaligned"],
      ["LOW", "personalization across channels"],
      ["UNKN", "no shared journey KPIs across teams"],
    ],
    footerTitle: "JOURNEY GAPS",
    footerText: "BROKEN. INCONSISTENT.",
    showArrow: true,
  },
  {
    icon: <SlidersHorizontal size={22} strokeWidth={1.5} />,
    title: "Solution",
    items: [
      ["MAP", "End-to-end journey mapping workshops"],
      ["ICP", "Persona and job-to-be-done frameworks"],
      ["ORCH", "Cross-channel journey orchestration"],
      ["TRIG", "Behavioral triggers and next-best-action"],
      ["TEST", "Continuous journey experimentation"],
      ["8M", "journey transformation program"],
    ],
    footerTitle: "JOURNEY SYSTEM",
    footerText: "DESIGNED. ORCHESTRATED.",
    showArrow: false,
  },
  {
    icon: <User size={22} strokeWidth={1.5} />,
    title: "Results",
    items: [
      ["45%", "increase in customer engagement"],
      ["35%", "improvement in conversion rates"],
      ["50%", "higher customer lifetime value"],
      ["40%", "increase in retention rates"],
      ["30%", "reduction in journey drop-off"],
      ["7M", "ROI realization"],
    ],
    footerTitle: "JOURNEY IMPACT",
    footerText: "CONNECTED. MEASURABLE.",
    showArrow: false,
  },
];

const cards = [
  {
    title: "Customer Journey Mapping",
    highlight:
      "See every friction point from first touch to loyalty",
    description:
      "We facilitate journey mapping across awareness, consideration, purchase, onboarding, retention, and advocacy — documenting emotions, channels, owners, and failure points so teams share one blueprint for experience improvement.",
  },
  {
    title: "Persona & Experience Strategy",
    highlight:
      "Design for real buyers, not average customers",
    description:
      "We develop personas, jobs-to-be-done, and experience principles that guide messaging, channel choice, and service design — ensuring every journey decision is grounded in customer reality.",
  },
  {
    title: "Journey Orchestration Implementation",
    highlight:
      "Execute journeys across email, web, app, SMS, and service",
    description:
      "We implement orchestration platforms (Adobe Journey Optimizer, Salesforce Journey Builder, Braze, Iterable) with real-time triggers, branching logic, and multi-brand governance.",
  },
  {
    title: "Personalization & Next-Best-Action",
    highlight:
      "Deliver the right experience in the moment that matters",
    description:
      "We design personalization strategies and next-best-action models that use behavioral and profile data to recommend content, offers, and service paths across channels.",
  },
  {
    title: "Onboarding & Lifecycle Journeys",
    highlight:
      "Accelerate time-to-value and reduce early churn",
    description:
      "We design onboarding, activation, expansion, and win-back journeys with clear success milestones, progressive education, and human handoffs when automation is not enough.",
  },
  {
    title: "Journey Analytics & Experimentation",
    highlight:
      "Measure every step and continuously improve conversion",
    description:
      "We instrument journey KPIs, funnel analytics, and A/B testing so teams know which moments drive revenue — and which need redesign.",
  },
];

export default function Page() {
  return (
    <>
      <SubPageHero
        backgroundImage="/images/bg-image/Connect-bg.png"
        headline="Customer journeys engineered to convert, retain, and grow lifetime value"
        subheadline="We engineer seamless, intelligent customer experiences across every touchpoint — mapping journeys, orchestrating channels, and personalizing interactions so marketing, sales, and service feel like one continuous relationship."
      />
      <OurVision
        eyebrow="OUR VISION"
        leftTitle={[
          "MAP.",
          "DESIGN.",
          "ORCHESTRATE.",
          "OPTIMISE.",
        ]}
        title="Every customer interaction should feel intentional — never accidental."
        description="NineXConnect designs and implements customer journey systems that connect brand, demand, sales, onboarding, and service into one coherent experience — measured by engagement, conversion, retention, and lifetime value."
        image="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1600&auto=format&fit=crop"
      />

      <ValuesSection
        eyebrow="OUR VALUES"
        title="The principles behind every journey we design."
        description="Journeys without ownership become diagrams on a wall. We design for execution, measurement, and continuous improvement."
        quote="Design the Experience, Then Automate It"
        quoteDescription="We clarify the human experience first — then implement the platforms and triggers that deliver it consistently at scale."
        tags={[
          "Empathy",
          "Orchestration",
          "Outcomes",
        ]}
        image="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&q=80"
      />
      <WhatWeDoSection cards={cards} />
      <ClientSuccessMetricsSection
        metricGroups={metricGroups}
      />
    </>
  );
}
