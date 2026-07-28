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
  title: "Demand Generation System | Pipeline, ABM & Performance Marketing | NineXFold",
  description:
    "Build full-funnel demand generation infrastructure that delivers qualified pipeline, scales MQL volume, and reduces cost per lead — every quarter. Schedule a Demand Generation Assessment.",
  keywords: [
    "demand generation",
    "pipeline generation",
    "MQL",
    "cost per lead",
    "performance marketing",
    "account-based marketing",
    "ABM",
    "intent data",
    "lead nurture",
    "NineXFold",
  ],
  openGraph: {
    title: "Demand Generation System | NineXFold",
    description:
      "Enterprise demand engines that fill pipeline predictably — performance marketing, ABM, intent, and conversion systems.",
  },
};

const metricGroups = [
  {
    icon: <AlertTriangle size={22} strokeWidth={1.5} />,
    title: "Challenge",
    items: [
      ["EMPTY", "pipeline gaps every quarter end"],
      ["HIGH", "CPL climbing with diminishing returns"],
      ["LOW", "MQL-to-SQL conversion from unqualified volume"],
      ["1", "channel dependency creating fragile demand"],
      ["BLIND", "no clear attribution of demand to revenue"],
    ],
    footerTitle: "BUSINESS PAIN",
    footerText: "UNPREDICTABLE. EXPENSIVE.",
    showArrow: true,
  },

  {
    icon: <Cpu size={22} strokeWidth={1.5} />,
    title: "Solution",
    items: [
      ["FUNNEL", "Full-funnel demand create and capture strategy"],
      ["PAID", "Multi-channel performance marketing at scale"],
      ["ABM", "Account-based programmes with intent signals"],
      ["NURTURE", "Behavioural email and lead qualification flows"],
      ["ATTR", "Multi-touch attribution to pipeline and revenue"],
    ],
    footerTitle: "IMPLEMENTED SYSTEMS",
    footerText: "QUALIFIED. RESILIENT.",
    showArrow: false,
  },

  {
    icon: <TrendingUp size={22} strokeWidth={1.5} />,
    title: "Results",
    items: [
      ["$12M", "pipeline generated in first 12 months"],
      ["3.5X", "increase in monthly MQL volume"],
      ["42%", "reduction in cost per lead"],
      ["2X", "MQL-to-SQL conversion improvement"],
      ["65%", "of pipeline from diversified demand mix"],
      ["4M", "to predictable month-over-month demand"],
    ],
    footerTitle: "BUSINESS OUTCOMES",
    footerText: "MEASURABLE. SCALABLE.",
    showArrow: false,
  },
];

