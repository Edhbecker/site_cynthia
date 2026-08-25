import { ArrowDownRight } from "lucide-react";
import { projects } from "@/data/site-content";

export default function ProjectsGallery() {
  return (
    <section id="projetos" aria-labelledby="projects-title" className="section-block bg-white">
      <div className="section-shell">
        <div className="grid gap-8 border-b border-ink/15 pb-10 md:grid-cols-[0.65fr_1.35fr] md:items-end">
          <p className="section-kicker">02 — Portfólio</p>
          <div>
            <h2 id="projects-title" className="display-title max-w-4xl">
              Projetos de
              <span className="font-normal italic text-rose-antique"> interiores.</span>
            </h2>
            <p className="mt-6 max-w-3xl text-base leading-relaxed text-ink/65 sm:text-lg">
              Ambientes residenciais projetados com foco em conforto, funcionalidade,
              estética contemporânea e aproveitamento inteligente dos espaços — cada
              detalhe pensado para criar lugares que acolhem e inspiram.
            </p>
          </div>
        </div>

        <div className="portfolio-grid mt-12 sm:mt-16">
          {projects.map((project, index) => (
            <article key={project.id} className={`portfolio-item portfolio-item-${index + 1}`}>
              <figure className="group relative size-full min-h-[23rem] overflow-hidden bg-ink sm:min-h-[30rem]">
                <img
                  src={project.image}
                  alt={project.alt}
                  className="size-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.035]"
                  width="1200"
                  height="900"
                  loading="lazy"
                  decoding="async"
                  sizes={index === 0 ? "(min-width: 1024px) 66vw, 100vw" : "(min-width: 1024px) 42vw, 100vw"}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/5 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6 text-white sm:p-8">
                  <div className="mb-4 flex items-center justify-between gap-4 text-xs uppercase tracking-[0.2em] text-white/70">
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <span>{project.category}</span>
                  </div>
                  <h3 className="font-playfair text-3xl font-medium sm:text-4xl">{project.title}</h3>
                  <p className="mt-3 max-w-xl text-sm leading-relaxed text-white/75 sm:text-base">
                    {project.description}
                  </p>
                </div>
              </figure>
            </article>
          ))}
        </div>

        <div className="mt-10 flex items-center justify-end gap-3 text-sm text-ink/55">
          <span>06 projetos apresentados</span>
          <ArrowDownRight className="size-5 text-rose-antique" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}
