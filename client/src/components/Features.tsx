import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { LEARNING_POINTS } from "@/lib/constants";

export function Features() {
  const [activeService, setActiveService] = useState<number>(0);

  return (
    <section id="materi" className="bg-brand-gray/30 py-24 rounded-[3rem] mx-4 md:mx-8 mb-8 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-brand-purple/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16">
        
        <div className="space-y-8">
          <div className="inline-block bg-brand-purple text-white px-4 py-1 rounded-full text-sm font-bold uppercase mb-4">
            Materi Workshop
          </div>
          <h2 className="text-4xl font-bold text-white mb-4">
            APA YANG AKAN KAMU PELAJARI?
          </h2>
          <p className="text-gray-400 mb-4">Dalam 3 jam intensif, kamu akan menguasai:</p>

          <div className="space-y-4">
            {LEARNING_POINTS.map((service, index) => (
              <div 
                key={index}
                onMouseEnter={() => setActiveService(index)}
                className={`group flex items-center justify-between p-6 rounded-2xl border transition-all duration-300 cursor-pointer ${
                  activeService === index 
                    ? 'border-brand-purple bg-white/5' 
                    : 'border-white/10 hover:border-white/30'
                }`}
              >
                <div className="flex items-center gap-6">
                  <span className="text-sm text-gray-500 font-mono">0{index + 1}</span>
                  <div>
                    <h3 className={`text-xl font-bold transition-colors ${activeService === index ? 'text-brand-purple' : 'text-white'}`}>
                      {service.title}
                    </h3>
                    {activeService === index && (
                      <p className="text-gray-400 text-sm mt-1 animate-fadeIn">{service.description}</p>
                    )}
                  </div>
                </div>
                <div className={`w-10 h-10 rounded-full flex items-center justify-center border transition-all duration-300 ${
                  activeService === index ? 'bg-brand-purple border-brand-purple' : 'border-white/20'
                }`}>
                  <ArrowUpRight className={`w-5 h-5 transition-colors ${activeService === index ? 'text-white' : 'text-white'}`} />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 p-4 bg-yellow-400/10 rounded-xl border border-yellow-400/30">
            <p className="text-yellow-400 font-semibold mb-2">Cocok untuk:</p>
            <div className="flex flex-wrap gap-2">
              <span className="text-xs bg-yellow-400/20 text-yellow-400 px-3 py-1 rounded-full">Pemilik bisnis F&B</span>
              <span className="text-xs bg-yellow-400/20 text-yellow-400 px-3 py-1 rounded-full">Content Creator</span>
              <span className="text-xs bg-yellow-400/20 text-yellow-400 px-3 py-1 rounded-full">Affiliate</span>
              <span className="text-xs bg-yellow-400/20 text-yellow-400 px-3 py-1 rounded-full">Tim Marketing Brand F&B</span>
            </div>
          </div>
        </div>

        <div className="hidden lg:flex relative h-full min-h-[500px] bg-black rounded-3xl overflow-hidden p-8 flex-col justify-between group">
          <img 
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=800&fit=crop"
            alt="Expert at work" 
            className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
          />
          
          <div className="relative z-10 flex justify-between items-start">
            <div className="w-24 h-24 rounded-full border border-white/20 backdrop-blur-sm flex flex-col items-center justify-center text-center p-2">
              <span className="text-xs text-gray-300">Workshop</span>
              <span className="text-[10px] text-gray-400">31 Januari 2025</span>
            </div>
            <button className="bg-white/10 backdrop-blur-md p-4 rounded-full hover:bg-brand-purple hover:text-white transition-all">
              <ArrowUpRight className="w-6 h-6 text-white" />
            </button>
          </div>

          <div className="relative z-10 bg-brand-purple p-6 rounded-2xl text-white max-w-xs ml-auto">
            <p className="font-bold text-lg mb-4">Ingin belajar langsung dari 3 expert industry leaders?</p>
            <button 
              className="bg-white px-6 py-3 rounded-full font-bold flex items-center gap-2 hover:bg-black hover:text-white transition-all w-full justify-center text-black"
              onClick={() => document.getElementById('speakers')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Lihat Speakers <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
