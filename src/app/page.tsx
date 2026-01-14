import { Hero } from "@/components/sections/Hero";
import { Stats } from "@/components/sections/Stats";
import { BrandCarousel } from "@/components/sections/BrandCarousel";
import { AboutSection } from "@/components/sections/AboutSection";
import { ServicesPreview } from "@/components/sections/ServicesPreview";
import { BusinessValues } from "@/components/sections/BusinessValues";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { PricingSection } from "@/components/sections/PricingSection";
import { Testimonials } from "@/components/sections/Testimonials";
import { FaqSection } from "@/components/sections/FaqSection";





export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <Stats />
      <BrandCarousel />
      <AboutSection />
      <ServicesPreview />
      <BusinessValues />
      <WhyChooseUs />
      <PricingSection />



      <Testimonials />
      <FaqSection />
    </div>
  );
}


