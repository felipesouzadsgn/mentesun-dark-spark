
import { 
  CheckCircle, 
  Clock, 
  CreditCard, 
  RefreshCw, 
  Shield, 
  Star,
  Award,
  Users
} from "lucide-react";

export function Features() {
  return (
    <section id="about" className="section-padding">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-8 order-2 lg:order-1">
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Por que Escolher a <span className="text-primary">MenteSun</span>
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Combinamos expertise técnica com soluções criativas para entregar resultados que superam expectativas e impulsionam o crescimento do seu negócio.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
              {[
                {
                  icon: <CheckCircle className="h-6 w-6" />,
                  title: "Equipe Experiente",
                  description: "Mais de 10 anos de experiência em desenvolvimento"
                },
                {
                  icon: <Clock className="h-6 w-6" />,
                  title: "Entrega Rápida",
                  description: "Metodologia ágil para cumprir prazos rigorosamente"
                },
                {
                  icon: <Shield className="h-6 w-6" />,
                  title: "Soluções Seguras",
                  description: "Padrões de segurança enterprise em todos projetos"
                },
                {
                  icon: <RefreshCw className="h-6 w-6" />,
                  title: "Suporte Contínuo",
                  description: "Acompanhamento e manutenção pós-lançamento"
                },
                {
                  icon: <CreditCard className="h-6 w-6" />,
                  title: "Preços Competitivos",
                  description: "Melhor custo-benefício do mercado"
                },
                {
                  icon: <Star className="h-6 w-6" />,
                  title: "Qualidade Premium",
                  description: "Excelência técnica em cada linha de código"
                }
              ].map((feature, index) => (
                <div key={index} className="group flex items-start gap-4 p-4 rounded-xl hover:bg-secondary/50 transition-all duration-300 hover:shadow-lg border border-transparent hover:border-border">
                  <div className="flex-shrink-0 p-2 bg-primary/10 rounded-lg text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                    {feature.icon}
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-semibold text-base sm:text-lg mb-1 group-hover:text-primary transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative order-1 lg:order-2">
            <div className="absolute inset-0 -z-10 bg-gradient-to-tr from-primary/5 via-primary/10 to-primary/5 rounded-3xl transform rotate-2 scale-105"></div>
            
            <div className="relative z-10 rounded-2xl overflow-hidden bg-background border border-border shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&h=400&fit=crop" 
                alt="Equipe trabalhando em projetos"
                className="w-full h-64 sm:h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              
              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 text-white">
                <h3 className="text-xl sm:text-2xl font-bold mb-4">Nossa Abordagem</h3>
                <p className="text-sm sm:text-base text-white/90 mb-6 leading-relaxed">
                  Metodologia colaborativa e transparente que envolve você em cada etapa do desenvolvimento.
                </p>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/20">
                    <div className="flex items-center gap-2 mb-2">
                      <Award className="h-5 w-5 text-yellow-400" />
                      <div className="font-bold text-2xl">100+</div>
                    </div>
                    <p className="text-xs text-white/80">Projetos Concluídos</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/20">
                    <div className="flex items-center gap-2 mb-2">
                      <Users className="h-5 w-5 text-green-400" />
                      <div className="font-bold text-2xl">98%</div>
                    </div>
                    <p className="text-xs text-white/80">Satisfação dos Clientes</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Background decorative elements */}
            <div className="hidden lg:block absolute -top-8 -right-8 w-24 h-24 bg-primary/20 rounded-full blur-2xl animate-pulse"></div>
            <div className="hidden lg:block absolute -bottom-8 -left-8 w-32 h-32 bg-primary/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
