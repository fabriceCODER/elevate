import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProductCard from "@/components/ProductCard";
import TestimonialCard from "@/components/TestimonialCard";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { products } from "@/data/products";

const Index = () => {
  const featuredProducts = products.filter((p) => p.featured);

  const testimonials = [
    {
      name: "Alex Johnson",
      role: "Entrepreneur",
      content:
        "These books completely transformed my approach to personal development. The practical strategies are easy to implement and truly effective.",
      rating: 5,
    },
    {
      name: "Rachel Kim",
      role: "Marketing Professional",
      content:
        "I've tried countless self-help books, but these stand out. They're beautifully written, actionable, and genuinely inspiring.",
      rating: 5,
    },
    {
      name: "David Martinez",
      role: "Software Engineer",
      content:
        "The productivity course changed my entire workflow. I'm getting more done in less time and feeling less stressed.",
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <Hero />

        {/* Featured Products */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 animate-fade-in">
              <h2 className="font-heading text-4xl font-bold text-foreground mb-4">
                Bestselling Guides
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Start your transformation with our most popular self-improvement resources
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
              {featuredProducts.map((product) => (
                <ProductCard key={product.id} {...product} />
              ))}
            </div>

            <div className="text-center">
              <Link to="/shop">
                <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/5">
                  View All Products
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* About Preview */}
        <section className="py-16 bg-gradient-to-br from-primary/5 to-accent/5">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center animate-fade-in">
              <h2 className="font-heading text-4xl font-bold text-foreground mb-6">
                Your Guide to Personal Growth
              </h2>
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                At Elevate, we believe everyone has the power to transform their life. 
                Our carefully curated collection of eBooks and courses provides you with 
                the tools, strategies, and inspiration you need to unlock your full potential.
              </p>
              <Link to="/about">
                <Button size="lg" className="bg-primary hover:bg-primary-glow">
                  Our Story
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 animate-fade-in">
              <h2 className="font-heading text-4xl font-bold text-foreground mb-4">
                Success Stories
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Join thousands who have transformed their lives
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <TestimonialCard key={index} {...testimonial} />
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-primary/10 via-accent/10 to-blush/10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-in">
            <h2 className="font-heading text-4xl font-bold text-foreground mb-4">
              Ready to Begin Your Journey?
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
              Explore our collection and find the perfect guide to help you achieve your goals
            </p>
            <Link to="/shop">
              <Button size="lg" className="bg-gradient-to-r from-accent to-accent/90 hover:from-accent/90 hover:to-accent text-accent-foreground font-semibold shadow-lg hover:shadow-xl transition-all">
                Start Exploring
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
