import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { professional } from "@/data/site-content";

const navigationItems = [
  { label: "Sobre", href: "#sobre" },
  { label: "Projetos", href: "#projetos" },
  { label: "Serviços", href: "#servicos" },
  { label: "Processo", href: "#processo" },
];

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsMenuOpen(false);
    };

    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, []);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/15 bg-ink/80 text-white backdrop-blur-xl">
      <nav
        aria-label="Navegação principal"
        className="mx-auto flex h-[4.75rem] max-w-[90rem] items-center justify-between px-5 sm:px-8 lg:px-12"
      >
        <a
          href="#inicio"
          onClick={closeMenu}
          className="group inline-flex items-center gap-3 rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-antique focus-visible:ring-offset-4 focus-visible:ring-offset-ink"
          aria-label="Ir para o início"
        >
          <span className="grid size-10 place-items-center rounded-full border border-white/35 bg-rose-antique font-playfair text-lg font-semibold transition-transform duration-300 group-hover:rotate-6">
            C
          </span>
          <span className="leading-tight">
            <span className="block font-playfair text-lg font-semibold tracking-wide sm:text-xl">
              {professional.shortName}
            </span>
            <span className="hidden text-[0.62rem] uppercase tracking-[0.22em] text-white/60 sm:block">
              Arquitetura &amp; Interiores
            </span>
          </span>
        </a>

        <div className="hidden items-center gap-7 lg:flex">
          {navigationItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="nav-link rounded-sm text-sm font-medium text-white/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-antique"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contato"
            className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-ink transition-colors hover:bg-rose-antique hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-ink"
          >
            Contato
          </a>
        </div>

        <button
          type="button"
          className="grid size-11 place-items-center rounded-full border border-white/25 transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-antique lg:hidden"
          onClick={() => setIsMenuOpen((current) => !current)}
          aria-expanded={isMenuOpen}
          aria-controls="menu-mobile"
          aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
        >
          {isMenuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </nav>

      <div
        id="menu-mobile"
        className={`overflow-hidden border-t border-white/10 bg-ink transition-[max-height,opacity] duration-300 lg:hidden ${
          isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="mx-auto grid max-w-[90rem] gap-1 px-5 py-5 sm:px-8">
          {navigationItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={closeMenu}
              className="rounded-lg px-3 py-3 text-lg text-white/85 transition-colors hover:bg-white/10 hover:text-white"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contato"
            onClick={closeMenu}
            className="mt-2 rounded-full bg-rose-antique px-5 py-3 text-center font-semibold text-white"
          >
            Vamos conversar
          </a>
        </div>
      </div>
    </header>
  );
}
