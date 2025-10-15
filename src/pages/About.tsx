import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import authorPhoto from "@/assets/author-photo.jpg";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-primary/5 to-accent/5">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center animate-fade-in">
              <h1 className="font-heading text-5xl font-bold text-foreground mb-6">
                Empowering Your Journey to Growth
              </h1>
              <p className="text-muted-foreground text-lg leading-relaxed">
                We believe that personal transformation begins with the right knowledge 
                and a commitment to continuous learning.
              </p>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 animate-fade-in">
                <h2 className="font-heading text-4xl font-bold text-foreground">
                  Our Mission
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  At Elevate, we're dedicated to making high-quality personal development 
                  resources accessible to everyone. Our mission is simple: to provide you 
                  with the tools, strategies, and inspiration you need to unlock your 
                  full potential and create the life you've always envisioned.
                </p>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  We carefully curate each eBook and course in our collection, ensuring 
                  that every resource delivers real, actionable insights that you can 
                  apply immediately to your life.
                </p>
              </div>

              <div className="relative animate-scale-in">
                <div className="aspect-square rounded-lg overflow-hidden shadow-xl">
                  <img
                    src={authorPhoto}
                    alt="Our founder in their inspiring workspace"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 bg-gradient-to-br from-secondary/30 to-blush/20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-heading text-4xl font-bold text-foreground mb-12 text-center">
                Our Values
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center space-y-4 animate-fade-in">
                  <div className="w-16 h-16 rounded-full bg-primary/10 mx-auto flex items-center justify-center">
                    <span className="text-3xl">🌱</span>
                  </div>
                  <h3 className="font-heading text-xl font-semibold text-foreground">
                    Growth Mindset
                  </h3>
                  <p className="text-muted-foreground">
                    We believe in the power of continuous learning and development
                  </p>
                </div>

                <div className="text-center space-y-4 animate-fade-in">
                  <div className="w-16 h-16 rounded-full bg-accent/10 mx-auto flex items-center justify-center">
                    <span className="text-3xl">✨</span>
                  </div>
                  <h3 className="font-heading text-xl font-semibold text-foreground">
                    Authenticity
                  </h3>
                  <p className="text-muted-foreground">
                    Real, practical advice from experts who genuinely care
                  </p>
                </div>

                <div className="text-center space-y-4 animate-fade-in">
                  <div className="w-16 h-16 rounded-full bg-blush/30 mx-auto flex items-center justify-center">
                    <span className="text-3xl">💪</span>
                  </div>
                  <h3 className="font-heading text-xl font-semibold text-foreground">
                    Empowerment
                  </h3>
                  <p className="text-muted-foreground">
                    Giving you the tools to take control of your personal growth
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center space-y-6 animate-fade-in">
              <h2 className="font-heading text-4xl font-bold text-foreground">
                Start Your Transformation Today
              </h2>
              <p className="text-muted-foreground text-lg">
                Join thousands of others who have already begun their journey to 
                becoming their best selves.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/shop">
                  <Button size="lg" className="bg-primary hover:bg-primary-glow">
                    Explore Our Collection
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/5">
                    Get in Touch
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
