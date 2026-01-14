"use client";

import { motion } from "framer-motion";

const brands = [
    { name: "Tesla", url: "https://cdn.simpleicons.org/tesla/white" },
    { name: "BMW", url: "https://cdn.simpleicons.org/bmw/white" },
    { name: "Audi", url: "https://cdn.simpleicons.org/audi/white" },
    { name: "Porsche", url: "https://cdn.simpleicons.org/porsche/white" },
    { name: "Ferrari", url: "https://cdn.simpleicons.org/ferrari/white" },
    { name: "Lamborghini", url: "https://cdn.simpleicons.org/lamborghini/white" },
    { name: "Rolls Royce", url: "https://cdn.simpleicons.org/rollsroyce/white" },
    { name: "Bentley", url: "https://cdn.simpleicons.org/bentley/white" },
    { name: "Maserati", url: "https://cdn.simpleicons.org/maserati/white" },
    { name: "Toyota", url: "https://cdn.simpleicons.org/toyota/white" },
    { name: "Honda", url: "https://cdn.simpleicons.org/honda/white" },
    { name: "Ford", url: "https://cdn.simpleicons.org/ford/white" },
    { name: "Chevrolet", url: "https://cdn.simpleicons.org/chevrolet/white" },
    { name: "Volkswagen", url: "https://cdn.simpleicons.org/volkswagen/white" },
    { name: "Nissan", url: "https://cdn.simpleicons.org/nissan/white" },
    { name: "Subaru", url: "https://cdn.simpleicons.org/subaru/white" },
    { name: "Mazda", url: "https://cdn.simpleicons.org/mazda/white" }
];

// Duplicate the list to ensure seamless looping
const duplicatedBrands = [...brands, ...brands, ...brands];

export function BrandCarousel() {
    return (
        <section className="py-10 bg-black border-b border-white/5 overflow-hidden relative">
            {/* Gradient Masks for Fade Effect */}
            <div className="absolute top-0 left-0 w-24 h-full bg-gradient-to-r from-black to-transparent z-10"></div>
            <div className="absolute top-0 right-0 w-24 h-full bg-gradient-to-l from-black to-transparent z-10"></div>

            <div className="container mx-auto px-4 mb-8">
                <p className="text-center text-xs font-bold text-gray-500 tracking-[0.3em] uppercase opacity-70">
                    Trusted by Owners of
                </p>
            </div>

            <div className="flex relative overflow-hidden">
                <motion.div
                    className="flex gap-16 md:gap-24 items-center"
                    animate={{
                        x: ["0%", "-50%"]
                    }}
                    transition={{
                        duration: 90,
                        ease: "linear",
                        repeat: Infinity,
                    }}
                >
                    {duplicatedBrands.map((brand, index) => (
                        <div
                            key={index}
                            className="relative w-16 h-16 md:w-20 md:h-20 flex-shrink-0 flex items-center justify-center opacity-40 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0"
                        >
                            <img
                                src={brand.url}
                                alt={brand.name}
                                className="w-full h-full object-contain"
                            />
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
