import { Playfair_Display, Inter, Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const montserrat = Montserrat({ 
  subsets: ['latin'],
  style: ['normal', 'italic'], // Make sure to load the italic styles
  variable: '--font-montserrat', // Create a CSS variable
})

export const metadata = {
	title: "Solene Linen & Resort",
	description: "Ethical European linen and sustainable resortwear.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body className={`${playfair.variable} ${inter.variable} ${montserrat.variable} bg-[#F4E9E6] text-[#111111] antialiased font-sans min-h-screen flex flex-col`}>
				<Navbar />
				<div className="flex-grow pt-28">
					{children}
				</div>
				<ScrollToTop />
				<Footer />
			</body>
		</html>
	);
}
