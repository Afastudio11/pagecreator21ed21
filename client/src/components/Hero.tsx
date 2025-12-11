import { ArrowRight, Star } from "lucide-react";

export function Hero() {
  return (
    <div className="relative bg-white text-black pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-20 left-10 text-green-500 animate-spin-slow">
        <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0L14 10L24 12L14 14L12 24L10 14L0 12L10 10Z" />
        </svg>
      </div>
      <div className="absolute bottom-32 left-1/4 text-green-500 opacity-50">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0L14 10L24 12L14 14L12 24L10 14L0 12L10 10Z" />
        </svg>
      </div>
      
      {/* Curved decorative lines */}
      <svg className="absolute bottom-0 right-0 w-64 h-64 text-gray-200 opacity-50" viewBox="0 0 100 100" fill="none">
        <path d="M100 0 Q60 50 100 100" stroke="currentColor" strokeWidth="0.5" />
        <path d="M90 0 Q50 50 90 100" stroke="currentColor" strokeWidth="0.5" />
      </svg>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left content */}
          <div className="space-y-6 relative z-10">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.1] tracking-tight">
              Empowering Brands Through Creative Solutions
              <span className="inline-block ml-2 text-green-500 align-middle">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0L14 10L24 12L14 14L12 24L10 14L0 12L10 10Z" />
                </svg>
              </span>
            </h1>
            
            <p className="text-base text-gray-600 max-w-sm leading-relaxed">
              From web development to branding, we deliver innovative strategies that elevate your brand and drive growth. Let's create something exceptional together.
            </p>

            <button className="px-6 py-3 rounded-full font-semibold border-2 border-black hover:bg-black hover:text-white transition-all duration-300">
              Innovate Your Brand
            </button>
            
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <button className="bg-green-500 text-white px-6 py-3 rounded-full font-semibold flex items-center gap-2 hover:bg-green-600 transition-all duration-300 shadow-lg">
                Start Your Project
                <ArrowRight className="w-4 h-4" />
              </button>
              
              <button className="bg-black text-white px-6 py-3 rounded-full font-semibold hover:bg-gray-800 transition-all duration-300">
                Let's Collaborate
              </button>
            </div>
          </div>

          {/* Right content - Image and stats */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative">
              {/* Green blob background */}
              <div className="absolute -bottom-8 -left-8 w-72 h-72 bg-green-500 rounded-full opacity-90 z-0"></div>
              
              {/* Main image */}
              <img 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=700&fit=crop&crop=top"
                alt="Creative Professional"
                className="relative w-80 h-96 object-cover object-top rounded-b-full z-10"
              />

              {/* Stats card */}
              <div className="absolute top-8 -right-4 md:right-0 bg-white p-4 rounded-2xl shadow-xl z-20">
                <div className="flex gap-0.5 mb-1">
                  {[1,2,3,4,5].map(i => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <span className="font-bold text-2xl block">10 Years</span>
                <span className="text-xs text-gray-500">Experience</span>
              </div>

              {/* Decorative curved arrow */}
              <svg className="absolute -left-16 top-1/2 w-16 h-24 text-black" viewBox="0 0 50 80" fill="none">
                <path d="M40 0 Q10 40 40 80" stroke="currentColor" strokeWidth="2" fill="none" />
                <path d="M35 70 L40 80 L30 75" stroke="currentColor" strokeWidth="2" fill="none" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
