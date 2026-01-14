"use client";

import { ScrollReveal } from "@/components/ui/ScrollReveal";
import {
    Star, Quote, CheckCircle2, Info, ChevronRight,
    Sparkles, Camera, Users, MessageSquare,
    ArrowRight, MapPin, Award, Zap, ShieldCheck,
    Clock, Droplets, Paintbrush, Disc, Car,
    Search, Filter, PlayCircle
} from "lucide-react";
import Link from "next/link";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useState } from "react";

// Project Data - 21 Items
const projects = [
    {
        title: "Pre-Sale Detail Completed",
        desc: "Boosted resale value with a full pre-sale detailing - this trade-in is now showroom ready.",
        image: "/images/projects/pre_sale_detail_1768429697460.png",
        tag: "PRE_SALE_PROTOCOL",
        category: "Full Detailing"
    },
    {
        title: "2021 Toyota Prado Transformation",
        desc: "Full paint correction + ceramic coating done right for this 2.8L turbo beauty in Melbourne.",
        image: "/images/projects/prado_transformation_detailing_1768429715065.png",
        tag: "ELITE_PROTECTION",
        category: "Paint Correction"
    },
    {
        title: "Showroom Shine Unlocked",
        desc: "Paint correction Full detailing Showroom shine unlocked! Pre-sale or trade prep packages!",
        image: "/images/projects/showroom_shine_detailing_1768429730062.png",
        tag: "SHOWROOM_READY",
        category: "Restoration"
    },
    {
        title: "RAV4 Perfection",
        desc: "Boost resale value and impress buyers with expert RAV4 detailing - perfect for dealers and individual owners.",
        image: "/images/projects/rav4_perfection_detailing_1768429746626.png",
        tag: "SUV_SPECIALIST",
        category: "Resale Prep"
    },
    {
        title: "From Fur to Flawless",
        desc: "Dog hair and tough stains? Watch as we deep clean this carpet back to life—it's like magic inside!",
        image: "/images/projects/interior_detailing_magic_1768429767119.png",
        tag: "INTERIOR_EXTRACTION",
        category: "Interior"
    },
    {
        title: "Nissan X: Total Transformation",
        desc: "One session. Total transformation. Swipe for ASMR-level deep clean satisfaction.",
        image: "/images/projects/nissan_x_transformation_1768429788320.png",
        tag: "DEEP_CLEAN_V2",
        category: "Transformation"
    },
    {
        title: "RAV4 Premium Protection",
        desc: "Ceramic coating, interior protection, wheel coating, and glass treatment - this RAV4 got the full premium package.",
        image: "/images/projects/rav4_full_protection_1768429807257.png",
        tag: "FULL_ARMOUR_S1",
        category: "Protection"
    },
    {
        title: "Factory Wrapped Pathfinder",
        desc: "Brand-New Nissan Pathfinder, Factory Wrapped. Ultimate protection straight from the start.",
        image: "/images/projects/pathfinder_factory_wrap_1768429824417.png",
        tag: "NEW_TECH_DELIVERY",
        category: "Brand New"
    },
    {
        title: "Hyundai i30 Glow-Up",
        desc: "Cut, polish, and a protective coat - this i30 went from dull to dazzling. Check out the transformation!",
        image: "/images/projects/hyundai_i30_glowup_1768429847275.png",
        tag: "GLOSS_REINFORCEMENT",
        category: "Correction"
    },
    {
        title: "Hyundai i30 Rebirth",
        desc: "Witness the glow-up! This i30 looks brand new - ready to give your ride the ultimate makeover?",
        image: "/images/projects/hyundai_i30_glowup_1768429847275.png",
        tag: "ESTHETIC_SYNC",
        category: "Makeover"
    },
    {
        title: "Axio Hybrid Exterior",
        desc: "Exterior Detailing - Just AUD 99! Premium shine, unbeatable value - book your transformation today!",
        image: "/images/projects/toyota_axio_exterior_1768429864662.png",
        tag: "EXTERIOR_FOCUS",
        category: "Essential"
    },
    {
        title: "Incredible Results Protocol",
        desc: "Check out the stunning outcome - full transformation video dropping soon. Stay tuned!",
        image: "/images/projects/ceramic_detailing_hydrophobic_effect_1768429968011.png",
        tag: "MASTER_FINISH",
        category: "Transformation"
    },
    {
        title: "2021 Toyota Kluger Reset",
        desc: "Watch us bring out the shine and make every detail look brand new! Absolute perfection achieved.",
        image: "/images/projects/toyota_kluger_refine_1768429879431.png",
        tag: "KLUGER_REFINE",
        category: "Polishing"
    },
    {
        title: "Mitsubishi Eclipse Magic",
        desc: "Full detailing and mobile ceramic coating - watch the magic happen right at your doorstep.",
        image: "/images/projects/mitsubishi_eclipse_detailing_1768429893904.png",
        tag: "MOBILE_CERAMIC",
        category: "Mobile Elite"
    },
    {
        title: "True Attention to Detail",
        desc: "More Than Just a Shine. We care for every inch - not just panels. Experience the difference.",
        image: "/images/projects/pre_sale_detail_1768429697460.png",
        tag: "PRECISION_CARE",
        category: "Detailing"
    },
    {
        title: "VIP Wheel Restoration",
        desc: "RAV4 Wheels Get VIP Shine. Watch us restore that stunning shine with technical wheel treatments!",
        image: "/images/projects/vip_wheel_detailing_rav4_1768429920045.png",
        tag: "WHEEL_MASTERY",
        category: "Wheel Care"
    },
    {
        title: "Essential Mobile Detail",
        desc: "Basic Detail - Only AUD 150! Vacuum, clean, wash, and shine your car with ease. Elite mobile service.",
        image: "/images/projects/mobile_detailing_van_pro_1768429953238.png",
        tag: "BASIC_MOBILE_SYNC",
        category: "Essential"
    },
    {
        title: "Dealership Excellence",
        desc: "Pre-Sale Detail for Dealerships. Expert detailing to make every vehicle showroom-ready.",
        image: "/images/projects/commercial_detailing_dealership_projects_1768429935424.png",
        tag: "DEALER_PARTNER",
        category: "Commercial"
    },
    {
        title: "Monthly Care Subscription",
        desc: "Save 15% with Monthly Subscription! Save time and money with our convenient plan.",
        image: "/images/projects/mobile_detailing_van_pro_1768429953238.png",
        tag: "LOYALTY_MATRIX",
        category: "Subscription"
    },
    {
        title: "Premium Mobile Detailing",
        desc: "Ditch Cheap Washes - Go Premium! Get expert mobile detailing right at your door. Save your time.",
        image: "/images/projects/mobile_detailing_van_pro_1768429953238.png",
        tag: "PREMIUM_MOBILE",
        category: "Correction"
    },
    {
        title: "Expert Mobile Presence",
        desc: "Say Goodbye to Quick Washes! Get expert mobile detailing at your doorstep. Professional quality.",
        image: "/images/projects/mobile_detailing_van_pro_1768429953238.png",
        tag: "ELITE_CONVENIENCE",
        category: "Detailing"
    }
];

