import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";
import Link from "next/link";

interface ProductCardProps {
  id: string;
  title: string;
  author: string;
  price: number;
  image: string;
  rating: number;
  category: string;
  featured?: boolean;
  amazonUrl?: string;
  etsyUrl?: string;
  shopifyUrl?: string;
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
  amazonUrl,
  etsyUrl,
  shopifyUrl,
}: ProductCardProps) => {
  return (
    <Card className="group overflow-hidden hover:shadow-lg transition-all duration-300 animate-scale-in bg-gradient-to-b from-card to-card/50">
      <Link href={`/product/${id}`}>
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
        <Link href={`/product/${id}`}>
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

      <CardFooter className="p-4 pt-0 flex flex-col space-y-2">
        <span className="font-bold text-xl text-foreground">${price}</span>
        <div className="flex flex-col space-y-1 w-full">
          {amazonUrl && (
            <Button
              size="sm"
              className="bg-orange-600 hover:bg-orange-700 text-white"
              onClick={() => window.open(amazonUrl, '_blank')}
            >
              Buy on Amazon
            </Button>
          )}
          {etsyUrl && (
            <Button
              size="sm"
              className="bg-orange-400 hover:bg-orange-500 text-white"
              onClick={() => window.open(etsyUrl, '_blank')}
            >
              Buy on Etsy
            </Button>
          )}
          {shopifyUrl && (
            <Button
              size="sm"
              className="bg-green-600 hover:bg-green-700 text-white"
              onClick={() => window.open(shopifyUrl, '_blank')}
            >
              Buy on Shopify
            </Button>
          )}
        </div>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
