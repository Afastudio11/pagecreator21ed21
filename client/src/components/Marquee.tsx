import { Plus } from 'lucide-react';

export function Marquee() {
  return (
    <div className="bg-black py-12 overflow-hidden border-t border-b border-white/5">
      <div className="flex items-center gap-12 animate-scroll whitespace-nowrap">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div key={i} className="flex items-center gap-12">
            <span className="text-5xl md:text-7xl font-black text-transparent stroke-text uppercase">TikTok</span>
            <Plus className="w-8 h-8 text-brand-purple" />
            <span className="text-5xl md:text-7xl font-black text-white uppercase">Affiliate</span>
            <Plus className="w-8 h-8 text-brand-purple" />
            <span className="text-5xl md:text-7xl font-black text-transparent stroke-text uppercase">Growth</span>
            <Plus className="w-8 h-8 text-brand-purple" />
          </div>
        ))}
      </div>
    </div>
  );
}
