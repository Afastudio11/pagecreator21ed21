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
    <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
      <nav className="bg-brand-dark/90 backdrop-blur-md border border-white/10 rounded-full py-3 px-6 flex items-center justify-between w-full max-w-4xl shadow-2xl">
        <div className="flex items-center gap-2">
          <img src="/logo-market-talkshow.png" alt="Market Talkshow" className="h-12 w-auto" />
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

        <Button 
          className="hidden md:flex bg-yellow-400 text-black px-5 py-2 rounded-full text-sm font-bold hover:bg-yellow-500 transition-all duration-300"
          onClick={() => handleScroll('#pricing')}
        >
          Daftar Sekarang
        </Button>

        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" className="text-white">
              <Menu className="h-6 w-6" />
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
              <Button 
                className="w-full bg-yellow-400 text-black hover:bg-yellow-500 rounded-full"
                onClick={() => handleScroll('#pricing')}
              >
                Daftar Sekarang
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </nav>
    </div>
  );
}
