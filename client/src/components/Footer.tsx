import { EVENT_DETAILS } from "@/lib/constants";
import { MapPin, Phone, Instagram, Facebook, Globe } from "lucide-react";
import logoImage from "@assets/ASET_LANDING_PAGE_MARKETALKSHOW_1765437111813.png";

export function Footer() {
  return (
    <footer id="location" className="bg-secondary/20 border-t border-white/5 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          
          <div className="text-center md:text-left">
            <img src={logoImage} alt="Documenta Fine Creative RKP" className="h-14 mx-auto md:mx-0 mb-4" />
            <p className="text-muted-foreground text-sm">
              Bergabunglah dengan ratusan pebisnis F&B lainnya dan mulailah transformasi digital bisnis Anda hari ini.
            </p>
          </div>

          <div className="text-center">
            <h4 className="font-bold text-lg mb-4">Contact</h4>
            <div className="flex items-center justify-center gap-2 text-muted-foreground">
              <Phone className="w-5 h-5 text-brand-purple" />
              <span>{EVENT_DETAILS.contact}</span>
            </div>
          </div>

          <div className="text-center md:text-right">
            <h4 className="font-bold text-lg mb-4">Location</h4>
            <div className="flex items-center justify-center md:justify-end gap-2 text-muted-foreground">
              <MapPin className="w-5 h-5 text-brand-cyan" />
              <div className="text-left">
                <span className="block font-medium text-foreground">{EVENT_DETAILS.location}</span>
                <span className="text-sm">{EVENT_DETAILS.address}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 border-t border-white/5 pt-8">
          <p className="text-sm text-muted-foreground">
            &copy; 2025 Market Talkshow Workshop. All rights reserved.
          </p>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-purple hover:text-white transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-purple hover:text-white transition-colors">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-purple hover:text-white transition-colors">
              <Globe className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
