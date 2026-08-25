import { processSteps } from "@/data/site-content";

export default function CreativeProcess() {
  return (
    <section id="processo" aria-labelledby="process-title" className="section-block bg-architectural-cream">
      <div className="section-shell">
        <div className="grid gap-8 md:grid-cols-[0.65fr_1.35fr] md:items-end">
          <p className="section-kicker">04 — Processo</p>
          <div>
            <h2 id="process-title" className="display-title max-w-4xl">
              Do primeiro contato
              <span className="block font-normal italic text-rose-antique">à entrega final.</span>
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink/65">
              Cada etapa é conduzida com cuidado, clareza e comprometimento técnico.
            </p>
          </div>
        </div>

        <ol className="mt-14 grid border-l border-t border-ink/15 sm:grid-cols-2 xl:grid-cols-4">
          {processSteps.map((step) => (
            <li
              key={step.number}
              className="flex min-h-80 flex-col border-b border-r border-ink/15 p-7 transition-colors duration-300 hover:bg-white sm:p-8"
            >
              <span className="font-playfair text-5xl font-normal italic text-rose-antique/70">
                {step.number}
              </span>
              <div className="mt-auto pt-12">
                <h3 className="font-playfair text-2xl font-semibold text-ink">{step.title}</h3>
                <p className="mt-4 text-sm leading-[1.75] text-ink/65">{step.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
