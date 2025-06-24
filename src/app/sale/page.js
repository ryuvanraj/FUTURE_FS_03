"use client";

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const saleProducts = [
  // Men's Sale Items
  {
    id: 'sale-mens-1',
    name: "Adidas Air Zoom Pegasus",
    originalPrice: "$150",
    salePrice: "$89.97",
    discount: "40% Off",
    image: "/images/products/mens/shoes/product-4.jpeg",
    category: "Men's Running"
  },
  {
    id: 'sale-mens-2',
    name: "Adidas Dri-FIT Training Shirt",
    originalPrice: "$35",
    salePrice: "$24.97",
    discount: "28% Off",
    image: "/images/products/mens/apparel/product-1.jpeg",
    category: "Men's Training"
  },
  // Women's Sale Items
  {
    id: 'sale-womens-1',
    name: "Adidas Free RN",
    originalPrice: "$120",
    salePrice: "$79.97",
    discount: "33% Off",
    image: "/images/products/womens/shoes/product-2.jpeg",
    category: "Women's Running"
  },
  {
    id: 'sale-womens-2',
    name: "Adidas One Leggings",
    originalPrice: "$60",
    salePrice: "$39.97",
    discount: "33% Off",
    image: "/images/products/womens/apparel/product-1.jpeg",
    category: "Women's Training"
  },
  // Kids' Sale Items
  {
    id: 'sale-kids-1',
    name: "Adidas Team Hustle Kids",
    originalPrice: "$65",
    salePrice: "$44.97",
    discount: "30% Off",
    image: "/images/products/kids/shoes/product-2.jpeg",
    category: "Kids' Basketball"
  }
  // ... add more sale items
];

export default function SalePage() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = ["all", "Men's", "Women's", "Kids'"];

  const filteredProducts = selectedCategory === "all"
    ? saleProducts
    : saleProducts.filter(product => product.category.includes(selectedCategory));

  return (
    <div className="pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-red-600 text-white px-4 py-2 rounded-lg mb-8">
          <h2 className="text-xl font-bold">Extra 20% Off Sale Items</h2>
          <p>Use code EXTRA20 at checkout</p>
        </div>

        <h1 className="text-4xl font-bold mb-8">Sale</h1>
        
        <div className="flex gap-4 mb-8 overflow-x-auto pb-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full whitespace-nowrap ${
                selectedCategory === category
                  ? "bg-red-600 text-white"
                  : "bg-black hover:bg-black/80 text-white cursor-pointer"
              }`}
            >
              {category === "all" ? "All Sales" : category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <Link
              href={`/products/${product.id}`}
              key={product.id}
              className="group"
            >
              <div className="relative aspect-square mb-4 bg-gray-100 rounded-lg overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-2 left-2 bg-red-600 text-white px-2 py-1 text-sm rounded">
                  {product.discount}
                </div>
              </div>
              <h3 className="font-medium text-lg">{product.name}</h3>
              <p className="text-gray-600">{product.category}</p>
              <div className="flex items-center gap-2 mt-1">
                <p className="font-medium text-red-600">{product.salePrice}</p>
                <p className="text-gray-500 line-through text-sm">
                  {product.originalPrice}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}