"use client";

import { Button } from "@/components/ui/button";
import { motion, useMotionTemplate, useMotionValue, AnimatePresence } from "framer-motion";
import { ChevronRight, Star, CheckCircle2 } from "lucide-react";
import { MouseEvent, useState, useEffect } from "react";

export function Hero() {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const heroImages = [
        "/images/hero/hero_concept_garage_v2_1768408202790.png",
        "/images/hero/hero_concept_studio_1768406369064.png",
        "/images/hero/hero_concept_abstract_1768406418550.png"
    ];

    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const words = ["PERFECTION", "PRECISION", "BRILLIANCE", "MASTERY"];

    useEffect(() => {
        const textInterval = setInterval(() => {
            setCurrentWordIndex((prev) => (prev + 1) % words.length);
        }, 3000);
        return () => clearInterval(textInterval);
    }, []);


    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [heroImages.length]);

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
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentImageIndex}
                        initial={{ opacity: 0, scale: 1.1 }}
                        animate={{ opacity: 0.4, scale: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1.5 }}
                        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                        style={{ backgroundImage: `url('${heroImages[currentImageIndex]}')` }}
                    />
                </AnimatePresence>
            </div>

            {/* Spotlight Layer (Reveals full brightness/gloss) */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={currentImageIndex + "-spotlight"}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1.5 }}
                    className="absolute inset-0 z-10 bg-cover bg-center bg-no-repeat pointer-events-none"
                    style={{
                        backgroundImage: `url('${heroImages[currentImageIndex]}')`,
                        maskImage: useMotionTemplate`radial-gradient(300px circle at ${mouseX}px ${mouseY}px, black, transparent)`,
                        WebkitMaskImage: useMotionTemplate`radial-gradient(300px circle at ${mouseX}px ${mouseY}px, black, transparent)`,
                    }}
                />
            </AnimatePresence>

            {/* Content Layer */}
            <div className="container relative z-20 px-6 flex flex-col items-center text-center">

                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={{
                        hidden: { opacity: 0 },
                        visible: {
                            opacity: 1,
                            transition: {
                                staggerChildren: 0.15,
                                delayChildren: 0.2
                            }
                        }
                    }}
                    className="flex flex-col items-center gap-6"
                >
                    <motion.div
                        variants={{ hidden: { opacity: 0, y: -20 }, visible: { opacity: 1, y: 0 } }}
                        animate={{ y: [0, -5, 0] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md shadow-[0_0_15px_rgba(255,255,255,0.05)]"
                    >
                        <Star className="w-4 h-4 text-custom-gold fill-custom-gold" />
                        <span className="text-sm font-medium text-gray-200 uppercase tracking-wider">Melbourne's Finest Detailing</span>
                    </motion.div>

                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white tracking-tight leading-[1.1] flex flex-col items-center">
                        <motion.span variants={{ hidden: { opacity: 0, scale: 0.95 }, visible: { opacity: 1, scale: 1 } }}>AUTOMOTIVE</motion.span>
                        <div className="relative h-[1.1em] overflow-hidden w-full flex justify-center">
                            <AnimatePresence mode="wait">
                                <motion.span
                                    key={words[currentWordIndex]}
                                    initial={{ y: 40, opacity: 0, filter: "blur(8px)" }}
                                    animate={{
                                        y: 0,
                                        opacity: 1,
                                        filter: "blur(0px)",
                                        backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
                                    }}
                                    exit={{ y: -40, opacity: 0, filter: "blur(8px)" }}
                                    transition={{
                                        y: { duration: 0.5, ease: "easeOut" },
                                        opacity: { duration: 0.5 },
                                        filter: { duration: 0.5 },
                                        backgroundPosition: { duration: 3, repeat: Infinity, ease: "linear" }
                                    }}
                                    style={{ backgroundSize: "200% auto" }}
                                    className="block text-transparent bg-clip-text bg-gradient-to-r from-gray-100 via-white to-gray-500 pb-2"
                                >
                                    {words[currentWordIndex]}
                                </motion.span>
                            </AnimatePresence>
                        </div>
                    </h1>

                    <motion.p
                        variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                        className="max-w-2xl text-lg text-gray-400 font-light leading-relaxed"
                    >
                        Experience the art of <span className="text-white font-medium">tangible luxury</span>.
                        Our studio specializes in paint correction and ceramic protection that stands up to the closest inspection.
                    </motion.p>

                    <motion.div
                        variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                        className="flex flex-col sm:flex-row gap-4 mt-8"
                    >
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="h-14 px-8 bg-white text-black rounded-full font-bold tracking-wide text-lg shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)] transition-shadow"
                        >
                            Book Your Detail
                        </motion.button>
                        <motion.button
                            whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.15)" }}
                            whileTap={{ scale: 0.95 }}
                            className="h-14 px-8 text-white border border-white/20 rounded-full font-medium tracking-wide text-lg backdrop-blur-md flex items-center justify-center"
                        >
                            View Our Packages <ChevronRight className="ml-2 w-5 h-5" />
                        </motion.button>
                    </motion.div>

                    {/* Trust Indicators */}
                    <motion.div
                        variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
                        className="flex gap-8 mt-16"
                    >
                        {[
                            { icon: CheckCircle2, text: "Certified Installer" },
                            { icon: CheckCircle2, text: "Insured Studio" },
                            { icon: Star, text: "500+ Reviews", color: "text-custom-gold" }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 0.6, y: 0 }}
                                whileHover={{ opacity: 1, scale: 1.1, y: -5 }}
                                transition={{ delay: 0.8 + (i * 0.1) }}
                                className="flex items-center gap-2 cursor-default transition-all duration-300"
                            >
                                <item.icon className={`w-5 h-5 ${item.color || "text-green-500"}`} />
                                <span className="text-sm font-semibold text-white">{item.text}</span>
                            </motion.div>
                        ))}
                    </motion.div>
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
