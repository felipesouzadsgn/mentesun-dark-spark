
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { ArrowRight, CheckCircle, Mail, Phone } from "lucide-react";

export function CTA() {
  const { toast } = useToast();
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast({
      title: "Obrigado por se inscrever!",
      description: "Manteremos você atualizado com nossas últimas novidades e ofertas.",
    });
  };

  return (
    <section id="contact" className="relative section-padding overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&h=800&fit=crop" 
          alt="Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/80"></div>
      </div>
      
      <div className="container relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Content */}
            <div className="text-white space-y-6">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                Pronto para Transformar Sua <span className="text-primary">Presença Digital?</span>
              </h2>
              <p className="text-lg md:text-xl text-white/90 leading-relaxed">
                Vamos discutir como a MenteSun pode ajudar seu negócio a crescer e alcançar novos patamares no mundo digital.
              </p>
              
              {/* Benefits list */}
              <div className="space-y-3">
                {[
                  "Consultoria gratuita personalizada",
                  "Proposta detalhada em 24 horas",
                  "Suporte técnico especializado"
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0" />
                    <span className="text-white/90">{benefit}</span>
                  </div>
                ))}
              </div>
              
              {/* Contact info */}
              <div className="pt-4 space-y-3">
                <div className="flex items-center gap-3 text-white/80">
                  <Phone className="h-5 w-5 text-primary" />
                  <span>+55 (11) 99123-4567</span>
                </div>
                <div className="flex items-center gap-3 text-white/80">
                  <Mail className="h-5 w-5 text-primary" />
                  <span>contato@mentesun.com</span>
                </div>
              </div>
            </div>
            
            {/* Form */}
            <div className="bg-background/95 backdrop-blur-sm rounded-2xl border border-border p-6 sm:p-8 shadow-2xl">
              <div className="text-center mb-6">
                <h3 className="text-xl sm:text-2xl font-bold mb-2">Comece Agora</h3>
                <p className="text-muted-foreground">
                  Receba uma proposta personalizada
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Input 
                    type="text" 
                    placeholder="Seu nome" 
                    className="bg-background border-border focus:border-primary" 
                    required 
                  />
                  <Input 
                    type="email" 
                    placeholder="Seu email" 
                    className="bg-background border-border focus:border-primary" 
                    required 
                  />
                </div>
                <Input 
                  type="tel" 
                  placeholder="Seu telefone" 
                  className="bg-background border-border focus:border-primary" 
                  required 
                />
                <textarea 
                  placeholder="Conte-nos sobre seu projeto..."
                  className="w-full p-3 rounded-lg border border-border bg-background focus:border-primary focus:outline-none resize-none h-24"
                  required
                />
                <Button type="submit" size="lg" className="w-full group bg-primary hover:bg-primary/90 text-primary-foreground">
                  Solicitar Proposta Gratuita
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </form>

              <div className="text-center text-xs text-muted-foreground mt-4">
                <p>
                  Ao enviar, você concorda com nossos Termos de Serviço e Política de Privacidade.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Abstract background elements */}
      <div className="hidden lg:block absolute top-1/4 -left-20 w-60 h-60 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="hidden lg:block absolute bottom-1/3 -right-20 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>
    </section>
  );
}
