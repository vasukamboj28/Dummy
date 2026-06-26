import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Coffee, ShoppingBag, Menu, X, Clock } from 'lucide-react';

interface NavbarProps {
  cartItemsCount: number;
  setIsCartOpen: (open: boolean) => void;
}

export default function Navbar({ cartItemsCount, setIsCartOpen }: NavbarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const activePath = location.pathname;

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/products', label: 'Products' },
    { path: '/about', label: 'About Us' },
    { path: '/blog', label: 'Blog' },
    { path: '/contact', label: 'Contact' },
  ];

  const handleNavClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav id="drinkyard-navbar" className="sticky top-0 z-40 bg-natural-bg/95 backdrop-blur-md border-b border-natural-sage/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Logo */}
          <Link 
            to="/" 
            id="navbar-logo"
            onClick={handleNavClick}
            className="flex items-baseline gap-2 cursor-pointer group select-none"
          >
            <span className="font-serif text-3xl font-bold italic text-natural-sage group-hover:opacity-90 transition-all duration-300">
              DrinkYard
            </span>
            <span className="text-[10px] uppercase tracking-widest text-[#3D2B1F]/60 font-semibold font-sans">
              Est. 2022
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <div id="navbar-links-desktop" className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => {
              const isActive = activePath === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  id={`navlink-desk-${link.path.replace('/', 'root')}`}
                  onClick={handleNavClick}
                  className={`px-4 py-2 text-sm font-medium uppercase tracking-wider transition-all duration-300 relative ${
                    isActive
                      ? 'text-natural-sage font-bold'
                      : 'text-[#3D2B1F]/70 hover:text-natural-text hover:bg-natural-soft/30 rounded-lg'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-natural-sage" />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Action Zone (Cart Indicator + App Status) */}
          <div id="navbar-actions" className="flex items-center gap-4">
            {/* Quick Timing Hint */}
            <div className="hidden lg:flex items-center gap-1.5 text-xs text-[#3D2B1F]/80 font-medium px-3.5 py-1.5 bg-natural-soft rounded-full border border-natural-sage/10 font-sans">
              <Clock className="w-3.5 h-3.5 text-natural-sage" />
              <span>Daily: 9 AM — 11 PM</span>
            </div>

            {/* Cart Button */}
            <button
              id="navbar-cart-trigger"
              onClick={() => setIsCartOpen(true)}
              className="relative p-2.5 rounded-full bg-natural-sage text-white hover:opacity-90 transition-all cursor-pointer shadow-sm flex items-center justify-center"
              aria-label="Open Cart"
            >
              <ShoppingBag className="w-5 h-5" />
              {cartItemsCount > 0 && (
                <span className="absolute -top-1 -right-1.5 min-w-[20px] h-5 rounded-full bg-[#3D2B1F] border-2 border-[#fdfbf7] text-[10px] font-bold text-white flex items-center justify-center px-1 animate-scale-in">
                  {cartItemsCount}
                </span>
              )}
            </button>

            {/* Mobile Menu Toggle Button */}
            <button
              id="navbar-mobile-toggle"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-lg text-natural-sage hover:bg-natural-soft/50 transition-colors cursor-pointer"
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {isMobileMenuOpen && (
        <div id="navbar-mobile-menu" className="md:hidden border-t border-natural-sage/10 bg-natural-bg shadow-xl animate-fade-in">
          <div className="px-4 py-3 space-y-1.5">
            {navLinks.map((link) => {
              const isActive = activePath === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  id={`navlink-mob-${link.path.replace('/', 'root')}`}
                  onClick={handleNavClick}
                  className={`w-full text-left px-4 py-3 rounded-lg text-sm uppercase tracking-wider font-semibold transition-colors block ${
                    isActive
                      ? 'text-natural-sage bg-natural-soft/70'
                      : 'text-[#3D2B1F]/80 hover:text-natural-text hover:bg-natural-soft/30'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <div className="pt-3 border-t border-natural-sage/10 flex items-center gap-2 text-[#3D2B1F]/60 text-xs px-4">
              <Clock className="w-4 h-4 text-natural-sage" />
              <span>Served Fresh: 9:00 AM to 11:00 PM</span>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

