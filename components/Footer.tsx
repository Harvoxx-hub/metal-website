"use client";

import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer id="contact" className="bg-dark-secondary border-t border-dark-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-8">
          {/* Logo and Description */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center space-x-3 mb-4 hover:opacity-80 transition-opacity">
              <div className="relative w-10 h-10">
                <Image
                  src="/images/logo/logo.png"
                  alt="Metal App Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-white font-bold text-xl">The Metal App</span>
            </Link>
            <p className="text-gray-400 text-sm">
              Real connections. No pictures. No pressure.
            </p>
          </div>

          {/* Links Column 1 */}
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#why-metal" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Why Metal
                </Link>
              </li>
              <li>
                <Link href="#how-it-works" className="text-gray-400 hover:text-white transition-colors text-sm">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="#testimonials" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                  News & Media
                </Link>
              </li>
            </ul>
          </div>

          {/* Links Column 2 */}
          <div>
            <h3 className="text-white font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/support" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/safety" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Safety
                </Link>
              </li>
            </ul>
          </div>

          {/* Links Column 3 */}
          <div>
            <h3 className="text-white font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/terms" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/cookies" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Cookies Policy
                </Link>
              </li>
              <li>
                <Link href="/social-child-protection-standard" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Child Protection
                </Link>
              </li>
              <li>
                <Link href="https://themetalapp.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Website
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-dark-border pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} The Metal App. All rights reserved.
          </p>
          <div className="flex space-x-6">
            {/* Social links can be added here */}
          </div>
        </div>
      </div>
    </footer>
  );
}
