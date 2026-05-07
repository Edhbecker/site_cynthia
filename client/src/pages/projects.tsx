import { useQuery } from "@tanstack/react-query";
import { Link } from "wouter";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { ArrowRight, ArrowLeft, Filter } from "lucide-react";
import { useState } from "react";
import type { Project } from "@shared/schema";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState<string>("Todos");

  const { data: projects, isLoading } = useQuery<Project[]>({
    queryKey: ["/api/projects"],
  });

  const categories = ["Todos", ...new Set(projects?.map((p) => p.category) || [])];

  const filteredProjects =
    activeCategory === "Todos"
      ? projects
      : projects?.filter((p) => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-architectural-cream">
      <Navigation />

      {/* Page Header */}
      <section className="pt-28 pb-16 bg-gradient-to-br from-rose-antique/15 to-sage-green/10 relative overflow-hidden">
        <div className="absolute inset-0 architectural-pattern opacity-20" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl smooth-entrance">
            <Link href="/">
              <button className="flex items-center text-gray-600 hover:text-rose-antique font-medium mb-6 transition-colors group">
                <ArrowLeft className="mr-2 w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                Voltar ao início
              </button>
            </Link>
            <h1 className="font-playfair text-5xl md:text-6xl font-bold text-gray-800 mb-6">
              Projetos de
              <span className="text-rose-antique"> Interiores</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Ambientes residenciais projetados com foco em conforto, funcionalidade e estética contemporânea.
              Explore o portfólio e conheça soluções com marcenaria planejada, iluminação, materiais e personalização dos espaços.
            </p>
          </div>
        </div>

        {/* Floating decorative elements */}
        <div className="absolute top-1/3 right-10 w-20 h-20 bg-terracotta/20 organic-shape floating-element hidden lg:block" />
        <div className="absolute bottom-10 right-1/4 w-14 h-14 bg-sage-green/20 rounded-full floating-element hidden lg:block" />
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white border-b border-gray-100 sticky top-[72px] z-40">
        <div className="container mx-auto px-6">
          <div className="flex items-center gap-3 overflow-x-auto pb-2 scrollbar-hide">
            <Filter className="w-5 h-5 text-gray-400 flex-shrink-0" />
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-rose-antique text-white shadow-md"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          {isLoading ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[...Array(6)].map((_, i) => (
                <Card key={i} className="overflow-hidden rounded-3xl">
                  <Skeleton className="h-72 w-full" />
                  <div className="p-6">
                    <Skeleton className="h-6 w-3/4 mb-3" />
                    <Skeleton className="h-4 w-full mb-2" />
                    <Skeleton className="h-4 w-2/3" />
                  </div>
                </Card>
              ))}
            </div>
          ) : filteredProjects && filteredProjects.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
                <Link key={project.id} href={`/projetos/${project.id}`}>
                  <Card className="group relative overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover-lift cursor-pointer h-full">
                    <div className="relative overflow-hidden">
                      <img
                        src={project.imageUrl}
                        alt={project.title}
                        className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />

                      {/* Category Badge */}
                      <span className="absolute top-4 left-4 bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-medium">
                        {project.category}
                      </span>

                      {/* Content Overlay */}
                      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                        <h3 className="font-playfair text-2xl font-semibold mb-2 group-hover:text-rose-antique transition-colors duration-300">
                          {project.title}
                        </h3>
                        <p className="text-sm text-white/80 mb-4 line-clamp-2">
                          {project.description}
                        </p>
                        <span className="inline-flex items-center text-rose-antique font-medium text-sm group-hover:text-white transition-colors duration-300">
                          Ver história completa
                          <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                        </span>
                      </div>
                    </div>
                  </Card>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-gray-500 text-lg">
                Nenhum projeto encontrado nesta categoria.
              </p>
            </div>
          )}

          {/* Results Count */}
          {!isLoading && filteredProjects && (
            <p className="text-center text-gray-400 mt-8 text-sm">
              {filteredProjects.length} {filteredProjects.length === 1 ? "projeto encontrado" : "projetos encontrados"}
              {activeCategory !== "Todos" && ` em "${activeCategory}"`}
            </p>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-rose-antique/10 to-sage-green/10">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Quer transformar o <span className="text-rose-antique">seu ambiente</span>?
          </h2>
          <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
            Cada espaço é único e merece uma solução pensada sob medida. Vamos conversar sobre suas ideias e possibilidades de projeto.
          </p>
          <a href="/#contato">
            <Button className="bg-rose-antique hover:bg-rose-antique/90 text-white px-8 py-4 rounded-full text-lg font-medium transition-all shadow-lg hover:shadow-xl hover-lift">
              Entre em contato
            </Button>
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
