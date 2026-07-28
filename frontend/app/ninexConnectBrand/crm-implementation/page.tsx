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
  title: "CRM Implementation | Salesforce, Dynamics 365 & HubSpot | NineXConnect",
  description:
    "Enterprise CRM implementation and integration that unifies sales, marketing, and service data into a single source of customer truth. Request a CRM Assessment with NineXConnect.",
  keywords: [
    "CRM implementation",
    "Salesforce",
    "Dynamics 365",
    "HubSpot",
    "CRM integration",
    "data migration",
    "NineXConnect",
  ],
  openGraph: {
    title: "CRM Implementation | NineXConnect",
    description:
      "CRM platforms implemented for adoption, integration, and measurable sales productivity.",
  },
};

const metricGroups = [
  {
    icon: <BarChart3 size={22} strokeWidth={1.5} />,
    title: "Challenge",
    items: [
      ["35%", "CRM user adoption on legacy system"],
      ["3", "disconnected sales and service databases"],
      ["60%", "of customer data incomplete or duplicate"],
      ["MANUAL", "reporting consuming days each month"],
      ["GAP", "no 360° view across products"],
    ],
    footerTitle: "CRM FRICTION",
    footerText: "FRAGMENTED. UNUSED.",
    showArrow: true,
  },
  {
    icon: <SlidersHorizontal size={22} strokeWidth={1.5} />,
    title: "Solution",
    items: [
      ["SFDC", "Salesforce Sales & Service Cloud"],
      ["FLOW", "Process automation and guided selling"],
      ["MIG", "Clean data migration from legacy CRM"],
      ["ERP", "Integration with ERP and billing"],
      ["TRAIN", "Role-based enablement and adoption"],
      ["6M", "implementation and hypercare"],
    ],
    footerTitle: "CRM PLATFORM",
    footerText: "UNIFIED. ADOPTED.",
    showArrow: false,
  },
  {
    icon: <User size={22} strokeWidth={1.5} />,
    title: "Results",
    items: [
      ["95%", "user adoption within 60 days"],
      ["50%", "increase in sales productivity"],
      ["70%", "reduction in manual reporting"],
      ["40%", "faster new-hire ramp time"],
      ["1", "unified customer record"],
      ["5M", "ROI realization"],
    ],
    footerTitle: "CRM IMPACT",
    footerText: "CONNECTED. MEASURABLE.",
    showArrow: false,
  },
];

const cards = [
  {
    title: "Salesforce Implementation",
    highlight:
      "Sales Cloud, Service Cloud, and Revenue Cloud configured to your process",
    description:
      "We implement Salesforce with custom objects, Flow/Apex automation, Lightning experience, AppExchange evaluation, mobile optimization, and post-launch optimization — so the CRM mirrors how your teams actually sell and serve.",
  },
  {
    title: "Microsoft Dynamics 365 & HubSpot",
    highlight:
      "Right-fit CRM for Microsoft-centric or growth-stage organizations",
    description:
      "We implement Dynamics 365 Sales/Customer Service with Power Platform, and HubSpot Sales/Service Hub with custom properties, pipelines, and API integrations — matched to your maturity and stack.",
  },
  {
    title: "CRM Data Migration & Quality",
    highlight:
      "Move every account, contact, and history — cleanly",
    description:
      "We plan and execute legacy CRM migrations with deduplication, enrichment, mapping, validation, and cutover support so go-live starts with trustworthy data, not spreadsheet chaos.",
  },
  {
    title: "CRM Integration Architecture",
    highlight:
      "Connect CRM to ERP, marketing automation, CPQ, and support systems",
    description:
      "We build bi-directional integrations so customer context is complete everywhere — reducing double entry and giving every team the same source of truth.",
  },
  {
    title: "Process Design & Automation",
    highlight:
      "Lead-to-cash workflows that enforce best practice without bureaucracy",
    description:
      "We map sales and service processes, then automate stage progression, approvals, tasking, and SLAs so reps spend time selling — not updating fields.",
  },
  {
    title: "Adoption, Training & Change Management",
    highlight:
      "The difference between a CRM that ships and a CRM that sticks",
    description:
      "We deliver role-based training, champions networks, adoption dashboards, and 90-day hypercare so usage hits 95%+ and stays there.",
  },
];

export default function Page() {
  return (
    <>
      <SubPageHero
        backgroundImage="/images/bg-image/Connect-bg.png"
        headline="CRM implementation that teams adopt and leadership trusts"
        subheadline="Enterprise CRM implementation and integration services that unify sales, marketing, service, and operational data into a single source of customer truth — on Salesforce, Dynamics 365, HubSpot, and related platforms."
      />
      <OurVision
        eyebrow="OUR VISION"
        leftTitle={[
          "ONE",
          "CUSTOMER.",
          "ONE",
          "SYSTEM.",
        ]}
        title="A CRM that becomes the operating system for customer relationships."
        description="NineXConnect designs and implements CRM solutions that sales, service, and marketing teams actually use — integrating CRM with ERP, marketing automation, e-commerce, and operational systems to deliver seamless customer experiences and data-driven outcomes."
        image="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1600&auto=format&fit=crop"
      />

      <ValuesSection
        eyebrow="OUR VALUES"
        title="The principles behind every CRM we implement."
        description="CRM without adoption is shelfware. Every engagement prioritizes process fit, data quality, and measurable productivity."
        quote="Adoption Is the Real Go-Live"
        quoteDescription="We measure success by daily usage and pipeline visibility — not by whether the system was technically deployed."
        tags={[
          "Adoption",
          "Integration",
          "Clarity",
        ]}
        image="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&q=80"
      />
      <WhatWeDoSection cards={cards} />
      <ClientSuccessMetricsSection
        metricGroups={metricGroups}
      />
    </>
  );
}
