import { Briefcase, GraduationCap, Building2, Ruler } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function ProblemsSection() {
  const experiences = [
    {
      icon: Building2,
      title: "Órgãos Públicos",
      description:
        "Atuei com análise e aprovação de projetos arquitetônicos, licenças para construção, regularização, Habite-se e atendimento ao público.",
    },
    {
      icon: Ruler,
      title: "Topografia e Soluções Ambientais",
      description:
        "Trabalhei com transformação de dados de campo em desenhos técnicos, conversão de coordenadas geográficas e elaboração de mapas, plantas e relatórios.",
    },
    {
      icon: Briefcase,
      title: "Escritórios de Arquitetura",
      description:
        "Auxiliei na elaboração de projetos arquitetônicos, paisagismo, complementares e detalhamentos de interiores.",
    },
    {
      icon: GraduationCap,
      title: "Marcenaria e Interiores",
      description:
        "Atuei com projetos de interiores, visitas técnicas, medições e encaminhamento de projetos para produção.",
    },
  ];

  return (
    <section id="experiencia" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 smooth-entrance">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Experiência
            <span className="text-rose-antique"> Profissional</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Construí minha trajetória em diferentes áreas da construção civil,
            do canteiro de obras ao detalhamento de interiores, o que me proporcionou uma visão ampla, técnica e prática do processo projetual.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {experiences.map((exp, index) => (
            <Card
              key={index}
              className="glass-morphism rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover-lift"
            >
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 gradient-rose-antique rounded-full flex items-center justify-center mx-auto mb-6">
                  <exp.icon className="text-white w-8 h-8" />
                </div>
                <h3 className="font-playfair text-xl font-semibold text-gray-800 mb-3">
                  {exp.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">{exp.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
