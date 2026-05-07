import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { scrollToSection } from "@/lib/utils";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [location, setLocation] = useLocation();
  const isHome = location === "/";

  const menuItems = [
    { label: "Início", href: "inicio", route: "/" },
    { label: "Projetos", href: "projetos", route: "/projetos" },
    { label: "Sobre Mim", href: "jornada", route: "/#jornada" },
    { label: "Meu Processo", href: "processo", route: "/#processo" },
  ];

  const handleNavClick = (item: { href: string; route: string }) => {
    setIsMenuOpen(false);

    if (item.href === "projetos") {
      // Navigate using wouter's setLocation for a smooth SPA experience
      setLocation("/projetos");
      return;
    }

    if (isHome) {
      // On home page, scroll to section
      scrollToSection(item.href);
    } else {
      // On other pages, navigate to home with anchor
      window.location.href = item.route;
    }
  };

  const handleContactClick = () => {
    setIsMenuOpen(false);
    if (isHome) {
      scrollToSection("contato");
    } else {
      window.location.href = "/#contato";
    }
  };

  const handleLogoClick = () => {
    if (isHome) {
      scrollToSection("inicio");
    }
  };

  return (
    <nav className="fixed top-0 w-full z-50 glass-morphism shadow-sm">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" onClick={handleLogoClick}>
            <div className="flex items-center space-x-3 cursor-pointer">
              <div className="w-10 h-10 gradient-rose-antique rounded-full flex items-center justify-center">
                <span className="text-white font-playfair font-bold text-lg">C</span>
              </div>
              <span className="font-playfair text-xl font-semibold text-gray-800">
                Cynthia Aparecida
              </span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <button
                key={item.href}
                onClick={() => handleNavClick(item)}
                className="text-gray-700 hover:text-rose-antique transition-colors font-medium"
              >
                {item.label}
              </button>
            ))}
            <Button
              onClick={handleContactClick}
              className="bg-rose-antique hover:bg-rose-antique/90 text-white px-6 py-2 rounded-full transition-all shadow-lg hover:shadow-xl"
            >
              Contato
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4 border-t border-gray-200 pt-4">
            {menuItems.map((item) => (
              <button
                key={item.href}
                onClick={() => handleNavClick(item)}
                className="block w-full text-left text-gray-700 hover:text-rose-antique transition-colors font-medium py-2"
              >
                {item.label}
              </button>
            ))}
            <Button
              onClick={handleContactClick}
              className="w-full bg-rose-antique hover:bg-rose-antique/90 text-white rounded-full transition-all"
            >
              Contato
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
}
