"use client";

import { Button } from "@/components/ui/button";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { ChevronRight, Star, CheckCircle2 } from "lucide-react";
import { MouseEvent } from "react";

export function Hero() {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
        const { left, top } = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    }

    return (
        <section
            className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-black selection:bg-white/30 group"
            onMouseMove={handleMouseMove}
        >
            {/* Background Layer (Darkened/Dimmed initially) */}
            <div className="absolute inset-0 z-0 bg-black">
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40 transition-opacity duration-500"
                    style={{ backgroundImage: `url('/images/hero/hero_concept_garage_v2_1768408202790.png')` }}
                />
            </div>

            {/* Spotlight Layer (Reveals full brightness/gloss) */}
            <motion.div
                className="absolute inset-0 z-10 bg-cover bg-center bg-no-repeat pointer-events-none"
                style={{
                    backgroundImage: `url('/images/hero/hero_concept_garage_v2_1768408202790.png')`,
                    maskImage: useMotionTemplate`radial-gradient(300px circle at ${mouseX}px ${mouseY}px, black, transparent)`,
                    WebkitMaskImage: useMotionTemplate`radial-gradient(300px circle at ${mouseX}px ${mouseY}px, black, transparent)`,
                }}
            />

            {/* Content Layer */}
            <div className="container relative z-20 px-6 flex flex-col items-center text-center">

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="flex flex-col items-center gap-6"
                >
                    <div className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md">
                        <Star className="w-4 h-4 text-custom-gold fill-custom-gold" />
                        <span className="text-sm font-medium text-gray-200 uppercase tracking-wider">Melbourne's Finest Detailing</span>
                    </div>

                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white tracking-tight leading-[1.1]">
                        AUTOMOTIVE <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-100 to-gray-500">PERFECTION</span>
                    </h1>

                    <p className="max-w-2xl text-lg text-gray-400 font-light leading-relaxed">
                        Experience the art of <span className="text-white font-medium">tangible luxury</span>.
                        Our studio specializes in paint correction and ceramic protection that stands up to the closest inspection.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 mt-8">
                        <Button className="h-14 px-8 bg-white text-black hover:bg-gray-200 rounded-full font-bold tracking-wide text-lg transition-transform hover:scale-105">
                            Book Your Detail
                        </Button>
                        <Button variant="outline" className="h-14 px-8 text-white border-white/20 hover:bg-white/10 rounded-full font-medium tracking-wide text-lg backdrop-blur-md">
                            View Our Packages <ChevronRight className="ml-2 w-5 h-5" />
                        </Button>
                    </div>

                    {/* Trust Indicators */}
                    <div className="flex gap-8 mt-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
                        <div className="flex items-center gap-2">
                            <CheckCircle2 className="w-5 h-5 text-green-500" />
                            <span className="text-sm font-semibold text-white">Certified Installer</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <CheckCircle2 className="w-5 h-5 text-green-500" />
                            <span className="text-sm font-semibold text-white">Insured Studio</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <CheckCircle2 className="w-5 h-5 text-green-500" />
                            <span className="text-sm font-semibold text-white">500+ Reviews</span>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Interactive Hint */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-20 pointer-events-none opacity-50"
            >
                <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center p-1">
                    <motion.div
                        animate={{ y: [0, 12, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        className="w-1 h-2 bg-white rounded-full"
                    />
                </div>
                <span className="text-xs uppercase tracking-widest text-white/40">Move to Inspect</span>
            </motion.div>
        </section>
    );
}
