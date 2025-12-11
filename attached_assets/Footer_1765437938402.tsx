import React from 'react';
import { ArrowRight, Instagram, Twitter, Linkedin, Facebook } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Top CTA */}
        <div className="bg-brand-gray rounded-3xl p-8 md:p-16 flex flex-col md:flex-row items-center justify-between gap-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-green/10 blur-[80px] rounded-full pointer-events-none"></div>
          
          <div className="z-10 text-center md:text-left">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Get in Touch Today!</h2>
            <p className="text-gray-400 max-w-md">Let's transform your ideas into exceptional digital experiences. Whether you're looking for a complete rebrand or a stunning website.</p>
          </div>

          <div className="z-10 w-full max-w-md">
            <div className="bg-black/50 p-2 rounded-full border border-white/10 flex pl-6">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="bg-transparent flex-1 outline-none text-white placeholder-gray-500 text-sm"
              />
              <button className="bg-brand-green text-black px-6 py-3 rounded-full font-bold text-sm hover:bg-white transition-colors">
                Contact Us
              </button>
            </div>
          </div>
          
          <div className="absolute bottom-0 right-20 hidden lg:block">
             <img src="https://picsum.photos/id/65/200/200" alt="Support" className="w-32 h-32 rounded-full object-cover border-4 border-brand-gray" />
          </div>
        </div>

        {/* Bottom Links */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 text-sm">
          <div className="col-span-2">
            <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <span className="text-brand-green">Creatix</span>
            </h3>
            <p className="text-gray-500 mb-6">Empowering brands through creative solutions.</p>
            <div className="flex gap-4">
              <Instagram className="w-5 h-5 text-gray-400 hover:text-brand-green cursor-pointer" />
              <Twitter className="w-5 h-5 text-gray-400 hover:text-brand-green cursor-pointer" />
              <Linkedin className="w-5 h-5 text-gray-400 hover:text-brand-green cursor-pointer" />
              <Facebook className="w-5 h-5 text-gray-400 hover:text-brand-green cursor-pointer" />
            </div>
          </div>
          
          <div>
            <h4 className="font-bold mb-4 text-brand-green uppercase text-xs tracking-wider">Company</h4>
            <ul className="space-y-2 text-gray-400">
              <li className="hover:text-white cursor-pointer">About Us</li>
              <li className="hover:text-white cursor-pointer">Careers</li>
              <li className="hover:text-white cursor-pointer">Blog</li>
            </ul>
          </div>
           <div>
            <h4 className="font-bold mb-4 text-brand-green uppercase text-xs tracking-wider">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li className="hover:text-white cursor-pointer">UI/UX Design</li>
              <li className="hover:text-white cursor-pointer">Web Dev</li>
              <li className="hover:text-white cursor-pointer">Branding</li>
            </ul>
          </div>
           <div>
            <h4 className="font-bold mb-4 text-brand-green uppercase text-xs tracking-wider">Support</h4>
            <ul className="space-y-2 text-gray-400">
              <li className="hover:text-white cursor-pointer">Contact</li>
              <li className="hover:text-white cursor-pointer">FAQ</li>
              <li className="hover:text-white cursor-pointer">Privacy Policy</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p>&copy; 2024 Creatix Agency. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <span>Terms & Conditions</span>
            <span>Privacy Policy</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;