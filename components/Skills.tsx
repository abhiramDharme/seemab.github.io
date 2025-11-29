import React from 'react';
import { Megaphone, Layout, Database, TrendingUp, Code, PenTool } from 'lucide-react';

const services = [
  {
    icon: <Megaphone size={32} />,
    title: "Performance Marketing",
    skills: ["Google Ads", "Meta Business", "LinkedIn Ads", "Bing Ads"],
    description: "Targeted paid campaigns designed to generate high-quality B2B leads and maximize ROAS."
  },
  {
    icon: <Layout size={32} />,
    title: "Web Development",
    skills: ["WordPress & Wix", "HTML / CSS", "Python & .NET", "Landing Pages"],
    description: "Building responsive, SEO-optimized websites that serve as 24/7 sales representatives."
  },
  {
    icon: <TrendingUp size={32} />,
    title: "SEO & Content",
    skills: ["Technical SEO", "Keyword Strategy", "Social Media", "Email Marketing"],
    description: "Organic growth strategies that improve visibility and establish industry authority."
  },
  {
    icon: <Database size={32} />,
    title: "Data Analytics",
    skills: ["Power BI", "Tableau", "Google Analytics", "Salesforce CRM"],
    description: "Turning raw data into actionable insights for smarter decision making."
  },
  {
    icon: <Code size={32} />,
    title: "Technical Integration",
    skills: ["Google Tag Manager", "API Integration", "CRM Setup", "Automation"],
    description: "Seamlessly connecting marketing tools to ensure smooth data flow and tracking."
  },
  {
    icon: <PenTool size={32} />,
    title: "Brand Strategy",
    skills: ["Graphic Design", "Event Management", "Tender Mgmt", "Presentation"],
    description: "Holistic brand positioning including visual identity and offline event promotion."
  }
];

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 bg-brand-charcoal text-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-brand-gold font-bold tracking-[0.2em] uppercase text-xs mb-4 block">My Expertise</span>
          <h2 className="font-serif text-4xl md:text-5xl text-white mb-6">
            Core Competencies
          </h2>
          <div className="w-24 h-0.5 bg-brand-gold mx-auto opacity-50"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-[#363636] p-8 border border-gray-700 hover:border-brand-gold transition-colors duration-300 group">
              <div className="text-brand-gold mb-6 group-hover:scale-110 transition-transform duration-300 origin-left">
                {service.icon}
              </div>
              <h3 className="font-serif text-2xl font-bold mb-4">{service.title}</h3>
              <p className="text-gray-400 mb-6 text-sm leading-relaxed border-b border-gray-600 pb-4">
                {service.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {service.skills.map((skill, i) => (
                  <span key={i} className="text-xs font-bold tracking-wider uppercase text-gray-300 bg-brand-black px-2 py-1">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        {/* Certifications Strip */}
        <div className="mt-20 pt-10 border-t border-gray-700 text-center">
            <h4 className="font-sans text-xs font-bold tracking-[0.2em] uppercase text-gray-500 mb-8">Certified In</h4>
            <div className="flex flex-wrap justify-center gap-6 md:gap-12 opacity-70">
                <span className="text-xl font-serif text-white">Digital Marketing Master</span>
                <span className="hidden md:block text-brand-gold">•</span>
                <span className="text-xl font-serif text-white">Data Analyst Master</span>
                <span className="hidden md:block text-brand-gold">•</span>
                <span className="text-xl font-serif text-white">Google Ads</span>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;