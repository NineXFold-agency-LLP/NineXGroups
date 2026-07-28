import type { Metadata } from "next";
import SubPageHero from "@/components/sections/common/SubPageHero";
import OurVision from "@/app/ninexFoldServices/OurVision";
import ValuesSection from "@/app/ninexFoldServices/ValuesSection";
import ClientSuccessMetricsSection from "../ClientSuccessMetricsSection";
import {
  AlertTriangle,
  Cpu,
  TrendingUp,
} from "lucide-react";
import WhatWeDoSection from "../WhatWeDo";

export const metadata: Metadata = {
  title: "Search Visibility System | SEO, AEO & GEO Organic Growth | NineXFold",
  description:
    "Engineer organic search dominance with technical SEO, content authority, AEO, and GEO — growing rankings, traffic, and pipeline from search. Schedule a Search Visibility Assessment.",
  keywords: [
    "search visibility",
    "SEO",
    "organic traffic",
    "AEO answer engine optimisation",
    "GEO generative engine optimisation",
    "technical SEO",
    "link building",
    "search rankings",
    "organic pipeline",
    "NineXFold",
  ],
  openGraph: {
    title: "Search Visibility System | NineXFold",
    description:
      "SEO, AEO, and GEO systems that make your brand the most visible, cited, and trusted presence across every search surface.",
  },
};

const metricGroups = [
  {
    icon: <AlertTriangle size={22} strokeWidth={1.5} />,
    title: "Challenge",
    items: [
      ["PAGE3", "priority keywords stuck below the fold"],
      ["FLAT", "organic traffic plateau despite content spend"],
      ["0", "featured snippet or AI Overview presence"],
      ["WEAK", "backlink profile versus category competitors"],
      ["BLIND", "no clear line from SEO to pipeline"],
    ],
    footerTitle: "BUSINESS PAIN",
    footerText: "INVISIBLE. UNDER-ATTRIBUTED.",
    showArrow: true,
  },

  {
    icon: <Cpu size={22} strokeWidth={1.5} />,
    title: "Solution",
    items: [
      ["TECH", "Technical SEO and Core Web Vitals remediation"],
      ["CONTENT", "Topical authority and intent-led content SEO"],
      ["LINKS", "Digital PR and high-authority link acquisition"],
      ["AEO", "Answer engine and featured snippet optimisation"],
      ["GEO", "Generative AI citation and brand mention strategy"],
    ],
    footerTitle: "IMPLEMENTED SYSTEMS",
    footerText: "RANKED. CITED. FOUND.",
    showArrow: false,
  },

  {
    icon: <TrendingUp size={22} strokeWidth={1.5} />,
    title: "Results",
    items: [
      ["180%", "increase in organic traffic year over year"],
      ["85+", "keywords moved into top-3 positions"],
      ["$4.2M", "pipeline attributed to organic search"],
      ["40%", "of inbound MQLs from non-branded SEO"],
      ["12", "AI Overview and featured snippet wins"],
      ["9M", "to compounding organic growth trajectory"],
    ],
    footerTitle: "BUSINESS OUTCOMES",
    footerText: "COMPOUNDING. DEFENSIBLE.",
    showArrow: false,
  },
];

