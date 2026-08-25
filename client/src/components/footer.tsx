import { ArrowUp } from "lucide-react";
import { contact, professional } from "@/data/site-content";

const footerNavigation = [
  { label: "Sobre", href: "#sobre" },
  { label: "Projetos", href: "#projetos" },
  { label: "Serviços", href: "#servicos" },
  { label: "Processo", href: "#processo" },
  { label: "Contato", href: "#contato" },
];

export default function Footer() {
  return (
    <footer className="bg-ink text-white">
      <div className="section-shell py-12 sm:py-16">
        <div className="grid gap-12 border-b border-white/15 pb-12 md:grid-cols-[1.2fr_0.8fr_0.8fr]">
          <div>
            <a href="#inicio" className="inline-flex items-center gap-4" aria-label="Voltar ao início">
              <span className="grid size-12 place-items-center rounded-full bg-rose-antique font-playfair text-xl font-semibold">C</span>
              <span className="font-playfair text-2xl font-semibold">{professional.shortName}</span>
            </a>
            <p className="mt-6 max-w-md text-sm leading-relaxed text-white/55">
              Acadêmica de Arquitetura e Urbanismo e Técnica em Edificações,
              com experiência prática em projetos de interiores, detalhamento
              técnico e desenvolvimento de soluções funcionais.
            </p>
          </div>

          <div>
            <h2 className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-terracotta">Navegação</h2>
            <ul className="space-y-3 text-sm text-white/65">
              {footerNavigation.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="transition-colors hover:text-white">{item.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-terracotta">Contato</h2>
            <ul className="space-y-3 text-sm text-white/65">
              <li><a href={contact.phoneHref} className="transition-colors hover:text-white">{contact.phone}</a></li>
              <li><a href={contact.emailHref} className="break-all transition-colors hover:text-white">{contact.email}</a></li>
              <li><a href={contact.instagramHref} target="_blank" rel="noreferrer" className="transition-colors hover:text-white">{contact.instagram}</a></li>
              <li>{professional.location}</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-5 pt-8 text-xs text-white/45 sm:flex-row sm:items-center sm:justify-between">
          <p>© {professional.name}. Todos os direitos reservados.</p>
          <a
            href="#inicio"
            className="inline-flex w-fit items-center gap-2 text-white/70 transition-colors hover:text-white"
          >
            Voltar ao topo <ArrowUp className="size-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  );
}
