export default function CreativeProcess() {
  const processSteps = [
    {
      number: 1,
      title: "Conversa do Coração",
      description:
        "Começamos com uma conversa íntima sobre seus sonhos, rotina e o que realmente importa no seu espaço. É aqui que nasce a conexão emocional do projeto.",
    },
    {
      number: 2,
      title: "Moodboard Emocional",
      description:
        "Criamos um painel visual que traduz suas emoções em cores, texturas e sensações. É a alma do projeto tomando forma visual.",
    },
    {
      number: 3,
      title: "Anteprojeto em 3D",
      description:
        "Você visualiza seu espaço transformado antes mesmo da execução. Cada detalhe pensado com carinho e precisão técnica.",
    },
    {
      number: 4,
      title: "Acompanhamento Carinhoso",
      description:
        "Estou ao seu lado durante toda a execução, garantindo que cada detalhe saia exatamente como sonhamos juntas.",
    },
  ];

  return (
    <section id="processo" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 smooth-entrance">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Meu Processo
            <span className="text-rose-antique"> Criativo</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Uma jornada sensível e técnica, onde cada etapa é pensada para criar espaços que tocam o coração.
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
