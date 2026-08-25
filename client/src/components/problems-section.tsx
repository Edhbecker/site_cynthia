import { experiences } from "@/data/site-content";

export default function ProblemsSection() {
  return (
    <section id="experiencia" aria-labelledby="experience-title" className="section-block bg-white">
      <div className="section-shell">
        <div className="grid gap-8 border-b border-ink/15 pb-10 md:grid-cols-[0.65fr_1.35fr] md:items-end">
          <p className="section-kicker">05 — Trajetória</p>
          <div>
            <h2 id="experience-title" className="display-title max-w-4xl">
              Experiência ampla,
              <span className="block font-normal italic text-rose-antique">visão integrada.</span>
            </h2>
            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-ink/65">
              Construí minha trajetória em diferentes áreas da construção civil,
              do canteiro de obras ao detalhamento de interiores, o que me
              proporcionou uma visão ampla, técnica e prática do processo projetual.
            </p>
          </div>
        </div>

        <div className="mt-12 grid gap-x-10 lg:grid-cols-2">
          {experiences.map((experience, index) => (
            <article
              key={experience.title}
              className="grid grid-cols-[3.5rem_1fr] gap-5 border-b border-ink/15 py-8 sm:grid-cols-[5rem_1fr] sm:py-10"
            >
              <div className="grid size-12 place-items-center rounded-full bg-rose-antique/12 text-rose-antique sm:size-14">
                <experience.icon className="size-6" aria-hidden="true" />
              </div>
              <div>
                <p className="mb-2 text-xs uppercase tracking-[0.2em] text-ink/40">
                  Experiência {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="font-playfair text-2xl font-semibold text-ink">{experience.title}</h3>
                <p className="mt-4 leading-relaxed text-ink/65">{experience.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
