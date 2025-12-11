import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Service } from '../types';

const servicesList: Service[] = [
  { id: 1, title: 'UI/UX Design', description: 'User-centric interfaces that delight.', link: '#' },
  { id: 2, title: 'Web Development', description: 'Robust, scalable, and fast web solutions.', link: '#' },
  { id: 3, title: '3D Designs', description: 'Immersive visuals that pop.', link: '#' },
  { id: 4, title: 'Motion Graphics', description: 'Storytelling through movement.', link: '#' },
];

const Services: React.FC = () => {
  const [activeService, setActiveService] = useState<number | null>(1);

  return (
    <section className="bg-brand-gray/30 py-24 rounded-[3rem] mx-4 md:mx-8 mb-8 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-brand-green/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16">
        
        {/* Left: List */}
        <div className="space-y-8">
          <div className="inline-block bg-brand-green text-black px-4 py-1 rounded-full text-sm font-bold uppercase mb-4">
            Our Services
          </div>
          <h2 className="text-4xl font-bold text-white mb-8">
            We offer a range of creative and digital services designed to help your brand stand out.
          </h2>

          <div className="space-y-4">
            {servicesList.map((service) => (
              <div 
                key={service.id}
                onMouseEnter={() => setActiveService(service.id)}
                className={`group flex items-center justify-between p-6 rounded-2xl border transition-all duration-300 cursor-pointer ${
                  activeService === service.id 
                    ? 'border-brand-green bg-white/5' 
                    : 'border-white/10 hover:border-white/30'
                }`}
              >
                <div className="flex items-center gap-6">
                   <span className="text-sm text-gray-500 font-mono">0{service.id}</span>
                   <div>
                     <h3 className={`text-xl font-bold transition-colors ${activeService === service.id ? 'text-brand-green' : 'text-white'}`}>
                       {service.title}
                     </h3>
                     {activeService === service.id && (
                       <p className="text-gray-400 text-sm mt-1 animate-fadeIn">{service.description}</p>
                     )}
                   </div>
                </div>
                <div className={`w-10 h-10 rounded-full flex items-center justify-center border transition-all duration-300 ${
                  activeService === service.id ? 'bg-brand-green border-brand-green' : 'border-white/20'
                }`}>
                  <ArrowUpRight className={`w-5 h-5 transition-colors ${activeService === service.id ? 'text-black' : 'text-white'}`} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Visual */}
        <div className="relative h-full min-h-[500px] bg-black rounded-3xl overflow-hidden p-8 flex flex-col justify-between group">
           <img 
             src="https://picsum.photos/id/447/600/800" 
             alt="Expert at work" 
             className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
           />
           
           <div className="relative z-10 flex justify-between items-start">
              <div className="w-24 h-24 rounded-full border border-white/20 backdrop-blur-sm flex flex-col items-center justify-center text-center p-2">
                 <span className="text-xs text-gray-300">Ever wondered how</span>
                 <span className="text-[10px] text-gray-400">design magic happens?</span>
              </div>
              <button className="bg-white/10 backdrop-blur-md p-4 rounded-full hover:bg-brand-green hover:text-black transition-all">
                <ArrowUpRight className="w-6 h-6 text-white hover:text-black" />
              </button>
           </div>

           <div className="relative z-10 bg-brand-green p-6 rounded-2xl text-black max-w-xs ml-auto">
             <p className="font-bold text-lg mb-4">Looking for design experts who can bring your vision to life?</p>
             <button className="bg-white px-6 py-3 rounded-full font-bold flex items-center gap-2 hover:bg-black hover:text-white transition-all w-full justify-center">
               Meet our expert <ArrowUpRight className="w-4 h-4" />
             </button>
           </div>
        </div>

      </div>
    </section>
  );
};

export default Services;