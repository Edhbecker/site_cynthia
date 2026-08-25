import { ArrowDownRight } from "lucide-react";
import { professional } from "@/data/site-content";

export default function JourneySection() {
  return (
    <section id="sobre" aria-labelledby="about-title" className="section-block bg-architectural-cream">
      <div className="section-shell">
        <div className="mb-10 flex items-end justify-between border-b border-ink/15 pb-5 sm:mb-16">
          <p className="section-kicker">01 — Sobre</p>
          <ArrowDownRight className="size-6 text-rose-antique" aria-hidden="true" />
        </div>

        <div className="grid gap-12 lg:grid-cols-[minmax(18rem,0.8fr)_minmax(0,1.2fr)] lg:items-center lg:gap-20">
          <figure className="relative mx-auto w-full max-w-xl lg:mx-0">
            <div className="absolute -left-4 -top-4 size-28 border-l border-t border-rose-antique/60 sm:-left-7 sm:-top-7" aria-hidden="true" />
            <img
              src={professional.portrait}
              alt="Cynthia Aparecida da Silva trabalhando em seu notebook"
              className="aspect-[4/5] w-full object-cover object-center grayscale-[18%]"
              width="1024"
              height="1280"
              loading="lazy"
              decoding="async"
            />
            <figcaption className="absolute -bottom-5 right-0 max-w-[80%] bg-ink px-5 py-4 text-sm leading-relaxed text-white sm:px-7">
              {professional.role}
            </figcaption>
          </figure>

          <div>
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.24em] text-rose-antique">
              Conheça Cynthia
            </p>
            <h2 id="about-title" className="display-title mb-8 max-w-3xl">
              Técnica no traço,
              <span className="block font-normal italic text-rose-antique">sensível no olhar.</span>
            </h2>
            <div className="max-w-3xl space-y-5 text-base leading-[1.85] text-ink/72 sm:text-lg">
              <p>
                Sou <strong className="font-semibold text-ink">Cynthia Aparecida da Silva</strong>,
                acadêmica de Arquitetura e Urbanismo pela UNOESC de Chapecó,
                atualmente no 9º período, e Técnica em Edificações. Minha trajetória
                reúne experiências práticas em escritórios de arquitetura, engenharia,
                topografia, interiores, marcenaria sob medida e órgãos públicos, vivências
                que me proporcionaram uma visão ampla e realista do processo projetual.
              </p>
              <p>
                Busco unir criatividade, conhecimento técnico e funcionalidade em cada
                projeto, desenvolvendo soluções que valorizam estética, conforto,
                organização dos espaços e atenção aos detalhes. Acredito que um bom
                projeto nasce da escuta atenta e do cuidado com cada etapa, do conceito
                inicial à entrega final.
              </p>
              <p>
                Meu objetivo é transformar ideias em ambientes reais, pensados com
                sensibilidade, propósito e uma base técnica sólida, sempre em constante
                evolução profissional e acadêmica.
              </p>
            </div>
            <a
              href="#contato"
              className="text-link mt-9 inline-flex items-center gap-3 font-semibold text-ink"
            >
              Vamos conversar?
              <ArrowDownRight className="size-5" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
