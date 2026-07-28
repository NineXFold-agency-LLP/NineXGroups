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
  title: "CX Systems | CDP, Journey Orchestration & Contact Center | NineXDevOps",
  description:
    "Implement customer experience platforms that orchestrate journeys, personalize interactions, and turn service into competitive advantage. Schedule a CX Assessment with NineXDevOps.",
  keywords: [
    "CX systems",
    "customer experience",
    "CDP",
    "journey orchestration",
    "contact center",
    "Salesforce Service Cloud",
    "Qualtrics",
    "NineXDevOps",
  ],
  openGraph: {
    title: "CX Systems | NineXDevOps",
    description:
      "Customer experiences that build loyalty and drive growth — CDP, journeys, contact centers, and VoC.",
  },
};

const metricGroups = [
  {
    icon: <BarChart3 size={22} strokeWidth={1.5} />,
    title: "Challenge",
    items: [
      ["200+", "fragmented systems holding customer data"],
      ["30", "countries without a unified customer view"],
      ["SILO", "inconsistent experiences across channels"],
      ["35", "NPS below industry average of 45"],
      ["50M", "customers needing connected CX"],
    ],
    footerTitle: "CX FRAGMENTATION",
    footerText: "DISCONNECTED. INCONSISTENT.",
    showArrow: true,
  },
  {
    icon: <SlidersHorizontal size={22} strokeWidth={1.5} />,
    title: "Solution",
    items: [
      ["CDP", "Salesforce Data Cloud for unified profiles"],
      ["SVC", "Service Cloud across 30 countries"],
      ["JOURNEY", "Adobe Journey Optimizer personalization"],
      ["CC", "Genesys Cloud omnichannel contact centers"],
      ["VOC", "Qualtrics customer feedback"],
      ["AI", "Chatbots handling 60% of inquiries"],
    ],
    footerTitle: "CX PLATFORM",
    footerText: "UNIFIED. ORCHESTRATED.",
    showArrow: false,
  },
  {
    icon: <User size={22} strokeWidth={1.5} />,
    title: "Results",
    items: [
      ["75", "NPS (up 40 points from 35)"],
      ["$200M", "incremental cross-sell revenue"],
      ["30%", "reduction in customer acquisition costs"],
      ["50%", "decrease in support costs"],
      ["90%", "satisfaction with digital experiences"],
      ["4.5", "mobile app rating (from 2.8)"],
    ],
    footerTitle: "CX IMPACT",
    footerText: "LOYAL. MEASURABLE.",
    showArrow: false,
  },
];

const cards = [
  {
    title: "Customer Data Platforms (CDP)",
    highlight:
      "One 360° customer profile powering every experience",
    description:
      "We implement Segment, Adobe Real-Time CDP, Salesforce Data Cloud, Treasure Data, and Tealium — unified profiles, identity resolution, real-time ingestion, segmentation, consent management, and activation to marketing and sales tools. Outcomes: 100% unified customer view and 50% fewer duplicate records.",
  },
  {
    title: "Journey Orchestration & Personalization",
    highlight:
      "Cross-channel journeys that respond in real time",
    description:
      "We implement Adobe Journey Optimizer, Salesforce Marketing Cloud Journey Builder, Braze, Iterable, and MoEngage — behavioral triggers, next-best-action, dynamic content, and journey analytics. Results: 45% higher engagement and 40% better retention.",
  },
  {
    title: "Contact Center & Omnichannel Service",
    highlight:
      "Voice, chat, email, and social in one agent workspace",
    description:
      "We implement Salesforce Service Cloud, Genesys Cloud CX, Amazon Connect, Five9, NICE CXone, and Zendesk — omnichannel routing, IVR, self-service, knowledge, AI chatbots, WFM, and quality management. Outcomes: 50% lower handle time and 90%+ CSAT.",
  },
  {
    title: "Customer Feedback & Experience Management",
    highlight:
      "Closed-loop VoC that improves NPS and retention",
    description:
      "We implement Qualtrics XM, Medallia, InMoment, and related platforms — NPS/CSAT/CES, text analytics, journey-based feedback, closed-loop workflows, and executive dashboards. Typical results: 30-point NPS improvement and 80% closed-loop completion.",
  },
  {
    title: "Service Automation & Case Management",
    highlight:
      "Resolve faster with intelligent routing and automation",
    description:
      "We design case management, escalation, knowledge, and self-service automation so customers get answers without waiting — and agents get full context on every interaction.",
  },
  {
    title: "Loyalty & Engagement Platforms",
    highlight:
      "Turn satisfaction into lifetime value and advocacy",
    description:
      "We implement loyalty and engagement platforms that reward desired behaviors, personalize offers, and connect retention programs to your CDP and journey stack for measurable LTV lift.",
  },
];

export default function Page() {
  return (
    <>
      <SubPageHero
        backgroundImage="/images/bg-image/Devops-bg.png"
        headline="Customer experiences that build loyalty and drive growth"
        subheadline="Implement customer experience platforms that orchestrate journeys, personalize interactions, and turn service into competitive advantage."
      />
      <OurVision
        eyebrow="OUR VISION"
        leftTitle={[
          "UNIFY.",
          "ORCHESTRATE.",
          "PERSONALISE.",
          "RETAIN.",
        ]}
        title="CX technology that makes every customer feel known."
        description="Exceptional customer experience needs unified data, intelligent automation, and seamless orchestration across every touchpoint. NineXDevOps implements CX platforms spanning CDP, journey orchestration, contact centers, service automation, and experience management."
        image="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1600&auto=format&fit=crop"
      />

      <ValuesSection
        eyebrow="OUR VALUES"
        title="The principles behind every CX system we build."
        description="CX technology without a data foundation creates fragmented experiences at scale. Every engagement starts with unified profiles and measurable outcomes."
        quote="Data is the Foundation of Every Experience"
        quoteDescription="Personalisation without data is guesswork. We build CDP, identity, and event infrastructure before journey and contact center layers."
        tags={[
          "Data",
          "Orchestration",
          "Loyalty",
        ]}
        image="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600&q=80"
      />
      <WhatWeDoSection cards={cards} />
      <ClientSuccessMetricsSection
        metricGroups={metricGroups}
      />
    </>
  );
}
