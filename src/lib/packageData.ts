import { Zap, Award, Star } from "lucide-react";

export const packagesData = [
    {
        slug: "basic-package",
        name: "Basic Package",
        price: "150",
        description: "Essential maintenance for a clean and fresh vehicle look.",
        tag: "ESSENTIAL",
        accent: "blue",
        icon: Zap,
        heroImage: "https://images.unsplash.com/photo-1620706122118-206fc3c15562?q=80&w=2000&auto=format&fit=crop",
        features: [
            "Hand wash & dry",
            "Clean wheels & tires + Tire shine",
            "Vacuum seats, mats, and carpets",
            "Wipe down dash, doors, and console",
            "Clean interior & exterior windows",
            "Light spray wax finish"
        ],
        notIncluded: [
            "Clay bar treatment",
            "Iron decontamination",
            "Machine polishing",
            "Stain removal",
            "Engine bay cleaning"
        ],
        details: "Perfect for vehicles that are well-maintained and just need a professional touch-up. This package focuses on the visible areas to restore that 'just-washed' glow without the deep restoration costs.",
        time: "1.5 - 2 Hours",
        recommended: false
    },
    {
        slug: "standard-package",
        name: "Standard Package",
        price: "300",
        description: "Deep decontamination and interior restoration for daily drivers.",
        tag: "POPULAR",
        accent: "cyan",
        icon: Award,
        heroImage: "https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?q=80&w=2000&auto=format&fit=crop",
        features: [
            "Clay Bar Treatment (Paint Decontamination)",
            "Shampoo Carpets And Mats",
            "Clean & Condition Seats (Leather Or Fabric)",
            "Clean Vents, Cup Holders & Trim",
            "Gloss Sealant For Enhanced Shine",
            "Iron Decontamination",
            "Interior Steam Sanitization"
        ],
        notIncluded: [
            "Multi-stage machine polishing",
            "Ceramic coating",
            "Heavy stain removal",
            "Paint protection film"
        ],
        details: "Our most popular choice. Designed for daily drivers that need a serious reset. We remove embedded contaminants from your paint and perform a deep interior sanitization to bring back the comfort and shine.",
        time: "3 - 4 Hours",
        recommended: true
    },
    {
        slug: "premium-package",
        name: "Premium Package",
        price: "400",
        description: "The ultimate rejuvenation with machine polishing and long-term protection.",
        tag: "ELITE",
        accent: "blue",
        icon: Star,
        heroImage: "https://images.unsplash.com/photo-1618346136472-090de27fe30b?q=80&w=2000&auto=format&fit=crop",
        features: [
            "Machine polish to reduce swirls/scratches",
            "2-3 months ceramic sealant",
            "Steam clean interior surface",
            "Stain and odor treatment",
            "Trim & plastic restoration",
            "Engine bay basic wipe down",
            "Upholstery extraction"
        ],
        notIncluded: [
            "5-year+ ceramic coating",
            "Vinyl wrapping",
            "Mechanical repairs"
        ],
        details: "The gold standard of detailing. We combine scientific decontamination with artistic machine polishing to remove minor swirls and deliver a mirror-like finish. The interior receives a total overhaul including extraction and steam cleaning.",
        time: "5 - 7 Hours",
        recommended: false
    }
];
