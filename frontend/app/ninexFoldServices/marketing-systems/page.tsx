import type { Metadata } from "next";
import SubPageHero from "@/components/sections/common/SubPageHero";
import ClientSuccessMetricsSection from "../ClientSuccessMetricsSection";
import WhatWeDoSection from "../WhatWeDo";
import OurVision from "@/app/ninexFoldServices/OurVision";
import ValuesSection from "@/app/ninexFoldServices/ValuesSection";
import {
  Boxes,
  Megaphone,
  LineChart,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Marketing Systems | Marketing Automation, ABM & Attribution | NineXFold",
  description:
    "Build integrated marketing stacks that automate campaigns, nurture leads, prove attribution, and align marketing with revenue outcomes. Explore Marketing Systems with NineXFold.",
  keywords: [
    "marketing systems",
    "marketing automation",
    "Marketo",
    "HubSpot",
    "ABM",
    "marketing attribution",
    "marketing operations",
    "NineXFold",
  ],
  openGraph: {
    title: "Marketing Systems | NineXFold",
    description:
      "Marketing technology that generates pipeline and proves ROI — automation, ABM, attribution, and MOps.",
  },
};

const metricGroups = [
  {
    icon: <Boxes size={22} strokeWidth={1.5} />,
    title: "Challenge",
    items: [
      ["10+", "fragmented tools across marketing stack"],
      ["0", "attribution visibility across campaigns"],
      ["30%", "qualified lead acceptance rate"],
      ["40%", "team time lost to manual processes"],
      ["GAP", "misalignment between marketing and sales"],
    ],
    footerTitle: "MARKETING CHAOS",
    footerText: "DISCONNECTED. INEFFICIENT.",
    showArrow: true,
  },

  {
    icon: <Megaphone size={22} strokeWidth={1.5} />,
    title: "Solution",
    items: [
      ["AUTO", "Marketo nurture campaign automation"],
      ["ROI", "Bizible multi-touch attribution"],
      ["ABM", "6sense intent and account intelligence"],
      ["SYNC", "LeanData lead routing and matching"],
      ["CRM", "Bi-directional Salesforce integration"],
      ["LIVE", "Executive marketing dashboards"],
    ],
    footerTitle: "CONNECTED PLATFORM",
    footerText: "INTELLIGENT. AUTOMATED.",
    showArrow: false,
  },

  {
    icon: <LineChart size={22} strokeWidth={1.5} />,
    title: "Results",
    items: [
      ["250%", "increase in pipeline contribution"],
      ["75%", "improvement in lead quality"],
      ["$200M", "pipeline generated in first year"],
      ["5:1", "measurable marketing ROI"],
      ["80%", "time savings through automation"],
      ["95%", "sales-marketing alignment score"],
    ],
    footerTitle: "MARKETING IMPACT",
    footerText: "SCALABLE. MEASURABLE.",
    showArrow: false,
  },
];

const cards = [
  {
    title: "Marketing Automation",
    highlight:
      "Nurture, score, and convert leads without manual campaign chaos",
    description:
      "We implement Marketo Engage, Salesforce Pardot, HubSpot Marketing Hub, Eloqua, and ActiveCampaign — email automation, drip campaigns, lead scoring, forms and landing pages, webinars, A/B testing, and CRM sync. Outcomes: 60% more MQLs, 40% better lead-to-opportunity conversion, and 70% time savings.",
  },
  {
    title: "Account-Based Marketing (ABM)",
    highlight:
      "Engage target accounts with intent-driven, personalized programs",
    description:
      "We implement 6sense, Demandbase, Terminus, RollWorks, and Metadata.io — ICP definition, target account lists, intent signals, account advertising, engagement scoring, and sales-marketing alignment. Results: 85% higher target account engagement and 3X ROI on ABM investment.",
  },
  {
    title: "Marketing Attribution & Analytics",
    highlight:
      "Prove pipeline contribution and optimize every channel",
    description:
      "We implement Bizible (Marketo Measure), LeanData Attribution, Dreamdata, HockeyStack, and related stacks — multi-touch models, campaign taxonomy, ROI reporting, CAC, and executive dashboards. Outcomes: 100% ROI visibility, 40% better budget allocation, and 30% lower CAC.",
  },
  {
    title: "Marketing Operations (MOps)",
    highlight:
      "The operating system behind scalable, compliant marketing",
    description:
      "We architect MarTech stacks, integrations, data hygiene, campaign operations, GDPR/CCPA compliance, vendor management, and reporting — so campaigns launch faster with cleaner data. Results: 70% fewer manual processes and 50% faster campaign deployment.",
  },
  {
    title: "Content, CMS & Digital Asset Management",
    highlight:
      "Content and assets that fuel every campaign channel",
    description:
      "We implement CMS and DAM platforms including WordPress, Contentful, Drupal, Adobe Experience Manager, Bynder, and Brandfolder — so creative, web, and campaign teams share governed assets and publish with speed and brand consistency.",
  },
  {
    title: "CDP & Marketing Data Infrastructure",
    highlight:
      "Unified customer and prospect data for personalization and measurement",
    description:
      "We implement Segment, mParticle, Tealium, Treasure Data, and analytics platforms (GA4, Adobe Analytics, Mixpanel, Amplitude) so marketing has one reliable data foundation for activation, attribution, and growth decisions.",
  },
];

export default function Page() {
  return (
    <>
      <SubPageHero
        backgroundImage="/images/bg-image/Fold-bg.png"
        headline="Marketing technology that generates pipeline and proves ROI"
        subheadline="Build integrated marketing stacks that automate campaigns, nurture leads, prove attribution, and align marketing with revenue outcomes."
      />
      <OurVision
        eyebrow="OUR VISION"
        leftTitle={[
          "ATTRACT.",
          "NURTURE.",
          "PROVE.",
          "SCALE.",
        ]}
        title="Marketing that leadership can measure and trust."
        description="Modern marketing needs technology spanning automation, advertising, content, analytics, and ABM. NineXFold implements marketing stacks that generate measurable pipeline contribution and prove marketing ROI — from Marketo and HubSpot to 6sense, attribution platforms, and executive dashboards."
        image="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1600&auto=format&fit=crop"
      />

      <ValuesSection
        eyebrow="OUR VALUES"
        title="The principles behind every marketing system we build."
        description="Marketing without commercial accountability is just spend. Every system we architect is measurable, scalable, and aligned to revenue."
        quote="Attribution Before Amplification"
        quoteDescription="We never scale what we cannot measure. Every campaign and channel has measurement built in before budget is amplified."
        tags={[
          "Measurement",
          "Accountability",
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
