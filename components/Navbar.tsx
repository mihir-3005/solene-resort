import Link from "next/link";
import { Search, ShoppingBag } from "lucide-react";

export default function Navbar() {
    return (
        <header className="w-full absolute top-0 z-50 px-8 lg:px-16 py-8 bg-transparent">
            {/* Replaced max-w with w-full for edge-to-edge layout */}
            <div className="w-full flex items-center justify-between relative">

                {/* Left: Navigation Links (Bigger fonts and wider gaps) */}
                <nav className="hidden lg:flex items-center gap-10 text-[13px] font-bold uppercase tracking-[0.15em] text-[#111111]">
                    <Link href="/" className="hover:text-[#A2847F] transition-colors">Home</Link>
                    <Link href="/category/women" className="hover:text-[#A2847F] transition-colors">Women</Link>
                    <Link href="/category/men" className="hover:text-[#A2847F] transition-colors">Men</Link>
                    <Link href="/about" className="hover:text-[#A2847F] transition-colors">About Us</Link>
                    <Link href="/contact" className="hover:text-[#A2847F] transition-colors">Contact</Link>
                </nav>

                {/* Center: Logo (Increased size) */}
                <Link href="/" className="flex flex-col items-center absolute left-1/2 -translate-x-1/2">
                    <h1 className="text-5xl font-serif font-black tracking-tight text-[#111111]">Solene</h1>
                    <span className="text-[10px] tracking-[0.3em] uppercase text-[#A2847F] mt-1">Linen & Resort</span>
                </Link>

                {/* Right: Icons & Login (Bigger fonts) */}
                <div className="flex items-center gap-8 text-[13px] font-bold uppercase tracking-[0.15em] text-[#111111] justify-end w-full lg:w-auto">
                    <button className="hover:text-[#A2847F] transition-colors"><Search className="w-5 h-5" /></button>
                    <Link href="/cart" className="flex items-center gap-2 hover:text-[#A2847F] transition-colors">
                        <span className="hidden sm:inline">$ 0.00</span>
                        <div className="relative">
                            <ShoppingBag className="w-5 h-5" />
                            <span className="absolute -top-2 -right-2 bg-[#111111] text-white text-[9px] w-4 h-4 flex items-center justify-center rounded-full">0</span>
                        </div>
                    </Link>
                    <Link href="/login" className="hidden md:flex hover:text-[#A2847F] transition-colors ml-2">
                        Log In
                    </Link>
                </div>

            </div>
        </header>
    );
}
