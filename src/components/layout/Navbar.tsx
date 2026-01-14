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
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", updateScroll);
        return () => window.removeEventListener("scroll", updateScroll);
    }, []);

    // Animations
    const topBarY = useTransform(scrollY, [0, 50], [0, -150]);
    const mainNavWidth = useTransform(scrollY, [0, 100], ["100%", "95%"]);
    const mainNavY = useTransform(scrollY, [0, 50], [0, -20]);
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
        <div className="fixed top-0 left-0 w-full z-50 flex flex-col items-center pt-2 md:pt-4 lg:pt-6 pointer-events-none perspective-[1000px]">

            {/* 1. Comms Pod (Top Bar) - Desktop Only (lg+) */}
            <motion.div
                style={{ y: topBarY, opacity: useTransform(scrollY, [0, 20], [1, 0]) }}
                className="pointer-events-auto hidden lg:flex items-center gap-6 px-10 py-3 mb-4 bg-black/90 backdrop-blur-xl border border-white/20 rounded-full shadow-[0_8px_30px_rgba(0,0,0,0.6)] hover:bg-black transition-colors z-[60]"
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <span className="flex items-center gap-2 text-xs text-gray-200 font-mono tracking-widest uppercase cursor-default font-bold shadow-black drop-shadow-md">
                    <MapPin size={14} className="text-primary fill-primary/20" />
                    <span>Unit 2/411 Mountain Hwy, Wantirna VIC 3152</span>
                </span>
                <div className="w-px h-4 bg-white/30"></div>
                <a href="tel:+61405838609" className="flex items-center gap-2 text-xs text-white hover:text-primary transition-colors font-bold tracking-widest group shadow-black drop-shadow-md">
                    <Phone size={14} className="text-primary fill-primary/20 group-hover:scale-110 transition-transform" />
                    <span>+61 405 838 609</span>
                </a>
                <div className="w-px h-4 bg-white/30"></div>
                <a href="mailto:detailing@udismultipro.com" className="flex items-center gap-2 text-xs text-white hover:text-primary transition-colors font-bold tracking-widest group shadow-black drop-shadow-md">
                    <Mail size={14} className="text-primary fill-primary/20 group-hover:scale-110 transition-transform" />
                    <span>detailing@udismultipro.com</span>
                </a>
                <div className="w-px h-4 bg-white/30 ml-4"></div>
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
                        "relative flex items-center justify-between px-3 md:px-8 lg:px-10 transition-all duration-500 overflow-hidden",
                        "bg-black/70 border border-white/10 shadow-[0_10px_40px_0_rgba(0,0,0,0.5)]",
                        isScrolled ? "h-16 lg:h-16 rounded-full border-primary/30 shadow-[0_0_50px_-10px_rgba(37,99,235,0.4)]" : "h-20 lg:h-24 rounded-2xl lg:rounded-3xl"
                    )}
                    style={{ backdropFilter: navBackdropConfig, borderColor: useMotionTemplate`rgba(255, 255, 255, ${navBorderOpacity})` }}
                >
                    {/* Holographic Noise Overlay */}
                    <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] bg-repeat brightness-150 contrast-150 mix-blend-overlay"></div>

                    {/* Scanner Line Effect */}
                    <div className="absolute top-0 -left-[100%] w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-[-45deg] animate-[shine_6s_infinite]"></div>

                    {/* Left: Logo */}
                    <Link href="/" className="flex items-center gap-2 md:gap-4 group relative z-10 flex-shrink-0">
                        <div className="relative w-8 h-8 md:w-10 md:h-10 flex items-center justify-center bg-gradient-to-br from-gray-900 to-black rounded-lg md:rounded-xl border border-white/20 group-hover:border-primary/50 transition-colors duration-500 overflow-hidden shadow-lg">
                            <div className="absolute inset-0 bg-primary/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-md"></div>
                            <span className="text-white font-bold text-lg md:text-xl font-orbitron relative z-10">U</span>
                        </div>
                        <div className="flex flex-col leading-none">
                            <span className="text-lg md:text-xl font-bold font-orbitron tracking-tighter text-white drop-shadow-md">UDI'S</span>
                            <span className="text-[8px] font-bold text-primary tracking-[0.2em] md:tracking-[0.3em] uppercase opacity-90 group-hover:tracking-[0.4em] transition-all duration-500">Detailing</span>
                        </div>
                    </Link>

                    {/* === TABLET CENTERED SECTION (Visible on md, hidden on lg and sm) === */}
                    <div className="hidden md:flex lg:hidden flex-1 items-center justify-center gap-3 px-2 mx-2 overflow-hidden">
                        {/* Phone */}
                        <a href="tel:+61405838609" className="flex items-center gap-2 text-white hover:text-primary transition-colors group flex-shrink-0">
                            <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-primary/20 transition-all flex-shrink-0">
                                <Phone size={14} className="text-primary" />
                            </div>
                            <span className="text-[10px] font-bold tracking-widest whitespace-nowrap">+61 405 838 609</span>
                        </a>

                        {/* Divider */}
                        <div className="h-4 w-px bg-white/20 flex-shrink-0"></div>

                        {/* Email */}
                        <a href="mailto:detailing@udismultipro.com" className="flex items-center gap-2 text-white hover:text-primary transition-colors group">
                            <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-primary/20 transition-all flex-shrink-0">
                                <Mail size={14} className="text-primary" />
                            </div>
                            <span className="text-[10px] font-bold tracking-wide whitespace-nowrap">detailing@udismultipro.com</span>
                        </a>
                    </div>

                    {/* Right Side Group: Socials (Tablet) + Desktop Nav + Actions */}
                    <div className="flex items-center gap-4 relative z-10 flex-shrink-0">

                        {/* 1. Mobile Actions (< md) */}
                        <div className="flex md:hidden items-center gap-3">
                            <a href="tel:+61405838609" className="flex items-center gap-2 bg-white/10 px-3 py-1.5 rounded-full border border-white/10 text-primary hover:bg-white/20 transition-all">
                                <Phone size={14} className="fill-current" />
                                <span className="text-[10px] font-bold tracking-wide text-white">CALL</span>
                            </a>
                            <Button size="sm" className="h-7 bg-white text-black hover:bg-custom-gold text-[10px] font-bold px-3 rounded-full">
                                BOOK
                            </Button>
                        </div>

                        {/* 2. Tablet Socials (md ONLY) */}
                        <div className="hidden md:flex lg:hidden items-center gap-3">
                            <a href="#" className="text-white hover:text-primary transition-all hover:scale-110 drop-shadow-md"><Facebook size={18} /></a>
                            <a href="#" className="text-white hover:text-primary transition-all hover:scale-110 drop-shadow-md"><Instagram size={18} /></a>
                            <a href="#" className="text-white hover:text-primary transition-all hover:scale-110 drop-shadow-md"><Tiktok size={18} /></a>
                            <a href="#" className="text-white hover:text-primary transition-all hover:scale-110 drop-shadow-md"><Youtube size={18} /></a>
                        </div>

                        {/* 3. Desktop Nav (lg+) */}
                        <nav className="hidden lg:flex items-center gap-2">
                            {navLinks.map((link) => {
                                const isActive = pathname === link.href;
                                return (
                                    <Link
                                        key={link.name}
                                        href={link.href}
                                        className={cn(
                                            "relative px-4 xl:px-6 py-2.5 text-xs font-bold tracking-[0.2em] transition-all duration-300 rounded-full uppercase group",
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

                        {/* Desktop Button */}
                        <div className="hidden lg:block">
                            <Button className="rounded-full h-10 bg-white text-black hover:bg-custom-gold hover:text-black font-extrabold text-xs tracking-widest px-6 xl:px-8 shadow-[0_0_25px_rgba(255,255,255,0.2)] hover:shadow-[0_0_40px_rgba(250,204,21,0.5)] transition-all duration-500 border border-transparent hover:border-black/20 transform hover:scale-105">
                                BOOK NOW
                            </Button>
                        </div>

                        {/* Hamburger */}
                        <button
                            className="lg:hidden text-white p-2 hover:bg-white/10 rounded-full transition-colors flex-shrink-0"
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>

                </motion.div>
            </motion.div>

            {/* Cinematic Menu - Full Content Backup */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.4 }}
                        className="fixed inset-0 z-[60] bg-black/98 backdrop-blur-[40px] pointer-events-auto flex flex-col items-center justify-center overflow-y-auto py-10"
                    >
                        <div className="absolute inset-0 overflow-hidden pointer-events-none">
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[150px] opacity-40 animate-pulse"></div>
                        </div>

                        <button
                            className="absolute top-6 right-6 text-white/60 hover:text-white transition-colors p-3 rounded-full border border-white/10 hover:border-white/40 bg-white/5 hover:bg-white/10 z-50"
                            onClick={() => setIsOpen(false)}
                        >
                            <X size={28} />
                        </button>

                        <nav className="flex flex-col gap-6 text-center relative z-10 w-full px-6 max-w-md mx-auto">
                            <div className="mb-4 transform scale-90 opacity-80">
                                <span className="text-2xl font-bold font-orbitron text-white">UDI'S <span className="text-primary">DETAILING</span></span>
                            </div>

                            {navLinks.map((link, i) => (
                                <motion.div
                                    key={link.name}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.1 + (i * 0.05), duration: 0.4 }}
                                >
                                    <Link
                                        href={link.href}
                                        className="block text-3xl font-bold text-white hover:text-primary font-orbitron tracking-widest transition-colors py-2 border-b border-white/5"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {link.name}
                                    </Link>
                                </motion.div>
                            ))}

                            <div className="mt-8 flex flex-col gap-3 items-center text-gray-400 text-sm border-t border-white/10 pt-6">
                                <a href="tel:+61405838609" className="flex items-center gap-2 hover:text-white transition-colors">
                                    <Phone size={14} className="text-primary" /> +61 405 838 609
                                </a>
                                <a href="mailto:detailing@udismultipro.com" className="flex items-center gap-2 hover:text-white transition-colors">
                                    <Mail size={14} className="text-primary" /> detailing@udismultipro.com
                                </a>
                                <div className="flex items-center gap-2 text-center max-w-[250px]">
                                    <MapPin size={14} className="text-primary flex-shrink-0" />
                                    <span>Unit 2/411 Mountain Hwy, Wantirna VIC 3152</span>
                                </div>
                            </div>

                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.5 }}
                                className="flex justify-center gap-6 mt-4 text-white/50"
                            >
                                <Facebook size={20} className="hover:text-primary transition-colors" />
                                <Instagram size={20} className="hover:text-primary transition-colors" />
                                <Tiktok size={20} className="hover:text-primary transition-colors" />
                                <Youtube size={20} className="hover:text-primary transition-colors" />
                            </motion.div>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>

        </div>
    );
}
