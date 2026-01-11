import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Heart, Phone } from "lucide-react";

export function CTASection() {
  return (
    <section className="section-padding bg-background">
      <div className="container-narrow mx-auto">
        <div className="relative rounded-3xl overflow-hidden section-green-light p-8 md:p-12 lg:p-16">
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-primary/5 rounded-full translate-y-1/2 -translate-x-1/2" />

          <div className="relative z-10 text-center max-w-2xl mx-auto">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <Heart className="w-8 h-8 text-primary" />
            </div>

            <h2 className="heading-section text-foreground mb-4">
              Help Us Care for Those Who Cared for Us
            </h2>

            <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
              Your contribution helps provide nutritious meals, medical care, and a loving 
              home for elderly individuals in need. Every rupee makes a difference.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/donate">
                <Button size="lg" className="btn-primary px-8">
                  <Heart className="mr-2 w-5 h-5" />
                  Donate Now
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="btn-secondary px-8">
                  <Phone className="mr-2 w-5 h-5" />
                  Get in Touch
                </Button>
              </Link>
            </div>

            <p className="mt-8 text-sm text-muted-foreground">
              All donations are tax-deductible under Section 80G of the Income Tax Act.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
