import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Check } from "lucide-react";

const packages = [
    {
        name: "Silver",
        price: "$150",
        description: "Essential care for your vehicle.",
        features: ["Exterior Wash & Wax", "Interior Vacuum", "Tire Shine", "Window Cleaning"],
        recommended: false,
    },
    {
        name: "Gold",
        price: "$300",
        description: "Complete restoration and protection.",
        features: [
            "Everything in Silver",
            "Clay Bar Treatment",
            "Interior Deep Clean",
            "Leather Conditioning",
            "Engine Bay Detail",
        ],
        recommended: true,
    },
    {
        name: "Platinum",
        price: "$600+",
        description: "The ultimate showroom finish.",
        features: [
            "Everything in Gold",
            "Paint Correction (1-Step)",
            "Ceramic Sealant (6 Month)",
            "Odor Removal",
            "Headlight Restoration",
        ],
        recommended: false,
    },
];

export default function PackagesPage() {
    return (
        <div className="py-24 container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-20">
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Detaling Packages</h1>
                <p className="text-xl text-gray-400">
                    Transparent pricing for every level of care. Choose the package that suits your needs.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {packages.map((pkg, idx) => (
                    <div
                        key={idx}
                        className={`relative rounded-2xl p-8 border ${pkg.recommended
                                ? "bg-white/10 border-custom-gold shadow-[0_0_30px_rgba(212,175,55,0.15)]"
                                : "bg-white/5 border-white/10"
                            } flex flex-col`}
                    >
                        {pkg.recommended && (
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-custom-gold text-black text-sm font-bold px-4 py-1 rounded-full uppercase tracking-wide">
                                Best Value
                            </div>
                        )}
                        <div className="mb-8">
                            <h3 className="text-2xl font-bold text-white mb-2">{pkg.name}</h3>
                            <p className="text-gray-400 text-sm mb-6">{pkg.description}</p>
                            <div className="text-4xl font-bold text-white">
                                {pkg.price} <span className="text-base font-normal text-gray-500">/ starting</span>
                            </div>
                        </div>

                        <ul className="space-y-4 mb-8 flex-1">
                            {pkg.features.map((feature, fIdx) => (
                                <li key={fIdx} className="flex items-start gap-3 text-gray-300 text-sm">
                                    <Check className="w-5 h-5 text-custom-gold shrink-0" />
                                    {feature}
                                </li>
                            ))}
                        </ul>

                        <Link href="/contact" className="w-full">
                            <Button
                                variant={pkg.recommended ? "gold" : "outline"}
                                className={`w-full ${!pkg.recommended && "text-white border-white/20 hover:text-custom-gold hover:border-custom-gold"
                                    }`}
                            >
                                Book {pkg.name}
                            </Button>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}
