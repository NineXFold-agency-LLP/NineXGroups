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
  title: "Sales Automation | Outreach, Sequences & Pipeline Velocity | NineXConnect",
  description:
    "Design and implement sales automation and engagement platforms that multiply rep productivity, accelerate follow-up, and fill pipeline systematically. Request a Sales Automation Demo.",
  keywords: [
    "sales automation",
    "sales engagement",
    "Outreach",
    "SalesLoft",
    "cadence automation",
    "lead routing",
    "NineXConnect",
  ],
  openGraph: {
    title: "Sales Automation | NineXConnect",
    description:
      "Sales automation that accelerates pipeline — engagement platforms, sequences, and intelligent routing.",
  },
};

const metricGroups = [
  {
    icon: <BarChart3 size={22} strokeWidth={1.5} />,
    title: "Challenge",
    items: [
      ["2H", "average lead response time"],
      ["30%", "of leads never receiving follow-up"],
      ["SPREAD", "outreach living in individual inboxes"],
      ["LOW", "touches per prospect per week"],
      ["BLIND", "managers lacking activity visibility"],
    ],
    footerTitle: "SALES DRAG",
    footerText: "MANUAL. INCONSISTENT.",
    showArrow: true,
  },
  {
    icon: <SlidersHorizontal size={22} strokeWidth={1.5} />,
    title: "Solution",
    items: [
      ["ENG", "Outreach / SalesLoft engagement platform"],
      ["SEQ", "Multi-channel cadence automation"],
      ["ROUTE", "Intelligent lead routing rules"],
      ["CRM", "Bi-directional CRM activity sync"],
      ["AI", "Conversation intelligence coaching"],
      ["4M", "rollout and enablement"],
    ],
    footerTitle: "AUTOMATED SELLING",
    footerText: "SYSTEMATIC. SCALABLE.",
    showArrow: false,
  },
  {
    icon: <User size={22} strokeWidth={1.5} />,
    title: "Results",
    items: [
      ["70%", "reduction in manual data entry"],
      ["50%", "more prospect touches per rep"],
      ["35%", "increase in meeting conversion"],
      ["40%", "faster lead response times"],
      ["25%", "higher pipeline creation"],
      ["5M", "ROI realization"],
    ],
    footerTitle: "SALES IMPACT",
    footerText: "FASTER. CONSISTENT.",
    showArrow: false,
  },
];

const cards = [
  {
    title: "Sales Engagement Platforms",
    highlight:
      "Outreach, SalesLoft, Groove, and Apollo configured for your motion",
    description:
      "We implement sales engagement platforms with email cadences, call workflows, LinkedIn touches, task automation, and CRM sync — so every rep runs a consistent, measurable outbound and follow-up process.",
  },
  {
    title: "Multi-Channel Sequence Design",
    highlight:
      "The right message, on the right channel, at the right time",
    description:
      "We design and build multi-channel sequences across email, phone, and social — with personalization tokens, A/B testing, and trigger-based branching that adapt to prospect behavior.",
  },
  {
    title: "Lead Routing & Assignment Automation",
    highlight:
      "Get every lead to the right owner in seconds",
    description:
      "We implement LeanData and native CRM routing with territory, capacity, and round-robin rules — eliminating lead leakage and delayed response.",
  },
  {
    title: "Activity Capture & Pipeline Hygiene",
    highlight:
      "Automatic logging so CRM stays complete without admin burden",
    description:
      "We automate email, call, and meeting capture so managers get accurate activity and pipeline data without forcing reps into busywork.",
  },
  {
    title: "Meeting Scheduling & Calendar Automation",
    highlight:
      "Remove friction between interest and booked conversation",
    description:
      "We implement scheduling tools and workflows that convert replies into meetings instantly — with reminders, no-show recovery, and CRM opportunity creation.",
  },
  {
    title: "Sales Content & Enablement Automation",
    highlight:
      "Put the right collateral in every sequence and deal stage",
    description:
      "We connect content libraries, proposal tools, and engagement platforms so reps send approved, tracked assets — and leadership sees what content actually converts.",
  },
];

export default function Page() {
  return (
    <>
      <SubPageHero
        backgroundImage="/images/bg-image/Connect-bg.png"
        headline="Sales automation that multiplies touches and closes gaps in follow-up"
        subheadline="We design and implement sales engagement and automation platforms that give every rep systematic outreach, instant routing, and CRM-synced activity — so pipeline fills consistently without adding headcount."
      />
      <OurVision
        eyebrow="OUR VISION"
        leftTitle={[
          "REACH.",
          "ENGAGE.",
          "CONVERT.",
          "REPEAT.",
        ]}
        title="A sales motion that runs as a system, not a collection of personal habits."
        description="NineXConnect builds sales automation ecosystems — engagement platforms, cadences, routing, activity capture, and enablement — that transform inconsistent outreach into predictable pipeline creation and faster conversion."
        image="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1600&auto=format&fit=crop"
      />

      <ValuesSection
        eyebrow="OUR VALUES"
        title="The principles behind every sales automation we deploy."
        description="Automation without relevance becomes spam. Every sequence and workflow is designed for buyer experience and measurable conversion."
        quote="Systemize the Follow-Up"
        quoteDescription="The deals you lose are often the ones you never followed up. We build automation that makes persistence consistent — and personalization scalable."
        tags={[
          "Velocity",
          "Consistency",
          "Pipeline",
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
