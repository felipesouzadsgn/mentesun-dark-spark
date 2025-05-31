
import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Alexandre Silva",
    position: "CEO, TechVision",
    content: "A MenteSun transformou nosso negócio com uma solução SaaS personalizada que otimizou nossas operações e reduziu custos em 30%. A expertise técnica e a atenção aos detalhes da equipe superaram nossas expectativas.",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=60&h=60&fit=crop&crop=face",
    company: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=200&fit=crop",
  },
  {
    name: "Sara Oliveira",
    position: "Diretora de Marketing, GrowFast",
    content: "As landing pages criadas pela MenteSun para nossas campanhas aumentaram nossas taxas de conversão em 45%. Eles realmente entendem o que impulsiona o engajamento e a conversão dos usuários.",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b169ff48?w=60&h=60&fit=crop&crop=face",
    company: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=200&fit=crop",
  },
  {
    name: "Miguel Costa",
    position: "CTO, InnovateNow",
    content: "Trabalhar com a MenteSun em nosso projeto de desenvolvimento de API foi uma experiência perfeita. A equipe entregou uma solução robusta que se integra perfeitamente aos nossos sistemas existentes.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&h=60&fit=crop&crop=face",
    company: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=200&fit=crop",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="bg-secondary/30 section-padding">
      <div className="container">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">O Que Nossos Clientes Dizem</h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            Histórias reais de transformação digital. Veja como ajudamos empresas a alcançar seus objetivos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="group relative overflow-hidden bg-background/50 backdrop-blur-sm border-0 hover:bg-background/80 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2">
              {/* Company background */}
              <div className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
                <img 
                  src={testimonial.company}
                  alt="Company"
                  className="w-full h-full object-cover"
                />
              </div>
              
              <CardContent className="relative z-10 p-6 sm:p-8">
                <div className="flex flex-col h-full">
                  {/* Quote icon */}
                  <div className="mb-4">
                    <Quote className="h-8 w-8 text-primary/30 group-hover:text-primary/50 transition-colors duration-300" />
                  </div>

                  {/* Stars */}
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  
                  {/* Testimonial content */}
                  <p className="text-muted-foreground mb-6 flex-grow italic leading-relaxed text-sm sm:text-base group-hover:text-foreground/80 transition-colors duration-300">
                    "{testimonial.content}"
                  </p>
                  
                  {/* Author info */}
                  <div className="flex items-center">
                    <img 
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover mr-4 border-2 border-primary/20 group-hover:border-primary/40 transition-colors duration-300"
                    />
                    <div>
                      <h5 className="font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                        {testimonial.name}
                      </h5>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.position}
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>

              {/* Hover gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </Card>
          ))}
        </div>

        {/* Trust indicators */}
        <div className="mt-16 text-center">
          <p className="text-sm text-muted-foreground mb-6">Empresas que confiam na MenteSun</p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="w-24 h-12 bg-muted rounded-lg flex items-center justify-center">
                <span className="text-xs font-medium text-muted-foreground">Logo {i}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
