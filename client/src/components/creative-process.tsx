export default function CreativeProcess() {
  const processSteps = [
    {
      number: 1,
      title: "Briefing",
      description:
        "Tudo começa com uma conversa atenta sobre suas necessidades, rotina e expectativas. Entender quem você é e como vive é o ponto de partida para um projeto com identidade e propósito.",
    },
    {
      number: 2,
      title: "Estudo e Conceito",
      description:
        "Com base no briefing, desenvolvo referências visuais, paleta de cores, seleção de materiais e o conceito do projeto, traduzindo suas ideias em uma linguagem visual clara e coerente.",
    },
    {
      number: 3,
      title: "Desenvolvimento e Visualização 3D",
      description:
        "O projeto ganha forma com plantas, layouts e imagens realistas em 3D. Você visualiza cada ambiente antes da execução, com todos os detalhes de mobiliário, iluminação e acabamentos.",
    },
    {
      number: 4,
      title: "Detalhamento e Acompanhamento",
      description:
        "Finalizo com detalhamentos técnicos, especificações de materiais e marcenaria planejada, garantindo que cada elemento seja executado com precisão e fidelidade ao projeto.",
    },
  ];

  return (
    <section id="processo" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 smooth-entrance">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Processo
            <span className="text-rose-antique"> Criativo</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Do primeiro contato à entrega final, cada etapa é conduzida com cuidado, clareza e comprometimento técnico.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-12">
            {processSteps.map((step, index) => (
              <div
                key={index}
                className="flex flex-col md:flex-row items-center gap-8 hover-lift"
              >
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 gradient-rose-antique rounded-full flex items-center justify-center text-white font-playfair text-2xl font-bold shadow-lg">
                    {step.number}
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="font-playfair text-2xl font-semibold text-gray-800 mb-4">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
