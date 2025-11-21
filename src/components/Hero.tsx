import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { Phone, ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-machinery.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[600px] flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Heavy earthmoving machinery" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/95 via-foreground/85 to-foreground/60"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <div className="inline-block mb-4 px-4 py-2 bg-secondary/20 backdrop-blur-sm rounded-full">
            <span className="text-secondary font-semibold text-sm">20+ Years of Excellence</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-background mb-6">
            Expert Earthmoving
            <span className="block text-secondary">Machinery Services</span>
          </h1>
          
          <p className="text-lg md:text-xl text-background/90 mb-8 max-w-2xl">
            Professional maintenance, troubleshooting, and on-site support for all heavy equipment across Tamil Nadu. Fast, reliable, and trusted by industry leaders.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/contact">
              <Button variant="hero" size="lg">
                Request Service
                <ArrowRight className="h-5 w-5" />
              </Button>
            </Link>
            <a href="tel:9894428729">
              <Button variant="outline" size="lg" className="border-background/40 text-background hover:bg-background/10 backdrop-blur-sm">
                <Phone className="h-5 w-5" />
                9894428729
              </Button>
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-12 pt-8 border-t border-background/20">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-secondary">20+</div>
              <div className="text-sm text-background/80 mt-1">Years Experience</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-secondary">35+</div>
              <div className="text-sm text-background/80 mt-1">Expert Team</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-secondary">5</div>
              <div className="text-sm text-background/80 mt-1">Service Vehicles</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
