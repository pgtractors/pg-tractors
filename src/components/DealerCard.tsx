import { Card, CardContent } from "./ui/card";

interface DealerCardProps {
  name: string;
  products: string;
}

const DealerCard = ({ name, products }: DealerCardProps) => {
  return (
    <Card className="hover:shadow-strong transition-all duration-300 hover:-translate-y-1">
      <CardContent className="p-6">
        <div className="flex items-center justify-center h-20 mb-4 bg-muted rounded-lg">
          <h3 className="text-2xl font-bold text-primary">{name}</h3>
        </div>
        <p className="text-sm text-center text-muted-foreground">{products}</p>
      </CardContent>
    </Card>
  );
};

export default DealerCard;
