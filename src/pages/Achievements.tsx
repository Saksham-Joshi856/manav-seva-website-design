import { Layout } from "@/components/layout/Layout";
import { Award, Calendar, Trophy } from "lucide-react";
import awardImage from "@/assets/award-ceremony.jpg";

const achievements = [
  {
    year: "2023",
    title: "Best NGO Award - Pune District",
    description: "Recognized by Pune Municipal Corporation for outstanding elderly care services.",
    type: "award",
  },
  {
    year: "2022",
    title: "Certificate of Excellence",
    description: "Awarded by Maharashtra State Social Welfare Department.",
    type: "certificate",
  },
  {
    year: "2021",
    title: "Community Service Recognition",
    description: "Honored by local Rotary Club for 10+ years of community service.",
    type: "recognition",
  },
  {
    year: "2020",
    title: "Healthcare Excellence Award",
    description: "Acknowledged for maintaining high standards during the pandemic.",
    type: "award",
  },
  {
    year: "2018",
    title: "10 Years of Service Milestone",
    description: "Celebrated a decade of serving the elderly community in Pune.",
    type: "milestone",
  },
  {
    year: "2015",
    title: "NGO of the Year - Pimpri-Chinchwad",
    description: "Recognized as the leading elderly care organization in the region.",
    type: "award",
  },
];

const milestones = [
  { year: "2008", event: "Foundation of Manav Seva Chatra with 5 residents" },
  { year: "2010", event: "Expanded to new facility with capacity for 25 residents" },
  { year: "2013", event: "Launched medical care program with hospital tie-ups" },
  { year: "2016", event: "Reached 100+ elders served milestone" },
  { year: "2019", event: "Opened new wing with modern amenities" },
  { year: "2023", event: "Currently serving 50+ residents with dedicated care" },
];

const Achievements = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding section-green-light">
        <div className="container-narrow mx-auto text-center">
          <p className="text-primary font-medium mb-3 uppercase tracking-wider text-sm">
            Achievements & Awards
          </p>
          <h1 className="heading-display text-foreground mb-6">
            Recognition for Our Service
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Our dedication to elderly care has been recognized by various organizations 
            over the years. Here are some of our proudest moments.
          </p>
        </div>
      </section>

      {/* Featured Award */}
      <section className="section-padding bg-background">
        <div className="container-narrow mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src={awardImage}
                alt="Award ceremony - Placeholder image"
                className="rounded-2xl shadow-lg w-full aspect-[3/2] object-cover"
              />
            </div>
            <div>
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <Trophy className="w-7 h-7 text-primary" />
              </div>
              <h2 className="heading-section text-foreground mb-6">
                A Legacy of Excellence
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                Over the past 15 years, Manav Seva Chatra has received numerous awards 
                and recognitions for our commitment to providing exceptional care for 
                elderly individuals.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                These awards are a testament to the hard work of our staff, the support 
                of our donors, and most importantly, the trust placed in us by the 
                families of our residents.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Awards List */}
      <section className="section-padding section-warm-bg">
        <div className="container-narrow mx-auto">
          <div className="text-center mb-12">
            <h2 className="heading-section text-foreground mb-4">
              Awards & Recognitions
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.map((item, index) => (
              <div key={index} className="card-service">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Award className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-sm font-medium text-primary">{item.year}</span>
                </div>
                <h3 className="font-serif text-lg font-semibold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-background">
        <div className="container-narrow mx-auto">
          <div className="text-center mb-12">
            <h2 className="heading-section text-foreground mb-4">
              Our Journey
            </h2>
            <p className="text-muted-foreground text-lg">
              Key milestones in our 15+ years of service.
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            {milestones.map((item, index) => (
              <div key={index} className="flex gap-6 pb-8 last:pb-0">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-semibold text-sm shrink-0">
                    {item.year}
                  </div>
                  {index < milestones.length - 1 && (
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
    </Layout>
  );
};

export default Achievements;
