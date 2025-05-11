
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    name: "Alexandre Silva",
    position: "CEO, TechVision",
    content: "A MenteSun transformou nosso negócio com uma solução SaaS personalizada que otimizou nossas operações e reduziu custos em 30%. A expertise técnica e a atenção aos detalhes da equipe superaram nossas expectativas.",
    avatar: "A",
  },
  {
    name: "Sara Oliveira",
    position: "Diretora de Marketing, GrowFast",
    content: "As landing pages criadas pela MenteSun para nossas campanhas aumentaram nossas taxas de conversão em 45%. Eles realmente entendem o que impulsiona o engajamento e a conversão dos usuários.",
    avatar: "S",
  },
  {
    name: "Miguel Costa",
    position: "CTO, InnovateNow",
    content: "Trabalhar com a MenteSun em nosso projeto de desenvolvimento de API foi uma experiência perfeita. A equipe entregou uma solução robusta que se integra perfeitamente aos nossos sistemas existentes.",
    avatar: "M",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="bg-secondary section-padding">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">O Que Nossos Clientes Dizem</h2>
          <p className="text-lg text-muted-foreground">
            Não acredite apenas em nossa palavra - veja o que alguns de nossos clientes satisfeitos têm a dizer.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-background border border-border hover:shadow-lg transition-all hover:border-primary/20">
              <CardContent className="pt-6">
                <div className="flex flex-col h-full">
                  <div className="mb-4">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 inline-block text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-6 flex-grow italic">"{testimonial.content}"</p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-primary/15 text-primary flex items-center justify-center font-semibold mr-3">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <h5 className="font-semibold">{testimonial.name}</h5>
                      <p className="text-sm text-muted-foreground">{testimonial.position}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
