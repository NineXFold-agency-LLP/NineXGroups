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
  title: "Cybersecurity | Zero Trust, SOC, IAM & Cloud Security | NineXDevOps",
  description:
    "Build Zero Trust architectures, operate 24/7 security operations centers, and maintain comprehensive security posture. Request a Security Assessment with NineXDevOps.",
  keywords: [
    "cybersecurity",
    "Zero Trust",
    "SOC",
    "IAM",
    "cloud security",
    "CSPM",
    "Okta",
    "SIEM",
    "NineXDevOps",
  ],
  openGraph: {
    title: "Cybersecurity | NineXDevOps",
    description:
      "Enterprise cybersecurity that protects what matters most — SOC, Zero Trust, IAM, and compliance.",
  },
};

const metricGroups = [
  {
    icon: <BarChart3 size={22} strokeWidth={1.5} />,
    title: "Challenge",
    items: [
      ["100K+", "employees, contractors, and partners"],
      ["50+", "legacy identity systems from acquisitions"],
      ["200+", "SaaS apps with inconsistent access"],
      ["70%", "applications without MFA"],
      ["30D", "average access provision/deprovision time"],
    ],
    footerTitle: "SECURITY GAPS",
    footerText: "EXPOSED. FRAGMENTED.",
    showArrow: true,
  },
  {
    icon: <SlidersHorizontal size={22} strokeWidth={1.5} />,
    title: "Solution",
    items: [
      ["ZT", "Zero Trust architecture implementation"],
      ["OKTA", "Enterprise identity and SSO"],
      ["PAM", "CyberArk privileged access management"],
      ["EDR", "Microsoft Defender endpoint and cloud"],
      ["ZIA", "Zscaler secure access"],
      ["SOC", "24/7 SOC with Splunk SIEM"],
    ],
    footerTitle: "SECURITY PROGRAM",
    footerText: "VERIFIED. DEFENDED.",
    showArrow: false,
  },
  {
    icon: <User size={22} strokeWidth={1.5} />,
    title: "Results",
    items: [
      ["ZERO", "security breaches (3+ years)"],
      ["100%", "SOC 2 compliance achieved"],
      ["95%", "reduction in identity-related incidents"],
      ["90%", "faster access provisioning (30d to 2d)"],
      ["$50M", "annual savings from incident reduction"],
      ["12M", "ROI realization"],
    ],
    footerTitle: "SECURITY IMPACT",
    footerText: "PROTECTED. COMPLIANT.",
    showArrow: false,
  },
];

const cards = [
  {
    title: "Security Operations Center (SOC)",
    highlight:
      "24/7 monitoring, threat hunting, and incident response",
    description:
      "We design and operate SOC programs with SIEM (Splunk, Sentinel, QRadar), EDR, SOAR, and threat intelligence — detection, triage, forensics, vulnerability management, and playbooks. Metrics: MTTD under 5 minutes, MTTR under 15 minutes, and 95%+ threat prevention.",
  },
  {
    title: "Zero Trust Architecture",
    highlight:
      "Never trust, always verify — across identity, device, network, and data",
    description:
      "We implement Zero Trust with MFA and conditional access, micro-segmentation, device health checks, CASB, and DLP — using Okta, Azure AD/Entra, Zscaler, Prisma Access, CrowdStrike, and Purview. Outcomes: 80% less lateral movement risk and 100% user/device verification.",
  },
  {
    title: "Identity & Access Management (IAM)",
    highlight:
      "SSO, MFA, PAM, and lifecycle governance at enterprise scale",
    description:
      "We implement Okta, Entra ID, Ping, SailPoint, and CyberArk — identity governance, SSO/MFA/passwordless, just-in-time privileged access, access reviews, and SoD. Results: 90% fewer password incidents and 70% faster provisioning.",
  },
  {
    title: "Cloud Security (CSPM, CWPP, CIEM, CASB)",
    highlight:
      "Secure workloads, permissions, and SaaS across multi-cloud",
    description:
      "We implement Wiz, Prisma Cloud, Defender for Cloud, Aqua, Sysdig, Netskope, and related platforms — misconfiguration detection, container/runtime protection, least-privilege entitlements, and SaaS visibility. Outcomes: 95% fewer cloud misconfigurations.",
  },
  {
    title: "Application Security (AppSec)",
    highlight:
      "Shift-left security across code, pipelines, and APIs",
    description:
      "We embed SAST, DAST, dependency scanning, secrets management, and secure SDLC practices so vulnerabilities are found and fixed before production — with remediation SLAs and developer enablement.",
  },
  {
    title: "Compliance & Governance",
    highlight:
      "ISO 27001, SOC 2, PCI DSS, GDPR, HIPAA, and continuous compliance",
    description:
      "We deliver gap assessments, remediation roadmaps, policies, audit preparation, and compliance automation — so audits move faster and violations stay at zero.",
  },
];

export default function Page() {
  return (
    <>
      <SubPageHero
        backgroundImage="/images/bg-image/DevOps-bg.png"
        headline="Enterprise cybersecurity that protects what matters most"
        subheadline="Build Zero Trust architectures, operate 24/7 security operations centers, and maintain comprehensive security posture with zero breaches for 5+ years."
      />
      <OurVision
        eyebrow="OUR VISION"
        leftTitle={[
          "DETECT.",
          "DEFEND.",
          "VERIFY.",
          "COMPLY.",
        ]}
        title="Defense-in-depth security for the modern enterprise."
        description="Modern cyber threats require technology, process, and people working together. NineXDevOps implements cybersecurity programs spanning 24/7 SOC, Zero Trust, IAM, cloud security, AppSec, and compliance — with a track record of zero breaches for managed clients over 5+ years."
        image="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1600&auto=format&fit=crop"
      />

      <ValuesSection
        eyebrow="OUR VALUES"
        title="The principles behind every security program we build."
        description="Security without verification and continuous operations creates false confidence. Every engagement assumes breach and verifies every access."
        quote="Never Trust, Always Verify"
        quoteDescription="We design Zero Trust controls and 24/7 operations so every identity, device, and request is verified — and every incident is contained in minutes, not days."
        tags={[
          "Zero Trust",
          "Resilience",
          "Compliance",
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