const cards = [
  {
    title: "Full-Funnel Demand Strategy",
    highlight:
      "Demand creation and demand capture, engineered together",
    description:
      "Most demand generation programmes fail because they only chase buyers who are already looking. We build dual-track strategies that simultaneously capture in-market demand through intent-driven channels while building brand-level awareness that creates future demand — ensuring your pipeline never runs dry regardless of market conditions.",
  },

  {
    title: "Performance Marketing at Enterprise Scale",
    highlight:
      "Every channel, every format, every audience — optimised continuously",
    description:
      "We design, build, and manage enterprise performance marketing programmes across Google Ads, Meta Ads, LinkedIn Ads, Programmatic Display, YouTube, TikTok, Bing, and Connected TV. Advanced audience segmentation, creative testing, bidding strategy optimisation, and cross-channel attribution are standard — giving you the most qualified pipeline your market's cost per acquisition will allow.",
  },

  {
    title: "Account-Based Marketing Infrastructure",
    highlight:
      "Target your most valuable accounts with coordinated precision",
    description:
      "We build complete ABM programmes for B2B enterprise clients — from ICP definition and target account selection through intent data layering, personalised multi-channel campaign execution, and sales alignment. Using platforms like 6sense, Demandbase, and Terminus, we coordinate every marketing and sales touch across your most strategic accounts to compress sales cycles and increase win rates.",
  },

  {
    title: "Intent Data & Buying Signal Intelligence",
    highlight:
      "Reach buyers at the exact moment they are ready",
    description:
      "We integrate third-party intent data platforms including Bombora, G2, and TechTarget to identify companies and individuals actively researching your category right now — then activate those signals across paid media, outbound sequences, and sales outreach to reach the right buyer at the precise moment their buying window is open.",
  },

  {
    title: "Lead Generation Infrastructure",
    highlight:
      "The system that turns attention into pipeline",
    description:
      "We build the complete lead generation infrastructure behind every campaign — conversion-optimised landing pages, high-value lead magnets, gated content assets, multi-step qualification flows, and seamless CRM integration — ensuring every click has the highest possible chance of becoming a qualified lead, and every lead is captured, scored, and routed to the right team instantly.",
  },

  {
    title: "Email Marketing & Lead Nurture Systems",
    highlight:
      "The highest ROI channel in demand generation, executed properly",
    description:
      "We build sophisticated multi-touch email nurture programmes that move prospects through the complete buyer journey — from early-stage awareness content through consideration-stage comparisons to decision-stage conversion offers. Behavioural triggers, progressive profiling, dynamic content personalisation, and continuous A/B testing are built into every programme from day one.",
  },

  {
    title: "Conversion Rate Optimisation",
    highlight:
      "More pipeline from the budget you already have",
    description:
      "We implement systematic CRO programmes across every conversion point in your demand generation funnel — landing pages, lead forms, ad creative, email subject lines, CTAs, and follow-up sequences. Using A/B testing, multivariate experiments, heatmapping, session recording, and user behaviour analysis, we continuously increase the percentage of attention that converts into qualified pipeline.",
  },

  {
    title: "Demand Generation Analytics & Attribution",
    highlight:
      "Know exactly which demand activity drives revenue",
    description:
      "We build the attribution and analytics infrastructure that connects every demand generation touchpoint to pipeline and revenue outcomes — giving marketing leadership the commercial evidence needed to justify investment, scale what works, and eliminate what does not. Multi-touch attribution, pipeline contribution reporting, and channel ROI analysis are standard deliverables.",
  },

  {
    title: "Partner & Channel Demand Generation",
    highlight:
      "Multiply your reach through strategic partners",
    description:
      "We build partner marketing programmes and channel demand generation strategies that extend your pipeline generation capacity through strategic alliances, co-marketing campaigns, reseller networks, and ecosystem partnerships — multiplying your reach without multiplying your marketing budget.",
  },

  {
    title: "Demand Generation Playbook & Scaling Framework",
    highlight:
      "Document what works, then scale it without breaking it",
    description:
      "We document your complete demand generation system in a comprehensive operational playbook — covering channel strategy, campaign templates, audience frameworks, testing protocols, and scaling criteria — creating the institutional knowledge your team needs to execute consistently and the blueprint your business needs to scale demand generation into new markets.",
  },
];

export default function Page() {
  return (
    <>
      <SubPageHero
        backgroundImage="/images/bg-image/Fold-bg.png"
        headline="Fill every pipeline, every quarter, with predictable demand"
        subheadline="Enterprise full-funnel demand generation infrastructure that delivers consistent, qualified pipeline at scale — without depending on referrals, seasonality, or a single channel.
                    We deploy performance marketing, account-based marketing, intent data targeting, lead nurture infrastructure, conversion optimisation, and email systems into one unified demand engine that generates, qualifies, and converts pipeline month after month with the predictability your business needs to plan, invest, and grow confidently."
      />
      <OurVision
        eyebrow="OUR VISION"
        leftTitle={[
          "PIPELINE",
          "THAT",
          "NEVER RUNS",
          "OUT.",
        ]}
        title="Demand generation so systematic it becomes a structural competitive advantage."
        description="Referrals run out. Seasons change. Single channels fail. Businesses that depend on any one source of pipeline are permanently fragile. We build demand generation infrastructure so diversified, so well-attributed, and so continuously optimised that your pipeline becomes a reliable, predictable, scalable asset — the kind that lets you plan 12 months ahead with confidence and invest in growth without fear."
        image="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1600&auto=format&fit=crop"
      />

      <ValuesSection
        eyebrow="OUR VALUES"
        title="The principles behind every demand system we build."
        description="Demand generation without principles produces volume without value. Every system we architect is grounded in these four commitments to ensure pipeline is qualified, resilient, and built to compound."
        quote="Pipeline Quality Above Pipeline Volume"
        quoteDescription="A full CRM of unqualified leads is worse than an empty one. Every demand system we build is designed to generate fewer, better, more qualified opportunities that your sales team can actually close."
        tags={[
          "Quality",
          "Qualification",
          "Precision",
        ]}
        image="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600&q=80"
      />
      <WhatWeDoSection cards={cards} />
      <ClientSuccessMetricsSection
        metricGroups={metricGroups}
      />
    </>
  );
}
