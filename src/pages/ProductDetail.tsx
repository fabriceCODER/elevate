import { useParams } from "next/navigation";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, Check } from "lucide-react";
import { products } from "@/data/products";

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Product Not Found</h1>
            <Link href="/shop">
              <Button>Back to Shop</Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 3);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Product Details */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16 animate-fade-in">
            {/* Product Image */}
            <div className="relative aspect-[3/4] overflow-hidden rounded-lg bg-muted shadow-lg">
              {product.featured && (
                <Badge className="absolute top-4 left-4 z-10 bg-accent text-accent-foreground">
                  Bestseller
                </Badge>
              )}
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              <div>
                <Badge variant="secondary" className="mb-3">
                  {product.category}
                </Badge>
                <h1 className="font-heading text-4xl font-bold text-foreground mb-2">
                  {product.title}
                </h1>
                <p className="text-lg text-muted-foreground mb-4">by {product.author}</p>

                <div className="flex items-center space-x-2 mb-6">
                  <div className="flex items-center space-x-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`h-5 w-5 ${
                          i < product.rating ? "fill-accent text-accent" : "text-muted"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-muted-foreground">({product.rating}.0)</span>
                </div>
              </div>

              <div>
                <span className="text-4xl font-bold text-foreground">${product.price}</span>
              </div>

              <div>
                <h2 className="font-semibold text-xl text-foreground mb-3">Description</h2>
                <p className="text-muted-foreground leading-relaxed">{product.description}</p>
              </div>

              <div>
                <h2 className="font-semibold text-xl text-foreground mb-3">What You'll Learn</h2>
                <ul className="space-y-2">
                  {product.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col gap-4 pt-4">
                {product.amazonUrl && (
                  <Button
                    size="lg"
                    className="bg-orange-600 hover:bg-orange-700 text-white font-semibold shadow-lg hover:shadow-xl transition-all"
                    onClick={() => window.open(product.amazonUrl, '_blank')}
                  >
                    Buy on Amazon - ${product.price}
                  </Button>
                )}
                {product.etsyUrl && (
                  <Button
                    size="lg"
                    className="bg-orange-400 hover:bg-orange-500 text-white font-semibold shadow-lg hover:shadow-xl transition-all"
                    onClick={() => window.open(product.etsyUrl, '_blank')}
                  >
                    Buy on Etsy - ${product.price}
                  </Button>
                )}
                {product.shopifyUrl && (
                  <Button
                    size="lg"
                    className="bg-green-600 hover:bg-green-700 text-white font-semibold shadow-lg hover:shadow-xl transition-all"
                    onClick={() => window.open(product.shopifyUrl, '_blank')}
                  >
                    Buy on Shopify - ${product.price}
                  </Button>
                )}
                <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/5">
                  Preview
                </Button>
              </div>
            </div>
          </div>

          {/* Related Products */}
          {relatedProducts.length > 0 && (
            <div>
              <h2 className="font-heading text-3xl font-bold text-foreground mb-8 text-center">
                You Might Also Like
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {relatedProducts.map((product) => (
                  <ProductCard key={product.id} {...product} />
                ))}
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ProductDetail;
