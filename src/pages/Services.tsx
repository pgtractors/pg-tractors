import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ServiceCard from "@/components/ServiceCard";
import { Wrench, Truck, Package, Clock, Settings, Shield, Phone, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Services = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-primary text-primary-foreground py-20">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-xl opacity-90 max-w-3xl">
              Comprehensive earthmoving machinery solutions backed by 20+ years of expertise
            </p>
          </div>
        </section>

        {/* Main Services */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Core Services</h2>
              <div className="w-20 h-1 bg-secondary mx-auto"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              <ServiceCard
                icon={Wrench}
                title="Maintenance Services"
                description="Scheduled maintenance and preventive care for all types of heavy earthmoving equipment to ensure peak performance."
              />
              <ServiceCard
                icon={Settings}
                title="Troubleshooting"
                description="Expert diagnostics and problem-solving for machinery issues, minimizing downtime and maximizing productivity."
              />
              <ServiceCard
                icon={Truck}
                title="On-Site Service"
                description="Fully equipped service vehicles providing defect rectification across Tamil Nadu with fast response times."
              />
              <ServiceCard
                icon={Package}
                title="Parts Supply"
                description="Genuine parts from authorized dealers ensuring quality and compatibility for all your equipment needs."
              />
            </div>

            {/* Detailed Service Sections */}
            <div className="space-y-12">
              {/* Maintenance */}
              <div className="bg-muted p-8 rounded-lg">
                <div className="flex items-center mb-6">
                  <Wrench className="h-10 w-10 text-primary mr-4" />
                  <h3 className="text-2xl font-bold text-foreground">Machinery Maintenance</h3>
                </div>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Our comprehensive maintenance programs are designed to keep your earthmoving machinery operating at peak efficiency. We provide scheduled servicing, oil changes, filter replacements, and complete system checks to prevent breakdowns and extend equipment life.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-secondary mt-1 flex-shrink-0" />
                    <span className="text-sm text-foreground">Regular inspection schedules</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-secondary mt-1 flex-shrink-0" />
                    <span className="text-sm text-foreground">Hydraulic system maintenance</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-secondary mt-1 flex-shrink-0" />
                    <span className="text-sm text-foreground">Engine servicing and tuning</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-secondary mt-1 flex-shrink-0" />
                    <span className="text-sm text-foreground">Preventive maintenance programs</span>
                  </div>
                </div>
              </div>

              {/* Troubleshooting */}
              <div className="bg-muted p-8 rounded-lg">
                <div className="flex items-center mb-6">
                  <Settings className="h-10 w-10 text-primary mr-4" />
                  <h3 className="text-2xl font-bold text-foreground">Expert Troubleshooting</h3>
                </div>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  When equipment issues arise, our experienced technicians quickly diagnose and resolve problems. With decades of combined experience and state-of-the-art diagnostic tools, we minimize downtime and get your machinery back to work fast.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-secondary mt-1 flex-shrink-0" />
                    <span className="text-sm text-foreground">Advanced diagnostic equipment</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-secondary mt-1 flex-shrink-0" />
                    <span className="text-sm text-foreground">Electrical system repairs</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-secondary mt-1 flex-shrink-0" />
                    <span className="text-sm text-foreground">Mechanical fault resolution</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-secondary mt-1 flex-shrink-0" />
                    <span className="text-sm text-foreground">Performance optimization</span>
                  </div>
                </div>
              </div>

              {/* On-Site Support */}
              <div className="bg-muted p-8 rounded-lg">
                <div className="flex items-center mb-6">
                  <Truck className="h-10 w-10 text-primary mr-4" />
                  <h3 className="text-2xl font-bold text-foreground">On-Site Service Fleet</h3>
                </div>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Our fleet of 5 fully equipped service vehicles ensures rapid response across Tamil Nadu. Each vehicle carries essential tools, spare parts, and diagnostic equipment, enabling our team to handle most repairs and maintenance on-site, saving you time and transportation costs.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-secondary mt-1 flex-shrink-0" />
                    <span className="text-sm text-foreground">5 service vehicles ready to deploy</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-secondary mt-1 flex-shrink-0" />
                    <span className="text-sm text-foreground">Coverage across Tamil Nadu</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-secondary mt-1 flex-shrink-0" />
                    <span className="text-sm text-foreground">Fully equipped mobile workshops</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-secondary mt-1 flex-shrink-0" />
                    <span className="text-sm text-foreground">Fast response times</span>
                  </div>
                </div>
              </div>

              {/* Parts Supply */}
              <div className="bg-muted p-8 rounded-lg">
                <div className="flex items-center mb-6">
                  <Package className="h-10 w-10 text-primary mr-4" />
                  <h3 className="text-2xl font-bold text-foreground">Parts Supply Support</h3>
                </div>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Through our partnerships with leading manufacturers and our three strategically located stores in Puducherry, Thanjavur, and Chennai, we provide quick access to genuine parts and components for all major earthmoving equipment brands.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-secondary mt-1 flex-shrink-0" />
                    <span className="text-sm text-foreground">Authorized dealer partnerships</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-secondary mt-1 flex-shrink-0" />
                    <span className="text-sm text-foreground">3 store locations</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-secondary mt-1 flex-shrink-0" />
                    <span className="text-sm text-foreground">Genuine OEM parts</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-secondary mt-1 flex-shrink-0" />
                    <span className="text-sm text-foreground">Quick delivery service</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Additional Services */}
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Additional Services</h2>
              <div className="w-20 h-1 bg-secondary mx-auto"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <ServiceCard
                icon={Clock}
                title="24/7 Emergency Support"
                description="Round-the-clock availability for urgent breakdowns and critical situations."
              />
              <ServiceCard
                icon={Shield}
                title="Warranty Support"
                description="Professional warranty claim assistance and manufacturer coordination."
              />
              <ServiceCard
                icon={Phone}
                title="Technical Consultation"
                description="Expert advice on equipment selection, maintenance planning, and optimization."
              />
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Need Service or Support?</h2>
            <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
              Our expert team is ready to help. Contact us for fast, reliable service.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button variant="secondary" size="lg">Request Service Engineer</Button>
              </Link>
              <a href="tel:9894428729">
                <Button variant="outline" size="lg" className="border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground/10">
                  Call: 9894428729
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

export default Services;
