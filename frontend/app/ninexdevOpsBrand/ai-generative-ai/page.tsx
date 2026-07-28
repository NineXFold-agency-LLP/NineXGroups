import type { Metadata } from "next";
import SubPageHero from "@/components/sections/common/SubPageHero";
import OverviewSection from "@/components/sections/common/OverviewSection";
import ClientSuccessMetricsSection from "../ClientSuccessMetricsSection";
import {
  ShieldAlert,
  Bot,
  Brain,
} from "lucide-react";

export const metadata: Metadata = {
  title: "AI & Generative AI | Enterprise AI Strategy, ML & GenAI | NineXDevOps",
  description:
    "Implement AI solutions that automate operations, enhance decision-making, and create new capabilities — with enterprise-grade security, governance, and compliance. Schedule an AI Assessment.",
  keywords: [
    "enterprise AI",
    "generative AI",
    "LLM",
    "MLOps",
    "OpenAI",
    "Anthropic",
    "custom ML",
    "AI governance",
    "NineXDevOps",
  ],
  openGraph: {
    title: "AI & Generative AI | NineXDevOps",
    description:
      "Enterprise AI from strategy to production — custom ML, GenAI, agents, MLOps, and governance.",
  },
};

const metricGroups = [
  {
    icon: <ShieldAlert size={22} strokeWidth={1.5} />,
    title: "Challenge",
    items: [
      ["10M", "claims processed annually"],
      ["15D", "average claim processing timeline"],
      ["40%", "claims requiring manual review"],
      ["$500M", "annual claims processing costs"],
      ["LOW", "customer satisfaction impacted by delays"],
    ],
    footerTitle: "CLAIMS BOTTLENECKS",
    footerText: "MANUAL. INEFFICIENT.",
    showArrow: true,
  },

  {
    icon: <Bot size={22} strokeWidth={1.5} />,
    title: "Solution",
    items: [
      ["CV", "computer vision damage assessment"],
      ["NLP", "document classification and extraction"],
      ["ML", "fraud detection intelligence models"],
      ["AUTO", "80% automated decision-making"],
      ["HITL", "human review for complex cases"],
      ["MLOPS", "continuous AI model optimization"],
    ],
    footerTitle: "AI AUTOMATION",
    footerText: "INTELLIGENT. SCALABLE.",
    showArrow: false,
  },

  {
    icon: <Brain size={22} strokeWidth={1.5} />,
    title: "Results",
    items: [
      ["90%", "reduction in processing time"],
      ["$300M", "annual operational savings"],
      ["80%", "claims fully automated"],
      ["95%", "customer satisfaction achieved"],
      ["60%", "reduction in fraud losses"],
      ["8M", "ROI realization timeline"],
    ],
    footerTitle: "AI IMPACT",
    footerText: "FASTER. SMARTER.",
    showArrow: false,
  },
];

export default function Page() {
  return (
    <>
      <SubPageHero
        backgroundImage="/images/bg-image/Devops-bg.png"
        headline="Enterprise AI from strategy to production deployment"
        subheadline="Implement AI solutions that automate operations, enhance decision-making, and create new capabilities — with enterprise-grade security, governance, and compliance."
      />
      <OverviewSection
        eyebrow="OVERVIEW"
        leftTitle={[
          "STRATEGY.",
          "BUILD.",
          "DEPLOY.",
          "GOVERN.",
        ]}
        title="Enterprise AI spanning strategy, custom models, generative applications, and MLOps."
        description="NineXDevOps implements enterprise AI solutions powered by partnerships with OpenAI, Anthropic, Google, Microsoft, and NVIDIA — from opportunity assessment and roadmaps through custom ML, RAG and LLM applications, AI agent platforms, and responsible AI governance."
        implementationTitle="What We Build:"
        implementations={[
          "AI strategy and implementation roadmaps",
          "Custom AI and ML solutions",
          "Generative AI applications",
          "AI agent platforms",
          "AI/ML operations (MLOps)",
          "AI governance frameworks",
        ]}
        image="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1600&auto=format&fit=crop"
      />
      <ClientSuccessMetricsSection
        metricGroups={metricGroups}
      />
    </>
  );
}
