import Link from "next/link";

export default function Footer() {
    return (
        <footer className="w-full pt-24 pb-12 px-8 lg:px-16 bg-[#F9F6F5] border-t border-[#EBD9D6]">
            <div className="w-full max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">

                {/* Brand Column with Identical Logo Lockup */}
                <div className="flex flex-col gap-4 md:col-span-1 items-start">
                    {/* Identical Navbar Logo Structure aligned to the left */}
                    <Link href="/" className="flex flex-col items-start mb-2">
                        <h2 className="text-5xl font-serif font-black tracking-tight text-[#111111]">Solene</h2>
                        <span className="text-[10px] tracking-[0.3em] uppercase text-[#A2847F] mt-1">Linen & Resort</span>
                    </Link>

                    <p className="text-[#5C504E] text-lg italic leading-relaxed pr-4">
                        Ethical European linen and sustainable resortwear designed for the slower rhythms of life.
                    </p>
                </div>

                <div className="flex flex-col gap-3">
                    <h5 className="text-3xl font-serif font-bold mb-4 text-[#111111]">Explore</h5>
                    <Link href="/" className="text-[#5C504E] hover:text-[#A2847F] text-lg font-medium transition-colors">Home</Link>
                    <Link href="/category/women" className="text-[#5C504E] hover:text-[#A2847F] text-lg font-medium transition-colors">Women</Link>
                    <Link href="/category/men" className="text-[#5C504E] hover:text-[#A2847F] text-lg font-medium transition-colors">Men</Link>
                    <Link href="/about" className="text-[#5C504E] hover:text-[#A2847F] text-lg font-medium transition-colors">About Us</Link>
                    <Link href="/contact" className="text-[#5C504E] hover:text-[#A2847F] text-lg font-medium transition-colors">Contact</Link>
                </div>

                <div className="flex flex-col gap-3">
                    <h5 className="text-3xl font-serif font-bold mb-4 text-[#111111]">Useful Links</h5>
                    <Link href="#" className="text-[#5C504E] hover:text-[#A2847F] text-lg font-medium transition-colors">Privacy Policy</Link>
                    <Link href="#" className="text-[#5C504E] hover:text-[#A2847F] text-lg font-medium transition-colors">Refund Policy</Link>
                    <Link href="#" className="text-[#5C504E] hover:text-[#A2847F] text-lg font-medium transition-colors">Shipping Information</Link>
                    <Link href="#" className="text-[#5C504E] hover:text-[#A2847F] text-lg font-medium transition-colors">Terms & Conditions</Link>
                    <Link href="#" className="text-[#5C504E] hover:text-[#A2847F] text-lg font-medium transition-colors">FAQ's</Link>
                </div>

                <div className="flex flex-col gap-3">
                    <h5 className="text-3xl font-serif font-bold mb-4 text-[#111111]">Contact</h5>
                    <p className="text-[#5C504E] text-lg italic">123 Fifth Avenue, New York, NY 10160</p>
                    <a href="mailto:contact@solenelinen.com" className="text-[#5C504E] hover:text-[#A2847F] text-lg font-medium transition-colors italic">contact@solenelinen.com</a>
                    <p className="text-[#5C504E] text-lg italic">929-242-6868</p>
                </div>
            </div>

            <div className="w-full max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between items-center pt-8 border-t border-[#EBD9D6] text-[#5C504E] text-sm">
                <p>Copyright © 2026 Solene Linen | Powered by Next.js</p>
            </div>
        </footer>
    );
}
