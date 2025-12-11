import React from 'react';
import { Plus } from 'lucide-react';

const Marquee: React.FC = () => {
  return (
    <div className="bg-black py-12 overflow-hidden border-t border-b border-white/5">
      <div className="flex items-center gap-12 animate-scroll whitespace-nowrap">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div key={i} className="flex items-center gap-12">
            <span className="text-5xl md:text-7xl font-black text-transparent stroke-text uppercase">Innovate</span>
            <Plus className="w-8 h-8 text-brand-green" />
            <span className="text-5xl md:text-7xl font-black text-white uppercase">Inspire</span>
            <Plus className="w-8 h-8 text-brand-green" />
            <span className="text-5xl md:text-7xl font-black text-transparent stroke-text uppercase">Create</span>
            <Plus className="w-8 h-8 text-brand-green" />
          </div>
        ))}
      </div>
      <style>{`
        .stroke-text {
          -webkit-text-stroke: 1px rgba(255, 255, 255, 0.3);
        }
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          animation: scroll 20s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default Marquee;