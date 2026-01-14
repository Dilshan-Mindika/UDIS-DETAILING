"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react";
import Image from "next/image";

export function Testimonials() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(0);

    const testimonials = [
        {
            name: "James Sterling",
            role: "Porsche 911 GT3 Owner",
            image: "/images/testimonials/client_james.png",
            text: "Absolutely stunning work. My car looks better than when I bought it. The attention to detail is simply unmatched in the industry. Highly recommended!",
            rating: 5
        },
        {
            name: "Elena K.",
            role: "Mercedes-AMG GT Owner",
            image: "/images/testimonials/client_elena.png",
            text: "I was skeptical at first, but the results speak for themselves. The ceramic coating has made maintenance so much easier. Truly professional service.",
            rating: 5
        },
        {
            name: "Michael Ross",
            role: "Classic Ferrari Collector",
            image: "/images/testimonials/client_michael.png",
            text: "Finding someone I trust with my vintage collection is hard. UDI's Detailing exceeded all expectations. They treat every car like a masterpiece.",
            rating: 5
        },
        {
            name: "David M.",
            role: "Audi RS6 Owner",
            image: "/images/testimonials/client_david.png",
            text: "The paint correction on my RS6 is flawless. I've used many detailers before, but the level of precision here is on another level.",
            rating: 5
        },
        {
            name: "Sarah Jenkins",
            role: "Range Rover Autobiography",
            image: "/images/testimonials/client_sarah.png",
            text: "Convenience and quality wrapped in one. They made my daily driver look like a show car. The interior detailing is especially impressive.",
            rating: 5
        },
        {
            name: "Robert Langdon",
            role: "Jaguar E-Type Owner",
            image: "/images/testimonials/client_robert.png",
            text: "Restoring the glory of a classic requires a delicate touch. These guys understand the soul of a vintage car.",
            rating: 5
        },
        {
            name: "Michelle Yeoh",
            role: "Tesla Model S Plaid",
            image: "/images/testimonials/client_michelle.png",
            text: "Tech-forward service for a tech-forward car. The booking was easy, and the results are showroom perfect. Love the glossy finish.",
            rating: 5
        },
        {
            name: "Thomas Wright",
            role: "RAM 1500 TRX Owner",
            image: "/images/testimonials/client_thomas.png",
            text: "My truck sees a lot of dirt, but after UDI's magic, it looks tougher and cleaner than the day I drove it off the lot.",
            rating: 5
        },
        {
            name: "Sophia Ricci",
            role: "Bentley Continental GT",
            image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1000&auto=format&fit=crop",
            text: "Elegance and perfection. My Bentley deserves the best, and that is exactly what UDI provides. The leather conditioning is sublime.",
            rating: 5
        },
        {
            name: "Daniel Kim",
            role: "Porsche Taycan Turbo S",
            image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1000&auto=format&fit=crop",
            text: "Electric performance meets electric shine. The team knows exactly how to handle modern EV finishes.",
            rating: 5
        },
        {
            name: "Olivia Pearson",
            role: "Mercedes G-Wagon",
            image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1000&auto=format&fit=crop",
            text: "I demand excellence in everything, and this detailing service delivers. My G-Wagon is turning heads everywhere I go.",
            rating: 5
        },
        {
            name: "William Hayes",
            role: "Aston Martin DB11",
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop",
            text: "The depth of gloss they achieved on my Aston Martin is incredible. It looks like liquid metal. Highly recommended.",
            rating: 5
        },
        {
            name: "Ava Sinclair",
            role: "Lamborghini Urus",
            image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1000&auto=format&fit=crop",
            text: "Bold cars need bold care. UDI's Detailing keeps my Urus looking fierce and flawless.",
            rating: 5
        }
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            nextSlide();
        }, 8000);
        return () => clearInterval(timer);
    }, [currentIndex]);

    const nextSlide = () => {
        setDirection(1);
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    };

    const prevSlide = () => {
        setDirection(-1);
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    // Calculate the 3 visible testimonials
    const visibleTestimonials = [
        testimonials[currentIndex],
        testimonials[(currentIndex + 1) % testimonials.length],
        testimonials[(currentIndex + 2) % testimonials.length]
    ];

    const variants = {
        enter: (direction: number) => ({
            x: direction > 0 ? 50 : -50,
            opacity: 0,
            scale: 0.9,
        }),
        center: {
            x: 0,
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.5,
                ease: [0.32, 0.72, 0, 1]
            }
        }
    };

    return (
        <section className="py-32 bg-black relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-[linear-gradient(to_bottom,black,rgba(0,0,20,0.5),black)] z-10"></div>
            <div className="absolute top-0 left-0 w-full h-full bg-[url('/images/noise.png')] opacity-[0.03] pointer-events-none"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-900/10 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="container mx-auto px-4 relative z-20">
                <div className="text-center mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-black font-orbitron text-white mb-4"
                    >
                        CLIENT <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">STORIES</span>
                    </motion.h2>
                    <div className="h-1 w-24 bg-blue-500 mx-auto rounded-full"></div>
                </div>

                <div className="max-w-7xl mx-auto relative">
                    {/* Navigation Buttons */}
                    <button
                        onClick={prevSlide}
                        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-12 z-30 p-3 rounded-full bg-white/5 border border-white/10 text-white hover:bg-blue-500 hover:border-blue-500 transition-all duration-300 hidden md:flex"
                    >
                        <ChevronLeft size={24} />
                    </button>
                    <button
                        onClick={nextSlide}
                        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-12 z-30 p-3 rounded-full bg-white/5 border border-white/10 text-white hover:bg-blue-500 hover:border-blue-500 transition-all duration-300 hidden md:flex"
                    >
                        <ChevronRight size={24} />
                    </button>

                    {/* Carousel Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <AnimatePresence mode="popLayout" custom={direction} initial={false}>
                            {visibleTestimonials.map((testimonial) => (
                                <motion.div
                                    key={testimonial.name}
                                    layout
                                    custom={direction}
                                    initial="enter"
                                    animate="center"
                                    exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.3 } }}
                                    variants={variants}
                                    className="h-full"
                                >
                                    <div className="h-full flex flex-col bg-neutral-900/30 border border-white/5 rounded-[2rem] p-8 backdrop-blur-sm group hover:border-blue-500/30 transition-colors duration-300 hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
                                        {/* Header with Image */}
                                        <div className="flex items-center gap-4 mb-6">
                                            <div className="relative w-16 h-16 flex-shrink-0">
                                                <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-[10px] opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                                <img
                                                    src={testimonial.image}
                                                    alt={testimonial.name}
                                                    className="w-full h-full object-cover rounded-full border-2 border-white/10 group-hover:border-blue-500/50 transition-colors"
                                                />
                                            </div>
                                            <div>
                                                <h4 className="text-lg font-bold text-white font-orbitron leading-tight">
                                                    {testimonial.name}
                                                </h4>
                                                <p className="text-blue-400 text-xs font-bold tracking-wider uppercase mt-1">
                                                    {testimonial.role.split(' ').slice(0, 2).join(' ')}...
                                                </p>
                                            </div>
                                        </div>

                                        {/* Rating */}
                                        <div className="flex gap-1 mb-4">
                                            {[...Array(testimonial.rating)].map((_, i) => (
                                                <Star key={i} size={14} className="fill-cyan-400 text-cyan-400" />
                                            ))}
                                        </div>

                                        {/* Text */}
                                        <p className="text-gray-400 text-sm leading-relaxed italic flex-grow">
                                            "{testimonial.text}"
                                        </p>

                                        {/* Quote Icon */}
                                        <div className="mt-6 flex justify-end">
                                            <Quote className="text-white/10 w-8 h-8 group-hover:text-blue-500/20 transition-colors" />
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>

                    {/* Dots */}
                    <div className="flex justify-center gap-2 mt-12">
                        {testimonials.map((_, idx) => (
                            <button
                                key={idx}
                                onClick={() => {
                                    setDirection(idx > currentIndex ? 1 : -1);
                                    setCurrentIndex(idx);
                                }}
                                className={`h-1.5 rounded-full transition-all duration-300 ${currentIndex === idx ? "bg-blue-500 w-8" : "bg-white/10 w-4 hover:bg-white/30"
                                    }`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
