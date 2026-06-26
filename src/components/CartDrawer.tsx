import React, { useState } from 'react';
import { X, Plus, Minus, Trash2, ShoppingBag, Truck, Check, Sparkles, FileText } from 'lucide-react';
import { CartItem } from '../types';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onUpdateQuantity: (index: number, change: number) => void;
  onRemoveItem: (index: number) => void;
  onClearCart: () => void;
}

export default function CartDrawer({
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart
}: CartDrawerProps) {
  const [deliveryType, setDeliveryType] = useState<'delivery' | 'pickup'>('pickup');
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [deliveryAddress, setDeliveryAddress] = useState('');
  const [checkoutStep, setCheckoutStep] = useState<'cart' | 'receipt'>('cart');
  const [confirmedOrder, setConfirmedOrder] = useState<{
    orderId: string;
    items: CartItem[];
    subtotal: number;
    gst: number;
    deliveryFee: number;
    total: number;
    name: string;
    phone: string;
    timeEstimate: string;
    type: 'delivery' | 'pickup';
  } | null>(null);

  if (!isOpen) return null;

  const itemsSubtotal = cartItems.reduce((acc, item) => acc + item.product.price * item.quantity, 0);
  const gst = Math.round(itemsSubtotal * 0.05); // 5% GST
  const deliveryFee = deliveryType === 'delivery' ? 50 : 0;
  const grandTotal = itemsSubtotal + gst + deliveryFee;

  const handleTriggerCheckout = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customerName.trim() || !customerPhone.trim()) {
      alert('Please enter your Name and Mobile Number to place the order.');
      return;
    }
    if (deliveryType === 'delivery' && !deliveryAddress.trim()) {
      alert('Please fill in your Delivery Address for Connaught Place shipment.');
      return;
    }

    const randomId = 'DY-' + Math.floor(1000 + Math.random() * 9000);
    setConfirmedOrder({
      orderId: randomId,
      items: [...cartItems],
      subtotal: itemsSubtotal,
      gst,
      deliveryFee,
      total: grandTotal,
      name: customerName,
      phone: customerPhone,
      timeEstimate: deliveryType === 'delivery' ? '25 - 35 mins' : '10 - 15 mins',
      type: deliveryType
    });

    setCheckoutStep('receipt');
  };

  const handleFinishReceipt = () => {
    // Reset orders state
    onClearCart();
    setCustomerName('');
    setCustomerPhone('');
    setDeliveryAddress('');
    setCheckoutStep('cart');
    setConfirmedOrder(null);
    onClose();
  };

  return (
    <div id="cart-drawer-overlay" className="fixed inset-0 z-50 overflow-hidden">
      
      {/* Absolute Backdrop dim */}
      <div 
        className="absolute inset-0 bg-[#3D2B1F]/60 backdrop-blur-xs transition-opacity" 
        onClick={handleFinishReceipt} 
      />

      <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
        <div id="cart-drawer-content" className="w-[360px] sm:w-[500px] max-w-md bg-[#fdfbf7] shadow-2xl flex flex-col justify-between animate-slide-left relative z-10 h-full">
          
          {/* Active Reader Steps */}
          {checkoutStep === 'cart' ? (
            <>
              {/* CART ITEMS STEP */}
              <div className="flex flex-col h-full justify-between">
                
                {/* Header */}
                <div className="px-5 py-5 border-b border-natural-sage/10 flex items-center justify-between shrink-0 bg-white">
                  <div className="flex items-center gap-2">
                    <ShoppingBag className="w-5.5 h-5.5 text-natural-sage animate-pulse" />
                    <h2 className="font-serif text-lg sm:text-xl font-bold italic text-[#3D2B1F]">Your Drink Order</h2>
                    <span className="text-[11px] px-2.5 py-0.5 rounded-full bg-natural-soft text-natural-sage font-bold ml-1">
                      {cartItems.length}
                    </span>
                  </div>
                  <button
                    onClick={onClose}
                    className="p-1 px-1.5 rounded-lg hover:bg-natural-soft text-natural-text/50 hover:text-[#3D2B1F] cursor-pointer"
                  >
                    <X className="w-5.5 h-5.5" />
                  </button>
                </div>

                {/* Main Scroll content */}
                <div className="flex-1 overflow-y-auto p-5 space-y-6">
                  {cartItems.length > 0 ? (
                    <>
                      {/* Products List */}
                      <div className="space-y-4" id="cart-items-scroller">
                        {cartItems.map((item, idx) => (
                          <div
                            key={idx}
                            id={`cart-item-row-${idx}`}
                            className="flex gap-3.5 p-3.5 rounded-2xl border border-natural-sage/10 bg-white/60 relative group"
                          >
                            <img
                              src={item.product.image}
                              alt={item.product.name}
                              className="w-16 h-16 rounded-xl object-cover border border-natural-sage/10"
                              referrerPolicy="no-referrer"
                            />
                            
                            <div className="flex-1 space-y-1">
                              <h4 className="font-serif text-sm font-bold text-[#3D2B1F] leading-tight">
                                {item.product.name}
                              </h4>
                              
                              <p className="text-[10px] text-natural-text/70 leading-relaxed font-semibold font-sans">
                                Sweetness: <span className="text-natural-sage">{item.sweetness}</span> | Ice: <span className="text-natural-sage">{item.ice}</span>
                              </p>

                              <div className="flex items-center justify-between pt-1">
                                <span className="font-sans text-[11px] font-bold text-[#3D2B1F]">
                                  ₹{item.product.price}
                                </span>
                                
                                {/* Qty adjustments */}
                                <div className="flex items-center border border-natural-sage/10 bg-white rounded-lg px-1 py-0.5">
                                  <button
                                    onClick={() => onUpdateQuantity(idx, -1)}
                                    className="p-1 text-natural-text hover:text-natural-sage cursor-pointer"
                                    title="Decrease"
                                  >
                                    <Minus className="w-3 h-3" />
                                  </button>
                                  <span className="px-2 text-[10px] font-bold text-[#3D2B1F]">
                                    {item.quantity}
                                  </span>
                                  <button
                                    onClick={() => onUpdateQuantity(idx, 1)}
                                    className="p-1 text-natural-text hover:text-natural-sage cursor-pointer"
                                    title="Increase"
                                  >
                                    <Plus className="w-3 h-3" />
                                  </button>
                                </div>
                              </div>
                            </div>

                            {/* Delete specific */}
                            <button
                              onClick={() => onRemoveItem(idx)}
                              className="absolute top-2 right-2 p-1.5 text-natural-text/45 hover:text-rose-600 rounded-lg hover:bg-white border border-transparent hover:border-natural-sage/10 shadow-sm cursor-pointer"
                              title="Delete Item"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        ))}
                      </div>

                      {/* Delivery Options tab */}
                      <div className="bg-[#f8f5f0] p-4 rounded-2xl border border-natural-sage/10 space-y-3">
                        <h4 className="font-bold text-xs text-[#3D2B1F] uppercase tracking-wide">Method</h4>
                        
                        <div className="grid grid-cols-2 gap-2">
                          <button
                            type="button"
                            onClick={() => setDeliveryType('pickup')}
                            className={`py-2 px-3 rounded-full text-[11px] font-bold border transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
                              deliveryType === 'pickup'
                                ? 'bg-[#3D2B1F] text-white border-[#3D2B1F]'
                                : 'bg-white text-natural-text border-natural-sage/15 hover:bg-natural-soft'
                            }`}
                          >
                            <Check className={`w-3.5 h-3.5 ${deliveryType === 'pickup' ? 'opacity-100' : 'opacity-0'}`} />
                            Self-Pickup (Free)
                          </button>
                          <button
                            type="button"
                            onClick={() => setDeliveryType('delivery')}
                            className={`py-2 px-3 rounded-full text-[11px] font-bold border transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
                              deliveryType === 'delivery'
                                ? 'bg-[#3D2B1F] text-white border-[#3D2B1F]'
                                : 'bg-white text-natural-text border-natural-sage/15 hover:bg-natural-soft'
                            }`}
                          >
                            <Truck className="w-3.5 h-3.5" />
                            Connaught Pl. (+₹50)
                          </button>
                        </div>
                      </div>

                      {/* Customer Info Form */}
                      <div id="cart-drawer-checkout-form" className="space-y-3 pt-2">
                        <h4 className="font-bold text-xs text-[#3D2B1F] uppercase tracking-wide">Customer Details</h4>
                        
                        <div className="space-y-2.5">
                          <input
                            type="text"
                            placeholder="Full Name (e.g. Rahul Verma)"
                            required
                            value={customerName}
                            onChange={(e) => setCustomerName(e.target.value)}
                            className="w-full px-3 py-2 bg-natural-soft border border-natural-sage/20 rounded-xl text-[#3D2B1F] text-xs focus:outline-none focus:border-natural-sage font-medium font-sans"
                          />
                          <input
                            type="tel"
                            placeholder="Mobile Number (e.g. +91 98765 43210)"
                            required
                            value={customerPhone}
                            onChange={(e) => setCustomerPhone(e.target.value)}
                            className="w-full px-3 py-2 bg-natural-soft border border-natural-sage/20 rounded-xl text-[#3D2B1F] text-xs focus:outline-none focus:border-natural-sage font-medium font-sans"
                          />
                          {deliveryType === 'delivery' && (
                            <textarea
                              placeholder="Connaught Place New Delhi address details (Floor/Flat number)..."
                              required
                              value={deliveryAddress}
                              onChange={(e) => setDeliveryAddress(e.target.value)}
                              rows={2}
                              className="w-full px-3 py-2 bg-natural-soft border border-natural-sage/20 rounded-xl text-[#3D2B1F] text-xs focus:outline-none focus:border-natural-sage font-medium resize-none font-sans"
                            />
                          )}
                        </div>
                      </div>
                    </>
                  ) : (
                    <div className="text-center py-24 space-y-4">
                      <span className="text-4xl select-none block">🥤</span>
                      <h4 className="font-serif text-lg font-bold italic text-[#3D2B1F]">Your bag is empty</h4>
                      <p className="text-xs text-natural-text/70 max-w-xs mx-auto font-sans">
                        Go to our menu page and select from cappuccino, oreo shakes, or lemon mint mojitos. They will populate here immediately!
                      </p>
                      <button
                        onClick={onClose}
                        className="px-6 py-2.5 rounded-full bg-[#3D2B1F] text-white text-xs font-bold hover:opacity-90 transition-all cursor-pointer uppercase tracking-wider"
                      >
                        Explore Menu now
                      </button>
                    </div>
                  )}
                </div>

                {/* Bottom billing footer */}
                {cartItems.length > 0 && (
                  <div className="p-5 border-t border-natural-sage/10 bg-[#f8f5f0] shrink-0 space-y-4">
                    <div className="space-y-2 text-xs text-natural-text/75">
                      <div className="flex justify-between">
                        <span>Drinks Subtotal</span>
                        <span className="font-medium font-sans">₹{itemsSubtotal}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>GST (5%)</span>
                        <span className="font-medium font-sans">₹{gst}</span>
                      </div>
                      {deliveryType === 'delivery' && (
                        <div className="flex justify-between">
                          <span>Connaught Place Delivery fee</span>
                          <span className="font-medium font-sans">₹50</span>
                        </div>
                      )}
                      <div className="flex justify-between border-t border-natural-sage/10 pt-2 font-bold text-[#3D2B1F] text-sm">
                        <span>Grand Total</span>
                        <span className="text-natural-sage font-sans text-base">₹{grandTotal}</span>
                      </div>
                    </div>

                    <button
                      type="submit"
                      onClick={handleTriggerCheckout}
                      className="w-full py-3.5 px-4 rounded-full text-xs font-bold bg-[#3D2B1F] hover:opacity-95 text-white transition-all shadow-sm cursor-pointer text-center uppercase tracking-widest"
                    >
                      Process Order • ₹{grandTotal}
                    </button>
                  </div>
                )}

              </div>
            </>
          ) : (
            <>
              {/* ORDER CONFIRMED RECEIPT STEP */}
              <div className="flex flex-col h-full justify-between bg-natural-bg">
                
                {/* Header close */}
                <div className="px-5 py-4 border-b border-natural-sage/10 flex items-center justify-between shrink-0 bg-white">
                  <span className="text-xs font-bold text-natural-sage uppercase tracking-widest flex items-center gap-1.5 font-sans">
                    <Sparkles className="w-3.5 h-3.5 fill-natural-soft" /> Order Placed Successfully!
                  </span>
                  <button
                    onClick={handleFinishReceipt}
                    className="p-1.5 rounded-lg text-natural-text/50 hover:text-natural-text cursor-pointer"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Receipt Details Box */}
                <div className="flex-1 overflow-y-auto p-5">
                  <div className="bg-white rounded-[32px] border border-natural-sage/15 shadow-sm p-5 space-y-6 animate-fade-in" id="receipt-box-content">
                    
                    {/* Visual Stamp */}
                    <div className="text-center space-y-2">
                      <div className="w-12 h-12 bg-natural-soft rounded-full flex items-center justify-center text-natural-sage mx-auto border border-natural-sage/15">
                        <Check className="w-6 h-6 stroke-[3]" />
                      </div>
                      <span className="text-[10px] text-natural-text/50 font-bold uppercase block tracking-wider font-sans">Official Invoice</span>
                      <h3 className="font-serif text-2xl font-bold italic text-[#3D2B1F]">{confirmedOrder?.orderId}</h3>
                    </div>

                    {/* Meta info columns */}
                    <div className="grid grid-cols-2 gap-4 border-y border-natural-sage/10 py-4 text-[11px] leading-relaxed font-sans">
                      <div>
                        <span className="text-natural-text/50 font-bold uppercase block text-[9px] tracking-wide">Customer Name</span>
                        <span className="font-bold text-[#3D2B1F]">{confirmedOrder?.name}</span>
                      </div>
                      <div>
                        <span className="text-natural-text/50 font-bold uppercase block text-[9px] tracking-wide">Ready Estimate</span>
                        <span className="font-bold text-natural-sage">{confirmedOrder?.timeEstimate}</span>
                      </div>
                      <div>
                        <span className="text-natural-text/50 font-bold uppercase block text-[9px] tracking-wide">Phone Number</span>
                        <span className="font-semibold text-natural-text">{confirmedOrder?.phone}</span>
                      </div>
                      <div>
                        <span className="text-natural-text/50 font-bold uppercase block text-[9px] tracking-wide">Fulfillment</span>
                        <span className="font-bold uppercase text-[#3D2B1F]">{confirmedOrder?.type === 'delivery' ? 'CP Delivery' : 'Self-Pickup'}</span>
                      </div>
                    </div>

                    {/* Items table */}
                    <div className="space-y-3 font-sans">
                      <span className="text-natural-text/55 font-bold uppercase text-[9px] tracking-wider block">Drink Items Summary</span>
                      
                      <div className="space-y-2.5">
                        {confirmedOrder?.items.map((it, idx) => (
                          <div key={idx} className="flex justify-between items-start text-xs leading-tight">
                            <div>
                              <div className="font-bold text-[#3D2B1F]">
                                {it.product.name} <span className="text-natural-text/50 font-normal">x{it.quantity}</span>
                              </div>
                              <span className="text-[10px] text-natural-text/60">{it.sweetness} Swt | {it.ice}</span>
                            </div>
                            <span className="font-mono text-natural-text font-medium">₹{it.product.price * it.quantity}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Breakdown totals */}
                    <div className="border-t border-natural-sage/10 pt-4 space-y-2 text-[11px] text-natural-text/70 font-sans">
                      <div className="flex justify-between">
                        <span>Items Subtotal</span>
                        <span>₹{confirmedOrder?.subtotal}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>GST (5%)</span>
                        <span>₹{confirmedOrder?.gst}</span>
                      </div>
                      {confirmedOrder && confirmedOrder.deliveryFee > 0 && (
                        <div className="flex justify-between">
                          <span>Connaught Place Delivery</span>
                          <span>₹{confirmedOrder.deliveryFee}</span>
                        </div>
                      )}
                      
                      <div className="flex justify-between border-t border-natural-sage/15 pt-3 text-xs font-bold text-[#3D2B1F]">
                        <span className="text-sm">Amount Paid</span>
                        <span className="font-bold text-natural-sage text-sm">₹{confirmedOrder?.total}</span>
                      </div>
                    </div>

                  </div>

                  <div className="text-center p-4 mt-4 bg-natural-creamy/50 rounded-2xl text-[11px] text-[#3D2B1F]/90 border border-natural-sage/10 leading-relaxed font-semibold font-sans">
                    🎉 Show this order screen at the counter in Connaught Place or present it to the delivery rider who matches order ID <strong>{confirmedOrder?.orderId}</strong>.
                  </div>
                </div>

                {/* Receipt button back */}
                <div className="p-5 border-t border-natural-sage/10 bg-white flex flex-col gap-2 shrink-0">
                  <button
                    onClick={handleFinishReceipt}
                    className="w-full py-3.5 px-4 rounded-full text-xs font-bold bg-[#3D2B1F] hover:opacity-95 text-white transition-all text-center cursor-pointer uppercase tracking-widest"
                  >
                    Close & Finish Order
                  </button>
                </div>

              </div>
            </>
          )}

        </div>
      </div>

    </div>
  );
}
