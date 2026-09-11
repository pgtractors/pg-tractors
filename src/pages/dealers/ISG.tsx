import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import isgRange from "@/assets/isg-range.jpg";
import isgGrx from "@/assets/isg-grx1700-hq.png.asset.json";
import isgGrb from "@/assets/isg-grb250-300-hq.png.asset.json";
import isgTools from "@/assets/isg-tools-hq.png.asset.json";
import isgAugers from "@/assets/isg-augers-hq.png.asset.json";
import isgAugerSpecs from "@/assets/isg-auger-specs-hq.png.asset.json";
import eurotecConcrete from "@/assets/isg-eurotec-concrete-hq.png.asset.json";

const categories = [
  "Rock Breakers",
  "Attachments",
  "Concrete Batching Plants",
  "Asphalt Plants",
  "Augers",
];

const premiumRange = ["Auger", "Breaker", "Drum Cutter", "Slurry Champ", "Sweeper", "Mulcher"];

const grxFeatures = [
  "Tubes with swivels fully protected.",
  "Operating pressure adjustment. Anti-dust for Tunnel & Underwater work setup.",
  "Automatic hydraulic greasing device.",
  "Even more power / lesser vibrations & maintenance for all types of installations & versatility.",
];

const grbFeatures = [
  "More power / less vibrations and maintenance.",
  "Long lasting nitrogen charge.",
  "Protected tubes.",
  "Silenced body.",
  "Monobloc body without tie rods.",
  "Double retainer pin.",
  "Only two moving parts.",
  "For all types of installations.",
  "Visibility and versatility.",
];

const breakerSpecs: [string, string, string, string][] = [
  ["Carrier weight", "t", "3-6.5", "4.5-8.5"],
  ["Weight", "kg", "240", "280"],
  ["Body height (A)", "mm", "869", "904"],
  ["Tool height (B)", "mm", "300", "295"],
  ["Tool diameter", "mm", "65", "74"],
  ["Required oil supply", "l/min", "30-60", "50-70"],
  ["Oil hammer pressure", "bar", "140", "160"],
  ["Blows per minute", "/min", "850-1800", "600-1500"],
  ["Energy per blow", "J", "950", "1200"],
  ["Max. back pressure", "bar", "30", "30"],
  ["Inner diam. in hose", "inch", '1/2"', '3/4"'],
  ["Inner diam. out hose", "inch", '1/2"', '3/4"'],
];

const augerSpecs: [string, string, string, string][] = [
  ["Carrier Weight", "Tons", "3-5T", "6-8T"],
  ["Diameter", "mm", "100 - 900", "150 - 1200"],
  ["Torque Range", "Nm", "1,574 - 4,721", "2,717 - 8,152"],
  ["Oil Pressure Range", "Bar", "80 - 240", "80 - 240"],
  ["Oil Flow Range", "LPM", "50 - 95", "70 - 150"],
  ["Speed Range", "RPM", "40 - 77", "33 - 70"],
  ["Unit Height", "mm", "665", "789"],
  ["Unit Diameter", "mm", "224", "269"],
  ["Unit Weight", "Kg", "75", "116"],
  ["Output Shaft", "mm", "65 Round", "75 Square"],
  ["Available Flights", "mm dia/length", "300/1200; 500/1200", "500/1500; 600/1500"],
  ["Shock Lock", "", "Yes", "Yes"],
];

const augerFeatures = [
  { title: "Telescopic Extensions (Adaptability)", points: ["Improves efficiency for deep hole drilling", "Innovative design significantly reduces swap-over time", "Easy adjustment to 3 heights", "Available for 8000Max Auger"] },
  { title: "Constant Spiral Cut (Improved Productivity)", points: ["Fresh cut every revolution", "Tooth holder angled to direct spoil onto auger flights efficiently", "Spoil broken up thoroughly", "Avoids clogging"] },
  { title: "Robust Construction (Durability)", points: ["Manufactured from high grade materials and precision engineered components", "Designed to withstand extreme working conditions", "High grade synthetic gear oil used for extra protection & long service life"] },
  { title: "Planetary Gearbox (Power)", points: ["Torque amplified", "High efficiency", "Extreme durability"] },
  { title: "Pilot Extensions (Accuracy)", points: ["Allows an auger to hold its axis accurately in tough ground conditions", "Improves performance on sloping ground", "Simple fitting"] },
  { title: "Pilots (Toughness & Accuracy)", points: ["Tough forged construction", "Easy fitting"] },
  { title: "Shallow Pitch Flights (Efficiency)", points: ["Piling industry technology", "Hold earth on flights on removal", "Most efficient ratio between quantity of earth removed and speed of operation"] },
];

