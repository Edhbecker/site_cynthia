import { useQuery } from "@tanstack/react-query";
import { useParams, Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { ArrowLeft, MapPin, Calendar, Tag } from "lucide-react";
import type { Project } from "@shared/schema";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";

export default function ProjectDetail() {
  const { id } = useParams<{ id: string }>();

  const { data: project, isLoading, error } = useQuery<Project>({
    queryKey: [`/api/projects/${id}`],
    enabled: !!id,
  });

  if (isLoading) {
    return (
      <div className="min-h-screen bg-architectural-cream">
        <Navigation />
        <div className="pt-24 pb-20">
          <div className="container mx-auto px-6">
            <Skeleton className="h-[500px] w-full rounded-3xl mb-8" />
            <Skeleton className="h-10 w-1/2 mb-4" />
            <Skeleton className="h-6 w-1/4 mb-8" />
            <Skeleton className="h-32 w-full" />
          </div>
        </div>
      </div>
    );
  }

  if (error || !project) {
    return (
      <div className="min-h-screen bg-architectural-cream">
        <Navigation />
        <div className="pt-24 pb-20">
          <div className="container mx-auto px-6 text-center">
            <div className="max-w-2xl mx-auto smooth-entrance">
              <div className="w-24 h-24 gradient-rose-antique rounded-full flex items-center justify-center mx-auto mb-8">
                <span className="text-white text-4xl">?</span>
              </div>
              <h1 className="font-playfair text-4xl font-bold text-gray-800 mb-4">
                Projeto não encontrado
              </h1>
              <p className="text-gray-600 text-lg mb-8">
                O projeto que você está procurando não existe ou foi removido.
              </p>
              <Link href="/projetos">
                <Button className="bg-rose-antique hover:bg-rose-antique/90 text-white px-8 py-4 rounded-full text-lg font-medium transition-all shadow-lg hover:shadow-xl">
                  <ArrowLeft className="mr-2 w-5 h-5" />
                  Ver todos os projetos
                </Button>
              </Link>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-architectural-cream">
      <Navigation />

      {/* Hero Image */}
      <div className="relative h-[60vh] md:h-[70vh] overflow-hidden">
        <img
          src={project.imageUrl}
          alt={project.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16">
          <div className="container mx-auto smooth-entrance">
            <Link href="/projetos">
              <button className="flex items-center text-white/80 hover:text-white font-medium mb-6 transition-colors group">
                <ArrowLeft className="mr-2 w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                Voltar aos projetos
              </button>
            </Link>
            <h1 className="font-playfair text-4xl md:text-6xl font-bold text-white mb-4">
              {project.title}
            </h1>
            <div className="flex flex-wrap gap-4 items-center">
              <span className="inline-flex items-center bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium">
                <Tag className="w-4 h-4 mr-2" />
                {project.category}
              </span>
              {project.createdAt && (
                <span className="inline-flex items-center text-white/80 text-sm">
                  <Calendar className="w-4 h-4 mr-2" />
                  {new Date(project.createdAt).toLocaleDateString("pt-BR", {
                    year: "numeric",
                    month: "long",
                  })}
                </span>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Description */}
          <div className="glass-morphism rounded-3xl p-8 md:p-12 shadow-lg smooth-entrance mb-12">
            <h2 className="font-playfair text-3xl font-bold text-gray-800 mb-6">
              Sobre o <span className="text-rose-antique">Projeto</span>
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Project Details Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-12 smooth-entrance">
            <div className="glass-morphism rounded-2xl p-6 text-center hover-lift">
              <div className="w-14 h-14 gradient-rose-antique rounded-full flex items-center justify-center mx-auto mb-4">
                <Tag className="text-white w-6 h-6" />
              </div>
              <h3 className="font-playfair text-lg font-semibold text-gray-800 mb-2">Categoria</h3>
              <p className="text-gray-600">{project.category}</p>
            </div>
            <div className="glass-morphism rounded-2xl p-6 text-center hover-lift">
              <div className="w-14 h-14 gradient-rose-antique rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="text-white w-6 h-6" />
              </div>
              <h3 className="font-playfair text-lg font-semibold text-gray-800 mb-2">Localização</h3>
              <p className="text-gray-600">Chapecó, SC</p>
            </div>
            <div className="glass-morphism rounded-2xl p-6 text-center hover-lift">
              <div className="w-14 h-14 gradient-rose-antique rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="text-white w-6 h-6" />
              </div>
              <h3 className="font-playfair text-lg font-semibold text-gray-800 mb-2">Ano</h3>
              <p className="text-gray-600">
                {project.createdAt
                  ? new Date(project.createdAt).getFullYear()
                  : "2024"}
              </p>
            </div>
          </div>

          {/* Quote */}
          <div className="bg-gradient-to-br from-rose-antique/10 to-sage-green/10 rounded-3xl p-8 md:p-12 text-center smooth-entrance mb-12">
            <p className="font-playfair text-2xl md:text-3xl text-gray-800 italic leading-relaxed mb-4">
              "Projetar é dar forma às ideias — com técnica, sensibilidade e atenção a cada detalhe."
            </p>
            <p className="text-rose-antique font-medium">— Cynthia Aparecida da Silva</p>
          </div>

          {/* CTA */}
          <div className="text-center smooth-entrance">
            <h3 className="font-playfair text-2xl font-bold text-gray-800 mb-4">
              Quer transformar o seu <span className="text-rose-antique">ambiente</span>?
            </h3>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Entre em contato para conversarmos sobre suas ideias e como posso ajudar a desenvolver o projeto ideal para o seu espaço.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/#contato">
                <Button className="bg-rose-antique hover:bg-rose-antique/90 text-white px-8 py-4 rounded-full text-lg font-medium transition-all shadow-lg hover:shadow-xl hover-lift">
                  Entre em contato
                </Button>
              </a>
              <Link href="/projetos">
                <Button
                  variant="outline"
                  className="border-2 border-rose-antique text-rose-antique hover:bg-rose-antique hover:text-white px-8 py-4 rounded-full text-lg font-medium transition-all hover-lift"
                >
                  Ver mais projetos
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
