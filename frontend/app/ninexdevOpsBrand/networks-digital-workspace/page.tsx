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
  title: "Networks & Digital Workspace | SD-WAN, SASE & Collaboration | NineXDevOps",
  description:
    "Modernize enterprise networks and digital workplaces with SD-WAN, SASE, secure remote access, and collaboration platforms that keep distributed teams productive. Request a Network Assessment.",
  keywords: [
    "SD-WAN",
    "SASE",
    "digital workspace",
    "Microsoft 365",
    "Zero Trust network",
    "network modernization",
    "NineXDevOps",
  ],
  openGraph: {
    title: "Networks & Digital Workspace | NineXDevOps",
    description:
      "Enterprise networks and digital workspaces engineered for security, performance, and hybrid work.",
  },
};

const metricGroups = [
  {
    icon: <BarChart3 size={22} strokeWidth={1.5} />,
    title: "Challenge",
    items: [
      ["120+", "branch locations on aging WAN circuits"],
      ["40%", "of workforce hybrid or remote"],
      ["SLOW", "application performance over VPN"],
      ["SHADOW", "unsanctioned collaboration tools in use"],
      ["HIGH", "network and helpdesk support tickets"],
    ],
    footerTitle: "WORKPLACE FRICTION",
    footerText: "FRAGMENTED. INSECURE.",
    showArrow: true,
  },
  {
    icon: <SlidersHorizontal size={22} strokeWidth={1.5} />,
    title: "Solution",
    items: [
      ["SDWAN", "SD-WAN across all branch sites"],
      ["SASE", "Zscaler / Prisma secure access"],
      ["M365", "Microsoft 365 digital workspace"],
      ["ZTNA", "Zero Trust network access"],
      ["UC", "Unified communications modernization"],
      ["15M", "global network transformation"],
    ],
    footerTitle: "CONNECTED WORKPLACE",
    footerText: "SECURE. PRODUCTIVE.",
    showArrow: false,
  },
  {
    icon: <User size={22} strokeWidth={1.5} />,
    title: "Results",
    items: [
      ["50%", "reduction in WAN costs"],
      ["3X", "improvement in SaaS application performance"],
      ["90%", "VPN ticket reduction via ZTNA"],
      ["99.99%", "branch connectivity uptime"],
      ["35%", "higher collaboration adoption"],
      ["10M", "ROI realization"],
    ],
    footerTitle: "NETWORK IMPACT",
    footerText: "FAST. RESILIENT.",
    showArrow: false,
  },
];

const cards = [
  {
    title: "SD-WAN & Network Modernization",
    highlight:
      "Replace brittle MPLS with intelligent, application-aware connectivity",
    description:
      "We design and implement SD-WAN (Cisco Viptela, VMware VeloCloud, Fortinet, Palo Alto Prisma) with traffic steering, dual-circuit resilience, and centralized policy — cutting costs while improving SaaS and cloud application performance.",
  },
  {
    title: "SASE & Secure Access Service Edge",
    highlight:
      "Security and networking converged for cloud-first enterprises",
    description:
      "We implement SASE architectures combining SWG, CASB, ZTNA, and firewall-as-a-service — so users and branches connect securely to apps without hairpinning through a central data center.",
  },
  {
    title: "Zero Trust Network Access (ZTNA)",
    highlight:
      "Replace VPN with identity-aware application access",
    description:
      "We deploy ZTNA solutions that verify user and device posture before granting least-privilege access to applications — improving security posture and remote-work experience simultaneously.",
  },
  {
    title: "Digital Workspace & Collaboration",
    highlight:
      "Microsoft 365, Google Workspace, and unified communications that people actually use",
    description:
      "We implement and optimize Teams, Exchange, SharePoint, OneDrive, Zoom, and related UC platforms — with governance, migration, adoption programs, and integration into identity and security controls.",
  },
  {
    title: "Wireless, Campus & Branch Networking",
    highlight:
      "Reliable Wi-Fi and LAN designed for density and roaming",
    description:
      "We design enterprise wireless and campus networks for offices, campuses, and retail — covering coverage planning, segmentation, guest access, and monitoring for consistent user experience.",
  },
  {
    title: "Network Observability & Operations",
    highlight:
      "See performance issues before users escalate them",
    description:
      "We implement network monitoring, flow analytics, and NOC/observability tooling so latency, packet loss, and path problems are detected and remediated quickly across hybrid environments.",
  },
];

export default function Page() {
  return (
    <>
      <SubPageHero
        backgroundImage="/images/bg-image/Devops-bg.png"
        headline="Networks and digital workspaces built for hybrid enterprise work"
        subheadline="Modernize connectivity with SD-WAN and SASE, secure remote access with Zero Trust, and equip teams with collaboration platforms that keep distributed workforces productive and protected."
      />
      <OurVision
        eyebrow="OUR VISION"
        leftTitle={[
          "CONNECT.",
          "SECURE.",
          "COLLABORATE.",
          "PERFORM.",
        ]}
        title="A workplace network that disappears into the background — because it just works."
        description="NineXDevOps delivers network and digital workspace modernization spanning SD-WAN, SASE, ZTNA, campus wireless, Microsoft 365 / collaboration platforms, and network operations — so every employee can access every application securely, from anywhere, with performance that supports the business."
        image="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1600&auto=format&fit=crop"
      />

      <ValuesSection
        eyebrow="OUR VALUES"
        title="The principles behind every network and workspace we design."
        description="Connectivity without security creates risk. Security without usability creates shadow IT. We balance both."
        quote="Secure by Default, Simple by Design"
        quoteDescription="We build access that is Zero Trust by default and effortless for users — so security strengthens productivity instead of blocking it."
        tags={[
          "Security",
          "Performance",
          "Adoption",
        ]}
        image="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&q=80"
      />
      <WhatWeDoSection cards={cards} />
      <ClientSuccessMetricsSection
        metricGroups={metricGroups}
      />
    </>
  );
}
