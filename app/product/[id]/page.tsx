import { products } from "@/lib/static-data";
import { notFound } from "next/navigation";

export default async function ProductDetail({ params }: { params: Promise<{ id: string }> }) {
    const resolvedParams = await params;
    const product = products.find(p => p.id === resolvedParams.id);

    if (!product) return notFound();

    return (
        <main className="w-full pb-24">
            <div className="w-full px-8 lg:px-16 max-w-[1400px] mx-auto flex flex-col md:flex-row gap-16">
                <div className="w-full md:w-1/2 relative bg-white border border-[#EBD9D6]/50 p-4">
                    {product.isSale && <span className="absolute top-8 left-8 bg-[#111111] text-white text-xs uppercase font-bold px-4 py-2 z-10">Sale</span>}
                    <img src={product.image} alt={product.name} className="w-full aspect-[4/5] object-cover mix-blend-multiply" />
                </div>
                <div className="w-full md:w-1/2 flex flex-col justify-center">
                    <span className="text-sm font-bold uppercase tracking-[0.2em] text-[#A2847F] mb-4">{product.category}</span>
                    <h1 className="text-5xl font-serif font-bold text-[#111111] mb-6">{product.name}</h1>
                    <div className="text-2xl italic text-[#5C504E] mb-8">
                        {product.isSale ? (
                            <><span className="line-through opacity-50 mr-4">${product.price}.00</span><span className="font-bold text-[#111111]">${product.salePrice}.00</span></>
                        ) : (<span>${product.price}.00</span>)}
                    </div>
                    <p className="text-lg leading-relaxed text-[#5C504E] mb-10">{product.description}</p>
                    <button className="w-full lg:w-max px-16 py-5 bg-[#111111] text-white text-[13px] font-bold uppercase tracking-[0.2em] hover:bg-[#A2847F] transition-colors rounded-none">
                        Add to Cart
                    </button>
                </div>
            </div>
        </main>
    );
}
