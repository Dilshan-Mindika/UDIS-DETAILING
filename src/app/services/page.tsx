import { Button } from "@/components/ui/button";


import NextLink from "next/link";
import { ArrowRight, Shield, Car, Settings, Droplets } from "lucide-react";

const allServices = [
    {
        category: "Exterior",
        items: [
            { title: "Premium Wash & Wax", price: "from $50", desc: "Hand wash, clay bar treatment, and premium carnauba wax." },
            { title: "Paint Correction", price: "from $200", desc: "Multi-stage polishing to remove swirls, scratches, and oxidation." },
            { title: "Headlight Restoration", price: "from $80", desc: "Restore clarity and brightness to foggy headlights." },
        ]
    },
    {
        category: "Interior",
        items: [
            { title: "Deep Interior Clean", price: "from $150", desc: "Steam cleaning, carpet extraction, and leather conditioning." },
            { title: "Odor Removal", price: "from $60", desc: "Ozone treatment to permanently eliminate odors." },
        ]
    },
    {
        category: "Protection",
        items: [
            { title: "Ceramic Coating", price: "from $500", desc: "3-5 year protection with extreme gloss and hydrophobicity." },
            { title: "Paint Protection Film", price: "Custom", desc: "Invisible shield against stone chips and scratches." },
        ]
    }
];

export default function ServicesPage() {
    return (
        <div className="py-24 container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-20">
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Our Services</h1>
                <p className="text-xl text-gray-400">
                    Meticulous attention to detail for every inch of your vehicle. Choose from our specialized treatments.
                </p>
            </div>

            <div className="space-y-24">
                {allServices.map((cat, idx) => (
                    <div key={idx}>
                        <h2 className="text-3xl font-bold text-custom-gold mb-10 border-l-4 border-custom-gold pl-4">{cat.category}</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {cat.items.map((service, sIdx) => (
                                <div key={sIdx} className="bg-white/5 border border-white/5 rounded-2xl p-8 hover:bg-white/10 transition-all hover:border-custom-gold/50 group">
                                    <div className="flex justify-between items-start mb-4">
                                        <h3 className="text-2xl font-bold text-white">{service.title}</h3>
                                        {/* <span className="text-custom-gold font-mono">{service.price}</span> UI choice: maybe hide price here to encourage quote */}
                                    </div>
                                    <p className="text-gray-400 mb-8">{service.desc}</p>
                                    <NextLink href="/contact">
                                        <Button variant="outline" className="w-full border-white/20 text-white hover:text-custom-gold hover:border-custom-gold group-hover:bg-custom-gold/10">
                                            Get Quote <ArrowRight className="ml-2 w-4 h-4" />
                                        </Button>
                                    </NextLink>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
