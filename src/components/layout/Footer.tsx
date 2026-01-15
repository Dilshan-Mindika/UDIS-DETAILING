"use client";

import Link from "next/link";
import { MapPin, Phone, Mail, ChevronRight, Facebook, Instagram, Twitter, ArrowRight } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-black border-t border-blue-900/30 pt-16 pb-6 relative overflow-hidden font-sans">
            {/* Background Texture & Glow */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(0,100,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,100,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px] opacity-30 pointer-events-none"></div>
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 translate-x-1/3 mix-blend-screen"></div>
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-cyan-600/10 rounded-full blur-[100px] pointer-events-none translate-y-1/3 -translate-x-1/3 mix-blend-screen"></div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 mb-12">

                    {/* Brand Column (Span 4) */}
                    <div className="lg:col-span-4">
                        <Link href="/" className="inline-block mb-6 group">
                            <img
                                src="/images/logo.png"
                                alt="UDI'S Detailing Logo"
                                className="h-12 w-auto object-contain brightness-100 group-hover:drop-shadow-[0_0_15px_rgba(59,130,246,0.5)] transition-all duration-300"
                            />
                        </Link>
                        <p className="text-gray-400 leading-relaxed mb-6 max-w-sm">
                            Professional mobile car detailing serving your location—home or work. Specializing in interior deep cleaning, exterior polishing, and full vehicle restoration.
                        </p>

                        {/* Socials */}
                        <div className="flex gap-4">
                            {[Facebook, Instagram, Twitter].map((Icon, idx) => (
                                <a
                                    key={idx}
                                    href="#"
                                    className="w-10 h-10 rounded-xl bg-neutral-900/50 border border-white/10 flex items-center justify-center text-gray-400 hover:bg-blue-600 hover:border-blue-500 hover:text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(37,99,235,0.4)]"
                                >
                                    <Icon size={18} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Contact Info (Span 3) */}
                    <div className="lg:col-span-3 lg:pl-8">
                        <h4 className="text-lg font-bold text-white font-orbitron mb-6 flex items-center gap-3">
                            <span className="w-8 h-1 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full"></span>
                            Contact Us
                        </h4>
                        <ul className="space-y-4">
                            <li className="group flex items-start gap-4">
                                <div className="mt-1 flex-shrink-0 w-8 h-8 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-all duration-300 shadow-[0_0_10px_rgba(59,130,246,0)] group-hover:shadow-[0_0_15px_rgba(59,130,246,0.5)]">
                                    <MapPin size={16} />
                                </div>
                                <div>
                                    <span className="block text-white font-medium mb-1 group-hover:text-blue-400 transition-colors">Visit HQ</span>
                                    <span className="text-gray-400 text-sm leading-relaxed block">Unit 2/411 Mountain Hwy,<br />Wantirna VIC 3152</span>
                                </div>
                            </li>
                            <li className="group flex items-start gap-4">
                                <div className="mt-1 flex-shrink-0 w-8 h-8 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-all duration-300 shadow-[0_0_10px_rgba(59,130,246,0)] group-hover:shadow-[0_0_15px_rgba(59,130,246,0.5)]">
                                    <Phone size={16} />
                                </div>
                                <div>
                                    <span className="block text-white font-medium mb-1 group-hover:text-blue-400 transition-colors">Call 24/7</span>
                                    <span className="text-gray-400 text-sm">+61 405 838 609</span>
                                </div>
                            </li>
                            <li className="group flex items-start gap-4">
                                <div className="mt-1 flex-shrink-0 w-8 h-8 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-all duration-300 shadow-[0_0_10px_rgba(59,130,246,0)] group-hover:shadow-[0_0_15px_rgba(59,130,246,0.5)]">
                                    <Mail size={16} />
                                </div>
                                <div>
                                    <span className="block text-white font-medium mb-1 group-hover:text-blue-400 transition-colors">Email Us</span>
                                    <span className="text-gray-400 text-sm">detailing@udismultipro.com</span>
                                </div>
                            </li>
                        </ul>
                    </div>

                    {/* Quick Links (Span 2) */}
                    <div className="lg:col-span-2">
                        <h4 className="text-lg font-bold text-white font-orbitron mb-6 flex items-center gap-3">
                            <span className="w-8 h-1 bg-gradient-to-r from-cyan-600 to-cyan-400 rounded-full"></span>
                            Explore
                        </h4>
                        <ul className="space-y-2">
                            {["Homepage", "About Us", "Our Services", "Our Projects", "Contact Us"].map((item) => (
                                <li key={item}>
                                    <Link href="#" className="group flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-colors py-1">
                                        <ChevronRight size={14} className="text-white/20 group-hover:text-cyan-400 transition-colors" />
                                        <span className="group-hover:translate-x-2 transition-transform duration-300">{item}</span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Top Services (Span 3) */}
                    <div className="lg:col-span-3">
                        <h4 className="text-lg font-bold text-white font-orbitron mb-6 flex items-center gap-3">
                            <span className="w-8 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"></span>
                            Services
                        </h4>
                        <ul className="space-y-2">
                            {["PPF Protection", "PDR Service", "Vinyl Wrapping", "Ceramic Coating", "Scratch Removing"].map((item) => (
                                <li key={item}>
                                    <Link href="#" className="group flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/5 hover:bg-gradient-to-r hover:from-blue-900/40 hover:to-cyan-900/40 hover:border-blue-500/30 transition-all duration-300">
                                        <span className="text-gray-300 text-sm font-medium group-hover:text-white transition-colors">{item}</span>
                                        <ArrowRight size={14} className="text-cyan-400 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300" />
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-gray-500 text-xs tracking-wide">
                        © 2025 UDI'S DETAILING. All rights reserved.
                    </p>
                    <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-black/50 border border-white/10 backdrop-blur-md">
                        <span className="text-gray-500 text-xs uppercase tracking-wider">Powered by</span>
                        <a
                            href="https://dilshanmindika.pro"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 font-bold text-sm tracking-widest font-orbitron hover:opacity-80 transition-opacity"
                        >
                            DILA
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
