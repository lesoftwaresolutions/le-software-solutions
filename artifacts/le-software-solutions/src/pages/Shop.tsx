import { useState } from "react";
import ProductCard from "@/components/ProductCard";
import ModalPopup from "@/components/ModalPopup";

const products = [
  {
    id: 1,
    name: "Laptop Stand",
    description: "Ergonomic aluminium laptop stand with adjustable height and angle. Keeps your laptop cool and positions your screen at the perfect eye level for comfortable, productive work.",
    price: "£34.99",
    category: "Accessories",
    rating: 4.8,
    features: [
      "Adjustable height & angle",
      "Aluminium construction",
      "Non-slip silicone pads",
    ],
    image: "/images/laptop-stand.jpg",
  },
  {
    id: 2,
    name: "Power Bank",
    description: "High-capacity 20,000mAh portable power bank with fast charging and dual USB-A and USB-C ports. Compact enough to charge multiple devices simultaneously.",
    price: "£29.99",
    category: "Electronics",
    rating: 4.8,
    features: [
      "20,000mAh capacity",
      "USB-C support",
      "Fast charging 18W PD",
    ],
    image: "/images/power-bank.jpg",
  },
  {
    id: 3,
    name: "Smart Door Bell",
    description: "Wi-Fi enabled smart doorbell with 1080p HD video, two-way audio, and motion detection. Get instant notifications on your phone when someone is at your door.",
    price: "£59.99",
    category: "Smart Home",
    rating: 4.8,
    features: [
      "1080p HD video",
      "Two-way audio",
      "Motion detection alerts",
    ],
    image: "/images/smart-doorbell.jpg",
  },
  {
    id: 4,
    name: "Indoor Security Camera",
    description: "Compact indoor security camera with 360-degree pan and tilt, 2K resolution, and smart AI person detection. Monitor your home from anywhere with the companion app.",
    price: "£44.99",
    category: "Smart Home",
    rating: 4.8,
    features: [
      "2K resolution",
      "360° pan & tilt",
      "AI person detection",
    ],
    image: "/images/security-camera.jpg",
  },
];

export default function Shop() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <main>
      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-extrabold mb-3">Shop</h1>
          <p className="text-gray-300 text-lg">Handpicked tech essentials for your home and office</p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Toolbar */}
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-gray-100">
          <div>
            <h2 className="text-base font-semibold text-gray-800">All Products</h2>
            <p className="text-gray-400 text-xs mt-0.5">{products.length} products available</p>
          </div>
          <button
            onClick={() => setModalOpen(true)}
            className="flex items-center gap-2 bg-gray-900 text-white px-5 py-2.5 rounded-xl text-sm font-semibold hover:bg-gray-800 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            Cart
          </button>
        </div>

        {/* Product grid — 4 columns on large screens, matching the PDF */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onBuyNow={() => setModalOpen(true)}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 bg-blue-50 border border-blue-100 rounded-2xl p-8 text-center">
          <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-7 h-7 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
            </svg>
          </div>
          <h3 className="font-bold text-gray-900 text-lg mb-2">Looking for custom software solutions?</h3>
          <p className="text-gray-600 text-sm mb-4 max-w-md mx-auto">
            Beyond tech products, we specialise in custom digital solutions. Visit our services page to learn more.
          </p>
          <a
            href="/services"
            className="inline-flex items-center gap-1.5 text-blue-600 font-semibold text-sm hover:text-blue-700 transition-colors"
          >
            View Our Services
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>

      <ModalPopup isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </main>
  );
}
