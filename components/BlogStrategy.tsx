import React from 'react';
import { BlogPost } from '../types';

const posts: BlogPost[] = [
  {
    title: "How Digital Marketing Drives Manufacturing Sales",
    excerpt: "Moving beyond traditional sales reps: leveraging SEO and PPC to capture high-intent B2B industrial leads.",
    date: "Oct 12, 2023",
    category: "Strategy"
  },
  {
    title: "LinkedIn Funnels for Industrial Businesses",
    excerpt: "Why LinkedIn is the unsung hero for manufacturing contracts and how to set up a winning funnel.",
    date: "Nov 05, 2023",
    category: "Social Media"
  },
  {
    title: "Winning More Tenders Online",
    excerpt: "Optimizing your digital footprint to improve credibility during the tender bidding process.",
    date: "Dec 10, 2023",
    category: "B2B Sales"
  }
];

const BlogStrategy: React.FC = () => {
  return (
    <section id="blog" className="py-24 bg-brand-gray scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h2 className="font-serif text-3xl md:text-4xl text-center text-brand-black mb-16">
          Industry <span className="font-serif-italic text-brand-gold">Insights</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <div key={index} className="bg-white p-8 hover:shadow-xl transition-shadow duration-300 border-t-4 border-transparent hover:border-brand-gold">
              <span className="block text-xs font-bold uppercase tracking-widest text-brand-gold mb-4">
                {post.category}
              </span>
              <h3 className="font-serif text-xl font-bold text-brand-black mb-4 leading-tight">{post.title}</h3>
              <p className="text-gray-600 text-sm mb-6 leading-relaxed">{post.excerpt}</p>
              <a href="#" className="text-brand-black text-xs font-bold uppercase tracking-widest hover:text-brand-gold transition-colors border-b border-brand-black pb-1 hover:border-brand-gold">Read Article</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogStrategy;