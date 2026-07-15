import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue,
} from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { insertContactSchema, type InsertContact } from "@shared/schema";

export default function ContactSection() {
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const [selectedProjectType, setSelectedProjectType] = useState("");

  const form = useForm<InsertContact>({
    resolver: zodResolver(insertContactSchema),
    defaultValues: { name: "", email: "", phone: "", projectType: "", message: "" },
  });

  const contactMutation = useMutation({
    mutationFn: async (data: InsertContact) => apiRequest("POST", "/api/contacts", data),
    onSuccess: () => {
      toast({ title: "Mensagem enviada com sucesso!", description: "Entrarei em contato em breve. Obrigada pelo interesse!" });
      form.reset();
      setSelectedProjectType("");
      queryClient.invalidateQueries({ queryKey: ["/api/contacts"] });
    },
    onError: (error: any) => {
      toast({ title: "Erro ao enviar mensagem", description: error.message || "Tente novamente mais tarde.", variant: "destructive" });
    },
  });

  const onSubmit = (data: InsertContact) => contactMutation.mutate(data);

  return (
    <section id="contato" className="py-20 bg-gradient-to-br from-rose-antique/10 to-sage-green/10">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 smooth-entrance">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Vamos conversar sobre
              <span className="text-rose-antique"> o seu projeto?</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tem uma ideia, um ambiente para transformar ou quer conhecer melhor o meu trabalho?
              Entre em contato e vamos explorar juntos as possibilidades para o seu espaço.
            </p>
          </div>
          <div className="max-w-2xl mx-auto smooth-entrance">
            <Card className="glass-morphism rounded-3xl shadow-lg">
              <CardContent className="p-8">
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div>
                    <Label htmlFor="name" className="text-gray-700 font-medium mb-2 block">Nome completo</Label>
                    <Input id="name" {...form.register("name")} placeholder="Como posso te chamar?" className="rounded-xl border-gray-200 focus:ring-2 focus:ring-rose-antique/50" />
                    {form.formState.errors.name && <p className="text-red-500 text-sm mt-1">{form.formState.errors.name.message}</p>}
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-gray-700 font-medium mb-2 block">Email</Label>
                    <Input id="email" type="email" {...form.register("email")} placeholder="seu@email.com" className="rounded-xl border-gray-200 focus:ring-2 focus:ring-rose-antique/50" />
                    {form.formState.errors.email && <p className="text-red-500 text-sm mt-1">{form.formState.errors.email.message}</p>}
                  </div>
                  <div>
                    <Label htmlFor="phone" className="text-gray-700 font-medium mb-2 block">Telefone</Label>
                    <Input id="phone" type="tel" {...form.register("phone")} placeholder="(49) 9 9968-6054" className="rounded-xl border-gray-200 focus:ring-2 focus:ring-rose-antique/50" />
                    {form.formState.errors.phone && <p className="text-red-500 text-sm mt-1">{form.formState.errors.phone.message}</p>}
                  </div>
                  <div>
                    <Label htmlFor="projectType" className="text-gray-700 font-medium mb-2 block">Tipo de projeto</Label>
                    <Select value={selectedProjectType} onValueChange={(value) => { setSelectedProjectType(value); form.setValue("projectType", value); }}>
                      <SelectTrigger className="rounded-xl border-gray-200 focus:ring-2 focus:ring-rose-antique/50">
                        <SelectValue placeholder="Selecione uma opção" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="arquitetonico">Projeto Arquitetônico</SelectItem>
                        <SelectItem value="interiores">Projeto de Interiores</SelectItem>
                        <SelectItem value="luminotecnico">Projeto Luminotécnico</SelectItem>
                        <SelectItem value="reforma">Reforma e Readequação de Ambientes</SelectItem>
                        <SelectItem value="detalhamento">Detalhamento Técnico</SelectItem>
                        <SelectItem value="modelagem3d">Modelagem 3D e Renderização</SelectItem>
                        <SelectItem value="outro">Outro</SelectItem>
                      </SelectContent>
                    </Select>
                    {form.formState.errors.projectType && <p className="text-red-500 text-sm mt-1">{form.formState.errors.projectType.message}</p>}
                  </div>
                  <div>
                    <Label htmlFor="message" className="text-gray-700 font-medium mb-2 block">Conte-me sobre o seu projeto</Label>
                    <Textarea id="message" {...form.register("message")} rows={4} placeholder="Descreva sua ideia, o ambiente que deseja transformar..." className="rounded-xl border-gray-200 focus:ring-2 focus:ring-rose-antique/50" />
                    {form.formState.errors.message && <p className="text-red-500 text-sm mt-1">{form.formState.errors.message.message}</p>}
                  </div>
                  <Button type="submit" disabled={contactMutation.isPending} className="w-full bg-rose-antique hover:bg-rose-antique/90 text-white py-4 rounded-xl font-medium transition-all shadow-lg hover:shadow-xl">
                    {contactMutation.isPending ? "Enviando..." : "Enviar mensagem"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
