"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { HiMenu, HiX } from "react-icons/hi";
import CTAButton from "./CTAButton";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-dark/98 backdrop-blur-md border-b border-dark-border shadow-lg" 
          : "bg-dark/95 backdrop-blur-sm border-b border-dark-border/50"
      }`}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity z-50">
            <div className="relative w-10 h-10 lg:w-12 lg:h-12">
              <Image
                src="/images/logo/logo.png"
                alt="Metal App Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <span className="text-white font-bold text-xl lg:text-2xl">The Metal App</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            <Link 
              href="#why-metal" 
              className="text-gray-300 hover:text-white transition-colors text-sm lg:text-base font-medium"
            >
              Why Metal
            </Link>
            <Link 
              href="/linkup" 
              className="text-gray-300 hover:text-white transition-colors text-sm lg:text-base font-medium"
            >
              Linkup
            </Link>
            <Link 
              href="#testimonials" 
              className="text-gray-300 hover:text-white transition-colors text-sm lg:text-base font-medium"
            >
              Testimonials
            </Link>
            <Link 
              href="/contact" 
              className="text-gray-300 hover:text-white transition-colors text-sm lg:text-base font-medium"
            >
              Contact Us
            </Link>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <CTAButton variant="header" store="both" />
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white p-2 z-50"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <HiX className="w-6 h-6" />
            ) : (
              <HiMenu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-4 border-t border-dark-border animate-in slide-in-from-top">
            <Link
              href="#why-metal"
              className="block text-gray-300 hover:text-white transition-colors text-base font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Why Metal
            </Link>
            <Link
              href="/linkup"
              className="block text-gray-300 hover:text-white transition-colors text-base font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Linkup
            </Link>
            <Link
              href="#testimonials"
              className="block text-gray-300 hover:text-white transition-colors text-base font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Testimonials
            </Link>
            <Link
              href="/contact"
              className="block text-gray-300 hover:text-white transition-colors text-base font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact Us
            </Link>
            <div className="pt-4 border-t border-dark-border">
              <CTAButton variant="primary" store="both" />
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
