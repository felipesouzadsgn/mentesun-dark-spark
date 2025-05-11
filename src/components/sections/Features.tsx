
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
                Why Choose <span className="text-primary">MenteSun</span>
              </h2>
              <p className="text-muted-foreground mb-8">
                We combine technical expertise with creative problem-solving to deliver solutions that exceed expectations.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start">
                <div className="mr-4 text-primary">
                  <CheckCircle className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Experienced Team</h3>
                  <p className="text-muted-foreground text-sm">Our developers have 10+ years of industry experience.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="mr-4 text-primary">
                  <Clock className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Fast Delivery</h3>
                  <p className="text-muted-foreground text-sm">We work efficiently to meet your deadlines.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="mr-4 text-primary">
                  <Shield className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Secure Solutions</h3>
                  <p className="text-muted-foreground text-sm">Built with the highest security standards in mind.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="mr-4 text-primary">
                  <RefreshCw className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Ongoing Support</h3>
                  <p className="text-muted-foreground text-sm">We don't disappear after launch - we're here to help.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="mr-4 text-primary">
                  <CreditCard className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Competitive Pricing</h3>
                  <p className="text-muted-foreground text-sm">Quality solutions that won't break your budget.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="mr-4 text-primary">
                  <Star className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Quality Focused</h3>
                  <p className="text-muted-foreground text-sm">We never compromise on the quality of our work.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative order-1 lg:order-2">
            <div className="absolute inset-0 -z-10 bg-gradient-to-tr from-primary/5 to-primary/30 rounded-3xl transform rotate-3"></div>
            <div className="aspect-square md:aspect-auto md:h-[500px] relative z-10 rounded-3xl overflow-hidden bg-muted border border-border">
              <div className="absolute inset-0 bg-gradient-to-br from-background to-transparent opacity-60"></div>
              <div className="h-full w-full flex flex-col justify-center items-center p-8 md:p-12 relative z-10">
                <div className="max-w-md mx-auto text-center">
                  <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center">
                    <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold mb-6">Our Approach</h3>
                  <p className="text-muted-foreground mb-8">
                    We believe in collaboration and transparency. Our development process involves you at every step, ensuring the final product aligns perfectly with your vision and goals.
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-background/60 p-4 rounded-lg">
                      <div className="font-bold text-3xl mb-1">100+</div>
                      <p className="text-muted-foreground text-sm">Projects Completed</p>
                    </div>
                    <div className="bg-background/60 p-4 rounded-lg">
                      <div className="font-bold text-3xl mb-1">95%</div>
                      <p className="text-muted-foreground text-sm">Client Satisfaction</p>
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
