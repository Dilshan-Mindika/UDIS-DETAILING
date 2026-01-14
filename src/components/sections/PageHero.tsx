"use client";

import { motion } from "framer-motion";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { LucideIcon } from "lucide-react";
import { ReactNode } from "react";

interface PageHeroProps {
    title: string;
    highlightedTitle?: string;
    subtitle: string;
    badgeIcon: LucideIcon;
    badgeText: string;
    backgroundImage: string;
    scannerPulse?: boolean;
    atmosphericGlows?: boolean;
    children?: ReactNode;
}

export function PageHero({
    title,
    highlightedTitle,
    subtitle,
    badgeIcon: BadgeIcon,
    badgeText,
    backgroundImage,
    scannerPulse = true,
    atmosphericGlows = true,
    children
}: PageHeroProps) {
    return (
        <section className="relative pt-44 pb-32 overflow-hidden min-h-[70vh] flex items-center">
            {/* Background Layer */}
            <div className="absolute inset-0 z-0 scale-105">
                <img
                    src={backgroundImage}
                    alt={title}
                    className="w-full h-full object-cover opacity-30 grayscale-[0.3] contrast-[1.1]"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black"></div>

                {atmosphericGlows && (
                    <>
                        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[180px] animate-pulse"></div>
                        <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-cyan-600/10 rounded-full blur-[180px] animate-pulse" style={{ animationDelay: '2s' }}></div>
                    </>
                )}
            </div>

            {/* Vertical Scanner Pulse */}
            {scannerPulse && (
                <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
                    <motion.div
                        animate={{ top: ["-100%", "200%"] }}
                        transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                        className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-blue-500/40 to-transparent shadow-[0_0_20px_rgba(59,130,246,0.5)]"
                    />
                </div>
            )}

            <div className="container mx-auto px-4 relative z-20">
                <ScrollReveal>
                    <div className="flex flex-col items-center text-center max-w-5xl mx-auto">
                        {/* HUD Badge */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="inline-flex items-center gap-3 bg-blue-500/10 border border-blue-500/20 px-6 py-2 rounded-full mb-10 backdrop-blur-xl"
                        >
                            <BadgeIcon size={14} className="text-blue-500" />
                            <span className="text-[10px] font-mono text-blue-400 tracking-[0.4em] uppercase font-black">{badgeText}</span>
                        </motion.div>

                        {/* Title */}
                        <h1 className="text-6xl md:text-9xl font-black font-orbitron text-white uppercase tracking-tighter leading-[0.85] mb-10">
                            {title}{" "}
                            {highlightedTitle && (
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-cyan-400 to-blue-400 italic">
                                    {highlightedTitle}
                                </span>
                            )}
                        </h1>

                        {/* Subtitle */}
                        <p className="text-xl md:text-2xl text-gray-400 font-light max-w-3xl leading-relaxed italic mb-12">
                            {subtitle}
                        </p>

                        {/* Additional Content (like stats) */}
                        {children}
                    </div>
                </ScrollReveal>
            </div>

            {/* Technical Decoration - Vertical Line */}
            <div className="absolute inset-y-0 right-1/4 w-px bg-gradient-to-b from-transparent via-blue-500/10 to-transparent hidden lg:block" />
        </section>
    );
}
