import Link from "next/link";
import { Facebook, Instagram, Linkedin, Youtube, MapPin, Phone, Mail } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-black text-gray-300 pt-16 pb-8 border-t border-white/5">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
                    {/* Brand */}
                    <div className="space-y-4">
                        <h3 className="text-3xl font-bold text-white font-orbitron">
                            UDI'S <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">DETAILING</span>
                        </h3>
                        <p className="text-sm text-gray-400">
                            Premium auto detailing services delivering showroom shine and long-lasting protection.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
                        <ul className="space-y-2 text-sm">
                            <li><Link href="/about" className="hover:text-primary transition-colors">About Us</Link></li>
                            <li><Link href="/services" className="hover:text-primary transition-colors">Services</Link></li>
                            <li><Link href="/packages" className="hover:text-primary transition-colors">Packages</Link></li>
                            <li><Link href="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-lg font-semibold text-white mb-4">Contact Us</h4>
                        <ul className="space-y-3 text-sm">
                            <li className="flex items-start gap-2">
                                <MapPin className="text-primary w-4 h-4 mt-1" />
                                <span>Unit 2/411 Mountain Hwy, <br />Wantirna VIC 3152, Australia</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <Phone className="text-primary w-4 h-4" />
                                <span>+61 405 838 609</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <Mail className="text-primary w-4 h-4" />
                                <span>detailing@udismultipro.com</span>
                            </li>
                        </ul>
                    </div>

                    {/* Social / Newsletter */}
                    <div>
                        <h4 className="text-lg font-semibold text-white mb-4">Follow Us</h4>
                        <div className="flex gap-4">
                            <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-primary hover:text-white transition-all hover:scale-110">
                                <Facebook size={20} />
                            </a>
                            <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-primary hover:text-white transition-all hover:scale-110">
                                <Instagram size={20} />
                            </a>
                            <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-primary hover:text-white transition-all hover:scale-110">
                                <Linkedin size={20} />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="border-t border-white/5 pt-8 text-center text-sm text-gray-500">
                    © {new Date().getFullYear()} UDI's Detailing. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
