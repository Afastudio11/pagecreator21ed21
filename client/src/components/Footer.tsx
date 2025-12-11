import { EVENT_DETAILS } from "@/lib/constants";
import { MapPin, Phone, Instagram, Facebook, Globe } from "lucide-react";

export function Footer() {
  return (
    <footer id="location" className="bg-secondary/20 border-t border-white/5 pt-16 pb-8">
      <div className="container px-4">
        <div className="flex flex-col items-center text-center gap-12 mb-12">
          
          <div className="max-w-2xl mx-auto">
             <h3 className="text-2xl font-bold font-heading mb-6">
               <span className="text-gradient">F&B STRATEGY</span>
             </h3>
             <p className="text-muted-foreground mb-6">
               Bergabunglah dengan ratusan pebisnis F&B lainnya dan mulailah transformasi digital bisnis Anda hari ini.
             </p>
             <div className="flex justify-center gap-4">
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

          <div className="grid md:grid-cols-2 gap-12 w-full max-w-2xl">
            <div>
              <h4 className="font-bold text-lg mb-6">Contact</h4>
              <ul className="space-y-4">
                <li className="flex flex-col items-center gap-2 text-muted-foreground">
                  <Phone className="w-5 h-5 text-brand-purple" />
                  <span>
                    <span className="block text-foreground font-medium mb-1">WhatsApp</span>
                    {EVENT_DETAILS.contact}
                  </span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-6">Location</h4>
              <ul className="space-y-4">
                <li className="flex flex-col items-center gap-2 text-muted-foreground">
                  <MapPin className="w-5 h-5 text-brand-cyan" />
                  <span>
                    <span className="block text-foreground font-medium mb-1">{EVENT_DETAILS.location}</span>
                    {EVENT_DETAILS.address}
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; 2025 F&B Strategy Workshop. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
