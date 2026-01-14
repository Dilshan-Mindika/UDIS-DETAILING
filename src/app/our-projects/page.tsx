export default function ProjectsPage() {
    return (
        <div className="py-24 container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-20">
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Our Projects</h1>
                <p className="text-xl text-gray-400">
                    A showcase of our finest work. Witness the transformation.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Gallery Placeholders - 6 items */}
                {[1, 2, 3, 4, 5, 6].map((item) => (
                    <div key={item} className="group relative aspect-[4/3] bg-gray-800 rounded-xl overflow-hidden cursor-pointer">
                        <div className="absolute inset-0 flex items-center justify-center text-gray-600 font-bold text-2xl group-hover:scale-105 transition-transform duration-500">
                            PROJECT {item}
                            {/* Use <Image /> here in real app */}
                        </div>
                        <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/90 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                            <h3 className="text-white font-bold text-lg">Audi R8 - Ceramic Coating</h3>
                            <p className="text-custom-gold text-sm">Exterior Detail</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