const tools = [
  { name: "Blunt Tool", use: "Suitable for reinforced concrete and very compact rocks." },
  { name: "Pyramid Tool", use: "Suitable for reinforced concrete and very compact rocks." },
  { name: "Chisel Tool", use: "Suitable for medium-hard and layered rocks." },
  { name: "Moil Point", use: "Suitable for concrete, medium hard and not layered rocks." },
  { name: "Pile Driver", use: "Suitable for planting wooden or concrete poles." },
  { name: "Wood Cutter Tool", use: "Suitable for cutting all types of wood." },
  { name: "Asphalt Cutter", use: "Suitable for cutting asphalt." },
];

const applications = ["Mining & Quarrying", "Demolition & Renovation", "Metallurgic Industry", "Construction", "Recycling"];

const SpecTable = ({ rows, cols }: { rows: [string, string, string, string][]; cols: [string, string] }) => (
  <div className="overflow-x-auto rounded-lg border border-border">
    <table className="w-full min-w-[520px] text-sm">
      <thead className="bg-primary text-primary-foreground">
        <tr>
          <th className="text-left px-4 py-3 font-semibold">Model</th>
          <th className="text-left px-4 py-3 font-semibold">Unit</th>
          <th className="text-left px-4 py-3 font-semibold">{cols[0]}</th>
          <th className="text-left px-4 py-3 font-semibold">{cols[1]}</th>
        </tr>
      </thead>
      <tbody>
        {rows.map((r, i) => (
          <tr key={r[0]} className={i % 2 ? "bg-muted/60" : "bg-card"}>
            <td className="px-4 py-2.5 text-foreground font-medium">{r[0]}</td>
            <td className="px-4 py-2.5 text-muted-foreground">{r[1]}</td>
            <td className="px-4 py-2.5 text-foreground">{r[2]}</td>
            <td className="px-4 py-2.5 text-foreground">{r[3]}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

const CTA = () => (
  <div className="flex flex-col sm:flex-row gap-4 justify-center">
    <Link to="/contact">
      <Button variant="secondary" size="lg" className="w-full sm:w-auto">Enquire Now</Button>
    </Link>
    <Link to="/contact">
      <Button variant="outline" size="lg" className="w-full sm:w-auto border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground/10">
        Request Service
      </Button>
    </Link>
  </div>
);

const ISG = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title="ISG InfraServeGlobal Dealer | PG Tractors Rock Breakers & Augers"
        description="PG Tractors is an ISG (InfraServeGlobal) dealer for GRX1700 and GRB250/300 rock breakers, augers, attachments and Eurotec concrete batching plants in Tamil Nadu."
        canonical="https://pgtractors.lovable.app/dealers/isg"
      />
      <Navbar />

      <main className="flex-1">
        {/* Hero */}
        <section className="bg-gradient-primary text-primary-foreground py-20">
          <div className="container mx-auto px-4">
            <p className="uppercase tracking-widest text-sm opacity-80 mb-3">PG Tractors — ISG Dealer</p>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">ISG – InfraServeGlobal</h1>
            <p className="text-xl opacity-90 max-w-3xl">
              Innovative solutions. Tougher performance. Rock breakers, attachments, augers, concrete batching plants and asphalt plants.
            </p>
            <div className="flex flex-wrap gap-3 mt-8">
              {categories.map((c) => (
                <span key={c} className="bg-primary-foreground/10 border border-primary-foreground/20 rounded-full px-4 py-2 text-sm">
                  {c}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Brand intro */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-4 text-foreground">Our Premium Range</h2>
                <div className="w-20 h-1 bg-secondary mb-6"></div>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  PG Tractors is a dealer for ISG (InfraServeGlobal), offering sales, service and spares across Puducherry, Thanjavur and Chennai.
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-6">
                  {premiumRange.map((p) => (
                    <div key={p} className="bg-muted rounded-lg px-4 py-3 text-sm font-medium text-foreground text-center">
                      {p}
                    </div>
                  ))}
                </div>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>Built tough for long life</li>
                  <li>Advanced technology</li>
                  <li>Maximum productivity, reliable support</li>
                  <li>Cost effective solutions</li>
                </ul>
              </div>
              <img
                src={isgRange}
                alt="PG Tractors ISG InfraServeGlobal premium range of augers, breakers, drum cutters, slurry champ, sweepers and mulchers"
                className="w-full h-auto rounded-lg border border-border shadow-card object-contain"
                loading="lazy"
              />
            </div>
          </div>
        </section>

        {/* Rock breakers */}
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">ISG Rock Breakers</h2>
              <div className="w-20 h-1 bg-secondary mx-auto"></div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
              <Card className="overflow-hidden hover:shadow-strong transition-all duration-300">
                <img src={isgGrx.url} alt="ISG GRX1700 heavy duty hydraulic rock breaker" className="w-full h-auto object-contain bg-card" loading="lazy" />
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold text-foreground mb-1">GRX1700</h3>
                  <p className="text-secondary font-medium mb-4">Heavy Duty Rock Breaker</p>
                  <p className="text-muted-foreground mb-4">Hammer hydraulic breakers for excavators from 8 to 200 ton.</p>
                  <ul className="space-y-2 text-sm text-muted-foreground list-disc pl-5">
                    {grxFeatures.map((f) => <li key={f}>{f}</li>)}
                  </ul>
                </CardContent>
              </Card>

              <Card className="overflow-hidden hover:shadow-strong transition-all duration-300">
                <img src={isgGrb.url} alt="ISG GRB250 and GRB300 light duty hydraulic rock breakers" className="w-full h-auto object-contain bg-card" loading="lazy" />
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold text-foreground mb-1">GRB250 / GRB300</h3>
                  <p className="text-secondary font-medium mb-4">Light Duty Rock Breaker</p>
                  <p className="text-muted-foreground mb-4">Hydraulic breakers without tie rods for skid steer loader &amp; backhoe loader.</p>
                  <ul className="space-y-2 text-sm text-muted-foreground list-disc pl-5">
                    {grbFeatures.map((f) => <li key={f}>{f}</li>)}
                  </ul>
                </CardContent>
              </Card>
            </div>

            <h3 className="text-xl font-bold mb-4 text-foreground">GRB250 / GRB300 Technical Specifications</h3>
            <SpecTable rows={breakerSpecs} cols={["GRB250", "GRB300"]} />
            <p className="text-xs text-muted-foreground mt-3">
              All illustrations &amp; specifications mentioned are indicative and subject to change at the manufacturer's discretion.
            </p>
          </div>
        </section>

        {/* Augers */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">ISG Augers</h2>
              <div className="w-20 h-1 bg-secondary mx-auto mb-6"></div>
              <p className="text-muted-foreground max-w-2xl mx-auto">A high-efficiency drilling solution — innovation &amp; special features</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12 items-start">
              <img src={isgAugers.url} alt="ISG augers innovation and special features brochure page" className="w-full h-auto rounded-lg border border-border object-contain" loading="lazy" />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {augerFeatures.map((f) => (
                  <Card key={f.title}>
                    <CardContent className="p-5">
                      <h3 className="font-semibold text-foreground mb-2 text-sm">{f.title}</h3>
                      <ul className="space-y-1 text-xs text-muted-foreground list-disc pl-4">
                        {f.points.map((p) => <li key={p}>{p}</li>)}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <h3 className="text-xl font-bold mb-4 text-foreground">Auger Technical Specifications</h3>
            <SpecTable rows={augerSpecs} cols={["GA4500Max", "GA8000Max"]} />
            <p className="text-sm text-muted-foreground mt-4">
              Available hitches: Single Pin Hitch, Double Pin Hitch, Double Pin Cradle Hitch.
            </p>
            <div className="mt-8">
              <img src={isgAugerSpecs.url} alt="ISG auger specification and drilling depth chart from the brochure" className="w-full h-auto rounded-lg border border-border object-contain" loading="lazy" />
            </div>
          </div>
        </section>

        {/* Tools */}
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">ISG Tools &amp; Attachments</h2>
              <div className="w-20 h-1 bg-secondary mx-auto"></div>
            </div>

            <div className="flex flex-wrap justify-center gap-3 mb-10">
              {applications.map((a) => (
                <span key={a} className="bg-card border border-border rounded-full px-4 py-2 text-sm text-foreground">{a}</span>
              ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
              {tools.map((t) => (
                <Card key={t.name} className="hover:shadow-strong transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold text-foreground mb-2">{t.name}</h3>
                    <p className="text-sm text-muted-foreground">{t.use}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <img src={isgTools.url} alt="ISG breaker tool range including blunt tool, pyramid tool, chisel, moil point, pile driver, wood cutter and asphalt cutter" className="w-full h-auto rounded-lg border border-border object-contain" loading="lazy" />
          </div>
        </section>

        {/* Eurotec */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">EUROTEC by ISG</h2>
              <div className="w-20 h-1 bg-secondary mx-auto mb-6"></div>
              <p className="text-muted-foreground max-w-2xl mx-auto">Concrete batching plants and asphalt solutions</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
              <img src={eurotecConcrete.url} alt="Eurotec by InfraServeGlobal concrete batching plant" className="w-full h-auto rounded-lg border border-border object-contain" loading="lazy" />
              <img src={eurotecConcrete.url} alt="Eurotec MZ and SWIFTEC concrete batching plant brochure page" className="w-full h-auto rounded-lg border border-border object-contain" loading="lazy" />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold text-foreground mb-1">MZ Series</h3>
                  <p className="text-secondary font-medium mb-4">Concrete Batching Plant</p>
                  <p className="text-muted-foreground text-sm mb-6">
                    The highly automated Eurotec MZ series is the solution for big concrete needs, perfect for projects requiring thousands of cubic metres of concrete a day. The twin-shaft mixers, controlled by computerised process control systems running on Windows OS, mix concrete in three-dimensional movements at low revolutions-per-minute.
                  </p>
                  <div className="overflow-x-auto rounded-lg border border-border">
                    <table className="w-full min-w-[480px] text-sm">
                      <thead className="bg-primary text-primary-foreground">
                        <tr>
                          <th className="text-left px-4 py-3">Description</th>
                          <th className="text-left px-4 py-3">MZ120</th>
                          <th className="text-left px-4 py-3">MZ160</th>
                          <th className="text-left px-4 py-3">MZ200</th>
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          ["Rated Output Capacity", "120 m³/hr", "160 m³/hr", "200 m³/hr"],
                          ["Type of Mixer", "Twin-Shaft", "Twin-Shaft", "Twin-Shaft"],
                          ["Output per batch", "3000 litres", "4000 litres", "4500 litres"],
                          ["Aggregate batching sequence", "Cumulative", "Cumulative", "Cumulative"],
                          ["Cement weigher", "2000 kg", "2750 kg", "3000 kg"],
                          ["Water weigher", "750 kg", "1000 kg", "1200 kg"],
                          ["Additive weigher", "2 x 20 litres", "2 x 20 litres", "2 x 20 litres"],
                          ["Connection power", "184 kW", "194 kW", "235 kW"],
                          ["Generator set capacity", "350 kVA", "350 kVA", "500 kVA"],
                        ].map((r, i) => (
                          <tr key={r[0]} className={i % 2 ? "bg-muted/60" : "bg-card"}>
                            {r.map((c, j) => (
                              <td key={j} className={`px-4 py-2.5 ${j === 0 ? "font-medium text-foreground" : "text-muted-foreground"}`}>{c}</td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold text-foreground mb-1">SWIFTEC Series</h3>
                  <p className="text-secondary font-medium mb-4">Concrete Batching Plant</p>
                  <p className="text-muted-foreground text-sm mb-6">
                    The Eurotec SWIFTEC concrete batching plants are designed with both modularity and affordability in mind. The modular design allows for easy transportation, fast installation and dismantling upon completion of a project. They require minimal foundations and no or minimal loading ramp, and come with 2-sided aggregate bins.
                  </p>
                  <div className="overflow-x-auto rounded-lg border border-border">
                    <table className="w-full min-w-[480px] text-sm">
                      <thead className="bg-primary text-primary-foreground">
                        <tr>
                          <th className="text-left px-4 py-3">Description</th>
                          <th className="text-left px-4 py-3">SWT60</th>
                          <th className="text-left px-4 py-3">SWT75</th>
                          <th className="text-left px-4 py-3">SWT90</th>
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          ["Rated Output Capacity", "60 m³/hr", "75 m³/hr", "90 m³/hr"],
                          ["Mixer Type", "Twin Shaft", "Twin Shaft", "Twin Shaft"],
                          ["Output per Batch", "1.0 cu.m", "1.5 cu.m", "2.0 cu.m"],
                          ["Nos. of Aggregate Bins", "4", "4", "4"],
                          ["Aggregate Batching Sequence", "Cumulative", "Cumulative", "Cumulative"],
                          ["Cement Weigher", "750 litres", "850 litres", "1000 litres"],
                          ["Water Weigher", "375 litres", "500 litres", "650 litres"],
                          ["Additive Weigher", "2 x 12 litres", "2 x 12 litres", "2 x 12 litres"],
                          ["Connection Power", "90 kW", "120 kW", "150 kW"],
                          ["Generator Set Capacity", "150 kVA", "200 kVA", "250 kVA"],
                        ].map((r, i) => (
                          <tr key={r[0]} className={i % 2 ? "bg-muted/60" : "bg-card"}>
                            {r.map((c, j) => (
                              <td key={j} className={`px-4 py-2.5 ${j === 0 ? "font-medium text-foreground" : "text-muted-foreground"}`}>{c}</td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-gradient-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Interested in ISG Equipment?</h2>
            <p className="opacity-90 mb-8 max-w-2xl mx-auto">
              PG Tractors — ISG Dealer for Puducherry, Thanjavur and Chennai. Sales, service and spares.
            </p>
            <CTA />
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default ISG;
