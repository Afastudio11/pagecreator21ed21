import { ArrowRight, Clock, MapPin, Calendar } from "lucide-react";
import { EVENT_DETAILS } from "@/lib/constants";

export function Hero() {
  return (
    <div className="relative bg-white text-black pt-32 pb-24 md:pt-40 md:pb-32 rounded-b-[3rem] md:rounded-b-[5rem] overflow-hidden z-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative">
        
        <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-400/20 blur-[100px] rounded-full pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 relative z-10">
            <h1 className="text-4xl md:text-6xl font-extrabold leading-[1.1] tracking-tight">
              Ingin Jualan F&B Tembus <span className="relative inline-block">
                Jutaan
                <svg className="absolute w-full h-3 -bottom-1 left-0 text-yellow-400" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="3" fill="none" />
                </svg>
              </span> Lewat TikTok?
            </h1>
            
            <p className="text-lg text-gray-600 max-w-md leading-relaxed">
              Pelajari strategi growth dari awareness ke omzet langsung dari 3 expert industri. Jangan sampai ketinggalan momentum digital 2025!
            </p>

            <div className="flex flex-wrap items-center gap-3 text-sm">
              <div className="flex items-center gap-2 bg-yellow-400 text-black px-4 py-2 rounded-lg font-semibold">
                <Calendar className="w-4 h-4" />
                {EVENT_DETAILS.date}
              </div>
              <div className="flex items-center gap-2 bg-yellow-400 text-black px-4 py-2 rounded-lg font-semibold">
                <Clock className="w-4 h-4" />
                {EVENT_DETAILS.time}
              </div>
              <div className="flex items-center gap-2 bg-yellow-400 text-black px-4 py-2 rounded-lg font-semibold">
                <MapPin className="w-4 h-4" />
                {EVENT_DETAILS.location}
              </div>
            </div>
            
            <div className="flex flex-wrap items-center gap-4">
              <button 
                className="bg-black text-white px-8 py-4 rounded-full font-bold flex items-center gap-2 hover:bg-gray-800 transition-all duration-300 shadow-lg group"
                onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Amankan Kursi Anda
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button 
                className="bg-purple-500 text-white px-6 py-4 rounded-full font-bold hover:bg-purple-600 transition-all duration-300 shadow-lg"
                onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Limited Seat Available!
              </button>
            </div>
          </div>

          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md aspect-[4/5] md:aspect-square">
              <div className="absolute inset-0 bg-yellow-100 rounded-full rotate-6 scale-95 transform origin-bottom-right"></div>
              <div className="absolute inset-0 bg-yellow-400 rounded-full -rotate-3 scale-[0.98] opacity-80"></div>
              
              <img 
                src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&h=800&fit=crop"
                alt="Workshop Creative"
                className="relative w-full h-full object-cover rounded-full border-4 border-white shadow-2xl z-10 hover:scale-[1.02] transition-transform duration-500"
              />

              <div className="absolute top-10 -right-4 md:-right-10 bg-white p-4 rounded-2xl shadow-xl z-20 flex flex-col items-center">
                <div className="flex gap-1 mb-1">
                  {[1,2,3,4,5].map(i => <div key={i} className="w-4 h-4 text-yellow-400">★</div>)}
                </div>
                <span className="font-bold text-2xl">3 Expert</span>
                <span className="text-xs text-gray-500 uppercase tracking-wide">Industry Leaders</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
