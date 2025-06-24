"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ShoppingBagIcon, UserIcon, MagnifyingGlassIcon, Bars3Icon } from '@heroicons/react/24/outline';
import MobileMenu from './MobileMenu';
import { useCart } from '@/context/CartContext';
import { signOut } from "firebase/auth";
import { auth } from "@/lib/firebase";
import { useAuth } from "@/context/AuthContext";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const { cartItems } = useCart();
  const { user } = useAuth();

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

          <div className="flex items-center space-x-4 relative">
            <button className="p-2 hover:bg-gray-800 rounded-full text-white">
              <MagnifyingGlassIcon className="h-6 w-6" />
            </button>
            <Link href="/cart" className="p-2 hover:bg-gray-800 rounded-full text-white relative">
              <ShoppingBagIcon className="h-6 w-6" />
              {cartItems.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                  {cartItems.length}
                </span>
              )}
            </Link>
            <div className="relative">
              <button
                className="p-2 hover:bg-gray-800 rounded-full text-white cursor-pointer"
                onClick={() => setShowUserMenu((prev) => !prev)}
              >
                <UserIcon className="h-6 w-6" />
              </button>
              {showUserMenu && user && (
                <div className="absolute right-0 mt-2 w-32 bg-white text-black rounded shadow-lg z-50">
                  <button
                    className="block w-full text-left px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    onClick={async () => {
                      await signOut(auth);
                      setShowUserMenu(false);
                    }}
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
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