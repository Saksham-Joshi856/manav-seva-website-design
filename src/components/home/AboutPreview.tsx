import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Heart, Award } from "lucide-react";
import aboutImage from "@/assets/about-team.jpg";

export function AboutPreview() {
  return (
    <section className="section-padding bg-background">
      <div className="container-narrow mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative animate-fade-in-delay-1">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
              <img
                src={aboutImage}
                alt="Our residents and staff - Placeholder image"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating Stats Card */}
            <div className="absolute -bottom-6 -right-6 bg-card rounded-xl p-6 shadow-lg hidden md:block">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Heart className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">15+</p>
                  <p className="text-sm text-muted-foreground">Years of Service</p>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="animate-fade-in-delay-2">
            <p className="text-primary font-medium mb-3 uppercase tracking-wider text-sm">
              Who We Are
            </p>
            <h2 className="heading-section text-foreground mb-6">
              A Home Where Every Elder Matters
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Manav Seva Chatra is a registered non-profit old age home located in 
              Nigdi Pradhikaran, Pune. Since 2008, we have been dedicated to providing 
              a safe, loving, and dignified environment for elderly individuals who 
              need care and companionship.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Our mission is simple: to ensure that no elderly person feels abandoned 
              or alone. We provide 24/7 care, nutritious meals, medical support, and 
              most importantly, a family-like atmosphere where they can spend their 
              golden years with peace and happiness.
            </p>

            {/* Key Points */}
            <div className="grid sm:grid-cols-3 gap-4 mb-8">
              {[
                { icon: Users, label: "50+ Residents" },
                { icon: Heart, label: "24/7 Care" },
                { icon: Award, label: "Trusted NGO" },
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-2 text-muted-foreground">
                  <item.icon className="w-5 h-5 text-primary" />
                  <span className="text-sm font-medium">{item.label}</span>
                </div>
              ))}
            </div>

            <Link to="/about">
              <Button variant="outline" className="btn-secondary">
                Read Our Full Story
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
