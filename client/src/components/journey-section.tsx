import { Button } from "@/components/ui/button";
import { scrollToSection } from "@/lib/utils";

export default function JourneySection() {
  return (
    <section id="jornada" className="py-20 bg-gradient-to-br from-architectural-cream to-sage-green/10">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="smooth-entrance">
              <img
                src="https://images.unsplash.com/photo-1594736797933-d0501ba2fe65?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=1000"
                alt="Professional portrait of Cynthia in her architectural workspace"
                className="w-full rounded-3xl shadow-xl hover-lift"
              />
            </div>
            <div className="smooth-entrance">
              <h2 className="font-playfair text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                Minha
                <span className="text-rose-antique"> Jornada</span>
              </h2>
              <div className="space-y-6 text-gray-700 leading-relaxed">
                <p>
                  Sou <strong>Cynthia Aparecida da Silva</strong>, arquiteta apaixonada por criar espaços
                  que tocam a alma. Com mais de 10 anos de experiência, descobri que a verdadeira
                  arquitetura vai além da técnica — ela conecta emoções.
                </p>
                <p>
                  Minha abordagem feminina e sensível me permite enxergar detalhes que fazem toda a diferença:
                  aquele cantinho especial para o seu momento de pausa, a iluminação perfeita para suas
                  manhãs de domingo, os materiais que acolhem e inspiram.
                </p>
                <p>
                  Acredito que cada projeto tem uma história única para contar. Meu papel é ser a
                  tradutora dos seus sonhos, transformando-os em espaços reais, funcionais e
                  profundamente seus.
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
