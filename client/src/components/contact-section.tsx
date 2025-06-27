import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Phone, Mail, MapPin, Instagram } from "lucide-react";
import { apiRequest } from "@/lib/queryClient";
import { insertContactSchema, type InsertContact } from "@shared/schema";

export default function ContactSection() {
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const [selectedProjectType, setSelectedProjectType] = useState("");

  const form = useForm<InsertContact>({
    resolver: zodResolver(insertContactSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      projectType: "",
      message: "",
    },
  });

  const contactMutation = useMutation({
    mutationFn: async (data: InsertContact) => {
      return apiRequest("POST", "/api/contacts", data);
    },
    onSuccess: () => {
      toast({
        title: "Mensagem enviada com sucesso!",
        description: "Entrarei em contato em breve. Obrigada pelo interesse!",
      });
      form.reset();
      setSelectedProjectType("");
      queryClient.invalidateQueries({ queryKey: ["/api/contacts"] });
    },
    onError: (error: any) => {
      toast({
        title: "Erro ao enviar mensagem",
        description: error.message || "Tente novamente mais tarde.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: InsertContact) => {
    contactMutation.mutate(data);
  };

  const contactInfo = [
    {
      icon: Phone,
      label: "Telefone",
      value: "(49) 99999-9999",
    },
    {
      icon: Mail,
      label: "Email",
      value: "cynthia@arquitetura.com",
    },
    {
      icon: MapPin,
      label: "Localização",
      value: "Chapecó, Santa Catarina",
    },
    {
      icon: Instagram,
      label: "Instagram",
      value: "@cynthia.arquiteta",
    },
  ];

  return (
    <section id="contato" className="py-20 bg-gradient-to-br from-rose-antique/10 to-sage-green/10">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 smooth-entrance">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Vamos realizar
              <span className="text-rose-antique"> seus sonhos?</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Agende nossa primeira conversa e descubra como podemos transformar
              seu espaço em algo verdadeiramente especial.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="smooth-entrance">
              <h3 className="font-playfair text-2xl font-semibold text-gray-800 mb-6">
                Entre em contato
              </h3>

              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-center hover-lift">
                    <div className="w-12 h-12 bg-rose-antique rounded-full flex items-center justify-center mr-4">
                      <item.icon className="text-white w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">{item.label}</p>
                      <p className="text-gray-600">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="smooth-entrance">
              <Card className="glass-morphism rounded-3xl shadow-lg">
                <CardContent className="p-8">
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div>
                      <Label htmlFor="name" className="text-gray-700 font-medium mb-2 block">
                        Nome completo
                      </Label>
                      <Input
                        id="name"
                        {...form.register("name")}
                        placeholder="Como posso te chamar?"
                        className="rounded-xl border-gray-200 focus:ring-2 focus:ring-rose-antique/50"
                      />
                      {form.formState.errors.name && (
                        <p className="text-red-500 text-sm mt-1">
                          {form.formState.errors.name.message}
                        </p>
                      )}
                    </div>

                    <div>
                      <Label htmlFor="email" className="text-gray-700 font-medium mb-2 block">
                        Email
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        {...form.register("email")}
                        placeholder="seu@email.com"
                        className="rounded-xl border-gray-200 focus:ring-2 focus:ring-rose-antique/50"
                      />
                      {form.formState.errors.email && (
                        <p className="text-red-500 text-sm mt-1">
                          {form.formState.errors.email.message}
                        </p>
                      )}
                    </div>

                    <div>
                      <Label htmlFor="phone" className="text-gray-700 font-medium mb-2 block">
                        Telefone
                      </Label>
                      <Input
                        id="phone"
                        type="tel"
                        {...form.register("phone")}
                        placeholder="(49) 99999-9999"
                        className="rounded-xl border-gray-200 focus:ring-2 focus:ring-rose-antique/50"
                      />
                      {form.formState.errors.phone && (
                        <p className="text-red-500 text-sm mt-1">
                          {form.formState.errors.phone.message}
                        </p>
                      )}
                    </div>

                    <div>
                      <Label htmlFor="projectType" className="text-gray-700 font-medium mb-2 block">
                        Tipo de projeto
                      </Label>
                      <Select
                        value={selectedProjectType}
                        onValueChange={(value) => {
                          setSelectedProjectType(value);
                          form.setValue("projectType", value);
                        }}
                      >
                        <SelectTrigger className="rounded-xl border-gray-200 focus:ring-2 focus:ring-rose-antique/50">
                          <SelectValue placeholder="Selecione uma opção" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="interiores">Projeto de Interiores</SelectItem>
                          <SelectItem value="arquitetonico">Projeto Arquitetônico</SelectItem>
                          <SelectItem value="reforma">Reforma/Retrofit</SelectItem>
                          <SelectItem value="fachada">Revitalização de Fachada</SelectItem>
                          <SelectItem value="consultoria">Consultoria</SelectItem>
                        </SelectContent>
                      </Select>
                      {form.formState.errors.projectType && (
                        <p className="text-red-500 text-sm mt-1">
                          {form.formState.errors.projectType.message}
                        </p>
                      )}
                    </div>

                    <div>
                      <Label htmlFor="message" className="text-gray-700 font-medium mb-2 block">
                        Conte-me sobre seu sonho
                      </Label>
                      <Textarea
                        id="message"
                        {...form.register("message")}
                        rows={4}
                        placeholder="Descreva seu projeto dos sonhos..."
                        className="rounded-xl border-gray-200 focus:ring-2 focus:ring-rose-antique/50"
                      />
                      {form.formState.errors.message && (
                        <p className="text-red-500 text-sm mt-1">
                          {form.formState.errors.message.message}
                        </p>
                      )}
                    </div>

                    <Button
                      type="submit"
                      disabled={contactMutation.isPending}
                      className="w-full bg-rose-antique hover:bg-rose-antique/90 text-white py-4 rounded-xl font-medium transition-all shadow-lg hover:shadow-xl"
                    >
                      {contactMutation.isPending
                        ? "Enviando..."
                        : "Agendar minha conversa gratuita"}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
