export interface Product {
    id: string;
    name: string;
    price: number;
    salePrice: number | null;
    isSale: boolean;
    image: string;
    category: "women" | "men";
    description: string;
}

const images = [
    // "https://images.unsplash.com/photo-1515347619152-6d16e6d22b41?q=80&w=800&auto=format&fit=crop", // Santorini Dress
    "https://images.unsplash.com/photo-1552874869-5c39ec9288dc?q=80&w=800&auto=format&fit=crop", // Tulum Set
    // "https://images.unsplash.com/photo-1509631179647-0ca77331d09c?q=80&w=800&auto=format&fit=crop", // Amalfi Trousers
    "https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=800&auto=format&fit=crop", // Linen Shirt
    "https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=800&auto=format&fit=crop", // Beach Coverup
    "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1584273143981-41c073dfe8f8?q=80&w=800&auto=format&fit=crop",
];

const baseNames = ["Linen Sundress", "Loungewear Set", "Resort Trousers", "Breeze Button-Up", "Coastal Shorts", "Evening Wrap", "Beach Coverup", "Organic Tunic", "Summer Midi", "Tailored Linen Blazer"];

export const products: Product[] = Array.from({ length: 50 }).map((_, i) => {
    const isSale = i % 4 === 0; // Every 4th item is on sale
    const basePrice = 120 + (i * 5) % 150;

    return {
        id: (i + 1).toString(),
        name: `${i < 25 ? "Women's" : "Men's"} ${baseNames[i % baseNames.length]}`,
        price: basePrice,
        salePrice: isSale ? Math.floor(basePrice * 0.75) : null,
        isSale: isSale,
        image: images[i % images.length],
        category: i < 25 ? "women" : "men",
        description: "Breathable, undyed, and woven in Portugal. Earth-bred textiles designed for the slower rhythms of life. Fits true to size.",
    };
});
