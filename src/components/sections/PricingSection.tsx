"use client";

import { motion } from "framer-motion";
import { Check, ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export function PricingSection() {
    const packages = [
        {
            name: "Basic Package",
            price: "150",
            description: "Essential care for a clean daily drive.",
            features: [
                "Hand wash & dry",
                "Clean wheels & tires + Tire shine",
                "Vacuum seats, mats, and carpets",
                "Wipe down dash, doors, and console",
                "Clean interior & exterior windows",
                "Light spray wax finish"
            ],
            highlight: false,
            delay: 0.1
        },
        {
            name: "Standard Package",
            price: "300",
            description: "Deep clean & protection for enhanced gloss.",
            features: [
                "Clay Bar Treatment (Paint Decon)",
                "Shampoo Carpets And Mats",
                "Clean & Condition Seats",
                "Clean Vents, Cup Holders & Trim",
                "Gloss Sealant For Enhanced Shine"
            ],
            highlight: true,
            delay: 0.2
        },
        {
            name: "Premium Package",
            price: "400",
            description: "The ultimate restoration & protection detail.",
            features: [
                "Machine polish (reduce swirls)",
                "2-3 months ceramic sealant",
                "Steam clean interior surface",
                "Stain and odor treatment",
                "Trim & plastic restoration"
            ],
            highlight: false,
            delay: 0.3
        }
    ];

    return (
        <section className="py-32 bg-black relative overflow-hidden">
            {/* Background Atmosphere */}
            <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent,black)] z-10 pointer-events-none"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-blue-900/20 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="container mx-auto px-4 relative z-20">
                {/* Header */}
                <div className="text-center mb-24">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-900/10 border border-blue-500/30 mb-6 backdrop-blur-md"
                    >
                        <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
                        <span className="text-blue-500 text-xs font-bold tracking-[0.2em] uppercase">Pricing & Packages</span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-6xl font-black font-orbitron text-white max-w-4xl mx-auto leading-tight"
                    >
                        TRANSPARENT & <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">AFFORDABLE</span>
                    </motion.h2>
                </div>

                {/* Packages Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {packages.map((pkg, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: pkg.delay }}
                            viewport={{ once: true }}
                            className={`relative flex flex-col p-8 rounded-[2rem] border transition-all duration-500 group hover:-translate-y-2
                                ${pkg.highlight
                                    ? 'bg-blue-900/10 border-blue-500/50 shadow-[0_0_40px_rgba(59,130,246,0.15)]'
                                    : 'bg-neutral-900/40 border-white/10 hover:border-white/20 hover:bg-neutral-900/60'
                                }
                            `}
                        >
                            {/* Highlight Badge */}
                            {pkg.highlight && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-600 to-cyan-500 text-white text-xs font-bold px-4 py-1.5 rounded-full tracking-wider uppercase shadow-lg flex items-center gap-2">
                                    <Sparkles size={12} />
                                    Most Popular
                                </div>
                            )}

                            {/* Package Header */}
                            <div className="text-center mb-8 pt-4">
                                <h3 className={`text-xl font-bold font-orbitron mb-2 ${pkg.highlight ? 'text-cyan-400' : 'text-white'}`}>
                                    {pkg.name}
                                </h3>
                                <div className="flex items-baseline justify-center gap-1">
                                    <span className="text-sm text-gray-400 font-medium">AUD</span>
                                    <span className="text-5xl font-black text-white tracking-tight">{pkg.price}</span>
                                </div>
                                <p className="text-gray-500 text-sm mt-2">/ Start From</p>
                            </div>

                            {/* Features List */}
                            <div className="flex-grow mb-8 space-y-4">
                                {pkg.features.map((feature, fIdx) => (
                                    <div key={fIdx} className="flex items-start gap-3">
                                        <div className={`mt-0.5 p-0.5 rounded-full ${pkg.highlight ? 'bg-cyan-500/20 text-cyan-400' : 'bg-white/10 text-gray-400 group-hover:bg-blue-500/20 group-hover:text-blue-400 transition-colors'}`}>
                                            <Check size={12} strokeWidth={3} />
                                        </div>
                                        <span className="text-gray-300 text-sm leading-relaxed">{feature}</span>
                                    </div>
                                ))}
                            </div>

                            {/* CTA Button */}
                            <Button
                                className={`w-full h-12 rounded-xl font-bold tracking-wide transition-all duration-300
                                    ${pkg.highlight
                                        ? 'bg-gradient-to-r from-blue-600 to-cyan-500 hover:scale-[1.02] shadow-lg shadow-blue-500/25 border-none text-white'
                                        : 'bg-white/5 hover:bg-white/10 border border-white/10 text-white hover:border-white/30'
                                    }
                                `}
                            >
                                Mark Your Day
                                <ArrowRight className="ml-2 w-4 h-4" />
                            </Button>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom Link */}
                <div className="text-center mt-16">
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        className="text-gray-500 hover:text-white transition-colors text-sm font-bold uppercase tracking-[0.2em] relative group"
                    >
                        View All Packages
                        <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all duration-300"></span>
                    </motion.button>
                </div>
            </div>
        </section>
    );
}
