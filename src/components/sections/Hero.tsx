
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section id="home" className="pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <div className="inline-flex items-center px-3 py-1 rounded-full border border-border bg-secondary/50 text-sm">
              <span className="bg-primary text-primary-foreground rounded-full w-4 h-4 flex items-center justify-center mr-2">✓</span>
              <span>Transforming Ideas into Digital Solutions</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight">
              We Build <span className="bg-clip-text text-transparent bg-gradient-to-r from-black to-gray-500 dark:from-white dark:to-gray-400">Digital Experiences</span> That Drive Growth
            </h1>
            
            <p className="text-xl text-muted-foreground">
              MenteSun develops custom systems, websites, landing pages, SaaS platforms, and APIs to help your business thrive in the digital world.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" className="group">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button size="lg" variant="outline">
                Our Services
              </Button>
            </div>
            
            <div className="flex items-center pt-6 space-x-4">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full bg-gray-300 dark:bg-gray-700"></div>
                <div className="w-8 h-8 rounded-full bg-gray-400 dark:bg-gray-600"></div>
                <div className="w-8 h-8 rounded-full bg-gray-500 dark:bg-gray-500"></div>
              </div>
              <div className="text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">100+</span> projects completed
              </div>
            </div>
          </div>
          
          <div className="relative animate-fade-in">
            <div className="relative z-10 aspect-square md:aspect-[4/3] overflow-hidden rounded-lg border border-border bg-gradient-to-br from-secondary to-secondary/30 p-4">
              <div className="grid grid-cols-2 gap-4 h-full">
                <div className="col-span-2 bg-background/80 border border-border rounded-md shadow-lg flex items-center justify-center p-6">
                  <div className="text-center">
                    <div className="bg-primary/10 rounded-full p-3 inline-block mb-3">
                      <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h10a2 2 0 012 2v10a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    <h3 className="font-medium text-lg">Digital Solutions</h3>
                  </div>
                </div>
                <div className="bg-background/80 border border-border rounded-md shadow-lg flex items-center justify-center p-4">
                  <div className="text-center">
                    <div className="bg-primary/10 rounded-full p-2 inline-block mb-2">
                      <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                      </svg>
                    </div>
                    <h3 className="font-medium text-sm">Web</h3>
                  </div>
                </div>
                <div className="bg-background/80 border border-border rounded-md shadow-lg flex items-center justify-center p-4">
                  <div className="text-center">
                    <div className="bg-primary/10 rounded-full p-2 inline-block mb-2">
                      <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <h3 className="font-medium text-sm">API</h3>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Abstract shapes for design */}
            <div className="hidden md:block absolute -top-6 -right-6 w-32 h-32 bg-primary/10 rounded-full blur-2xl"></div>
            <div className="hidden md:block absolute -bottom-8 -left-8 w-40 h-40 bg-primary/5 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
