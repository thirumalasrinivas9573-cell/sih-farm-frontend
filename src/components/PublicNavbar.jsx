import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Button from './Button';

/**
 * Public Navigation Bar component shared across public pages.
 * Includes brand logo, page links, mobile menu toggle, and active state indicator.
 */
export default function PublicNavbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'How It Works', path: '/how-it-works' },
    { name: 'Features', path: '/features' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-stone-200 shadow-2xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Brand Logo & Name */}
          <Link to="/" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 rounded-xl bg-emerald-700 text-white flex items-center justify-center font-bold text-lg shadow-sm transition-transform group-hover:scale-105">
              🌱
            </div>
            <div className="flex flex-col">
              <span className="text-base font-extrabold text-stone-900 tracking-tight leading-none">
                AgriDecision
              </span>
              <span className="text-[10px] font-semibold text-emerald-800 tracking-wide uppercase mt-0.5">
                Farm Intelligence
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors px-2 py-1 rounded-md ${
                  isActive(link.path)
                    ? 'text-emerald-800 font-semibold bg-emerald-50'
                    : 'text-stone-600 hover:text-stone-900 hover:bg-stone-50'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Action CTAs (Desktop) */}
          <div className="hidden md:flex items-center gap-3">
            <Link to="/login">
              <Button variant="secondary" className="text-xs py-2 px-3.5">
                Log In
              </Button>
            </Link>
            <Link to="/signup">
              <Button variant="primary" className="text-xs py-2 px-4">
                Get Started
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-stone-600 hover:text-stone-900 hover:bg-stone-100 focus:outline-none focus:ring-2 focus:ring-emerald-600"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-stone-200 bg-white px-4 pt-3 pb-4 space-y-2">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setMobileMenuOpen(false)}
              className={`block px-3 py-2 rounded-lg text-base font-medium ${
                isActive(link.path)
                  ? 'text-emerald-800 bg-emerald-50 font-semibold'
                  : 'text-stone-700 hover:bg-stone-100'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-3 border-t border-stone-100 flex flex-col gap-2">
            <Link to="/login" onClick={() => setMobileMenuOpen(false)}>
              <Button variant="secondary" className="w-full justify-center">
                Log In
              </Button>
            </Link>
            <Link to="/signup" onClick={() => setMobileMenuOpen(false)}>
              <Button variant="primary" className="w-full justify-center">
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
