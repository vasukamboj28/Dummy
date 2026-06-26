import React from 'react';
import { Link } from 'react-router-dom';
import { Coffee, Instagram, Facebook, Twitter, Youtube, Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="drinkyard-footer" className="bg-stone-900 text-stone-300 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Brand & Mission Statement */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2.5 cursor-pointer">
              <div className="w-9 h-9 rounded-full bg-amber-600 flex items-center justify-center text-white">
                <Coffee className="w-5 h-5" />
              </div>
              <span className="font-serif text-xl font-bold tracking-tight text-white">
                DrinkYard<span className="text-amber-500 font-sans">.</span>
              </span>
            </Link>
            <p className="text-[14px] text-stone-400 leading-relaxed pt-2">
              Where Every Sip Tells a Story. Discover organic artisan coffee, dense natural milkshakes, refreshing fruit mojitos, and high-protein smoothies.
            </p>
            {/* Social handles list from the dataset */}
            <div className="flex items-center gap-3 pt-4">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noreferrer" 
                className="w-9 h-9 rounded-full bg-stone-800 flex items-center justify-center text-stone-400 hover:text-amber-500 hover:bg-stone-705 transition-colors"
                title="Instagram: @drinkyard"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noreferrer" 
                className="w-9 h-9 rounded-full bg-stone-800 flex items-center justify-center text-stone-400 hover:text-amber-500 hover:bg-stone-705 transition-colors"
                title="Facebook: DrinkYard"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noreferrer" 
                className="w-9 h-9 rounded-full bg-stone-800 flex items-center justify-center text-stone-400 hover:text-amber-500 hover:bg-stone-705 transition-colors"
                title="Twitter/X: @drinkyard"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a 
                href="https://youtube.com" 
                target="_blank" 
                rel="noreferrer" 
                className="w-9 h-9 rounded-full bg-stone-800 flex items-center justify-center text-stone-400 hover:text-amber-500 hover:bg-stone-705 transition-colors"
                title="YouTube: DrinkYard Official"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div>
            <h3 className="text-white font-semibold text-sm tracking-widest uppercase mb-5">Quick Links</h3>
            <ul className="space-y-3.5 text-sm">
              <li>
                <Link to="/" className="hover:text-amber-500 transition-colors block">
                  Home Page
                </Link>
              </li>
              <li>
                <Link to="/products" className="hover:text-amber-500 transition-colors block">
                  Explore Menu
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-amber-500 transition-colors block">
                  Our Story (About Us)
                </Link>
              </li>
              <li>
                <Link to="/blog" className="hover:text-amber-500 transition-colors block">
                  Beverage Blog
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-amber-500 transition-colors block">
                  Get In Touch
                </Link>
              </li>
            </ul>
          </div>

          {/* Opening Hours */}
          <div>
            <h3 className="text-white font-semibold text-sm tracking-widest uppercase mb-5">Opening Hours</h3>
            <ul className="space-y-2.5 text-sm text-stone-450">
              <li className="flex justify-between border-b border-stone-800 pb-2">
                <span>Monday - Friday</span>
                <span className="text-amber-505 font-medium">9:00 AM - 11:00 PM</span>
              </li>
              <li className="flex justify-between border-b border-stone-800 pb-2">
                <span>Saturday</span>
                <span className="text-amber-505 font-medium">9:00 AM - 11:00 PM</span>
              </li>
              <li className="flex justify-between pb-2">
                <span>Sunday</span>
                <span className="text-amber-505 font-medium">9:00 AM - 11:00 PM</span>
              </li>
              <li className="text-xs text-stone-500 pt-2 leading-relaxed">
                * Note: Fresh custom fruit shipments arrive at 8:30 AM daily for maximum raw flavor.
              </li>
            </ul>
          </div>

          {/* Official HQ Address */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold text-sm tracking-widest uppercase mb-1">DrinkYard HQ</h3>
            <div className="space-y-3.5 text-sm">
              <div className="flex gap-3">
                <MapPin className="w-5 h-5 text-amber-500 shrink-0" />
                <span className="leading-relaxed text-stone-300">
                  123 Beverage Street, Connaught Place, New Delhi, India - 110001
                </span>
              </div>
              <div className="flex gap-3 items-center">
                <Phone className="w-4 h-4 text-amber-500 shrink-0" />
                <a href="tel:+919876543210" className="hover:text-amber-500 transition-colors text-stone-300">
                  +91 98765 43210
                </a>
              </div>
              <div className="flex gap-3 items-center">
                <MapPin className="hidden" /> {/* keep the layout identical */}
                <Mail className="w-4 h-4 text-amber-500 shrink-0" />
                <a href="mailto:hello@drinkyard.com" className="hover:text-amber-500 transition-colors text-stone-300">
                  hello@drinkyard.com
                </a>
              </div>
            </div>
          </div>

        </div>

        <div className="mt-12 pt-8 border-t border-stone-800 text-center text-xs text-stone-500 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p>© 2026 DrinkYard. All Rights Reserved. Crafted with pure freshness in Connaught Place, New Delhi.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-stone-300 transition-colors">Privacy Policy</a>
            <span>•</span>
            <a href="#" className="hover:text-stone-300 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
