import { useQuery } from "@tanstack/react-query";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Star } from "lucide-react";
import type { Testimonial } from "@shared/schema";

export default function TestimonialsSection() {
  const { data: testimonials, isLoading } = useQuery<Testimonial[]>({
    queryKey: ["/api/testimonials/featured"],
  });

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 smooth-entrance">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            O que dizem sobre
            <span className="text-rose-antique"> meu trabalho</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Depoimentos de quem confiou no meu trabalho e viu seus ambientes ganhar
            forma com dedicação, atenção e cuidado em cada detalhe.
          </p>
        </div>

        {isLoading ? (
          <div className="grid md:grid-cols-3 gap-8">
            {[...Array(3)].map((_, i) => (
              <Card key={i} className="rounded-3xl">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <Skeleton className="w-16 h-16 rounded-full mr-4" />
                    <div>
                      <Skeleton className="h-4 w-24 mb-2" />
                      <Skeleton className="h-3 w-32" />
                    </div>
                  </div>
                  <Skeleton className="h-20 w-full mb-4" />
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, j) => (
                      <Skeleton key={j} className="w-4 h-4" />
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials?.map((testimonial) => (
              <Card
                key={testimonial.id}
                className="bg-gradient-to-br from-architectural-cream to-white rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 hover-lift"
              >
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 gradient-rose-antique rounded-full flex items-center justify-center text-white font-playfair text-xl font-bold mr-4">
                      {testimonial.clientName.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">{testimonial.clientName}</h4>
                      <p className="text-gray-600 text-sm">Projeto: {testimonial.projectTitle}</p>
                    </div>
                  </div>
                  <p className="text-gray-700 leading-relaxed italic mb-4">
                    "{testimonial.content}"
                  </p>
                  <div className="flex text-rose-antique">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
