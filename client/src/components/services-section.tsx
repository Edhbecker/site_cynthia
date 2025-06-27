import { Home, Building, Wrench, Palette, Sofa, Compass } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function ServicesSection() {
  const services = [
    {
      icon: Home,
      title: "Projetos de Interiores",
      description: "Residencial e comercial com toque feminino e sensível",
    },
    {
      icon: Building,
      title: "Projetos Arquitetônicos",
      description: "Com aprovação legal e cuidado em cada detalhe",
    },
    {
      icon: Wrench,
      title: "Reformas e Retrofit",
      description: "Transformação cuidadosa de imóveis existentes",
    },
    {
      icon: Palette,
      title: "Revitalização de Fachadas",
      description: "Primeira impressão que encanta e valoriza",
    },
    {
      icon: Sofa,
      title: "Ambientação Completa",
      description: "Móveis e decoração com personalidade única",
    },
    {
      icon: Compass,
      title: "Projetos Técnicos",
      description: "Elétrico, hidrossanitário, bombeiros, acessibilidade",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-sage-green/10 to-architectural-cream">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 smooth-entrance">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            O que entregamos
            <span className="text-rose-antique"> na prática</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Muito além de ideias. Entregamos soluções completas, prontas para transformar seus sonhos em realidade.
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
