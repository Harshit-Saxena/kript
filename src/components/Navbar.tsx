"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Logo } from "./Logo";

const navLinks = [
  { href: "/coins", label: "Cryptocurrencies" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "#", label: "Exchanges" },
  { href: "#", label: "Heatmap" },
  { href: "#", label: "News" },
];

export function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => setMounted(true), []);

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md dark:bg-navy-950/90 bg-white/90 border-b dark:border-white/10 border-gray-200">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between gap-4">
        {/* Logo */}
        <Link href="/" className="shrink-0">
          <Logo />
        </Link>

        {/* Desktop nav links */}
        <div className="hidden lg:flex items-center gap-1 flex-1">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="px-3 py-2 rounded-lg text-sm font-medium dark:text-gray-400 text-gray-600 dark:hover:text-white hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-white/5 transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Right side */}
        <div className="flex items-center gap-2">
          {/* Theme toggle */}
          {mounted && (
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 rounded-lg dark:bg-navy-800/60 bg-gray-100 dark:hover:bg-navy-700/60 hover:bg-gray-200 transition-colors dark:border-white/10 border border-gray-200"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <svg className="w-4 h-4 text-cyan-400" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <svg className="w-4 h-4 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                </svg>
              )}
            </button>
          )}

          {/* Auth buttons */}
          <Link
            href="/login"
            className="hidden sm:flex px-4 py-2 rounded-full text-sm font-semibold dark:text-gray-300 text-gray-700 dark:hover:text-white hover:text-gray-900 dark:border-white/20 border border-gray-300 dark:hover:border-white/40 hover:border-gray-400 transition-all shrink-0"
          >
            Log In
          </Link>
          <Link
            href="/signup"
            className="hidden sm:flex px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500 to-teal-400 hover:from-cyan-400 hover:to-teal-300 text-white text-sm font-semibold transition-all shadow-lg shadow-cyan-500/20 shrink-0 whitespace-nowrap"
          >
            Sign Up
          </Link>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden p-2 rounded-lg dark:bg-navy-800/60 bg-gray-100 dark:border-white/10 border border-gray-200 transition-colors"
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <svg className="w-4 h-4 dark:text-gray-300 text-gray-600" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-4 h-4 dark:text-gray-300 text-gray-600" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {menuOpen && (
        <div className="lg:hidden border-t dark:border-white/10 border-gray-200 dark:bg-navy-950/98 bg-white/98 backdrop-blur-md">
          <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="px-3 py-2.5 rounded-lg text-sm font-medium dark:text-gray-300 text-gray-700 dark:hover:text-white hover:text-gray-900 dark:hover:bg-white/5 hover:bg-gray-100 transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-3 pt-3 border-t dark:border-white/10 border-gray-200 flex gap-2">
              <Link
                href="/login"
                onClick={() => setMenuOpen(false)}
                className="flex-1 px-4 py-2.5 rounded-full dark:border-white/20 border border-gray-300 dark:text-gray-300 text-gray-700 text-sm font-semibold text-center"
              >
                Log In
              </Link>
              <Link
                href="/signup"
                onClick={() => setMenuOpen(false)}
                className="flex-1 px-4 py-2.5 rounded-full bg-gradient-to-r from-cyan-500 to-teal-400 text-white text-sm font-semibold text-center"
              >
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
