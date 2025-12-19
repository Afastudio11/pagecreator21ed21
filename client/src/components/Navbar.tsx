import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useState } from "react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Materi", href: "#materi" },
    { name: "Speakers", href: "#speakers" },
    { name: "Investasi", href: "#pricing" },
    { name: "Lokasi", href: "#location" },
  ];

  const handleScroll = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="fixed top-3 md:top-6 left-0 right-0 z-50 flex justify-center px-2 md:px-4">
      <nav className="bg-brand-dark/90 backdrop-blur-md border border-white/10 rounded-full py-1.5 md:py-3 px-3 md:px-6 flex items-center justify-between w-full max-w-4xl shadow-2xl">
        <div className="flex items-center gap-1">
          <img src="/logo-market-talkshow.png" alt="Market Talkshow" className="h-6 md:h-12 w-auto" />
        </div>

        <ul className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleScroll(link.href);
                }}
                className="hover:text-white cursor-pointer transition-colors"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-1 md:gap-2">
          <button 
            className="btn-fancy text-[10px] md:text-sm py-1.5 px-3 md:py-3 md:px-6"
            onClick={() => window.open('https://fine-creative.myr.id/pl/marketalkhsow-jualan-fnb-tembus-jutaan-lewat-affiiate-tiktok', '_blank')}
          >
            <span>Daftar Sekarang</span>
          </button>

          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="sm" className="text-white p-1">
                <Menu className="h-4 w-4" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-brand-dark border-l border-white/10">
              <div className="flex flex-col gap-6 mt-10">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleScroll(link.href);
                    }}
                    className="text-lg font-medium text-white hover:text-yellow-400 transition-colors"
                  >
                    {link.name}
                  </a>
                ))}
                <button 
                  className="w-full btn-fancy"
                  onClick={() => window.open('https://fine-creative.myr.id/pl/marketalkhsow-jualan-fnb-tembus-jutaan-lewat-affiiate-tiktok', '_blank')}
                >
                  <span>Daftar Sekarang</span>
                </button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </div>
  );
}
