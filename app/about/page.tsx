import Link from "next/link";

export default function About() {
    return (
        <main className="w-full pb-24 relative overflow-hidden">
            {/* Rich Editorial Header */}
            <div className="relative w-full h-[70vh] flex items-center justify-center px-8 overflow-hidden">
                <img
                    src="https://images.unsplash.com/photo-1499939667766-4afceb292d05?q=80&w=2000&auto=format&fit=crop"
                    alt="Solene Lifestyle"
                    className="absolute inset-0 w-full h-full object-cover z-0"
                />
                <div className="absolute inset-0 bg-[#111111]/10 z-0"></div>

                <div className="relative z-10 bg-[#F4E9E6]/95 backdrop-blur-md px-10 py-16 md:px-20 md:py-20 max-w-3xl text-center shadow-2xl border border-white/20 mt-16 rounded-2xl">
                    <h1 className="text-6xl md:text-7xl font-serif font-bold text-[#111111] mb-6">About Solene</h1>
                    <p className="text-[#5C504E] text-xl max-w-2xl mx-auto leading-relaxed">
                        We believe in a slower pace. Discover the heritage, craftsmanship, and community behind our earth-bred textiles.
                    </p>
                </div>
            </div>

            {/* Main About Section with Shapes */}
            <section className="py-32 px-8 lg:px-16 w-full max-w-[1400px] mx-auto flex flex-col lg:flex-row gap-16 items-center relative z-0">

                {/* Background Decorative Circles */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#F4E9E6] rounded-full -z-10 blur-[80px] opacity-70 translate-x-1/4"></div>
                <div className="absolute -bottom-32 -left-24 w-[600px] h-[600px] bg-[#EBD9D6] rounded-full -z-10 opacity-30 blur-2xl"></div>

                <div className="w-full lg:w-1/2 relative z-10">
                    <div className="absolute -top-8 -left-8 w-full h-full bg-[#EBD9D6] -z-10"></div>
                    <img src="https://images.unsplash.com/photo-1605763240000-7e93b172d754?q=80&w=1000&auto=format&fit=crop" alt="Studio" className="w-full h-[700px] object-cover shadow-sm" />
                </div>

                <div className="w-full lg:w-1/2 lg:pl-12 relative z-10">
                    <span className="text-[13px] font-bold uppercase tracking-[0.2em] text-[#111111] mb-6 block">Our Philosophy</span>
                    <h3 className="text-5xl font-serif font-bold leading-[1.1] mb-8 text-[#111111]">Crafted for the slow life</h3>
                    <p className="text-[#5C504E] text-xl leading-relaxed mb-6 italic">
                        Solene was born out of a desire to step back from the frantic pace of fast fashion. We wanted to create clothing that allows you to breathe, move freely, and feel at peace wherever you are in the world.
                    </p>
                    <p className="text-[#5C504E] text-xl leading-relaxed mb-10 italic">
                        Every piece is woven from 100% GOTS-certified European linen, dyed using eco-friendly natural pigments, and hand-stitched by generations of textile artisans in Portugal.
                    </p>
                    <Link href="/shop" className="inline-block border border-[#111111] px-10 py-5 text-[13px] font-bold uppercase tracking-[0.2em] hover:bg-[#111111] hover:text-[#F4E9E6] transition-colors text-[#111111]">
                        View the Collection
                    </Link>
                </div>
            </section>
        </main>
    );
}
