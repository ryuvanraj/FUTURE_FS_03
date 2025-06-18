"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ShoppingBagIcon, UserIcon, MagnifyingGlassIcon, Bars3Icon } from '@heroicons/react/24/outline';
import MobileMenu from './MobileMenu';
import { useCart } from '@/context/CartContext';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { cartItems } = useCart(); // Changed from cart to cartItems

  const navigation = [
    { name: 'New & Featured', href: '/new' },
    { name: 'Men', href: '/men' },
    { name: 'Women', href: '/women' },
    { name: 'Kids', href: '/kids' },
    { name: 'Sale', href: '/sale' },
  ];

  return (
    <header className="fixed top-0 w-full bg-black text-white z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <button
              type="button"
              className="p-2 -ml-2 md:hidden hover:bg-gray-800 rounded-full text-white"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <Bars3Icon className="h-6 w-6" />
            </button>
            <Link href="/" className="flex-shrink-0">
              <Image 
                src="/images/logo/adidas-logo.svg" 
                alt="adidas" 
                width={60} 
                height={24} 
                priority
              />
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link 
                key={item.name}
                href={item.href}
                className="text-sm font-medium hover:text-gray-300"
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            <button className="p-2 hover:bg-gray-800 rounded-full text-white">
              <MagnifyingGlassIcon className="h-6 w-6" />
            </button>
            <Link href="/cart" className="p-2 hover:bg-gray-800 rounded-full text-white relative">
              <ShoppingBagIcon className="h-6 w-6" />
              {cartItems.length > 0 && ( // Changed from cart.length to cartItems.length
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                  {cartItems.length}
                </span>
              )}
            </Link>
            <Link href="/account" className="p-2 hover:bg-gray-800 rounded-full text-white">
              <UserIcon className="h-6 w-6" />
            </Link>
          </div>
        </div>
      </nav>

      <MobileMenu 
        isOpen={isMobileMenuOpen} 
        setIsOpen={setIsMobileMenuOpen}
        navigation={navigation}
      />
    </header>
  );
}