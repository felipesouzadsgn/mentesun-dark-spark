
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Globe, Layout, Layers, Smartphone, Database } from "lucide-react";

const services = [
  {
    icon: <Code className="h-10 w-10" />,
    title: "Desenvolvimento de Software",
    description: "Soluções de software personalizadas projetadas para otimizar suas operações e agilizar processos.",
  },
  {
    icon: <Globe className="h-10 w-10" />,
    title: "Design e Desenvolvimento Web",
    description: "Sites modernos e responsivos que engajam visitantes e representam sua marca profissionalmente.",
  },
  {
    icon: <Layout className="h-10 w-10" />,
    title: "Landing Pages",
    description: "Páginas de destino de alta conversão projetadas para capturar leads e aumentar conversões.",
  },
  {
    icon: <Layers className="h-10 w-10" />,
    title: "Aplicações SaaS",
    description: "Soluções escaláveis de software como serviço que proporcionam receita recorrente e valor aos clientes.",
  },
  {
    icon: <Database className="h-10 w-10" />,
    title: "Desenvolvimento de API",
    description: "Soluções robustas de API que conectam seus sistemas e permitem troca de dados sem problemas.",
  },
  {
    icon: <Smartphone className="h-10 w-10" />,
    title: "Aplicações Móveis",
    description: "Aplicativos móveis nativos e multiplataforma que ampliam seu alcance para usuários móveis.",
  },
];

export function Services() {
  return (
    <section id="services" className="bg-secondary section-padding">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Nossos Serviços</h2>
          <p className="text-lg text-muted-foreground">
            Fornecemos soluções digitais completas para ajudar seu negócio a prosperar no cenário digital.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group transition-all duration-300 hover:shadow-md border border-border hover:border-primary/20">
              <CardHeader className="pb-2">
                <div className="mb-3 text-primary transition-colors duration-300 group-hover:scale-110">
                  {service.icon}
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
