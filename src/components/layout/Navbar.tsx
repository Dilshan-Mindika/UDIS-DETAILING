"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, Mail, MapPin, ChevronRight, Zap, Facebook, Instagram, Youtube } from "lucide-react";
import { motion, useScroll, useTransform, AnimatePresence, useMotionTemplate } from "framer-motion";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

// Custom TikTok Icon
const Tiktok = ({ size = 24, className = "" }: { size?: number, className?: string }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
    >
        <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
    </svg>
);

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const { scrollY } = useScroll();
    const [isScrolled, setIsScrolled] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const updateScroll = () => {
            setIsScrolled(window.scrollY > 100);
        };
        window.addEventListener("scroll", updateScroll);
        return () => window.removeEventListener("scroll", updateScroll);
    }, []);

    // Animations for floating modules
    const topBarY = useTransform(scrollY, [0, 50], [0, -100]);
    const mainNavWidth = useTransform(scrollY, [0, 100], ["100%", "90%"]);
    const mainNavY = useTransform(scrollY, [0, 50], [0, -40]);
    const navBorderOpacity = useTransform(scrollY, [0, 100], [0.1, 0.3]);
    const navBackdropConfig = useTransform(scrollY, [0, 100], ["blur(16px)", "blur(30px)"]);

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "About", href: "/about" },
        { name: "Services", href: "/services" },
        { name: "Packages", href: "/packages" },
        { name: "Projects", href: "/our-projects" },
        { name: "Contact", href: "/contact" },
    ];

    return (
        <div className="fixed top-0 left-0 w-full z-50 flex flex-col items-center pt-6 pointer-events-none perspective-[1000px]">

            {/* 1. Comms Pod (Top Bar) - Floats separately */}
            <motion.div
                style={{ y: topBarY, opacity: useTransform(scrollY, [0, 20], [1, 0]) }}
                className="pointer-events-auto hidden md:flex items-center gap-6 px-10 py-3 mb-4 bg-black/90 backdrop-blur-xl border border-white/20 rounded-full shadow-[0_8px_30px_rgba(0,0,0,0.6)] hover:bg-black transition-colors z-[60]"
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                {/* Address */}
                <span className="flex items-center gap-2 text-xs text-gray-200 font-mono tracking-widest uppercase cursor-default font-bold shadow-black drop-shadow-md">
                    <MapPin size={14} className="text-primary fill-primary/20" />
                    <span>Unit 2/411 Mountain Hwy, Wantirna VIC 3152</span>
                </span>

                <div className="w-px h-4 bg-white/30"></div>

                {/* Phone */}
                <a href="tel:+61405838609" className="flex items-center gap-2 text-xs text-white hover:text-primary transition-colors font-bold tracking-widest group shadow-black drop-shadow-md">
                    <Phone size={14} className="text-primary fill-primary/20 group-hover:scale-110 transition-transform" />
                    <span>+61 405 838 609</span>
                </a>

                <div className="w-px h-4 bg-white/30"></div>

                {/* Email */}
                <a href="mailto:detailing@udismultipro.com" className="flex items-center gap-2 text-xs text-white hover:text-primary transition-colors font-bold tracking-widest group shadow-black drop-shadow-md">
                    <Mail size={14} className="text-primary fill-primary/20 group-hover:scale-110 transition-transform" />
                    <span>detailing@udismultipro.com</span>
                </a>

                {/* Divider for socials */}
                <div className="w-px h-4 bg-white/30 ml-4"></div>

                {/* Social Icons */}
                <div className="flex items-center gap-5 ml-2">
                    <a href="#" className="text-white hover:text-primary transition-all transform hover:scale-125 hover:drop-shadow-[0_0_10px_rgba(59,130,246,0.8)]"><Facebook size={16} /></a>
                    <a href="#" className="text-white hover:text-primary transition-all transform hover:scale-125 hover:drop-shadow-[0_0_10px_rgba(59,130,246,0.8)]"><Instagram size={16} /></a>
                    <a href="#" className="text-white hover:text-primary transition-all transform hover:scale-125 hover:drop-shadow-[0_0_10px_rgba(59,130,246,0.8)]"><Tiktok size={16} /></a>
                    <a href="#" className="text-white hover:text-primary transition-all transform hover:scale-125 hover:drop-shadow-[0_0_10px_rgba(59,130,246,0.8)]"><Youtube size={16} /></a>
                </div>
            </motion.div>

            {/* 2. Cyber-Deck (Main Nav) */}
            <motion.div
                style={{ y: mainNavY, width: mainNavWidth }}
                className={cn(
                    "pointer-events-auto relative container mx-auto px-2 transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)]",
                    isScrolled ? "max-w-5xl" : "max-w-7xl"
                )}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
                <motion.div
                    className={cn(
                        "relative flex items-center justify-between px-6 md:px-10 transition-all duration-500 overflow-hidden",
                        "bg-black/70 border border-white/10 shadow-[0_10px_40px_0_rgba(0,0,0,0.5)]",
                        isScrolled ? "h-16 rounded-full border-primary/30 shadow-[0_0_50px_-10px_rgba(37,99,235,0.4)]" : "h-24 rounded-3xl"
                    )}
                    style={{ backdropFilter: navBackdropConfig, borderColor: useMotionTemplate`rgba(255, 255, 255, ${navBorderOpacity})` }}
                >
                    {/* Holographic Noise Overlay */}
                    <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] bg-repeat brightness-150 contrast-150 mix-blend-overlay"></div>

                    {/* Scanner Line Effect */}
                    <div className="absolute top-0 -left-[100%] w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-[-45deg] animate-[shine_6s_infinite]"></div>

                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-4 group relative z-10">
                        <div className="relative w-10 h-10 flex items-center justify-center bg-gradient-to-br from-gray-900 to-black rounded-xl border border-white/20 group-hover:border-primary/50 transition-colors duration-500 overflow-hidden shadow-lg">
                            <div className="absolute inset-0 bg-primary/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-md"></div>
                            <span className="text-white font-bold text-xl font-orbitron relative z-10">U</span>
                        </div>
                        <div className="flex flex-col leading-none">
                            <span className="text-xl font-bold font-orbitron tracking-tighter text-white drop-shadow-md">UDI'S</span>
                            <span className="text-[10px] font-bold text-primary tracking-[0.3em] uppercase opacity-90 group-hover:tracking-[0.4em] transition-all duration-500">Detailing</span>
                        </div>
                    </Link>

                    {/* Desktop Links */}
                    <nav className="hidden md:flex items-center gap-2 relative z-10">
                        {navLinks.map((link) => {
                            const isActive = pathname === link.href;
                            return (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className={cn(
                                        "relative px-6 py-2.5 text-xs font-bold tracking-[0.2em] transition-all duration-300 rounded-full uppercase group",
                                        isActive ? "text-white" : "text-gray-300 hover:text-white"
                                    )}
                                >
                                    {isActive && (
                                        <motion.div
                                            layoutId="nav-bg"
                                            className="absolute inset-0 bg-white/10 border border-white/20 rounded-full shadow-[0_0_20px_rgba(255,255,255,0.1)]"
                                            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                        />
                                    )}
                                    <span className="relative z-10 group-hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.6)] transition-all">
                                        {link.name}
                                    </span>
                                </Link>
                            );
                        })}
                    </nav>

                    {/* Action Button */}
                    <div className="hidden md:block relative z-10">
                        <Button className="rounded-full h-10 bg-white text-black hover:bg-custom-gold hover:text-black font-extrabold text-xs tracking-widest px-8 shadow-[0_0_25px_rgba(255,255,255,0.2)] hover:shadow-[0_0_40px_rgba(250,204,21,0.5)] transition-all duration-500 border border-transparent hover:border-black/20 transform hover:scale-105">
                            BOOK NOW
                        </Button>
                    </div>

                    {/* Mobile Toggle */}
                    <button
                        className="md:hidden text-white p-2 relative z-10 hover:bg-white/10 rounded-full transition-colors"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </motion.div>
            </motion.div>

            {/* Cinematic Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.4 }}
                        className="fixed inset-0 z-[60] bg-black/98 backdrop-blur-[40px] pointer-events-auto flex flex-col items-center justify-center"
                    >
                        {/* Background Elements */}
                        <div className="absolute inset-0 overflow-hidden pointer-events-none">
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[150px] opacity-40 animate-pulse"></div>
                        </div>

                        <button
                            className="absolute top-8 right-8 text-white/60 hover:text-white transition-colors p-3 rounded-full border border-white/10 hover:border-white/40 bg-white/5 hover:bg-white/10"
                            onClick={() => setIsOpen(false)}
                        >
                            <X size={32} />
                        </button>

                        <nav className="flex flex-col gap-6 text-center relative z-10 w-full px-6">
                            {navLinks.map((link, i) => (
                                <motion.div
                                    key={link.name}
                                    initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
                                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                                    transition={{ delay: 0.1 + (i * 0.08), duration: 0.6, ease: "easeOut" }}
                                >
                                    <Link
                                        href={link.href}
                                        className="block text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-500 font-orbitron tracking-tighter hover:from-primary hover:to-blue-400 transition-all duration-500 hover:scale-105 hover:tracking-normal"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {link.name}
                                    </Link>
                                </motion.div>
                            ))}
                            <motion.div
                                initial={{ opacity: 0, y: 40 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.6 }}
                                className="mt-12 w-full flex justify-center"
                            >
                                <Button className="h-16 px-12 text-xl bg-white text-black hover:bg-primary hover:text-white rounded-full font-bold tracking-widest transition-all duration-300 shadow-[0_0_50px_rgba(255,255,255,0.2)] hover:shadow-[0_0_60px_rgba(59,130,246,0.6)] w-full max-w-sm">
                                    BOOK APPOINTMENT
                                </Button>
                            </motion.div>

                            {/* Mobile Socials */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.8 }}
                                className="flex justify-center gap-8 mt-8 text-white/50"
                            >
                                <Facebook size={24} className="hover:text-primary transition-colors" />
                                <Instagram size={24} className="hover:text-primary transition-colors" />
                                <Tiktok size={24} className="hover:text-primary transition-colors" />
                                <Youtube size={24} className="hover:text-primary transition-colors" />
                            </motion.div>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>

        </div>
    );
}
