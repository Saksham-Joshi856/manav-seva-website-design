import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Heart,
  UtensilsCrossed,
  Stethoscope,
  Users,
  Home,
  Shield,
  Clock,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import careService1 from "@/assets/care-service-1.jpg";
import careService2 from "@/assets/care-service-2.jpg";
import careService3 from "@/assets/care-service-3.jpg";
import careService4 from "@/assets/care-service-4.jpg";

const services = [
  {
    icon: Heart,
    title: "Personal Care Assistance",
    description:
      "Our trained caregivers provide compassionate assistance with daily activities including bathing, grooming, dressing, and mobility support. Every resident receives personalized attention based on their specific needs.",
    image: careService1,
    features: ["Daily hygiene assistance", "Mobility support", "Personal grooming", "Wheelchair assistance"],
  },
  {
    icon: UtensilsCrossed,
    title: "Nutrition & Meals",
    description:
      "We serve fresh, home-cooked vegetarian meals three times a day, plus snacks. Our kitchen considers dietary restrictions, medical requirements, and personal preferences to ensure healthy and tasty meals.",
    image: careService2,
    features: ["3 nutritious meals daily", "Dietary accommodations", "Fresh ingredients", "Special occasion treats"],
  },
  {
    icon: Stethoscope,
    title: "Medical Care",
    description:
      "Regular health monitoring, medication management, and coordination with healthcare providers. We have tie-ups with local hospitals for emergency care and specialist consultations.",
    image: careService3,
    features: ["Daily health monitoring", "Medication management", "Doctor visits", "Emergency response"],
  },
  {
    icon: Users,
    title: "Social & Recreational Activities",
    description:
      "We organize regular activities including yoga sessions, cultural programs, birthday celebrations, and festival gatherings to keep our residents mentally active and socially engaged.",
    image: careService4,
    features: ["Morning yoga", "Cultural programs", "Birthday celebrations", "Festival events"],
  },
];

const additionalServices = [
  { icon: Home, title: "Clean & Safe Living", desc: "Hygienic rooms with regular housekeeping" },
  { icon: Shield, title: "24/7 Security", desc: "Round-the-clock security and supervision" },
  { icon: Clock, title: "Emergency Care", desc: "Immediate response to any health emergency" },
  { icon: Sparkles, title: "Spiritual Support", desc: "Prayer rooms and spiritual gatherings" },
];

const Services = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding section-green-light">
        <div className="container-narrow mx-auto text-center">
          <p className="text-primary font-medium mb-3 uppercase tracking-wider text-sm">
            Our Services
          </p>
          <h1 className="heading-display text-foreground mb-6">
            Holistic Care for Complete Well-being
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            From daily personal care to medical support and social activities, 
            we provide comprehensive services to ensure our residents live comfortably.
          </p>
        </div>
      </section>

      {/* Main Services */}
      <section className="section-padding bg-background">
        <div className="container-narrow mx-auto">
          <div className="space-y-16">
            {services.map((service, index) => (
              <div
                key={index}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <img
                    src={service.image}
                    alt={`${service.title} - Placeholder image`}
                    className="rounded-2xl shadow-lg w-full aspect-[4/3] object-cover"
                  />
                </div>
                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <service.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground">
                      {service.title}
                    </h2>
                  </div>
                  <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <ul className="grid grid-cols-2 gap-3">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-muted-foreground">
                        <div className="w-2 h-2 rounded-full bg-primary" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="section-padding section-warm-bg">
        <div className="container-narrow mx-auto">
          <div className="text-center mb-12">
            <h2 className="heading-section text-foreground mb-4">
              Additional Facilities
            </h2>
            <p className="text-muted-foreground text-lg">
              Beyond core services, we provide these essential facilities.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalServices.map((service, index) => (
              <div key={index} className="card-service text-center">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <service.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-serif text-lg font-semibold text-foreground mb-2">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-narrow mx-auto text-center">
          <h2 className="heading-section mb-4">
            Want to Enroll a Family Member?
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-8 max-w-xl mx-auto">
            We welcome new residents with open arms. Contact us to learn about our 
            admission process and facility tour.
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-card text-primary hover:bg-card/90 font-semibold px-8">
              Contact Us Today
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
