import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroBanner from "@/assets/hero-banner.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[600px] flex items-center overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBanner}
          alt="Inspiring personal growth journey"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/60" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-2xl animate-fade-in">
          <h1 className="font-heading text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
            Grow into your best self,{" "}
            <span className="text-primary">one page at a time</span>
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground mb-8 leading-relaxed">
            Discover transformative eBooks and courses designed to unlock your potential, 
            boost your mindset, and guide you toward lasting personal growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/shop">
              <Button size="lg" className="w-full sm:w-auto bg-gradient-to-r from-accent to-accent/90 hover:from-accent/90 hover:to-accent text-accent-foreground font-semibold shadow-lg hover:shadow-xl transition-all">
                Explore Collection
              </Button>
            </Link>
            <Link to="/about">
              <Button size="lg" variant="outline" className="w-full sm:w-auto border-primary text-primary hover:bg-primary/5">
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
