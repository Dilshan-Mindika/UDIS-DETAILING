"use client";

import { motion } from "framer-motion";

export function HudFrame() {
    return (
        <div className="absolute inset-0 pointer-events-none z-50 overflow-hidden">
            {/* Corner TL */}
            <svg className="absolute top-8 left-8 w-24 h-24" viewBox="0 0 100 100">
                <path d="M0 0 L40 0 L50 10" stroke="var(--primary)" strokeWidth="2" fill="none" className="text-primary opacity-60" />
                <path d="M0 0 L0 40 L10 50" stroke="var(--primary)" strokeWidth="2" fill="none" className="text-primary opacity-60" />
                <circle cx="5" cy="5" r="2" className="fill-accent animate-ping" />
            </svg>

            {/* Corner TR */}
            <svg className="absolute top-8 right-8 w-24 h-24 rotate-90" viewBox="0 0 100 100">
                <path d="M0 0 L40 0 L50 10" stroke="var(--primary)" strokeWidth="2" fill="none" className="text-primary opacity-60" />
                <path d="M0 0 L0 40 L10 50" stroke="var(--primary)" strokeWidth="2" fill="none" className="text-primary opacity-60" />
            </svg>

            {/* Corner BL */}
            <svg className="absolute bottom-8 left-8 w-24 h-24 -rotate-90" viewBox="0 0 100 100">
                <path d="M0 0 L40 0 L50 10" stroke="var(--primary)" strokeWidth="2" fill="none" className="text-primary opacity-60" />
                <path d="M0 0 L0 40 L10 50" stroke="var(--primary)" strokeWidth="2" fill="none" className="text-primary opacity-60" />
            </svg>

            {/* Corner BR */}
            <svg className="absolute bottom-8 right-8 w-24 h-24 rotate-180" viewBox="0 0 100 100">
                <path d="M0 0 L40 0 L50 10" stroke="var(--primary)" strokeWidth="2" fill="none" className="text-primary opacity-60" />
                <path d="M0 0 L0 40 L10 50" stroke="var(--primary)" strokeWidth="2" fill="none" className="text-primary opacity-60" />
                <circle cx="5" cy="5" r="2" className="fill-accent animate-ping" />
            </svg>

            {/* Scanning Line */}
            <motion.div
                initial={{ top: "0%" }}
                animate={{ top: "100%" }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                className="absolute left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent"
            />

            {/* Side Data Bars */}
            <div className="absolute left-8 top-1/2 -translate-y-1/2 w-1 h-32 bg-white/5 flex flex-col gap-1">
                {[...Array(10)].map((_, i) => (
                    <motion.div
                        key={i}
                        animate={{ opacity: [0.2, 0.8, 0.2] }}
                        transition={{ duration: 1, delay: i * 0.1, repeat: Infinity }}
                        className="w-full h-full bg-primary/40"
                    />
                ))}
            </div>

            <div className="absolute right-8 top-1/2 -translate-y-1/2 w-1 h-32 bg-white/5 flex flex-col gap-1">
                {[...Array(10)].map((_, i) => (
                    <motion.div
                        key={i}
                        animate={{ opacity: [0.2, 0.8, 0.2] }}
                        transition={{ duration: 1, delay: i * 0.1, repeat: Infinity }}
                        className="w-full h-full bg-accent/40"
                    />
                ))}
            </div>
        </div>
    );
}
