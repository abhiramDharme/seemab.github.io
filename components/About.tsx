import React from 'react';
import { Target, Lightbulb, Users } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Header Column */}
          <div className="md:col-span-4">
            <h2 className="font-serif text-4xl md:text-5xl text-brand-black mb-6">
              About <span className="font-serif-italic text-brand-gold">Me</span>
            </h2>
            <div className="h-1 w-20 bg-brand-black mb-8"></div>
            <p className="text-brand-charcoal text-lg font-medium leading-relaxed mb-6">
              I bridge the gap between traditional manufacturing processes and modern digital marketing ecosystems.
            </p>
            <div className="bg-brand-cream p-6 border border-brand-gold/30">
               <h4 className="font-serif font-bold text-xl mb-4">Education</h4>
               <ul className="space-y-4 text-sm text-gray-600">
                 <li className="border-b border-gray-200 pb-2">
                   <strong className="block text-brand-black font-sans uppercase tracking-wider text-xs">Master of Computer Applications</strong>
                   Specialization in Computer Applications
                 </li>
                 <li className="border-b border-gray-200 pb-2">
                   <strong className="block text-brand-black font-sans uppercase tracking-wider text-xs">PG Diploma in CS</strong>
                   Computer Science
                 </li>
                 <li>
                   <strong className="block text-brand-black font-sans uppercase tracking-wider text-xs">Bachelor's Degree</strong>
                   Biology (Botany, Zoology & Chemistry)
                 </li>
               </ul>
            </div>
          </div>

          {/* Content Column */}
          <div className="md:col-span-8">
            <div className="prose prose-lg text-gray-600 mb-12">
              <p className="mb-6">
                With over 7 years of experience in the digital landscape, my passion lies in helping industrial businesses understand the power of data-backed strategies. I don't just run ads; I build growth engines.
              </p>
              <p>
                From designing high-performance websites using Python and .NET to analyzing complex datasets with PowerBI, I ensure every marketing rupee spent yields measurable returns. My background in science and computer applications allows me to approach marketing with a rigorous, analytical mindset that is rare in the creative field.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              <div className="text-center group">
                <div className="w-16 h-16 mx-auto bg-brand-gray rounded-full flex items-center justify-center mb-4 group-hover:bg-brand-black transition-colors duration-300">
                  <Target className="text-brand-black group-hover:text-white" size={28} />
                </div>
                <h4 className="font-serif font-bold text-lg mb-2">ROI Focused</h4>
                <p className="text-sm text-gray-500">Data-driven decisions that impact the bottom line.</p>
              </div>
              <div className="text-center group">
                <div className="w-16 h-16 mx-auto bg-brand-gray rounded-full flex items-center justify-center mb-4 group-hover:bg-brand-black transition-colors duration-300">
                  <Lightbulb className="text-brand-black group-hover:text-white" size={28} />
                </div>
                <h4 className="font-serif font-bold text-lg mb-2">Strategic</h4>
                <p className="text-sm text-gray-500">Long-term vision meets immediate execution.</p>
              </div>
              <div className="text-center group">
                <div className="w-16 h-16 mx-auto bg-brand-gray rounded-full flex items-center justify-center mb-4 group-hover:bg-brand-black transition-colors duration-300">
                  <Users className="text-brand-black group-hover:text-white" size={28} />
                </div>
                <h4 className="font-serif font-bold text-lg mb-2">Collaborative</h4>
                <p className="text-sm text-gray-500">Leading cross-functional teams to success.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;