"use client";

import { motion } from "framer-motion";
import { UserCog, Sparkles, Trophy, CalendarClock } from "lucide-react";

export function WhyChooseUs() {
    const features = [
        {
            icon: <UserCog className="w-10 h-10 text-blue-400" />,
            title: "Trained Professionals",
            subtitle: "Expertise & Quality",
            desc: "Expertise and quality products for exceptional results.",
            bgGradient: "from-blue-500/10 to-transparent",
            delay: 0.1
        },
        {
            icon: <Sparkles className="w-10 h-10 text-cyan-400" />,
            title: "Top-Quality Products",
            subtitle: "Premium Results",
            desc: "Premium products that deliver premium results.",
            bgGradient: "from-cyan-500/10 to-transparent",
            delay: 0.2
        },
        {
            icon: <Trophy className="w-10 h-10 text-blue-500" />,
            title: "Experienced Team",
            subtitle: "Precision & Quality",
            desc: "Skilled professionals delivering precision and quality.",
            bgGradient: "from-blue-600/10 to-transparent",
            delay: 0.3
        },
        {
            icon: <CalendarClock className="w-10 h-10 text-cyan-300" />,
            title: "Convenient Scheduling",
            subtitle: "Flexible Service",
            desc: "Detailing that fits your busy lifestyle.",
            bgGradient: "from-cyan-400/10 to-transparent",
            delay: 0.4
        }
    ];

    return (
        <section className="py-32 bg-black relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-900/20 rounded-full blur-[120px] pointer-events-none"></div>
            <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-cyan-900/10 rounded-full blur-[120px] pointer-events-none"></div>

            {/* Grid Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(circle_at_center,black_40%,transparent_100%)] pointer-events-none"></div>

            <div className="container mx-auto px-4 relative z-10">
                {/* Header */}
                <div className="text-center mb-24">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6 backdrop-blur-md"
                    >
                        <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_10px_rgba(34,211,238,0.5)]"></span>
                        <span className="text-cyan-400 text-xs font-bold tracking-[0.2em] uppercase">Why Choose Us</span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-6xl font-black font-orbitron text-white max-w-3xl mx-auto leading-tight"
                    >
                        THE UDI'S <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">DIFFERENCE</span>
                    </motion.h2>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {features.map((feature, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: feature.delay }}
                            viewport={{ once: true }}
                            className="group relative h-[420px] rounded-[2rem] bg-neutral-900/40 border border-white/5 overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:bg-neutral-900/60"
                        >
                            {/* Inner Gradient */}
                            <div className={`absolute inset-0 bg-gradient-to-b ${feature.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>

                            {/* Shine Effect */}
                            <div className="absolute -inset-full top-0 block h-full w-1/2 -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-0 group-hover:animate-shine z-0" />

                            <div className="relative z-10 h-full flex flex-col p-8">
                                {/* Icon Halo */}
                                <div className="mb-10 relative">
                                    <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center relative z-10 shadow-[0_0_0_1px_rgba(255,255,255,0.05)] group-hover:scale-110 group-hover:bg-blue-500/20 group-hover:border-blue-500/30 transition-all duration-500">
                                        {feature.icon}
                                    </div>
                                    {/* Glow behind icon */}
                                    <div className="absolute inset-0 bg-blue-500/30 blur-[40px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                </div>

                                {/* Texts */}
                                <div className="mb-4">
                                    <div className="text-xs font-bold text-blue-500 tracking-widest uppercase mb-2 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                                        {feature.subtitle}
                                    </div>
                                    <h3 className="text-2xl font-black text-white font-orbitron tracking-wide uppercase leading-tight group-hover:text-cyan-50 transition-colors">
                                        {feature.title}
                                    </h3>
                                </div>

                                <div className="h-px w-12 bg-white/10 my-4 group-hover:w-full group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-cyan-400 transition-all duration-500"></div>

                                <p className="text-gray-400 leading-relaxed text-sm group-hover:text-gray-300 transition-colors">
                                    {feature.desc}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
