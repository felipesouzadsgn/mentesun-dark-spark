
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Globe, Layout, Layers, Smartphone, Database } from "lucide-react";

const services = [
  {
    icon: <Code className="h-8 w-8" />,
    title: "Desenvolvimento de Software",
    description: "Soluções de software personalizadas projetadas para otimizar suas operações e agilizar processos.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=250&fit=crop",
  },
  {
    icon: <Globe className="h-8 w-8" />,
    title: "Design e Desenvolvimento Web",
    description: "Sites modernos e responsivos que engajam visitantes e representam sua marca profissionalmente.",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=250&fit=crop",
  },
  {
    icon: <Layout className="h-8 w-8" />,
    title: "Landing Pages",
    description: "Páginas de destino de alta conversão projetadas para capturar leads e aumentar conversões.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=250&fit=crop",
  },
  {
    icon: <Layers className="h-8 w-8" />,
    title: "Aplicações SaaS",
    description: "Soluções escaláveis de software como serviço que proporcionam receita recorrente e valor aos clientes.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=250&fit=crop",
  },
  {
    icon: <Database className="h-8 w-8" />,
    title: "Desenvolvimento de API",
    description: "Soluções robustas de API que conectam seus sistemas e permitem troca de dados sem problemas.",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=400&h=250&fit=crop",
  },
  {
    icon: <Smartphone className="h-8 w-8" />,
    title: "Aplicações Móveis",
    description: "Aplicativos móveis nativos e multiplataforma que ampliam seu alcance para usuários móveis.",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=250&fit=crop",
  },
];

export function Services() {
  return (
    <section id="services" className="bg-secondary/30 section-padding">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">Nossos Serviços</h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            Fornecemos soluções digitais completas para ajudar seu negócio a prosperar no cenário digital moderno.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group overflow-hidden transition-all duration-500 hover:shadow-2xl border-0 bg-background/50 backdrop-blur-sm hover:bg-background/80 hover:-translate-y-2">
              <div className="relative overflow-hidden">
                <img 
                  src={service.image}
                  alt={service.title}
                  className="w-full h-40 sm:h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60"></div>
                <div className="absolute top-4 left-4 p-2 bg-background/90 backdrop-blur-sm rounded-lg transition-all duration-300 group-hover:scale-110">
                  <div className="text-primary">
                    {service.icon}
                  </div>
                </div>
              </div>
              
              <CardHeader className="pb-2">
                <CardTitle className="text-lg sm:text-xl group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm sm:text-base leading-relaxed">
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
