
import { Button } from "@/components/ui/button";
import { ArrowRight, PlayCircle } from "lucide-react";

export function Hero() {
  return (
    <section id="home" className="relative pt-20 pb-16 md:pt-28 md:pb-24 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary/20"></div>
      
      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="space-y-6 animate-fade-in order-2 lg:order-1">
            <div className="inline-flex items-center px-4 py-2 rounded-full border border-border bg-secondary/50 text-sm backdrop-blur-sm">
              <span className="bg-green-500 text-white rounded-full w-2 h-2 mr-3 animate-pulse"></span>
              <span className="font-medium">Transformando Ideias em Soluções Digitais</span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
              Criamos <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary/80 to-primary/60">Experiências Digitais</span> Que Impulsionam Crescimento
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl">
              A MenteSun desenvolve sistemas personalizados, websites, landing pages, plataformas SaaS e APIs para ajudar seu negócio a prosperar no mundo digital.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <Button size="lg" className="group bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300">
                Começar Agora
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button size="lg" variant="outline" className="group border-2 hover:bg-secondary/50">
                <PlayCircle className="mr-2 h-4 w-4" />
                Ver Demonstração
              </Button>
            </div>
            
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 pt-8">
              <div className="flex -space-x-3">
                <img 
                  className="w-10 h-10 rounded-full border-2 border-background object-cover" 
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face" 
                  alt="Cliente satisfeito" 
                />
                <img 
                  className="w-10 h-10 rounded-full border-2 border-background object-cover" 
                  src="https://images.unsplash.com/photo-1494790108755-2616b169ff48?w=40&h=40&fit=crop&crop=face" 
                  alt="Cliente satisfeito" 
                />
                <img 
                  className="w-10 h-10 rounded-full border-2 border-background object-cover" 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face" 
                  alt="Cliente satisfeito" 
                />
                <div className="w-10 h-10 rounded-full border-2 border-background bg-primary text-primary-foreground flex items-center justify-center text-sm font-semibold">
                  +50
                </div>
              </div>
              <div className="text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">100+</span> projetos concluídos com sucesso
              </div>
            </div>
          </div>
          
          <div className="relative animate-fade-in order-1 lg:order-2">
            {/* Main hero image */}
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-2xl border border-border/20">
              <img 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=450&fit=crop" 
                alt="Desenvolvimento de software moderno"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              
              {/* Floating cards */}
              <div className="absolute top-4 left-4 bg-background/95 backdrop-blur-sm border border-border rounded-lg p-3 shadow-lg">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-xs font-medium">Sistema Online</span>
                </div>
              </div>
              
              <div className="absolute bottom-4 right-4 bg-background/95 backdrop-blur-sm border border-border rounded-lg p-3 shadow-lg">
                <div className="text-center">
                  <div className="text-lg font-bold text-primary">99%</div>
                  <div className="text-xs text-muted-foreground">Uptime</div>
                </div>
              </div>
            </div>
            
            {/* Technology showcase cards */}
            <div className="grid grid-cols-2 gap-3 mt-4">
              <div className="bg-background/80 backdrop-blur-sm border border-border rounded-lg p-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:border-primary/20">
                <img 
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=300&h=200&fit=crop" 
                  alt="Desenvolvimento web"
                  className="w-full h-20 object-cover rounded-md mb-2"
                />
                <h3 className="font-semibold text-sm">Desenvolvimento Web</h3>
              </div>
              <div className="bg-background/80 backdrop-blur-sm border border-border rounded-lg p-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:border-primary/20">
                <img 
                  src="https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?w=300&h=200&fit=crop" 
                  alt="Soluções inovadoras"
                  className="w-full h-20 object-cover rounded-md mb-2"
                />
                <h3 className="font-semibold text-sm">Soluções SaaS</h3>
              </div>
            </div>
            
            {/* Abstract shapes for design */}
            <div className="hidden lg:block absolute -top-8 -right-8 w-32 h-32 bg-primary/10 rounded-full blur-2xl animate-pulse"></div>
            <div className="hidden lg:block absolute -bottom-8 -left-8 w-40 h-40 bg-primary/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
