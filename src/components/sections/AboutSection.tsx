"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Leaf, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function AboutSection() {
    return (
        <section className="py-24 bg-black relative overflow-hidden">
            {/* Ambient Background Glow */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-900/20 blur-[120px] rounded-full pointer-events-none" />

            <div className="container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Left Column: Content */}
                    <div className="space-y-10 relative z-10">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-sm font-bold text-custom-gold tracking-[0.2em] uppercase mb-4">
                                Our Philosophy
                            </h2>
                            <h3 className="text-4xl md:text-5xl font-black font-orbitron text-white leading-tight mb-6">
                                UNMATCHED EYE FOR <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">PERFECTION</span>
                            </h3>
                            <p className="text-gray-400 text-lg leading-relaxed max-w-xl">
                                We don't just wash cars; we curate automotive art. At UDI's Detailing, we are dedicated to bringing out the absolute best in your vehicle through hospital-grade precision, premium ceramic coatings, and a meticulous paint correction process that exceeds showroom standards.
                            </p>
                        </motion.div>

                        <div className="grid gap-6">
                            {/* Feature 1 */}
                            <motion.div
                                className="flex gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                viewport={{ once: true }}
                            >
                                <div className="p-3 rounded-lg bg-blue-500/10 text-blue-400 h-fit">
                                    <ShieldCheck size={24} />
                                </div>
                                <div>
                                    <h4 className="text-white font-bold text-lg mb-1">Master Technicians</h4>
                                    <p className="text-sm text-gray-400">
                                        Our certified specialists treat every vehicle—from daily drivers to concourse classics—with obsessive care and scientific precision.
                                    </p>
                                </div>
                            </motion.div>

                            {/* Feature 2 */}
                            <motion.div
                                className="flex gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.4 }}
                                viewport={{ once: true }}
                            >
                                <div className="p-3 rounded-lg bg-green-500/10 text-green-400 h-fit">
                                    <Leaf size={24} />
                                </div>
                                <div>
                                    <h4 className="text-white font-bold text-lg mb-1">Eco-Safe Formulations</h4>
                                    <p className="text-sm text-gray-400">
                                        We utilize advanced, biodegradable products that deliver a deeper clean and stronger protection without harsh chemicals. Safe for your car, better for the planet.
                                    </p>
                                </div>
                            </motion.div>
                        </div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: 0.6 }}
                            viewport={{ once: true }}
                        >
                            <Link href="/about">
                                <Button className="rounded-full h-12 px-8 bg-white text-black hover:bg-custom-gold font-bold tracking-wide group">
                                    LEARN MORE
                                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
                                </Button>
                            </Link>
                        </motion.div>
                    </div>

                    {/* Right Column: Visual */}
                    <motion.div
                        className="relative h-[600px] rounded-3xl overflow-hidden border border-white/10 shadow-2xl"
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true }}
                    >
                        {/* High-End Detailing Image */}
                        <div className="absolute inset-0">
                            <img
                                src="/images/about-detail.png"
                                alt="Master Detailing in Action"
                                className="w-full h-full object-cover transform scale-105 hover:scale-110 transition-transform duration-[1.5s]"
                            />
                        </div>

                        {/* Overlay Gradient */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>

                        {/* Floating Badge */}
                        <div className="absolute bottom-8 left-8 bg-black/80 backdrop-blur-xl border border-white/10 p-4 rounded-xl flex items-center gap-4">
                            <div className="text-3xl font-bold text-custom-gold">100%</div>
                            <div className="text-xs text-gray-300 uppercase tracking-wider leading-tight">
                                Satisfaction<br />Guarantee
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
