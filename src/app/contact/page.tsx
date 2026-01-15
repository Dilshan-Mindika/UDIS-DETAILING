"use client";

import { PageHero } from "@/components/sections/PageHero";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock, MessageSquare, Send, Globe2, CheckCircle2 } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export default function ContactPage() {
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setLoading(true);
        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData);

        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                body: JSON.stringify(data),
                headers: { 'Content-Type': 'application/json' }
            });
            if (res.ok) {
                setSuccess(true);
                (e.target as HTMLFormElement).reset();
            }
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    }

    const contactInfo = [
        {
            icon: MapPin,
            title: "Visit Our Studio",
            value: "Unit 2/411 Mountain Hwy, Wantirna VIC 3152",
            color: "text-blue-400",
            bg: "bg-blue-500/10",
            border: "group-hover:border-blue-500/50"
        },
        {
            icon: Phone,
            title: "Call Us Now",
            value: "+61 405 838 609",
            color: "text-cyan-400",
            bg: "bg-cyan-500/10",
            border: "group-hover:border-cyan-500/50"
        },
        {
            icon: Mail,
            title: "Email Us",
            value: "detailing@udismultipro.com",
            color: "text-purple-400",
            bg: "bg-purple-500/10",
            border: "group-hover:border-purple-500/50"
        },
        {
            icon: Clock,
            title: "Opening Hours",
            value: "Mon-Fri: 8AM - 6PM | Sat: 9AM - 4PM",
            color: "text-amber-400",
            bg: "bg-amber-500/10",
            border: "group-hover:border-amber-500/50"
        }
    ];

    return (
        <div className="bg-black min-h-screen">
            <PageHero
                badgeIcon={MessageSquare}
                badgeText="CONTACT US"
                title="GET IN"
                highlightedTitle="TOUCH"
                subtitle="Ready to elevate your vehicle? Contact our team for quotes, appointments, or general inquiries."
                backgroundImage="https://images.unsplash.com/photo-1601362840469-51e4d8d58785?q=80&w=2000&auto=format&fit=crop"
            />

            <div className="relative py-24 container mx-auto px-4 z-10">
                {/* Background Decor */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[120px] pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-cyan-600/5 rounded-full blur-[120px] pointer-events-none" />

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 max-w-7xl mx-auto relative">
                    {/* Left Column: Info & Map */}
                    <div className="space-y-12">
                        <ScrollReveal>
                            <h2 className="text-4xl font-black font-orbitron text-white mb-4">
                                CONTACT <span className="text-blue-500">INFORMATION</span>
                            </h2>
                            <p className="text-gray-400 mb-8 max-w-md leading-relaxed">
                                Whether you need a full ceramic coating or a quick interior refresh, we are here to help. Reach out to us through any of the channels below.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {contactInfo.map((item, idx) => (
                                    <motion.div
                                        key={idx}
                                        whileHover={{ y: -5 }}
                                        className={`group p-6 rounded-3xl bg-neutral-900/40 border border-white/5 backdrop-blur-sm transition-all duration-300 ${item.border}`}
                                    >
                                        <div className={`w-12 h-12 rounded-xl ${item.bg} flex items-center justify-center mb-4 transition-colors`}>
                                            <item.icon className={`w-6 h-6 ${item.color}`} />
                                        </div>
                                        <h3 className="text-white font-bold font-orbitron text-sm uppercase tracking-wider mb-2">{item.title}</h3>
                                        <p className="text-gray-400 text-sm font-medium leading-relaxed">{item.value}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </ScrollReveal>

                        {/* Map Section - Integrated & Actionable */}
                        <ScrollReveal delay={0.2}>
                            <a
                                href="https://share.google/K8iPJuih9Ag441Zu2"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block relative h-80 rounded-[2.5rem] overflow-hidden border border-white/10 group shadow-2xl transition-all hover:border-blue-500/50"
                            >
                                <div className="absolute inset-0 bg-neutral-800 flex items-center justify-center">
                                    <iframe
                                        src="https://maps.google.com/maps?q=Unit+2/411+Mountain+Hwy,+Wantirna+VIC+3152&t=&z=15&ie=UTF8&iwloc=&output=embed"
                                        className="w-full h-full grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                    />
                                    {/* Overlay for interaction hint */}
                                    <div className="absolute inset-0 flex items-center justify-center bg-black/40 group-hover:bg-transparent transition-colors pointer-events-none">
                                        <div className="bg-black/80 backdrop-blur-md px-6 py-3 rounded-full border border-white/10 flex items-center gap-3 group-hover:opacity-0 transition-opacity transform translate-y-0 group-hover:translate-y-4">
                                            <Globe2 className="w-5 h-5 text-blue-400" />
                                            <span className="text-white text-xs font-bold uppercase tracking-widest">View Location</span>
                                        </div>
                                    </div>
                                </div>
                                {/* Gradient Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
                            </a>
                        </ScrollReveal>
                    </div>

                    {/* Right Column: Form */}
                    <div className="relative">
                        <ScrollReveal delay={0.3}>
                            <div className="bg-neutral-900/30 border border-white/10 backdrop-blur-xl rounded-[3rem] p-8 md:p-12 relative overflow-hidden shadow-2xl">
                                {/* Decor Lines */}
                                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />

                                <div className="mb-10">
                                    <h3 className="text-2xl font-black font-orbitron text-white uppercase mb-2">Send a Message</h3>
                                    <p className="text-gray-400 text-sm">Fill out the form below and we will get back to you shortly.</p>
                                </div>

                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="space-y-6">
                                        {[
                                            { name: "name", label: "Full Name", placeholder: "e.g. John Doe" },
                                            { name: "email", type: "email", label: "Email Address", placeholder: "e.g. john@example.com" },
                                            { name: "subject", label: "Subject", placeholder: "e.g. Ceramic Coating Quote" }
                                        ].map((field) => (
                                            <div key={field.name} className="space-y-2">
                                                <label className="text-xs font-bold text-gray-500 uppercase tracking-widest ml-1">{field.label} <span className="text-red-500">*</span></label>
                                                <input
                                                    name={field.name}
                                                    type={field.type || "text"}
                                                    required
                                                    className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-4 text-white placeholder-gray-700 focus:outline-none focus:border-blue-500 focus:bg-blue-900/5 transition-all text-sm"
                                                    placeholder={field.placeholder}
                                                />
                                            </div>
                                        ))}

                                        <div className="space-y-2">
                                            <label className="text-xs font-bold text-gray-500 uppercase tracking-widest ml-1">Message <span className="text-red-500">*</span></label>
                                            <textarea
                                                name="message"
                                                required
                                                rows={4}
                                                className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-4 text-white placeholder-gray-700 focus:outline-none focus:border-blue-500 focus:bg-blue-900/5 transition-all text-sm resize-none"
                                                placeholder="Tell us about your vehicle and what services you are interested in..."
                                            />
                                        </div>
                                    </div>

                                    <Button
                                        variant="default"
                                        className="w-full h-14 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white rounded-xl font-bold font-orbitron tracking-widest uppercase transition-all shadow-lg hover:shadow-blue-500/25 relative overflow-hidden group"
                                        disabled={loading}
                                    >
                                        <span className="relative z-10 flex items-center justify-center gap-3">
                                            {/* @ts-ignore */}
                                            {loading ? "Sending..." : <>Send Message <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" /></>}
                                        </span>
                                    </Button>

                                    {success && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            className="p-4 bg-green-500/10 border border-green-500/20 rounded-xl flex items-center justify-center gap-3 text-green-400 text-sm font-medium"
                                        >
                                            <CheckCircle2 className="w-5 h-5" />
                                            Message sent successfully!
                                        </motion.div>
                                    )}
                                </form>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </div>
        </div>
    );
}
