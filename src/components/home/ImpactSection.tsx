import { Calendar, Users, Award, Heart } from "lucide-react";

const stats = [
  {
    icon: Calendar,
    value: "15+",
    label: "Years of Service",
    description: "Serving the elderly since 2008",
  },
  {
    icon: Users,
    value: "500+",
    label: "Elders Cared For",
    description: "Lives touched with love and dignity",
  },
  {
    icon: Award,
    value: "12",
    label: "Awards Received",
    description: "Recognition for excellence in care",
  },
  {
    icon: Heart,
    value: "50+",
    label: "Current Residents",
    description: "Living happily in our home",
  },
];

export function ImpactSection() {
  return (
    <section className="section-padding bg-primary text-primary-foreground">
      <div className="container-narrow mx-auto">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-primary-foreground/80 font-medium mb-3 uppercase tracking-wider text-sm">
            Our Impact
          </p>
          <h2 className="heading-section mb-4">
            Making a Real Difference
          </h2>
          <p className="text-primary-foreground/80 text-lg">
            Every number represents a life touched, a smile brought, and a family comforted 
            knowing their loved ones are in safe hands.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-xl bg-primary-foreground/5 backdrop-blur-sm"
            >
              <div className="w-14 h-14 rounded-full bg-primary-foreground/10 flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-7 h-7" />
              </div>
              <p className="text-4xl md:text-5xl font-serif font-bold mb-2">
                {stat.value}
              </p>
              <p className="text-lg font-medium mb-1">{stat.label}</p>
              <p className="text-sm text-primary-foreground/70">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
