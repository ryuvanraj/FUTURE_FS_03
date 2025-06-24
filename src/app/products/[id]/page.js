"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useCart } from "@/context/CartContext";
import { use } from "react";
import { menProducts, womenProducts, kidsProducts, newProducts, saleProducts , featuredProducts } from "@/data/products";

export default function ProductPage({ params }) {
  const unwrappedParams = use(params);
  const [selectedSize, setSelectedSize] = useState(null);
  const { addToCart } = useCart();
  const router = useRouter();

  // Combine all products into one array and remove duplicates by ID
  const allProducts = [...new Map(
    [...menProducts, ...womenProducts, ...kidsProducts, ...newProducts, ...saleProducts, ...featuredProducts]
    .map(product => [product.id, product])
  ).values()];

  // Find the product from all products
  const product = allProducts.find(p => p.id === unwrappedParams?.id);

  if (!product) {
    return (
      <div className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-2xl font-bold">Product not found</h1>
          <button 
            onClick={() => router.back()} 
            className="mt-4 text-blue-600 hover:underline"
          >
            Go back
          </button>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert("Please select a size");
      return;
    }

    const numericPrice = typeof product.price === "string"
      ? Number(product.price.replace(/[^0-9.]/g, ""))
      : product.price;

    const cartItem = {
      id: product.id,
      name: product.name,
      price: numericPrice,
      image: product.image,
      size: selectedSize,
      originalPrice: product.originalPrice,
      salePrice: product.salePrice,
      discount: product.discount
    };

    addToCart(cartItem);
    router.push("/cart");
  };

  const getSizes = (productId) => {
    if (productId.includes('kids')) {
      return ["1", "2", "3", "4", "5", "6"];
    }
    return ["7", "8", "9", "10", "11", "12"];
  };

  return (
    <div className="pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="relative aspect-square bg-gray-100 rounded-lg">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover"
            />
          </div>

          <div>
            <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
            
            {product.salePrice ? (
              <div className="mb-4">
                <p className="text-2xl font-medium text-red-600">{product.salePrice}</p>
                <p className="text-lg text-gray-500 line-through">{product.originalPrice}</p>
                <p className="text-red-600 font-medium">{product.discount}</p>
              </div>
            ) : (
              <p className="text-2xl font-medium mb-4">{product.price}</p>
            )}

            <div className="mb-8">
              <h2 className="text-lg font-medium mb-4">Select Size</h2>
              <div className="grid grid-cols-3 gap-2">
                {getSizes(product.id).map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`py-3 border rounded ${
                      selectedSize === size
                        ? "border-black"
                        : "border-gray-300 hover:border-gray-400"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <button
              onClick={handleAddToCart}
              className="w-full bg-black text-white py-4 rounded-full hover:bg-gray-800 transition"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
