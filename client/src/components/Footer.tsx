import { ArrowRight, Instagram, Facebook, Phone, MapPin } from 'lucide-react';
import { EVENT_DETAILS } from "@/lib/constants";

export function Footer() {
  return (
    <footer id="location" className="bg-black text-white pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        <div className="bg-brand-gray rounded-3xl p-8 md:p-16 flex flex-col md:flex-row items-center justify-between gap-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-400/10 blur-[80px] rounded-full pointer-events-none"></div>
          
          <div className="z-10 text-center md:text-left">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Siap Boost Omzet Jualan F&B?</h2>
            <p className="text-gray-400 max-w-md">Jangan tunggu sampai seat penuh - amankan kursimu sekarang dan mulai tingkatkan omzet lewat konten & affiliate.</p>
          </div>

          <div className="z-10">
            <button 
              className="btn-fancy px-8 py-4 text-lg"
              onClick={() => window.open(`https://wa.me/${EVENT_DETAILS.contact.replace(/[^0-9]/g, '')}`, '_blank')}
            >
              <span>Daftar Sekarang</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 text-sm">
          <div className="col-span-2">
            <div className="mb-4">
              <img src="/logo-market-talkshow.png" alt="Market Talkshow" className="h-14 w-auto" />
            </div>
            <p className="text-gray-500 mb-6">Empowering F&B brands through digital marketing strategies.</p>
            <div className="flex gap-4">
              <Instagram className="w-5 h-5 text-gray-400 hover:text-yellow-400 cursor-pointer transition-colors" />
              <Facebook className="w-5 h-5 text-gray-400 hover:text-yellow-400 cursor-pointer transition-colors" />
            </div>
          </div>
          
          <div>
            <h4 className="font-bold mb-4 text-yellow-400 uppercase text-xs tracking-wider">Event</h4>
            <ul className="space-y-2 text-gray-400">
              <li className="hover:text-white cursor-pointer">{EVENT_DETAILS.date}</li>
              <li className="hover:text-white cursor-pointer">{EVENT_DETAILS.time}</li>
              <li className="hover:text-white cursor-pointer">{EVENT_DETAILS.location}</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4 text-yellow-400 uppercase text-xs tracking-wider">Materi</h4>
            <ul className="space-y-2 text-gray-400">
              <li className="hover:text-white cursor-pointer">TikTok Strategy</li>
              <li className="hover:text-white cursor-pointer">Affiliate Marketing</li>
              <li className="hover:text-white cursor-pointer">Brand Legality</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4 text-yellow-400 uppercase text-xs tracking-wider">Kontak</h4>
            <ul className="space-y-2 text-gray-400">
              <li className="hover:text-white cursor-pointer flex items-center gap-2">
                <Phone className="w-4 h-4" />
                {EVENT_DETAILS.contact}
              </li>
              <li className="hover:text-white cursor-pointer flex items-start gap-2">
                <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
                {EVENT_DETAILS.address}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p>&copy; 2025 Market Talkshow Workshop. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <span>Terms & Conditions</span>
            <span>Privacy Policy</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
