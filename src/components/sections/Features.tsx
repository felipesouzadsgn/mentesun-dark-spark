
import { 
  CheckCircle, 
  Clock, 
  CreditCard, 
  RefreshCw, 
  Shield, 
  Star
} from "lucide-react";

export function Features() {
  return (
    <section id="about" className="section-padding">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6 order-2 lg:order-1">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Por que Escolher a <span className="text-primary">MenteSun</span>
              </h2>
              <p className="text-muted-foreground mb-8">
                Combinamos expertise técnica com soluções criativas para entregar resultados que superam expectativas.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start group hover:bg-secondary/50 p-4 rounded-lg transition-all duration-300">
                <div className="mr-4 text-primary group-hover:scale-110 transition-all duration-300">
                  <CheckCircle className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Equipe Experiente</h3>
                  <p className="text-muted-foreground text-sm">Nossos desenvolvedores têm mais de 10 anos de experiência no mercado.</p>
                </div>
              </div>

              <div className="flex items-start group hover:bg-secondary/50 p-4 rounded-lg transition-all duration-300">
                <div className="mr-4 text-primary group-hover:scale-110 transition-all duration-300">
                  <Clock className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Entrega Rápida</h3>
                  <p className="text-muted-foreground text-sm">Trabalhamos de forma eficiente para cumprir seus prazos.</p>
                </div>
              </div>

              <div className="flex items-start group hover:bg-secondary/50 p-4 rounded-lg transition-all duration-300">
                <div className="mr-4 text-primary group-hover:scale-110 transition-all duration-300">
                  <Shield className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Soluções Seguras</h3>
                  <p className="text-muted-foreground text-sm">Construídas com os mais altos padrões de segurança.</p>
                </div>
              </div>

              <div className="flex items-start group hover:bg-secondary/50 p-4 rounded-lg transition-all duration-300">
                <div className="mr-4 text-primary group-hover:scale-110 transition-all duration-300">
                  <RefreshCw className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Suporte Contínuo</h3>
                  <p className="text-muted-foreground text-sm">Não desaparecemos após o lançamento - estamos aqui para ajudar.</p>
                </div>
              </div>

              <div className="flex items-start group hover:bg-secondary/50 p-4 rounded-lg transition-all duration-300">
                <div className="mr-4 text-primary group-hover:scale-110 transition-all duration-300">
                  <CreditCard className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Preços Competitivos</h3>
                  <p className="text-muted-foreground text-sm">Soluções de qualidade que cabem no seu orçamento.</p>
                </div>
              </div>

              <div className="flex items-start group hover:bg-secondary/50 p-4 rounded-lg transition-all duration-300">
                <div className="mr-4 text-primary group-hover:scale-110 transition-all duration-300">
                  <Star className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Foco na Qualidade</h3>
                  <p className="text-muted-foreground text-sm">Nunca comprometemos a qualidade do nosso trabalho.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative order-1 lg:order-2">
            <div className="absolute inset-0 -z-10 bg-gradient-to-tr from-primary/5 to-primary/30 rounded-3xl transform rotate-3"></div>
            <div className="aspect-square md:aspect-auto md:h-[500px] relative z-10 rounded-3xl overflow-hidden bg-muted border border-border shadow-lg">
              <div className="absolute inset-0 bg-gradient-to-br from-background to-transparent opacity-60"></div>
              <div className="h-full w-full flex flex-col justify-center items-center p-8 md:p-12 relative z-10">
                <div className="max-w-md mx-auto text-center">
                  <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center">
                    <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold mb-6">Nossa Abordagem</h3>
                  <p className="text-muted-foreground mb-8">
                    Acreditamos em colaboração e transparência. Nosso processo de desenvolvimento envolve você em cada etapa, garantindo que o produto final esteja perfeitamente alinhado com sua visão e objetivos.
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-background/60 p-4 rounded-lg border border-border/30 hover:border-primary/30 transition-all shadow-sm">
                      <div className="font-bold text-3xl mb-1 text-primary">100+</div>
                      <p className="text-muted-foreground text-sm">Projetos Concluídos</p>
                    </div>
                    <div className="bg-background/60 p-4 rounded-lg border border-border/30 hover:border-primary/30 transition-all shadow-sm">
                      <div className="font-bold text-3xl mb-1 text-primary">95%</div>
                      <p className="text-muted-foreground text-sm">Satisfação dos Clientes</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
