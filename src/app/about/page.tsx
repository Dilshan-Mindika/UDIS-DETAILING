export default function AboutPage() {
    return (
        <div className="py-24 container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-16">
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">About UDI's Detailing</h1>
                <p className="text-xl text-gray-400">
                    Founded on a passion for automotive perfection, we deliver world-class detailing services that redefine luxury care.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-24">
                <div className="bg-gray-800 h-[400px] rounded-2xl w-full flex items-center justify-center text-gray-500">
                    {/* Placeholder for About Image/Video */}
                    [Team/Workshop Image]
                </div>
                <div>
                    <h2 className="text-3xl font-bold text-custom-gold mb-6">Our Mission</h2>
                    <p className="text-gray-300 mb-6 leading-relaxed">
                        At UDI's Detailing, our mission is simple: to provide the highest quality automotive care experience.
                        We believe every vehicle deserves to look its absolute best, essentially better than showroom quality.
                    </p>
                    <p className="text-gray-300 mb-6 leading-relaxed">
                        Our certified technicians use only the finest products and state-of-the-art techniques to ensure
                        your investment is protected and enhanced.
                    </p>
                    <ul className="space-y-4">
                        {["Certified Experts", "Premium Products", "Customer Satisfaction Guarantee"].map((item, i) => (
                            <li key={i} className="flex items-center gap-3 text-white font-medium">
                                <span className="w-2 h-2 bg-custom-gold rounded-full"></span> {item}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* Why Choose Us Section could go here */}
        </div>
    );
}
