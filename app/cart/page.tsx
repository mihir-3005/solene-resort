import Link from "next/link";

export default function Cart() {
    return (
        <main className="w-full pb-24 min-h-[70vh] relative overflow-hidden">
            {/* Rich Editorial Header */}
            <div className="relative w-full h-[50vh] flex items-center justify-center px-8 overflow-hidden mb-16">
                <img
                    src="https://images.unsplash.com/photo-1445205170230-053b83016050?q=80&w=2000&auto=format&fit=crop"
                    alt="Cart Header"
                    className="absolute inset-0 w-full h-full object-cover z-0"
                />
                <div className="absolute inset-0 bg-[#111111]/10 z-0"></div>

                <div className="relative z-10 bg-[#F4E9E6]/95 backdrop-blur-md px-10 py-12 md:px-16 md:py-12 max-w-2xl text-center shadow-2xl border border-white/20 mt-16 rounded-2xl">
                    <h1 className="text-5xl md:text-6xl font-serif font-bold text-[#111111] mb-4">Your Cart</h1>
                    <p className="text-[#5C504E] text-lg italic max-w-xl mx-auto">
                        Review your selected pieces before checking out.
                    </p>
                </div>
            </div>

            {/* Cart Content Area with Shapes */}
            <div className="w-full px-8 lg:px-16 max-w-[1400px] mx-auto relative z-0 py-8">

                {/* Background Decorative Circles */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#F4E9E6] rounded-full -z-10 blur-[120px] opacity-60"></div>
                <div className="absolute -top-24 -right-24 w-[400px] h-[400px] bg-[#EBD9D6] rounded-full -z-10 opacity-40"></div>

                <div className="flex flex-col lg:flex-row gap-16 relative z-10">
                    {/* Cart Items List */}
                    <div className="w-full lg:w-2/3">
                        <div className="border-b border-[#EBD9D6] pb-8 mb-8 flex items-center justify-between">
                            <div className="flex items-center gap-6">
                                <img src="https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?q=80&w=200&auto=format&fit=crop" alt="Item" className="w-24 h-32 object-cover bg-white p-2 shadow-sm rounded-md" />
                                <div>
                                    <h4 className="text-lg font-bold uppercase tracking-widest text-[#111111]">Santorini Linen Sundress</h4>
                                    <p className="text-[#5C504E] italic mt-2">Size: Medium | Color: Natural</p>
                                </div>
                            </div>
                            <div className="text-right">
                                <p className="text-xl font-bold text-[#111111]">$245.00</p>
                                <button className="text-[11px] font-bold uppercase tracking-widest text-[#A2847F] mt-4 hover:text-[#111111] transition-colors">Remove</button>
                            </div>
                        </div>
                    </div>

                    {/* Frosted Glass Cart Summary Card */}
                    <div className="w-full lg:w-1/3 bg-white/80 backdrop-blur-md p-10 shadow-xl shadow-[#EBD9D6]/20 border border-[#EBD9D6]/50 rounded-2xl h-max">
                        <h3 className="text-2xl font-serif font-bold text-[#111111] mb-8 border-b border-[#EBD9D6] pb-4">Order Summary</h3>
                        <div className="flex justify-between mb-4 text-[#5C504E] italic">
                            <span>Subtotal</span>
                            <span>$245.00</span>
                        </div>
                        <div className="flex justify-between mb-8 text-[#5C504E] italic">
                            <span>Shipping</span>
                            <span>Free</span>
                        </div>
                        <div className="flex justify-between mb-10 text-2xl font-bold text-[#111111] border-t border-[#EBD9D6] pt-6">
                            <span>Total</span>
                            <span>$245.00</span>
                        </div>
                        <button className="w-full py-5 bg-[#111111] text-white text-[13px] font-bold uppercase tracking-[0.2em] hover:bg-[#A2847F] transition-colors mb-4 rounded-none">
                            Proceed to Checkout
                        </button>
                        <Link href="/shop" className="block text-center text-[11px] font-bold uppercase tracking-widest text-[#5C504E] hover:text-[#111111] transition-colors">
                            Continue Shopping
                        </Link>
                    </div>
                </div>
            </div>
        </main>
    );
}