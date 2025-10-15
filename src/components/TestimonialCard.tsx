import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

interface TestimonialCardProps {
  name: string;
  role: string;
  content: string;
  rating: number;
}

const TestimonialCard = ({ name, role, content, rating }: TestimonialCardProps) => {
  return (
    <Card className="bg-gradient-to-br from-card to-muted/30 border-border hover:shadow-md transition-shadow">
      <CardContent className="p-6 space-y-4">
        <div className="flex items-center space-x-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={`h-4 w-4 ${
                i < rating ? "fill-accent text-accent" : "text-muted"
              }`}
            />
          ))}
        </div>
        <p className="text-muted-foreground leading-relaxed italic">"{content}"</p>
        <div>
          <p className="font-semibold text-foreground">{name}</p>
          <p className="text-sm text-muted-foreground">{role}</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default TestimonialCard;
