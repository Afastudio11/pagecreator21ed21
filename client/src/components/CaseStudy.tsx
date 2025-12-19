import { useState } from "react";
import { X, ZoomIn } from "lucide-react";
import caseStudy1a from "@assets/1_1766161740117.png";
import caseStudy1b from "@assets/2_1766161740118.png";
import caseStudy1c from "@assets/3_1766161740118.png";
import caseStudy1d from "@assets/4_1766161740117.png";
import caseStudy2a from "@assets/Cover_1_copy_1765620420692.png";
import caseStudy2b from "@assets/9_1765620420691.png";

export function CaseStudy() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const caseStudy1Images = [
    { src: caseStudy1a, alt: "Strategy Content Storytelling - Success Rate 80%, 600+ brands" },
    { src: caseStudy1b, alt: "Caramelt Patisserie - Fully booked, 11.8K followers" },
    { src: caseStudy1c, alt: "Bakeport.id - 12.000 followers organik dalam 3 bulan" },
    { src: caseStudy1d, alt: "Sweetness Delish - 4 juta views, 796 penjualan" },
  ];

  const caseStudy2Images = [
    { src: caseStudy2a, alt: "OkkingBotol - 215 affiliator dari Exclusive Campaign Shopee Video" },
    { src: caseStudy2b, alt: "Yosef Abas - Exclusive Campaign dampak jangka panjang" },
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
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {caseStudy2Images.map((image, index) => (
                  <div 
                    key={index}
                    onClick={() => setSelectedImage(image.src)}
                    className="rounded-2xl overflow-hidden border border-white/10 hover:border-yellow-400/50 transition-all cursor-pointer group relative"
                  >
                    <img 
                      src={image.src} 
                      alt={image.alt}
                      className="w-full h-auto object-cover"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all flex items-center justify-center">
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity bg-yellow-400 text-black px-4 py-2 rounded-full flex items-center gap-2">
                        <ZoomIn className="w-5 h-5" />
                        <span className="font-semibold">Klik untuk memperbesar</span>
                      </div>
                    </div>
                  </div>
                ))}
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
            className="absolute top-6 right-6 bg-white/20 hover:bg-brand-purple text-white p-3 rounded-full transition-colors"
          >
            <X className="w-8 h-8" />
          </button>
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-white/20 text-white px-4 py-2 rounded-full text-sm">
            Klik di mana saja atau tombol X untuk menutup
          </div>
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
