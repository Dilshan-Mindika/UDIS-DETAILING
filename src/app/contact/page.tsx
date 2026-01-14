"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input" // Need to create Input
import { Textarea } from "@/components/ui/textarea" // Need to create Textarea
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useState } from "react";

export default function ContactPage() {
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setLoading(true);
        // Placeholder for API call
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

    return (
        <div className="py-24 container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-20">
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Contact Us</h1>
                <p className="text-xl text-gray-400">
                    Get in touch for quotes, inquiries, or just to say hello.
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                {/* Info Side */}
                <div className="space-y-8">
                    <div className="bg-white/5 p-8 rounded-2xl border border-white/10">
                        <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
                        <div className="space-y-6">
                            <div className="flex items-start gap-4 text-gray-300">
                                <MapPin className="text-custom-gold mt-1" />
                                <div>
                                    <p className="font-bold text-white">Address</p>
                                    <p>123 Detailing Blvd, Auto City, AC 12345</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4 text-gray-300">
                                <Phone className="text-custom-gold mt-1" />
                                <div>
                                    <p className="font-bold text-white">Phone</p>
                                    <p>+1 (234) 567-8900</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4 text-gray-300">
                                <Mail className="text-custom-gold mt-1" />
                                <div>
                                    <p className="font-bold text-white">Email</p>
                                    <p>info@udisdetailing.com</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4 text-gray-300">
                                <Clock className="text-custom-gold mt-1" />
                                <div>
                                    <p className="font-bold text-white">Hours</p>
                                    <p>Mon - Fri: 8:00 AM - 6:00 PM</p>
                                    <p>Sat: 9:00 AM - 4:00 PM</p>
                                    <p>Sun: Closed</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Map Placeholder */}
                    <div className="h-64 bg-gray-800 rounded-2xl overflow-hidden relative">
                        <div className="absolute inset-0 flex items-center justify-center text-gray-500 font-bold">
                            [Google Map Embed]
                        </div>
                    </div>
                </div>

                {/* Form Side */}
                <div className="bg-white/5 p-8 rounded-2xl border border-white/10">
                    <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-300 mb-2">Name</label>
                            <input name="name" required className="w-full bg-black/50 border border-white/10 rounded-md px-4 py-3 text-white focus:outline-none focus:border-custom-gold hover:border-white/30 transition-colors" placeholder="Your Name" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                            <input name="email" type="email" required className="w-full bg-black/50 border border-white/10 rounded-md px-4 py-3 text-white focus:outline-none focus:border-custom-gold hover:border-white/30 transition-colors" placeholder="your@email.com" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-300 mb-2">Subject</label>
                            <input name="subject" required className="w-full bg-black/50 border border-white/10 rounded-md px-4 py-3 text-white focus:outline-none focus:border-custom-gold hover:border-white/30 transition-colors" placeholder="Inquiry about..." />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                            <textarea name="message" required rows={5} className="w-full bg-black/50 border border-white/10 rounded-md px-4 py-3 text-white focus:outline-none focus:border-custom-gold hover:border-white/30 transition-colors" placeholder="How can we help?" />
                        </div>

                        <Button variant="gold" className="w-full py-6 text-lg" disabled={loading}>
                            {loading ? "Sending..." : "Send Message"}
                        </Button>
                        {success && <p className="text-green-500 text-center">Message sent successfully!</p>}
                    </form>
                </div>
            </div>
        </div>
    );
}
