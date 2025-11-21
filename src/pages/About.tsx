import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Building2, Users, Award, Target } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-primary text-primary-foreground py-20">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About PG Tractors</h1>
            <p className="text-xl opacity-90 max-w-3xl">
              Over 20 years of excellence in earthmoving machinery service, maintenance, and troubleshooting
            </p>
          </div>
        </section>

        {/* Founder Story */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Our Founder</h2>
                <div className="w-20 h-1 bg-secondary mx-auto mb-6"></div>
              </div>
              
              <div className="bg-card p-8 rounded-lg shadow-card">
                <h3 className="text-2xl font-bold mb-4 text-foreground">Mr. J. Mohan</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  PG Tractors was founded by Mr. J. Mohan, an earthmoving machinery expert with over 20 years of hands-on experience in the industry. His journey through some of the most prestigious organizations in the field has shaped PG Tractors into the reliable service provider it is today.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                  <div className="border-l-4 border-primary pl-4">
                    <div className="text-3xl font-bold text-primary mb-2">8 Years</div>
                    <div className="text-sm font-semibold text-foreground mb-1">Hindustan Motors</div>
                    <p className="text-xs text-muted-foreground">Building foundation expertise</p>
                  </div>
                  
                  <div className="border-l-4 border-secondary pl-4">
                    <div className="text-3xl font-bold text-secondary mb-2">2 Years</div>
                    <div className="text-sm font-semibold text-foreground mb-1">Caterpillar</div>
                    <p className="text-xs text-muted-foreground">Global standards excellence</p>
                  </div>
                  
                  <div className="border-l-4 border-primary pl-4">
                    <div className="text-3xl font-bold text-primary mb-2">10 Years</div>
                    <div className="text-sm font-semibold text-foreground mb-1">GMMCO</div>
                    <p className="text-xs text-muted-foreground">Leadership & innovation</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-card p-8 rounded-lg shadow-card">
                <div className="flex items-center mb-4">
                  <Target className="h-8 w-8 text-primary mr-3" />
                  <h3 className="text-2xl font-bold text-foreground">Our Mission</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  To provide fast, reliable, and professional earthmoving machinery services that keep our clients' operations running smoothly. We are committed to delivering excellence through expert maintenance, on-site support, and genuine parts supply across Tamil Nadu.
                </p>
              </div>
              
              <div className="bg-card p-8 rounded-lg shadow-card">
                <div className="flex items-center mb-4">
                  <Award className="h-8 w-8 text-secondary mr-3" />
                  <h3 className="text-2xl font-bold text-foreground">Our Vision</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  To be the most trusted partner in earthmoving machinery services, recognized for our expertise, reliability, and commitment to customer satisfaction. We aim to set industry standards through continuous improvement and innovation.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Company Highlights */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Company Highlights</h2>
              <div className="w-20 h-1 bg-secondary mx-auto"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="inline-flex p-4 bg-primary/10 rounded-full mb-4">
                  <Building2 className="h-8 w-8 text-primary" />
                </div>
                <div className="text-4xl font-bold text-primary mb-2">2000</div>
                <div className="text-sm text-muted-foreground">sq. ft. Workshop</div>
              </div>
              
              <div className="text-center">
                <div className="inline-flex p-4 bg-secondary/10 rounded-full mb-4">
                  <Users className="h-8 w-8 text-secondary" />
                </div>
                <div className="text-4xl font-bold text-secondary mb-2">35+</div>
                <div className="text-sm text-muted-foreground">Expert Team Members</div>
              </div>
              
              <div className="text-center">
                <div className="inline-flex p-4 bg-primary/10 rounded-full mb-4">
                  <Award className="h-8 w-8 text-primary" />
                </div>
                <div className="text-4xl font-bold text-primary mb-2">5</div>
                <div className="text-sm text-muted-foreground">Service Vehicles</div>
              </div>
              
              <div className="text-center">
                <div className="inline-flex p-4 bg-secondary/10 rounded-full mb-4">
                  <Target className="h-8 w-8 text-secondary" />
                </div>
                <div className="text-4xl font-bold text-secondary mb-2">3</div>
                <div className="text-sm text-muted-foreground">Store Locations</div>
              </div>
            </div>
          </div>
        </section>

        {/* Sister Concern */}
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto bg-card p-8 rounded-lg shadow-card">
              <h2 className="text-3xl font-bold mb-6 text-foreground">Sister Concern</h2>
              <h3 className="text-2xl font-semibold mb-4 text-primary">PG Trading Company</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Established in 2022, PG Trading Company specializes in CAT, JCB, Forklift, and Crane product parts and services, expanding our capability to serve a wider range of industrial needs.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Address</h4>
                  <p className="text-sm text-muted-foreground">
                    NO.142/19, Vallalar Street, Mahavishnu Nagar, PATTANUR - 605 006
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Contact</h4>
                  <p className="text-sm text-muted-foreground mb-1">
                    Phone: 9894428729, 9500951959
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Email: pgtc5225@gmail.com
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

export default About;
