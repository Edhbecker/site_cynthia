import {
  Pencil,
  Monitor,
  Lightbulb,
  MessageCircle,
  Eye,
  Wrench,
} from "lucide-react";

export default function SolutionSection() {
  const skills = [
    { icon: Pencil, name: "AutoCAD" },
    { icon: Monitor, name: "SketchUp" },
    { icon: Lightbulb, name: "Lumion" },
    { icon: Eye, name: "Enscape" },
    { icon: Wrench, name: "Revit" },
    { icon: Monitor, name: "5D Render" },
  ];

  const softSkills = [
    "Comunicação clara e objetiva",
    "Resolução de problemas",
    "Atendimento e suporte ao público",
    "Atenção aos detalhes",
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-architectural-cream to-sage-green/10">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto text-center smooth-entrance">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Habilidades e
            <span className="text-rose-antique"> Ferramentas</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
            Tenho domínio de softwares essenciais para o desenvolvimento de projetos,
            aliado a competências interpessoais que fazem a diferença no meu dia a dia profissional.
          </p>

          {/* Technical Skills */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-12">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="glass-morphism rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover-lift"
              >
                <div className="w-12 h-12 gradient-rose-antique rounded-full flex items-center justify-center mx-auto mb-4">
                  <skill.icon className="text-white w-6 h-6" />
                </div>
                <p className="text-gray-800 font-medium text-sm">{skill.name}</p>
              </div>
            ))}
          </div>

          {/* Soft Skills */}
          <div className="glass-morphism rounded-3xl p-8 shadow-lg">
            <div className="flex items-center justify-center mb-6">
              <MessageCircle className="text-rose-antique w-6 h-6 mr-3" />
              <h3 className="font-playfair text-xl font-semibold text-gray-800">
                Competências Interpessoais
              </h3>
            </div>
            <div className="flex flex-wrap justify-center gap-3">
              {softSkills.map((skill, index) => (
                <span
                  key={index}
                  className="bg-rose-antique/10 text-gray-700 px-5 py-2 rounded-full text-sm font-medium hover:bg-rose-antique/20 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
