import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import WhatsAppButton from "@/components/WhatsAppButton";
import ServiceCard from "@/components/ServiceCard";
import { Wrench, Truck, Package, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        <Hero />
        
        {/* Services Overview Section */}
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Our Core Services</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Comprehensive earthmoving machinery solutions with 20+ years of expertise
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <ServiceCard
                icon={Wrench}
                title="Maintenance"
                description="Regular servicing and preventive maintenance for all heavy equipment to ensure optimal performance."
              />
              <ServiceCard
                icon={Truck}
                title="On-Site Support"
                description="Fast response team with fully equipped service vehicles across Tamil Nadu."
              />
              <ServiceCard
                icon={Package}
                title="Parts Supply"
                description="Genuine parts from authorized dealers including Parker, Diamond Get, and more."
              />
              <ServiceCard
                icon={Clock}
                title="24/7 Emergency"
                description="Round-the-clock troubleshooting and defect rectification services."
              />
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                  Why Choose PG Tractors?
                </h2>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Founded by Mr. J. Mohan, a seasoned expert with over 20 years in the earthmoving machinery industry, PG Tractors brings unmatched expertise and reliability to every project.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <span className="text-primary font-bold text-xl">✓</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Expert Team</h3>
                      <p className="text-sm text-muted-foreground">35 skilled mechanics and trained assistants</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <span className="text-primary font-bold text-xl">✓</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Professional Facility</h3>
                      <p className="text-sm text-muted-foreground">2000 sq. ft. workshop with advanced machinery</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <span className="text-primary font-bold text-xl">✓</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Authorized Partners</h3>
                      <p className="text-sm text-muted-foreground">Partnerships with Parker, Wipro, NPL, and more</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8">
                  <Link to="/about">
                    <Button variant="default" size="lg">Learn More About Us</Button>
                  </Link>
                </div>
              </div>
              
              <div className="bg-muted rounded-lg p-8">
                <div className="space-y-6">
                  <div className="border-l-4 border-primary pl-6">
                    <div className="text-4xl font-bold text-primary mb-2">8 Years</div>
                    <div className="text-muted-foreground">Hindustan Motors</div>
                  </div>
                  <div className="border-l-4 border-secondary pl-6">
                    <div className="text-4xl font-bold text-secondary mb-2">2 Years</div>
                    <div className="text-muted-foreground">Caterpillar</div>
                  </div>
                  <div className="border-l-4 border-primary pl-6">
                    <div className="text-4xl font-bold text-primary mb-2">10 Years</div>
                    <div className="text-muted-foreground">GMMCO</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
              Contact us today for reliable earthmoving machinery services across Tamil Nadu
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button variant="secondary" size="lg">Request Service</Button>
              </Link>
              <a href="tel:9894428729">
                <Button variant="outline" size="lg" className="border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground/10">
                  Call Now: 9894428729
                </Button>
              </a>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
