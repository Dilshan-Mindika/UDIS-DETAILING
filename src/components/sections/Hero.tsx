"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";


export function Hero() {
    return (
        <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
            {/* Background - In a real app, uses next/image with a high-res asset */}
            {/* Background */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-black to-black z-0"></div>
            <div className="absolute inset-0 bg-black/40 z-0"></div> {/* Overlay */}

            <div className="container relative z-10 px-4 flex flex-col items-center text-center">
                <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-primary font-bold tracking-widest uppercase mb-4 text-sm md:text-base"
                >
                    Premium Auto Care
                </motion.span>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-5xl md:text-8xl font-bold text-white mb-6 leading-tight font-orbitron"
                >
                    EXPERIENCE THE <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-400 to-accent drop-shadow-[0_0_15px_rgba(37,99,235,0.5)]">LIQUID GLOSS</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="text-gray-400 max-w-2xl mb-8 text-lg md:text-xl"
                >
                    Professional detailing services that restore, protect, and enhance your vehicle&apos;s beauty.
                    Step into a world of automotive luxury.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="flex flex-col md:flex-row gap-4"
                >
                    <Button className="bg-primary hover:bg-primary/90 text-white text-lg px-8 py-6 rounded-full shadow-[0_0_30px_rgba(37,99,235,0.3)] hover:shadow-[0_0_50px_rgba(37,99,235,0.5)] transition-all duration-300">
                        Get A Quote
                    </Button>
                    <Button variant="outline" className="text-white border-white/20 hover:bg-white/10 hover:text-white text-lg px-8 py-6 rounded-full backdrop-blur-sm">
                        Our Services
                    </Button>
                </motion.div>
            </div>
        </section>
    );
}
