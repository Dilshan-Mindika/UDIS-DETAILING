"use client";

import { PageHero } from "@/components/sections/PageHero";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { FaqSection } from "@/components/sections/FaqSection";
import { motion } from "framer-motion";
import {
    ShieldCheck, Leaf, Zap, Award, Users, Star, ArrowRight,
    CheckCircle2, Droplets, Sparkles, ClipboardCheck,
    Quote, HardHat, Cog
} from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
    return (
        <div className="bg-black min-h-screen">
            {/* Hero Section */}
            <PageHero
                badgeIcon={Award}
                badgeText="LEGACY OF EXCELLENCE"
                title="PASSION FOR"
                highlightedTitle="PERFECTION"
                subtitle="We are dedicated to bringing out the best in your vehicle with precision detailing, premium products, and an unmatched eye for perfection."
                backgroundImage="https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?q=80&w=2000&auto=format&fit=crop"
            >
                {/* Stats Strip */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-md hover:border-blue-500/30 transition-all duration-500 mt-12">
                    <div className="text-center group">
                        <span className="block text-4xl font-bold text-white mb-1 group-hover:scale-110 transition-transform duration-300">30+</span>
                        <span className="text-blue-400 text-sm uppercase tracking-wider font-bold">Partner Brands</span>
                    </div>
                    <div className="text-center group">
                        <span className="block text-4xl font-bold text-white mb-1 group-hover:scale-110 transition-transform duration-300">100%</span>
                        <span className="text-blue-400 text-sm uppercase tracking-wider font-bold">Satisfaction</span>
                    </div>
                    <div className="text-center group">
                        <span className="block text-4xl font-bold text-white mb-1 group-hover:scale-110 transition-transform duration-300">5k+</span>
                        <span className="text-blue-400 text-sm uppercase tracking-wider font-bold">Cars Detailed</span>
                    </div>
                    <div className="text-center group">
                        <span className="block text-4xl font-bold text-white mb-1 group-hover:scale-110 transition-transform duration-300">5.0</span>
                        <span className="text-blue-400 text-sm uppercase tracking-wider font-bold">Star Rating</span>
                    </div>
                </div>
            </PageHero>

            {/* Vision Section */}
            <section className="py-24 relative overflow-hidden">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <ScrollReveal>
                            <div className="relative group">
                                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-400 rounded-3xl rotate-6 opacity-20 blur-lg group-hover:opacity-30 transition-opacity duration-500"></div>
                                <div className="relative bg-neutral-900 border border-white/10 rounded-3xl overflow-hidden h-[600px] shadow-2xl">
                                    <div className="absolute inset-0 bg-blue-500/10 mix-blend-overlay z-10 pointer-events-none"></div>
                                    <img
                                        src="https://images.unsplash.com/photo-1607860108855-64acf2078ed9?q=80&w=1000&auto=format&fit=crop"
                                        alt="Automotive Excellence"
                                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                                    />
                                    {/* Overlay Content */}
                                    <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black via-black/80 to-transparent z-20">
                                        <span className="text-blue-400 font-orbitron text-sm tracking-widest uppercase mb-2 block">Our Philosophy</span>
                                        <p className="text-white text-lg font-light italic">"Detailing is not just cleaning; it's the art of restoration and preservation."</p>
                                    </div>
                                </div>
                            </div>
                        </ScrollReveal>

                        <ScrollReveal delay={0.2}>
                            <div>
                                <h2 className="text-4xl md:text-5xl font-black font-orbitron text-white mb-8">
                                    OUR <span className="text-blue-500">VISION</span>
                                </h2>
                                <h3 className="text-2xl font-bold text-white mb-6 leading-tight">
                                    Setting the Standard for<br />Auto Care Excellence
                                </h3>
                                <p className="text-gray-400 leading-relaxed mb-10 text-lg">
                                    At <span className="text-white font-bold">UDI’S DETAILING</span>, we raise the bar with every service. Combining expert technicians, premium products, and meticulous attention to detail, we deliver auto care that stands out from the rest.
                                </p>

                                <ul className="space-y-8">
                                    {[
                                        { title: "Leading Service", desc: "Known for innovation and customer satisfaction.", icon: Award },
                                        { title: "Top-Tier Detailing", desc: "Detailing that goes beyond expectations.", icon: Star },
                                        { title: "100% Satisfaction", desc: "Your satisfaction is our guarantee.", icon: ShieldCheck }
                                    ].map((item, idx) => (
                                        <li key={idx} className="flex gap-6 group">
                                            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-900/30 to-black border border-white/10 flex items-center justify-center flex-shrink-0 text-blue-400 group-hover:text-white group-hover:border-blue-500/50 transition-all duration-300 shadow-[0_0_15px_rgba(59,130,246,0)] group-hover:shadow-[0_0_20px_rgba(59,130,246,0.3)]">
                                                <item.icon size={28} />
                                            </div>
                                            <div>
                                                <h4 className="text-white font-bold text-xl mb-1 group-hover:text-blue-400 transition-colors">{item.title}</h4>
                                                <p className="text-gray-400">{item.desc}</p>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            {/* Founder's Mission Section (NEW) */}
            <section className="py-24 relative bg-blue-950/5">
                <div className="container mx-auto px-4">
                    <ScrollReveal>
                        <div className="max-w-4xl mx-auto text-center">
                            <Quote className="w-16 h-16 text-blue-500/20 mx-auto mb-8" />
                            <h2 className="text-3xl md:text-4xl font-black font-orbitron text-white mb-8 italic">
                                "Our mission is simple: to provide the highest quality automotive care experience. We believe every vehicle deserves to look its absolute best, essentially better than showroom quality."
                            </h2>
                            <div className="flex items-center justify-center gap-4">
                                <div className="w-12 h-[1px] bg-blue-500"></div>
                                <span className="text-blue-400 font-bold uppercase tracking-widest font-orbitron text-sm">Founder's Commitment</span>
                                <div className="w-12 h-[1px] bg-blue-500"></div>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* Quality Commitment Section (REFINED) */}
            <section className="py-24 relative">
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto bg-neutral-900/60 border border-white/10 rounded-[3rem] p-8 md:p-16 backdrop-blur-md relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 blur-[120px] rounded-full pointer-events-none"></div>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                            <ScrollReveal>
                                <div className="space-y-8">
                                    <div>
                                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-widest mb-6">
                                            Premium Standards
                                        </div>
                                        <h2 className="text-4xl md:text-5xl font-black font-orbitron text-white mb-6 leading-tight">Uncompromising Quality<br /><span className="text-cyan-400">In Every Drop</span></h2>
                                        <p className="text-gray-400 leading-relaxed text-lg">
                                            We don't settle for average. Our studio is equipped with specialized linear lighting to spot paint defects that others miss. Every towel, every brush, and every chemical is curated for maximum results without compromise.
                                        </p>
                                    </div>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                        {[
                                            { title: "Professional Grade", desc: "Exclusive commercial formulas.", icon: ShieldCheck },
                                            { title: "Climate Controlled", desc: "Perfect curing environment.", icon: Cog },
                                            { title: "Certified Team", desc: "Master detailing technicians.", icon: HardHat },
                                            { title: "Detail Obsessed", desc: "Nothing escapes our eyes.", icon: Sparkles }
                                        ].map((item, idx) => (
                                            <div key={idx} className="flex gap-4 group">
                                                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-all">
                                                    <item.icon size={20} />
                                                </div>
                                                <div>
                                                    <h4 className="text-white font-bold text-sm">{item.title}</h4>
                                                    <p className="text-gray-500 text-xs">{item.desc}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </ScrollReveal>
                            <ScrollReveal delay={0.2}>
                                <div className="relative group">
                                    <div className="absolute inset-0 bg-blue-500/20 blur-2xl rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                    <img
                                        src="/images/about_quality.png"
                                        alt="Master Detailing Under Specialized Lights"
                                        className="relative rounded-3xl shadow-2xl border border-white/10 w-full object-cover h-[500px]"
                                    />
                                    {/* Info Badge */}
                                    <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-black border border-white/10 px-6 py-4 rounded-2xl backdrop-blur-xl flex items-center gap-4 whitespace-nowrap">
                                        <div className="w-3 h-3 bg-cyan-400 rounded-full animate-pulse"></div>
                                        <span className="text-white font-orbitron text-xs font-bold italic">LIVE STUDIO PRECISION</span>
                                    </div>
                                </div>
                            </ScrollReveal>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Process Section */}
            <section className="py-24 relative overflow-hidden">
                <div className="container mx-auto px-4">
                    <ScrollReveal>
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-5xl font-black font-orbitron text-white mb-4 uppercase">
                                The Master <span className="text-cyan-400">Process</span>
                            </h2>
                            <p className="text-gray-400 max-w-2xl mx-auto">A meticulous multi-stage protocol designed specifically for discerning enthusiasts and high-value investments.</p>
                        </div>
                    </ScrollReveal>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        {[
                            { step: "01", title: "Assessment", desc: "Detailed inspection to identify paint defects, contaminants, and specific needs.", icon: ClipboardCheck },
                            { step: "02", title: "Preparation", desc: "Multi-stage decontamination wash using pH-neutral chemicals and clay bar treatment.", icon: Droplets },
                            { step: "03", title: "Execution", desc: "Precision machine polishing or interior rejuvenation using advanced techniques.", icon: Zap },
                            { step: "04", title: "Protection", desc: "Application of premium ceramic coatings or waxes to seal and preserve the finish.", icon: ShieldCheck }
                        ].map((item, idx) => (
                            <ScrollReveal key={idx} delay={idx * 0.1}>
                                <div className="relative group p-8 bg-neutral-900/40 border border-white/5 rounded-3xl hover:border-blue-500/30 transition-all h-full">
                                    <span className="absolute top-4 right-6 text-5xl font-black text-white/5 group-hover:text-blue-500/10 transition-colors font-orbitron">{item.step}</span>
                                    <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400 mb-6 group-hover:scale-110 transition-transform">
                                        <item.icon size={24} />
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                                    <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* Technology Section (NEW) */}
            <section className="py-24 bg-neutral-900/10 relative">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center bg-black/40 border border-white/5 rounded-[3rem] p-8 md:p-12">
                        <ScrollReveal>
                            <div className="relative rounded-2xl overflow-hidden h-[400px]">
                                <img
                                    src="https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?q=80&w=1000&auto=format&fit=crop"
                                    alt="Advanced Detailing Tech"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-blue-600/10 mix-blend-overlay"></div>
                            </div>
                        </ScrollReveal>
                        <ScrollReveal delay={0.2}>
                            <div>
                                <h2 className="text-3xl font-black font-orbitron text-white mb-6 uppercase tracking-wider">Advanced <span className="text-blue-500">Techniques</span></h2>
                                <p className="text-gray-400 leading-relaxed mb-6">
                                    We use cutting-edge technology for deep cleaning. At UDI’S DETAILING, we leverage the latest tools to provide a thorough, efficient clean that reaches every surface and crevice.
                                </p>
                                <div className="space-y-4">
                                    <div className="flex items-center gap-4 p-4 bg-white/5 rounded-2xl border border-white/5 hover:border-blue-500/20 transition-all">
                                        <Zap className="text-blue-400" size={20} />
                                        <span className="text-white font-medium text-sm">High-Frequency Vapor Steaming</span>
                                    </div>
                                    <div className="flex items-center gap-4 p-4 bg-white/5 rounded-2xl border border-white/5 hover:border-blue-500/20 transition-all">
                                        <Cog className="text-blue-400" size={20} />
                                        <span className="text-white font-medium text-sm">Dual Action Long-Throw Polishers</span>
                                    </div>
                                    <div className="flex items-center gap-4 p-4 bg-white/5 rounded-2xl border border-white/5 hover:border-blue-500/20 transition-all">
                                        <ShieldCheck className="text-blue-400" size={20} />
                                        <span className="text-white font-medium text-sm">Ceramic Infused Graphene Sealants</span>
                                    </div>
                                </div>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            {/* Reuse FAQ Section */}
            <ScrollReveal>
                <FaqSection />
            </ScrollReveal>

            {/* CTA Section */}
            <section className="py-32 relative overflow-hidden">
                {/* CTA Background Image */}
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?q=80&w=2000&auto=format&fit=crop"
                        alt="Premium Detailing Foam"
                        className="w-full h-full object-cover opacity-20"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/90 to-blue-900/20"></div>
                </div>

                {/* Ambient Hub Glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/10 rounded-full blur-[120px] opacity-50 pointer-events-none animate-pulse"></div>

                <div className="container mx-auto px-4 relative z-10 text-center">
                    <ScrollReveal>
                        <div className="max-w-4xl mx-auto bg-neutral-900/60 border border-white/10 rounded-[4rem] p-12 md:p-20 backdrop-blur-[32px] shadow-2xl relative overflow-hidden group">
                            {/* Technical HUD Brackets */}
                            <div className="absolute top-10 left-10 w-12 h-12 border-t-2 border-l-2 border-white/10 group-hover:border-blue-500/40 transition-colors duration-700 pointer-events-none"></div>
                            <div className="absolute bottom-10 right-10 w-12 h-12 border-b-2 border-r-2 border-white/10 group-hover:border-blue-500/40 transition-colors duration-700 pointer-events-none"></div>

                            {/* Technical Tag */}
                            <div className="flex justify-center mb-8">
                                <div className="flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 px-4 py-1.5 rounded-full">
                                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse"></div>
                                    <span className="text-[10px] font-mono text-blue-400 tracking-[0.3em] uppercase">Status: Limited Offer Active</span>
                                </div>
                            </div>

                            <h2 className="text-5xl md:text-7xl font-black font-orbitron text-white mb-8 tracking-tighter uppercase leading-none">
                                GRAB YOUR <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">DISCOUNT</span>
                            </h2>
                            <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
                                Take advantage of our limited-time offer and save on <span className="text-white font-medium italic">premium car detailing services</span>. Experience expert care and bring out the best in your vehicle.
                            </p>

                            <div className="relative inline-block">
                                <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-700"></div>
                                <Link
                                    href="/booking"
                                    className="relative flex items-center gap-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold py-6 px-16 rounded-full hover:shadow-[0_0_50px_rgba(37,99,235,0.6)] transition-all transform hover:scale-105 hover:-translate-y-1 text-xl uppercase tracking-widest font-orbitron"
                                >
                                    Book Your Appointment Today
                                    <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-500" />
                                </Link>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </section>
        </div>
    );
}
