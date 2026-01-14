"use client";

import { ScrollReveal } from "@/components/ui/ScrollReveal";
import {
    Car, Droplets, Sparkles, Shield,
    ArrowRight, Star, CheckCircle2,
    Zap, Award, Users, Search,
    Hammer, Scissors, Info,
    Maximize, Wind, Trash2,
    ShieldAlert, BadgeCheck, Leaf
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Reusable Icon Component (since Cog isn't imported from Lucide in some envs)
const Cog = ({ size, className }: { size?: number, className?: string }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size || 24}
        height={size || 24}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
    >
        <path d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z" /><path d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" /><path d="M12 2v2" /><path d="M12 20v2" /><path d="m4.93 4.93 1.41 1.41" /><path d="m17.66 17.66 1.41 1.41" /><path d="M2 12h2" /><path d="M20 12h2" /><path d="m6.34 17.66-1.41 1.41" /><path d="m19.07 4.93-1.41 1.41" />
    </svg>
);

const services = [
    {
        title: "Exterior Detailing",
        desc: "Restore shine. Protect the finish.",
        icon: Droplets,
        longDesc: "A comprehensive exterior treatment focused on restoring depth and clarity to your paint while providing a durable barrier against the elements."
    },
    {
        title: "Interior Detailing",
        desc: "Deep clean. Fresh feel.",
        icon: Sparkles,
        longDesc: "Step into a sterile, rejuvenated cabin. We deep clean Every surface from headliner to carpets, conditioning leather and plastic to perfection."
    },
    {
        title: "Paint Correction",
        desc: "Restore clarity. Reveal brilliance.",
        icon: Zap,
        longDesc: "Our multi-stage machine polishing process removes swirls, scratches, and oxidation to reveal a flawless, mirror-like reflection."
    },
    {
        title: "Ceramic Coating",
        desc: "Long-lasting protection. Brilliant shine.",
        icon: Shield,
        longDesc: "The ultimate shield. Our ceramic coatings bond to your paint at a molecular level, providing years of extreme hydrophobicity and chemical resistance."
    },
    {
        title: "Headlight Restoration",
        desc: "Clear headlights. Safer drives road.",
        icon: Search,
        longDesc: "Foggy, yellowed headlights are a safety hazard and an eyesore. We restore them to factory clarity and seal them with UV protection."
    },
    {
        title: "Engine Bay Cleaning",
        desc: "Clean engine bay. Peak performance.",
        icon: Cog,
        longDesc: "A clean engine runs cooler and allows for easier maintenance discovery. We safely degrease and dress all bay components."
    },
    {
        title: "PDR (Paintless Dent Removal)",
        desc: "Restore shape. Preserve finish.",
        icon: Hammer,
        longDesc: "Remove unsightly door dings and minor dents without the need for filler or paint, preserving your vehicle's original factory finish."
    },
    {
        title: "Pet Hair Removal",
        desc: "No fluff. Just fresh.",
        icon: Scissors,
        longDesc: "Tough pet hair requires specialized tools and patience. We remove every strand to restore your interior to its original state."
    },
    {
        title: "Odour Removal",
        desc: "Remove smells. Refresh the cabin.",
        icon: Wind,
        longDesc: "Don't just mask smells; eliminate them. Our specialized treatments neutralize bacteria and organic compounds at the source."
    },
    {
        title: "Scratch Removing & Touch-Up",
        desc: "Hide damage. Keep shine.",
        icon: ShieldAlert,
        longDesc: "Localized paint repair and precision touch-ups to prevent rust and mask deeper scratches that cannot be polished out."
    },
    {
        title: "Wheel Face Ceramic Coating",
        desc: "Coat rims. Stay clean.",
        icon: BadgeCheck,
        longDesc: "Make your wheels easier to clean. Our specialized wheel coating resists brake dust and high temperatures, keeping rims looking new."
    },
    {
        title: "Vinyl Wrapping",
        desc: "Stand out. Stay protected.",
        icon: Maximize,
        longDesc: "Change your vehicle's look or add accents with premium vinyl. Provides a fresh aesthetic while protecting the paint underneath."
    },
    {
        title: "PPF (Paint Protective Film Installation)",
        desc: "Invisible armor. Lasting protection.",
        icon: Shield,
        longDesc: "The gold standard in protection. A thick, self-healing urethane film that protects against rock chips, road debris, and heavy scratches."
    }
];

const faqs = [
    {
        question: "How often should I get my car detailed?",
        answer: "For optimal preservation, we recommend a Refresh detailing every 3-4 months and a Deep Detail annually. Regular care prevents environmental contaminants like bird droppings and UV rays from causing permanent damage to your investment."
    },
    {
        question: "Do you use eco-friendly products?",
        answer: "Yes, we prioritize pH-neutral and environmentally responsible formulations. Consistent care protects your vehicle from wear, environmental damage, and aging—helping maintain its appearance, performance, and resale value for years to come."
    }
];

export default function ServicesPage() {
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    return (
        <div className="bg-black min-h-screen">
            {/* Hero Section */}
            <section className="relative py-32 overflow-hidden flex items-center justify-center min-h-[60vh]">
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1621359921485-2c8137cdc904?q=80&w=2000&auto=format&fit=crop"
                        alt="Services Hero"
                        className="w-full h-full object-cover opacity-40"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black"></div>
                </div>

                <div className="container mx-auto px-4 relative z-10 text-center">
                    <ScrollReveal>
                        <span className="inline-block px-4 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-widest mb-6">Expert Auto Care</span>
                        <h1 className="text-5xl md:text-7xl font-black font-orbitron text-white mb-6 leading-tight">
                            OUR <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">SERVICES</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto font-light leading-relaxed">
                            Professional Auto Detailing for a Flawless Finish. Meticulous care for every inch of your vehicle.
                        </p>
                    </ScrollReveal>
                </div>
            </section>

            {/* Passionate Experts Section */}
            <section className="py-24 relative">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
                        <ScrollReveal>
                            <div className="space-y-8">
                                <h2 className="text-4xl md:text-5xl font-black font-orbitron text-white">
                                    Passionate Experts in <span className="text-blue-500">Auto Care</span>
                                </h2>
                                <p className="text-gray-400 text-lg leading-relaxed">
                                    We use industry-leading, eco-friendly products for the best results & ensure every detail is perfected. Our approach combines technical mastery with a genuine love for automotive excellence.
                                </p>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-4">
                                    {[
                                        { title: "Top-Quality Products", desc: "Superior products for superior results.", icon: Award },
                                        { title: "Expert Technicians", desc: "Skilled hands. Exceptional care.", icon: Users },
                                        { title: "Skilled Professionals", desc: "Expertise that shows in every detail.", icon: Star },
                                        { title: "Interior & Exterior", desc: "Long-lasting protection for all surfaces.", icon: Shield }
                                    ].map((item, idx) => (
                                        <div key={idx} className="flex gap-4 group">
                                            <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-all shadow-lg">
                                                <item.icon size={24} />
                                            </div>
                                            <div>
                                                <h4 className="text-white font-bold mb-1">{item.title}</h4>
                                                <p className="text-gray-500 text-sm">{item.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </ScrollReveal>

                        <ScrollReveal delay={0.2}>
                            <div className="relative">
                                <div className="absolute inset-0 bg-blue-600/10 rounded-3xl blur-2xl"></div>
                                <img
                                    src="https://images.unsplash.com/photo-1601362840469-51e4d8d58785?q=80&w=1000&auto=format&fit=crop"
                                    alt="Detailing Expertise"
                                    className="relative rounded-3xl border border-white/5 shadow-2xl h-[500px] object-cover w-full"
                                />
                                <div className="absolute -bottom-6 -right-6 bg-blue-600 p-8 rounded-3xl shadow-xl hidden md:block">
                                    <span className="block text-4xl font-black text-white font-orbitron">100%</span>
                                    <span className="text-blue-100 text-xs font-bold uppercase tracking-widest">Satisfaction Guarantee</span>
                                </div>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            {/* What We Do - Service Grid */}
            <section className="py-24 bg-neutral-900/10 relative overflow-hidden">
                {/* Background Text Accent */}
                <div className="absolute top-0 left-0 text-[15rem] font-black text-white/[0.02] font-orbitron -translate-x-1/4 -translate-y-1/4 pointer-events-none uppercase">Works</div>

                <div className="container mx-auto px-4 relative z-10">
                    <ScrollReveal>
                        <div className="text-center mb-20">
                            <h2 className="text-4xl md:text-6xl font-black font-orbitron text-white mb-6 uppercase">
                                What We <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">Do</span>
                            </h2>
                            <p className="text-gray-400 max-w-3xl mx-auto text-lg">
                                Services to delivering premium quality and customer satisfaction. Our services are designed to provide exceptional results while ensuring every customer’s needs and expectations are met with care and professionalism.
                            </p>
                        </div>
                    </ScrollReveal>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service, idx) => (
                            <ScrollReveal key={idx} delay={idx * 0.05}>
                                <div className="group relative bg-white/5 border border-white/5 p-8 rounded-[2rem] hover:bg-neutral-900/80 hover:border-blue-500/40 transition-all duration-500 h-full backdrop-blur-sm">
                                    <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/5 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-600/20 to-cyan-400/10 flex items-center justify-center text-blue-400 mb-8 group-hover:scale-110 transition-transform shadow-inner group-hover:from-blue-600 group-hover:to-cyan-400 group-hover:text-white duration-500">
                                        <service.icon size={28} />
                                    </div>
                                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">{service.title}</h3>
                                    <p className="text-blue-200/60 font-medium text-sm mb-4">{service.desc}</p>
                                    <p className="text-gray-500 text-sm leading-relaxed group-hover:text-gray-400 transition-colors">
                                        {service.longDesc}
                                    </p>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* Knowledge FAQs */}
            <section className="py-32 relative">
                <div className="container mx-auto px-4 max-w-4xl">
                    <ScrollReveal>
                        <div className="text-center mb-16 px-4">
                            <span className="text-blue-400 font-bold tracking-widest uppercase text-xs mb-4 block">Information Center</span>
                            <h2 className="text-3xl md:text-5xl font-black font-orbitron text-white mb-6 uppercase">
                                Knowledge <span className="text-blue-500">FAQs</span>
                            </h2>
                            <p className="text-gray-400 max-w-2xl mx-auto">
                                Everything You Need to Know For Our Services. At UDI'S DETAILING, we believe in transparency and clarity.
                            </p>
                        </div>
                    </ScrollReveal>

                    <div className="space-y-4">
                        {faqs.map((faq, idx) => (
                            <ScrollReveal key={idx} delay={idx * 0.1}>
                                <div
                                    className={`rounded-2xl border transition-all duration-300 overflow-hidden ${openFaq === idx
                                            ? "bg-blue-500/5 border-blue-500/40"
                                            : "bg-white/5 border-white/5 hover:border-white/10"
                                        }`}
                                >
                                    <button
                                        onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                                        className="w-full text-left p-6 md:p-8 flex justify-between items-center group"
                                    >
                                        <span className="text-white font-bold text-lg md:text-xl group-hover:text-blue-400 transition-colors">{faq.question}</span>
                                        <div className={`w-8 h-8 rounded-full border border-white/10 flex items-center justify-center transition-transform duration-500 ${openFaq === idx ? "rotate-180 bg-blue-500 text-white" : "group-hover:bg-white/10"}`}>
                                            <ArrowRight size={18} className="rotate-90" />
                                        </div>
                                    </button>
                                    <AnimatePresence>
                                        {openFaq === idx && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: "auto", opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.3 }}
                                            >
                                                <div className="px-6 md:px-8 pb-8 text-gray-400 leading-relaxed border-t border-white/5 pt-4">
                                                    {faq.answer}
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* Final CTA Section */}
            <section className="py-32 relative overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=2000&auto=format&fit=crop"
                        alt="CTA Background"
                        className="w-full h-full object-cover opacity-30"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-blue-900/20"></div>
                </div>

                <div className="container mx-auto px-4 relative z-10 text-center">
                    <ScrollReveal>
                        <div className="max-w-4xl mx-auto bg-black/60 border border-white/10 rounded-[3rem] p-12 md:p-16 backdrop-blur-md shadow-[0_0_50px_rgba(0,0,0,0.5)]">
                            <span className="inline-block px-4 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-bold uppercase tracking-widest mb-8">Exclusive Offer</span>
                            <h2 className="text-4xl md:text-6xl font-black font-orbitron text-white mb-8 uppercase leading-tight">
                                10% OFF - <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">Book Your</span><br />Detailing Today
                            </h2>
                            <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
                                Take advantage of our limited-time offer and save on premium car detailing services. Experience expert care and bring out the best in your vehicle – all at a great price.
                            </p>
                            <Link
                                href="/appointment"
                                className="group inline-flex items-center gap-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold py-5 px-12 rounded-full hover:shadow-[0_0_40px_rgba(37,99,235,0.6)] transition-all transform hover:scale-105 hover:-translate-y-1 text-lg"
                            >
                                Book Now
                                <ArrowRight className="group-hover:translate-x-2 transition-transform" />
                            </Link>
                        </div>
                    </ScrollReveal>
                </div>
            </section>
        </div>
    );
}
