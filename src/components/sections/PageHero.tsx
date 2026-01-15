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
        <section className="relative pt-32 pb-24 overflow-hidden min-h-[60vh] flex items-center">
            {/* Background Layer */}
            <div className="absolute inset-0 z-0">
                <img
                    src={backgroundImage}
                    alt={title}
                    className="w-full h-full object-cover opacity-30 grayscale-[0.3] contrast-[1.1] scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black"></div>

                {atmosphericGlows && (
                    <>
                        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[150px] animate-pulse"></div>
                        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-cyan-600/5 rounded-full blur-[150px] animate-pulse" style={{ animationDelay: '2s' }}></div>
                    </>
                )}
            </div>

            {/* Vertical Scanner Pulse - Made subtler and optional */}
            {scannerPulse && (
                <div className="absolute inset-0 overflow-hidden pointer-events-none z-10 opacity-30">
                    <motion.div
                        animate={{ top: ["-100%", "200%"] }}
                        transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                        className="absolute left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-blue-500/20 to-transparent shadow-[0_0_10px_rgba(59,130,246,0.2)]"
                    />
                </div>
            )}

            <div className="container mx-auto px-4 relative z-20">
                <ScrollReveal>
                    <div className="flex flex-col items-center text-center max-w-6xl mx-auto">
                        {/* HUD Badge */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="inline-flex items-center gap-3 bg-blue-500/5 border border-blue-500/10 px-5 py-2 rounded-full mb-8 backdrop-blur-md"
                        >
                            <BadgeIcon size={14} className="text-blue-500" />
                            <span className="text-[10px] font-mono text-blue-400 tracking-[0.4em] uppercase font-black">{badgeText}</span>
                        </motion.div>

                        {/* Brand Supertitle - Added globally */}
                        <div className="mb-4 overflow-hidden">
                            <motion.span
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.2 }}
                                className="block text-blue-500 font-bold tracking-[0.3em] text-sm md:text-base font-orbitron"
                            >
                                UDI'S DETAILING
                            </motion.span>
                        </div>

                        {/* Title - Adjusted sizing and leading for better visibility */}
                        <h1 className="text-5xl md:text-8xl font-black font-orbitron text-white uppercase tracking-tighter leading-[1.1] mb-8 drop-shadow-2xl">
                            {title}{" "}
                            {highlightedTitle && (
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-cyan-400 to-blue-400 italic pr-8 inline-block pb-2 -mr-8">
                                    {highlightedTitle}
                                </span>
                            )}
                        </h1>

                        {/* Subtitle - Improved readability */}
                        <p className="text-lg md:text-2xl text-gray-300 font-light max-w-4xl leading-relaxed italic mb-10 text-shadow-sm">
                            {subtitle}
                        </p>

                        {/* Loading Bar Decoration - Added globally */}
                        <div className="flex gap-4 mb-10 justify-center">
                            <div className="h-1.5 w-24 bg-blue-600 rounded-full shadow-[0_0_15px_rgba(37,99,235,0.5)]"></div>
                            <div className="h-1.5 w-12 bg-blue-600/30 rounded-full"></div>
                            <div className="h-1.5 w-6 bg-blue-600/10 rounded-full"></div>
                        </div>

                        {/* Additional Content (like stats) */}
                        {children}
                    </div>
                </ScrollReveal>
            </div>

            {/* Technical Decoration - Vertical Line - Made subtler */}
            <div className="absolute inset-y-0 right-1/4 w-px bg-gradient-to-b from-transparent via-blue-900/10 to-transparent hidden lg:block opacity-50" />
        </section>
    );
}
