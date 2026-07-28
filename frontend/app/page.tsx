import WhatWeDoSection from "@/components/sections/ninexfoldSections/WhatWeDoSection";
import ContactSection from "@/components/sections/ninexfoldSections/ContactSection";
import HeroSection from "@/components/sections/ninexfoldSections/HeroSection";
import ReportSection from "@/components/sections/ninexfoldSections/ReportSection";
import FounderNoteSection from "@/components/sections/ninexfoldSections/FounderNoteSection";
import CareerSection from "@/components/sections/ninexfoldSections/CareerSection";
import BrandsShowcase from "@/components/sections/ninexfoldSections/BrandsShowcase";
import NineXKiwiHomepageSection from "@/components/sections/ninexfoldSections/Ninexkiwihomepagesection";

export default function NinexFoldPage() {
  return (
    <div className="font-sans">
      <HeroSection />
      <ReportSection />
      <BrandsShowcase />
      <FounderNoteSection />
      <WhatWeDoSection />
      <NineXKiwiHomepageSection />
      <CareerSection />
      <ContactSection />
    </div>
  );
}
