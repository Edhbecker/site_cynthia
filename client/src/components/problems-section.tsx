import { X } from "lucide-react";

export default function ProblemsSection() {
  const problems = [
    {
      title: "Projetos sem personalidade",
      description: "Espaços genéricos que não refletem quem você realmente é",
    },
    {
      title: "Ambientes mal planejados",
      description: "Espaços que não funcionam para o seu dia a dia",
    },
    {
      title: "Falta de orientação feminina",
      description: "Projetos que não consideram sensibilidade e detalhes especiais",
    },
    {
      title: "Estresse e frustração",
      description: "Retrabalho, gastos extras e resultados decepcionantes",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 smooth-entrance">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Muitas pessoas começam uma obra
            <span className="text-rose-antique"> cheia de sonhos...</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Mas encontram pelo caminho frustrações que poderiam ser evitadas com o olhar certo.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {problems.map((problem, index) => (
            <div key={index} className="text-center p-6 hover-lift">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <X className="text-red-500 w-8 h-8" />
              </div>
              <h3 className="font-playfair text-xl font-semibold text-gray-800 mb-3">
                {problem.title}
              </h3>
              <p className="text-gray-600">{problem.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
