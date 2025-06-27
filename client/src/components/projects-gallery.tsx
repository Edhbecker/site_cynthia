import { useQuery } from "@tanstack/react-query";
import { Card, CardContent } from "@/components/ui/card";
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
            Meus Projetos
            <span className="text-rose-antique"> com Alma</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Cada projeto conta uma história única, refletindo a personalidade e os sonhos de quem vive o espaço.
          </p>
        </div>

        {isLoading ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(6)].map((_, i) => (
              <Card key={i} className="overflow-hidden">
                <Skeleton className="h-64 w-full" />
                <CardContent className="p-6">
                  <Skeleton className="h-6 w-3/4 mb-2" />
                  <Skeleton className="h-4 w-full" />
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects?.map((project) => (
              <Card
                key={project.id}
                className="group relative overflow-hidden rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 hover-lift"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="font-playfair text-xl font-semibold mb-2">
                      {project.title}
                    </h3>
                    <p className="text-sm opacity-90 mb-3">{project.description}</p>
                    <button className="flex items-center text-rose-antique font-medium hover:text-white transition-colors">
                      Ver história completa <ArrowRight className="ml-1 w-4 h-4" />
                    </button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
