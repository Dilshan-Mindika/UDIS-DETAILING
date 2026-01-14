"use client";

import { PageHero } from "@/components/sections/PageHero";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import {
    CheckCircle2, ArrowRight, ShieldCheck,
    Zap, Award, Users, Star,
    Droplets, Sparkles, Package,
    Clock, CreditCard, Shield,
    Settings, Lightbulb, PawPrint,
    AirVent, Paintbrush, Disc,
    Layers, Hammer, Scissors,
    Trash2, ShieldPlus, Car, Maximize
} from "lucide-react";
import Link from "next/link";
import { motion, useMotionValue, useSpring, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import { packagesData } from "@/lib/packageData";

const addOnCategories = [
    {
        title: "Maintenance & Care",
        tag: "MAINTENANCE_SYS",
        items: [
            { name: "Engine Bay Cleaning", price: "20", icon: Settings },
            { name: "Extra Dirty Vehicle Charge", price: "50", icon: Trash2 },
            { name: "Odour Removal", price: "40", icon: AirVent },
            { name: "Pet Hair Removal", price: "40", icon: PawPrint },
        ]
    },
    {
        title: "Advanced Protection",
        tag: "PROTECTION_SHIELD",
        items: [
            { name: "Ceramic Coating", price: "900", icon: ShieldPlus },
            { name: "Wheel Face Ceramic Coating(1Y)", price: "100", icon: Disc },
            { name: "PPF (Paint Protection Film)", price: "200", icon: ShieldCheck },
            { name: "Vinyl Wrapping", price: "200", icon: Layers }
        ]
    },
    {
        title: "Restoration & Repair",
        tag: "RESTORATION_TECH",
        items: [
            { name: "Headlight Restoration", price: "100", icon: Lightbulb },
            { name: "PDR (Paintless Dent Removal)", price: "80", icon: Hammer },
            { name: "Scratch Removing & Touch-Up", price: "60", icon: Paintbrush }
        ]
    },
    {
        title: "Vehicle Sizing",
        tag: "DIMENSION_CALC",
        items: [
            { name: "Small SUV / Wagon", price: "40", icon: Car },
            { name: "Large SUV / 4WD / 7 Seater", price: "60", icon: Maximize }
        ]
    }
];

const workflowSteps = [
    {
        id: "01",
        title: "Tier Selection",
        desc: "Analyze and select the elite detailing protocol that matches your vehicle's current condition and your restoration goals.",
        icon: Package,
        tag: "PROTOCOL_SYNC"
    },
    {
        id: "02",
        title: "Secure Scheduling",
        desc: "Coordinate with our automated booking matrix to reserve a high-precision slot that fits your operational timeline.",
        icon: Clock,
        tag: "TIME_LOCK_ACTIVE"
    },
    {
        id: "03",
        title: "Mission Execution",
        desc: "Our master technicians initiate the transformation, utilizing scientific decontamination and artistic precision for absolute perfection.",
        icon: Sparkles,
        tag: "DEPLOYMENT_READY"
    }
];

function PackageCard({ pkg, index }: { pkg: any; index: number }) {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["5deg", "-5deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-5deg", "5deg"]);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        x.set(e.clientX / rect.width - rect.left / rect.width - 0.5);
        y.set(e.clientY / rect.height - rect.top / rect.height - 0.5);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <ScrollReveal delay={index * 0.1}>
            <motion.div
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
                className={`group relative p-8 md:p-10 rounded-[3.5rem] border transition-all duration-700 h-full flex flex-col perspective-1000 ${pkg.recommended
                    ? "bg-neutral-900/70 border-blue-500/40 backdrop-blur-[40px] shadow-[0_0_60px_rgba(59,130,246,0.15)] scale-105 z-20 lg:-translate-y-6"
                    : "bg-black/60 border-white/5 backdrop-blur-2xl hover:border-blue-500/30"
                    }`}
            >
                {/* Ambient Glow */}
                <div className={`absolute -inset-4 bg-gradient-to-tr ${pkg.recommended ? 'from-blue-600/10 to-cyan-500/10' : 'from-blue-600/5 to-transparent'} rounded-[4rem] blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none`} />

                {/* Corner Brackets */}
                <motion.div className="absolute top-10 left-10 w-10 h-10 border-t-2 border-l-2 border-white/10 group-hover:border-blue-500/50 transition-colors pointer-events-none" />
                <motion.div className="absolute bottom-10 right-10 w-10 h-10 border-b-2 border-r-2 border-white/10 group-hover:border-blue-500/50 transition-colors pointer-events-none" />

                <div style={{ transform: "translateZ(50px)" }} className="relative z-10 flex flex-col h-full">
                    <div className="flex justify-between items-start mb-10">
                        <div className="space-y-1.5">
                            <div className="flex items-center gap-2">
                                <div className={`w-2 h-2 rounded-full ${pkg.recommended ? 'bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.5)]' : 'bg-blue-500/40'} animate-pulse`} />
                                <span className={`text-[10px] font-mono tracking-[0.3em] font-bold uppercase ${pkg.recommended ? 'text-cyan-400' : 'text-blue-500/60'}`}>{pkg.tag}</span>
                            </div>
                            <h3 className="text-4xl font-black font-orbitron text-white uppercase tracking-tight leading-none group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-blue-400 transition-all duration-500">{pkg.name}</h3>
                        </div>
                        <div className={`w-14 h-14 rounded-2xl ${pkg.recommended ? 'bg-cyan-500/20 border-cyan-500/30' : 'bg-blue-500/10 border-blue-500/20'} flex items-center justify-center text-blue-400 border shadow-2xl group-hover:scale-110 group-hover:rotate-12 transition-all duration-500`}>
                            {index === 0 ? <Zap size={28} /> : index === 1 ? <Award size={28} /> : <Star size={28} />}
                        </div>
                    </div>

                    <div className="mb-10">
                        <div className="flex items-baseline gap-2 group-hover:scale-105 transition-transform origin-left duration-500">
                            <span className="text-sm font-mono text-blue-500/60 uppercase tracking-widest leading-none mb-1">AUD</span>
                            <span className="text-6xl font-black text-white font-orbitron tabular-nums leading-none">{pkg.price}</span>
                            <span className="text-gray-500 text-xs font-mono uppercase tracking-tighter">/ Start From</span>
                        </div>
                        <p className="text-gray-400 text-base mt-4 leading-relaxed font-light italic opacity-80 group-hover:opacity-100 transition-opacity">{pkg.description}</p>
                    </div>

                    <div className="h-px w-full bg-gradient-to-r from-white/10 to-transparent mb-10" />

                    <ul className="space-y-5 mb-12 flex-1">
                        {pkg.features.slice(0, 5).map((feature: string, fIdx: number) => (
                            <li key={fIdx} className="flex items-center gap-4 group/item">
                                <div className={`w-6 h-6 rounded-lg ${pkg.recommended ? 'bg-cyan-500/20 text-cyan-400 border-cyan-500/30' : 'bg-blue-500/10 text-blue-400 border-blue-500/20'} flex items-center justify-center border transition-all duration-500 group-hover/item:scale-110 group-hover/item:bg-blue-500 group-hover/item:text-white`}>
                                    <CheckCircle2 size={14} />
                                </div>
                                <span className="text-gray-300 text-[15px] font-medium group-hover/item:text-white transition-colors tracking-wide">{feature}</span>
                            </li>
                        ))}
                        {pkg.features.length > 5 && (
                            <li className="text-blue-400/60 text-xs font-mono uppercase tracking-widest pl-10">
                                + {pkg.features.length - 5} More Elite Services
                            </li>
                        )}
                    </ul>

                    <div className="relative pt-4">
                        <div className={`absolute -inset-1 ${pkg.recommended ? 'bg-cyan-500/20 blur-lg' : 'bg-blue-500/10 blur-md'} opacity-0 group-hover:opacity-100 transition-opacity`} />
                        <Link
                            href={`/packages/${pkg.slug}`}
                            className={`w-full py-6 rounded-2xl font-black font-orbitron uppercase tracking-[0.2em] text-center transition-all flex items-center justify-center gap-4 group/btn overflow-hidden relative ${pkg.recommended
                                ? "bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 bg-[length:200%_auto] hover:bg-right text-white shadow-[0_10px_40px_rgba(37,99,235,0.4)]"
                                : "bg-white/5 text-white border border-white/10 hover:bg-white/10 hover:border-blue-500/30"
                                }`}
                        >
                            <span className="relative z-10 flex items-center gap-3">
                                Explore Details
                                <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-2 transition-transform duration-500" />
                            </span>
                        </Link>
                    </div>
                </div>
            </motion.div>
        </ScrollReveal>
    );
}

