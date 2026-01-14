"use client";

import { motion } from "framer-motion";
import { ScanSearch, Diamond, Crosshair, Sparkles, CheckCircle2, UserCheck, Shield } from "lucide-react";
import Image from "next/image";

export function BusinessValues() {
    const features = [
        {
            id: "01",
            icon: <ScanSearch className="w-10 h-10 text-blue-400" />,
            title: "Interior Inspections",
            desc: "We inspect every inch of your cabin to ensure nothing is missed—so you get a deeper, more effective clean.",
            borderColor: "border-blue-500/30",
            hoverBorder: "group-hover:border-blue-500/80",
            glowColor: "group-hover:shadow-[0_0_30px_rgba(59,130,246,0.3)]",
        },
        {
            id: "02",
            icon: <Diamond className="w-10 h-10 text-cyan-400" />,
            title: "Premium Products Used",
            desc: "We trust only the best—premium, professional-grade products that bring out the true beauty of your vehicle.",
            borderColor: "border-cyan-500/30",
            hoverBorder: "group-hover:border-cyan-500/80",
            glowColor: "group-hover:shadow-[0_0_30px_rgba(34,211,238,0.3)]",
        },
        {
            id: "03",
            icon: <Crosshair className="w-10 h-10 text-blue-300" />,
            title: "Attention to Detail",
            desc: "Precision and care in every step—because true quality is in the details.",
            borderColor: "border-blue-400/30",
            hoverBorder: "group-hover:border-blue-400/80",
            glowColor: "group-hover:shadow-[0_0_30px_rgba(96,165,250,0.3)]",
        }
    ];

    return (
        <section className="py-24 bg-black relative overflow-hidden">
            {/* Background Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,black,transparent)] pointer-events-none"></div>

            <div className="container mx-auto px-4 relative z-10">

                {/* Section Header */}
                <div className="text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-900/10 border border-blue-500/30 mb-6"
                    >
                        <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></div>
                        <span className="text-blue-500 text-xs font-bold tracking-[0.2em] uppercase">Core Values</span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-6xl font-black font-orbitron text-white max-w-4xl mx-auto leading-tight"
                    >
                        COMMITTED TO <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">QUALITY</span> & CUSTOMER SATISFACTION
                    </motion.h2>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
                    {features.map((feature, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1 + 0.2 }}
                            viewport={{ once: true }}
                            className={`group relative h-[340px] rounded-2xl bg-gray-950 border ${feature.borderColor} ${feature.hoverBorder} hover:bg-gray-900/50 backdrop-blur-sm overflow-hidden transition-all duration-500 hover:-translate-y-2 ${feature.glowColor}`}
                        >
                            {/* Animated Scanner Bar */}
                            <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-blue-400 to-transparent -translate-y-full group-hover:translate-y-[400px] transition-transform duration-[1.5s] ease-in-out opacity-50"></div>

                            {/* Tech Background Number */}
                            <div className="absolute top-4 right-6 text-8xl font-black font-orbitron text-white/5 select-none group-hover:text-white/10 transition-colors duration-500">
                                {feature.id}
                            </div>

                            {/* Corner Brackets */}
                            <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-white/10 group-hover:border-blue-500/50 transition-colors duration-300 rounded-tl-3xl"></div>
                            <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-white/10 group-hover:border-cyan-500/50 transition-colors duration-300 rounded-br-3xl"></div>

                            <div className="relative z-10 h-full flex flex-col p-8">
                                {/* Header */}
                                <div className="mb-6">
                                    <div className="w-16 h-16 rounded-2xl bg-blue-900/10 border border-blue-500/20 flex items-center justify-center group-hover:scale-110 group-hover:bg-blue-500/20 transition-all duration-300 mb-6">
                                        {feature.icon}
                                    </div>
                                    <h3 className="text-2xl font-bold text-white mb-3 font-orbitron group-hover:text-cyan-400 transition-colors">{feature.title}</h3>
                                    <div className="h-0.5 w-12 bg-blue-500/30 group-hover:w-full group-hover:bg-blue-500 transition-all duration-500 mb-4"></div>
                                </div>

                                <div className="mt-auto">
                                    <p className="text-gray-400 leading-relaxed text-sm group-hover:text-gray-300 transition-colors">
                                        {feature.desc}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* "Bring Back Shine" Banner */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4 }}
                    viewport={{ once: true }}
                    className="relative rounded-[2.5rem] overflow-hidden border border-white/10 h-[500px] md:h-[400px]"
                >
                    {/* Background Image */}
                    <div className="absolute inset-0">
                        <img
                            src="/images/bg-liquid-metal.png"
                            alt="Liquid Metal Shine"
                            className="w-full h-full object-cover animate-pulse-slow opacity-80"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent"></div>
                    </div>

                    <div className="absolute inset-0 flex flex-col md:flex-row items-center justify-between p-8 md:p-16 relative z-10">

                        {/* Left Text */}
                        <div className="max-w-xl mb-10 md:mb-0">
                            <h3 className="text-4xl md:text-5xl font-black font-orbitron text-white mb-6 leading-tight">
                                LET US BRING BACK <br />
                                <span className="text-cyan-400 drop-shadow-[0_0_15px_rgba(34,211,238,0.5)]">ITS SHINE</span>
                            </h3>
                            <p className="text-gray-300 text-lg leading-relaxed">
                                At UDI'S DETAILING, we specialize in restoring your vehicle’s original brilliance. Our skilled technicians use proven techniques and premium products to make your car look vibrant and fresh again.
                            </p>

                            <div className="mt-8 flex gap-6">
                                <div className="flex items-center gap-3">
                                    <div className="p-2 rounded-full bg-blue-500/20 text-blue-400 ring-1 ring-blue-500/50">
                                        <CheckCircle2 size={20} />
                                    </div>
                                    <span className="text-white font-bold tracking-wide">Vibrant Finish</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="p-2 rounded-full bg-cyan-500/20 text-cyan-400 ring-1 ring-cyan-500/50">
                                        <Sparkles size={20} />
                                    </div>
                                    <span className="text-white font-bold tracking-wide">Showroom Ready</span>
                                </div>
                            </div>
                        </div>

                        {/* Right Trust Badges */}
                        <div className="flex flex-col gap-6 w-full md:w-auto">
                            {/* Badge 1 */}
                            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 flex items-center gap-4 hover:bg-white/15 transition-colors">
                                <div className="bg-blue-500/20 p-3 rounded-full text-blue-400">
                                    <UserCheck size={28} />
                                </div>
                                <div>
                                    <h4 className="text-white font-bold text-xl">Happy Customers</h4>
                                    <p className="text-gray-400 text-sm">Satisfied clients are our best reward</p>
                                </div>
                            </div>

                            {/* Badge 2 */}
                            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 flex items-center gap-4 hover:bg-white/15 transition-colors">
                                <div className="bg-cyan-500/20 p-3 rounded-full text-cyan-400">
                                    <Shield size={28} />
                                </div>
                                <div>
                                    <h4 className="text-white font-bold text-xl">30 Day Guarantee</h4>
                                    <p className="text-gray-400 text-sm">Your satisfaction is risk-free, worry-free!</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </motion.div>

            </div>
        </section>
    );
}
