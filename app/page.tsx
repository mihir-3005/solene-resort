import Link from "next/link";
import { Star, Truck, ShieldCheck, Tag } from "lucide-react";
import { products } from "@/lib/static-data";

// Temporary dummy data
const trendingProducts = products.slice(0, 3);

export default function Home() {
	return (
		<main className="w-full">

			{/* 1. Elevated Editorial Hero Section */}
			<section className="relative w-full h-screen min-h-[800px] flex items-center px-8 lg:px-16 overflow-hidden bg-[#F4E9E6]">

				{/* Background Ambient Glow */}
				<div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
					<div className="absolute -top-[20%] -left-[10%] w-[70%] h-[70%] bg-white/50 rounded-full blur-[120px]"></div>
				</div>

				{/* Left Content */}
				<div className="w-full lg:w-1/2 z-10 pt-20">
					<div className="flex items-center gap-4 mb-8">
						<div className="w-12 h-[1px] bg-[#111111]"></div>
						<span className="text-[15px] font-bold uppercase tracking-[0.3em] text-[#111111]">The Summer '26 Collection</span>
					</div>

					<h2 className="text-7xl md:text-[7.5rem] font-serif font-bold leading-[1.05] mb-8 text-[#111111] tracking-tight">
						Original <br />
						<span className="italic font-light text-[#A2847F]">Resortwear</span>
					</h2>

					<p className="text-xl mb-12 px-5 max-w-md text-[#5C504E] leading-relaxed">
						Breathable, undyed, and woven in Portugal. Earth-bred textiles designed for the slower rhythms of life.
					</p>

					<div className="flex items-center gap-8">
						<Link href="/shop" className="inline-block bg-[#111111] text-white px-12 py-5 text-[13px] font-bold uppercase tracking-[0.2em] hover:bg-[#A2847F] transition-all duration-300 shadow-xl hover:shadow-2xl">
							Shop Now
						</Link>
					</div>
				</div>

				{/* Right Side - Dynamic Layered Composition (Fixed Images) */}
				<div className="hidden lg:flex absolute right-0 top-0 w-1/2 h-full items-center justify-center pointer-events-none z-10">
					{/* Main Backdrop Shape */}
					<div className="absolute w-[850px] h-[850px] bg-[#EBD9D6] rounded-full -z-10 translate-x-32 translate-y-12"></div>
					{/* Primary Floating Image (Highly reliable link) */}
					<img
						src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=800&auto=format&fit=crop"
						alt="Solene Linen Dress"
						className="w-[450px] h-[650px] object-cover rounded-t-[200px] rounded-b-[20px] shadow-2xl z-20 translate-x-12"
					/>
					{/* Secondary Overlapping Image for Depth */}
					<img
						src="https://images.unsplash.com/photo-1605763240000-7e93b172d754?q=80&w=1200&auto=format&fit=crop"
						alt="Linen Texture Detail"
						className="absolute w-[250px] h-[350px] object-cover rounded-2xl shadow-2xl z-30 -translate-x-48 translate-y-40 border-8 border-[#F4E9E6]"
					/>
				</div>
			</section>

			{/* 2. A Few Words About Us */}
			<section className="py-16 lg:py-24 px-8 lg:px-16 w-full max-w-[1600px] mx-auto flex flex-col lg:flex-row items-center gap-16 lg:gap-24 scroll-mt-24 relative overflow-hidden z-0">

				{/* Background Decorative Circles */}
				<div className="absolute -bottom-48 -right-24 w-[600px] h-[600px] bg-[#EBD9D6] rounded-full -z-10 opacity-30 blur-sm"></div>
				<div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-[#F4E9E6] rounded-full -z-10 blur-3xl opacity-60"></div>

				<div className="w-full lg:w-1/2 relative">
					<div className="absolute -top-8 -left-8 w-full h-full bg-[#EBD9D6] -z-10"></div>
					<img src="https://images.unsplash.com/photo-1605763240000-7e93b172d754?q=80&w=1200&auto=format&fit=crop" alt="About Us" className="w-full h-[600px] md:h-[800px] object-cover shadow-sm" />
				</div>
				<div className="w-full lg:w-1/2 lg:pl-12 relative z-10">
					<span className="text-[13px] font-bold uppercase tracking-[0.2em] text-[#111111] mb-6 block">Our Story</span>
					<h3 className="text-5xl lg:text-[4rem] font-serif font-bold leading-[1.1] mb-8 text-[#111111]">A few words about us</h3>
					<p className="text-[#5C504E] text-xl leading-relaxed mb-10 italic max-w-xl">
						Solene was born from a desire to return to the essentials. We believe in creating garments that outlast trends, using 100% organic materials sourced ethically from European artisans.
					</p>
					<Link href="/about" className="inline-block border-b-2 border-[#111111] pb-1 text-[13px] font-bold uppercase tracking-[0.2em] hover:text-[#A2847F] hover:border-[#A2847F] transition-colors text-[#111111]">
						Read More
					</Link>
				</div>
			</section>

			{/* 3. Trending Now */}
			<section className="py-16 lg:py-24 px-8 lg:px-16 w-full max-w-[1600px] mx-auto">
				<div className="text-center mb-16">
					<span className="text-[13px] font-bold uppercase tracking-[0.2em] text-[#111111] mb-4 block">Popular Products</span>
					<h3 className="text-5xl font-serif font-bold text-[#111111]">Trending now</h3>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
					{trendingProducts.map((product) => (
						<Link href={`/product/${product.id}`} key={product.id} className="group text-center">
							<div className="w-full aspect-[4/5] mb-6 overflow-hidden bg-white relative">
								{product.isSale && <span className="absolute top-4 left-4 bg-[#111111] text-white text-[11px] uppercase font-bold px-4 py-1.5 z-10 tracking-widest">-25%</span>}
								<img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 mix-blend-multiply" />
							</div>
							<h4 className="text-sm font-bold uppercase tracking-widest mb-2 group-hover:text-[#A2847F] transition-colors text-[#111111]">{product.name}</h4>
							<div className="flex justify-center gap-3 text-[#5C504E] italic">
								{product.isSale ? <><span className="line-through opacity-50">${product.price}.00</span><span className="font-bold">${product.salePrice}.00</span></> : <span>${product.price}.00</span>}
							</div>
						</Link>
					))}
				</div>

				{/* Added: Centered Link to Shop Page */}
				<div className="w-full flex justify-center mt-16">
					<Link href="/shop" className="inline-block border border-[#111111] px-10 py-5 text-[13px] font-bold uppercase tracking-[0.2em] hover:bg-[#111111] hover:text-[#F4E9E6] transition-colors text-[#111111]">
						View All Products
					</Link>
				</div>
			</section>

			{/* 4. True Promotional Campaign Block */}
			<section className="py-16 lg:py-24 px-8 lg:px-16 w-full max-w-[1600px] mx-auto">
				<div className="w-full bg-[#F4E9E6] flex flex-col lg:flex-row items-stretch border border-[#EBD9D6] shadow-sm">

					{/* Left Side: Campaign Details (Now with decorative circles) */}
					<div className="w-full lg:w-1/2 p-12 lg:p-24 flex flex-col justify-center relative overflow-hidden z-0">

						{/* Background Decorative Circles */}
						<div className="absolute -top-32 -left-20 w-80 h-80 bg-[#EBD9D6] rounded-full -z-10 opacity-70"></div>
						<div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full -z-10 blur-[80px] opacity-60"></div>

						{/* Live Indicator */}
						<div className="flex items-center gap-3 mb-8">
							<span className="w-2 h-2 rounded-full bg-[#A2847F] animate-pulse"></span>
							<span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#A2847F]">Limited Time Offer</span>
						</div>

						<h3 className="text-5xl lg:text-[4rem] font-serif font-bold leading-[1.05] mb-6 text-[#111111]">
							The Amalfi Capsule
						</h3>

						{/* Highlighted Discount */}
						<div className="flex items-baseline gap-4 mb-8">
							<span className="text-4xl font-serif text-[#111111] font-bold">25% OFF</span>
							<span className="text-lg italic text-[#5C504E]">the entire set</span>
						</div>

						<p className="text-[#5C504E] text-xl leading-relaxed mb-12 italic max-w-md">
							Our best-selling two-piece sets, engineered for the Mediterranean sun. Bundle the resort top and trousers to unlock exclusive seasonal pricing.
						</p>

						<div className="flex flex-col sm:flex-row items-center gap-6">
							<Link href="/shop" className="w-full sm:w-auto text-center bg-[#111111] text-white px-10 py-5 text-[13px] font-bold uppercase tracking-[0.2em] hover:bg-[#A2847F] transition-colors shadow-xl">
								Shop The Capsule
							</Link>

							{/* Promo Code Box */}
							<div className="w-full sm:w-auto border-2 border-dashed border-[#A2847F] px-8 py-4 text-center bg-white/50 backdrop-blur-sm">
								<span className="block text-[9px] uppercase tracking-widest text-[#5C504E] mb-1">Use Code at Checkout</span>
								<span className="font-bold tracking-widest text-[#111111] text-lg">AMALFI25</span>
							</div>
						</div>
					</div>

					{/* Right Side: Shoppable Image with Floating Tag */}
					<div className="w-full lg:w-1/2 relative h-[500px] lg:h-auto min-h-[600px]">
						<img
							src="https://images.unsplash.com/photo-1584273143981-41c073dfe8f8?q=80&w=1200&auto=format&fit=crop"
							alt="Amalfi Capsule Set"
							className="absolute inset-0 w-full h-full object-cover"
						/>

						<Link href="/product/3" className="absolute bottom-8 right-8 lg:bottom-12 lg:-left-12 bg-white/95 backdrop-blur-md p-6 shadow-2xl flex items-center gap-6 border border-[#EBD9D6]/50 group hover:-translate-y-2 transition-transform duration-300">
							<img
								src="https://images.unsplash.com/photo-1584273143981-41c073dfe8f8?q=80&w=200&auto=format&fit=crop"
								className="w-16 h-20 object-cover border border-[#EBD9D6]"
								alt="Amalfi Trousers"
							/>
							<div className="pr-4">
								<span className="block text-[11px] font-bold uppercase tracking-widest text-[#111111] mb-2 group-hover:text-[#A2847F] transition-colors">Amalfi Trousers</span>
								<div className="flex gap-4 text-sm italic">
									<span className="line-through text-[#5C504E]">$195.00</span>
									<span className="font-bold text-[#111111]">$146.00</span>
								</div>
							</div>
						</Link>
					</div>
				</div>
			</section>

			{/* 5. Elevated Testimonials Grid */}
			<section className="py-32 px-8 lg:px-16 w-full bg-[#F9F6F5] relative overflow-hidden z-0 border-t border-[#EBD9D6]">

				{/* Background Decorative Elements */}
				<div className="absolute top-12 left-1/2 -translate-x-1/2 text-[35rem] font-serif text-white opacity-60 select-none pointer-events-none -z-10 leading-none">
					&ldquo;
				</div>
				<div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#EBD9D6] rounded-full -z-10 opacity-40 translate-x-1/3 -translate-y-1/4"></div>
				<div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-white rounded-full -z-10 blur-[100px] opacity-60 -translate-x-1/4 translate-y-1/4"></div>

				<div className="text-center mb-24 relative z-10">
					<span className="text-[13px] font-bold uppercase tracking-[0.2em] text-[#111111] mb-4 block">Clients' reviews</span>
					<h3 className="text-5xl font-serif font-bold text-[#111111]">Testimonials</h3>
				</div>

				<div className="w-full max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-8 relative z-10 mb-16">

					{/* Review Card 1 */}
					<div className="bg-white/80 backdrop-blur-sm p-10 lg:p-12 flex flex-col items-center text-center shadow-xl shadow-[#EBD9D6]/20 border border-[#EBD9D6]/50 rounded-2xl relative mt-8 md:mt-0 group hover:-translate-y-2 transition-transform duration-300">
						<img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop" alt="Jennifer Oliver" className="w-20 h-20 rounded-full object-cover shadow-md absolute -top-10 border-4 border-white" />
						<div className="flex gap-1 mb-6 text-[#A2847F] mt-8">
							{[...Array(5)].map((_, i) => <Star key={i} fill="currentColor" className="w-4 h-4" />)}
						</div>
						<p className="text-lg font-serif italic text-[#5C504E] mb-8 leading-relaxed">
							"The Santorini dress breathes so beautifully. I wore it all summer long in Italy and it never lost its shape or elegance."
						</p>
						<span className="text-[11px] font-bold uppercase tracking-widest text-[#111111] mt-auto">— Jennifer Oliver</span>
					</div>

					{/* Review Card 2 */}
					<div className="bg-white/80 backdrop-blur-sm p-10 lg:p-12 flex flex-col items-center text-center shadow-xl shadow-[#EBD9D6]/20 border border-[#EBD9D6]/50 rounded-2xl relative mt-8 md:-translate-y-8 group hover:-translate-y-10 transition-transform duration-300">
						<img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=200&auto=format&fit=crop" alt="Marcus Thorne" className="w-20 h-20 rounded-full object-cover shadow-md absolute -top-10 border-4 border-white" />
						<div className="flex gap-1 mb-6 text-[#A2847F] mt-8">
							{[...Array(5)].map((_, i) => <Star key={i} fill="currentColor" className="w-4 h-4" />)}
						</div>
						<p className="text-lg font-serif italic text-[#5C504E] mb-8 leading-relaxed">
							"Finally, resortwear for men that feels elevated but effortless. The linen trousers are a staple in my suitcase now."
						</p>
						<span className="text-[11px] font-bold uppercase tracking-widest text-[#111111] mt-auto">— Marcus Thorne</span>
					</div>

					{/* Review Card 3 */}
					<div className="bg-white/80 backdrop-blur-sm p-10 lg:p-12 flex flex-col items-center text-center shadow-xl shadow-[#EBD9D6]/20 border border-[#EBD9D6]/50 rounded-2xl relative mt-8 md:mt-0 group hover:-translate-y-2 transition-transform duration-300">
						<img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop" alt="Sophia Lin" className="w-20 h-20 rounded-full object-cover shadow-md absolute -top-10 border-4 border-white" />
						<div className="flex gap-1 mb-6 text-[#A2847F] mt-8">
							{[...Array(5)].map((_, i) => <Star key={i} fill="currentColor" className="w-4 h-4" />)}
						</div>
						<p className="text-lg font-serif italic text-[#5C504E] mb-8 leading-relaxed">
							"Ethical, sustainable, and purely gorgeous. The drape on the loungesets is unmatched by any luxury brand I've tried."
						</p>
						<span className="text-[11px] font-bold uppercase tracking-widest text-[#111111] mt-auto">— Sophia Lin</span>
					</div>

				</div>

				<div className="w-full flex justify-center relative z-10 mt-8">
					<Link href="/reviews" className="inline-block border border-[#111111] px-10 py-5 text-[13px] font-bold uppercase tracking-[0.2em] hover:bg-[#111111] hover:text-[#F4E9E6] transition-colors text-[#111111]">
						Read All Reviews
					</Link>
				</div>
			</section>

			{/* 6. Elevated Value Propositions (Upgraded to 4 columns with rich design) */}
			<section className="w-full bg-[#F4E9E6] border-y border-[#EBD9D6] relative overflow-hidden z-0">

				{/* Background Decorative Circles */}
				<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white rounded-full -z-10 blur-[120px] opacity-60"></div>
				<div className="absolute -bottom-32 -left-32 w-[400px] h-[400px] bg-[#EBD9D6] rounded-full -z-10 opacity-40"></div>
				<div className="absolute -top-24 -right-24 w-[300px] h-[300px] bg-[#EBD9D6] rounded-full -z-10 opacity-30 blur-2xl"></div>

				<div className="w-full max-w-[1600px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-[#EBD9D6]">

					{/* Prop 1: Sustainability */}
					<div className="flex flex-col items-center py-24 px-8 lg:px-12 text-center group">
						<div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-8 shadow-sm border border-[#EBD9D6]/50 group-hover:-translate-y-2 transition-transform duration-300">
							<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-[#111111]">
								<path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" /><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
							</svg>
						</div>
						<h4 className="text-xl font-serif font-bold mb-4 text-[#111111]">Sustainably Sourced</h4>
						<p className="text-[#5C504E] italic text-[15px] leading-relaxed max-w-[250px]">100% GOTS-certified European linen, dyed with natural eco-pigments.</p>
					</div>

					{/* Prop 2: Shipping */}
					<div className="flex flex-col items-center py-24 px-8 lg:px-12 text-center group">
						<div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-8 shadow-sm border border-[#EBD9D6]/50 group-hover:-translate-y-2 transition-transform duration-300">
							<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-[#111111]">
								<path d="M10 17h4V5H2v12h3" /><path d="M20 17h2v-3.34a4 4 0 0 0-1.17-2.83L19 9h-5" /><path d="M14 17h1" /><circle cx="7.5" cy="17.5" r="2.5" /><circle cx="17.5" cy="17.5" r="2.5" />
							</svg>
						</div>
						<h4 className="text-xl font-serif font-bold mb-4 text-[#111111]">Free Global Shipping</h4>
						<p className="text-[#5C504E] italic text-[15px] leading-relaxed max-w-[250px]">Complimentary carbon-neutral shipping on all orders over $150.</p>
					</div>

					{/* Prop 3: Security */}
					<div className="flex flex-col items-center py-24 px-8 lg:px-12 text-center group">
						<div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-8 shadow-sm border border-[#EBD9D6]/50 group-hover:-translate-y-2 transition-transform duration-300">
							<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-[#111111]">
								<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><path d="m9 12 2 2 4-4" />
							</svg>
						</div>
						<h4 className="text-xl font-serif font-bold mb-4 text-[#111111]">Secure Payments</h4>
						<p className="text-[#5C504E] italic text-[15px] leading-relaxed max-w-[250px]">Shop with confidence using our 256-bit encrypted checkout process.</p>
					</div>

					{/* Prop 4: Returns */}
					<div className="flex flex-col items-center py-24 px-8 lg:px-12 text-center group">
						<div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-8 shadow-sm border border-[#EBD9D6]/50 group-hover:-translate-y-2 transition-transform duration-300">
							<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-[#111111]">
								<path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" /><path d="M3 3v5h5" />
							</svg>
						</div>
						<h4 className="text-xl font-serif font-bold mb-4 text-[#111111]">Hassle-Free Returns</h4>
						<p className="text-[#5C504E] italic text-[15px] leading-relaxed max-w-[250px]">Enjoy a seamless 30-day return policy. We want you to love your pieces.</p>
					</div>

				</div>
			</section>

			{/* --- DECORATIVE TRANSITION TOP --- */}
			<div className="w-full h-24 lg:h-32 bg-[#F9F6F5] relative overflow-hidden flex items-center justify-center border-b border-[#EBD9D6]/30">
				{/* Soft floating shapes bleeding into the section */}
				<div className="absolute -top-12 -left-20 w-72 h-72 bg-[#F4E9E6] rounded-full blur-3xl opacity-60"></div>
				<div className="absolute bottom-4 right-32 w-40 h-40 bg-[#EBD9D6] rounded-full -z-10 opacity-30"></div>
				<div className="absolute top-1/2 left-1/4 w-12 h-12 bg-white border border-[#EBD9D6] rounded-full -z-10 -translate-y-1/2 opacity-50"></div>
			</div>

			{/* 7. Instagram Preview */}
			<section className="w-full bg-[#F9F6F5]">
				<div className="w-full flex flex-col md:flex-row">
					<div className="w-full md:w-1/4 aspect-square">
						<img src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?q=80&w=600&auto=format&fit=crop" alt="Insta 1" className="w-full h-full object-cover hover:opacity-80 transition-opacity cursor-pointer" />
					</div>
					<div className="w-full md:w-1/4 aspect-square">
						<img src="https://images.unsplash.com/photo-1552874869-5c39ec9288dc?q=80&w=600&auto=format&fit=crop" alt="Insta 2" className="w-full h-full object-cover hover:opacity-80 transition-opacity cursor-pointer" />
					</div>

					{/* Filled out Follow Us Column */}
					<div className="w-full md:w-1/4 aspect-square flex flex-col items-center justify-center bg-[#F9F6F5] text-center p-8 relative overflow-hidden z-0">
						{/* Background Decorative Circles */}
						<div className="absolute -bottom-24 -right-24 w-64 h-64 bg-[#EBD9D6] rounded-full -z-10 opacity-80"></div>
						<div className="absolute -top-12 -left-12 w-48 h-48 bg-[#F4E9E6] rounded-full -z-10 blur-2xl opacity-60"></div>

						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10 mb-4 text-[#111111]">
							<rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
						</svg>
						<h3 className="text-3xl font-serif font-bold text-[#111111] mb-4">Follow Us</h3>
						<p className="text-[#5C504E] italic mb-8 px-4">
							Join our community of mindful dressers. Tag us in your travels to be featured in our weekly journal.
						</p>
						<a href="#" className="inline-block border-b-2 border-[#111111] pb-1 text-[11px] font-bold uppercase tracking-[0.2em] hover:text-[#A2847F] hover:border-[#A2847F] transition-colors text-[#111111]">
							@solenelinen
						</a>
					</div>

					<div className="w-full md:w-1/4 aspect-square">
						<img src="https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=600&auto=format&fit=crop" alt="Insta 3" className="w-full h-full object-cover hover:opacity-80 transition-opacity cursor-pointer" />
					</div>
				</div>
			</section>

			{/* --- DECORATIVE TRANSITION BOTTOM --- */}
			<div className="w-full h-24 lg:h-32 bg-[#F9F6F5] relative overflow-hidden flex items-center justify-center border-t border-[#EBD9D6]/30">
				{/* Soft floating shapes blending into the next section */}
				<div className="absolute top-10 -right-12 w-64 h-64 bg-[#F4E9E6] rounded-full blur-2xl opacity-70"></div>
				<div className="absolute -bottom-20 left-1/4 w-[500px] h-[500px] bg-[#EBD9D6] rounded-full -z-10 opacity-20"></div>
				<div className="absolute bottom-8 right-1/4 w-8 h-8 bg-transparent border-2 border-[#EBD9D6] rounded-full -z-10 opacity-40"></div>
			</div>

			{/* 8. Newsletter (Fixed Image alignment) */}
			<section className="w-full bg-[#F4E9E6] flex flex-col lg:flex-row items-stretch border-t border-[#EBD9D6]">
				{/* Left Side: Standard strictly-contained image to prevent viewport bleeding */}
				<div className="w-full lg:w-1/2 relative min-h-[400px] overflow-hidden">
					<img
						src="https://images.unsplash.com/photo-1529139574466-a303027c1d8b?q=80&w=1200&auto=format&fit=crop"
						alt="Solene Lifestyle"
						className="absolute inset-0 w-full h-full object-cover"
					/>
				</div>

				{/* Right Side: Form Content */}
				<div className="w-full lg:w-1/2 flex flex-col justify-center px-8 lg:px-24 py-24">
					<span className="text-[13px] font-bold uppercase tracking-[0.2em] text-[#111111] mb-6 block">Stay in the loop</span>
					<h3 className="text-5xl font-serif font-bold mb-6 text-[#111111]">Join the Solene Club</h3>
					<p className="text-[#5C504E] text-lg italic mb-10 max-w-md leading-relaxed">
						Subscribe to receive 15% off your first order, plus updates on new arrivals, earth-bred textiles, and exclusive sales.
					</p>

					<form className="flex flex-col sm:flex-row gap-4 w-full max-w-lg">
						<input
							type="email"
							placeholder="Your email address"
							className="flex-grow border border-[#EBD9D6] p-5 outline-none focus:border-[#A2847F] bg-white text-[#111111]"
							required
						/>
						<button
							type="submit"
							className="px-10 py-5 bg-[#111111] text-white text-[13px] font-bold uppercase tracking-[0.2em] hover:bg-[#A2847F] transition-colors whitespace-nowrap"
						>
							Subscribe
						</button>
					</form>
				</div>
			</section>

		</main>
	);
}
