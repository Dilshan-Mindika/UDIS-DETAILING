import { Hero } from "@/components/sections/Hero";
import { Stats } from "@/components/sections/Stats";
import { BrandCarousel } from "@/components/sections/BrandCarousel";
import { AboutSection } from "@/components/sections/AboutSection";
import { ServicesPreview } from "@/components/sections/ServicesPreview";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <Stats />
      <BrandCarousel />
      <AboutSection />
      <ServicesPreview />

      {/* Testimonials Placeholder */}
      <section className="py-24 bg-custom-gray/20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-12">What Our Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="p-8 bg-black/40 rounded-xl border border-white/5">
                <div className="flex gap-1 text-custom-gold mb-4 justify-center">
                  {"★".repeat(5)}
                </div>
                <p className="text-gray-400 italic mb-6">"Absolutely stunning work. My car looks better than when I bought it. Highly recommended!"</p>
                <h4 className="text-white font-bold">- Client Name</h4>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
