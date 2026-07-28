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
  title: "Digital Engineering | Product, Platform & Legacy Modernization | NineXDevOps",
  description:
    "Design, build, and operate digital products, platforms, and experiences that engage customers, empower employees, and drive business growth. Request an Engineering Assessment.",
  keywords: [
    "digital engineering",
    "product engineering",
    "platform engineering",
    "microservices",
    "legacy modernization",
    "React",
    "Kubernetes",
    "NineXDevOps",
  ],
  openGraph: {
    title: "Digital Engineering | NineXDevOps",
    description:
      "Digital products and platforms engineered for scale — product engineering, platform engineering, and modernization.",
  },
};

const metricGroups = [
  {
    icon: <BarChart3 size={22} strokeWidth={1.5} />,
    title: "Challenge",
    items: [
      ["15Y", "legacy monolithic application"],
      ["6M", "release cycles slowing innovation"],
      ["0", "ability to scale for peak shopping periods"],
      ["30%", "of development time spent on maintenance"],
      ["SHARE", "losing market share to agile competitors"],
    ],
    footerTitle: "ENGINEERING DEBT",
    footerText: "SLOW. FRAGILE.",
    showArrow: true,
  },
  {
    icon: <SlidersHorizontal size={22} strokeWidth={1.5} />,
    title: "Solution",
    items: [
      ["MSA", "Microservices architecture (200+ services)"],
      ["KAFKA", "Event-driven architecture"],
      ["K8S", "Kubernetes container orchestration"],
      ["NEXT", "React frontend with Next.js"],
      ["KONG", "API gateway"],
      ["OBS", "Observability with Datadog"],
    ],
    footerTitle: "ENGINEERING TRANSFORM",
    footerText: "MODERN. SCALABLE.",
    showArrow: false,
  },
  {
    icon: <User size={22} strokeWidth={1.5} />,
    title: "Results",
    items: [
      ["80%", "faster feature delivery (6 months to 2 weeks)"],
      ["10X", "scalability (50M concurrent peak users)"],
      ["99.99%", "uptime (from 99.5%)"],
      ["60%", "reduction in infrastructure costs"],
      ["50%", "faster page load times"],
      ["18M", "ROI realization"],
    ],
    footerTitle: "ENGINEERING IMPACT",
    footerText: "FASTER. RESILIENT.",
    showArrow: false,
  },
];

const cards = [
  {
    title: "Product Engineering",
    highlight:
      "From discovery and UX to cloud-native delivery",
    description:
      "We deliver product strategy, UX/UI design, frontend (React, Angular, Vue), backend (Node.js, Python, Java, .NET, Go), mobile (iOS, Android, React Native, Flutter), APIs, testing, and CI/CD operations. Outcomes: 50% faster time to market and 95%+ user satisfaction.",
  },
  {
    title: "Platform Engineering",
    highlight:
      "Internal developer platforms that remove friction",
    description:
      "We build self-service infrastructure, golden paths, developer portals, Terraform/CloudFormation, Kubernetes, service mesh, API gateways, and observability stacks — so teams ship faster with less operational burden. Results: 80% faster developer onboarding and 70% faster environment provisioning.",
  },
  {
    title: "Legacy Modernization",
    highlight:
      "Strangle monoliths into microservices without big-bang risk",
    description:
      "We modernize via microservices, containerization, API-first transformation, database modernization, frontend rewrites, and strangler-fig patterns — with phased migration and cutover plans. Outcomes: 60% better performance and 70% lower maintenance costs.",
  },
  {
    title: "Engineering Excellence",
    highlight:
      "Quality, CI/CD, observability, and secure delivery as defaults",
    description:
      "We embed code quality, TDD/BDD, automated testing, blue-green/canary deployments, logging/metrics/tracing, and AppSec practices — reducing production incidents by up to 80% and raising test automation coverage toward 90%.",
  },
  {
    title: "APIs & Microservices",
    highlight:
      "Composable services that scale independently",
    description:
      "We design REST and GraphQL APIs, bounded contexts, event-driven architectures, and service mesh patterns so products evolve quickly without the release bottlenecks of monolithic systems.",
  },
  {
    title: "Mobile & Web Applications",
    highlight:
      "Customer and employee experiences built for performance",
    description:
      "We build high-performance web and mobile applications with modern frameworks, design systems, accessibility, and progressive delivery — experiences that engage users and scale with demand.",
  },
];

export default function Page() {
  return (
    <>
      <SubPageHero
        backgroundImage="/images/bg-image/Devops-bg.png"
        headline="Digital products and platforms engineered for scale"
        subheadline="Design, build, and operate digital products, platforms, and experiences that engage customers, empower employees, and drive business growth."
      />
      <OurVision
        eyebrow="OUR VISION"
        leftTitle={[
          "DESIGN.",
          "BUILD.",
          "MODERNISE.",
          "SCALE.",
        ]}
        title="Digital engineering that combines product thinking with cloud-native delivery."
        description="Digital products need modern engineering practices — product strategy, UX design, cloud-native architecture, and agile delivery. NineXDevOps delivers digital engineering spanning customer products, internal platforms, mobile and web apps, APIs, microservices, and DevOps."
        image="https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1600&auto=format&fit=crop"
      />

      <ValuesSection
        eyebrow="OUR VALUES"
        title="The principles behind every digital product we engineer."
        description="Speed without quality creates debt. Every engagement balances velocity, reliability, and maintainability."
        quote="Ship Fast, Operate Reliably"
        quoteDescription="We build with CI/CD, observability, and platform foundations so teams can release often without sacrificing uptime or security."
        tags={[
          "Velocity",
          "Quality",
          "Platform",
        ]}
        image="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=600&q=80"
      />
      <WhatWeDoSection cards={cards} />
      <ClientSuccessMetricsSection
        metricGroups={metricGroups}
      />
    </>
  );
}
