import { Home, Sofa, Lamp, Paintbrush, Ruler, PenTool } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function ServicesSection() {
  const services = [
    {
      icon: Sofa,
      title: "Projetos de Interiores",
      description: "Desenvolvimento de ambientes residenciais com foco em conforto, estética e funcionalidade",
    },
    {
      icon: Ruler,
      title: "Detalhamento Técnico",
      description: "Detalhamentos construtivos, marcenaria planejada e especificações de materiais",
    },
    {
      icon: Lamp,
      title: "Iluminação e Ambientação",
      description: "Projetos de iluminação que valorizam cada ambiente com aconchego e personalidade",
    },
    {
      icon: PenTool,
      title: "Modelagem 3D e Renderização",
      description: "Visualização realista dos projetos em SketchUp, Lumion, Enscape e 5D Render",
    },
    {
      icon: Paintbrush,
      title: "Composição de Materiais",
      description: "Seleção e harmonização de revestimentos, cores, texturas e acabamentos",
    },
    {
      icon: Home,
      title: "Consultoria e Apoio Projetual",
      description: "Orientação técnica em todas as etapas, do briefing à execução do projeto",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-sage-green/10 to-architectural-cream">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 smooth-entrance">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            O que posso desenvolver
            <span className="text-rose-antique"> para você</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Soluções completas em projetos de interiores, com atenção ao detalhamento técnico,
            à escolha de materiais e à personalização de cada ambiente.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card
              key={index}
              className="glass-morphism rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover-lift"
            >
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 gradient-rose-antique rounded-full flex items-center justify-center mx-auto mb-6">
                  <service.icon className="text-white w-8 h-8" />
                </div>
                <h3 className="font-playfair text-xl font-semibold text-gray-800 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
