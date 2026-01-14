"use client";

import { packagesData } from "@/lib/packageData";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import BookingForm from "@/components/BookingForm";
import {
    CheckCircle2, XCircle, ArrowLeft, Clock,
    ShieldCheck, Zap, Award, Star, Info,
    ChevronRight, Sparkles
} from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useParams, notFound } from "next/navigation";

export default function PackageDetailPage() {
    const params = useParams();
    const slug = params.slug as string;
    const pkg = packagesData.find(p => p.slug === slug);

    if (!pkg) {
        return notFound();
    }

    const Icon = pkg.icon;

    return (
        <div className="min-h-screen bg-black text-white selection:bg-blue-500/30 selection:text-white">
            {/* Hero Section */}
            <section className="relative pt-40 pb-20 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src={pkg.heroImage}
                        alt={pkg.name}
                        className="w-full h-full object-cover opacity-30 grayscale-[0.3] contrast-[1.2]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black"></div>
                </div>

                <div className="container mx-auto px-4 relative z-10">
                    <Link
                        href="/packages"
                        className="inline-flex items-center gap-2 text-blue-400 font-mono text-xs uppercase tracking-[0.3em] mb-12 group hover:text-white transition-colors"
                    >
                        <ArrowLeft size={14} className="group-hover:-translate-y-1 transition-transform" />
                        [ Back to Packages ]
                    </Link>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <ScrollReveal>
                            <div className="space-y-8">
                                <div className="inline-flex items-center gap-3 bg-blue-500/10 border border-blue-500/20 px-4 py-1.5 rounded-full">
                                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse"></span>
                                    <span className="text-[10px] font-mono text-blue-400 tracking-[0.3em] uppercase">{pkg.tag}</span>
                                </div>
                                <h1 className="text-6xl md:text-8xl font-black font-orbitron text-white uppercase tracking-tighter leading-none">
                                    {pkg.name.split(' ')[0]} <br />
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-cyan-400 to-blue-400">{pkg.name.split(' ')[1]}</span>
                                </h1>
                                <p className="text-xl md:text-2xl text-gray-400 font-light leading-relaxed max-w-xl italic">
                                    {pkg.details}
                                </p>
                                <div className="flex flex-wrap gap-8">
                                    <div className="flex flex-col">
                                        <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest leading-none mb-2">Duration.Metric</span>
                                        <div className="flex items-center gap-3 text-white">
                                            <Clock size={20} className="text-blue-500" />
                                            <span className="text-xl font-bold font-orbitron tracking-widest">{pkg.time}</span>
                                        </div>
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest leading-none mb-2">Price.Base</span>
                                        <div className="flex items-center gap-3 text-white">
                                            <span className="text-xl font-mono text-blue-500/60 leading-none">AUD</span>
                                            <span className="text-4xl font-black font-orbitron tabular-nums leading-none">{pkg.price}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </ScrollReveal>

                        <ScrollReveal delay={0.2}>
                            <div className="relative group">
                                <div className="absolute -inset-4 bg-blue-600/10 rounded-[4rem] blur-[100px] opacity-50 animate-pulse"></div>
                                <div className="relative bg-neutral-900/40 border border-white/5 backdrop-blur-[40px] p-10 rounded-[3.5rem] shadow-2xl overflow-hidden">
                                    <div className="absolute top-0 right-0 p-8 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity">
                                        <Icon size={200} />
                                    </div>
                                    <h3 className="text-2xl font-black font-orbitron text-white uppercase mb-8 flex items-center gap-4">
                                        <ShieldCheck className="text-blue-500" size={24} />
                                        Inclusions List
                                    </h3>
                                    <ul className="space-y-4">
                                        {pkg.features.map((feature, idx) => (
                                            <li key={idx} className="flex items-center gap-4 group/item">
                                                <div className="w-5 h-5 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 shrink-0">
                                                    <CheckCircle2 size={12} />
                                                </div>
                                                <span className="text-gray-300 group-hover/item:text-white transition-colors tracking-wide">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            {/* Detailed Content & Booking Form */}
            <section className="py-24 relative overflow-hidden bg-neutral-900/10">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                        {/* Exclusions & Intel */}
                        <div className="lg:col-span-5 space-y-12">
                            <ScrollReveal>
                                <div className="bg-black/40 border border-white/5 p-10 rounded-[2.5rem] backdrop-blur-xl relative overflow-hidden">
                                    <div className="absolute -right-4 -top-4 text-[100px] font-black font-orbitron text-white/[0.01] pointer-events-none select-none uppercase italic">RESTRICT</div>
                                    <h3 className="text-2xl font-black font-orbitron text-white uppercase mb-8 flex items-center gap-4">
                                        <Info className="text-red-500/60" size={24} />
                                        Exclusions
                                    </h3>
                                    <ul className="space-y-4">
                                        {pkg.notIncluded.map((item, idx) => (
                                            <li key={idx} className="flex items-center gap-4 opacity-70">
                                                <div className="w-5 h-5 rounded-full bg-red-500/5 border border-red-500/10 flex items-center justify-center text-red-500/40 shrink-0">
                                                    <XCircle size={12} />
                                                </div>
                                                <span className="text-gray-400 line-through decoration-red-500/20">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    <p className="mt-8 text-xs font-mono text-gray-500 uppercase tracking-widest leading-relaxed">
                                        * These services can be added as custom expertise modules via the optional grid below.
                                    </p>
                                </div>
                            </ScrollReveal>

                            <ScrollReveal delay={0.1}>
                                <div className="p-10 bg-gradient-to-br from-blue-600/10 to-transparent border border-blue-500/10 rounded-[2.5rem] space-y-6">
                                    <h4 className="text-xl font-bold font-orbitron text-white uppercase flex items-center gap-3">
                                        <Sparkles className="text-cyan-400" size={20} />
                                        Our Commitment
                                    </h4>
                                    <p className="text-gray-400 font-light leading-relaxed">
                                        Every vehicle under the <span className="text-white font-medium italic">Standard Detailing Protocol</span> receives a specialized decontamination phase and at least one layer of high-performance surface protection. We don't just wash; we preserve.
                                    </p>
                                </div>
                            </ScrollReveal>
                        </div>

                        {/* Booking Form */}
                        <div className="lg:col-span-7">
                            <ScrollReveal delay={0.3}>
                                <div className="bg-neutral-900/60 border border-blue-500/20 p-12 lg:p-16 rounded-[4rem] backdrop-blur-3xl shadow-2xl relative">
                                    <div className="absolute top-10 right-10 flex gap-2">
                                        <div className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-ping"></div>
                                        <span className="text-[8px] font-mono text-blue-500 uppercase tracking-widest">Live_Channel.Encrypted</span>
                                    </div>
                                    <div className="mb-12">
                                        <h2 className="text-4xl md:text-5xl font-black font-orbitron text-white uppercase mb-4 tracking-tighter">Secure Your <span className="text-blue-500">Slot</span></h2>
                                        <p className="text-gray-400 text-lg font-light leading-relaxed">Initiate the scheduling sequence for your <span className="text-white font-medium italic">{pkg.name}</span>.</p>
                                    </div>
                                    <BookingForm packageName={pkg.name} />
                                </div>
                            </ScrollReveal>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
