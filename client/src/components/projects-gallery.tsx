import { useQuery } from "@tanstack/react-query";
import { Link } from "wouter";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { ArrowRight } from "lucide-react";
import type { Project } from "@shared/schema";

export default function ProjectsGallery() {
  const { data: projects, isLoading } = useQuery<Project[]>({
    queryKey: ["/api/projects/featured"],
  });

  return (
    <section id="projetos" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 smooth-entrance">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Projetos de
            <span className="text-rose-antique"> Interiores</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ambientes residenciais projetados com foco em conforto, funcionalidade, estética contemporânea
            e aproveitamento inteligente dos espaços — cada detalhe pensado para criar lugares que
            acolhem e inspiram.
          </p>
        </div>

        {isLoading ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(6)].map((_, i) => (
              <Card key={i} className="overflow-hidden rounded-3xl">
                <Skeleton className="h-64 w-full" />
                <div className="p-6">
                  <Skeleton className="h-6 w-3/4 mb-2" />
                  <Skeleton className="h-4 w-full" />
                </div>
              </Card>
            ))}
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects?.map((project) => (
              <Link key={project.id} href={`/projetos/${project.id}`}>
                <Card className="group relative overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover-lift cursor-pointer h-full">
                  <div className="relative overflow-hidden">
                    <img
                      src={project.imageUrl}
                      alt={project.title}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />

                    {/* Category Badge */}
                    <span className="absolute top-4 left-4 bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-medium">
                      {project.category}
                    </span>

                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <h3 className="font-playfair text-xl font-semibold mb-2 group-hover:text-rose-antique transition-colors duration-300">
                        {project.title}
                      </h3>
                      <p className="text-sm opacity-90 mb-3 line-clamp-2">{project.description}</p>
                      <span className="inline-flex items-center text-rose-antique font-medium text-sm group-hover:text-white transition-colors duration-300">
                        Ver detalhes do projeto
                        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                      </span>
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        )}

        {/* Ver todos button */}
        <div className="text-center mt-12">
          <Link href="/projetos">
            <Button
              variant="outline"
              className="border-2 border-rose-antique text-rose-antique hover:bg-rose-antique hover:text-white px-8 py-4 rounded-full text-lg font-medium transition-all hover-lift"
            >
              Ver todos os projetos
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
