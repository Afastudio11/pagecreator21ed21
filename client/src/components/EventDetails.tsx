import calendarIcon from "@assets/1_1765627710229.png";
import clockIcon from "@assets/2_1765627710229.png";
import locationIcon from "@assets/3_1765627710229.png";

export function EventDetails() {
  return (
    <section className="bg-brand-gray/30 py-24 rounded-[3rem] mx-4 md:mx-8 mb-8">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-12">
          <div className="inline-block bg-brand-purple text-white px-4 py-1 rounded-full text-sm font-bold uppercase mb-4">
            Detail Event
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            INFORMASI <span className="text-brand-purple">ACARA</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-black p-8 rounded-2xl border border-white/10 hover:border-brand-purple/50 transition-all group text-center">
            <div className="flex items-center justify-center mx-auto mb-4">
              <img src={calendarIcon} alt="Calendar" className="w-20 h-20 object-contain" />
            </div>
            <h3 className="text-white font-bold text-xl mb-2">31 Januari 2026</h3>
            <p className="text-gray-400">Hari Sabtu</p>
          </div>

          <div className="bg-black p-8 rounded-2xl border border-white/10 hover:border-brand-purple/50 transition-all group text-center">
            <div className="flex items-center justify-center mx-auto mb-4">
              <img src={clockIcon} alt="Clock" className="w-20 h-20 object-contain" />
            </div>
            <h3 className="text-white font-bold text-xl mb-2">10:00 – 13:00 WIB</h3>
            <p className="text-gray-400">3 Jam Intensif</p>
          </div>

          <div className="bg-black p-8 rounded-2xl border border-white/10 hover:border-brand-purple/50 transition-all group text-center">
            <div className="flex items-center justify-center mx-auto mb-4">
              <img src={locationIcon} alt="Location" className="w-20 h-20 object-contain" />
            </div>
            <h3 className="text-white font-bold text-xl mb-2">SAE Indonesia</h3>
            <p className="text-gray-400">Pejaten Raya No.31, Pasar Minggu, Jakarta Selatan</p>
          </div>
        </div>
      </div>
    </section>
  );
}
