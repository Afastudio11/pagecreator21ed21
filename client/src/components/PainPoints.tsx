import { AlertCircle, CheckCircle } from "lucide-react";
import { PAIN_POINTS } from "@/lib/constants";

export function PainPoints() {
  return (
    <section className="bg-black py-24 text-white">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            KENAPA BISNIS F&B KAMU <span className="text-yellow-400">BELUM NAIK OMZET?</span>
          </h2>
          <p className="text-gray-400 text-lg">Coba cek, apakah kamu mengalami hal ini:</p>
        </div>

        <div className="space-y-4 mb-12">
          {PAIN_POINTS.map((point, index) => (
            <div 
              key={index}
              className="flex items-start gap-4 bg-brand-gray p-5 rounded-xl border border-white/10 hover:border-yellow-400/50 transition-colors"
            >
              <AlertCircle className="w-6 h-6 text-yellow-400 flex-shrink-0 mt-0.5" />
              <p className="text-white text-lg">{point}</p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-yellow-400/20 to-yellow-400/5 p-6 rounded-2xl border border-yellow-400/30">
          <div className="flex items-start gap-4">
            <CheckCircle className="w-8 h-8 text-yellow-400 flex-shrink-0" />
            <p className="text-xl font-semibold">
              Kalau salah satu aja relate, event ini dibuat <span className="text-yellow-400">khusus untuk kamu.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
