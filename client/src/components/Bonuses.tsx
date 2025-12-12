import { Gift, Utensils, Ticket, BookOpen } from "lucide-react";
import { BONUSES } from "@/lib/constants";

const iconMap: Record<string, React.ElementType> = {
  gift: Gift,
  utensils: Utensils,
  ticket: Ticket,
  book: BookOpen,
};

export function Bonuses() {
  return (
    <section className="bg-brand-gray/30 py-24 rounded-[3rem] mx-4 md:mx-8 mb-8">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-12">
          <div className="inline-block bg-yellow-400 text-black px-4 py-1 rounded-full text-sm font-bold uppercase mb-4">
            Bonus Eksklusif
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            BONUS SPESIAL <span className="text-yellow-400">UNTUK SELURUH PESERTA</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {BONUSES.map((bonus, index) => {
            const IconComponent = iconMap[bonus.icon];
            return (
              <div 
                key={index}
                className="bg-black p-6 rounded-2xl border border-white/10 hover:border-yellow-400/50 transition-all group"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-yellow-400/10 rounded-xl flex items-center justify-center group-hover:bg-yellow-400/20 transition-colors">
                    <IconComponent className="w-6 h-6 text-yellow-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-white font-bold text-lg mb-1">{bonus.title}</h3>
                    {bonus.note && (
                      <p className="text-yellow-400 text-sm">{bonus.note}</p>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
