import { ArrowDown, ArrowUpRight, MapPin } from "lucide-react";
import { professional, projects } from "@/data/site-content";

export default function HeroSection() {
  return (
    <section
      id="inicio"
      aria-labelledby="hero-title"
      className="relative flex min-h-[44rem] items-end overflow-hidden bg-ink pt-24 text-white sm:min-h-screen"
    >
      <img
        src={projects[0].image}
        alt=""
        className="hero-image absolute inset-0 size-full object-cover"
        width="1200"
        height="900"
        decoding="async"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/80 to-ink/15" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-ink/25" />

      <div className="relative mx-auto grid w-full max-w-[90rem] gap-12 px-5 pb-12 pt-28 sm:px-8 sm:pb-16 lg:grid-cols-[minmax(0,1fr)_18rem] lg:items-end lg:px-12 lg:pb-20">
        <div className="max-w-5xl animate-entrance">
          <p className="mb-7 flex items-center gap-4 text-xs font-semibold uppercase tracking-[0.28em] text-white/70 sm:text-sm">
            <span className="h-px w-10 bg-rose-antique" aria-hidden="true" />
            Arquitetura &amp; Interiores
          </p>
          <h1
            id="hero-title"
            className="max-w-5xl font-playfair text-[clamp(3.6rem,9.5vw,8.6rem)] font-medium leading-[0.86] tracking-[-0.055em]"
          >
            Cynthia
            <span className="block pl-[0.12em] font-normal italic text-terracotta sm:pl-[0.45em]">
              Aparecida.
            </span>
          </h1>
          <div className="mt-9 grid max-w-4xl gap-8 border-t border-white/25 pt-7 md:grid-cols-[minmax(0,1fr)_auto] md:items-end">
            <p className="max-w-2xl text-base leading-relaxed text-white/78 sm:text-lg lg:text-xl">
              Acadêmica de Arquitetura e Urbanismo e Técnica em Edificações,
              com vivência prática em projetos de interiores, detalhamento
              técnico e soluções funcionais.
            </p>
            <a
              href="#projetos"
              className="group inline-flex w-fit items-center gap-3 rounded-full bg-rose-antique px-6 py-3.5 font-semibold text-white transition-colors hover:bg-terracotta hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-ink"
            >
              Ver projetos
              <ArrowUpRight className="size-5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
            </a>
          </div>
        </div>

        <aside className="hidden border-l border-white/25 pl-7 text-sm text-white/70 lg:block">
          <MapPin className="mb-5 size-5 text-terracotta" aria-hidden="true" />
          <p className="mb-2 font-semibold text-white">{professional.location}</p>
          <p className="leading-relaxed">Criatividade e precisão em cada ambiente.</p>
        </aside>
      </div>

      <a
        href="#sobre"
        aria-label="Conhecer Cynthia"
        className="absolute bottom-5 right-5 hidden size-12 place-items-center rounded-full border border-white/25 text-white/75 transition-colors hover:bg-white hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-antique sm:grid lg:right-12"
      >
        <ArrowDown className="size-5" aria-hidden="true" />
      </a>
    </section>
  );
}
