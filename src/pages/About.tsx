import { Layout } from "@/components/layout/Layout";
import { Target, Eye, Heart, Users, Award, Calendar } from "lucide-react";
import aboutImage from "@/assets/about-team.jpg";

const About = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding section-green-light">
        <div className="container-narrow mx-auto text-center">
          <p className="text-primary font-medium mb-3 uppercase tracking-wider text-sm">
            About Us
          </p>
          <h1 className="heading-display text-foreground mb-6">
            Our Story of Compassion
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Learn about our journey, mission, and the dedicated team behind Manav Seva Chatra.
          </p>
        </div>
      </section>

      {/* Main Story */}
      <section className="section-padding bg-background">
        <div className="container-narrow mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src={aboutImage}
                alt="Our family at Manav Seva Chatra - Placeholder image"
                className="rounded-2xl shadow-lg w-full aspect-[3/2] object-cover"
              />
            </div>
            <div>
              <h2 className="heading-section text-foreground mb-6">
                A Journey That Began With a Promise
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Manav Seva Chatra was founded in 2008 by a group of social workers who 
                  witnessed the plight of abandoned elderly individuals in Pune. What started 
                  as a small shelter with just 5 residents has now grown into a full-fledged 
                  old age home serving over 50 seniors.
                </p>
                <p>
                  Our name "Manav Seva Chatra" means "Shelter of Human Service" – and that's 
                  exactly what we strive to be. A shelter where every elderly person is treated 
                  with the respect, care, and love they deserve.
                </p>
                <p>
                  Located in the peaceful neighborhood of Nigdi Pradhikaran, our facility 
                  provides a home-like environment with modern amenities, medical facilities, 
                  and most importantly, a caring family atmosphere.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding section-warm-bg">
        <div className="container-narrow mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Mission */}
            <div className="card-service">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-serif text-2xl font-semibold text-foreground mb-4">
                Our Mission
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                To provide a safe, loving, and dignified living environment for elderly 
                individuals who have no family support or are in need of specialized care. 
                We believe every senior deserves to live their final years with comfort, 
                respect, and joy.
              </p>
            </div>

            {/* Vision */}
            <div className="card-service">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <Eye className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-serif text-2xl font-semibold text-foreground mb-4">
                Our Vision
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                To become a model institution for elderly care in India, inspiring 
                communities to value and support their senior citizens. We envision a 
                society where no elderly person is left alone, abandoned, or uncared for.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-background">
        <div className="container-narrow mx-auto">
          <div className="text-center mb-12">
            <p className="text-primary font-medium mb-3 uppercase tracking-wider text-sm">
              Our Core Values
            </p>
            <h2 className="heading-section text-foreground">
              What Guides Us Every Day
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Heart, title: "Compassion", desc: "Treating every resident with love and empathy" },
              { icon: Users, title: "Dignity", desc: "Respecting the individuality of each person" },
              { icon: Award, title: "Excellence", desc: "Striving for the highest standards of care" },
              { icon: Calendar, title: "Commitment", desc: "Dedicated service, 24 hours a day, 365 days" },
            ].map((value, index) => (
              <div key={index} className="text-center p-6">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-serif text-lg font-semibold text-foreground mb-2">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-sm">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
