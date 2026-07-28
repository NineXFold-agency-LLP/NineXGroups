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
  title: "ERP Enterprise Applications | SAP, Oracle, NetSuite & Dynamics | NineXDevOps",
  description:
    "Implement ERP, financial, supply chain, and HR systems that streamline operations, reduce costs, and enable global growth. Schedule an ERP Consultation with NineXDevOps.",
  keywords: [
    "ERP implementation",
    "SAP S/4HANA",
    "Oracle Cloud ERP",
    "NetSuite",
    "Dynamics 365",
    "supply chain",
    "HCM",
    "NineXDevOps",
  ],
  openGraph: {
    title: "ERP Enterprise Applications | NineXDevOps",
    description:
      "Enterprise systems that optimize operations at scale — finance, supply chain, manufacturing, and HCM.",
  },
};

const metricGroups = [
  {
    icon: <BarChart3 size={22} strokeWidth={1.5} />,
    title: "Challenge",
    items: [
      ["30Y", "legacy ERP across 45 facilities"],
      ["0", "real-time inventory visibility"],
      ["20D", "financial close process"],
      ["$200M", "annual supply chain disruption costs"],
      ["40%", "of IT budget consumed by maintenance"],
    ],
    footerTitle: "LEGACY ERP DEBT",
    footerText: "SLOW. FRAGMENTED.",
    showArrow: true,
  },
  {
    icon: <SlidersHorizontal size={22} strokeWidth={1.5} />,
    title: "Solution",
    items: [
      ["S/4", "SAP S/4HANA across global operations"],
      ["IBP", "SAP IBP for integrated business planning"],
      ["ARIBA", "SAP Ariba for procurement"],
      ["HCM", "SuccessFactors for human capital"],
      ["SAC", "Analytics with SAP Analytics Cloud"],
      ["18M", "implementation across 20 countries"],
    ],
    footerTitle: "ERP TRANSFORMATION",
    footerText: "UNIFIED. REAL-TIME.",
    showArrow: false,
  },
  {
    icon: <User size={22} strokeWidth={1.5} />,
    title: "Results",
    items: [
      ["$250M", "annual operational cost savings"],
      ["75%", "faster financial close (20 to 5 days)"],
      ["40%", "inventory reduction ($400M working capital)"],
      ["60%", "lower supply chain disruption costs"],
      ["80%", "reduction in IT maintenance costs"],
      ["12M", "ROI payback period"],
    ],
    footerTitle: "ERP IMPACT",
    footerText: "EFFICIENT. GLOBAL.",
    showArrow: false,
  },
];

const cards = [
  {
    title: "ERP Implementation",
    highlight:
      "SAP, Oracle, Dynamics, NetSuite, Infor, and IFS — configured for your industry",
    description:
      "We deliver ERP strategy, process reengineering, configuration, data migration, integration, customization, training, and post-go-live optimization across finance, supply chain, manufacturing, procurement, inventory, quality, assets, and projects. Outcomes: 40% lower operational costs and 60% faster financial close.",
  },
  {
    title: "Financial Management Systems",
    highlight:
      "Close faster with automated, compliant finance platforms",
    description:
      "We implement SAP S/4HANA Finance, Oracle Financials Cloud, NetSuite, Workday Financial Management, and Dynamics 365 Finance — GL, AP/AR, assets, cash, revenue recognition, FP&A, consolidation, and SOX/IFRS/GAAP controls. Results: 75% faster close and 90% journal automation.",
  },
  {
    title: "Supply Chain Management",
    highlight:
      "Plan, fulfill, and see inventory across the network",
    description:
      "We implement SAP IBP, Oracle SCM Cloud, Blue Yonder, Kinaxis, and o9 — demand/supply planning, WMS/TMS, S&OP, supplier collaboration, and control tower visibility. Outcomes: 30% lower inventory costs and 40% fewer stockouts.",
  },
  {
    title: "Human Capital Management (HCM)",
    highlight:
      "HR, talent, and payroll on modern cloud platforms",
    description:
      "We implement Workday HCM, SuccessFactors, Oracle HCM Cloud, ADP, and UKG — core HR, recruiting, learning, performance, compensation, time, and workforce analytics. Results: 60% less HR admin time and 50% faster recruiting cycles.",
  },
  {
    title: "Procurement & Sourcing Platforms",
    highlight:
      "Source smarter and control spend end to end",
    description:
      "We implement procurement and sourcing platforms that connect requisition, supplier management, contracts, and invoicing to your ERP — reducing maverick spend and improving supplier collaboration.",
  },
  {
    title: "Asset & Maintenance Management",
    highlight:
      "Keep critical assets reliable and maintenance costs predictable",
    description:
      "We implement asset and maintenance management modules that unify work orders, preventive maintenance, spare parts, and asset performance with your core ERP operations.",
  },
];

export default function Page() {
  return (
    <>
      <SubPageHero
        backgroundImage="/images/bg-image/DevOps-bg.png"
        headline="Enterprise systems that optimize operations at scale"
        subheadline="Implement ERP, financial, supply chain, and HR systems that streamline operations, reduce costs, and enable global growth."
      />
      <OurVision
        eyebrow="OUR VISION"
        leftTitle={[
          "ONE SYSTEM.",
          "EVERY",
          "OPERATION.",
          "FULL VISIBILITY.",
        ]}
        title="ERP as the operational backbone of the modern enterprise."
        description="Enterprise resource planning integrates finance, supply chain, manufacturing, HR, and operations into unified platforms. NineXDevOps implements ERP solutions from leading vendors, customized to your industry and operational requirements — with measurable cost, speed, and visibility outcomes."
        image="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1600&auto=format&fit=crop"
      />

      <ValuesSection
        eyebrow="OUR VALUES"
        title="The principles behind every ERP implementation we deliver."
        description="ERP go-live is necessary but not sufficient. We measure success by operational and commercial outcomes."
        quote="Business Outcome is the Only Success Metric"
        quoteDescription="Every configuration and process design choice is evaluated against cost reduction, efficiency, decision speed, and unified operational visibility."
        tags={[
          "Outcomes",
          "Scale",
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
