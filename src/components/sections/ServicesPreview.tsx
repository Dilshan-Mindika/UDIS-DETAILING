"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Star, Shield, Zap, Scan } from "lucide-react";
import { motion } from "framer-motion";

export function ServicesPreview() {
    return (
        <section className="py-32 bg-black relative overflow-hidden">
            {/* Cyber Grid Background */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#111_1px,transparent_1px),linear-gradient(to_bottom,#111_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20 pointer-events-none"></div>

            {/* Ambient Lighting */}
            <div className="absolute top-[20%] left-[-10%] w-[600px] h-[600px] bg-blue-600/10 blur-[150px] rounded-full pointer-events-none"></div>
            <div className="absolute bottom-[10%] right-[-10%] w-[500px] h-[500px] bg-purple-600/10 blur-[150px] rounded-full pointer-events-none"></div>

            <div className="container mx-auto px-4 relative z-10">

                {/* Header with Glitch-Style Accent */}
                <div className="text-center mb-20 relative">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-block mb-4"
                    >
                        <div className="px-4 py-1.5 rounded-full border border-custom-gold/30 bg-custom-gold/5 backdrop-blur-md flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-custom-gold animate-pulse"></span>
                            <span className="text-custom-gold text-xs font-bold tracking-[0.3em] uppercase">System: Online</span>
                        </div>
                    </motion.div>

                    <motion.h3
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        viewport={{ once: true }}
                        className="text-5xl md:text-7xl font-black font-orbitron text-white max-w-4xl mx-auto leading-tight mb-6"
                    >
                        PRECISION <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-cyan-400 to-purple-500 animate-gradient-x">ENGINEERING</span>
                    </motion.h3>
                    <p className="text-gray-400 max-w-xl mx-auto text-lg">
                        Advanced automotive care protocols for the modern machine.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                    {/* Card 1: Exterior Protocol */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        viewport={{ once: true }}
                        className="group relative h-[500px] rounded-[2rem] overflow-hidden bg-gray-900 border border-white/10 hover:border-blue-500/50 transition-colors duration-500"
                    >
                        <div className="absolute inset-0">
                            <img src="/images/service-exterior.png" alt="Exterior Detailing" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-1" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity"></div>

                            {/* HUD Scanner Overlay */}
                            <div className="absolute top-0 left-0 w-full h-[2px] bg-blue-500/50 shadow-[0_0_15px_rgba(59,130,246,0.8)] translate-y-[-100%] group-hover:translate-y-[500px] transition-transform duration-[2s] ease-in-out"></div>
                        </div>

                        {/* Tech Specs Decoration */}
                        <div className="absolute top-6 right-6 flex flex-col items-end gap-1 opacity-50 group-hover:opacity-100 transition-opacity">
                            <div className="h-1 w-12 bg-blue-500"></div>
                            <div className="text-[10px] font-mono text-blue-400">EXT-01 // ACTIVE</div>
                        </div>

                        <div className="absolute bottom-0 left-0 p-8 w-full">
                            <div className="w-14 h-14 rounded-2xl bg-blue-600/20 backdrop-blur-xl border border-blue-500/30 flex items-center justify-center mb-6 text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shadow-[0_0_20px_rgba(37,99,235,0.2)]">
                                <Shield size={28} />
                            </div>
                            <h4 className="text-3xl font-black text-white mb-2 font-orbitron tracking-wide">EXTERIOR <br /><span className="text-blue-500">SHIELD</span></h4>
                            <p className="text-gray-400 text-sm leading-relaxed border-l-2 border-blue-500/50 pl-4 group-hover:text-white transition-colors">
                                Multi-stage paint correction and ceramic fortification for impenetrable protection.
                            </p>
                        </div>
                    </motion.div>

                    {/* Card 2: Interior Protocol */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        viewport={{ once: true }}
                        className="group relative h-[500px] rounded-[2rem] overflow-hidden bg-gray-900 border border-white/10 hover:border-purple-500/50 transition-colors duration-500"
                    >
                        <div className="absolute inset-0">
                            <img src="/images/service-interior.png" alt="Interior Detailing" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:-rotate-1" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity"></div>

                            {/* HUD Scanner Overlay */}
                            <div className="absolute top-0 left-0 w-full h-[2px] bg-purple-500/50 shadow-[0_0_15px_rgba(168,85,247,0.8)] translate-y-[-100%] group-hover:translate-y-[500px] transition-transform duration-[2s] ease-in-out delay-100"></div>
                        </div>

                        {/* Tech Specs Decoration */}
                        <div className="absolute top-6 right-6 flex flex-col items-end gap-1 opacity-50 group-hover:opacity-100 transition-opacity">
                            <div className="h-1 w-12 bg-purple-500"></div>
                            <div className="text-[10px] font-mono text-purple-400">INT-02 // STERILE</div>
                        </div>

                        <div className="absolute bottom-0 left-0 p-8 w-full">
                            <div className="w-14 h-14 rounded-2xl bg-purple-600/20 backdrop-blur-xl border border-purple-500/30 flex items-center justify-center mb-6 text-purple-400 group-hover:bg-purple-600 group-hover:text-white transition-all duration-300 shadow-[0_0_20px_rgba(147,51,234,0.2)]">
                                <Zap size={28} />
                            </div>
                            <h4 className="text-3xl font-black text-white mb-2 font-orbitron tracking-wide">INTERIOR <br /><span className="text-purple-500">REVIVAL</span></h4>
                            <p className="text-gray-400 text-sm leading-relaxed border-l-2 border-purple-500/50 pl-4 group-hover:text-white transition-colors">
                                Total cabin restoration. Deep extraction, leather conditioning, and biological sanitization.
                            </p>
                        </div>
                    </motion.div>

                    {/* Card 3: Status / Stats */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 }}
                        viewport={{ once: true }}
                        className="relative h-[500px] rounded-[2rem] overflow-hidden bg-black border border-white/10 p-1 flex flex-col"
                    >
                        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
                        <div className="h-full w-full rounded-[1.8rem] bg-gradient-to-b from-gray-900 to-black p-8 flex flex-col justify-between relative group overflow-hidden">

                            {/* Animated Background Ring */}
                            <div className="absolute top-[-50%] right-[-50%] w-[400px] h-[400px] border-[40px] border-custom-gold/5 rounded-full animate-spin-slow pointer-events-none"></div>
                            <div className="absolute bottom-[-20%] left-[-20%] w-[300px] h-[300px] bg-custom-gold/5 rounded-full blur-[80px] pointer-events-none group-hover:bg-custom-gold/10 transition-colors duration-500"></div>

                            <div>
                                <div className="flex items-center justify-between mb-10">
                                    <div className="px-3 py-1 bg-white/5 rounded-full border border-white/10 text-[10px] font-mono text-gray-400">
                                        CLIENT_SATISFACTION_METRIC
                                    </div>
                                    <Scan className="text-custom-gold/50" />
                                </div>

                                <div className="mb-2">
                                    <div className="flex gap-1 mb-4">
                                        {[1, 2, 3, 4, 5].map(i => (
                                            <Star key={i} className="text-custom-gold fill-custom-gold drop-shadow-[0_0_8px_rgba(250,204,21,0.5)]" size={24} />
                                        ))}
                                    </div>
                                    <h4 className="text-8xl font-black text-white font-orbitron tracking-tighter shadow-black drop-shadow-2xl">
                                        99<span className="text-4xl text-custom-gold">%</span>
                                    </h4>
                                </div>
                                <p className="text-gray-400 font-medium leading-relaxed">
                                    "Unmatched quality." <br />
                                    Join the elite circle of owners who demand perfection.
                                </p>
                            </div>

                            <div className="relative z-20 mt-6">
                                <Link href="/services" className="block w-full">
                                    <div className="w-full h-16 rounded-xl bg-white text-black hover:bg-custom-gold font-bold tracking-[0.2em] text-sm flex items-center justify-center transition-all duration-300 shadow-[0_0_25px_rgba(255,255,255,0.1)] hover:shadow-[0_0_40px_rgba(250,204,21,0.4)] border border-transparent hover:border-black/10 cursor-pointer">
                                        ACCESS ALL SERVICES
                                        <ArrowRight className="ml-2" />
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
