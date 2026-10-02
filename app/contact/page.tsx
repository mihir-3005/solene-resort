export default function Contact() {
    return (
        <main className="w-full pb-24 relative overflow-hidden">
            {/* Rich Editorial Header */}
            <div className="relative w-full h-[70vh] flex items-center justify-center px-8 overflow-hidden">
                <img
                    src="https://images.unsplash.com/photo-1556905055-8f358a7a47b2?q=80&w=2000&auto=format&fit=crop"
                    alt="Solene Atelier"
                    className="absolute inset-0 w-full h-full object-cover z-0"
                />
                <div className="absolute inset-0 bg-[#111111]/10 z-0"></div>

                <div className="relative z-10 bg-[#F4E9E6]/95 backdrop-blur-md px-10 py-16 md:px-20 md:py-20 max-w-3xl text-center shadow-2xl border border-white/20 mt-16 rounded-2xl">
                    <h1 className="text-6xl md:text-7xl font-serif font-bold text-[#111111] mb-6">Contact Us</h1>
                    <p className="text-[#5C504E] text-xl italic max-w-2xl mx-auto leading-relaxed">
                        Whether you have a question about sizing, styling, or tracking your recent order, our team is here to help.
                    </p>
                </div>
            </div>

            {/* Main Contact Section with Shapes */}
            <section className="py-32 px-8 lg:px-16 w-full max-w-[1400px] mx-auto flex flex-col lg:flex-row gap-16 relative z-0">

                {/* Background Decorative Circles */}
                <div className="absolute top-24 left-0 w-96 h-96 bg-[#F4E9E6] rounded-full -z-10 blur-[100px] opacity-70"></div>
                <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-[#EBD9D6] rounded-full -z-10 opacity-30"></div>

                <div className="w-full lg:w-1/3 flex flex-col gap-12 relative z-10">
                    <div>
                        <h3 className="text-2xl font-serif font-bold text-[#111111] mb-4">Visit Our Store</h3>
                        <p className="text-[#5C504E] text-lg italic leading-relaxed">123 Fifth Avenue<br />New York, NY 10160</p>
                    </div>
                    <div>
                        <h3 className="text-2xl font-serif font-bold text-[#111111] mb-4">Get in Touch</h3>
                        <p className="text-[#5C504E] text-lg italic leading-relaxed">Phone: 929-242-6868<br />Email: contact@solenelinen.com</p>
                    </div>
                    <div>
                        <h3 className="text-2xl font-serif font-bold text-[#111111] mb-4">Opening Hours</h3>
                        <p className="text-[#5C504E] text-lg italic leading-relaxed">Mon - Fri: 10:00 AM - 7:00 PM<br />Sat - Sun: 11:00 AM - 5:00 PM</p>
                    </div>
                </div>

                {/* Frosted Glass Form Card */}
                <div className="w-full lg:w-2/3 bg-white/80 backdrop-blur-md p-12 lg:p-16 shadow-xl shadow-[#EBD9D6]/20 border border-[#EBD9D6]/50 rounded-2xl relative z-10">
                    <h3 className="text-4xl font-serif font-bold text-[#111111] mb-10">Send a Message</h3>
                    <form className="flex flex-col gap-8">
                        <div className="flex flex-col md:flex-row gap-8">
                            <div className="w-full">
                                <label className="block text-[11px] font-bold uppercase tracking-widest text-[#111111] mb-3">Name</label>
                                <input type="text" className="w-full border border-[#EBD9D6] p-5 outline-none focus:border-[#A2847F] bg-white/50 text-[#111111] rounded-none" />
                            </div>
                            <div className="w-full">
                                <label className="block text-[11px] font-bold uppercase tracking-widest text-[#111111] mb-3">Email</label>
                                <input type="email" className="w-full border border-[#EBD9D6] p-5 outline-none focus:border-[#A2847F] bg-white/50 text-[#111111] rounded-none" />
                            </div>
                        </div>
                        <div>
                            <label className="block text-[11px] font-bold uppercase tracking-widest text-[#111111] mb-3">Message</label>
                            <textarea rows={5} className="w-full border border-[#EBD9D6] p-5 outline-none focus:border-[#A2847F] bg-white/50 text-[#111111] rounded-none"></textarea>
                        </div>
                        <button type="submit" className="w-max px-12 py-5 mt-4 bg-[#111111] text-white text-[13px] font-bold uppercase tracking-[0.2em] hover:bg-[#A2847F] transition-colors rounded-none">
                            Submit
                        </button>
                    </form>
                </div>
            </section>
        </main>
    );
}
