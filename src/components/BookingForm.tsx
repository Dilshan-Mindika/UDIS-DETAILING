"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle2, Loader2, Calendar, Clock, User, Mail, Phone, Car, MessageSquare } from "lucide-react";

interface BookingFormData {
    name: string;
    email: string;
    phone: string;
    vehicleModel: string;
    preferredDate: string;
    preferredTime: string;
    notes: string;
    packageName: string;
}

export default function BookingForm({ packageName }: { packageName: string }) {
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
    const { register, handleSubmit, reset, formState: { errors } } = useForm<BookingFormData>();

    // Calculate minimum date (48 hours from now)
    const minDate = new Date(new Date().getTime() + 48 * 60 * 60 * 1000).toISOString().split('T')[0];

    const onSubmit = async (data: BookingFormData) => {
        setStatus("loading");
        try {
            const response = await fetch("/api/book", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ ...data, packageName }),
            });

            if (response.ok) {
                setStatus("success");
                reset();
            } else {
                setStatus("error");
            }
        } catch (error) {
            setStatus("error");
        }
    };

    if (status === "success") {
        return (
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-neutral-900/60 border border-blue-500/30 backdrop-blur-2xl p-12 rounded-[3.5rem] text-center space-y-6"
            >
                <div className="w-20 h-20 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-8 border border-blue-500/30 shadow-[0_0_30px_rgba(59,130,246,0.3)]">
                    <CheckCircle2 size={40} className="text-blue-400" />
                </div>
                <h3 className="text-3xl font-black font-orbitron text-white uppercase tracking-tighter">Transmission Received</h3>
                <p className="text-gray-400 max-w-xs mx-auto text-lg font-light leading-relaxed">
                    Your booking request for <span className="text-white font-medium">{packageName}</span> has been securely logged. Our team will contact you shortly.
                </p>
                <button
                    onClick={() => setStatus("idle")}
                    className="mt-8 text-blue-400 font-mono text-xs uppercase tracking-[0.3em] hover:text-white transition-colors"
                >
                    [ Send Another Response ]
                </button>
            </motion.div>
        );
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 relative group">
            {/* Form Background Accent */}
            <div className="absolute -inset-4 bg-blue-500/5 rounded-[3rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
                <div className="space-y-2">
                    <label className="text-[10px] font-mono text-blue-500/60 uppercase tracking-[0.4em] ml-2 flex items-center gap-1">
                        PilotName <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">
                            <User size={18} />
                        </div>
                        <input
                            {...register("name", { required: true })}
                            className={`w-full bg-black/40 border ${errors.name ? 'border-red-500/50' : 'border-white/5'} rounded-2xl py-4 pl-12 pr-4 text-white placeholder:text-gray-600 focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/20 transition-all outline-none backdrop-blur-xl`}
                            placeholder="Your Full Name"
                        />
                    </div>
                </div>

                <div className="space-y-2">
                    <label className="text-[10px] font-mono text-blue-500/60 uppercase tracking-[0.4em] ml-2 flex items-center gap-1">
                        SecureEmail <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">
                            <Mail size={18} />
                        </div>
                        <input
                            {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
                            className={`w-full bg-black/40 border ${errors.email ? 'border-red-500/50' : 'border-white/5'} rounded-2xl py-4 pl-12 pr-4 text-white placeholder:text-gray-600 focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/20 transition-all outline-none backdrop-blur-xl`}
                            placeholder="your@email.com"
                        />
                    </div>
                </div>

                <div className="space-y-2">
                    <label className="text-[10px] font-mono text-blue-500/60 uppercase tracking-[0.4em] ml-2 flex items-center gap-1">
                        PhoneContact <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">
                            <Phone size={18} />
                        </div>
                        <input
                            {...register("phone", { required: true })}
                            className={`w-full bg-black/40 border ${errors.phone ? 'border-red-500/50' : 'border-white/5'} rounded-2xl py-4 pl-12 pr-4 text-white placeholder:text-gray-600 focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/20 transition-all outline-none backdrop-blur-xl`}
                            placeholder="+61 XXX XXX XXX"
                        />
                    </div>
                </div>

                <div className="space-y-2">
                    <label className="text-[10px] font-mono text-blue-500/60 uppercase tracking-[0.4em] ml-2 flex items-center gap-1">
                        VehicleModel <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">
                            <Car size={18} />
                        </div>
                        <input
                            {...register("vehicleModel", { required: true })}
                            className={`w-full bg-black/40 border ${errors.vehicleModel ? 'border-red-500/50' : 'border-white/5'} rounded-2xl py-4 pl-12 pr-4 text-white placeholder:text-gray-600 focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/20 transition-all outline-none backdrop-blur-xl`}
                            placeholder="e.g. BMW M3 G80"
                        />
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
                <div className="space-y-2">
                    <label className="text-[10px] font-mono text-blue-500/60 uppercase tracking-[0.4em] ml-2 flex items-center gap-1">
                        TargetDate <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">
                            <Calendar size={18} />
                        </div>
                        <input
                            type="date"
                            min={minDate}
                            onClick={(e) => e.currentTarget.showPicker?.()}
                            {...register("preferredDate", {
                                required: true,
                                validate: (value) => value >= minDate || "Booking must be at least 48 hours in advance"
                            })}
                            style={{ colorScheme: 'dark' }}
                            className={`w-full bg-black/40 border ${errors.preferredDate ? 'border-red-500/50' : 'border-white/5'} rounded-2xl py-4 pl-12 pr-6 text-white placeholder:text-gray-600 focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/20 transition-all outline-none backdrop-blur-xl cursor-pointer`}
                        />
                    </div>
                    {errors.preferredDate && <p className="text-red-500/60 text-[8px] uppercase tracking-widest ml-2">min_48h_required</p>}
                </div>

                <div className="space-y-2">
                    <label className="text-[10px] font-mono text-blue-500/60 uppercase tracking-[0.4em] ml-2 flex items-center gap-1">
                        TargetTime <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">
                            <Clock size={18} />
                        </div>
                        <select
                            {...register("preferredTime", { required: true })}
                            className={`w-full bg-black/40 border ${errors.preferredTime ? 'border-red-500/50' : 'border-white/5'} rounded-2xl py-4 pl-12 pr-4 text-white appearance-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/20 transition-all outline-none backdrop-blur-xl cursor-pointer`}
                        >
                            <option value="" className="bg-neutral-900 text-gray-500">Select Slot</option>
                            <option value="08:00 AM" className="bg-neutral-900">08:00 AM</option>
                            <option value="10:00 AM" className="bg-neutral-900">10:00 AM</option>
                            <option value="12:00 PM" className="bg-neutral-900">12:00 PM</option>
                            <option value="02:00 PM" className="bg-neutral-900">02:00 PM</option>
                            <option value="04:00 PM" className="bg-neutral-900">04:00 PM</option>
                        </select>
                    </div>
                </div>
            </div>

            <div className="space-y-2 relative z-10">
                <label className="text-[10px] font-mono text-blue-500/60 uppercase tracking-[0.4em] ml-2">AdditionalIntel</label>
                <div className="relative">
                    <div className="absolute left-4 top-4 text-gray-500">
                        <MessageSquare size={18} />
                    </div>
                    <textarea
                        {...register("notes")}
                        rows={4}
                        className="w-full bg-black/40 border border-white/5 rounded-2xl py-4 pl-12 pr-4 text-white placeholder:text-gray-600 focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/20 transition-all outline-none backdrop-blur-xl resize-none"
                        placeholder="Any specific requests or concerns?"
                    />
                </div>
            </div>

            <div className="relative z-10 pt-4">
                <button
                    disabled={status === "loading"}
                    className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-black font-orbitron py-5 rounded-2xl uppercase tracking-[0.3em] transition-all flex items-center justify-center gap-4 hover:shadow-[0_10px_40px_rgba(37,99,235,0.4)] disabled:opacity-50 group/btn"
                >
                    {status === "loading" ? (
                        <Loader2 className="w-6 h-6 animate-spin" />
                    ) : (
                        <>
                            Initiate Booking
                            <Send className="w-5 h-5 group-hover:translate-x-2 group-hover:-translate-y-1 transition-transform" />
                        </>
                    )}
                </button>
            </div>

            {status === "error" && (
                <p className="text-red-400 text-center text-xs font-mono uppercase tracking-widest mt-4">
                    Transmission Fault. Please verify your connection and try again.
                </p>
            )}
        </form>
    );
}
