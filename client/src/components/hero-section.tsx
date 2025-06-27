import { Button } from "@/components/ui/button";
import { scrollToSection } from "@/lib/utils";

export default function HeroSection() {
  return (
    <section id="inicio" className="min-h-screen relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 architectural-pattern opacity-30"></div>

      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-rose-antique/20 to-sage-green/20">
        <img
          src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080"
          alt="Elegant architectural workspace with feminine touches"
          className="w-full h-full object-cover opacity-60"
        />
      </div>

      <div className="relative z-10 container mx-auto px-6 flex items-center min-h-screen">
        <div className="max-w-3xl smooth-entrance">
          <h1 className="font-playfair text-5xl md:text-7xl font-bold text-gray-800 leading-tight mb-6">
            Sua casa merece mais que um projeto.
            <span className="text-rose-antique"> Ela merece alma.</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed">
            Com sensibilidade arquitetônica e olhar feminino, transformo seus espaços em ambientes{" "}
            <span className="font-semibold text-sage-green">emocionalmente conectados</span> com quem você é —
            sem complicações, com muito carinho.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              onClick={() => scrollToSection("contato")}
              className="bg-rose-antique hover:bg-rose-antique/90 text-white px-8 py-4 rounded-full text-lg font-medium transition-all shadow-lg hover:shadow-xl hover-lift"
            >
              Agende sua conversa inicial
            </Button>
            <Button
              variant="outline"
              onClick={() => scrollToSection("projetos")}
              className="border-2 border-rose-antique text-rose-antique hover:bg-rose-antique hover:text-white px-8 py-4 rounded-full text-lg font-medium transition-all hover-lift"
            >
              Ver meus trabalhos
            </Button>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-1/4 right-10 w-20 h-20 bg-terracotta/30 organic-shape floating-element hidden lg:block"></div>
      <div className="absolute bottom-1/4 right-1/4 w-16 h-16 bg-sage-green/30 rounded-full floating-element hidden lg:block"></div>
    </section>
  );
}
