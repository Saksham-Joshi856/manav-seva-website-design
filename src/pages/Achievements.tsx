import { Layout } from "@/components/layout/Layout";
import { Award, Trophy } from "lucide-react";
import awardImage from "@/assets/award-ceremony.jpg";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

/* Achievements & Recognitions */
const achievements = [
  {
    year: "2020",
    title: "Organisation Registered",
    description:
      "Maanavta Hitaay Organisation was formally registered and began structured welfare activities in Pune district.",
  },
  {
    year: "2021",
    title: "Social Welfare Initiatives Expanded",
    description:
      "Expanded elderly care, shelter support, and community welfare programs across Pimpri-Chinchwad and nearby regions.",
  },
  {
    year: "2022",
    title: "Healthcare & Rehabilitation Support",
    description:
      "Strengthened medical assistance, rehabilitation support, and partnerships with local healthcare providers.",
  },
  {
    year: "2023",
    title: "Ongoing Community Service",
    description:
      "Continued providing shelter, care, food, and emotional support to elderly and vulnerable individuals.",
  },
];

/* Timeline (2020 onwards only) */
const timeline = [
  { year: "2020", event: "Formal registration of Maanavta Hitaay Organisation" },
  { year: "2021", event: "Expansion of elderly care and social welfare programs" },
  { year: "2022", event: "Introduction of structured healthcare and rehabilitation support" },
  { year: "2023 – Present", event: "Ongoing shelter, care, and community welfare services" },
];

const Achievements = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <ScrollReveal>
        <section className="section-padding section-green-light">
          <div className="container-narrow mx-auto text-center">
            <p className="text-primary font-medium mb-3 uppercase tracking-wider text-sm">
              Achievements & Milestones
            </p>
            <h1 className="heading-display text-foreground mb-6">
              Our Journey of Service
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Since our registration in 2020, Maanavta Hitaay Organisation has been
              committed to providing dignified care and support to the elderly
              and vulnerable members of society.
            </p>
          </div>
        </section>
      </ScrollReveal>
      {/* Featured Section */}
      <ScrollReveal>
        <section className="section-padding bg-background">
          <div className="container-narrow mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <img
                  src={awardImage}
                  alt="Community service activities - Placeholder image"
                  className="rounded-2xl shadow-lg w-full aspect-[3/2] object-cover"
                />
              </div>
              <div>
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                  <Trophy className="w-7 h-7 text-primary" />
                </div>
                <h2 className="heading-section text-foreground mb-6">
                  A Commitment to Compassion
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                  Our work focuses on providing a safe environment, healthcare
                  assistance, nutritious food, and emotional support to those in need.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Every milestone reflects the trust placed in us by the community
                  and our dedication to ethical and transparent service.
                </p>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Achievements Cards */}
      <ScrollReveal>
        <section className="section-padding section-warm-bg">
          <div className="container-narrow mx-auto">
            <div className="text-center mb-12">
              <h2 className="heading-section text-foreground mb-4">
                Key Achievements
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {achievements.map((item, index) => (
                <div key={index} className="card-service">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Award className="w-5 h-5 text-primary" />
                    </div>
                    <span className="text-sm font-medium text-primary">
                      {item.year}
                    </span>
                  </div>
                  <h3 className="font-serif text-lg font-semibold text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Timeline Section */}
      <ScrollReveal>
        <section className="section-padding bg-background">
          <div className="container-narrow mx-auto">
            <div className="text-center mb-12">
              <h2 className="heading-section text-foreground mb-4">
                Timeline of Growth
              </h2>
              <p className="text-muted-foreground text-lg">
                Our progress and milestones since 2020.
              </p>
            </div>

            <div className="max-w-2xl mx-auto">
              {timeline.map((item, index) => (
                <div key={index} className="flex gap-6 pb-8 last:pb-0">
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-semibold text-xs text-center">
                      {item.year}
                    </div>
                    {index < timeline.length - 1 && (
                      <div className="w-0.5 h-full bg-border mt-2" />
                    )}
                  </div>
                  <div className="pt-3">
                    <p className="text-foreground font-medium">{item.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>
    </Layout>
  );
};

export default Achievements;
