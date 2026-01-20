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
                  <p className="text-2xl font-bold text-foreground">5+</p>
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
              Manavata Hitay Social Foundation is nonprofit organization registered during the
              2020. Trust is based at pimpri chinchwad and work in all over the pune district
              and Maharashtra state.
              The basic objectives of the trust is to work for the underprivileged population
              specially the street orphan persons who need medical help and rehabilitation.
              Also since the last 3 years trust is working with another important ignorable group
              transgender for giving their basic rights
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Establishment of shelter home, empowering and advocating for the rights of these
              vulnerable populations, promoting social inclusion and celebrating diversity with
              the support of different stakeholders
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
