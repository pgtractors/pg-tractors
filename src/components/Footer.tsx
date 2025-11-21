import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="font-bold text-xl mb-4 text-secondary">PG Tractors</h3>
            <p className="text-sm text-background/80 mb-4">
              20+ years of excellence in earthmoving machinery service, troubleshooting, and maintenance.
            </p>
            <div className="flex flex-col space-y-2 text-sm">
              <a href="tel:9894428729" className="flex items-center space-x-2 hover:text-secondary transition-colors">
                <Phone className="h-4 w-4" />
                <span>9894428729</span>
              </a>
              <a href="mailto:pgtractors@gmail.com" className="flex items-center space-x-2 hover:text-secondary transition-colors">
                <Mail className="h-4 w-4" />
                <span>pgtractors@gmail.com</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-secondary">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="hover:text-secondary transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-secondary transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-secondary transition-colors">Services</Link>
              </li>
              <li>
                <Link to="/dealerships" className="hover:text-secondary transition-colors">Dealerships</Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4 text-secondary">Our Services</h4>
            <ul className="space-y-2 text-sm text-background/80">
              <li>Machinery Maintenance</li>
              <li>On-Site Troubleshooting</li>
              <li>Parts Supply</li>
              <li>Emergency Support</li>
            </ul>
          </div>

          {/* Locations */}
          <div>
            <h4 className="font-semibold mb-4 text-secondary">Our Locations</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 mt-1 flex-shrink-0 text-secondary" />
                <span className="text-background/80">Puducherry, Thanjavur, Chennai</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 mt-8 pt-8 text-center text-sm text-background/60">
          <p>&copy; {new Date().getFullYear()} PG Tractors. All rights reserved.</p>
          <p className="mt-2">Sister Concern: PG Trading Company</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
