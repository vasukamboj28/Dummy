import React from 'react';
import { Award, Heart, Sparkles, Sprout, Users, Calendar, ShieldCheck, Star } from 'lucide-react';

export default function AboutView() {
  
  const values = [
    {
      title: 'Quality First',
      desc: 'We strictly never compromise. Every coffee bean is checked, and fresh organic fruits are scrutinized before blending into cups.',
      icon: Award,
      color: 'bg-natural-stone text-natural-sage border-natural-sage/10'
    },
    {
      title: 'Customer First',
      desc: 'From custom milk alternates to accommodating sweetness ratios, we adapt entirely to your mood and body lifestyle.',
      icon: Heart,
      color: 'bg-natural-creamy text-natural-sage border-natural-sage/10'
    },
    {
      title: 'Innovation',
      desc: 'Our menu evolves constantly. We engineer quarterly signature drinks using fresh seasonal fruit reductions and rich spices.',
      icon: Sparkles,
      color: 'bg-natural-soft text-natural-sage border-natural-sage/10'
    },
    {
      title: 'Sustainability',
      desc: 'We prioritize bio-degradable cups, wooden sipping spoons, and work directly with eco-friendly local coffee farms.',
      icon: Sprout,
      color: 'bg-natural-stone text-natural-sage border-natural-sage/10'
    },
    {
      title: 'Teamwork',
      desc: 'Our baristas, suppliers, and cleanliness captains collaborate seamlessly to maintain DrinkYard\'s incredible quality standards.',
      icon: Users,
      color: 'bg-natural-soft text-natural-sage border-natural-sage/10'
    }
  ];

  return (
    <div id="about-view-container" className="animate-fade-in py-16 bg-natural-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        
        {/* Story Section */}
        <section id="about-story" className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <span className="text-natural-sage text-xs font-bold tracking-widest uppercase">The DrinkYard Timeline</span>
            <h1 className="font-serif text-3xl sm:text-5xl font-bold italic text-[#3D2B1F] leading-tight">
              Our Story
            </h1>
            <div className="h-0.5 w-12 bg-natural-sage/30 rounded-full" />
            
            <p className="text-natural-text/90 text-sm sm:text-base leading-relaxed font-sans">
              DrinkYard was founded in <strong>2022</strong> with a simple, solid mission: to create and serve premium-quality beverages that bring people together, providing an incredible break in busy modern lives.
            </p>
            <p className="text-natural-text/80 text-xs sm:text-sm leading-relaxed font-sans">
              What started as a humble single beverage counter in New Delhi has quickly grown into a beloved destination for coffee enthusiasts, shake lovers, and anyone seeking pure, refreshing beverages. 
            </p>
            <p className="text-natural-text/85 text-xs sm:text-sm leading-relaxed font-sans">
              Our professional team selects only premium Arabica coffee beans, fresh certified fruits, and high-quality sweeteners to guarantee that every single drink exceeds expectations. We believe every recipe requires both engineering measurement and artisan spirit.
            </p>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-natural-sage/10">
              <div className="space-y-1">
                <span className="block font-serif text-2xl sm:text-3xl font-bold italic text-natural-sage">2022</span>
                <span className="block text-[10px] text-natural-text/50 font-bold uppercase tracking-wide">Year Founded</span>
              </div>
              <div className="space-y-1">
                <span className="block font-serif text-2xl sm:text-3xl font-bold italic text-natural-sage">100+</span>
                <span className="block text-[10px] text-natural-text/50 font-bold uppercase tracking-wide">Beverage Items</span>
              </div>
              <div className="space-y-1">
                <span className="block font-serif text-2xl sm:text-3xl font-bold italic text-natural-sage">10k+</span>
                <span className="block text-[10px] text-natural-text/50 font-bold uppercase tracking-wide">Happy Customers</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            {/* Visual Frame */}
            <div className="relative rounded-[32px] overflow-hidden shadow-sm border-4 border-white aspect-square max-w-sm mx-auto bg-natural-stone">
              <img
                src="https://images.unsplash.com/photo-1498804103079-a6351b050096?auto=format&fit=crop&q=80&w=600"
                alt="DrinkYard Barista pouring coffee"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#3D2B1F]/40 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md rounded-2xl p-3 flex items-center gap-3 border border-natural-sage/10">
                <div className="w-8 h-8 rounded-full bg-natural-sage flex items-center justify-center text-white shrink-0">
                  <Star className="w-4 h-4 fill-white text-white" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[#3D2B1F]">Loved in New Delhi</h4>
                  <span className="text-[10px] text-natural-text/60 font-semibold uppercase tracking-wider">Top-ranked beverage spot</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision Section */}
        <section id="about-mission-vision" className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-10 border-t border-natural-sage/10">
          {/* Mission */}
          <div className="bg-natural-stone/40 border border-natural-sage/10 rounded-[32px] p-8 space-y-4 shadow-sm">
            <div className="w-10 h-10 rounded-full bg-natural-sage text-white flex items-center justify-center">
              <ShieldCheck className="w-5.5 h-5.5" />
            </div>
            <h3 className="font-serif text-2.5xl font-bold italic text-[#3D2B1F]">Our Mission</h3>
            <p className="text-natural-text/80 text-xs sm:text-sm leading-relaxed font-sans">
              To serve delicious, handcrafted, and infinitely refreshing beverages while creating memorable spatial and online ordering experiences for every customer, daily.
            </p>
          </div>

          {/* Vision */}
          <div className="bg-natural-creamy/50 border border-natural-sage/10 rounded-[32px] p-8 space-y-4 shadow-sm">
            <div className="w-10 h-10 rounded-full bg-[#3D2B1F] text-white flex items-center justify-center">
              <Calendar className="w-5.5 h-5.5" />
            </div>
            <h3 className="font-serif text-2.5xl font-bold italic text-[#3D2B1F]">Our Vision</h3>
            <p className="text-natural-text/80 text-xs sm:text-sm leading-relaxed font-sans">
              To become the most loved beverage brand in India by repeatedly delivering exceptional kitchen materials, uncompromised station hygiene, and innovative flavor creations.
            </p>
          </div>
        </section>

        {/* Core Values Section */}
        <section id="about-values" className="space-y-10 pt-10 border-t border-natural-sage/10">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <span className="text-natural-sage text-xs font-bold tracking-widest uppercase font-mono">Our DNA</span>
            <h2 className="font-serif text-2xl sm:text-4xl font-bold italic text-[#3D2B1F] tracking-tight">
              Our Core Values
            </h2>
            <div className="h-0.5 w-10 bg-natural-sage/30 mx-auto rounded-full mt-1" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-5 gap-6">
            {values.map((v, idx) => {
              const ValIcon = v.icon;
              return (
                <div
                  key={idx}
                  id={`value-card-${idx}`}
                  className="bg-white/50 border border-natural-sage/10 rounded-[24px] p-5 shadow-sm hover:border-natural-sage/35 transition-all duration-300 flex flex-col gap-4"
                >
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 border ${v.color}`}>
                    <ValIcon className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-bold text-sm text-[#3D2B1F]">{v.title}</h4>
                    <p className="text-natural-text/75 text-xs leading-relaxed font-sans">{v.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

      </div>
    </div>
  );
}
