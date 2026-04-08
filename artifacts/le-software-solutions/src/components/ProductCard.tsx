import { useState } from "react";

interface Product {
  id: number;
  name: string;
  description: string;
  price: string;
  category: string;
  rating: number;
  features: string[];
  icon: string;
  bgColor: string;
}

interface ProductCardProps {
  product: Product;
  onBuyNow: () => void;
}

export default function ProductCard({ product, onBuyNow }: ProductCardProps) {
  const [added, setAdded] = useState(false);

  const handleAddToCart = () => {
    onBuyNow();
  };

  const stars = Array.from({ length: 5 }, (_, i) => i < Math.floor(product.rating));

  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group overflow-hidden flex flex-col">
      <div className={`h-48 flex items-center justify-center ${product.bgColor} relative overflow-hidden`}>
        <div className="text-6xl">{product.icon}</div>
        <div className="absolute top-3 left-3">
          <span className="bg-white/90 text-gray-700 text-xs font-medium px-2.5 py-1 rounded-full">
            {product.category}
          </span>
        </div>
      </div>

      <div className="p-5 flex flex-col flex-1">
        <div className="flex items-center gap-1 mb-2">
          {stars.map((filled, i) => (
            <svg key={i} className={`w-3.5 h-3.5 ${filled ? "text-yellow-400" : "text-gray-200"}`} fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
          <span className="text-xs text-gray-500 ml-1">({product.rating})</span>
        </div>

        <h3 className="font-bold text-gray-900 text-base mb-1 group-hover:text-blue-600 transition-colors">
          {product.name}
        </h3>

        <p className="text-sm text-gray-500 mb-3 leading-relaxed line-clamp-2">{product.description}</p>

        <ul className="space-y-1 mb-4 flex-1">
          {product.features.slice(0, 3).map((f, i) => (
            <li key={i} className="flex items-start gap-1.5 text-xs text-gray-600">
              <svg className="w-3.5 h-3.5 text-blue-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
              </svg>
              {f}
            </li>
          ))}
        </ul>

        <div className="flex items-center justify-between mt-auto pt-3 border-t border-gray-100">
          <span className="text-xl font-bold text-gray-900">{product.price}</span>
          <div className="flex gap-2">
            <button
              onClick={handleAddToCart}
              className="bg-blue-600 text-white text-xs font-semibold px-3 py-2 rounded-lg hover:bg-blue-700 active:scale-[0.97] transition-all duration-150"
            >
              Add to Cart
            </button>
            <button
              onClick={onBuyNow}
              className="border border-gray-200 text-gray-700 text-xs font-semibold px-3 py-2 rounded-lg hover:bg-gray-50 active:scale-[0.97] transition-all duration-150"
            >
              View
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
