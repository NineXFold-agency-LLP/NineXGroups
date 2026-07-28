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
  title: "Contact Center Solutions | Omnichannel CCaaS & AI Agents | NineXConnect",
  description:
    "Next-generation contact center platforms that combine AI, cloud, and automation to transform customer service while reducing cost and improving agent productivity. Request a Contact Center Assessment.",
  keywords: [
    "contact center",
    "CCaaS",
    "Genesys",
    "Amazon Connect",
    "omnichannel",
    "IVR",
    "workforce management",
    "NineXConnect",
  ],
  openGraph: {
    title: "Contact Center Solutions | NineXConnect",
    description:
      "Contact centers that deliver exceptional CX — omnichannel routing, AI assist, and workforce optimization.",
  },
};

const metricGroups = [
  {
    icon: <BarChart3 size={22} strokeWidth={1.5} />,
    title: "Contact Center Transformation",
    items: [
      ["500+", "agents supported across multiple regions"],
      ["24/7", "AI-powered customer engagement"],
      ["95%", "first-contact resolution accuracy"],
      ["Omni-\nChannel", "unified customer communication platform"],
    ],
    footerTitle: "CUSTOMER EXPERIENCE",
    footerText: "CONNECTED. INTELLIGENT.",
    showArrow: true,
  },
  {
    icon: <SlidersHorizontal size={22} strokeWidth={1.5} />,
    title: "Operational Results",
    items: [
      ["45%", "reduction in average handling time"],
      ["60%", "faster customer response times"],
      ["35%", "lower operational support costs"],
      ["92%", "customer satisfaction score"],
    ],
    footerTitle: "MEASURABLE IMPACT",
    footerText: "AUTOMATED. SCALABLE.",
    showArrow: false,
  },
  {
    icon: <User size={22} strokeWidth={1.5} />,
    title: "Technology Stack",
    items: [
      ["AI\nAssistants", "automated customer support"],
      ["Workforce\nManagement", "agent scheduling and optimisation"],
      ["Speech\nAnalytics", "real-time conversation intelligence"],
      ["Cloud\nContact Center", "unified omnichannel operations"],
    ],
    footerTitle: "MODERN SUPPORT",
    footerText: "EFFICIENT. RELIABLE.",
    showArrow: false,
  },
];

const cards = [
  {
    title: "Cloud Contact Center (CCaaS) Implementation",
    highlight:
      "Genesys, Amazon Connect, Five9, NICE, and Talkdesk deployed for scale",
    description:
      "We implement cloud contact center platforms with omnichannel routing, IVR, agent desktop, CRM integration, and reporting — migrating from legacy PBX/ACD with minimal disruption and measurable service improvement.",
  },
  {
    title: "Unified Omnichannel Engagement",
    highlight:
      "Voice, chat, email, SMS, and social in one customer conversation",
    description:
      "We design omnichannel experiences so customers never repeat themselves — with contextual handoffs, unified history, and channel preference management across every interaction.",
  },
  {
    title: "AI Agent Assist & Virtual Agents",
    highlight:
      "Automate routine inquiries and coach agents in real time",
    description:
      "We deploy AI chatbots, voicebots, and agent-assist tools that surface knowledge, suggest responses, and resolve high-volume requests — escalating only when human judgment is required.",
  },
  {
    title: "IVR & Self-Service Design",
    highlight:
      "Deflect simple requests without frustrating customers",
    description:
      "We redesign IVR and digital self-service with intent-based menus, authentication, and knowledge-driven resolution so customers get answers faster and agents focus on complex work.",
  },
  {
    title: "Workforce Management & Quality",
    highlight:
      "Right-size staffing and coach with conversation intelligence",
    description:
      "We implement WFM forecasting, scheduling, quality management, and speech analytics — improving service levels while reducing overtime and inconsistent coaching.",
  },
  {
    title: "Contact Center Analytics & Optimization",
    highlight:
      "Turn every interaction into operational and CX insight",
    description:
      "We build dashboards for AHT, FCR, CSAT, occupancy, and containment — with continuous optimization programs that improve cost-to-serve and customer satisfaction together.",
  },
];

export default function Page() {
  return (
    <>
      <SubPageHero
        backgroundImage="/images/bg-image/Connect-bg.png"
        headline="Contact center solutions that turn support into competitive advantage"
        subheadline="Next-generation contact center platforms that combine AI, cloud, and automation to transform customer service and drive measurable business results — across all channels and engagement models."
      />
      <OurVision
        eyebrow="OUR VISION"
        leftTitle={[
          "ALWAYS.",
          "ON.",
          "24/7/365",
          "ALWAYS READY.",
        ]}
        title="Transform every customer conversation into a relationship-building moment."
        description="Contact centers are relationship centres and revenue drivers — not just cost centres. NineXConnect designs, deploys, and optimizes contact centers that deliver exceptional experiences while reducing costs and improving agent productivity."
        image="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1600&auto=format&fit=crop"
      />

      <ValuesSection
        eyebrow="OUR VALUES"
        title="The principles that power every contact center we deliver."
        description="Contact centers built without principles create fragmented experiences and agent frustration. Every project is grounded in scalability, security, and continuous improvement."
        quote="Every Interaction Shapes the Relationship"
        quoteDescription="We design contact center solutions where every interaction builds trust, demonstrates value, and strengthens the customer relationship."
        tags={[
          "Relationships",
          "Efficiency",
          "Results",
        ]}
        image="https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600&q=80"
      />
      <WhatWeDoSection cards={cards} />
      <ClientSuccessMetricsSection
        metricGroups={metricGroups}
      />
    </>
  );
}
