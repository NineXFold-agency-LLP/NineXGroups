import type { Metadata } from "next";
import SubPageHero from "@/components/sections/common/SubPageHero";
import OurVision from "@/app/ninexFoldServices/OurVision";
import ValuesSection from "@/app/ninexFoldServices/ValuesSection";
import ClientSuccessMetricsSection from "../ClientSuccessMetricsSection";
import {
  AlertTriangle,
  Cpu,
  TrendingUp,
} from "lucide-react";
import WhatWeDoSection from "../WhatWeDo";

export const metadata: Metadata = {
  title: "Revenue Systems | RevOps, Forecasting & Revenue Intelligence | NineXFold",
  description:
    "Build unified revenue infrastructure that connects marketing, sales, and customer success into one growth engine with real-time visibility and predictive intelligence. Schedule a Revenue Systems Assessment.",
  keywords: [
    "revenue systems",
    "RevOps",
    "revenue operations",
    "revenue forecasting",
    "Salesforce Revenue Cloud",
    "Clari",
    "revenue intelligence",
    "pricing optimization",
    "NineXFold",
  ],
  openGraph: {
    title: "Revenue Systems | NineXFold",
    description:
      "Revenue operations that forecast accurately and scale predictably. Unified RevOps platforms, intelligence, and pricing systems.",
  },
};

const metricGroups = [
  {
    icon: <AlertTriangle size={22} strokeWidth={1.5} />,
    title: "Challenge",
    items: [
      ["8", "different CRM systems and disconnected data"],
      ["50%", "forecast accuracy missing quarterly targets"],
      ["0", "unified customer view across products"],
      ["180D", "sales cycles increasing and win rates declining"],
      ["BLIND", "executive team lacking revenue visibility"],
    ],
    footerTitle: "BUSINESS PAIN",
    footerText: "FRAGMENTED. DISCONNECTED.",
    showArrow: true,
  },

  {
    icon: <Cpu size={22} strokeWidth={1.5} />,
    title: "Solution",
    items: [
      ["CRM", "Unified Salesforce Revenue Cloud platform"],
      ["AI", "Clari predictive forecasting and analytics"],
      ["GONG", "Conversation intelligence and coaching"],
      ["DATA", "Custom attribution and waterfall reporting"],
      ["LIVE", "Executive dashboards with real-time visibility"],
    ],
    footerTitle: "IMPLEMENTED SYSTEMS",
    footerText: "CONNECTED. INTELLIGENT.",
    showArrow: false,
  },

  {
    icon: <TrendingUp size={22} strokeWidth={1.5} />,
    title: "Results",
    items: [
      ["95%", "forecast accuracy (from 50%)"],
      ["$300M", "revenue impact in year one"],
      ["60%", "faster sales cycles (180 to 72 days)"],
      ["40%", "larger average deal sizes"],
      ["95%", "sales adoption within 30 days"],
      ["3M", "ROI realization timeline"],
    ],
    footerTitle: "BUSINESS OUTCOMES",
    footerText: "MEASURABLE. SCALABLE.",
    showArrow: false,
  },
];

const cards = [
  {
    title: "Revenue Operations Infrastructure",
    highlight:
      "Unify marketing, sales, and customer success into one growth engine",
    description:
      "We implement RevOps platforms, cross-functional process design, revenue data architecture, and integration across marketing-sales-success tech stacks — with Salesforce Revenue Cloud, Clari, Gong.io, ChurnZero, LeanData, and Groove. Client outcomes include 45% better forecast accuracy, 30% higher quota attainment, and 60% less forecasting time.",
  },
  {
    title: "Revenue Intelligence & Analytics",
    highlight:
      "Predictive forecasting and pipeline visibility executives can trust",
    description:
      "We develop predictive forecasting models, pipeline health and velocity analytics, win/loss analysis, multi-touch attribution, churn prediction, and executive revenue dashboards — using ML models, real-time pipeline scoring, cohort analysis, and scenario modeling. Typical results: 90%+ forecast accuracy and 40% better pipeline conversion.",
  },
  {
    title: "Pricing & Packaging Optimization",
    highlight:
      "Value-based pricing that increases win rates and average contract value",
    description:
      "We deliver pricing strategy, value-based models, packaging and bundling, discount approval workflows, competitive pricing intelligence, and price optimization analytics — using conjoint analysis, Van Westendorp sensitivity, elasticity testing, and A/B pricing experiments. Outcomes: 20–30% revenue lift and 40% less discount leakage.",
  },
  {
    title: "Territory & Capacity Planning",
    highlight:
      "Balanced territories, realistic quotas, and higher sales productivity",
    description:
      "We design territory optimization, sales capacity planning, quota setting and allocation, account routing rules, coverage models, and performance benchmarking — with territory mapping, capacity simulation, workload balancing, and what-if scenario planning. Results: 30% better territory balance and 25% higher sales productivity.",
  },
  {
    title: "Commission & Incentive Management",
    highlight:
      "Incentive systems that drive the right revenue behaviors",
    description:
      "We implement commission and incentive management platforms that align rep motivation with company goals — transparent calculations, accurate payouts, and real-time visibility into attainment so leadership can steer performance without disputes or spreadsheet chaos.",
  },
  {
    title: "Account-Based Revenue Orchestration",
    highlight:
      "Coordinate every revenue motion around high-value accounts",
    description:
      "We build account-based revenue orchestration that aligns marketing, sales, and success around target accounts — shared account plans, coordinated plays, and unified reporting so expansion and retention become a system, not a hope.",
  },
];

export default function Page() {
  return (
    <>
      <SubPageHero
        backgroundImage="/images/bg-image/Fold-bg.png"
        headline="Revenue operations that forecast accurately and scale predictably"
        subheadline="Build unified revenue infrastructure that connects marketing, sales, and customer success into one growth engine with real-time visibility and predictive intelligence."
      />
      <OurVision
        eyebrow="OUR VISION"
        leftTitle={[
          "PREDICT.",
          "UNIFY.",
          "SCALE.",
          "GROW.",
        ]}
        title="RevOps that turns revenue into a managed system."
        description="Revenue operations (RevOps) is the convergence of people, process, technology, and data across marketing, sales, and customer success. NineXFold's Revenue Systems practice implements the platforms, processes, and analytics that unify your revenue organization — from intelligence and forecasting to pricing, territory planning, and attribution."
        image="https://images.unsplash.com/photo-1563986768494-4dee2763ff36?q=80&w=1600&auto=format&fit=crop"
      />

      <ValuesSection
        eyebrow="OUR VALUES"
        title="The principles behind every revenue system we architect."
        description="Enterprise revenue infrastructure built without principles fails at scale. Every engagement is grounded in visibility, alignment, and measurable outcomes."
        quote="Visibility Before Velocity"
        quoteDescription="We build real-time revenue visibility and accurate forecasting before we scale motion. Predictable growth starts with systems leadership can trust."
        tags={[
          "Visibility",
          "Alignment",
          "Predictability",
        ]}
        image="https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=600&q=80"
      />
      <WhatWeDoSection cards={cards} />
      <ClientSuccessMetricsSection
        metricGroups={metricGroups}
      />
    </>
  );
}
