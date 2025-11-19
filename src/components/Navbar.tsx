"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Heart } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import PequiIcon from "./PequiIcon";

const navLinks = [
  { href: "/", label: "Início" },
  { href: "/demo", label: "Demo Interativa" },
  { href: "/video-demo", label: "Video Demo" },
  { href: "/pitch", label: "Pitch" },
  { href: "/sobre", label: "Sobre" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="group-hover:scale-110 transition-transform">
              <PequiIcon size={32} />
            </div>
            <div>
              <span className="text-xl font-bold text-ipe-dark">Memória Viva</span>
              <span className="text-xl font-bold text-cerrado-dark">+</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-neutral-dark hover:text-ipe-dark font-medium transition-colors relative group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-ipe-dark group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
            <Link
              href="/demo"
              className="bg-gradient-to-r from-ipe to-ipe-dark text-white px-6 py-2.5 rounded-full font-medium hover:opacity-90 transition-opacity shadow-lg"
            >
              Ver Demo
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-neutral-dark hover:text-ipe-dark transition-colors"
            aria-label="Menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden"
            >
              <div className="py-4 space-y-3">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="block py-2 px-4 text-neutral-dark hover:bg-ipe-light/20 hover:text-ipe-dark rounded-lg transition-colors font-medium"
                  >
                    {link.label}
                  </Link>
                ))}
                <Link
                  href="/demo"
                  onClick={() => setIsOpen(false)}
                  className="block bg-gradient-to-r from-ipe to-ipe-dark text-white px-4 py-3 rounded-lg font-medium text-center shadow-lg"
                >
                  Ver Demo
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Decorative bottom border */}
      <div className="h-1 bg-gradient-to-r from-cerrado via-ipe to-wisdom" />
    </nav>
  );
}
