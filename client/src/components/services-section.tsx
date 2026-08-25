import { services } from "@/data/site-content";

export default function ServicesSection() {
  return (
    <section id="servicos" aria-labelledby="services-title" className="section-block bg-ink text-white">
      <div className="section-shell">
        <div className="grid gap-8 md:grid-cols-[0.7fr_1.3fr] md:items-start">
          <div className="md:sticky md:top-28">
            <p className="section-kicker text-terracotta">03 — Serviços</p>
            <h2 id="services-title" className="display-title mt-6 max-w-xl text-white">
              O que posso desenvolver
              <span className="block font-normal italic text-terracotta">para você.</span>
            </h2>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-white/60 sm:text-lg">
              Soluções completas em projetos de interiores, com atenção ao
              detalhamento técnico, à escolha de materiais e à personalização
              de cada ambiente.
            </p>
          </div>

          <ol className="border-t border-white/20">
            {services.map((service, index) => (
              <li
                key={service.title}
                className="group grid gap-4 border-b border-white/20 py-8 sm:grid-cols-[3rem_1fr_1fr] sm:items-start sm:gap-6 lg:py-10"
              >
                <span className="font-playfair text-lg italic text-terracotta">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div className="flex items-center gap-4">
                  <service.icon className="size-6 shrink-0 text-terracotta transition-transform duration-300 group-hover:rotate-6" aria-hidden="true" />
                  <h3 className="font-playfair text-2xl font-medium sm:text-3xl">{service.title}</h3>
                </div>
                <p className="leading-relaxed text-white/60">{service.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
