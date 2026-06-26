import React, { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Search, SlidersHorizontal, ShoppingBag, Clock, Heart, CheckCircle2 } from 'lucide-react';
import { Product, CartItem } from '../types';
import { productsList } from '../data';

interface ProductsViewProps {
  onAddToCart: (item: CartItem) => void;
}

export default function ProductsView({ onAddToCart }: ProductsViewProps) {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryFilter = (searchParams.get('category') || 'all') as 'all' | 'coffee' | 'milkshakes' | 'mojitos' | 'smoothies';

  const setCategoryFilter = (category: 'all' | 'coffee' | 'milkshakes' | 'mojitos' | 'smoothies') => {
    if (category === 'all') {
      setSearchParams({});
    } else {
      setSearchParams({ category });
    }
  };

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSweetness, setSelectedSweetness] = useState<{ [productId: string]: 'Less' | 'Normal' | 'Extra' }>({});
  const [selectedIce, setSelectedIce] = useState<{ [productId: string]: 'No Ice' | 'Less Ice' | 'Regular' }>({});
  const [favorites, setFavorites] = useState<string[]>([]);
  const [addedPopupId, setAddedPopupId] = useState<string | null>(null);

  const categories: { id: typeof categoryFilter; label: string; count: number }[] = [
    { id: 'all', label: 'All Beverages', count: productsList.length },
    { id: 'coffee', label: '☕ Coffee', count: productsList.filter(p => p.category === 'coffee').length },
    { id: 'milkshakes', label: '🥤 Milkshakes', count: productsList.filter(p => p.category === 'milkshakes').length },
    { id: 'mojitos', label: '🍹 Mojitos', count: productsList.filter(p => p.category === 'mojitos').length },
    { id: 'smoothies', label: '🍓 Smoothies', count: productsList.filter(p => p.category === 'smoothies').length },
  ];

  // Search and filter logic
  const filteredProducts = useMemo(() => {
    return productsList.filter((product) => {
      const matchesCategory = categoryFilter === 'all' || product.category === categoryFilter;
      const matchesSearch =
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (product.tags && product.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase())));
      return matchesCategory && matchesSearch;
    });
  }, [categoryFilter, searchQuery]);

  const toggleFavorite = (productId: string) => {
    setFavorites(prev => 
      prev.includes(productId) 
        ? prev.filter(id => id !== productId) 
        : [...prev, productId]
    );
  };

  const handleSweetnessChange = (productId: string, level: 'Less' | 'Normal' | 'Extra') => {
    setSelectedSweetness(prev => ({ ...prev, [productId]: level }));
  };

  const handleIceChange = (productId: string, level: 'No Ice' | 'Less Ice' | 'Regular') => {
    setSelectedIce(prev => ({ ...prev, [productId]: level }));
  };

  const handleAddToCartClick = (product: Product) => {
    const sweetnessValue = selectedSweetness[product.id] || 'Normal';
    const iceValue = selectedIce[product.id] || 'Regular';

    onAddToCart({
      product,
      quantity: 1,
      sweetness: sweetnessValue,
      ice: iceValue
    });

    // Trigger visual feedabck
    setAddedPopupId(product.id);
    setTimeout(() => {
      setAddedPopupId(null);
    }, 2000);
  };

  return (
    <div id="products-view" className="animate-fade-in py-12 bg-natural-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto space-y-2">
          <span className="text-natural-sage text-xs font-bold tracking-widest uppercase font-mono">Artisanal Drink Menu</span>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold italic text-[#3D2B1F] tracking-tight">
            Our Beverage Lounge
          </h1>
          <div className="h-0.5 w-12 bg-natural-sage/20 mx-auto rounded-full mt-2" />
          <p className="text-xs sm:text-sm text-natural-text/75 pt-2 leading-relaxed font-sans">
            Freshly pulled espresso shots, hand-muddled mojitos, thick real gelato shakes, and vegan-friendly dynamic smoothies. Customize your blend exactly as you like it!
          </p>
        </div>

        {/* Search & Filter Controls */}
        <div className="bg-white/50 rounded-[32px] p-5 border border-natural-sage/15 shadow-sm space-y-5">
          <div className="flex flex-col md:flex-row gap-4">
            
            {/* Search Bar */}
            <div className="relative flex-1">
              <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-natural-text/55">
                <Search className="w-5 h-5" />
              </span>
              <input
                id="search-beverage-input"
                type="text"
                placeholder="Search by espresso, oreo, mint, kiwi..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-natural-soft border border-natural-sage/20 rounded-xl text-[#3D2B1F] text-sm focus:outline-none focus:ring-2 focus:ring-natural-sage/20 focus:border-natural-sage transition-all font-medium"
              />
              {searchQuery && (
                <button 
                  onClick={() => setSearchQuery('')}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-xs text-natural-text/60 hover:text-natural-text font-semibold"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Category selection */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1.5 md:pb-0 scrollbar-none" id="categories-tabs-container">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  id={`cat-tab-${cat.id}`}
                  onClick={() => setCategoryFilter(cat.id)}
                  className={`px-4 py-2.5 rounded-full text-xs font-semibold shrink-0 cursor-pointer transition-all ${
                    categoryFilter === cat.id
                      ? 'bg-natural-sage text-white shadow-sm'
                      : 'bg-natural-soft text-[#3D2B1F]/80 hover:bg-natural-stone hover:text-[#3D2B1F]'
                  }`}
                >
                  {cat.label} <span className={`ml-1 text-[10px] px-1.5 py-0.5 rounded-full ${categoryFilter === cat.id ? 'bg-[#3D2B1F] text-white' : 'bg-natural-stone/60 text-natural-text/70'}`}>{cat.count}</span>
                </button>
              ))}
            </div>

          </div>
        </div>

        {/* Product Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" id="beverages-results-gird">
            {filteredProducts.map((product) => {
              const currentSweetness = selectedSweetness[product.id] || 'Normal';
              const currentIce = selectedIce[product.id] || 'Regular';
              const isFavorite = favorites.includes(product.id);
              const isAdded = addedPopupId === product.id;

              return (
                <div
                  key={product.id}
                  id={`product-card-${product.id}`}
                  className="bg-white/60 rounded-[32px] border border-natural-sage/10 overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
                >
                  
                  {/* Image & Badges */}
                  <div className="relative aspect-video w-full overflow-hidden bg-natural-stone shrink-0">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      loading="lazy"
                      referrerPolicy="no-referrer"
                    />
                    
                    {/* Add Premium Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#3D2B1F]/60 via-transparent to-transparent opacity-90" />
                    
                    {/* Floating Heart Favourite */}
                    <button
                      onClick={() => toggleFavorite(product.id)}
                      className="absolute top-3.5 right-3.5 w-9 h-9 rounded-full bg-natural-bg/90 backdrop-blur-md flex items-center justify-center text-natural-text/80 hover:text-rose-600 hover:scale-105 transition-all shadow-sm cursor-pointer"
                      title={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
                    >
                      <Heart className={`w-4.5 h-4.5 transition-colors ${isFavorite ? 'fill-rose-600 text-rose-600' : 'text-natural-text/80'}`} />
                    </button>

                    {/* Left Tag for Categories */}
                    <span className="absolute bottom-3.5 left-3.5 z-10 px-2.5 py-1 text-[10px] font-bold tracking-wider rounded-lg uppercase bg-natural-sage text-white shadow-sm">
                      {product.category}
                    </span>

                    {/* Price Tag Badge */}
                    <div className="absolute bottom-3.5 right-3.5 z-10 bg-[#3D2B1F] text-[#fdfbf7] font-sans text-xs font-bold px-3 py-1 rounded-lg border border-natural-sage/20">
                      ₹{product.price}
                    </div>
                  </div>

                  {/* Body Info */}
                  <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <h3 className="font-serif text-xl font-bold italic text-[#3D2B1F]">{product.name}</h3>
                      </div>
                      <p className="text-xs text-natural-text/75 leading-relaxed line-clamp-2">
                        {product.description}
                      </p>
                    </div>

                    {/* Tags pill */}
                    {product.tags && (
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {product.tags.map((t, tIdx) => (
                          <span key={tIdx} className="text-[10px] px-2 py-0.5 rounded bg-natural-soft text-natural-text/70 border border-natural-sage/5">
                            #{t}
                          </span>
                        ))}
                      </div>
                    )}

                    {/* Customizer Panel */}
                    <div className="bg-natural-soft/40 rounded-2xl p-3 space-y-3.5 border border-natural-sage/5">
                      
                      {/* Sweetness */}
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-natural-text/70 font-medium">Sweetness</span>
                        <div className="flex gap-1.5" id={`sweetness-group-${product.id}`}>
                          {(['Less', 'Normal', 'Extra'] as const).map((level) => (
                            <button
                              key={level}
                              onClick={() => handleSweetnessChange(product.id, level)}
                              className={`px-2 py-1 rounded text-[10px] font-bold transition-all cursor-pointer ${
                                currentSweetness === level
                                  ? 'bg-natural-sage text-white'
                                  : 'bg-white text-[#3D2B1F]/80 border border-natural-sage/10 hover:bg-natural-soft'
                              }`}
                            >
                              {level}
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Ice level */}
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-natural-text/70 font-medium">Ice Level</span>
                        <div className="flex gap-1.5" id={`ice-group-${product.id}`}>
                          {(['No Ice', 'Less Ice', 'Regular'] as const).map((level) => (
                            <button
                              key={level}
                              onClick={() => handleIceChange(product.id, level)}
                              className={`px-2 py-1 rounded text-[10px] font-bold transition-all cursor-pointer ${
                                currentIce === level
                                  ? 'bg-natural-sage text-white'
                                  : 'bg-white text-[#3D2B1F]/80 border border-natural-sage/10 hover:bg-natural-soft'
                              }`}
                            >
                              {level === 'Regular' ? 'Reg Ice' : level}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Card Button footer */}
                    <div className="pt-2">
                      <button
                        id={`btn-add-${product.id}`}
                        onClick={() => handleAddToCartClick(product)}
                        disabled={isAdded}
                        className={`w-full py-3 px-4 rounded-full text-xs font-bold transition-all flex items-center justify-center gap-2 cursor-pointer uppercase tracking-widest ${
                          isAdded
                            ? 'bg-natural-sage text-white cursor-default'
                            : 'bg-[#3D2B1F] text-white hover:opacity-90 active:scale-98 shadow-sm'
                        }`}
                      >
                        {isAdded ? (
                          <>
                            <CheckCircle2 className="w-4 h-4 text-white" />
                            <span>Added to Order!</span>
                          </>
                        ) : (
                          <>
                            <ShoppingBag className="w-4 h-4" />
                            <span>Craft My Drink • ₹{product.price}</span>
                          </>
                        )}
                      </button>
                    </div>

                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="text-center py-20 bg-white/50 border border-natural-sage/15 rounded-3xl space-y-4">
            <span className="text-4xl select-none">🍹</span>
            <h3 className="font-serif text-xl font-bold italic text-[#3D2B1F]">No beverages match your search</h3>
            <p className="text-xs text-natural-text/70 max-w-sm mx-auto">
              Please try spelling coffee, mocha, mint, kiwi, or milkshake. You can also press clear above to restart menu exploration.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setCategoryFilter('all');
              }}
              className="px-6 py-2 rounded-full bg-natural-sage text-white text-xs font-bold hover:opacity-90 cursor-pointer uppercase tracking-wider"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
