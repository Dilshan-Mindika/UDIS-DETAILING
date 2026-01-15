import {
    Zap, Award, Star,
    ShieldPlus, Disc, ShieldCheck, Layers,
    Lightbulb, Hammer, Paintbrush,
    Settings, Trash2, PawPrint, AirVent
} from "lucide-react";

export const packagesData = [
    {
        isMainPackage: true,
        slug: "basic-package",
        name: "Basic Package",
        price: "150",
        description: "Essential maintenance for a clean and fresh vehicle look.",
        tag: "ESSENTIAL",
        accent: "blue",
        icon: Zap,
        heroImage: "https://images.unsplash.com/photo-1552933529-e359b24772bf?q=80&w=2000&auto=format&fit=crop",
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
        isMainPackage: true,
        slug: "standard-package",
        name: "Standard Package",
        price: "300",
        description: "Deep decontamination and interior restoration for daily drivers.",
        tag: "POPULAR",
        accent: "cyan",
        icon: Award,
        heroImage: "https://images.unsplash.com/photo-1494905998402-395d579af36f?q=80&w=2000&auto=format&fit=crop",
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
        isMainPackage: true,
        slug: "premium-package",
        name: "Premium Package",
        price: "400",
        description: "The ultimate rejuvenation with machine polishing and long-term protection.",
        tag: "ELITE",
        accent: "blue",
        icon: Star,
        heroImage: "https://images.unsplash.com/photo-1620706122118-206fc3c15562?q=80&w=2000&auto=format&fit=crop",
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
    },
    {
        isMainPackage: false,
        slug: "ceramic-coating",
        name: "Ceramic Coating",
        price: "900",
        description: "The ultimate liquid armor for your vehicle's paintwork, offering years of protection.",
        tag: "PROTECTION",
        accent: "cyan",
        icon: ShieldPlus,
        heroImage: "https://images.unsplash.com/photo-1601362840469-51e4d8d58785?q=80&w=2000&auto=format&fit=crop",
        features: [
            "Multi-stage paint correction",
            "9H Hardness Ceramic Layer",
            "Hydrophobic water beading",
            "UV & Oxidation resistance",
            "Deep gloss enhancement",
            "Easy maintenance"
        ],
        notIncluded: [
            "Interior detailing",
            "Engine bay cleaning",
            "Glass coating (optional add-on)"
        ],
        details: "Ceramic coating is a semi-permanent bond that protects your paint from environmental damage while making washing effortless. Requires a full paint correction first to ensure a flawless finish.",
        time: "1 - 2 Days",
        recommended: true
    },
    {
        isMainPackage: false,
        slug: "paint-protection-film",
        name: "PPF (Paint Protection Film)",
        price: "200",
        description: "Invisible, self-healing protection against rock chips, scratches, and road debris.",
        tag: "ARMOR",
        accent: "blue",
        icon: ShieldCheck,
        heroImage: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?q=80&w=2000&auto=format&fit=crop",
        features: [
            "Self-healing technology",
            "Impact resistance (Rock Chips)",
            "Stain & chemical resistance",
            "Virtually invisible finish",
            "10-Year Warranty options",
            "Custom cut patterns"
        ],
        notIncluded: [
            "Full vehicle repainting",
            "Dent repair (PDR available)",
            "Ceramic coating on top (optional)"
        ],
        details: "PPF is the only way to physically protect your paint from stone chips and scratches. We use top-tier films that heal themselves with heat and remain optically clear tailored to your specific vehicle panels.",
        time: "1 - 3 Days",
        recommended: false
    },
    {
        isMainPackage: false,
        slug: "vinyl-wrapping",
        name: "Vinyl Wrapping",
        price: "200",
        description: "Completely transform the look of your vehicle with premium color change wraps.",
        tag: "STYLE",
        accent: "cyan",
        icon: Layers,
        heroImage: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?q=80&w=2000&auto=format&fit=crop",
        features: [
            "Full color change",
            "Chrome delete options",
            "Protect original paint",
            "Matte, Satin, Gloss finishes",
            "Custom graphics available",
            "High-quality 3M/Avery films"
        ],
        notIncluded: [
            "Paint correction (recommended)",
            "Door jams (optional)",
            "Rust repair"
        ],
        details: "Change your car's color without repainting. Vinyl wraps offer a temporary yet durable way to customize your vehicle while preserving the factory paint underneath.",
        time: "3 - 5 Days",
        recommended: false
    },
    {
        isMainPackage: false,
        slug: "headlight-restoration",
        name: "Headlight Restoration",
        price: "100",
        description: "Restore clarity and visibility to foggy, oxidized headlights.",
        tag: "SAFETY",
        accent: "blue",
        icon: Lightbulb,
        heroImage: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=2000&auto=format&fit=crop",
        features: [
            "Wet sanding oxidation removal",
            "Machine polishing for clarity",
            "UV Sealant application",
            "Improved night visibility",
            "Enhanced vehicle appearance"
        ],
        notIncluded: [
            "Bulb replacement",
            "Internal condensation repair",
            "Crack repair"
        ],
        details: "Cloudy headlights not only look aged but reduce night visibility. We sand down the oxidation layer and polish the plastic back to crystal clarity, sealing it to prevent yellowing.",
        time: "1 - 2 Hours",
        recommended: false
    },
    {
        isMainPackage: false,
        slug: "engine-bay-detail",
        name: "Engine Bay Detail",
        price: "20",
        description: "Professional degreasing and dressing for a showroom-ready engine.",
        tag: "DETAIL",
        accent: "cyan",
        icon: Settings,
        heroImage: "https://images.unsplash.com/photo-1580273916550-e323be2ebccd?q=80&w=2000&auto=format&fit=crop",
        features: [
            "Safe degreasing wash",
            "Plastic & rubber dressing",
            "Underside hood cleaning",
            "Polishing metal components",
            "Leaves a matte/satin finish"
        ],
        notIncluded: [
            "Mechanical repair or diagnosis",
            "Oil leak fix",
            "Bottomside engine wash"
        ],
        details: "A clean engine bay runs cooler and makes spotting leaks easier. We carefully cover sensitive electronics before degreasing and dressing all plastics for a better-than-new look.",
        time: "1 Hour",
        recommended: false
    },
    {
        isMainPackage: false,
        slug: "interior-rescue",
        name: "Interior Rescue (Odor/Pet Hair)",
        price: "40",
        description: "Specialized treatment for removing stubborn pet hair and neutralizing odors.",
        tag: "HYGIENE",
        accent: "blue",
        icon: PawPrint,
        heroImage: "https://images.unsplash.com/photo-1563720223185-11003d516935?q=80&w=2000&auto=format&fit=crop",
        features: [
            "Deep extraction vacuuming",
            "Pet hair removal tools",
            "Ozone generator treatment",
            "Steam sanitation",
            "Enzyme cleaner application"
        ],
        notIncluded: [
            "Headliner replacement",
            "Soiled seat belt replacement",
            "Worn leather repair"
        ],
        details: "Pet hair and odors can be nearly impossible to remove with standard vacuuming. We use specialized rubber brushes and ozone treatments to physically remove hair and chemically neutralize biological odors.",
        time: "2 - 3 Hours",
        recommended: false
    }
];
