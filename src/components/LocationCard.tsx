import { MapPin, Phone, Mail } from "lucide-react";
import { Card, CardContent } from "./ui/card";

interface LocationCardProps {
  city: string;
  address: string;
  phone?: string;
  email?: string;
}

const LocationCard = ({ city, address, phone, email }: LocationCardProps) => {
  return (
    <Card className="hover:shadow-card transition-shadow">
      <CardContent className="p-6">
        <div className="flex items-start space-x-4">
          <div className="flex-shrink-0 p-3 bg-primary/10 rounded-lg">
            <MapPin className="h-6 w-6 text-primary" />
          </div>
          <div className="flex-1">
            <h3 className="font-bold text-lg mb-2 text-foreground">{city}</h3>
            <p className="text-sm text-muted-foreground mb-4">{address}</p>
            
            <div className="space-y-2">
              {phone && (
                <a 
                  href={`tel:${phone}`}
                  className="flex items-center space-x-2 text-sm text-primary hover:text-primary-light transition-colors"
                >
                  <Phone className="h-4 w-4" />
                  <span>{phone}</span>
                </a>
              )}
              {email && (
                <a 
                  href={`mailto:${email}`}
                  className="flex items-center space-x-2 text-sm text-primary hover:text-primary-light transition-colors"
                >
                  <Mail className="h-4 w-4" />
                  <span>{email}</span>
                </a>
              )}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default LocationCard;
