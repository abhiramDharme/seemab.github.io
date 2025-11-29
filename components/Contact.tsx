import React from 'react';
import { Phone, MapPin, Linkedin, Mail } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-brand-black text-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div>
            <h2 className="font-serif text-5xl md:text-6xl mb-8 leading-tight">
              Let's build your <br/>
              <span className="font-serif-italic text-brand-gold">digital legacy.</span>
            </h2>
            <p className="text-gray-400 text-lg mb-12 max-w-md">
              Ready to increase your visibility and ROI? I am available for freelance projects and consultation in the manufacturing sector.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="text-brand-gold mt-1" size={20} />
                <div>
                   <h4 className="font-serif text-xl mb-1">Based in</h4>
                   <p className="text-gray-400 font-light">Pimple Saudagar, Pune, 411017</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#252525] p-10 border border-gray-800">
             <div className="space-y-8">
                <a href="tel:9405876878" className="flex items-center justify-between group cursor-pointer border-b border-gray-700 pb-8 hover:border-brand-gold transition-colors">
                  <div className="flex items-center gap-6">
                    <div className="bg-brand-black p-4 rounded-full text-brand-gold border border-gray-700 group-hover:border-brand-gold transition-colors">
                      <Phone size={24} />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-1 group-hover:text-brand-gold">Phone</h3>
                      <p className="font-serif text-2xl text-white">9405876878</p>
                    </div>
                  </div>
                </a>

                <a href="mailto:seemabhonde338@gmail.com" className="flex items-center justify-between group cursor-pointer border-b border-gray-700 pb-8 hover:border-brand-gold transition-colors">
                  <div className="flex items-center gap-6">
                    <div className="bg-brand-black p-4 rounded-full text-brand-gold border border-gray-700 group-hover:border-brand-gold transition-colors">
                      <Mail size={24} />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-1 group-hover:text-brand-gold">Email</h3>
                      <p className="font-serif text-xl md:text-2xl text-white break-all">seemabhonde338@gmail.com</p>
                    </div>
                  </div>
                </a>

                <a href="https://www.linkedin.com/in/seema-bhonde-8905a031/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between group cursor-pointer pb-2 hover:border-brand-gold transition-colors">
                  <div className="flex items-center gap-6">
                    <div className="bg-brand-black p-4 rounded-full text-brand-gold border border-gray-700 group-hover:border-brand-gold transition-colors">
                      <Linkedin size={24} />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-1 group-hover:text-brand-gold">LinkedIn</h3>
                      <p className="font-serif text-2xl text-white">Connect Profile</p>
                    </div>
                  </div>
                </a>
             </div>
          </div>

        </div>
        
        <div className="text-center mt-24 pt-8 border-t border-gray-800 text-gray-600 text-xs uppercase tracking-widest">
          <p>&copy; {new Date().getFullYear()} Seema Bhonde. All rights reserved.</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;