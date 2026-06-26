import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Coffee, IceCream, Wine, Apple, ArrowRight, ShieldCheck, Zap, Tag, Sparkles } from 'lucide-react';
import { whyChooseList, reviewsList } from '../data';

export default function HomeView() {
  const navigate = useNavigate();
  
  const categories = [
    {
      id: 'coffee' as const,
      title: 'Premium Coffee',
      desc: 'Freshly brewed espresso, cappuccino, latte, and cold brew coffee extracted from authentic hill estates.',
      icon: Coffee,
      color: 'bg-natural-stone text-natural-text border-natural-sage/10',
      badgeColor: 'bg-natural-sage text-white',
      tagline: '☕ Pure Arabica & Robusta'
    },
    {
      id: 'milkshakes' as const,
      title: 'Creamy Milkshakes',
      desc: 'Rich and creamy shakes available in chocolate, vanilla, strawberry, and Oreo flavors blended with dense artisanal gelato.',
      icon: IceCream,
      color: 'bg-natural-creamy text-natural-text border-natural-sage/10',
      badgeColor: 'bg-natural-text text-white',
      tagline: '🥤 Thick Velvet Gelato'
    },
    {
      id: 'mojitos' as const,
      title: 'Refreshing Mojitos',
      desc: 'Refreshing mint-based mojitos with exciting fruit combinations of green apple, watermelon, and fresh kiwi.',
      icon: Wine,
      color: 'bg-natural-soft text-natural-text border-natural-sage/10',
      badgeColor: 'bg-natural-sage text-white',
      tagline: '🍹 Freshly Muddled Herb'
    },
    {
      id: 'smoothies' as const,
      title: 'Healthy Smoothies',
      desc: 'Healthy fruit smoothies packed with natural fibers, vitamins, minerals, and dairy-free options.',
      icon: Apple,
      color: 'bg-natural-stone text-natural-text border-natural-sage/10',
      badgeColor: 'bg-natural-text text-white',
      tagline: '🍓 Nutritious Fruit Bliss'
    }
  ];

  const handleCategoryClick = (id: 'coffee' | 'milkshakes' | 'mojitos' | 'smoothies') => {
    navigate(`/products?category=${id}`);
  };

  const getWhyChooseIconValue = (iconName: string) => {
    switch (iconName) {
      case 'Apple': return <Apple className="w-5 h-5 text-natural-sage" />;
      case 'Sparkles': return <Sparkles className="w-5 h-5 text-natural-sage" />;
      case 'Tag': return <Tag className="w-5 h-5 text-natural-sage" />;
      case 'Zap': return <Zap className="w-5 h-5 text-natural-sage" />;
      case 'ShieldCheck': return <ShieldCheck className="w-5 h-5 text-natural-sage" />;
      case 'Coffee': return <Coffee className="w-5 h-5 text-natural-sage" />;
      default: return <Sparkles className="w-5 h-5 text-natural-sage" />;
    }
  };

  return (
    <div id="home-view-container" className="animate-fade-in space-y-4 py-4">
      
      {/* Hero Section */}
      <section id="home-hero" className="relative overflow-hidden bg-natural-stone text-[#3D2B1F] py-20 sm:py-28 rounded-[48px] mx-4 border border-natural-sage/15 shadow-sm">
        {/* Subtle Decorative Ambient Background Glows */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-natural-sage/5 rounded-full -mr-16 -mt-16" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-natural-sage/5 rounded-full -ml-24 -mb-24" />
        
        <div className="max-w-7xl mx-auto px-6 sm:px-12 relative z-10 text-center flex flex-col items-center">
          <div className="max-w-3xl space-y-6">
            <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-[10px] font-bold tracking-[0.25em] uppercase bg-natural-sage/10 text-natural-sage border border-natural-sage/20">
              ✨ Where every sip tells a story
            </span>
            <h1 className="font-serif text-5xl sm:text-7xl font-bold tracking-tight text-[#3D2B1F] leading-tight">
              Crafted for the<br />
              <span className="font-serif italic text-natural-sage">Curious Soul</span>
            </h1>
            <p className="text-sm sm:text-lg text-[#3D2B1F]/75 font-normal leading-relaxed max-w-xl mx-auto font-sans">
              DrinkYard offers premium coffee, cold coffee, mojitos, milkshakes, smoothies, and refreshing beverages crafted from high-quality ingredients. Curated daily, served premium.
            </p>
            <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center">
              <button
                id="hero-order-now-btn"
                onClick={() => {
                  navigate('/products');
                }}
                className="inline-flex items-center justify-center px-8 py-3.5 rounded-full text-xs font-semibold uppercase tracking-widest bg-natural-sage text-[#fdfbf7] hover:opacity-90 transition-opacity cursor-pointer shadow-sm"
              >
                Order Now
              </button>
              <button
                id="hero-explore-menu-btn"
                onClick={() => {
                  navigate('/products');
                }}
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full text-xs font-semibold uppercase tracking-widest bg-transparent text-natural-sage border border-natural-sage/40 hover:bg-natural-sage/5 transition-all cursor-pointer"
              >
                Explore Menu
                <ArrowRight className="w-4 h-4 text-natural-sage" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Categories Grid Section */}
      <section id="home-featured-categories" className="py-20 bg-natural-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-14 space-y-2">
            <span className="text-natural-sage text-xs font-bold tracking-widest uppercase">Our Craft Selection</span>
            <h2 className="font-serif text-4xl italic font-bold text-[#3D2B1F] tracking-tight">
              Featured Categories
            </h2>
            <div className="h-0.5 w-12 bg-natural-sage/30 mx-auto rounded-full mt-2" />
            <p className="text-xs text-natural-text/70 pt-2 font-sans">
              Select a category below to explore our carefully measured handcrafted seasonal drinks.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((cat) => {
              const IconComp = cat.icon;
              return (
                <div
                  key={cat.id}
                  id={`featured-${cat.id}`}
                  onClick={() => handleCategoryClick(cat.id)}
                  className="bg-white/60 border border-natural-sage/10 rounded-[32px] p-6 shadow-sm hover:shadow-md hover:border-natural-sage/35 group cursor-pointer transition-all duration-300 flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center transition-all group-hover:scale-105 ${cat.color}`}>
                      <IconComp className="w-5 h-5" />
                    </div>
                    <div className="space-y-1">
                      <span className="text-[10px] uppercase font-bold text-natural-text/50 tracking-wider block">{cat.tagline}</span>
                      <h3 className="font-serif text-xl font-bold italic text-[#3D2B1F] group-hover:text-natural-sage transition-colors">
                        {cat.title}
                      </h3>
                    </div>
                    <p className="text-xs text-natural-text/80 leading-relaxed font-sans">
                      {cat.desc}
                    </p>
                  </div>
                  <div className="pt-5 flex items-center text-[10px] uppercase tracking-wider font-bold text-natural-sage gap-1.5 group-hover:translate-x-1.5 transition-transform">
                    <span>Explore Collection</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="home-why-us" className="py-20 bg-natural-creamy/50 border-y border-natural-sage/10 rounded-[32px] mx-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-16 space-y-2">
            <span className="text-natural-sage text-xs font-bold tracking-widest uppercase">The DrinkYard Standard</span>
            <h2 className="font-serif text-4xl italic font-bold text-[#3D2B1F] tracking-tight">
              Why DrinkYard?
            </h2>
            <div className="h-0.5 w-12 bg-natural-sage/30 mx-auto rounded-full mt-2" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseList.map((item, index) => (
              <div
                key={index}
                id={`whychoose-card-${index}`}
                className="flex gap-4 p-5 rounded-[24px] border border-transparent hover:border-natural-sage/10 hover:bg-white/55 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-full bg-natural-soft flex items-center justify-center shrink-0 border border-natural-sage/10">
                  {getWhyChooseIconValue(item.icon)}
                </div>
                <div className="space-y-1">
                  <h4 className="font-sans font-bold text-sm text-[#3D2B1F]">
                    {item.title}
                  </h4>
                  <p className="text-xs text-natural-text/75 leading-relaxed font-sans">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Reviews Section */}
      <section id="home-reviews" className="py-20 bg-natural-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-16 space-y-2">
            <span className="text-natural-sage text-xs font-bold tracking-widest uppercase">Loved by Guests Daily</span>
            <h2 className="font-serif text-4xl italic font-bold text-[#3D2B1F] tracking-tight">
              Lately from Guests
            </h2>
            <div className="h-0.5 w-12 bg-natural-sage/30 mx-auto rounded-full mt-2" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reviewsList.map((review, idx) => (
              <div
                key={idx}
                id={`review-card-${idx}`}
                className="bg-white/50 rounded-[32px] p-7 border border-natural-sage/10 shadow-sm space-y-5 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  {/* Rating Stars */}
                  <div className="flex text-natural-sage gap-0.5" id={`stars-${idx}`}>
                    {Array.from({ length: review.rating }).map((_, sIdx) => (
                      <span key={sIdx} className="text-base select-none">★</span>
                    ))}
                  </div>
                  <p className="text-natural-text/90 text-xs italic leading-relaxed font-sans">
                    "{review.comment}"
                  </p>
                </div>
                
                <div className="flex items-center gap-3 pt-4 border-t border-natural-sage/10">
                  <img
                    src={review.avatar}
                    alt={review.name}
                    className="w-10 h-10 rounded-full object-cover border border-natural-sage/10"
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <h5 className="font-bold text-xs text-[#3D2B1F]">{review.name}</h5>
                    <span className="text-[9px] text-[#5A5A40]/70 font-bold uppercase tracking-wider">Verified Patron</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick CTA banner */}
      <section id="banner-cta" className="relative overflow-hidden bg-natural-sage text-white py-14 mx-4 rounded-[48px] border border-natural-sage/10 shadow-sm text-center">
        <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16" />
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 space-y-4 relative z-10">
          <h2 className="font-serif text-3xl sm:text-4xl italic font-semibold text-white leading-tight">Ready to Taste the Finest Beverages in New Delhi?</h2>
          <p className="text-xs sm:text-sm text-natural-soft/80 max-w-xl mx-auto font-sans">
            Ready for instant self-pickup or prompt door delivery within CP. Customize sweetness and dairy to your absolute preference.
          </p>
          <div className="pt-2">
            <button
              onClick={() => {
                navigate('/products');
              }}
              className="inline-flex items-center justify-center px-8 py-3 rounded-full text-xs font-semibold uppercase tracking-widest bg-natural-bg text-[#5A5A40] hover:opacity-90 transition-opacity cursor-pointer shadow-md"
            >
              Order Online From Menu
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