function AddOnCard({ service }: { service: any }) {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    function onMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
        const { left, top } = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    }

    return (
        <div
            onMouseMove={onMouseMove}
            className="group relative p-6 bg-neutral-900/40 border border-white/5 rounded-3xl hover:border-blue-500/30 transition-all duration-500 overflow-hidden backdrop-blur-md h-full flex flex-col"
        >
            <motion.div
                className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                    background: useTransform(
                        [mouseX, mouseY],
                        ([x, y]) => `radial-gradient(400px circle at ${x}px ${y}px, rgba(59, 130, 246, 0.08), transparent 80%)`
                    ),
                }}
            />

            <div className="absolute top-4 right-6 flex items-center gap-2">
                <span className="text-[8px] font-mono text-blue-500/40 opacity-0 group-hover:opacity-100 transition-opacity uppercase tracking-widest">queue_ready</span>
                <div className="w-1.5 h-1.5 rounded-full bg-blue-500/20 group-hover:bg-blue-500 transition-colors"></div>
            </div>

            <div className="relative z-10 flex flex-col h-full">
                <div className="w-12 h-12 rounded-2xl bg-blue-500/5 flex items-center justify-center text-blue-400 group-hover:text-blue-300 group-hover:scale-110 group-hover:bg-blue-500/10 transition-all duration-500 border border-white/5 mb-6 shadow-glow">
                    <service.icon size={24} />
                </div>

                <div className="space-y-4 flex-1 flex flex-col justify-between">
                    <div>
                        <h4 className="text-white font-bold font-orbitron text-sm uppercase tracking-wider group-hover:text-blue-400 transition-colors leading-tight min-h-[2.5rem] flex items-center">
                            {service.name}
                        </h4>
                        <div className="h-px w-full bg-gradient-to-r from-blue-500/20 to-transparent mt-2 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></div>
                    </div>

                    <div className="flex items-end justify-between mt-auto">
                        <div className="flex flex-col">
                            <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest leading-none mb-1">Starting_At</span>
                            <span className="text-2xl font-black text-white font-orbitron whitespace-nowrap leading-none">AUD {service.price}</span>
                        </div>
                        <Link
                            href="/appointment"
                            className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-white/40 hover:bg-blue-600 hover:text-white transition-all transform hover:rotate-45 shadow-lg shadow-black/40"
                        >
                            <ArrowRight size={18} />
                        </Link>
                    </div>
                </div>
            </div>

            <div className="absolute -bottom-2 -left-2 text-[40px] font-black text-white/[0.02] font-orbitron pointer-events-none select-none uppercase italic group-hover:text-blue-500/[0.03] transition-colors leading-none">
                {service.name.split(' ')[0]}
            </div>
        </div>
    );
}

