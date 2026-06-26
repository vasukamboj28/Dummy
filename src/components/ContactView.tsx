import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Twitter, Youtube, CheckCircle2, AlertCircle } from 'lucide-react';
import { ContactMessage } from '../types';

export default function ContactView() {
  const [formData, setFormData] = useState<ContactMessage>({
    fullName: '',
    email: '',
    phoneNumber: '',
    subject: '',
    message: ''
  });

  const [submittedMessages, setSubmittedMessages] = useState<ContactMessage[]>([]);
  const [validationError, setValidationError] = useState<string | null>(null);
  const [isSubmitSuccess, setIsSubmitSuccess] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setValidationError(null);

    // Prompt validations
    if (!formData.fullName.trim()) {
      setValidationError('Please enter your full name so our baristas know who you are.');
      return;
    }
    if (!formData.email.trim() || !formData.email.includes('@')) {
      setValidationError('Please enter a secure valid email address.');
      return;
    }
    if (!formData.phoneNumber.trim()) {
      setValidationError('Phone number is required for custom order query responses.');
      return;
    }
    if (!formData.message.trim()) {
      setValidationError('Your question message cannot be empty.');
      return;
    }

    // Capture submitted feedback successfully
    const newMessage = { ...formData };
    setSubmittedMessages(prev => [newMessage, ...prev]);
    setIsSubmitSuccess(true);
    
    // Clear and clean form
    setFormData({
      fullName: '',
      email: '',
      phoneNumber: '',
      subject: '',
      message: ''
    });

    // Reset success popup after a while
    setTimeout(() => {
      setIsSubmitSuccess(false);
    }, 4000);
  };

  return (
    <div id="contact-view" className="animate-fade-in py-16 bg-natural-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto space-y-2">
          <span className="text-natural-sage text-xs font-bold tracking-widest uppercase font-mono">Location & Inquiries</span>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold italic text-[#3D2B1F] tracking-tight">
            Get In Touch
          </h1>
          <div className="h-0.5 w-12 bg-natural-sage/20 mx-auto rounded-full mt-2" />
          <p className="text-xs sm:text-sm text-natural-text/75 pt-2 leading-relaxed">
            Have an event booking, catering inquiry, custom drink craving, or feedback? Tell us, and our New Delhi baristas will respond within 2 hours.
          </p>
        </div>

        {/* Info Grid & Form Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Address Details */}
          <div className="lg:col-span-5 space-y-8 bg-[#f8f5f0] rounded-[32px] p-7 border border-natural-sage/10">
            <h3 className="font-serif text-xl sm:text-2xl font-bold italic text-[#3D2B1F]">
              Contact Information
            </h3>
            
            <div className="space-y-6">
              {/* Address */}
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-natural-sage text-white flex items-center justify-center shrink-0 shadow-sm">
                  <MapPin className="w-5.5 h-5.5" />
                </div>
                <div className="space-y-1">
                  <h4 className="text-xs font-bold text-natural-text/50 uppercase tracking-wider">DrinkYard Headquarters</h4>
                  <p className="text-[#3D2B1F] text-sm leading-relaxed font-medium font-sans">
                    123 Beverage Street, Connaught Place,<br />
                    New Delhi, India - 110001
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-natural-sage text-white flex items-center justify-center shrink-0 shadow-sm">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <h4 className="text-xs font-bold text-natural-text/50 uppercase tracking-wider">Phone Support</h4>
                  <a href="tel:+919876543210" className="text-[#3D2B1F] text-sm font-semibold hover:text-natural-sage transition-colors block font-sans">
                    +91 98765 43210
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-natural-sage text-white flex items-center justify-center shrink-0 shadow-sm">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <h4 className="text-xs font-bold text-natural-text/50 uppercase tracking-wider">Electronic Mail</h4>
                  <a href="mailto:hello@drinkyard.com" className="text-[#3D2B1F] text-sm font-semibold hover:text-natural-sage transition-colors block font-mono">
                    hello@drinkyard.com
                  </a>
                </div>
              </div>

              {/* Opening Hours */}
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-natural-sage text-white flex items-center justify-center shrink-0 shadow-sm">
                  <Clock className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <h4 className="text-xs font-bold text-natural-text/50 uppercase tracking-wider">Opening Hours</h4>
                  <p className="text-[#3D2B1F] text-sm font-semibold leading-relaxed font-sans">
                    Monday - Sunday<br />
                    <span className="text-natural-sage">9:00 AM - 11:00 PM</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Social handles list */}
            <div className="pt-6 border-t border-natural-sage/10 space-y-3.5">
              <h4 className="text-xs font-bold text-natural-text/50 uppercase tracking-wider">Follow DrinkYard Social</h4>
              <div className="flex flex-wrap gap-3">
                <a 
                  href="https://instagram.com" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-white border border-natural-sage/15 text-xs font-medium text-[#3D2B1F] hover:text-natural-sage hover:border-natural-sage/40 shadow-sm transition-all"
                >
                  <Instagram className="w-4 h-4 text-rose-500" />
                  <span className="font-sans font-semibold">@drinkyard</span>
                </a>
                <a 
                  href="https://facebook.com" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-white border border-natural-sage/15 text-xs font-medium text-[#3D2B1F] hover:text-natural-sage hover:border-natural-sage/40 shadow-sm transition-all"
                >
                  <Facebook className="w-4 h-4 text-blue-600" />
                  <span className="font-sans font-semibold">DrinkYard</span>
                </a>
                <a 
                  href="https://twitter.com" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-white border border-natural-sage/15 text-xs font-medium text-[#3D2B1F] hover:text-natural-sage hover:border-natural-sage/40 shadow-sm transition-all"
                >
                  <Twitter className="w-4 h-4 text-stone-900" />
                  <span className="font-sans font-semibold">@drinkyard</span>
                </a>
                <a 
                  href="https://youtube.com" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-white border border-natural-sage/15 text-xs font-medium text-[#3D2B1F] hover:text-natural-sage hover:border-natural-sage/40 shadow-sm transition-all"
                >
                  <Youtube className="w-4 h-4 text-red-600" />
                  <span className="font-sans font-semibold">DrinkYard Official</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7 space-y-6">
            <div className="bg-white rounded-[32px] border border-natural-sage/10 p-6 sm:p-8 shadow-sm">
              <h3 className="font-serif text-xl sm:text-2xl font-bold italic text-[#3D2B1F] mb-6 pb-2 border-b border-natural-sage/5">
                Contact Form
              </h3>

              {/* Status Alert Notifiers */}
              {validationError && (
                <div className="mb-5 p-4 rounded-xl bg-rose-50 text-rose-800 text-xs font-semibold flex items-center gap-2 border border-rose-100 animate-slide-up">
                  <AlertCircle className="w-4.5 h-4.5 text-rose-600 shrink-0" />
                  <span>{validationError}</span>
                </div>
              )}

              {isSubmitSuccess && (
                <div className="mb-5 p-4 rounded-xl bg-emerald-50 text-emerald-850 text-xs font-semibold flex items-center gap-2 border border-emerald-100 animate-slide-up">
                  <CheckCircle2 className="w-4.5 h-4.5 text-emerald-600 shrink-0" />
                  <span>Success! Your query message was submitted. Our team will read it soon.</span>
                </div>
              )}

              {/* Contact Form Details */}
              <form onSubmit={handleSubmit} className="space-y-4" id="custom-contact-form">
                
                {/* Full Name & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5 flex flex-col">
                    <label htmlFor="fullName" className="text-xs font-bold text-natural-text/75 pl-1">Full Name *</label>
                    <input
                      id="input-fullname"
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      placeholder="e.g. Rahul Sharma"
                      className="w-full px-4 py-2.5 bg-natural-soft border border-natural-sage/20 rounded-xl text-[#3D2B1F] text-xs focus:outline-none focus:ring-2 focus:ring-natural-sage/20 focus:border-natural-sage transition-all font-medium"
                    />
                  </div>
                  <div className="space-y-1.5 flex flex-col">
                    <label htmlFor="email" className="text-xs font-bold text-natural-text/75 pl-1">Email Address *</label>
                    <input
                      id="input-email"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="e.g. rahul@domain.com"
                      className="w-full px-4 py-2.5 bg-natural-soft border border-natural-sage/20 rounded-xl text-[#3D2B1F] text-xs focus:outline-none focus:ring-2 focus:ring-natural-sage/20 focus:border-natural-sage transition-all font-medium"
                    />
                  </div>
                </div>

                {/* Phone & Subject */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5 flex flex-col">
                    <label htmlFor="phoneNumber" className="text-xs font-bold text-natural-text/75 pl-1">Phone Number *</label>
                    <input
                      id="input-phone"
                      type="tel"
                      name="phoneNumber"
                      value={formData.phoneNumber}
                      onChange={handleInputChange}
                      placeholder="e.g. +91 98765 43210"
                      className="w-full px-4 py-2.5 bg-natural-soft border border-natural-sage/20 rounded-xl text-[#3D2B1F] text-xs focus:outline-none focus:ring-2 focus:ring-natural-sage/20 focus:border-natural-sage transition-all font-medium"
                    />
                  </div>
                  <div className="space-y-1.5 flex flex-col">
                    <label htmlFor="subject" className="text-xs font-bold text-natural-text/75 pl-1">Subject (Optional)</label>
                    <input
                      id="input-subject"
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="e.g. Catering Request"
                      className="w-full px-4 py-2.5 bg-natural-soft border border-natural-sage/20 rounded-xl text-[#3D2B1F] text-xs focus:outline-none focus:ring-2 focus:ring-natural-sage/20 focus:border-natural-sage transition-all font-medium"
                    />
                  </div>
                </div>

                {/* Message text area */}
                <div className="space-y-1.5 flex flex-col">
                  <label htmlFor="message" className="text-xs font-bold text-natural-text/75 pl-1">Message *</label>
                  <textarea
                    id="input-message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Describe your request, details of booking, catering size, or coffee flavor review..."
                    className="w-full px-4 py-3 bg-natural-soft border border-natural-sage/20 rounded-xl text-[#3D2B1F] text-xs focus:outline-none focus:ring-2 focus:ring-natural-sage/20 focus:border-natural-sage transition-all font-medium resize-none"
                  />
                </div>

                {/* Submit button */}
                <button
                  id="btn-contact-submit"
                  type="submit"
                  className="w-full py-3.5 px-4 rounded-full text-xs font-bold bg-[#3D2B1F] hover:opacity-95 active:scale-98 text-white transition-all shadow-sm cursor-pointer text-center uppercase tracking-widest"
                >
                  Submit Inquiry
                </button>
              </form>
            </div>

            {/* In-Memory Client History Tracker */}
            {submittedMessages.length > 0 && (
              <div className="bg-natural-creamy/50 rounded-[32px] p-6 border border-natural-sage/15 space-y-4 shadow-sm">
                <h4 className="font-serif text-sm font-bold text-[#3D2B1F] uppercase tracking-wide">
                  Your submitted inquiries ({submittedMessages.length})
                </h4>
                <div className="space-y-3 max-h-48 overflow-y-auto">
                  {submittedMessages.map((msg, index) => (
                    <div key={index} className="p-3 bg-white/70 rounded-2xl border border-natural-sage/10 text-xs space-y-1">
                      <div className="flex justify-between items-center font-bold text-[#3D2B1F]">
                        <span>{msg.fullName}</span>
                        <span className="text-[10px] text-white px-2 py-0.5 rounded-full bg-natural-sage font-bold font-mono">Sent</span>
                      </div>
                      <p className="text-natural-text/60 font-medium text-[10px] font-sans">{msg.email} | {msg.phoneNumber}</p>
                      {msg.subject && <p className="text-[#3D2B1F] font-semibold text-[11px] pt-1 font-sans">Subj: {msg.subject}</p>}
                      <p className="text-[#3D2B1F]/90 italic font-normal pt-1 bg-natural-soft/50 p-2 rounded-xl leading-relaxed">
                        "{msg.message}"
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

        </div>

      </div>
    </div>
  );
}
