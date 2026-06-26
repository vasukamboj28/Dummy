/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomeView from './components/HomeView';
import ProductsView from './components/ProductsView';
import AboutView from './components/AboutView';
import BlogView from './components/BlogView';
import ContactView from './components/ContactView';
import CartDrawer from './components/CartDrawer';
import SEO from './components/SEO';
import { CartItem } from './types';

export default function App() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const location = useLocation();

  // Load cart from localStorage if present
  useEffect(() => {
    try {
      const savedCart = localStorage.getItem('drinkyard_cart');
      if (savedCart) {
        setCartItems(JSON.parse(savedCart));
      }
    } catch (e) {
      console.error('Failed to load cart from local persistence', e);
    }
  }, []);

  // Save cart changes
  const saveCart = (updatedCart: CartItem[]) => {
    setCartItems(updatedCart);
    try {
      localStorage.setItem('drinkyard_cart', JSON.stringify(updatedCart));
    } catch (e) {
      console.error('Failed to save cart to local persistence', e);
    }
  };

  const handleAddToCart = (newItem: CartItem) => {
    // Check if item already exists with the same customizer tags (product id, sweetness, ice)
    const existingIndex = cartItems.findIndex(
      (item) => 
        item.product.id === newItem.product.id &&
        item.sweetness === newItem.sweetness &&
        item.ice === newItem.ice
    );

    if (existingIndex > -1) {
      const updated = [...cartItems];
      updated[existingIndex].quantity += 1;
      saveCart(updated);
    } else {
      saveCart([...cartItems, newItem]);
    }
  };

  const handleUpdateQuantity = (idx: number, change: number) => {
    const updated = [...cartItems];
    const newQty = updated[idx].quantity + change;
    if (newQty <= 0) {
      updated.splice(idx, 1);
    } else {
      updated[idx].quantity = newQty;
    }
    saveCart(updated);
  };

  const handleRemoveItem = (idx: number) => {
    const updated = [...cartItems];
    updated.splice(idx, 1);
    saveCart(updated);
  };

  const handleClearCart = () => {
    saveCart([]);
  };

  const cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  // Smooth entry page animation parameters
  const pageVariants = {
    initial: { opacity: 0, y: 15 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.35, ease: 'easeOut' } },
    exit: { opacity: 0, y: -15, transition: { duration: 0.2 } },
  };

  return (
    <div className="flex flex-col min-h-screen bg-natural-bg font-sans text-natural-text selection:bg-natural-soft selection:text-natural-text antialiased border-[8px] border-natural-sage/10">
      {/* Premium Sticky Top Ribbon for Brand Aesthetics */}
      <div className="bg-natural-sage text-[#fdfbf7] py-2 text-center text-[10.5px] font-semibold tracking-widest uppercase px-4 flex justify-center items-center gap-1.5 shrink-0 select-none border-b border-natural-sage/20">
        <span className="inline-block w-2 h-2 rounded-full bg-natural-soft animate-pulse" />
        DELIVERING FRESHLY SHAKEN ARTISAN DRINKS ACROSS NEW DELHI • FRESH INGREDIENTS ALWAYS
      </div>

      {/* Styled Navbar */}
      <Navbar 
        cartItemsCount={cartCount}
        setIsCartOpen={setIsCartOpen}
      />

      {/* Dynamic Route View Panel with Smooth Layout Animations */}
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <Routes location={location}>
            <Route
              path="/"
              element={
                <motion.div
                  key="home"
                  variants={pageVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                >
                  <SEO
                    title="DrinkYard | Premium Artisan Coffee & Beverage Lounge CP"
                    description="Discover organic artisan coffees, dense natural milkshakes, refreshing fruit mojitos, and high-protein smoothies in Connaught Place, New Delhi. Fresh daily ingredients!"
                  />
                  <HomeView />
                </motion.div>
              }
            />
            <Route
              path="/products"
              element={
                <motion.div
                  key="products"
                  variants={pageVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                >
                  <SEO
                    title="Beverage Menu & Products — DrinkYard Connaught Place"
                    description="Custom-brewed espresso cold coffees, hand-muddled fruit mojitos, real gelato-thickened milkshakes, and nutritious vegan smoothies."
                  />
                  <ProductsView onAddToCart={handleAddToCart} />
                </motion.div>
              }
            />
            <Route
              path="/about"
              element={
                <motion.div
                  key="about"
                  variants={pageVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                >
                  <SEO
                    title="Our Story — DrinkYard CP New Delhi"
                    description="Our timeline at DrinkYard. Sourcing high-quality organic beans directly from ethical local farms for standard quality since 2022."
                  />
                  <AboutView />
                </motion.div>
              }
            />
            <Route
              path="/blog"
              element={
                <motion.div
                  key="blog"
                  variants={pageVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                >
                  <SEO
                    title="The Beverage Chronicle — Coffee & Wellness Blog | DrinkYard"
                    description="Learn expert coffee extraction mechanics, mixology chemistry, seed-to-cup secrets, and nutrition wisdom from our master CP baristas."
                  />
                  <BlogView />
                </motion.div>
              }
            />
            <Route
              path="/contact"
              element={
                <motion.div
                  key="contact"
                  variants={pageVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                >
                  <SEO
                    title="Contact DrinkYard CP New Delhi | Catering & Parties"
                    description="Reach out to DrinkYard for catering inquiries, CP cafe directions, feedback, or custom group beverage requirements."
                  />
                  <ContactView />
                </motion.div>
              }
            />
            {/* Catch-all client-side route fallback to Home */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </AnimatePresence>
      </main>

      {/* Interactive Cart Drawer Panel */}
      <CartDrawer 
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />

      {/* Structured Multi-column Footer */}
      <Footer />
    </div>
  );
}
