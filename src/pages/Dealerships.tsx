import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import DealerCard from "@/components/DealerCard";

const Dealerships = () => {
  const dealers = [
    {
      name: "PARKER",
      products: "Hydraulic pumps, hoses, and fluid connectors"
    },
    {
      name: "DIAMOND GET",
      products: "Specialized earthmoving machinery tools"
    },
    {
      name: "EMEROLD",
      products: "Pneumatic and solid tyres for heavy equipment"
    },
    {
      name: "NPL",
      products: "Nandan Petrochemical Ltd. - Industrial lubricants"
    },
    {
      name: "SIMPSON",
      products: "Engine spare parts and components"
    },
    {
      name: "WIPRO",
      products: "Seal kits, hydraulic tubes, and cylinders"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-primary text-primary-foreground py-20">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Authorized Dealerships</h1>
            <p className="text-xl opacity-90 max-w-3xl">
              Partnered with industry-leading brands to provide genuine parts and superior quality products
            </p>
          </div>
        </section>

        {/* Partners Introduction */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">Our Trusted Partners</h2>
              <div className="w-20 h-1 bg-secondary mx-auto mb-6"></div>
              <p className="text-muted-foreground leading-relaxed">
                PG Tractors has established strong partnerships with renowned manufacturers and distributors in the earthmoving machinery industry. These collaborations ensure that we provide only genuine, high-quality parts and products to our customers, backed by manufacturer warranties and industry-leading standards.
              </p>
            </div>

            {/* Dealer Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
              {dealers.map((dealer) => (
                <DealerCard
                  key={dealer.name}
                  name={dealer.name}
                  products={dealer.products}
                />
              ))}
            </div>

            {/* Detailed Information */}
            <div className="space-y-8">
              <div className="bg-muted p-8 rounded-lg">
                <h3 className="text-2xl font-bold mb-4 text-foreground flex items-center">
                  <span className="bg-primary/10 text-primary rounded-lg px-3 py-1 mr-3">PARKER</span>
                  Hydraulic Solutions
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Parker Hannifin is a global leader in motion and control technologies. Through our partnership, we provide a comprehensive range of hydraulic pumps, high-pressure hoses, and precision fluid connectors essential for heavy machinery operation.
                </p>
              </div>

              <div className="bg-muted p-8 rounded-lg">
                <h3 className="text-2xl font-bold mb-4 text-foreground flex items-center">
                  <span className="bg-primary/10 text-primary rounded-lg px-3 py-1 mr-3">DIAMOND GET</span>
                  Specialized Tools
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Diamond Get specializes in professional-grade tools designed specifically for earthmoving machinery maintenance and repair. From precision instruments to heavy-duty equipment, we stock the complete range.
                </p>
              </div>

              <div className="bg-muted p-8 rounded-lg">
                <h3 className="text-2xl font-bold mb-4 text-foreground flex items-center">
                  <span className="bg-primary/10 text-primary rounded-lg px-3 py-1 mr-3">EMEROLD</span>
                  Premium Tyres
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Emerold provides high-quality pneumatic and solid tyres engineered for extreme conditions and heavy loads. Their products offer superior durability, traction, and performance for all types of earthmoving equipment.
                </p>
              </div>

              <div className="bg-muted p-8 rounded-lg">
                <h3 className="text-2xl font-bold mb-4 text-foreground flex items-center">
                  <span className="bg-primary/10 text-primary rounded-lg px-3 py-1 mr-3">NPL</span>
                  Industrial Lubricants
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Nandan Petrochemical Ltd. (NPL) manufactures premium industrial lubricants formulated for heavy-duty applications. Their products ensure optimal performance, reduce wear, and extend the life of your machinery.
                </p>
              </div>

              <div className="bg-muted p-8 rounded-lg">
                <h3 className="text-2xl font-bold mb-4 text-foreground flex items-center">
                  <span className="bg-primary/10 text-primary rounded-lg px-3 py-1 mr-3">SIMPSON</span>
                  Engine Expertise
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Simpson specializes in engine spare parts and components for earthmoving equipment. We maintain a comprehensive inventory of genuine Simpson parts to ensure your engines run at peak efficiency.
                </p>
              </div>

              <div className="bg-muted p-8 rounded-lg">
                <h3 className="text-2xl font-bold mb-4 text-foreground flex items-center">
                  <span className="bg-primary/10 text-primary rounded-lg px-3 py-1 mr-3">WIPRO</span>
                  Hydraulic Components
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Wipro Infrastructure Engineering is a leading manufacturer of hydraulic cylinders, seal kits, and precision-engineered tubes. Their products meet international quality standards and are trusted across industries.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center text-foreground">Why Our Partnerships Matter</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-card p-6 rounded-lg">
                  <h3 className="font-semibold text-lg mb-3 text-foreground">Genuine Quality</h3>
                  <p className="text-sm text-muted-foreground">
                    All products sourced through authorized channels with manufacturer authenticity guarantees
                  </p>
                </div>
                
                <div className="bg-card p-6 rounded-lg">
                  <h3 className="font-semibold text-lg mb-3 text-foreground">Competitive Pricing</h3>
                  <p className="text-sm text-muted-foreground">
                    Direct partnerships enable us to offer competitive rates without compromising on quality
                  </p>
                </div>
                
                <div className="bg-card p-6 rounded-lg">
                  <h3 className="font-semibold text-lg mb-3 text-foreground">Quick Availability</h3>
                  <p className="text-sm text-muted-foreground">
                    Strategic stock management ensures parts are available when you need them
                  </p>
                </div>
                
                <div className="bg-card p-6 rounded-lg">
                  <h3 className="font-semibold text-lg mb-3 text-foreground">Technical Support</h3>
                  <p className="text-sm text-muted-foreground">
                    Access to manufacturer technical resources and expert guidance for optimal results
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

export default Dealerships;
