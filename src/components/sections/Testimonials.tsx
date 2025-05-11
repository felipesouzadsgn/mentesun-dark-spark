
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    name: "Alex Johnson",
    position: "CEO, TechVision",
    content: "MenteSun transformed our business with a custom SaaS solution that streamlined our operations and reduced costs by 30%. Their team's technical expertise and attention to detail exceeded our expectations.",
    avatar: "A",
  },
  {
    name: "Sarah Williams",
    position: "Marketing Director, GrowFast",
    content: "The landing pages MenteSun created for our campaigns have increased our conversion rates by 45%. They truly understand what drives user engagement and conversion.",
    avatar: "S",
  },
  {
    name: "Michael Brown",
    position: "CTO, InnovateNow",
    content: "Working with MenteSun on our API development project was a seamless experience. Their team delivered a robust solution that integrates perfectly with our existing systems.",
    avatar: "M",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="bg-secondary section-padding">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-lg text-muted-foreground">
            Don't just take our word for it - hear from some of our satisfied clients.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-background border border-border">
              <CardContent className="pt-6">
                <div className="flex flex-col h-full">
                  <div className="mb-4">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 inline-block text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-6 flex-grow">"{testimonial.content}"</p>
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
