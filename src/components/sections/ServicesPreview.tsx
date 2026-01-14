"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Sparkles, Shield, Car } from "lucide-react";

export function ServicesPreview() {
    const services = [
        {
            title: "Interior Detailing",
            desc: "Deep cleaning, leather conditioning, and odor removal for a fresh cabin.",
            icon: <Car className="w-10 h-10" />,
        },
        {
            title: "Exterior Polish",
            desc: "Multi-stage paint correction to remove swirls and restore depth.",
            icon: <Sparkles className="w-10 h-10" />,
        },
        {
            title: "Ceramic Coating",
            desc: "Long-lasting protection with extreme hydrophobicity and gloss.",
            icon: <Shield className="w-10 h-10" />,
        },
    ];

    return (
        <section className="py-24 bg-black">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16">
                    <div className="max-w-xl">
                        <span className="text-primary uppercase tracking-widest font-semibold flex items-center gap-2">
                            <span className="w-8 h-[2px] bg-primary"></span> Our Expertise
                        </span>
                        <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 font-orbitron">
                            Comprehensive <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Auto Care</span>
                        </h2>
                    </div>
                    <Link href="/services">
                        <Button variant="outline" className="hidden md:flex gap-2 text-white border-white/20 hover:bg-primary/20 hover:text-primary hover:border-primary">
                            View All Services <ArrowRight size={16} />
                        </Button>
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {services.map((service, idx) => (
                        <div key={idx} className="group p-8 rounded-2xl bg-white/5 hover:bg-black hover:shadow-[0_0_30px_rgba(37,99,235,0.2)] transition-all border border-white/5 hover:border-primary/50 relative overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            <div className="mb-6 opacity-80 group-hover:opacity-100 transition-opacity relative z-10 text-primary">
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3 relative z-10 font-orbitron">{service.title}</h3>
                            <p className="text-gray-400 mb-6 relative z-10 group-hover:text-gray-300">{service.desc}</p>
                            <span className="text-primary text-sm font-semibold flex items-center gap-2 relative z-10 group-hover:underline underline-offset-4">
                                Learn More <ArrowRight size={14} />
                            </span>
                        </div>
                    ))}
                </div>

                <div className="mt-12 text-center md:hidden">
                    <Link href="/services">
                        <Button variant="outline" className="text-white border-white/20">
                            View All Services <ArrowRight size={16} className="ml-2" />
                        </Button>
                    </Link>
                </div>
            </div>
        </section>
    );
}
