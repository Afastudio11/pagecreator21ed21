import { BONUSES } from "@/lib/constants";

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
            return (
              <div 
                key={index}
                className="bg-black p-6 rounded-2xl border border-white/10 hover:border-yellow-400/50 transition-all group"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-yellow-400/10 rounded-xl flex items-center justify-center group-hover:bg-yellow-400/20 transition-colors text-2xl">
                    {bonus.emoji}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-white font-bold text-lg mb-1">
                      <span className="text-yellow-400">{index + 1}.</span> {bonus.title}
                    </h3>
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
