import { Quote } from "lucide-react";
import { TESTIMONIALS } from "@/lib/constants";

export function Testimonials() {
  return (
    <section className="bg-brand-gray/30 py-24 rounded-[3rem] mx-4 md:mx-8 mb-8">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-12">
          <div className="inline-block bg-brand-purple text-white px-4 py-1 rounded-full text-sm font-bold uppercase mb-4">
            Testimonial
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            APA KATA <span className="text-brand-purple">PESERTA KAMI</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {TESTIMONIALS.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-black p-8 rounded-2xl border border-white/10 relative group hover:border-brand-purple/50 transition-colors"
            >
              <Quote className="w-10 h-10 text-brand-purple/30 absolute top-6 right-6" />
              <p className="text-white text-lg mb-6 leading-relaxed italic">
                "{testimonial.quote}"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-brand-purple/20 rounded-full flex items-center justify-center">
                  <span className="text-brand-purple font-bold">{testimonial.author[0]}</span>
                </div>
                <span className="text-gray-400 font-medium">{testimonial.author}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
