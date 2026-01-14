"use client";

import { motion, useInView, useSpring, useTransform } from "framer-motion";
import { Car, Trophy, Star, ShieldCheck, Zap } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

const stats = [
    {
        value: 5000,
        suffix: "+",
        label: "Cars Detailed",
        icon: Car,
        description: "Premium vehicles treated",
        color: "text-blue-500"
    },
    {
        value: 10,
        suffix: "+",
        label: "Years Experience",
        icon: Trophy,
        description: "Mastery in detailing",
        color: "text-yellow-500"
    },
    {
        value: 100,
        suffix: "%",
        label: "Satisfaction",
        icon: Star,
        description: "5-Star Client Rating",
        color: "text-purple-500"
    },
    {
        value: 30,
        suffix: "+",
        label: "Premium Brands",
        icon: ShieldCheck,
        description: "Only the best products",
        color: "text-emerald-500"
    },
];

function Counter({ value, suffix }: { value: number, suffix: string }) {
    const ref = useRef<HTMLSpanElement>(null);
    const inView = useInView(ref, { once: true, margin: "-50px" });

    useEffect(() => {
        if (inView && ref.current) {
            let start = 0;
            const end = value;
            const duration = 2500; // 2.5 seconds count duration
            const startTime = performance.now();
            const element = ref.current;

            const animate = (currentTime: number) => {
                const elapsed = currentTime - startTime;
                const progress = Math.min(elapsed / duration, 1);

                // Ease Out Expo for smooth "landing"
                const ease = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);

                const current = Math.floor(start + (end - start) * ease);

                // Update text directly for max performance and reliability
                element.innerText = current.toLocaleString();

                if (progress < 1) {
                    requestAnimationFrame(animate);
                } else {
                    element.innerText = end.toLocaleString(); // Ensure exact end value
                }
            };

            requestAnimationFrame(animate);
        }
    }, [inView, value]);

    return (
        <span className="flex items-baseline justify-center whitespace-nowrap gap-2">
            <span ref={ref} className="tabular-nums font-orbitron font-black tracking-tighter text-4xl md:text-5xl lg:text-5xl xl:text-6xl text-transparent bg-clip-text bg-gradient-to-b from-white to-white/70">
                0
            </span>
            <span className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary animate-pulse flex-shrink-0 relative top-[-2px]">{suffix}</span>
        </span>
    );
}

export function Stats() {
    return (
        <section className="relative py-20 bg-black overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-soft-light"></div>
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black via-gray-900/50 to-black z-0"></div>

            {/* Spotlight Accent */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/10 blur-[120px] rounded-full pointer-events-none"></div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="group relative"
                        >
                            {/* Card Background */}
                            <div className="absolute inset-0 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 group-hover:bg-white/10 group-hover:border-primary/30 transition-all duration-500"></div>

                            {/* Hover Glow */}
                            <div className="absolute -inset-0.5 bg-gradient-to-br from-primary/0 via-primary/0 to-primary/0 group-hover:from-primary/50 group-hover:to-purple-500/50 rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-all duration-700"></div>

                            <div className="relative p-8 flex flex-col items-center text-center h-full">
                                {/* Icon Halo */}
                                <div className="mb-6 relative">
                                    <div className={cn("absolute inset-0 blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500", stat.color.replace('text-', 'bg-'))}></div>
                                    <div className="w-16 h-16 rounded-full bg-black/50 border border-white/10 flex items-center justify-center relative backdrop-blur-md group-hover:scale-110 transition-transform duration-500">
                                        <stat.icon size={32} className={cn("transition-colors duration-300", stat.color)} />
                                    </div>
                                    <div className="absolute -bottom-2 -right-2 bg-white/10 p-1.5 rounded-full backdrop-blur-md border border-white/10">
                                        <Zap size={12} className="text-white fill-white" />
                                    </div>
                                </div>

                                {/* Number */}
                                <div className="mb-2 drop-shadow-[0_0_15px_rgba(255,255,255,0.3)] w-full overflow-hidden">
                                    <Counter value={stat.value} suffix={stat.suffix} />
                                </div>

                                {/* Label */}
                                <h3 className="text-lg font-bold text-gray-200 uppercase tracking-widest mb-2 group-hover:text-primary transition-colors">
                                    {stat.label}
                                </h3>

                                {/* Description */}
                                <p className="text-sm text-gray-500 leading-relaxed font-medium">
                                    {stat.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
