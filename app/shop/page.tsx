import { products } from "@/lib/static-data";
import Link from "next/link";

export default function Shop() {
    return (
        <main className="w-full pb-24">
            {/* Rich Editorial Header */}
            <div className="relative w-full h-[50vh] flex items-center justify-center px-8 overflow-hidden mb-16">
                <img
                    src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?q=80&w=2000&auto=format&fit=crop"
                    alt="Shop Header"
                    className="absolute inset-0 w-full h-full object-cover z-0"
                />
                <div className="absolute inset-0 bg-[#111111]/10 z-0"></div>

                {/* Floating Content Card (Added rounded-2xl) */}
                <div className="relative z-10 bg-[#F4E9E6]/95 backdrop-blur-md px-10 py-12 md:px-16 md:py-12 max-w-2xl text-center shadow-2xl border border-white/20 mt-16 rounded-2xl">
                    <h1 className="text-5xl md:text-6xl font-serif font-bold text-[#111111] mb-4">All Products</h1>
                    <p className="text-[#5C504E] text-lg italic max-w-xl mx-auto">
                        Discover our complete collection of earth-bred resortwear.
                    </p>
                </div>
            </div>

            <div className="w-full px-8 lg:px-16 max-w-[1600px] mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {products.map((product) => (
                        <Link href={`/product/${product.id}`} key={product.id} className="group text-center">
                            <div className="w-full aspect-[4/5] mb-4 overflow-hidden bg-white relative border border-[#EBD9D6]/30">
                                {product.isSale && <span className="absolute top-4 left-4 bg-[#111111] text-white text-[11px] uppercase font-bold px-3 py-1 z-10">-25%</span>}
                                <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 mix-blend-multiply" />
                            </div>
                            <h4 className="text-sm font-bold uppercase tracking-widest mb-1 text-[#111111]">{product.name}</h4>
                            <div className="flex justify-center gap-2 text-[#5C504E] italic">
                                {product.isSale ? (
                                    <><span className="line-through opacity-50">${product.price}.00</span><span className="font-bold text-[#A2847F]">${product.salePrice}.00</span></>
                                ) : (<span>${product.price}.00</span>)}
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </main>
    );
}
