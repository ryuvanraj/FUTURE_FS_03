/* eslint-disable @next/next/no-img-element */
"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/layout/Header";
import { CartProvider } from "@/context/CartContext";
import { featuredProducts } from '@/data/products';


const categories = [
	{ name: "Men", href: "/men", image: "/images/categories/Men.jpg" },
	{ name: "Women", href: "/women", image: "/images/categories/Women.jpg" },
	{ name: "Kids", href: "/kids", image: "/images/categories/Kids.jpg" },
];

export default function Home() {
	const { user } = useAuth();
	const router = useRouter();

	useEffect(() => {
		// Only redirect if user is NOT authenticated
		if (user === null) {
			router.replace("/signin"); // Redirect to sign in, not sign up
		}
	}, [user, router]);

	// While checking auth status or redirecting, show nothing
	if (user === null) {
		return null; // or a loading spinner
	}

	// If user is signed in, render the home page
	return (
		<>
			<CartProvider>
				<Header />
				<section className="relative h-screen w-screen overflow-hidden bg-black">
					<video
						src="/images/hero.mp4"
						alt="Adidas Hero"
						autoPlay
						loop
						muted
						playsInline
						className="absolute inset-0 w-full h-full object-cover"
					/>
				</section>

				{/* Categories */}
				<section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
					<h2 className="text-2xl font-bold mb-8">Shop by Category</h2>
					<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
						{categories.map((category) => (
							<Link
								key={category.name}
								href={category.href}
								className="group relative aspect-square overflow-hidden rounded-lg"
							>
								<img
									src={category.image}
									alt={category.name}
									className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
								/>
								{/* <div className="absolute inset-0  bg-opacity-80 flex items-center justify-center">
									<span className="text-white text-2xl font-bold">
										{category.name}
									</span>
								</div> */}
							</Link>
						))}
					</div>
				</section>

				<section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
					<h2 className="text-2xl font-bold mb-8">Featured Products</h2>
					<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
						{featuredProducts.map((product) => (
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
								</div>
								<h3 className="font-medium text-lg">{product.name}</h3>
								<p className="text-gray-600">{product.category}</p>
								<p className="font-medium mt-1">{product.price}</p>
							</Link>
						))}
					</div>
				</section>
			</CartProvider>
		</>
	);
}
