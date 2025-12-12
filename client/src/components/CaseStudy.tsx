import { useState } from "react";
import { X, ZoomIn } from "lucide-react";
import caseStudy1a from "@assets/1_1765532934583.jpg";
import caseStudy1b from "@assets/2_1765532934583.jpg";
import caseStudy1c from "@assets/3_1765532934582.jpg";

export function CaseStudy() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const caseStudy1Images = [
    { src: caseStudy1a, alt: "Strategy Content Storytelling - Success Rate 80%, 600+ brands" },
    { src: caseStudy1b, alt: "Bakeport.id - 12.000 followers organik dalam 3 bulan" },
    { src: caseStudy1c, alt: "Sweetness Delish - 4 juta views, 796 penjualan" },
  ];

  return (
    <>
      <section className="bg-black py-24">
        <div className="max-w-7xl mx-auto px-6">
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

          <div className="space-y-20">
            <div className="space-y-8">
              <div className="flex items-center gap-3 mb-8">
                <span className="text-3xl">📌</span>
                <h3 className="text-2xl md:text-3xl font-bold text-white">
                  Case Study #1 — <span className="text-brand-purple">Konten Organik yang Ubah View Jadi Penjualan</span>
                </h3>
              </div>
              
              <div className="grid grid-cols-1 gap-8">
                {caseStudy1Images.map((image, index) => (
                  <div 
                    key={index}
                    onClick={() => setSelectedImage(image.src)}
                    className="rounded-2xl overflow-hidden border border-white/10 hover:border-brand-purple/50 transition-all cursor-pointer group relative"
                  >
                    <img 
                      src={image.src} 
                      alt={image.alt}
                      className="w-full h-auto object-cover"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all flex items-center justify-center">
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity bg-brand-purple text-white px-4 py-2 rounded-full flex items-center gap-2">
                        <ZoomIn className="w-5 h-5" />
                        <span className="font-semibold">Klik untuk memperbesar</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-8">
              <div className="flex items-center gap-3 mb-8">
                <span className="text-3xl">📌</span>
                <h3 className="text-2xl md:text-3xl font-bold text-white">
                  Case Study #2 — <span className="text-yellow-400">Affiliate TikTok yang Bikin Omzet Meledak</span>
                </h3>
              </div>
              
              <div className="bg-brand-gray/30 rounded-2xl p-12 border border-white/10 text-center">
                <p className="text-gray-400 text-xl">Screenshot menyusul</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button 
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 text-white hover:text-brand-purple transition-colors"
          >
            <X className="w-10 h-10" />
          </button>
          <img 
            src={selectedImage} 
            alt="Full size view"
            className="max-w-full max-h-[90vh] object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  );
}
