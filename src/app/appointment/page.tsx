"use client";

import { Button } from "@/components/ui/button";
import { useState } from "react";

const servicesList = [
    "Premium Wash & Wax",
    "Paint Correction",
    "Ceramic Coating",
    "Deep Interior Clean",
    "Gold Package",
    "Platinum Package",
    "Other"
];

export default function AppointmentPage() {
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setLoading(true);
        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData);

        try {
            const res = await fetch('/api/booking', { // Using same logic as contact but different endpoint/type
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
            <div className="text-center max-w-3xl mx-auto mb-16">
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Book Appointment</h1>
                <p className="text-xl text-gray-400">
                    Secure your slot for premium detailing services.
                </p>
            </div>

            <div className="max-w-2xl mx-auto bg-white/5 p-8 md:p-12 rounded-2xl border border-white/10 shadow-2xl">
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-300 mb-2">First Name</label>
                            <input name="firstName" required className="w-full bg-black/50 border border-white/10 rounded-md px-4 py-3 text-white focus:outline-none focus:border-custom-gold hover:border-white/30 transition-colors" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-300 mb-2">Last Name</label>
                            <input name="lastName" required className="w-full bg-black/50 border border-white/10 rounded-md px-4 py-3 text-white focus:outline-none focus:border-custom-gold hover:border-white/30 transition-colors" />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                            <input name="email" type="email" required className="w-full bg-black/50 border border-white/10 rounded-md px-4 py-3 text-white focus:outline-none focus:border-custom-gold hover:border-white/30 transition-colors" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-300 mb-2">Phone</label>
                            <input name="phone" type="tel" required className="w-full bg-black/50 border border-white/10 rounded-md px-4 py-3 text-white focus:outline-none focus:border-custom-gold hover:border-white/30 transition-colors" />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">Service Interested In</label>
                        <select name="service" className="w-full bg-black/50 border border-white/10 rounded-md px-4 py-3 text-white focus:outline-none focus:border-custom-gold hover:border-white/30 transition-colors appearance-none">
                            {servicesList.map(s => <option key={s} value={s} className="bg-black text-white">{s}</option>)}
                        </select>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-300 mb-2">Preferred Date</label>
                            <input name="date" type="date" required className="w-full bg-black/50 border border-white/10 rounded-md px-4 py-3 text-white focus:outline-none focus:border-custom-gold hover:border-white/30 transition-colors filter invert" />
                            {/* invert filter for date picker icon visibility in dark mode simplified */}
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-300 mb-2">Preferred Time</label>
                            <select name="time" className="w-full bg-black/50 border border-white/10 rounded-md px-4 py-3 text-white focus:outline-none focus:border-custom-gold hover:border-white/30 transition-colors appearance-none">
                                <option value="Morning" className="bg-black">Morning (8am - 12pm)</option>
                                <option value="Afternoon" className="bg-black">Afternoon (12pm - 4pm)</option>
                            </select>
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">Vehicle Make & Model</label>
                        <input name="vehicle" required className="w-full bg-black/50 border border-white/10 rounded-md px-4 py-3 text-white focus:outline-none focus:border-custom-gold hover:border-white/30 transition-colors" placeholder="e.g. 2023 Tesla Model 3" />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">Additional Details</label>
                        <textarea name="details" rows={3} className="w-full bg-black/50 border border-white/10 rounded-md px-4 py-3 text-white focus:outline-none focus:border-custom-gold hover:border-white/30 transition-colors" placeholder="Tell us more about your needs..." />
                    </div>

                    <Button variant="gold" className="w-full py-6 text-lg font-bold uppercase tracking-wider" disabled={loading}>
                        {loading ? "Submitting..." : "Confirm Appointment Request"}
                    </Button>
                    {success && <p className="text-green-500 text-center font-bold">Request received! We will contact you shortly.</p>}
                </form>
            </div>
        </div>
    );
}
