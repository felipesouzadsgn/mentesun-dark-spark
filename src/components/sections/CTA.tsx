
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";

export function CTA() {
  const { toast } = useToast();
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast({
      title: "Thank you for subscribing!",
      description: "We'll keep you updated with our latest news and offerings.",
    });
  };

  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-primary/5 to-primary/20 rounded-3xl border border-border p-8 md:p-12">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Digital Presence?</h2>
              <p className="text-lg text-muted-foreground">
                Let's discuss how MenteSun can help your business grow.
              </p>
            </div>

            <div className="mb-8">
              <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4">
                <Input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="flex-grow" 
                  required 
                />
                <Button type="submit" size="lg">
                  Get Started
                </Button>
              </form>
            </div>

            <div className="text-center text-sm text-muted-foreground">
              <p>
                By signing up, you agree to our Terms of Service and Privacy Policy.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Abstract background elements */}
      <div className="hidden md:block absolute top-1/4 -left-20 w-60 h-60 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="hidden md:block absolute bottom-1/3 -right-20 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>
    </section>
  );
}
