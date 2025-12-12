import caseStudy1a from "@assets/1_1765532934583.jpg";
import caseStudy1b from "@assets/2_1765532934583.jpg";
import caseStudy1c from "@assets/3_1765532934582.jpg";

export function CaseStudy() {
  return (
    <section className="bg-black py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-block bg-brand-purple text-white px-4 py-1 rounded-full text-sm font-bold uppercase mb-4">
            Studi Kasus
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            STUDI KASUS NYATA
          </h2>
          <p className="text-gray-400 text-lg">
            Hasil Strategi yang Akan Diajarkan
          </p>
        </div>

        <div className="space-y-16">
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-2xl">📌</span>
              <h3 className="text-2xl md:text-3xl font-bold text-white">
                Case Study #1 — <span className="text-brand-purple">Konten Organik yang Ubah View Jadi Penjualan</span>
              </h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="rounded-2xl overflow-hidden border border-white/10 hover:border-brand-purple/50 transition-all">
                <img 
                  src={caseStudy1a} 
                  alt="Strategy Content Storytelling - Success Rate 80%, 600+ brands" 
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="rounded-2xl overflow-hidden border border-white/10 hover:border-brand-purple/50 transition-all">
                <img 
                  src={caseStudy1b} 
                  alt="Bakeport.id - 12.000 followers organik dalam 3 bulan" 
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="rounded-2xl overflow-hidden border border-white/10 hover:border-brand-purple/50 transition-all">
                <img 
                  src={caseStudy1c} 
                  alt="Sweetness Delish - 4 juta views, 796 penjualan" 
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-2xl">📌</span>
              <h3 className="text-2xl md:text-3xl font-bold text-white">
                Case Study #2 — <span className="text-yellow-400">Affiliate TikTok yang Bikin Omzet Meledak</span>
              </h3>
            </div>
            
            <div className="bg-brand-gray/30 rounded-2xl p-8 border border-white/10 text-center">
              <p className="text-gray-400 text-lg">Screenshot menyusul</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
