import React from 'react';
import { Job } from '../types';

const jobs: Job[] = [
  {
    id: '1',
    role: 'Digital Marketing Executive',
    company: 'Pune Instrumentation Pvt. Ltd.',
    period: 'Jan 2023 – Present',
    highlights: [
      'Spearheading end-to-end digital transformation for manufacturing products.',
      'Managed Rs. 5L+ monthly ad spend on Google & LinkedIn focusing on B2B lead gen.',
      'Optimized company website SEO, increasing organic traffic by 40% YoY.',
      'Implemented Salesforce CRM for better lead tracking and funnel management.'
    ]
  },
  {
    id: '2',
    role: 'Digital Marketing Executive',
    company: 'Euspace Technologies',
    period: '2020 – 2022',
    highlights: [
      'Executed product promotion strategies for IT and SaaS solutions.',
      'Designed high-converting landing pages using HTML/CSS.',
      'Coordinated international client communications and reporting.',
      'Created PowerBI dashboards to visualize campaign ROI for stakeholders.'
    ]
  },
  {
    id: '3',
    role: 'Digital Marketing Manager',
    company: 'Bharat Soft Solution',
    period: '2017 – 2019',
    highlights: [
      'Led a team of 3 for social media strategy and content creation.',
      'Handled event and expo management for brand visibility.',
      'Managed tender and bid processes for manufacturing clients.',
      'Improved lead quality metrics by 25% through targeted email campaigns.'
    ]
  }
];

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 bg-brand-cream scroll-mt-20">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="font-serif text-4xl md:text-5xl text-brand-black mb-6">Professional History</h2>
          <div className="w-24 h-0.5 bg-brand-black mx-auto"></div>
        </div>

        <div className="relative border-l border-brand-gold/50 ml-6 md:ml-12 space-y-16">
          {jobs.map((job) => (
            <div key={job.id} className="relative pl-8 md:pl-16">
              {/* Dot */}
              <div className="absolute -left-[5px] top-2 w-3 h-3 bg-brand-gold rounded-full ring-4 ring-brand-cream"></div>
              
              <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-4">
                <h3 className="font-serif text-2xl font-bold text-brand-black">{job.role}</h3>
                <span className="font-sans text-xs font-bold tracking-[0.2em] text-brand-charcoal uppercase mt-2 md:mt-0 bg-white px-3 py-1 border border-gray-200">
                  {job.period}
                </span>
              </div>
              
              <h4 className="font-sans text-brand-gold font-bold tracking-wider uppercase text-sm mb-6">{job.company}</h4>
              
              <ul className="space-y-3">
                {job.highlights.map((point, i) => (
                  <li key={i} className="text-gray-600 leading-relaxed font-light flex items-start">
                    <span className="mr-3 text-brand-gold text-lg leading-none mt-1">›</span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;