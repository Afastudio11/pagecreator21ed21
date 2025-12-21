import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import { EVENT_DETAILS } from "@/lib/constants";
import calendarIcon from "@assets/1_1765627710229.png";
import clockIcon from "@assets/2_1765627710229.png";
import locationIcon from "@assets/3_1765627710229.png";
import image1 from "@assets/4_1766161546555.png";
import image2 from "@assets/5_1766161546555.png";

export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const images = [image1, image2];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative bg-white text-black pt-32 pb-24 md:pt-40 md:pb-32 rounded-b-[3rem] md:rounded-b-[5rem] overflow-hidden z-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative">
        
        <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-400/20 blur-[100px] rounded-full pointer-events-none" />

        <div className="flex flex-col gap-12 items-center">
          <div className="space-y-8 relative z-10 text-center max-w-4xl">
            <div className="space-y-2">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight">Frustasi Omzet Jualan 
              Gak Naik-naik?</h1>
              <div className="space-y-0">
                <h2 className="text-base md:text-xl lg:text-3xl font-semibold leading-[1.2] tracking-tight">
                  Pelajari Rahasia Tembus <span className="relative inline-block">
                    Untung Jutaan
                    <svg className="absolute w-full h-3 -bottom-1 left-0 text-yellow-400" viewBox="0 0 100 10" preserveAspectRatio="none">
                      <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="3" fill="none" />
                    </svg>
                  </span> Lewat Konten & Affiliate
                </h2>
                <h3 className="text-sm md:text-lg lg:text-2xl font-semibold leading-[1.2]">
                  Lewat Seminar Bareng 3 Expert Marketing & Tiktok Official Partner
                </h3>
              </div>
            </div>
            
            <p className="text-lg text-gray-600 leading-relaxed">
              Bangun strategi konten yang bukan cuma viral, tapi beneran ngasih penjualan, ditambah cara memaksimalkan TikTok & Shopee Affiliate sebagai mesin transaksi otomatis.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3 text-sm">
              <div className="flex items-center gap-2 bg-yellow-400 text-black px-4 py-2 rounded-lg font-semibold">
                <img src={calendarIcon} alt="Calendar" className="w-5 h-5 object-contain" />
                {EVENT_DETAILS.date}
              </div>
              <div className="flex items-center gap-2 bg-yellow-400 text-black px-4 py-2 rounded-lg font-semibold">
                <img src={clockIcon} alt="Clock" className="w-5 h-5 object-contain" />
                {EVENT_DETAILS.time}
              </div>
              <div className="flex items-center gap-2 bg-yellow-400 text-black px-4 py-2 rounded-lg font-semibold">
                <img src={locationIcon} alt="Location" className="w-5 h-5 object-contain" />
                {EVENT_DETAILS.location}
              </div>
            </div>
            
            <div className="flex flex-wrap items-center justify-center gap-4">
              <button 
                className="bg-black text-white px-8 py-4 rounded-full font-bold flex items-center gap-2 hover:bg-gray-800 transition-all duration-300 shadow-lg group"
                onClick={() => window.open('https://fine-creative.myr.id/pl/marketalkhsow-jualan-fnb-tembus-jutaan-lewat-affiiate-tiktok', '_blank')}
              >
                Amankan Kursi Anda
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button 
                className="btn-fancy px-6 py-4"
                onClick={() => window.open('https://fine-creative.myr.id/pl/marketalkhsow-jualan-fnb-tembus-jutaan-lewat-affiiate-tiktok', '_blank')}
              >
                <span>Limited Seat Available!</span>
              </button>
            </div>
          </div>

          <div className="relative w-full max-w-3xl rounded-2xl overflow-hidden">
            <div className="relative w-full h-auto">
              {images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Slide ${index + 1}`}
                  className={`w-full h-auto object-cover transition-opacity duration-1000 ${
                    index === currentSlide ? 'opacity-100' : 'opacity-0 absolute inset-0'
                  }`}
                />
              ))}
            </div>
            
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentSlide ? 'bg-yellow-400 w-8' : 'bg-gray-400'
                  }`}
                  data-testid={`button-slide-${index}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
