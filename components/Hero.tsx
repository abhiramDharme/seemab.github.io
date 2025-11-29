import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative bg-brand-cream min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-[#f0ede6] -z-10 hidden md:block pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
          
          {/* Text Content */}
          <div className="md:w-1/2 text-center md:text-left z-10">
            <div className="inline-block border-b-2 border-brand-gold mb-6 pb-1">
              <span className="font-sans text-xs font-bold tracking-[0.2em] uppercase text-brand-charcoal">
                Performance Marketing & Strategy
              </span>
            </div>
            
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-medium leading-[1.1] text-brand-black mb-8">
              Digital Growth for <br/>
              <span className="font-serif-italic text-brand-gold">Industrial Brands.</span>
            </h1>
            
            <p className="font-sans text-lg text-gray-600 mb-10 leading-relaxed max-w-lg mx-auto md:mx-0">
              I partner with manufacturing leaders to execute data-driven digital strategies. From conversion-focused web design to high-ROI paid campaigns.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-5 justify-center md:justify-start">
              <a href="#contact" className="bg-brand-black text-white px-8 py-4 text-xs font-bold uppercase tracking-widest hover:bg-brand-gold transition-colors duration-300 shadow-lg">
                Start Your Project
              </a>
              <a href="#portfolio" className="border border-brand-black text-brand-black px-8 py-4 text-xs font-bold uppercase tracking-widest hover:bg-brand-black hover:text-white transition-colors duration-300 flex items-center justify-center gap-2">
                View Portfolio <ArrowRight size={14} />
              </a>
            </div>
          </div>
          
          {/* Image Content */}
          <div className="md:w-1/2 relative mt-12 md:mt-0">
            <div className="relative z-10">
              <div className="absolute -top-6 -left-6 w-24 h-24 border-t-4 border-l-4 border-brand-gold hidden md:block"></div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 border-b-4 border-r-4 border-brand-gold hidden md:block"></div>
              
              <img 
                src="https://picsum.photos/600/700?grayscale" 
                alt="Seema Bhonde" 
                className="w-full h-auto object-cover shadow-2xl"
              />
              
              <div className="absolute bottom-10 -left-10 bg-white p-6 shadow-xl max-w-xs hidden lg:block">
                <p className="font-serif italic text-xl text-brand-black mb-2">"Measurable results tailored for the manufacturing sector."</p>
                <div className="h-0.5 w-10 bg-brand-gold"></div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Hero;