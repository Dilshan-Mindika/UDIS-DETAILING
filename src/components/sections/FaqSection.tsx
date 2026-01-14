"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, HelpCircle } from "lucide-react";

export function FaqSection() {
    const [activeIndex, setActiveIndex] = useState<number | null>(0);

    const faqs = [
        {
            question: "How often should I get my car detailed?",
            answer: "We recommend a full detail every 4-6 months to maintain your vehicle's condition. However, for daily drivers exposed to harsh elements, a maintenance wash every 2 weeks and a mini-detail every 3 months ensures the paintwork remains protected and the interior stays pristine."
        },
        {
            question: "Do you use eco-friendly products?",
            answer: "Yes, we are committed to sustainability. We strictly use pH-neutral, biodegradable soaps and eco-friendly cleaning agents that are tough on dirt but safe for your vehicle's finish and the environment. Our water reclamation systems also ensure zero runoff."
        },
        {
            question: "What is the difference between a wash and a detail?",
            answer: "A standard wash removes surface dirt, while detailing is a deep-cleaning process. Detailing involves paint correction, clay bar treatment, interior steam cleaning, and applying long-term protection like ceramic coatings to restore the vehicle to a like-new condition."
        },
        {
            question: "How long does a typical service take?",
            answer: "A standard detail typically takes 3-5 hours. Premium services like Paint Correction and Ceramic Coating can take 1-2 days to ensure perfection. We prioritize quality over speed to guarantee the best results."
        }
    ];

    return (
        <section className="py-24 bg-black relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-[100px] pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-cyan-900/10 rounded-full blur-[100px] pointer-events-none"></div>

            <div className="container mx-auto px-4 z-10 relative">
                <div className="flex flex-col lg:flex-row gap-16">
                    {/* Header Details */}
                    <div className="lg:w-1/3">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <div className="flex items-center gap-2 mb-4">
                                <HelpCircle className="text-blue-500 w-5 h-5" />
                                <span className="text-blue-500 font-bold tracking-widest text-sm uppercase">Knowledge Base</span>
                            </div>
                            <h2 className="text-4xl md:text-5xl font-black font-orbitron text-white mb-6 leading-tight">
                                EVERYTHING YOU <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">NEED TO KNOW</span>
                            </h2>
                            <p className="text-gray-400 text-lg leading-relaxed mb-8">
                                At UDI’S DETAILING, we believe in transparency and clarity. From the types of services offered to what you can expect during your appointment, we provide all the information you need for a seamless, satisfying experience.
                            </p>

                            <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-900/20 to-transparent border border-blue-500/20 backdrop-blur-sm">
                                <h4 className="text-white font-bold mb-2">Still have questions?</h4>
                                <p className="text-gray-400 text-sm mb-4">Can't find the answer you're looking for? Please seek our support.</p>
                                <button className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm transition-colors">
                                    Contact Support
                                </button>
                            </div>
                        </motion.div>
                    </div>

                    {/* Accordion */}
                    <div className="lg:w-2/3">
                        <div className="space-y-4">
                            {faqs.map((faq, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: idx * 0.1 }}
                                    viewport={{ once: true }}
                                    className={`rounded-2xl border transition-all duration-300 overflow-hidden ${activeIndex === idx
                                            ? "bg-white/5 border-blue-500/50 shadow-[0_0_30px_rgba(59,130,246,0.1)]"
                                            : "bg-neutral-900/30 border-white/5 hover:border-white/10"
                                        }`}
                                >
                                    <button
                                        onClick={() => setActiveIndex(activeIndex === idx ? null : idx)}
                                        className="w-full flex items-center justify-between p-6 text-left"
                                    >
                                        <span className={`text-lg font-bold font-orbitron transition-colors ${activeIndex === idx ? "text-white" : "text-gray-300"
                                            }`}>
                                            {faq.question}
                                        </span>
                                        <div className={`p-2 rounded-full border transition-all duration-300 ${activeIndex === idx
                                                ? "bg-blue-500 border-blue-500 text-white rotate-180"
                                                : "border-white/10 text-gray-400"
                                            }`}>
                                            {activeIndex === idx ? <Minus size={16} /> : <Plus size={16} />}
                                        </div>
                                    </button>

                                    <AnimatePresence>
                                        {activeIndex === idx && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: "auto", opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.3 }}
                                            >
                                                <div className="px-6 pb-6 pt-0">
                                                    <div className="h-px w-full bg-white/5 mb-4"></div>
                                                    <p className="text-gray-400 leading-relaxed">
                                                        {faq.answer}
                                                    </p>
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
