"use client";
import { useState, useEffect } from "react";
import { ChevronUp } from "lucide-react";

export default function ScrollToTop() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => window.scrollY > 300 ? setIsVisible(true) : setIsVisible(false);
        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    return isVisible ? (
        <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="fixed bottom-8 right-8 bg-[#111111] text-white p-3 shadow-xl hover:bg-[#A2847F] transition-colors z-50 cursor-pointer"
        >
            <ChevronUp className="w-6 h-6" />
        </button>
    ) : null;
}
