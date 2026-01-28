"use client";

import Link from "next/link";
import Image from "next/image";
import { Search, Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { cn } from "../utils/cn";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path: string) => pathname === path;

  const navLinks = [
    { name: "Browse Suppliers", href: "/browse" },
    { name: "How It Works", href: "/how-it-works" },
    { name: "Sign Up", href: "/signup" },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 backdrop-blur-md border-b border-slate-100 shadow-sm' : 'bg-transparent'}`}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center flex-shrink-0">
            <Link href="/" className="flex items-center gap-2">
              <span className="text-2xl font-black tracking-tighter text-slate-950 font-heading">
                bechoHub
              </span>
            </Link>
          </div>

          {/* Desktop Navigation - Just Get Started */}
          <div className="hidden md:flex items-center z-50">
            <Link
              href="/signup"
              className="inline-flex items-center justify-center rounded-full bg-slate-950 px-8 py-3 text-sm font-bold text-white shadow-xl shadow-slate-200 hover:bg-slate-800 transition-all active:scale-95"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-slate-900 p-2"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-40 bg-white md:hidden flex flex-col pt-24 px-8"
          >
            <div className="flex flex-col h-full justify-center items-center gap-12">
              <Link
                href="/"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-6xl font-black tracking-tightest text-slate-950"
              >
                bechoHub
              </Link>
              <Link
                href="/signup"
                onClick={() => setIsMobileMenuOpen(false)}
                className="inline-flex items-center justify-center rounded-full bg-slate-950 px-12 py-5 text-xl font-bold text-white shadow-2xl shadow-slate-200 transition-all active:scale-95"
              >
                Get Started
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
