import { LucideIcon } from "lucide-react";
import { Card, CardContent } from "./ui/card";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const ServiceCard = ({ icon: Icon, title, description }: ServiceCardProps) => {
  return (
    <Card className="group hover:shadow-strong transition-all duration-300 hover:-translate-y-1 border-border bg-card">
      <CardContent className="p-6">
        <div className="mb-4 inline-flex p-3 bg-secondary/10 rounded-lg group-hover:bg-secondary/20 transition-colors">
          <Icon className="h-8 w-8 text-secondary" />
        </div>
        <h3 className="text-xl font-bold mb-3 text-foreground">{title}</h3>
        <p className="text-muted-foreground leading-relaxed">{description}</p>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;
