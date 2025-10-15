import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";
import { Link } from "react-router-dom";

interface ProductCardProps {
  id: string;
  title: string;
  author: string;
  price: number;
  image: string;
  rating: number;
  category: string;
  featured?: boolean;
}

const ProductCard = ({
  id,
  title,
  author,
  price,
  image,
  rating,
  category,
  featured = false,
}: ProductCardProps) => {
  return (
    <Card className="group overflow-hidden hover:shadow-lg transition-all duration-300 animate-scale-in bg-gradient-to-b from-card to-card/50">
      <Link to={`/product/${id}`}>
        <div className="relative aspect-[3/4] overflow-hidden bg-muted">
          {featured && (
            <Badge className="absolute top-3 left-3 z-10 bg-accent text-accent-foreground">
              Bestseller
            </Badge>
          )}
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      </Link>

      <CardContent className="p-4 space-y-2">
        <Badge variant="secondary" className="text-xs">
          {category}
        </Badge>
        <Link to={`/product/${id}`}>
          <h3 className="font-heading font-semibold text-lg text-foreground group-hover:text-primary transition-colors line-clamp-2">
            {title}
          </h3>
        </Link>
        <p className="text-sm text-muted-foreground">{author}</p>
        <div className="flex items-center space-x-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={`h-4 w-4 ${
                i < rating ? "fill-accent text-accent" : "text-muted"
              }`}
            />
          ))}
          <span className="text-xs text-muted-foreground ml-2">({rating}.0)</span>
        </div>
      </CardContent>

      <CardFooter className="p-4 pt-0 flex items-center justify-between">
        <span className="font-bold text-xl text-foreground">${price}</span>
        <Button size="sm" className="bg-primary hover:bg-primary-glow">
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
