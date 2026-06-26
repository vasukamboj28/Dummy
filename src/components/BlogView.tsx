import React, { useState } from 'react';
import { Calendar, Clock, BookOpen, ChevronRight, X, Heart, Award } from 'lucide-react';
import { BlogPost } from '../types';
import { blogArticles } from '../data';

export default function BlogView() {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [likedPosts, setLikedPosts] = useState<string[]>([]);
  const [blogCategoryFilter, setBlogCategoryFilter] = useState<'All' | 'Coffee Wisdom' | 'Nutrition & Wellness' | 'Mixology Diaries' | 'Behind the Bar'>('All');

  const categories = ['All', 'Coffee Wisdom', 'Nutrition & Wellness', 'Mixology Diaries', 'Behind the Bar'] as const;

  const filteredArticles = blogArticles.filter((post) => {
    return blogCategoryFilter === 'All' || post.category === blogCategoryFilter;
  });

  const handleLikePost = (postId: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setLikedPosts(prev => 
      prev.includes(postId) 
        ? prev.filter(id => id !== postId) 
        : [...prev, postId]
    );
  };

  return (
    <div id="blog-view" className="animate-fade-in py-12 bg-natural-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto space-y-2">
          <span className="text-natural-sage text-xs font-bold tracking-widest uppercase font-mono">DrinkYard Chronicle</span>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold italic text-[#3D2B1F] tracking-tight font-sans">
            Latest Articles
          </h1>
          <div className="h-0.5 w-12 bg-natural-sage/20 mx-auto rounded-full mt-2" />
          <p className="text-xs sm:text-sm text-natural-text/75 pt-2 leading-relaxed">
            Delve deeper into extraction mechanics, raw nutrition benefits, mixology chemistry, and seed-to-cup secrets written by our expert baristas.
          </p>
        </div>

        {/* Blog Category Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2" id="blog-categories-wrapper">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setBlogCategoryFilter(cat)}
              className={`px-4 py-2 rounded-full text-xs font-bold cursor-pointer transition-all ${
                blogCategoryFilter === cat
                  ? 'bg-[#3D2B1F] text-white shadow-sm'
                  : 'bg-white text-[#3D2B1F]/80 border border-natural-sage/15 hover:bg-natural-soft'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Filtered Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" id="blog-articles-grid">
          {filteredArticles.map((post) => {
            const isLiked = likedPosts.includes(post.id);
            return (
              <article
                key={post.id}
                id={`article-card-${post.id}`}
                onClick={() => setSelectedPost(post)}
                className="bg-white/60 rounded-[32px] border border-natural-sage/10 overflow-hidden shadow-sm hover:shadow-md hover:border-natural-sage/35 transition-all duration-300 flex flex-col justify-between cursor-pointer group"
              >
                <div className="space-y-4">
                  
                  {/* Image Holder */}
                  <div className="relative aspect-video w-full overflow-hidden bg-natural-stone">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-102"
                      loading="lazy"
                      referrerPolicy="no-referrer"
                    />
                    
                    {/* Category Overlay */}
                    <span className="absolute top-3.5 left-3.5 px-2.5 py-1 text-[9px] font-bold tracking-wider uppercase bg-[#3D2B1F]/90 text-white rounded-[8px] shadow-sm border border-natural-sage/10">
                      {post.category}
                    </span>

                    {/* Like counter floating */}
                    <button
                      onClick={(e) => handleLikePost(post.id, e)}
                      className="absolute top-3.5 right-3.5 w-8 h-8 rounded-full bg-natural-bg/90 flex items-center justify-center text-natural-text/80 hover:text-[#3D2B1F] transition-colors shadow-sm cursor-pointer"
                      title="Like article"
                    >
                      <Heart className={`w-4 h-4 ${isLiked ? 'fill-rose-600 text-rose-600' : 'text-natural-text/60'}`} />
                    </button>
                  </div>

                  {/* Body Text */}
                  <div className="p-5 space-y-3">
                    <div className="flex items-center gap-4 text-[10px] text-natural-text/60 font-semibold tracking-wider uppercase">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-natural-sage" />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-natural-sage" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>

                    <h3 className="font-serif text-lg font-bold text-[#3D2B1F] group-hover:text-natural-sage transition-colors leading-snug">
                      {post.title}
                    </h3>
                    
                    <p className="text-xs text-natural-text/75 leading-relaxed line-clamp-3 pt-1">
                      {post.excerpt}
                    </p>
                  </div>

                </div>

                <div className="p-5 pt-0 border-t border-transparent flex items-center justify-between text-xs font-bold text-[#3D2B1F] group-hover:text-natural-sage">
                  <span className="inline-flex items-center gap-1">
                    <BookOpen className="w-3.5 h-3.5" />
                    Read Entire Study
                  </span>
                  <ChevronRight className="w-4 h-4 translate-x-0 group-hover:translate-x-1.5 transition-transform" />
                </div>
              </article>
            );
          })}
        </div>

        {/* Article Full Modal */}
        {selectedPost && (
          <div className="fixed inset-0 z-50 overflow-y-auto bg-[#3D2B1F]/60 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in">
            <div 
              id="full-article-modal"
              className="bg-[#fdfbf7] rounded-[32px] w-full max-w-3xl max-h-[90vh] overflow-y-auto shadow-2xl border border-natural-sage/15 animate-fade-in flex flex-col justify-between"
            >
              
              {/* Header Visual with Close button */}
              <div className="relative aspect-[21/9] w-full bg-natural-stone shrink-0">
                <img
                  src={selectedPost.image}
                  alt={selectedPost.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-[#3D2B1F]/40" />
                
                <button
                  onClick={() => setSelectedPost(null)}
                  className="absolute top-4 right-4 w-9 h-9 rounded-full bg-[#3D2B1F]/70 hover:bg-[#3D2B1F] text-white flex items-center justify-center transition-colors cursor-pointer"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="absolute bottom-4 left-6 right-6 text-white space-y-1">
                  <span className="px-2.5 py-0.5 rounded text-[10px] font-bold tracking-wider uppercase bg-natural-sage text-white inline-block">
                    {selectedPost.category}
                  </span>
                  <h2 className="font-serif text-xl sm:text-2xl font-bold leading-tight italic text-white drop-shadow-md">
                    {selectedPost.title}
                  </h2>
                </div>
              </div>

              {/* Scrollable Content Pane */}
              <div className="p-6 sm:p-8 space-y-6">
                
                {/* Meta details bar */}
                <div className="flex items-center gap-6 text-[11px] text-natural-text/60 font-semibold tracking-wider uppercase border-b border-natural-sage/10 pb-4">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4 text-natural-sage" />
                    <span>Published: {selectedPost.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4 text-natural-sage" />
                    <span>Read Time: {selectedPost.readTime}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-natural-sage bg-natural-soft px-2.5 py-0.5 rounded-full font-bold">
                    <Award className="w-3.5 h-3.5" />
                    <span>Certified Editorial</span>
                  </div>
                </div>

                {/* Main Article Body Text */}
                <div className="text-[#3D2B1F] text-sm leading-relaxed space-y-5 prose max-w-none">
                  {selectedPost.content.split('\n\n').map((paragraph, pIdx) => {
                    // Quick check if paragraph is a list
                    if (paragraph.trim().startsWith('*')) {
                      return (
                        <ul key={pIdx} className="list-disc pl-5 py-2 space-y-2.5 text-natural-text/85">
                          {paragraph.split('\n').map((li, liIdx) => (
                            <li key={liIdx}>{li.replace('*', '').trim()}</li>
                          ))}
                        </ul>
                      );
                    }
                    if (paragraph.trim().startsWith('###')) {
                      return (
                        <h4 key={pIdx} className="font-serif text-base sm:text-lg font-bold text-[#3D2B1F] pt-3 border-l-3 border-natural-sage pl-3 italic">
                          {paragraph.replace('###', '').trim()}
                        </h4>
                      );
                    }
                    // Number list handler
                    if (/^\d\./.test(paragraph.trim())) {
                      return (
                        <ol key={pIdx} className="list-decimal pl-5 py-2 space-y-3 text-natural-text/85">
                          {paragraph.split('\n').map((li, liIdx) => (
                            <li key={liIdx} className="pl-1">
                              {li.replace(/^\d\./, '').trim()}
                            </li>
                          ))}
                        </ol>
                      );
                    }
                    return (
                      <p key={pIdx} className="text-xs sm:text-sm">
                        {paragraph}
                      </p>
                    );
                  })}
                </div>

                {/* Author signoff footer */}
                <div className="pt-6 border-t border-natural-sage/10 flex items-center gap-3.5 bg-natural-soft/40 rounded-[20px] p-4">
                  <div className="w-10 h-10 rounded-full bg-[#3D2B1F] flex items-center justify-center text-[#fdfbf7] font-serif font-bold h-10 w-10 shrink-0 select-none">
                    DY
                  </div>
                  <div>
                    <h5 className="font-bold text-xs text-[#3D2B1F]">Written by DrinkYard Barista Panel</h5>
                    <p className="text-[10px] text-natural-text/70">Shared knowledge about coffees, fresh fruit smoothies, and mixology chemistry from Connaught Place, New Delhi.</p>
                  </div>
                </div>

              </div>

              {/* Close Bottom Button */}
              <div className="px-6 py-4 bg-natural-stone/30 border-t border-natural-sage/10 flex justify-end shrink-0">
                <button
                  onClick={() => setSelectedPost(null)}
                  className="px-6 py-2.5 rounded-full bg-[#3D2B1F] hover:opacity-95 text-white text-xs font-bold cursor-pointer transition-colors uppercase tracking-widest"
                >
                  Finished Reading
                </button>
              </div>

            </div>
          </div>
        )}

      </div>
    </div>
  );
}
