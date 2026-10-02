import { Star } from "lucide-react";

const reviews = [
    { id: 1, name: "Jennifer Oliver", text: "The Santorini dress breathes so beautifully. I wore it all summer long in Italy and it never lost its shape.", img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400&auto=format&fit=crop" },
    { id: 2, name: "Marcus Thorne", text: "Finally, resortwear for men that feels elevated but effortless. The linen trousers are a staple in my suitcase now.", img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=400&auto=format&fit=crop" },
    { id: 3, name: "Sophia Lin", text: "Ethical, sustainable, and purely gorgeous. The drape on the loungesets is unmatched by any luxury brand I've tried.", img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format&fit=crop" },
    { id: 4, name: "Elena Rostova", text: "Customer service was impeccable, and the shipping was incredibly fast. The quality of the stitching is perfect.", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400&auto=format&fit=crop" },
    { id: 5, name: "James Caldwell", text: "I bought the Amalfi set on a whim, and it is the most comfortable piece of clothing I own. Highly recommend.", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop" },
];

export default function Reviews() {
    return (
        <main className="w-full pb-24 relative overflow-hidden">
            {/* Rich Editorial Header */}
            <div className="relative w-full h-[50vh] flex items-center justify-center px-8 overflow-hidden mb-20">
                <img
                    src="https://images.unsplash.com/photo-1528938102132-4a9276b8e320?q=80&w=2000&auto=format&fit=crop"
                    alt="Reviews Header"
                    className="absolute inset-0 w-full h-full object-cover z-0"
                />
                <div className="absolute inset-0 bg-[#111111]/10 z-0"></div>

                <div className="relative z-10 bg-[#F4E9E6]/95 backdrop-blur-md px-10 py-12 md:px-16 md:py-12 max-w-2xl text-center shadow-2xl border border-white/20 mt-16 rounded-2xl">
                    <h1 className="text-5xl md:text-6xl font-serif font-bold text-[#111111] mb-4">Clients' Reviews</h1>
                    <p className="text-[#5C504E] text-lg italic max-w-xl mx-auto">
                        Hear from our community of mindful dressers around the world.
                    </p>
                </div>
            </div>

            {/* Reviews Content Area with Shapes */}
            <div className="w-full px-8 lg:px-16 max-w-[1400px] mx-auto relative z-0 py-8">

                {/* Background Decorative Elements */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 text-[35rem] font-serif text-[#F4E9E6] opacity-40 select-none pointer-events-none -z-10 leading-none">
                    &ldquo;
                </div>
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#EBD9D6] rounded-full -z-10 opacity-30 translate-x-1/4 -translate-y-1/4 blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#F4E9E6] rounded-full -z-10 blur-[100px] opacity-60"></div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 relative z-10">
                    {reviews.map(review => (
                        <div key={review.id} className="bg-white/80 backdrop-blur-sm p-10 flex flex-col items-center text-center shadow-xl shadow-[#EBD9D6]/20 border border-[#EBD9D6]/50 rounded-2xl group hover:-translate-y-2 transition-transform duration-300">
                            <img src={review.img} alt={review.name} className="w-20 h-20 rounded-full object-cover mb-6 border-4 border-white shadow-sm" />
                            <div className="flex gap-1 mb-6 text-[#A2847F]">
                                {[...Array(5)].map((_, i) => <Star key={i} fill="currentColor" className="w-4 h-4" />)}
                            </div>
                            <p className="text-lg font-serif italic text-[#5C504E] mb-6 leading-relaxed">"{review.text}"</p>
                            <span className="text-[11px] font-bold uppercase tracking-widest text-[#111111] mt-auto">{review.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
}
