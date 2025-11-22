import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import LocationCard from "@/components/LocationCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, Clock } from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    machineType: "",
    issueDescription: "",
    location: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Validate form
    if (!formData.name.trim() || !formData.phone.trim() || !formData.machineType.trim() || !formData.issueDescription.trim() || !formData.location.trim()) {
      toast({
        title: "Validation Error",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      setIsSubmitting(false);
      return;
    }

    // Create formatted WhatsApp message
    const message = `Request For Service Engineer

Name: ${formData.name}
Phone: ${formData.phone}
Email: ${formData.email || "Not provided"}
Machine Type: ${formData.machineType}
Issue: ${formData.issueDescription}
Location: ${formData.location}

Please send assistance.`;
    
    // Redirect to WhatsApp with encoded message
    window.location.href = "https://wa.me/919894428729?text=" + encodeURIComponent(message);
    
    // Show success message
    toast({
      title: "Request Sent!",
      description: "We'll contact you shortly. Opening WhatsApp...",
    });

    // Reset form
    setFormData({
      name: "",
      phone: "",
      email: "",
      machineType: "",
      issueDescription: "",
      location: ""
    });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-primary text-primary-foreground py-20">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl opacity-90 max-w-3xl">
              Get in touch with our team for fast, reliable earthmoving machinery services
            </p>
          </div>
        </section>

        {/* Contact Information and Form */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Information */}
              <div>
                <h2 className="text-3xl font-bold mb-6 text-foreground">Get In Touch</h2>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  Have a question or need immediate assistance? Our team is here to help. Reach out through any of the channels below, and we'll respond promptly.
                </p>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 p-3 bg-primary/10 rounded-lg">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Phone Numbers</h3>
                      <div className="space-y-1 text-sm text-muted-foreground">
                        <a href="tel:9894428729" className="block hover:text-primary transition-colors">9894428729</a>
                        <a href="tel:9976888919" className="block hover:text-primary transition-colors">9976888919</a>
                        <a href="tel:9500075955" className="block hover:text-primary transition-colors">9500075955</a>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 p-3 bg-primary/10 rounded-lg">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Email Addresses</h3>
                      <div className="space-y-1 text-sm text-muted-foreground">
                        <a href="mailto:pgtractors@gmail.com" className="block hover:text-primary transition-colors">
                          pgtractors@gmail.com
                        </a>
                        <a href="mailto:pgchennai5225@gmail.com" className="block hover:text-primary transition-colors">
                          pgchennai5225@gmail.com
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 p-3 bg-primary/10 rounded-lg">
                      <Clock className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Business Hours</h3>
                      <div className="space-y-1 text-sm text-muted-foreground">
                        <p>Monday - Saturday: 9:00 AM - 7:00 PM</p>
                        <p>Sunday: 10:00 AM - 4:00 PM</p>
                        <p className="text-primary font-medium">24/7 Emergency Support Available</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="bg-muted p-8 rounded-lg">
                <h2 className="text-2xl font-bold mb-6 text-foreground">Request Service Engineer</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name">Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      required
                      className="mt-2"
                    />
                  </div>

                  <div>
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Your contact number"
                      required
                      className="mt-2"
                    />
                  </div>

                  <div>
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your.email@example.com"
                      className="mt-2"
                    />
                  </div>

                  <div>
                    <Label htmlFor="machineType">Machine Type *</Label>
                    <Input
                      id="machineType"
                      name="machineType"
                      value={formData.machineType}
                      onChange={handleChange}
                      placeholder="e.g., CAT Loader, JCB Excavator, Forklift"
                      required
                      className="mt-2"
                    />
                  </div>

                  <div>
                    <Label htmlFor="issueDescription">Issue Description *</Label>
                    <Textarea
                      id="issueDescription"
                      name="issueDescription"
                      value={formData.issueDescription}
                      onChange={handleChange}
                      placeholder="Describe the issue or maintenance required..."
                      rows={4}
                      required
                      className="mt-2"
                    />
                  </div>

                  <div>
                    <Label htmlFor="location">Location *</Label>
                    <Input
                      id="location"
                      name="location"
                      value={formData.location}
                      onChange={handleChange}
                      placeholder="e.g., Chennai, Puducherry, Thanjavur"
                      required
                      className="mt-2"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Request via WhatsApp"}
                  </Button>

                  <p className="text-xs text-muted-foreground text-center">
                    * Required fields. Your request will be sent via WhatsApp for immediate response.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Location Cards */}
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Visit Our Stores</h2>
              <div className="w-20 h-1 bg-secondary mx-auto mb-6"></div>
              <p className="text-muted-foreground max-w-3xl mx-auto">
                Three convenient locations across Tamil Nadu
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

        {/* Map Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Find Us on Map</h2>
              <div className="w-20 h-1 bg-secondary mx-auto mb-6"></div>
              <p className="text-muted-foreground max-w-3xl mx-auto">
                Visit any of our three convenient locations across Tamil Nadu
              </p>
            </div>

            <div className="space-y-12">
              {/* Puducherry Location */}
              <div>
                <h3 className="text-xl font-semibold mb-4 text-foreground">Puducherry Store</h3>
                <div className="rounded-lg overflow-hidden border border-border mb-4">
                  <iframe
                    width="100%"
                    height="350"
                    style={{ border: 0 }}
                    loading="lazy"
                    allowFullScreen
                    referrerPolicy="no-referrer-when-downgrade"
                    src="https://www.google.com/maps?q=PG+TRACTORS+Pattanur+Puducherry&output=embed"
                    title="PG Tractors Puducherry Location"
                  ></iframe>
                </div>
                <Button
                  variant="outline"
                  className="w-full"
                  onClick={() => window.open('https://www.google.com/maps?q=PG+TRACTORS+Pattanur+Puducherry', '_blank')}
                >
                  Get Directions to Puducherry
                </Button>
              </div>

              {/* Chennai Location */}
              <div>
                <h3 className="text-xl font-semibold mb-4 text-foreground">Chennai Store</h3>
                <div className="rounded-lg overflow-hidden border border-border mb-4">
                  <iframe
                    width="100%"
                    height="350"
                    style={{ border: 0 }}
                    loading="lazy"
                    allowFullScreen
                    referrerPolicy="no-referrer-when-downgrade"
                    src="https://www.google.com/maps?q=PG+TRACTORS+Velappanchavadi+Chennai&output=embed"
                    title="PG Tractors Chennai Location"
                  ></iframe>
                </div>
                <Button
                  variant="outline"
                  className="w-full"
                  onClick={() => window.open('https://www.google.com/maps?q=PG+TRACTORS+Velappanchavadi+Chennai', '_blank')}
                >
                  Get Directions to Chennai
                </Button>
              </div>

              {/* Thanjavur Location */}
              <div>
                <h3 className="text-xl font-semibold mb-4 text-foreground">Thanjavur Store</h3>
                <div className="rounded-lg overflow-hidden border border-border mb-4">
                  <iframe
                    width="100%"
                    height="350"
                    style={{ border: 0 }}
                    loading="lazy"
                    allowFullScreen
                    referrerPolicy="no-referrer-when-downgrade"
                    src="https://www.google.com/maps?q=PG+TRACTORS+GandhiNagar+Thanjavur&output=embed"
                    title="PG Tractors Thanjavur Location"
                  ></iframe>
                </div>
                <Button
                  variant="outline"
                  className="w-full"
                  onClick={() => window.open('https://www.google.com/maps?q=PG+TRACTORS+GandhiNagar+Thanjavur', '_blank')}
                >
                  Get Directions to Thanjavur
                </Button>
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

export default Contact;
