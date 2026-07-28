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
  title: "DevOps & Automation | CI/CD, Platform Engineering & SRE | NineXDevOps",
  description:
    "Accelerate software delivery with CI/CD pipelines, Infrastructure as Code, container platforms, and SRE practices that cut release cycles and improve reliability. Request a DevOps Assessment.",
  keywords: [
    "DevOps",
    "CI/CD",
    "Infrastructure as Code",
    "Kubernetes",
    "GitOps",
    "SRE",
    "automation",
    "NineXDevOps",
  ],
  openGraph: {
    title: "DevOps & Automation | NineXDevOps",
    description:
      "Enterprise DevOps automation that accelerates delivery — CI/CD, IaC, containers, and SRE.",
  },
};

const metricGroups = [
  {
    icon: <BarChart3 size={22} strokeWidth={1.5} />,
    title: "Challenge",
    items: [
      ["6M", "average release cycle slowing innovation"],
      ["40%", "of releases requiring emergency hotfixes"],
      ["MANUAL", "infrastructure provisioning taking weeks"],
      ["SILO", "dev, QA, and ops working in isolation"],
      ["LOW", "deployment confidence and rollback risk"],
    ],
    footerTitle: "DELIVERY FRICTION",
    footerText: "SLOW. FRAGILE.",
    showArrow: true,
  },
  {
    icon: <SlidersHorizontal size={22} strokeWidth={1.5} />,
    title: "Solution",
    items: [
      ["CICD", "End-to-end CI/CD with automated testing"],
      ["IaC", "Terraform and GitOps infrastructure"],
      ["K8S", "Kubernetes platform standardization"],
      ["OBS", "Observability with Prometheus and Datadog"],
      ["SRE", "SLO-driven reliability practices"],
      ["12M", "enterprise DevOps transformation"],
    ],
    footerTitle: "DEVOPS PLATFORM",
    footerText: "AUTOMATED. RELIABLE.",
    showArrow: false,
  },
  {
    icon: <User size={22} strokeWidth={1.5} />,
    title: "Results",
    items: [
      ["10X", "faster release frequency"],
      ["80%", "reduction in deployment failures"],
      ["90%", "test automation coverage"],
      ["99.99%", "uptime on critical services"],
      ["70%", "faster environment provisioning"],
      ["9M", "ROI realization"],
    ],
    footerTitle: "DEVOPS IMPACT",
    footerText: "FASTER. STABLE.",
    showArrow: false,
  },
];

const cards = [
  {
    title: "CI/CD Pipeline Engineering",
    highlight:
      "Ship from commit to production with confidence",
    description:
      "We design and implement CI/CD pipelines using GitHub Actions, GitLab CI, Jenkins, Azure DevOps, and CircleCI — automated build, test, security scanning, artifact management, and progressive delivery (blue-green, canary). Outcomes: dramatically shorter lead time and fewer failed deployments.",
  },
  {
    title: "Infrastructure as Code & GitOps",
    highlight:
      "Every environment reproducible, versioned, and reviewable",
    description:
      "We implement Terraform, Pulumi, CloudFormation, Ansible, and GitOps with Argo CD / Flux — modular IaC, policy-as-code, secret management, and automated drift detection so infrastructure changes are as disciplined as application code.",
  },
  {
    title: "Container & Kubernetes Platforms",
    highlight:
      "Standardize how applications run across clouds",
    description:
      "We build Kubernetes platforms (EKS, AKS, GKE, OpenShift) with Helm/Kustomize, service mesh, ingress, autoscaling, and cluster governance — so teams deploy consistently without reinventing platform plumbing.",
  },
  {
    title: "Release Automation & Continuous Delivery",
    highlight:
      "Safe, frequent releases with instant rollback paths",
    description:
      "We implement release orchestration, feature flags, environment promotion workflows, and automated rollback — enabling daily or hourly releases without sacrificing stability.",
  },
  {
    title: "Observability & Site Reliability Engineering",
    highlight:
      "SLOs, alerting, and incident response that protect uptime",
    description:
      "We implement logging, metrics, and tracing with Prometheus, Grafana, Datadog, ELK, and OpenTelemetry — plus SRE practices, on-call design, and error budgets so reliability becomes measurable and managed.",
  },
  {
    title: "DevSecOps & Pipeline Security",
    highlight:
      "Security checks embedded in every build",
    description:
      "We integrate SAST, DAST, dependency scanning, container image scanning, and secrets detection into pipelines — shifting security left without slowing delivery.",
  },
];

export default function Page() {
  return (
    <>
      <SubPageHero
        backgroundImage="/images/bg-image/DevOps-bg.png"
        headline="DevOps automation that accelerates delivery without sacrificing reliability"
        subheadline="Build CI/CD, Infrastructure as Code, container platforms, and SRE practices that cut release cycles, raise deployment confidence, and keep critical systems resilient at scale."
      />
      <OurVision
        eyebrow="OUR VISION"
        leftTitle={[
          "BUILD.",
          "TEST.",
          "RELEASE.",
          "IMPROVE.",
        ]}
        title="Software delivery as a competitive advantage."
        description="NineXDevOps implements enterprise DevOps and automation spanning CI/CD, IaC, Kubernetes platforms, release automation, observability, and DevSecOps — so engineering teams ship faster with higher quality and lower operational risk."
        image="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1600&auto=format&fit=crop"
      />

      <ValuesSection
        eyebrow="OUR VALUES"
        title="The principles behind every DevOps platform we build."
        description="Automation without reliability creates faster failure. Every engagement balances velocity with safety and observability."
        quote="Automate Everything That Should Be Automated"
        quoteDescription="We eliminate manual handoffs in build, test, deploy, and provision — while keeping humans in control of risk decisions and incident response."
        tags={[
          "Velocity",
          "Reliability",
          "Automation",
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
