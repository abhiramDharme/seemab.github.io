import React from 'react';
import { Project } from '../types';
import { ArrowUpRight } from 'lucide-react';

const projects: Project[] = [
  {
    title: 'Industrial Valve Manufacturer',
    category: 'Website',
    description: 'Redesigned corporate website with focus on technical catalog and lead capture.',
    stats: '+150% Leads',
    image: 'https://picsum.photos/seed/factory1/800/600'
  },
  {
    title: 'SaaS Product Launch',
    category: 'Campaign',
    description: 'Multi-channel ad campaign (LinkedIn + Google Ads) for new CRM software.',
    stats: '4.5x ROI',
    image: 'https://picsum.photos/seed/tech1/800/600'
  },
  {
    title: 'Healthcare Equipment SEO',
    category: 'Analytics',
    description: 'Comprehensive SEO overhaul and PowerBI dashboard setup for traffic tracking.',
    stats: '+40% Traffic',
    image: 'https://picsum.photos/seed/med1/800/600'
  },
  {
    title: 'Global Expo Promotion',
    category: 'Campaign',
    description: 'Event management and digital promotion for a major manufacturing trade show.',
    stats: '500+ Visits',
    image: 'https://picsum.photos/seed/expo/800/600'
  }
];

const Portfolio: React.FC = () => {
  return (
    <section id="portfolio" className="py-24 bg-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-gray-100 pb-8">
          <div>
            <span className="text-brand-gold font-bold tracking-[0.2em] uppercase text-xs mb-4 block">Selected Works</span>
            <h2 className="font-serif text-4xl md:text-5xl text-brand-black">Featured Projects</h2>
          </div>
          <a href="#" className="hidden md:flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-brand-black hover:text-brand-gold transition-colors mt-6 md:mt-0">
            View All Work <ArrowUpRight size={16} />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {projects.map((project, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="relative overflow-hidden mb-6 aspect-[4/3]">
                <div className="absolute inset-0 bg-brand-black/10 group-hover:bg-transparent transition-colors z-10"></div>
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out grayscale hover:grayscale-0"
                />
              </div>
              
              <div className="flex justify-between items-start">
                <div>
                   <h3 className="font-serif text-2xl font-bold text-brand-black mb-2 group-hover:text-brand-gold transition-colors">{project.title}</h3>
                   <p className="text-gray-500 text-sm mb-3 max-w-sm">{project.description}</p>
                   <p className="text-xs font-bold uppercase tracking-widest text-gray-400">{project.category}</p>
                </div>
                <div className="text-right">
                  <span className="block font-serif italic text-xl text-brand-black">{project.stats}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="md:hidden mt-12 text-center">
             <a href="#" className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-brand-black hover:text-brand-gold transition-colors">
            View All Work <ArrowUpRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;