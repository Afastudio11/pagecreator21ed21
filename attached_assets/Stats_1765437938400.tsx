import React from 'react';
import { Stat } from '../types';

const stats: Stat[] = [
  { label: "Company Partner", value: "2000+" },
  { label: "Years Experience", value: "10+" },
  { label: "Hours of Digital", value: "800+" },
  { label: "Tracked Revenue", value: "150M+" }
];

const Stats: React.FC = () => {
  return (
    <div className="bg-black py-16 md:py-24 border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
        {stats.map((stat, index) => (
          <div key={index} className="text-center group cursor-default">
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-2 group-hover:text-brand-green transition-colors duration-300">
              {stat.value}
            </h3>
            <p className="text-gray-500 text-sm md:text-base font-medium tracking-wide uppercase">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stats;