// Testimonial Data - 17 Items
const reviews = [
    { name: "Jasmine R.", role: "Client", text: "Amazing work! I got the premium package and my car looks brand new. They even came to my job—super convenient!", rating: 5, category: "Premium Package" },
    { name: "Brent T.", role: "Client", text: "Udi’s did a ceramic coating on my Mustang and the finish is unbelievable. Water just rolls right off now.", rating: 5, category: "Ceramic Coating" },
    { name: "Natalie M.", role: "Client", text: "I had a few scratches and paint chips that were bugging me. They handled the touch-up perfectly—you can’t even tell!", rating: 5, category: "Paint Touch-up" },
    { name: "Kyle H.", role: "Client", text: "Honestly blown away. The team removed a dent without touching the paint. True pros at PDR!", rating: 5, category: "PDR Service" },
    { name: "Renee D.", role: "Client", text: "Best detail I’ve ever had. I chose the standard package and added headlight restoration—totally worth it.", rating: 5, category: "Standard Package" },
    { name: "Nina E.", role: "Client", text: "Their team is passionate, skilled, and respectful of your time. It’s rare to find this level of detail and care.", rating: 5, category: "General Detailing" },
    { name: "Ricky T.", role: "Client", text: "The swirl marks on my hood are gone thanks to their polishing service. My paint finally pops again!", rating: 5, category: "Polishing" },
    { name: "Chloe P.", role: "Client", text: "I can’t believe how smooth the ceramic coating made my paint. Feels like glass. Super hydrophobic too!", rating: 5, category: "Ceramic Coating" },
    { name: "Stephanie M.", role: "Client", text: "The 30-day guarantee gave me confidence to book. They delivered 100% on quality and service.", rating: 5, category: "Service Guarantee" },
    { name: "Jeremiah B.", role: "Client", text: "Udi’s wrapped my chrome trim in gloss black and now my car looks like a different beast. Love it!", rating: 5, category: "Chrome Delete" },
    { name: "Laura S.", role: "Client", text: "I opted for the premium package with an engine bay detail—my car’s never looked this clean, inside or out!", rating: 5, category: "Full Restoration" },
    { name: "Brian F.", role: "Client", text: "Had coffee stains on my cloth seats that I thought would never come out—Udi’s got them out completely.", rating: 5, category: "Interior extraction" },
    { name: "Ahmed K.", role: "Client", text: "I went with a full exterior detail + ceramic coating, and now my car turns heads everywhere I go.", rating: 5, category: "Full Protection" },
    { name: "Lina G.", role: "Client", text: "Booking was easy, they came on time, and the car looked incredible after. 10/10 experience!", rating: 5, category: "Mobile Detailing" },
    { name: "David L.", role: "Client", text: "They installed PPF on my front bumper and mirrors—no bubbles, perfect fit. Great investment for my Tesla.", rating: 5, category: "PPF Installation" },
    { name: "Samantha W.", role: "Client", text: "The attention to detail is insane. I did the basic package, and even that exceeded my expectations.", rating: 5, category: "Basic Package" },
    { name: "Marcus V.", role: "Client", text: "Udi's wrapped my car in satin black vinyl, and it turned out better than I imagined. Flawless work!", rating: 5, category: "Satin Wrap" }
];

