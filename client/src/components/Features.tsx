import { motion } from "framer-motion";
import { LEARNING_POINTS } from "@/lib/constants";
import { Card, CardContent } from "@/components/ui/card";

export function Features() {
  return (
    <section id="materi" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Apa yang Akan Anda <span className="text-gradient">Pelajari?</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Kurikulum komprehensif yang dirancang untuk scale up bisnis F&B Anda di era digital.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {LEARNING_POINTS.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={index === 4 ? "md:col-span-2 lg:col-span-1 lg:col-start-2" : ""}
            >
              <Card className="h-full bg-white/5 border-white/10 hover:bg-white/10 transition-colors group">
                <CardContent className="p-6 space-y-4 flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-purple/20 to-brand-pink/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border border-white/5">
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold font-heading">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
