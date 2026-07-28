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
  title: "Sales Systems | CRM, CPQ & Sales Automation | NineXFold",
  description:
    "Implement CRM and sales automation platforms that give reps the tools they need, managers the visibility they require, and executives the confidence they demand. Request a Sales Systems Demo.",
  keywords: [
    "sales systems",
    "CRM implementation",
    "Salesforce Sales Cloud",
    "sales automation",
    "CPQ",
    "sales engagement",
    "Gong",
    "NineXFold",
  ],
  openGraph: {
    title: "Sales Systems | NineXFold",
    description:
      "Sales systems that accelerate pipeline and close deals faster — CRM, automation, CPQ, and sales intelligence.",
  },
};

const metricGroups = [
  {
    icon: <AlertTriangle size={22} strokeWidth={1.5} />,
    title: "Challenge",
    items: [
      ["40%", "user adoption on legacy CRM"],
      ["85%", "of sales data living in spreadsheets"],
      ["0", "visibility into pipeline health"],
      ["3-5D", "manual quote process"],
      ["SLOW", "losing deals to faster competitors"],
    ],
    footerTitle: "SALES FRICTION",
    footerText: "MANUAL. INVISIBLE.",
    showArrow: true,
  },

  {
    icon: <Cpu size={22} strokeWidth={1.5} />,
    title: "Solution",
    items: [
      ["SFDC", "Salesforce Sales Cloud implementation"],
      ["CPQ", "Salesforce CPQ for configure-price-quote"],
      ["ROUTE", "LeanData for lead routing and assignment"],
      ["GONG", "Conversation intelligence"],
      ["ERP", "Custom integration with ERP system"],
    ],
    footerTitle: "SALES STACK",
    footerText: "AUTOMATED. CONNECTED.",
    showArrow: false,
  },

  {
    icon: <TrendingUp size={22} strokeWidth={1.5} />,
    title: "Results",
    items: [
      ["95%", "user adoption within 60 days"],
      ["80%", "time savings on quote generation"],
      ["45%", "increase in pipeline visibility"],
      ["30%", "shorter sales cycles"],
      ["$150M", "incremental revenue in year one"],
      ["4M", "ROI realization"],
    ],
    footerTitle: "BUSINESS OUTCOMES",
    footerText: "FASTER. SCALABLE.",
    showArrow: false,
  },
];

const cards = [
  {
    title: "CRM Implementation & Optimization",
    highlight:
      "Salesforce, Dynamics 365, and HubSpot built around how your team sells",
    description:
      "We implement Sales Cloud, CPQ, Revenue Cloud, Dynamics 365 Sales, and HubSpot Sales Hub — with custom objects, process automation, data migration, mobile optimization, user training, and change management. Outcomes: 50% higher sales productivity, 95%+ adoption, and 60% less admin time.",
  },
  {
    title: "Sales Automation & Engagement",
    highlight:
      "More touches, faster follow-up, less manual work",
    description:
      "We implement Outreach, SalesLoft, Groove, and related platforms for email cadences, multi-channel outreach, activity capture, meeting scheduling, and content tracking — plus intelligent lead routing, nurture sequences, and opportunity stage workflows. Results: 70% less manual data entry and 35% higher meeting conversion.",
  },
  {
    title: "Configure-Price-Quote (CPQ)",
    highlight:
      "Accurate quotes in hours, not days",
    description:
      "We implement Salesforce CPQ, DealHub, Apttus, and related CPQ systems — product catalogs, pricing rules, discount approvals, quote templates, proposal automation, and ERP/billing integration. Guided selling and quote-to-contract automation deliver 60% faster quotes and 95% quote accuracy.",
  },
  {
    title: "Sales Intelligence & Enrichment",
    highlight:
      "Know who to call, when to call, and why they will buy",
    description:
      "We implement ZoomInfo, LinkedIn Sales Navigator, 6sense, and enrichment stacks — account/contact enrichment, intent data, firmographics, technographics, buying signals, and competitive alerts. Outcomes: 50% more qualified leads identified and 30% shorter sales cycles.",
  },
  {
    title: "Conversation & Revenue Intelligence",
    highlight:
      "Learn from every call and forecast with confidence",
    description:
      "We deploy Gong.io, Chorus, Clari, and related platforms so every conversation becomes coaching data, every deal risk is visible early, and managers get pipeline truth — not optimistic guesses — without adding reporting overhead.",
  },
  {
    title: "Implementation Methodology",
    highlight:
      "Discovery, design, build, and deploy with adoption built in",
    description:
      "Our phased approach covers discovery (2–3 weeks), design (3–4 weeks), build (6–8 weeks), and deploy with training, hypercare, and optimization (2–3 weeks) — so go-live is not the finish line; measurable productivity is.",
  },
];

export default function Page() {
  return (
    <>
      <SubPageHero
        backgroundImage="/images/bg-image/Fold-bg.png"
        headline="Sales systems that accelerate pipeline and close deals faster"
        subheadline="Implement CRM and sales automation platforms that give reps the tools they need, managers the visibility they require, and executives the confidence they demand."
      />
      <OurVision
        eyebrow="OUR VISION"
        leftTitle={[
          "PIPELINE.",
          "VELOCITY.",
          "CLOSE.",
          "SCALE.",
        ]}
        title="Sales technology that turns productivity into a system."
        description="Modern B2B selling needs systems that automate manual work, surface insights, guide rep behavior, and give real-time pipeline visibility. NineXFold implements CRM, sales engagement, CPQ, CLM, enrichment, and conversation intelligence ecosystems that transform sales effectiveness."
        image="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1600&auto=format&fit=crop"
      />

      <ValuesSection
        eyebrow="OUR VALUES"
        title="The principles behind every sales system we implement."
        description="Sales technology without adoption fails. Every engagement prioritizes process fit, user experience, and measurable velocity."
        quote="Adoption Before Complexity"
        quoteDescription="We configure systems sellers will actually use — then layer automation and intelligence. The best sales stack is the one that gets used every day."
        tags={[
          "Adoption",
          "Velocity",
          "Visibility",
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