// FAQ Data
const faqs = [
    {
        q: "How often should I get my car detailed?",
        a: "We recommend a full detail every 4-6 months to maintain optimal paint health and interior hygiene. Regular maintenance washes in between are essential for preserving the protective layers."
    },
    {
        q: "Do you use eco-friendly products?",
        a: "Yes, we utilize a range of biodegradable and pH-balanced cleaners that are tough on grime but safe for the environment and your vehicle's sensitive surfaces."
    },
    {
        q: "What is paint correction?",
        a: "Paint correction is a mechanical process where we use machine polishers and specialized compounds to remove surface imperfections like swirl marks, scratches, and oxidation, restoring a true mirror finish."
    },
    {
        q: "Do you offer mobile services?",
        a: "Absolutely! We bring the elite studio experience to your doorstep, equipped with our own power and water if necessary, covering the greater Melbourne area."
    }
];

function ProjectCard({ project, index }: { project: any; index: number }) {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["5deg", "-5deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-5deg", "5deg"]);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        x.set(e.clientX / rect.width - rect.left / rect.width - 0.5);
        y.set(e.clientY / rect.height - rect.top / rect.height - 0.5);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <ScrollReveal delay={index * 0.05}>
            <motion.div
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
                className="group relative h-[450px] rounded-[2.5rem] overflow-hidden bg-neutral-900/40 border border-white/5 hover:border-blue-500/30 transition-all duration-700 shadow-2xl"
            >
                <div className="absolute inset-0 transition-transform duration-1000 group-hover:scale-110">
                    <img src={project.image} alt={project.title} className="w-full h-full object-cover grayscale-[0.3] group-hover:grayscale-0 transition-all duration-1000" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                </div>

                <div className="absolute top-6 left-6 flex gap-2">
                    <span className="px-3 py-1 rounded-full bg-blue-500/20 border border-blue-500/30 text-blue-400 text-[8px] font-mono tracking-widest uppercase backdrop-blur-md">
                        {project.tag}
                    </span>
                </div>

                <div className="absolute inset-0 z-10 flex flex-col justify-end p-8 transform-gpu group-hover:translate-z-10">
                    <div className="space-y-3">
                        <span className="text-blue-500 font-mono text-[9px] uppercase tracking-[0.4em] font-bold">{project.category}</span>
                        <h3 className="text-2xl font-black font-orbitron text-white uppercase tracking-tight group-hover:text-blue-400 transition-colors leading-[1.1]">{project.title}</h3>
                        <p className="text-gray-400 text-sm font-light leading-relaxed line-clamp-2 opacity-0 group-hover:opacity-100 transition-all duration-500 -translate-y-2 group-hover:translate-y-0">
                            {project.desc}
                        </p>
                    </div>
                </div>

                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" style={{ backgroundImage: 'radial-gradient(400px circle at var(--mouse-x) var(--mouse-y), rgba(59,130,246,0.1), transparent 80%)' }}></div>

                {/* Tech Bracket */}
                <div className="absolute bottom-6 right-6 w-8 h-8 opacity-20 group-hover:opacity-100 transition-opacity">
                    <div className="absolute bottom-0 right-0 w-2 h-full bg-blue-500" />
                    <div className="absolute bottom-0 right-0 h-2 w-full bg-blue-500" />
                </div>
            </motion.div>
        </ScrollReveal>
    );
}

