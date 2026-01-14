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
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from "framer-motion";

function SpotlightCard({ index, service }: { index: number, service: any }) {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    function onMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
        const { left, top } = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    }

    // 3D Tilt Effect
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7deg", "-7deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7deg", "7deg"]);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;
        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
            }}
            onMouseMove={(e) => {
                onMouseMove(e);
                handleMouseMove(e);
            }}
            onMouseLeave={handleMouseLeave}
            className="group relative bg-neutral-900/60 border border-white/5 p-8 rounded-[2.5rem] hover:border-blue-500/50 transition-all duration-700 h-full backdrop-blur-[32px] overflow-hidden shadow-2xl"
        >
            {/* Spotlight Overlay */}
            <motion.div
                className="pointer-events-none absolute -inset-px rounded-[2.5rem] opacity-0 transition duration-300 group-hover:opacity-100"
                style={{
                    background: useMotionTemplate`
                        radial-gradient(
                            650px circle at ${mouseX}px ${mouseY}px,
                            rgba(59, 130, 246, 0.15),
                            transparent 80%
                        )
                    `,
                }}
            />

            {/* Technical HUD Brackets */}
            <div className="absolute top-6 left-6 w-8 h-8 border-t border-l border-white/10 group-hover:border-blue-500/50 transition-colors duration-500 pointer-events-none"></div>
            <div className="absolute bottom-6 right-6 w-8 h-8 border-b border-r border-white/10 group-hover:border-blue-500/50 transition-colors duration-500 pointer-events-none"></div>

            {/* Technical ID Tag */}
            <div className="absolute top-8 left-16 flex items-center gap-2 opacity-20 group-hover:opacity-60 transition-opacity">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse"></div>
                <span className="text-[10px] font-mono text-white tracking-tighter uppercase whitespace-nowrap">UDI-SYS-{(index + 1).toString().padStart(3, '0')}</span>
            </div>

            {/* Stylized background number */}
            <div className="absolute top-4 right-8 text-8xl font-black text-white/[0.03] font-orbitron select-none pointer-events-none group-hover:text-blue-500/10 transition-all duration-700 group-hover:scale-110">
                {(index + 1).toString().padStart(2, '0')}
            </div>

            <div className="relative z-10" style={{ transform: "translateZ(60px)" }}>
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-600/20 to-cyan-400/10 flex items-center justify-center text-blue-400 mb-8 group-hover:scale-110 transition-all duration-700 shadow-[inset_0_0_20px_rgba(59,130,246,0.1)] border border-white/5 group-hover:border-blue-500/40 group-hover:from-blue-600 group-hover:to-cyan-400 group-hover:text-white group-hover:shadow-[0_0_30px_rgba(37,99,235,0.4)]">
                    <service.icon size={32} />
                </div>

                <h3 className="text-2xl font-black font-orbitron text-white mb-4 group-hover:text-blue-400 transition-colors tracking-tight">
                    {service.title}
                </h3>

                <div className="flex items-center gap-3 mb-5">
                    <div className="h-[2px] w-10 bg-gradient-to-r from-blue-500 to-transparent group-hover:w-16 transition-all duration-700"></div>
                    <p className="text-cyan-400 font-bold text-[10px] uppercase tracking-[0.2em] drop-shadow-[0_0_5px_rgba(34,211,238,0.3)]">{service.desc}</p>
                </div>

                <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-200 transition-colors font-light">
                    {service.longDesc}
                </p>

                {/* Subtle glass accent */}
                <div className="mt-10 pt-6 border-t border-white/5 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-all duration-700 translate-y-4 group-hover:translate-y-0">
                    <div className="flex flex-col">
                        <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest leading-none mb-1">Service Level</span>
                        <span className="text-[11px] font-black text-blue-400 uppercase tracking-widest font-orbitron">Professional</span>
                    </div>
                    <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-blue-500 group-hover:text-white transition-all duration-500">
                        <ArrowRight className="w-4 h-4" />
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

import { useMotionTemplate } from "framer-motion";

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
            <section className="relative py-44 overflow-hidden flex items-center justify-center min-h-[75vh]">
                <div className="absolute inset-0 z-0">
                    <motion.div
                        animate={{
                            scale: [1, 1.05, 1],
                            opacity: [0.6, 0.7, 0.6]
                        }}
                        transition={{
                            duration: 12,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                        className="w-full h-full"
                    >
                        <img
                            src="/images/services_hero.png"
                            alt="Professional Detailing Studio"
                            className="w-full h-full object-cover"
                        />
                    </motion.div>
                    <div className="absolute inset-0 bg-gradient-to-b from-black via-black/40 to-black"></div>
                </div>

                {/* Cyber Grid Overlay */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(0,100,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,100,255,0.05)_1px,transparent_1px)] bg-[size:100px_100px] opacity-20 pointer-events-none z-10"></div>

                <div className="container mx-auto px-4 relative z-20 text-center">
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
                {/* Master Scanner Effect */}
                <motion.div
                    animate={{
                        left: ["-10%", "110%"],
                        opacity: [0, 1, 0]
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "linear",
                        times: [0, 0.5, 1]
                    }}
                    className="absolute top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-blue-500/50 to-transparent z-40 hidden lg:block"
                />

                {/* Ambient Holographic Hub */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-blue-600/5 rounded-full blur-[150px] opacity-40 pointer-events-none animate-pulse"></div>

                {/* Background Text Accent */}
                <div className="absolute top-0 left-0 text-[18rem] font-black text-white/[0.01] font-orbitron -translate-x-1/4 -translate-y-1/4 pointer-events-none uppercase tracking-tighter">UDI'S</div>
                <div className="absolute bottom-0 right-0 text-[18rem] font-black text-blue-500/[0.01] font-orbitron translate-x-1/4 translate-y-1/4 pointer-events-none uppercase tracking-tighter">PRECISION</div>

                <div className="container mx-auto px-4 relative z-10">
                    <ScrollReveal>
                        <div className="text-center mb-24 max-w-4xl mx-auto px-4">
                            <span className="text-blue-400 font-mono text-[10px] tracking-[0.5em] uppercase mb-4 block">System.Execute(Detailing_Grid)</span>
                            <h2 className="text-5xl md:text-8xl font-black font-orbitron text-white mb-8 tracking-tighter uppercase">
                                What We <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400 underline decoration-blue-500/20 underline-offset-8">Do</span>
                            </h2>
                            <p className="text-gray-400 text-lg md:text-xl font-light leading-relaxed">
                                Our services are designed to provide <span className="text-white font-medium">exceptional results</span> while ensuring every customer’s needs and expectations are met with care and professionalism. From restoration to protection, we deliver premium quality.
                            </p>
                        </div>
                    </ScrollReveal>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12">
                        {services.map((service, idx) => (
                            <ScrollReveal key={idx} delay={idx * 0.05}>
                                <SpotlightCard index={idx} service={service} />
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
