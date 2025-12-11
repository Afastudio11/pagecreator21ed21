import { motion } from "framer-motion";
import { SPEAKERS } from "@/lib/constants";

export function Speakers() {
  return (
    <section id="speakers" className="py-24 bg-secondary/30 border-y border-white/5">
      <div className="container px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Diajari Langsung Oleh <span className="text-gradient">3 Expert</span>
          </h2>
          <p className="text-muted-foreground">
            Belajar dari praktisi yang telah terbukti berhasil di bidangnya.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {SPEAKERS.map((speaker, index) => (
            <motion.div
              key={speaker.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-b from-white/5 to-transparent border border-white/10">
                {/* Image Container */}
                <div className="aspect-[3/4] overflow-hidden relative">
                   <div className={`absolute inset-0 bg-gradient-to-tr ${speaker.color} opacity-20 mix-blend-overlay group-hover:opacity-30 transition-opacity`} />
                   <img 
                    src={speaker.image} 
                    alt={speaker.name}
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Gradient Fade at bottom */}
                  <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-background to-transparent" />
                </div>

                {/* Content Overlay */}
                <div className="absolute inset-0 flex flex-col justify-end p-6 text-center">
                  <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-2xl font-bold font-heading mb-1">{speaker.name}</h3>
                    <p className={`text-sm font-medium bg-gradient-to-r ${speaker.color} bg-clip-text text-transparent mb-3`}>
                      {speaker.role}
                    </p>
                    <p className="text-sm text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                      {speaker.bio}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
