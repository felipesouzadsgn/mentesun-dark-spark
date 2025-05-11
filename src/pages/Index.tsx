
import { useEffect } from "react";
import { Header } from "../components/Header";
import { Hero } from "../components/sections/Hero";
import { Services } from "../components/sections/Services";
import { Features } from "../components/sections/Features";
import { Testimonials } from "../components/sections/Testimonials";
import { CTA } from "../components/sections/CTA";
import { Footer } from "../components/Footer";
import { initScrollAnimation } from "../utils/scrollAnimation";

const Index = () => {
  useEffect(() => {
    initScrollAnimation();
  }, []);

  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      
      <div className="flex-grow">
        <Hero />
        
        <div className="reveal" data-delay="1">
          <Services />
        </div>
        
        <div className="reveal" data-delay="2">
          <Features />
        </div>
        
        <div className="reveal" data-delay="1">
          <Testimonials />
        </div>
        
        <div className="reveal" data-delay="2">
          <CTA />
        </div>
      </div>
      
      <Footer />
    </main>
  );
};

export default Index;
