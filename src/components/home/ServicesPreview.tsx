import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Stethoscope,
  UtensilsCrossed,
  Users,
  Heart,
} from "lucide-react";

import careService1 from "@/assets/care-service-1.jpg";
import careService2 from "@/assets/care-service-2.jpg";
import careService3 from "@/assets/care-service-3.jpg";
import careService4 from "@/assets/care-service-4.jpg";

const services = [
  {
    icon: Heart,
    title: "Personal Care",
    description:
      "Compassionate daily assistance with personal hygiene, mobility, and comfort needs.",
    image: careService1,
  },
  {
    icon: UtensilsCrossed,
    title: "Nutritious Meals",
    description:
      "Healthy, home-cooked meals tailored to dietary requirements and preferences.",
    image: careService2,
  },
  {
    icon: Stethoscope,
    title: "Medical Support",
    description:
      "Regular health check-ups, medication management, and 24/7 emergency care.",
    image: careService3,
  },
  {
    icon: Users,
    title: "Social Activities",
    description:
      "Engaging recreational programs, celebrations, and community interactions.",
    image: careService4,
  },
];

export function ServicesPreview() {
  return (
    <section className="section-padding section-warm-bg">
      <div className="container-narrow mx-auto">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 animate-fade-in">
          <p className="text-primary font-medium mb-3 uppercase tracking-wider text-sm">
            What We Provide
          </p>
          <h2 className="heading-section text-foreground mb-4">
            Comprehensive Care for Complete Well-being
          </h2>
          <p className="text-muted-foreground text-lg">
            We offer holistic support covering physical health, nutrition,
            medical needs, and emotional wellness for all our residents.
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {services.map((service, index) => (
            <div
              key={index}
              className={`card-service group animate-fade-in-delay-${index + 1}`}
            >
              {/* Image (Adjusted Size) */}
              <div className="w-full h-[160px] sm:h-[180px] rounded-lg overflow-hidden mb-5">
                <img
                  src={service.image}
                  alt={`${service.title} - Service image`}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              {/* Title + Icon */}
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <service.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-serif text-lg font-semibold text-foreground">
                  {service.title}
                </h3>
              </div>

              {/* Description */}
              <p className="text-muted-foreground text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link to="/services">
            <Button variant="outline" className="btn-secondary">
              Explore All Our Services
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