const cards = [
  {
    title: "Technical SEO Infrastructure",
    highlight:
      "The foundation that everything else depends on",
    description:
      "We conduct comprehensive technical SEO audits covering crawlability, indexation, site architecture, Core Web Vitals, page speed, mobile performance, structured data implementation, canonical strategy, international hreflang, log file analysis, and JavaScript rendering — then prioritise and implement every fix in order of commercial impact. A technically sound website is the non-negotiable foundation of every organic visibility strategy we build.",
  },

  {
    title: "Content SEO Strategy & Execution",
    highlight:
      "Own every search your buyers make across the entire buying journey",
    description:
      "We build comprehensive content SEO strategies using advanced keyword research, search intent analysis, topical authority mapping, content gap analysis, and competitor share-of-voice benchmarking — identifying every search opportunity across awareness, consideration, and decision stages. We then produce, optimise, and continuously update the content that earns those rankings and holds them against every competitor.",
  },

  {
    title: "Link Authority & Digital PR",
    highlight:
      "The trust signals that turn rankings into dominance",
    description:
      "We build high-authority backlink profiles through strategic digital PR campaigns, editorial link building, broken link building, resource link acquisition, journalist relationship management, and expert commentary placement — earning the links from the publications, institutions, and authoritative sites that signal to search engines your brand deserves the top positions in your category.",
  },

  {
    title: "AEO — Answer Engine Optimisation",
    highlight:
      "Own the answer box, not just the blue link",
    description:
      "We optimise your content to appear in Google's AI Overviews, Featured Snippets, People Also Ask boxes, Knowledge Panels, and Local Packs — capturing the zero-click search results that appear above traditional rankings. AEO requires specific content structuring, entity optimisation, E-E-A-T signal building, and FAQ architecture that we implement systematically across every content asset you own.",
  },

  {
    title: "GEO — Generative Engine Optimisation",
    highlight:
      "The most important new search discipline of the decade",
    description:
      "When buyers ask ChatGPT, Perplexity, Google Gemini, Microsoft Copilot, or Claude a question in your category, which brand do they get recommended? If the answer is not yours, it is your competitor's. We build the content authority, structured data, citation network, Wikipedia presence, brand mention velocity, and knowledge graph signals that generative AI models rely on to determine which brands to recommend — making your business the obvious answer inside every AI-generated response in your category.",
  },

  {
    title: "International & Multilingual SEO",
    highlight:
      "Grow organically into every market you serve",
    description:
      "We build international SEO architecture that expands your organic visibility across multiple countries and languages — with technical hreflang implementation, geo-targeted content strategies, local link building, regional keyword research, and market-specific content production — ensuring your brand earns organic market share in every geography you enter without paying for it indefinitely through paid media.",
  },

  {
    title: "Local SEO & Google Business Profile Optimisation",
    highlight:
      "Dominate search in every city and region you operate",
    description:
      "We build and manage local SEO programmes for businesses with physical locations or regional service areas — covering Google Business Profile optimisation, local citation building, review strategy, local content creation, and proximity-based ranking signals — ensuring your brand appears prominently in local search results and Google Maps across every market you serve.",
  },

  {
    title: "E-E-A-T Authority Building",
    highlight:
      "Experience, Expertise, Authoritativeness, Trust — built systematically",
    description:
      "We build the E-E-A-T signals that Google's quality raters and ranking algorithms evaluate when determining which content to surface — including author credential development, expert contributor programmes, editorial standards documentation, fact-checking frameworks, case study and original research publication, and award and accreditation acquisition — establishing your brand as the most credible authority in your category.",
  },

  {
    title: "SEO Performance Analytics & Intelligence",
    highlight:
      "Know exactly how your organic visibility translates to commercial outcomes",
    description:
      "We build SEO reporting systems that go beyond rankings and traffic to track keyword category share, content performance, link authority trends, competitor movements, cannibalization issues, and most importantly, the direct contribution of organic search to pipeline and revenue — giving marketing and commercial leadership the intelligence to make informed investment decisions about organic search.",
  },

  {
    title: "AI-Powered SEO Scaling",
    highlight:
      "Produce, optimise, and update content at enterprise scale",
    description:
      "We implement AI-assisted SEO content systems that allow your brand to produce optimised content at a pace and volume previously impossible — covering topic clustering, AI-assisted drafting with human editorial oversight, programmatic SEO for large-scale page creation, and automated content auditing that identifies underperforming pages and recommends improvements continuously.",
  },
];

export default function Page() {
  return (
    <>
      <SubPageHero
        backgroundImage="/images/bg-image/Fold-bg.png"
        headline="Rank, answer, and appear everywhere your buyers search"
        subheadline="Enterprise SEO, AEO, and GEO strategy that makes your brand the most visible, most cited, and most trusted presence across every search surface your buyers use — from Google rankings to AI-generated answers.
                    We engineer organic search dominance through technical SEO, content authority, and link building, capture zero-click search through Answer Engine Optimisation, and establish brand presence inside generative AI platforms through GEO — creating a compounding visibility advantage that paid media can never replicate and competitors find nearly impossible to close."
      />
      <OurVision
        eyebrow="OUR VISION"
        leftTitle={[
          "FOUND.",
          "TRUSTED.",
          "CITED.",
          "ALWAYS.",
        ]}
        title="Search visibility that compounds into a structural competitive moat."
        description="Paid media stops the moment you stop paying. Organic search visibility compounds every month. A brand that dominates traditional search, answer boxes, and AI-generated recommendations has built a traffic and trust asset that its competitors cannot simply outspend — it must be earned through content quality, technical excellence, and strategic patience. We engineer that compound advantage for every client we work with, and we build it to last."
        image="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1600&auto=format&fit=crop"
      />

      <ValuesSection
        eyebrow="OUR VALUES"
        title="The principles behind every search system we engineer."
        description="Search visibility built without principles ranks today and disappears tomorrow. Every engagement we take on is grounded in these four commitments to ensure what we build compounds, endures, and converts."
        quote="Compound Over Quick Wins"
        quoteDescription="We build organic visibility that compounds monthly, not campaigns that spike and disappear. Every technical fix, piece of content, and earned link strengthens the entire system and makes every future result more achievable."
        tags={[
          "Compounding",
          "Authority",
          "Longevity",
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
