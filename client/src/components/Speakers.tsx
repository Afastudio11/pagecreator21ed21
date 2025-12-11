import { SPEAKERS } from "@/lib/constants";

export function Speakers() {
  return (
    <section id="speakers" className="bg-black py-24 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-4">
          <h2 className="text-4xl md:text-5xl font-bold">Diajari Langsung Oleh <span className="text-brand-purple">3 Expert</span></h2>
          <p className="text-gray-400 max-w-md">Belajar dari praktisi yang telah terbukti berhasil di bidangnya.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {SPEAKERS.map((member) => (
            <div key={member.id} className="bg-brand-gray p-6 rounded-2xl group hover:bg-white/10 transition-colors border border-transparent hover:border-white/10">
              <div className="flex items-center gap-4 mb-4">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-20 h-20 rounded-full object-cover object-top grayscale group-hover:grayscale-0 transition-all border-2 border-brand-purple/30" 
                />
                <div>
                  <h3 className="font-bold text-lg leading-tight">{member.name}</h3>
                  <p className="text-xs text-brand-purple uppercase tracking-wide">{member.role}</p>
                </div>
              </div>
              <p className="text-gray-400 text-sm">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
