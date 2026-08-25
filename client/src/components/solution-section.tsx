import { MessageCircleMore } from "lucide-react";
import { softSkills, tools } from "@/data/site-content";

export default function SolutionSection() {
  return (
    <section aria-labelledby="skills-title" className="section-block bg-sage-green/12">
      <div className="section-shell">
        <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:items-start">
          <div>
            <p className="section-kicker">06 — Habilidades</p>
            <h2 id="skills-title" className="display-title mt-6 max-w-xl">
              Ferramentas e
              <span className="block font-normal italic text-rose-antique">competências.</span>
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink/65">
              Tenho domínio de softwares essenciais para o desenvolvimento de
              projetos, aliado a competências interpessoais que fazem a diferença
              no meu dia a dia profissional.
            </p>
          </div>

          <div>
            <div className="grid grid-cols-2 border-l border-t border-ink/15 sm:grid-cols-3">
              {tools.map((tool) => (
                <div
                  key={tool.name}
                  className="group flex min-h-40 flex-col justify-between border-b border-r border-ink/15 bg-architectural-cream/40 p-5 transition-colors hover:bg-white sm:p-6"
                >
                  <tool.icon className="size-6 text-rose-antique transition-transform duration-300 group-hover:rotate-6" aria-hidden="true" />
                  <span className="font-playfair text-xl font-semibold text-ink">{tool.name}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 border border-ink/15 bg-white/60 p-6 sm:p-8">
              <div className="mb-6 flex items-center gap-3">
                <MessageCircleMore className="size-5 text-rose-antique" aria-hidden="true" />
                <h3 className="font-playfair text-xl font-semibold">Competências interpessoais</h3>
              </div>
              <ul className="grid gap-3 text-sm text-ink/70 sm:grid-cols-2">
                {softSkills.map((skill) => (
                  <li key={skill} className="flex items-center gap-3">
                    <span className="size-1.5 rounded-full bg-rose-antique" aria-hidden="true" />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