export default function PackagesPage() {
    return (
        <div className="min-h-screen bg-black text-white selection:bg-blue-500/30 selection:text-white">
            {/* Hero Section */}
            <PageHero
                badgeIcon={Zap}
                badgeText="SYSTEM.PRICING_MATRIX"
                title="ELITE"
                highlightedTitle="PACKAGES"
                subtitle="Precision Engineered Detailing Perfected. Discover the science of restoration."
                backgroundImage="https://images.unsplash.com/photo-1620706122118-206fc3c15562?q=80&w=2000&auto=format&fit=crop"
            >
                <div className="flex gap-4 mt-12 justify-center">
                    <div className="h-1.5 w-24 bg-blue-600 rounded-full shadow-[0_0_15px_rgba(37,99,235,0.5)]"></div>
                    <div className="h-1.5 w-12 bg-blue-600/30 rounded-full"></div>
                    <div className="h-1.5 w-6 bg-blue-600/10 rounded-full"></div>
                </div>
            </PageHero>

            {/* Main Packages Section */}
            <section className="py-24 relative">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>

                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 md:gap-14 relative z-10">
                        {packagesData.map((pkg, idx) => (
                            <PackageCard key={idx} pkg={pkg} index={idx} />
                        ))}
                    </div>
                </div>

                {/* Background HUD Grid */}
                <div className="absolute inset-0 z-0 opacity-20 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.02) 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
            </section>

            {/* Add-on Services Grid */}
            <section className="py-32 relative overflow-hidden bg-neutral-900/10">
                <div className="container mx-auto px-4">
                    <ScrollReveal>
                        <div className="text-center mb-24 max-w-4xl mx-auto">
                            <span className="text-blue-500 font-mono text-xs tracking-[0.5em] uppercase mb-4 block">Specialized Treatments</span>
                            <h2 className="text-5xl md:text-7xl font-black font-orbitron text-white mb-8 uppercase tracking-tighter leading-none">ADDITIONAL <span className="text-blue-500">EXPERTISE</span></h2>
                            <div className="h-1 w-24 bg-blue-600 mx-auto mb-8 rounded-full"></div>
                            <p className="text-gray-400 text-xl font-light leading-relaxed italic">Custom add-ons and specialized treatments for targeted restoration and protective reinforcement.</p>
                        </div>
                    </ScrollReveal>

                    <div className="space-y-32">
                        {addOnCategories.map((category, catIdx) => (
                            <ScrollReveal key={catIdx} delay={catIdx * 0.1}>
                                <div className="space-y-12">
                                    <div className="flex items-center gap-8">
                                        <div className="flex items-center gap-6 group">
                                            <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-500 font-black font-orbitron group-hover:scale-110 transition-transform">
                                                {catIdx + 1}
                                            </div>
                                            <div className="flex flex-col">
                                                <span className="text-[10px] font-mono text-blue-500/60 tracking-[0.3em] font-bold uppercase">{category.tag}</span>
                                                <h3 className="text-3xl md:text-4xl font-black font-orbitron text-white uppercase tracking-wider group-hover:text-blue-400 transition-colors">{category.title}</h3>
                                            </div>
                                        </div>
                                        <div className="h-[2px] flex-1 bg-gradient-to-r from-blue-500/30 via-blue-500/5 to-transparent"></div>
                                    </div>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                                        {category.items.map((service, idx) => (
                                            <AddOnCard key={idx} service={service} />
                                        ))}
                                    </div>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* How It Works Section */}
            <section className="py-32 relative overflow-hidden">
                <div className="absolute inset-0 bg-neutral-900/5 backdrop-blur-3xl"></div>

                <div className="container mx-auto px-4 relative z-10">
                    <ScrollReveal>
                        <div className="text-center mb-24">
                            <h2 className="text-5xl md:text-8xl font-black font-orbitron text-white mb-8 uppercase tracking-tighter leading-none">HOW IT <span className="text-cyan-400">WORKS</span></h2>
                            <p className="text-gray-400 max-w-3xl mx-auto text-xl font-light leading-relaxed italic border-l-4 border-cyan-500/30 pl-8 ml-auto mr-auto text-left py-4">
                                Precision scheduling meets elite craftsmanship. Pick a convenient slot and let our <span className="text-white font-medium italic underline decoration-cyan-400/30 underline-offset-8">master technicians</span> handle the transformation.
                            </p>
                        </div>
                    </ScrollReveal>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-16 lg:gap-24 relative">
                        {/* Connecting Motion Lines */}
                        <div className="absolute top-1/2 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent hidden md:block -translate-y-1/2 z-0">
                            <motion.div
                                animate={{ x: ["0%", "100%"] }}
                                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                                className="w-48 h-full bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
                            />
                        </div>

                        {workflowSteps.map((step, idx) => (
                            <ScrollReveal key={idx} delay={idx * 0.2}>
                                <div className="relative z-10 text-center space-y-10 group">
                                    <div className="w-32 h-32 mx-auto rounded-[2.5rem] bg-black border border-white/5 flex items-center justify-center text-cyan-400 shadow-2xl relative transition-all duration-700 group-hover:shadow-[0_0_50px_rgba(34,211,238,0.15)] group-hover:border-cyan-500/30 group-hover:-translate-y-2">
                                        <div className="absolute -inset-4 bg-cyan-500/5 rounded-[3rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                        <div className="absolute -top-4 -right-4 w-12 h-12 rounded-2xl bg-cyan-600 text-white font-black font-orbitron text-sm flex items-center justify-center border-4 border-black shadow-xl">
                                            {step.id}
                                        </div>
                                        <step.icon size={52} className="relative z-10 group-hover:scale-110 transition-transform duration-700" />
                                    </div>
                                    <div className="space-y-5">
                                        <div className="flex flex-col items-center gap-2">
                                            <span className="text-[10px] font-mono text-cyan-500/60 uppercase tracking-[0.3em] font-bold">Status: {(step as any).tag}</span>
                                            <h4 className="text-3xl font-black font-orbitron text-white uppercase tracking-wider group-hover:text-cyan-400 transition-colors">{step.title}</h4>
                                        </div>
                                        <p className="text-gray-400 text-lg font-light leading-relaxed max-w-xs mx-auto opacity-80 group-hover:opacity-100 transition-opacity px-4">{step.desc}</p>
                                    </div>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>

                    {/* Trust HUD Plaques */}
                    <div className="mt-24 grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
                        <ScrollReveal>
                            <div className="flex items-center gap-8 p-10 bg-neutral-900/60 border border-white/5 rounded-[2.5rem] backdrop-blur-xl group hover:border-blue-500/40 transition-all duration-700 relative overflow-hidden">
                                <div className="absolute -right-4 -bottom-4 text-[100px] font-black font-orbitron text-white/[0.01] pointer-events-none select-none uppercase italic">SECURE</div>
                                <div className="w-20 h-20 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-400 shrink-0 border border-blue-500/20 group-hover:scale-110 transition-transform">
                                    <CreditCard size={40} />
                                </div>
                                <div className="space-y-2 relative z-10">
                                    <h5 className="text-white text-xl font-black font-orbitron uppercase tracking-widest leading-none">Secure Payment</h5>
                                    <p className="text-gray-400 text-base font-light font-mono text-[11px] uppercase tracking-widest opacity-60 group-hover:opacity-100 transition-opacity">Protocol: Encrypted_Auth.v2</p>
                                    <p className="text-gray-500 text-base font-light leading-relaxed">Fully secure, smooth and protected transactions for every elite service.</p>
                                </div>
                            </div>
                        </ScrollReveal>
                        <ScrollReveal delay={0.1}>
                            <div className="flex items-center gap-8 p-10 bg-neutral-900/60 border border-white/5 rounded-[2.5rem] backdrop-blur-xl group hover:border-cyan-500/40 transition-all duration-700 relative overflow-hidden">
                                <div className="absolute -right-4 -bottom-4 text-[100px] font-black font-orbitron text-white/[0.01] pointer-events-none select-none uppercase italic">ELITE</div>
                                <div className="w-20 h-20 rounded-2xl bg-cyan-500/10 flex items-center justify-center text-cyan-400 shrink-0 border border-cyan-500/20 group-hover:scale-110 transition-transform">
                                    <Shield size={40} />
                                </div>
                                <div className="space-y-2 relative z-10">
                                    <h5 className="text-white text-xl font-black font-orbitron uppercase tracking-widest leading-none">Elite Guarantee</h5>
                                    <p className="text-gray-400 text-base font-light font-mono text-[11px] uppercase tracking-widest opacity-60 group-hover:opacity-100 transition-opacity">Status: Verification_Active</p>
                                    <p className="text-gray-500 text-base font-light leading-relaxed">Absolute quality and peace of mind with every professional restoration service.</p>
                                </div>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            {/* Final CTA Section */}
            <section className="py-40 relative overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2000&auto=format&fit=crop"
                        alt="CTA Background"
                        className="w-full h-full object-cover opacity-30 contrast-[1.1] brightness-75 grayscale-[0.3]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/90 to-blue-900/10"></div>
                </div>

                {/* Volumetric Pulse Light */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/10 rounded-full blur-[150px] opacity-40 animate-pulse pointer-events-none"></div>

                <div className="container mx-auto px-4 relative z-10 text-center">
                    <ScrollReveal>
                        <div className="max-w-5xl mx-auto bg-neutral-900/70 border border-white/10 rounded-[5rem] p-16 md:p-28 backdrop-blur-[40px] shadow-[0_0_100px_rgba(0,0,0,0.5)] relative overflow-hidden group">
                            {/* Technical Grid Overlay */}
                            <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'linear-gradient(rgba(59,130,246,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.3) 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>

                            {/* HUD Brackets - Extreme Scale */}
                            <div className="absolute top-12 left-12 w-20 h-20 border-t-2 border-l-2 border-white/10 group-hover:border-blue-500/40 transition-colors pointer-events-none"></div>
                            <div className="absolute bottom-12 right-12 w-20 h-20 border-b-2 border-r-2 border-white/10 group-hover:border-blue-500/40 transition-colors pointer-events-none"></div>

                            <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono tracking-[0.4em] uppercase mb-12 shadow-inner">
                                <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-ping"></span>
                                READY_FOR_DEPLOYMENT
                            </div>

                            <h2 className="text-6xl md:text-9xl font-black font-orbitron text-white mb-10 tracking-tighter uppercase leading-[0.85] group-hover:scale-105 transition-transform duration-700">
                                PERFORMANCE <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-cyan-400 to-blue-500">PERFECTED.</span>
                            </h2>

                            <p className="text-2xl md:text-3xl text-gray-400 mb-16 max-w-3xl mx-auto font-light leading-relaxed italic border-l-2 border-white/10 pl-8">
                                Secure your slot for a <span className="text-white font-medium italic underline decoration-blue-500/30 underline-offset-8">world-class</span> restoration journey. Experience unmatched quality and care.
                            </p>

                            <div className="relative inline-block mt-8">
                                <div className="absolute -inset-8 bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 rounded-full blur-[40px] opacity-0 group-hover:opacity-40 transition-opacity duration-700"></div>
                                <Link
                                    href="/appointment"
                                    className="relative flex items-center gap-6 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-black py-8 px-20 rounded-full shadow-[0_20px_60px_rgba(29,78,216,0.5)] transition-all transform hover:scale-110 hover:-translate-y-2 text-2xl uppercase tracking-[0.3em] font-orbitron group/link overflow-hidden"
                                >
                                    <span className="relative z-10 font-black">Schedule Now</span>
                                    <ArrowRight className="w-8 h-8 group-hover/link:translate-x-3 transition-transform duration-700 relative z-10" />
                                    {/* Shimmer Effect */}
                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-shimmer" />
                                </Link>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </section>
        </div>
    );
}
