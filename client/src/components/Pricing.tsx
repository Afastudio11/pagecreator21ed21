import { ArrowUpRight, CheckCircle2, QrCode } from "lucide-react";
import { EVENT_DETAILS } from "@/lib/constants";
import { Star } from "lucide-react";

export function Pricing() {
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
              <div className="absolute -inset-1 bg-gradient-to-r from-brand-purple to-white rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
              <div className="relative bg-brand-gray rounded-2xl overflow-hidden aspect-video">
                <img 
                  src="https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=800&h=600&fit=crop"
                  alt="Workshop collaboration" 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute bottom-6 left-6 bg-brand-purple text-white px-4 py-2 font-bold text-sm uppercase tracking-wider rounded-md">
                  F&B Digital Workshop
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-12 lg:pt-12">
            <div className="flex gap-4">
              <Star className="text-brand-purple w-8 h-8 flex-shrink-0 fill-brand-purple animate-spin-slow" />
              <p className="text-lg text-gray-400 leading-relaxed">
                Dapatkan akses penuh ke workshop, materi eksklusif, dan kesempatan networking dengan para expert industri.
              </p>
            </div>

            <div className="space-y-4">
              {EVENT_DETAILS.benefits.map((benefit, i) => (
                <div key={i} className="flex items-center gap-3 text-white">
                  <CheckCircle2 className="w-5 h-5 text-brand-purple flex-shrink-0" />
                  <span className="font-medium">{benefit}</span>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-brand-gray rounded-xl p-6 border border-brand-purple/30 hover:border-brand-purple transition-colors group relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-brand-purple text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                  BEST VALUE
                </div>
                <h3 className="font-bold text-lg mb-2 mt-4">Early Bird</h3>
                <p className="text-gray-400 text-sm mb-4">Harga spesial pendaftar awal</p>
                <div className="flex items-baseline gap-2 mb-4">
                  <span className="text-sm text-gray-500 line-through">IDR {EVENT_DETAILS.price.original}</span>
                  <span className="text-2xl font-bold text-brand-purple">IDR {EVENT_DETAILS.price.promo}</span>
                </div>
                <button 
                  className="w-full bg-brand-purple text-white py-3 rounded-full font-bold flex items-center justify-center gap-2 hover:bg-white hover:text-black transition-all"
                  onClick={() => window.open(`https://wa.me/${EVENT_DETAILS.contact.replace(/[^0-9]/g, '')}?text=Halo%20Admin,%20saya%20mau%20daftar%20Early%20Bird%20Workshop`, '_blank')}
                >
                  Daftar Sekarang <ArrowUpRight className="w-4 h-4" />
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
                  className="w-full bg-white/10 text-white py-3 rounded-full font-bold flex items-center justify-center gap-2 hover:bg-brand-purple transition-all"
                  onClick={() => window.open(`https://wa.me/${EVENT_DETAILS.contact.replace(/[^0-9]/g, '')}?text=Halo%20Admin,%20saya%20mau%20daftar%20Group%20Package%20Workshop`, '_blank')}
                >
                  Klaim Promo <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="bg-white/5 p-6 rounded-xl border border-white/10 text-center">
              <h4 className="font-bold text-lg mb-2 flex items-center justify-center gap-2">
                <QrCode className="w-5 h-5 text-brand-purple" />
                Cara Mendaftar
              </h4>
              <p className="text-sm text-gray-400">
                Scan QR Code pada flyer atau hubungi contact person kami untuk mengamankan slot Anda.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
