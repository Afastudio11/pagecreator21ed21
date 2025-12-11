import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useState } from "react";
import logoImage from "@assets/ASET_LANDING_PAGE_MARKETALKSHOW_1765437111813.png";

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
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-white/10">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div>
          <img src={logoImage} alt="Documenta Fine Creative RKP" className="h-12" />
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                handleScroll(link.href);
              }}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.name}
            </a>
          ))}
          <Button 
            className="bg-white text-black hover:bg-white/90 font-semibold rounded-full px-6"
            onClick={() => handleScroll('#pricing')}
          >
            Daftar Sekarang
          </Button>
        </div>

        {/* Mobile Nav */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="bg-background border-l border-white/10">
            <div className="flex flex-col gap-6 mt-10">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleScroll(link.href);
                  }}
                  className="text-lg font-medium text-foreground hover:text-primary transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <Button 
                className="w-full bg-primary text-white hover:bg-primary/90 rounded-full"
                onClick={() => handleScroll('#pricing')}
              >
                Daftar Sekarang
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}
