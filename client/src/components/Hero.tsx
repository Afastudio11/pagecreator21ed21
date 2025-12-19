import { ArrowRight } from "lucide-react";
import { EVENT_DETAILS } from "@/lib/constants";
import calendarIcon from "@assets/1_1765627710229.png";
import clockIcon from "@assets/2_1765627710229.png";
import locationIcon from "@assets/3_1765627710229.png";

export function Hero() {
  return (
    <div className="relative bg-white text-black pt-32 pb-24 md:pt-40 md:pb-32 rounded-b-[3rem] md:rounded-b-[5rem] overflow-hidden z-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative">
        
        <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-400/20 blur-[100px] rounded-full pointer-events-none" />

        <div className="flex flex-col gap-12 items-center">
          <div className="space-y-8 relative z-10 text-center max-w-4xl">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-extrabold leading-[1.1] tracking-tight">
                Frustasi Omzet Jualan Gak Naik-naik?
              </h1>
              <h2 className="text-3xl md:text-5xl font-bold leading-[1.2] tracking-tight">
                Pelajari Rahasia Tembus <span className="relative inline-block">
                  Untung Jutaan
                  <svg className="absolute w-full h-3 -bottom-1 left-0 text-yellow-400" viewBox="0 0 100 10" preserveAspectRatio="none">
                    <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="3" fill="none" />
                  </svg>
                </span> Lewat Konten & Affiliate
              </h2>
              <h3 className="text-2xl md:text-3xl font-semibold leading-[1.2]">
                Lewat Seminar Bareng 3 Expert Marketing & Tiktok Official Partner
              </h3>
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
                onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Amankan Kursi Anda
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button 
                className="btn-fancy px-6 py-4"
                onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <span>Limited Seat Available!</span>
              </button>
            </div>
          </div>

          <div className="relative w-full max-w-3xl rounded-2xl overflow-hidden">
            <img 
              src="/WhatsApp_Image_2025-12-19_at_18.36.30_1766159609631.jpeg"
              alt="Event Livestream Performance"
              className="w-full h-auto object-cover z-10"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
