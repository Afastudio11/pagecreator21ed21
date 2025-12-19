import { useState, useEffect } from "react";
import { ArrowUpRight, CheckCircle2, Clock, Gift, Utensils, Ticket, BookOpen } from "lucide-react";
import { EVENT_DETAILS } from "@/lib/constants";
import { Star } from "lucide-react";

const EVENT_DATE = new Date("2026-01-31T10:00:00+07:00");

function useCountdown() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const target = EVENT_DATE.getTime();
      const difference = target - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(timer);
  }, []);

  return timeLeft;
}

const bonusIcons = [Gift, Utensils, Ticket, BookOpen];

export function Pricing() {
  const { days, hours, minutes, seconds } = useCountdown();

  return (
    <section id="pricing" className="bg-black py-24 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          <div className="space-y-8">
            <h2 className="text-4xl md:text-6xl font-bold leading-tight">
              Investasi Terbaik <br/>
              <span className="text-gray-500">untuk Bisnis Anda</span>
            </h2>
            
            <div className="relative mt-12 group">
              <div className="absolute -inset-1 bg-gradient-to-r from-yellow-400 to-white rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
              <div className="relative bg-brand-gray rounded-2xl overflow-hidden aspect-video">
                <img 
                  src="https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=800&h=600&fit=crop"
                  alt="Workshop collaboration" 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute bottom-6 left-6 bg-yellow-400 text-black px-4 py-2 font-bold text-sm uppercase tracking-wider rounded-md">
                  F&B Digital Workshop
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-8 lg:pt-12">
            <div className="flex gap-4">
              <Star className="text-yellow-400 w-8 h-8 flex-shrink-0 fill-yellow-400 animate-spin-slow" />
              <p className="text-lg text-gray-400 leading-relaxed">
                Dapatkan akses penuh ke workshop, materi eksklusif, dan kesempatan networking dengan para expert industri.
              </p>
            </div>

            <div className="bg-gradient-to-r from-yellow-400/20 to-yellow-400/5 p-6 rounded-2xl border border-yellow-400/30">
              <div className="flex items-center gap-2 mb-4">
                <Clock className="w-5 h-5 text-yellow-400" />
                <span className="text-yellow-400 font-semibold text-sm uppercase tracking-wider">Promo Berakhir Dalam</span>
              </div>
              <div className="grid grid-cols-4 gap-3 text-center">
                <div className="bg-black/50 rounded-xl p-3">
                  <div className="text-3xl md:text-4xl font-bold text-white">{String(days).padStart(2, '0')}</div>
                  <div className="text-xs text-gray-400 uppercase mt-1">Hari</div>
                </div>
                <div className="bg-black/50 rounded-xl p-3">
                  <div className="text-3xl md:text-4xl font-bold text-white">{String(hours).padStart(2, '0')}</div>
                  <div className="text-xs text-gray-400 uppercase mt-1">Jam</div>
                </div>
                <div className="bg-black/50 rounded-xl p-3">
                  <div className="text-3xl md:text-4xl font-bold text-white">{String(minutes).padStart(2, '0')}</div>
                  <div className="text-xs text-gray-400 uppercase mt-1">Menit</div>
                </div>
                <div className="bg-black/50 rounded-xl p-3">
                  <div className="text-3xl md:text-4xl font-bold text-yellow-400">{String(seconds).padStart(2, '0')}</div>
                  <div className="text-xs text-gray-400 uppercase mt-1">Detik</div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-brand-gray rounded-xl p-6 border border-yellow-400/30 hover:border-yellow-400 transition-colors group relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-yellow-400 text-black text-xs font-bold px-3 py-1 rounded-bl-lg">
                  BEST VALUE
                </div>
                <h3 className="font-bold text-lg mb-2 mt-4">Early Bird</h3>
                <p className="text-gray-400 text-sm mb-4">Harga spesial pendaftar awal</p>
                <div className="flex items-baseline gap-2 mb-4">
                  <span className="text-sm text-gray-500 line-through">IDR {EVENT_DETAILS.price.original}</span>
                  <span className="text-2xl font-bold text-yellow-400">IDR {EVENT_DETAILS.price.promo}</span>
                </div>
                <button 
                  className="w-full btn-fancy py-3"
                  onClick={() => window.open('https://fine-creative.myr.id/pl/marketalkhsow-jualan-fnb-tembus-jutaan-lewat-affiiate-tiktok', '_blank')}
                >
                  <span>Daftar Sekarang</span> <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>

              <div className="bg-brand-gray rounded-xl p-6 border border-white/10 hover:border-white/30 transition-colors group relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-brand-pink text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                  GROUP
                </div>
                <h3 className="font-bold text-lg mb-2 mt-4">Group Package</h3>
                <p className="text-gray-400 text-sm mb-4">Daftar bareng 5 orang</p>
                <div className="flex items-baseline gap-2 mb-4">
                  <span className="text-2xl font-bold text-white">IDR {EVENT_DETAILS.price.special}</span>
                  <span className="text-sm text-gray-500">/pax</span>
                </div>
                <button 
                  className="w-full bg-white/10 text-white py-3 rounded-full font-bold flex items-center justify-center gap-2 hover:bg-yellow-400 hover:text-black transition-all"
                  onClick={() => window.open('https://fine-creative.myr.id/pl/marketalkhsow-jualan-fnb-tembus-jutaan-lewat-affiiate-tiktok', '_blank')}
                >
                  Klaim Promo <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-6 text-center">
                BONUS SPESIAL <span className="text-yellow-400">UNTUK SELURUH PESERTA</span>
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {EVENT_DETAILS.benefits.map((benefit, i) => {
                  const IconComponent = bonusIcons[i];
                  return (
                    <div key={i} className="bg-brand-gray/50 p-4 rounded-xl border border-white/10 hover:border-yellow-400/50 transition-all group flex items-start gap-3">
                      <div className="w-10 h-10 bg-yellow-400/10 rounded-lg flex items-center justify-center group-hover:bg-yellow-400/20 transition-colors flex-shrink-0">
                        <IconComponent className="w-5 h-5 text-yellow-400" />
                      </div>
                      <span className="text-white font-medium text-sm">{benefit}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
