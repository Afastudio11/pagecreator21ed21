import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CheckCircle2, QrCode, Ticket } from "lucide-react";
import { EVENT_DETAILS } from "@/lib/constants";
import { Card } from "@/components/ui/card";

export function Pricing() {
  return (
    <section id="pricing" className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-cyan/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto space-y-16">
          
          {/* Header & Benefits Centered */}
          <div className="text-center space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold">
              Investasi Terbaik untuk <br />
              <span className="text-gradient">Bisnis Anda</span>
            </h2>
            
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Dapatkan akses penuh ke workshop, materi eksklusif, dan kesempatan networking dengan para expert.
            </p>
              
            <div className="flex flex-wrap justify-center gap-4 md:gap-8">
              {EVENT_DETAILS.benefits.map((benefit, i) => (
                <div key={i} className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-brand-purple" />
                  <span className="font-medium">{benefit}</span>
                </div>
              ))}
            </div>

            <div className="bg-white/5 p-6 rounded-xl border border-white/10 backdrop-blur-sm max-w-xl mx-auto">
              <h4 className="font-bold text-lg mb-2 flex items-center justify-center gap-2">
                <QrCode className="w-5 h-5 text-brand-pink" />
                Cara Mendaftar
              </h4>
              <p className="text-sm text-muted-foreground mb-4">
                Scan QR Code pada flyer atau hubungi contact person kami untuk mengamankan slot Anda.
              </p>
              <Button 
                variant="outline" 
                className="w-full h-12 rounded-lg border-brand-purple/50 text-brand-purple hover:bg-brand-purple hover:text-white transition-all"
                onClick={() => window.open(`https://wa.me/${EVENT_DETAILS.contact.replace(/[^0-9]/g, '')}`, '_blank')}
              >
                Chat WhatsApp Admin
              </Button>
            </div>
          </div>

          {/* Pricing Cards Centered */}
          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
             {/* Early Bird Card */}
             <motion.div
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.5 }}
               viewport={{ once: true }}
             >
                <Card className="relative overflow-hidden border-2 border-brand-yellow bg-background/50 backdrop-blur-xl h-full">
                  <div className="absolute top-0 right-0 bg-brand-yellow text-black text-xs font-bold px-3 py-1 rounded-bl-lg">
                    BEST VALUE
                  </div>
                  <div className="p-6 md:p-8 flex flex-col items-center text-center justify-between h-full gap-6">
                    <div>
                      <h3 className="text-xl font-bold mb-1">Early Bird Ticket</h3>
                      <p className="text-sm text-muted-foreground mb-2">Harga spesial untuk pendaftar awal</p>
                      <div className="flex items-baseline justify-center gap-2">
                        <span className="text-sm text-muted-foreground line-through">IDR {EVENT_DETAILS.price.original}</span>
                        <span className="text-3xl font-bold text-brand-yellow">IDR {EVENT_DETAILS.price.promo}</span>
                      </div>
                    </div>
                    <Button 
                      className="w-full bg-brand-yellow text-black hover:bg-brand-yellow/90 font-bold"
                      onClick={() => window.open(`https://wa.me/${EVENT_DETAILS.contact.replace(/[^0-9]/g, '')}?text=Halo%20Admin,%20saya%20mau%20daftar%20Early%20Bird%20Workshop`, '_blank')}
                    >
                      Daftar Sekarang
                    </Button>
                  </div>
                </Card>
             </motion.div>

             {/* Group Offer Card */}
             <motion.div
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.5, delay: 0.1 }}
               viewport={{ once: true }}
             >
                <Card className="relative overflow-hidden border border-brand-pink/50 bg-background/50 backdrop-blur-xl h-full">
                  <div className="absolute top-0 right-0 bg-brand-pink text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                    SPECIAL OFFER
                  </div>
                  <div className="p-6 md:p-8 flex flex-col items-center text-center justify-between h-full gap-6">
                    <div>
                      <h3 className="text-xl font-bold mb-1">Group Package</h3>
                      <p className="text-sm text-muted-foreground mb-2">Daftar bareng 5 orang</p>
                      <div className="flex items-baseline justify-center gap-2">
                        <span className="text-3xl font-bold text-brand-pink">IDR {EVENT_DETAILS.price.special}</span>
                        <span className="text-sm text-muted-foreground">/pax</span>
                      </div>
                    </div>
                    <Button 
                      className="w-full bg-brand-pink hover:bg-brand-pink/90"
                      onClick={() => window.open(`https://wa.me/${EVENT_DETAILS.contact.replace(/[^0-9]/g, '')}?text=Halo%20Admin,%20saya%20mau%20daftar%20Group%20Package%20Workshop`, '_blank')}
                    >
                      Klaim Promo
                    </Button>
                  </div>
                </Card>
             </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
