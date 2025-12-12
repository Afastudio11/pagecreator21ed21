import { Trophy, Medal, Award, CheckCircle2 } from "lucide-react";
import { PRIZES } from "@/lib/constants";

const medalIcons: Record<string, { icon: React.ElementType; color: string; bg: string }> = {
  gold: { icon: Trophy, color: "text-yellow-400", bg: "bg-yellow-400/20 border-yellow-400/50" },
  silver: { icon: Medal, color: "text-gray-300", bg: "bg-gray-300/20 border-gray-300/50" },
  bronze: { icon: Award, color: "text-amber-600", bg: "bg-amber-600/20 border-amber-600/50" },
};

const rankLabels: Record<number, string> = { 1: "Juara 1", 2: "Juara 2", 3: "Juara 3" };

export function Prizes() {
  const displayOrder = [1, 0, 2];
  
  return (
    <section className="bg-black py-24 text-white">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            HADIAH UNTUK <span className="text-yellow-400">3 PESERTA TERBAIK</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-end">
          {displayOrder.map((prizeIndex) => {
            const prize = PRIZES[prizeIndex];
            const { icon: IconComponent, color, bg } = medalIcons[prize.medal];
            const isFirst = prize.rank === 1;
            return (
              <div 
                key={prizeIndex}
                className={`p-6 rounded-2xl border transition-all ${bg} ${isFirst ? 'md:order-2 md:-mt-4 md:pb-10 md:scale-105' : prizeIndex === 0 ? 'md:order-1' : 'md:order-3'}`}
              >
                <div className="text-center mb-6">
                  <IconComponent className={`w-12 h-12 ${color} mx-auto mb-3`} />
                  <h3 className={`text-2xl font-bold ${color}`}>{rankLabels[prize.rank]}</h3>
                </div>
                <div className="space-y-3">
                  {prize.items.map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle2 className={`w-5 h-5 ${color} flex-shrink-0 mt-0.5`} />
                      <span className="text-white text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
