
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Globe, Layout, Layers, Smartphone, Database } from "lucide-react";

const services = [
  {
    icon: <Code className="h-10 w-10" />,
    title: "Custom Software Development",
    description: "Tailored software solutions designed to optimize your business operations and streamline processes.",
  },
  {
    icon: <Globe className="h-10 w-10" />,
    title: "Website Design & Development",
    description: "Modern, responsive websites that engage visitors and represent your brand professionally.",
  },
  {
    icon: <Layout className="h-10 w-10" />,
    title: "Landing Pages",
    description: "High-converting landing pages designed to capture leads and drive conversions for your campaigns.",
  },
  {
    icon: <Layers className="h-10 w-10" />,
    title: "SaaS Applications",
    description: "Scalable software-as-a-service solutions that provide recurring revenue and value to your customers.",
  },
  {
    icon: <Database className="h-10 w-10" />,
    title: "API Development",
    description: "Robust API solutions that connect your systems and enable seamless data exchange.",
  },
  {
    icon: <Smartphone className="h-10 w-10" />,
    title: "Mobile Applications",
    description: "Native and cross-platform mobile applications that extend your reach to mobile users.",
  },
];

export function Services() {
  return (
    <section id="services" className="bg-secondary section-padding">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-lg text-muted-foreground">
            We provide end-to-end digital solutions to help your business thrive in the digital landscape.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group transition-all duration-300 hover:shadow-md border border-border">
              <CardHeader className="pb-2">
                <div className="mb-3 text-primary transition-colors duration-300">
                  {service.icon}
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
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