export default function ProjectsPage() {
    return (
        <div className="min-h-screen bg-black text-white selection:bg-blue-500/30">
            {/* Hero Section */}
            <section className="relative pt-40 pb-32 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1552933529-e359b24772bf?q=80&w=2000"
                        alt="Detaling Excellence"
                        className="w-full h-full object-cover opacity-20 grayscale"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black" />
                </div>

                <div className="container mx-auto px-4 relative z-10">
                    <ScrollReveal>
                        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="inline-flex items-center gap-3 bg-blue-500/10 border border-blue-500/20 px-6 py-2 rounded-full mb-8 backdrop-blur-xl"
                            >
                                <Camera size={14} className="text-blue-500" />
                                <span className="text-[10px] font-mono text-blue-400 tracking-[0.4em] uppercase font-black">Archive.Showcase_v2.5</span>
                            </motion.div>

                            <h1 className="text-6xl md:text-9xl font-black font-orbitron text-white uppercase tracking-tighter leading-[0.8] mb-10">
                                OUR <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-cyan-400 to-blue-400 italic">PROJECTS</span>
                            </h1>

                            <p className="text-xl md:text-2xl text-gray-400 font-light max-w-2xl leading-relaxed italic">
                                Witness the science of restoration. Discover our showcased portfolio of <span className="text-white font-medium underline decoration-blue-500/50 underline-offset-8">Auto Detailing Excellence</span>.
                            </p>
                        </div>
                    </ScrollReveal>
                </div>

                {/* Vertical Scanner Line */}
                <div className="absolute inset-y-0 right-1/4 w-px bg-gradient-to-b from-transparent via-blue-500/20 to-transparent hidden lg:block" />
            </section>

            {/* Project Grid */}
            <section className="py-24 relative">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.map((project, idx) => (
                            <ProjectCard key={idx} project={project} index={idx} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="py-32 relative overflow-hidden bg-neutral-900/10">
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

                <div className="container mx-auto px-4">
                    <ScrollReveal>
                        <div className="flex flex-col items-center text-center mb-24 max-w-4xl mx-auto">
                            <span className="text-blue-500 font-mono text-[10px] tracking-[0.5em] uppercase mb-6 flex items-center gap-4">
                                <div className="w-12 h-px bg-blue-500/30" />
                                FEATURED_CLIENT_REVIEWS
                                <div className="w-12 h-px bg-blue-500/30" />
                            </span>
                            <h2 className="text-5xl md:text-7xl font-black font-orbitron text-white uppercase tracking-tighter leading-none mb-8">
                                WALL OF <span className="text-blue-500">TRUST</span>
                            </h2>
                            <p className="text-gray-400 text-xl font-light italic">Discover and know what our elite clientele has to say about the Udi's Detailing experience.</p>
                        </div>
                    </ScrollReveal>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {reviews.map((review, idx) => (
                            <ScrollReveal key={idx} delay={idx * 0.05}>
                                <div className="p-10 bg-neutral-900/60 border border-white/5 rounded-[3rem] backdrop-blur-2xl group hover:border-blue-500/30 transition-all duration-700 relative overflow-hidden flex flex-col h-full">
                                    <div className="absolute -right-4 -top-4 text-7xl text-white/[0.02] font-black group-hover:text-blue-500/[0.05] transition-colors"><Quote /></div>

                                    <div className="flex gap-1 mb-8">
                                        {[...Array(review.rating)].map((_, i) => (
                                            <Star key={i} size={14} className="fill-blue-500 text-blue-500 group-hover:scale-110 transition-transform" />
                                        ))}
                                    </div>

                                    <p className="text-gray-300 text-lg font-light leading-relaxed mb-10 flex-1 italic group-hover:text-white transition-colors">
                                        "{review.text}"
                                    </p>

                                    <div className="flex items-center gap-6 pt-8 border-t border-white/5">
                                        <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center text-white font-black font-orbitron text-lg shadow-lg">
                                            {review.name.charAt(0)}
                                        </div>
                                        <div>
                                            <h4 className="text-white font-bold font-orbitron text-sm uppercase tracking-widest">{review.name}</h4>
                                            <span className="text-[10px] font-mono text-blue-500/60 uppercase tracking-widest leading-none">{review.category}</span>
                                        </div>
                                    </div>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* Knowledge FAQ Section */}
            <section className="py-32 relative overflow-hidden font-sans">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                        <ScrollReveal>
                            <div className="space-y-10">
                                <div>
                                    <span className="text-blue-500 font-mono text-xs tracking-[0.5em] uppercase mb-4 block">Intelligence_Briefing</span>
                                    <h2 className="text-5xl md:text-7xl font-black font-orbitron text-white uppercase tracking-tighter leading-none mb-8">
                                        KNOWLEDGE <span className="text-blue-500">FAQ</span>
                                    </h2>
                                    <div className="h-1.5 w-24 bg-blue-600 rounded-full shadow-glow mb-10" />
                                </div>

                                <p className="text-gray-400 text-xl font-light leading-relaxed italic border-l-4 border-blue-500/20 pl-8">
                                    At <span className="text-white font-medium">UDI’S DETAILING</span>, we believe in transparency and clarity. From technical protocols to environmental commitments, we provide all the intel you need for a seamless experience.
                                </p>

                                <div className="grid grid-cols-2 gap-8 pt-8">
                                    <div className="p-6 bg-blue-500/5 rounded-3xl border border-blue-500/10">
                                        <ShieldCheck className="text-blue-500 mb-4" size={32} />
                                        <h5 className="text-white font-bold mb-2">Elite Standards</h5>
                                        <p className="text-gray-500 text-sm italic">Maximum tier quality in every session.</p>
                                    </div>
                                    <div className="p-6 bg-cyan-500/5 rounded-3xl border border-cyan-500/10">
                                        <Sparkles className="text-cyan-400 mb-4" size={32} />
                                        <h5 className="text-white font-bold mb-2">Expert Hand</h5>
                                        <p className="text-gray-500 text-sm italic">Precision crafted by master detailers.</p>
                                    </div>
                                </div>
                            </div>
                        </ScrollReveal>

                        <div className="space-y-6">
                            {faqs.map((faq, idx) => (
                                <ScrollReveal key={idx} delay={idx * 0.1}>
                                    <div className="group bg-neutral-900/40 border border-white/5 p-8 rounded-[2.5rem] hover:border-blue-500/30 transition-all duration-500">
                                        <div className="flex items-center gap-6 mb-4">
                                            <div className="w-8 h-8 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-500 shrink-0">
                                                <Info size={16} />
                                            </div>
                                            <h4 className="text-xl font-black font-orbitron text-white uppercase tracking-tight group-hover:text-blue-400 transition-colors">{faq.q}</h4>
                                        </div>
                                        <p className="text-gray-500 text-lg font-light leading-relaxed pl-14 group-hover:text-gray-300 transition-colors italic">
                                            {faq.a}
                                        </p>
                                    </div>
                                </ScrollReveal>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-40 relative overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2000"
                        alt="CTA Background"
                        className="w-full h-full object-cover opacity-30 contrast-[1.2] grayscale-[0.5]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/90 to-blue-900/20" />
                </div>

                <div className="container mx-auto px-4 relative z-10 text-center">
                    <ScrollReveal>
                        <div className="max-w-5xl mx-auto bg-neutral-900/70 border border-white/10 rounded-[5rem] p-16 md:p-32 backdrop-blur-[40px] shadow-3xl relative overflow-hidden group">
                            {/* Technical Decorations */}
                            <div className="absolute top-12 left-12 w-16 h-16 border-t-2 border-l-2 border-blue-500 opacity-20 pointer-events-none" />
                            <div className="absolute bottom-12 right-12 w-16 h-16 border-b-2 border-r-2 border-blue-500 opacity-20 pointer-events-none" />

                            <h2 className="text-6xl md:text-9xl font-black font-orbitron text-white mb-10 tracking-tighter uppercase leading-[0.85] group-hover:scale-105 transition-transform duration-700">
                                DISCOVER <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-cyan-400 to-blue-500">EXCELLENCE.</span>
                            </h2>

                            <p className="text-2xl md:text-3xl text-gray-400 mb-16 max-w-3xl mx-auto font-light leading-relaxed italic border-l-4 border-blue-500/20 pl-8 inline-block text-left">
                                Experience professional detailing that extends your car’s life and value. <span className="text-white font-medium italic underline decoration-blue-500/30 underline-offset-8">Consistent care protects your vehicle</span> from the edge of time.
                            </p>

                            <div className="relative inline-block mt-8">
                                <div className="absolute -inset-8 bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 rounded-full blur-[40px] opacity-0 group-hover:opacity-40 transition-opacity duration-700"></div>
                                <Link
                                    href="/appointment"
                                    className="relative flex items-center gap-6 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-black py-8 px-20 rounded-full shadow-[0_20px_60px_rgba(29,78,216,0.5)] transition-all transform hover:scale-110 hover:-translate-y-2 text-2xl uppercase tracking-[0.3em] font-orbitron group/link"
                                >
                                    Initiate Session
                                    <ArrowRight className="w-8 h-8 group-hover/link:translate-x-3 transition-transform" />
                                </Link>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </section>
        </div>
    );
}

