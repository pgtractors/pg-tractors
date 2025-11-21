import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import LocationCard from "@/components/LocationCard";
import { Building2, Truck, Wrench, MapPin } from "lucide-react";
import workshopImage from "@/assets/workshop.jpg";

const Infrastructure = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-primary text-primary-foreground py-20">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Infrastructure</h1>
            <p className="text-xl opacity-90 max-w-3xl">
              State-of-the-art facilities and strategic locations to serve you better
            </p>
          </div>
        </section>

        {/* Workshop Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center mb-6">
                  <Building2 className="h-10 w-10 text-primary mr-4" />
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground">Professional Workshop</h2>
                </div>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Our 2000 sq. ft. workshop is equipped with modern machinery and professional tools to handle all aspects of earthmoving equipment maintenance and repair. From routine servicing to complex overhauls, our facility is designed for efficiency and precision.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center">
                      <Wrench className="h-6 w-6 text-secondary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Advanced Equipment</h3>
                      <p className="text-sm text-muted-foreground">Welding machinery, hose fitting machines, and diagnostic tools</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center">
                      <Building2 className="h-6 w-6 text-secondary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Spacious Layout</h3>
                      <p className="text-sm text-muted-foreground">2000 sq. ft. of organized workspace for multiple projects</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center">
                      <Truck className="h-6 w-6 text-secondary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Quality Standards</h3>
                      <p className="text-sm text-muted-foreground">Professional tools and equipment meeting industry standards</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="rounded-lg overflow-hidden shadow-strong">
                <img 
                  src={workshopImage} 
                  alt="PG Tractors professional workshop" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Service Fleet */}
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Service Fleet</h2>
              <div className="w-20 h-1 bg-secondary mx-auto mb-6"></div>
              <p className="text-muted-foreground max-w-3xl mx-auto">
                Our fleet of 5 fully equipped service vehicles ensures we can reach you quickly anywhere in Tamil Nadu
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-card p-8 rounded-lg shadow-card text-center">
                <div className="inline-flex p-4 bg-primary/10 rounded-full mb-4">
                  <Truck className="h-10 w-10 text-primary" />
                </div>
                <div className="text-4xl font-bold text-primary mb-2">5</div>
                <h3 className="font-semibold text-foreground mb-2">Service Vehicles</h3>
                <p className="text-sm text-muted-foreground">Fully equipped mobile workshops</p>
              </div>
              
              <div className="bg-card p-8 rounded-lg shadow-card text-center">
                <div className="inline-flex p-4 bg-secondary/10 rounded-full mb-4">
                  <Wrench className="h-10 w-10 text-secondary" />
                </div>
                <div className="text-4xl font-bold text-secondary mb-2">100%</div>
                <h3 className="font-semibold text-foreground mb-2">Equipped</h3>
                <p className="text-sm text-muted-foreground">Tools and diagnostic equipment</p>
              </div>
              
              <div className="bg-card p-8 rounded-lg shadow-card text-center">
                <div className="inline-flex p-4 bg-primary/10 rounded-full mb-4">
                  <MapPin className="h-10 w-10 text-primary" />
                </div>
                <div className="text-4xl font-bold text-primary mb-2">24/7</div>
                <h3 className="font-semibold text-foreground mb-2">Coverage</h3>
                <p className="text-sm text-muted-foreground">Across Tamil Nadu</p>
              </div>
            </div>
          </div>
        </section>

        {/* Store Locations */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Store Locations</h2>
              <div className="w-20 h-1 bg-secondary mx-auto mb-6"></div>
              <p className="text-muted-foreground max-w-3xl mx-auto">
                Three strategically located stores to serve you better with genuine parts and quick service
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <LocationCard
                city="Puducherry"
                address="NO.6 ABDUL KALAM STREET, PUDUCHERRY TO TINDIVANAM MAIN ROAD, OPP.KFC, PATTANUR - 605 006"
                phone="9894428729"
                email="pgtractors@gmail.com"
              />
              
              <LocationCard
                city="Thanjavur"
                address="NO.5, GANDHI NAGAR, MOTHER TERESA HOSPITAL (NEAR), THANJAVUR - 613 005"
                phone="9976888919"
                email="pgtractors@gmail.com"
              />
              
              <LocationCard
                city="Chennai"
                address="No.135, Poonamallee High Road, Velappanchavadi, Chennai – 600 077"
                phone="9500075955"
                email="pgchennai5225@gmail.com"
              />
            </div>
          </div>
        </section>

        {/* Capabilities */}
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center text-foreground">Our Capabilities</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-card p-6 rounded-lg shadow-card">
                  <h3 className="font-semibold text-lg mb-3 text-foreground">Welding Services</h3>
                  <p className="text-sm text-muted-foreground">
                    Professional welding machinery for structural repairs and custom fabrication work
                  </p>
                </div>
                
                <div className="bg-card p-6 rounded-lg shadow-card">
                  <h3 className="font-semibold text-lg mb-3 text-foreground">Hose Fitting</h3>
                  <p className="text-sm text-muted-foreground">
                    Specialized hose fitting machines for hydraulic systems and pressure applications
                  </p>
                </div>
                
                <div className="bg-card p-6 rounded-lg shadow-card">
                  <h3 className="font-semibold text-lg mb-3 text-foreground">Diagnostic Tools</h3>
                  <p className="text-sm text-muted-foreground">
                    Advanced diagnostic equipment for electrical and mechanical troubleshooting
                  </p>
                </div>
                
                <div className="bg-card p-6 rounded-lg shadow-card">
                  <h3 className="font-semibold text-lg mb-3 text-foreground">Parts Inventory</h3>
                  <p className="text-sm text-muted-foreground">
                    Comprehensive stock of genuine parts across three locations for immediate availability
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Infrastructure;
