interface Product {
  id: number;
  name: string;
  description: string;
  price: string;
  category: string;
  rating: number;
  features: string[];
  image: string;
}

interface ProductCardProps {
  product: Product;
  onBuyNow: () => void;
}

export default function ProductCard({ product, onBuyNow }: ProductCardProps) {
  const fullStars = Math.floor(product.rating);
  const hasHalf = product.rating % 1 >= 0.5;

  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group overflow-hidden flex flex-col">
      {/* Image area */}
      <div className="relative overflow-hidden bg-gray-100 h-48">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          onError={(e) => {
            const img = e.target as HTMLImageElement;
            img.style.display = "none";
            const parent = img.parentElement;
            if (parent) {
              parent.style.background = "linear-gradient(135deg, #dbeafe 0%, #eff6ff 100%)";
            }
          }}
        />
        <div className="absolute top-3 left-3">
          <span className="bg-white/95 backdrop-blur-sm text-gray-700 text-xs font-semibold px-2.5 py-1 rounded-full shadow-sm border border-gray-100">
            {product.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        {/* Rating */}
        <div className="flex items-center gap-1 mb-2">
          {Array.from({ length: 5 }).map((_, i) => (
            <svg
              key={i}
              className={`w-3.5 h-3.5 ${i < fullStars ? "text-yellow-400" : "text-gray-200"}`}
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
          <span className="text-xs text-gray-500 ml-0.5">({product.rating})</span>
        </div>

        {/* Name + Price */}
        <div className="flex items-start justify-between gap-2 mb-2">
          <h3 className="font-bold text-gray-900 text-base group-hover:text-blue-600 transition-colors leading-tight">
            {product.name}
          </h3>
          <span className="text-base font-bold text-gray-900 whitespace-nowrap">{product.price}</span>
        </div>

        {/* Description */}
        <p className="text-xs text-gray-500 leading-relaxed mb-3 line-clamp-2">{product.description}</p>

        {/* Features */}
        <ul className="space-y-1 mb-4 flex-1">
          {product.features.map((f, i) => (
            <li key={i} className="flex items-start gap-1.5 text-xs text-gray-600">
              <svg className="w-3.5 h-3.5 text-blue-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
              </svg>
              {f}
            </li>
          ))}
        </ul>

        {/* Buttons */}
        <div className="flex gap-2 pt-3 border-t border-gray-100">
          <button
            onClick={onBuyNow}
            className="flex-1 bg-blue-600 text-white text-xs font-semibold py-2.5 px-3 rounded-xl hover:bg-blue-700 active:scale-[0.97] transition-all duration-150"
          >
            Add to Cart
          </button>
          <button
            onClick={onBuyNow}
            className="flex-1 border border-gray-200 text-gray-700 text-xs font-semibold py-2.5 px-3 rounded-xl hover:bg-gray-50 active:scale-[0.97] transition-all duration-150"
          >
            View
          </button>
        </div>
      </div>
    </div>
  );
}
