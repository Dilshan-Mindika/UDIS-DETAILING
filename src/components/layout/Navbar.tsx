"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, Mail, MapPin } from "lucide-react";
import { motion } from "framer-motion";

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "About", href: "/about" },
        { name: "Services", href: "/services" },
        { name: "Packages", href: "/packages" },
        { name: "Projects", href: "/our-projects" },
        { name: "Contact", href: "/contact" },
    ];

    return (
        <header className="fixed w-full z-50 bg-black/80 backdrop-blur-md border-b border-white/5">
            {/* Top Bar - Preserved/Updated if needed */}
            <div className="hidden md:flex justify-between items-center px-6 py-2 bg-black border-b border-white/5 text-xs text-gray-400">
                <div className="flex gap-6">
                    <span className="flex items-center gap-2 hover:text-primary transition-colors cursor-default">
                        <MapPin size={12} className="text-primary" /> Unit 2/411 Mountain Hwy, Wantirna VIC 3152
                    </span>
                    <a href="tel:+61405838609" className="flex items-center gap-2 hover:text-primary transition-colors">
                        <Phone size={12} className="text-primary" /> +61 405 838 609
                    </a>
                    <a href="mailto:detailing@udismultipro.com" className="flex items-center gap-2 hover:text-primary transition-colors">
                        <Mail size={12} className="text-primary" /> detailing@udismultipro.com
                    </a>
                </div>
                <div className="flex gap-4">
                    <a href="#" className="hover:text-primary transition-colors">FB</a>
                    <a href="#" className="hover:text-primary transition-colors">IG</a>
                    <a href="#" className="hover:text-primary transition-colors">TK</a>
                    <a href="#" className="hover:text-primary transition-colors">YT</a>
                </div>
            </div>

            <div className="container mx-auto px-4 md:px-6 h-20 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="text-3xl font-bold tracking-tighter text-white font-orbitron">
                    UDI'S <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">DETAILING</span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium text-gray-300 hover:text-primary transition-colors uppercase tracking-wider relative group"
                        >
                            {link.name}
                            <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-primary transition-all group-hover:w-full"></span>
                        </Link>
                    ))}
                    <Button className="ml-4 bg-primary hover:bg-primary/90 text-white border-none shadow-[0_0_20px_rgba(37,99,235,0.3)]">
                        Book Appointment
                    </Button>
                </nav>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden text-white"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Nav */}
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="md:hidden bg-black/95 backdrop-blur-xl border-t border-white/10 absolute w-full"
                >
                    <nav className="flex flex-col gap-4 p-6">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-white hover:text-primary text-lg font-medium"
                                onClick={() => setIsOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Button className="w-full bg-primary hover:bg-primary/90">
                            Book Appointment
                        </Button>
                    </nav>
                </motion.div>
            )}
        </header>
    );
}
