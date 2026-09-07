import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import lintec from "@/assets/lintec-linnhoff.jpg";
import eurotecBatching from "@/assets/eurotec-batching.jpg";

const LintecLinnhoff = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title="Lintec & Linnhoff Authorised Distributor | PG Tractors"
        description="PG Tractors is an authorised distributor for Lintec & Linnhoff concrete batching plants and asphalt solutions across Puducherry, Thanjavur and Chennai."
        canonical="https://pgtractors.lovable.app/dealers/lintec-linnhoff"
      />
      <Navbar />

      <main className="flex-1">
        <section className="bg-gradient-primary text-primary-foreground py-20">
          <div className="container mx-auto px-4">
            <p className="uppercase tracking-widest text-sm opacity-80 mb-3">PG Tractors — Authorised Distributor</p>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Lintec &amp; Linnhoff</h1>
            <p className="text-xl opacity-90 max-w-3xl">
              Concrete batching plants and asphalt solutions — Pave the Future.
            </p>
          </div>
        </section>

        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-4 text-foreground">About Lintec &amp; Linnhoff</h2>
                <div className="w-20 h-1 bg-secondary mb-6"></div>
                <p className="text-muted-foreground leading-relaxed">
                  Lintec &amp; Linnhoff is a global manufacturer and distributor of leading-edge solutions for the asphalt and concrete industries under the Lintec, Linnhoff and Eurotec brand names. Its products include asphalt mixing plants, concrete batching plants, pavement related technologies and machinery, and specialist concrete cooling solutions. The company's key technologies include Lintec's containerised asphalt and concrete batching plants built in 100% certified ISO sea containers and Linnhoff's screen drum technology.
                </p>
              </div>
              <img
                src={lintec}
                alt="Lintec & Linnhoff concrete batching plant installation"
                className="w-full h-auto rounded-lg border border-border shadow-card object-contain"
                loading="lazy"
              />
            </div>
          </div>
        </section>

        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Product Focus</h2>
              <div className="w-20 h-1 bg-secondary mx-auto"></div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
              <Card className="overflow-hidden">
                <img src={eurotecBatching} alt="Eurotec concrete batching plant supplied under the Lintec & Linnhoff group of brands" className="w-full h-auto object-contain bg-card" loading="lazy" />
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-2">Concrete Batching Plants</h3>
                  <p className="text-muted-foreground text-sm">
                    Concrete batching plants, including the Eurotec range, for ready mix and project applications.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 space-y-4">
                  <h3 className="text-xl font-bold text-foreground">Asphalt &amp; Road Construction Solutions</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground list-disc pl-5">
                    <li>Asphalt mixing plants</li>
                    <li>Pavement related technologies and machinery</li>
                    <li>Specialist concrete cooling solutions</li>
                    <li>Containerised asphalt and concrete batching plants built in 100% certified ISO sea containers</li>
                    <li>Linnhoff screen drum technology</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <Card>
                <CardContent className="p-6">
                  <p className="text-xs uppercase tracking-wide text-muted-foreground mb-2">Manufacturer</p>
                  <h3 className="font-bold text-foreground mb-2">Lintec &amp; Linnhoff Concrete Pte. Ltd.</h3>
                  <p className="text-sm text-muted-foreground">71 Tech Park Crescent, Singapore 638072</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <p className="text-xs uppercase tracking-wide text-muted-foreground mb-2">Licensed Manufacturer</p>
                  <h3 className="font-bold text-foreground mb-2">Gainwell Commosales Private Limited</h3>
                  <p className="text-sm text-muted-foreground">www.gainwellindia.com</p>
                </CardContent>
              </Card>
              <Card className="border-secondary">
                <CardContent className="p-6">
                  <p className="text-xs uppercase tracking-wide text-muted-foreground mb-2">Authorised Distributor</p>
                  <h3 className="font-bold text-foreground mb-2">PG Tractors</h3>
                  <p className="text-sm text-muted-foreground">Puducherry, Thanjavur, Chennai</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gradient-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Talk to PG Tractors</h2>
            <p className="opacity-90 mb-8 max-w-2xl mx-auto">
              Authorised distributor for Lintec &amp; Linnhoff across Puducherry, Thanjavur and Chennai.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button variant="secondary" size="lg" className="w-full sm:w-auto">Enquire Now</Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" size="lg" className="w-full sm:w-auto border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground/10">
                  Contact PG Tractors
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default LintecLinnhoff;
