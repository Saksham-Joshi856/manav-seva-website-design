import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Heart } from "lucide-react";
import heroImage from "@/assets/hero-elderly-care.jpg";

export function HeroSection() {
  return (
    <section className="relative min-h-[85vh] flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Elderly residents enjoying time together in the garden - Placeholder image"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 gradient-hero opacity-75" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-narrow mx-auto px-4 py-16 md:py-24">
        <div className="max-w-2xl animate-fade-in-up">
          <div className="flex items-center gap-2 text-primary-foreground/90 mb-4">
            <Heart className="w-5 h-5" />
            <span className="text-sm font-medium uppercase tracking-wider">
              Since 2020 • Nigdi, Pune
            </span>
          </div>

          <h1 className="heading-display text-primary-foreground mb-6">
            Care, Dignity & Love for Our Elders
          </h1>

          <p className="text-body-large text-primary-foreground/90 mb-8 max-w-xl">
            At Maanavta Hitaay Organisation, we believe every elderly person deserves a life
            filled with compassion, respect, and proper care. Join us in making
            their golden years truly golden.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/donate">
              <Button
                size="lg"
                className="bg-card text-primary hover:bg-card/90 font-semibold px-8"
              >
                Donate Now
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
            <Link to="/about">
              <Button
                size="lg"
                className="bg-white text-primary border-2 border-white font-semibold px-8 hover:bg-white hover:text-primary"
              >
                Learn More About Us
              </Button>



            </Link>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-primary-foreground/30 flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-primary-foreground/50 rounded-full" />
        </div>
      </div>
    </section>
  );
}
