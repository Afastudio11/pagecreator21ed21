import React from 'react';
import { Sparkles } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
      <nav className="bg-brand-dark/90 backdrop-blur-md border border-white/10 rounded-full py-3 px-6 flex items-center justify-between w-full max-w-4xl shadow-2xl">
        <div className="flex items-center gap-2">
           <Sparkles className="w-6 h-6 text-brand-green fill-brand-green" />
           <span className="text-xl font-bold tracking-tight text-white">Creatix</span>
        </div>

        <ul className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
          <li className="hover:text-white cursor-pointer transition-colors">About Us</li>
          <li className="hover:text-white cursor-pointer transition-colors">Services</li>
          <li className="hover:text-white cursor-pointer transition-colors">Projects</li>
          <li className="hover:text-white cursor-pointer transition-colors">Reviews</li>
        </ul>

        <button className="bg-white text-black px-5 py-2 rounded-full text-sm font-bold hover:bg-brand-green hover:text-black transition-all duration-300">
          Let's Talk
        </button>
      </nav>
    </div>
  );
};

export default Header;