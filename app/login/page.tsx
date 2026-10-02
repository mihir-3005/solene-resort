export default function Login() {
    return (
        <main className="w-full min-h-[70vh] flex items-center justify-center px-8 py-24">
            <div className="w-full max-w-md bg-white p-12 shadow-sm text-center">
                <h1 className="text-4xl font-serif font-bold text-[#111111] mb-8">Log In</h1>
                <form className="flex flex-col gap-6 text-left">
                    <div>
                        <label className="block text-[11px] font-bold uppercase tracking-widest text-[#111111] mb-2">Email</label>
                        <input type="email" className="w-full border border-[#EBD9D6] p-4 outline-none focus:border-[#A2847F] bg-[#F4E9E6]/30" />
                    </div>
                    <div>
                        <label className="block text-[11px] font-bold uppercase tracking-widest text-[#111111] mb-2">Password</label>
                        <input type="password" className="w-full border border-[#EBD9D6] p-4 outline-none focus:border-[#A2847F] bg-[#F4E9E6]/30" />
                    </div>
                    <button type="submit" className="w-full py-4 mt-4 bg-[#111111] text-white text-[13px] font-bold uppercase tracking-[0.2em] hover:bg-[#A2847F] transition-colors">
                        Sign In
                    </button>
                </form>
            </div>
        </main>
    );
}
