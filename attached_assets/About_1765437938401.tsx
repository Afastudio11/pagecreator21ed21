import React from 'react';
import { Star } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section className="bg-black py-24 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          <div className="space-y-8">
            <h2 className="text-4xl md:text-6xl font-bold leading-tight">
              Turning Ideas Into <br/>
              <span className="text-gray-500">Masterpieces</span>
            </h2>
            
            <div className="relative mt-12 group">
              <div className="absolute -inset-1 bg-gradient-to-r from-brand-green to-white rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
              <div className="relative bg-brand-gray rounded-2xl overflow-hidden aspect-video">
                <img 
                  src="https://picsum.photos/id/452/800/600" 
                  alt="Team collaboration" 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute bottom-6 left-6 bg-brand-green text-black px-4 py-2 font-bold text-sm uppercase tracking-wider rounded-md">
                  A Creative Design Agency
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-12 lg:pt-12">
             <div className="flex gap-4">
                <Star className="text-brand-green w-8 h-8 flex-shrink-0 fill-brand-green animate-spin-slow" />
                <p className="text-lg text-gray-400 leading-relaxed">
                  We may be a compact team, but our creativity knows no bounds. By staying agile and working hand-in-hand with our clients, we transform ideas into cutting-edge designs that make a lasting impression.
                </p>
             </div>

             <div className="grid grid-cols-2 gap-4">
               <div className="bg-brand-gray rounded-xl p-4 h-64 overflow-hidden relative group">
                  <img 
                    src="https://picsum.photos/id/435/400/600" 
                    alt="Process" 
                    className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-110 transition-all duration-500"
                  />
                  <div className="absolute bottom-4 left-4 font-bold">Concept</div>
               </div>
               <div className="bg-brand-gray rounded-xl p-4 h-64 overflow-hidden relative group mt-12">
                  <img 
                    src="https://picsum.photos/id/338/400/600" 
                    alt="Execution" 
                    className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-110 transition-all duration-500"
                  />
                   <div className="absolute bottom-4 left-4 font-bold">Execution</div>
               </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;