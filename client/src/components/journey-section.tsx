import { Button } from "@/components/ui/button";
import { scrollToSection } from "@/lib/utils";
import imagemProfissional from "@localassets/imagem_profissional.jpeg";

export default function JourneySection() {
  return (
    <section id="jornada" className="py-20 bg-gradient-to-br from-architectural-cream to-sage-green/10">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="smooth-entrance">
              <img
                src={imagemProfissional}
                alt="Cynthia Aparecida da Silva, Acadêmica de Arquitetura e Urbanismo"
                className="w-full rounded-3xl shadow-xl hover-lift"
              />
            </div>
            <div className="smooth-entrance">
              <h2 className="font-playfair text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                Sobre
                <span className="text-rose-antique"> Cynthia</span>
              </h2>
              <div className="space-y-6 text-gray-700 leading-relaxed">
                <p>
                  Sou <strong>Cynthia Aparecida da Silva</strong>, acadêmica de Arquitetura e Urbanismo
                  pela UNOESC de Chapecó, atualmente no 9º período, e Técnica em Edificações. Minha
                  trajetória reúne experiências práticas em escritórios de arquitetura, engenharia,
                  topografia, interiores, marcenaria sob medida e órgãos públicos, vivências que
                  me proporcionaram uma visão ampla e realista do processo projetual.
                </p>
                <p>
                  Busco unir criatividade, conhecimento técnico e funcionalidade em cada projeto,
                  desenvolvendo soluções que valorizam estética, conforto, organização dos espaços
                  e atenção aos detalhes. Acredito que um bom projeto nasce da escuta atenta e do
                  cuidado com cada etapa, do conceito inicial à entrega final.
                </p>
                <p>
                  Meu objetivo é transformar ideias em ambientes reais, pensados com sensibilidade,
                  propósito e uma base técnica sólida, sempre em constante evolução profissional
                  e acadêmica.
                </p>
              </div>
              <div className="mt-8">
                <Button
                  onClick={() => scrollToSection("contato")}
                  className="bg-rose-antique hover:bg-rose-antique/90 text-white px-8 py-4 rounded-full text-lg font-medium transition-all shadow-lg hover:shadow-xl hover-lift"
                >
                  Vamos conversar?
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
