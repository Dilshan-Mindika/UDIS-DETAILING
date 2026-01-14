"use client";

import { motion } from "framer-motion";

const stats = [
    { value: "5000+", label: "Cars Detailed" },
    { value: "10+", label: "Years Experience" },
    { value: "100%", label: "Satisfaction" },
    { value: "30+", label: "Brands Used" },
];

export function Stats() {
    return (
        <section className="py-12 border-b border-white/5 bg-custom-gray/30">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="text-center"
                        >
                            <div className="text-3xl md:text-5xl font-bold text-custom-gold mb-2">
                                {stat.value}
                            </div>
                            <div className="text-gray-400 uppercase tracking-wider text-sm">
                                {stat.label}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
