import { Layout } from "@/components/layout/Layout";
import { Target, Eye, Heart, Users, Award, Calendar } from "lucide-react";
import aboutImage from "@/assets/about-team.jpg";
import { motion } from "framer-motion";

const About = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding section-green-light">
        <motion.div className="container-narrow mx-auto text-center">
          <p className="text-primary font-medium mb-3 uppercase tracking-wider text-sm">
            About Us
          </p>
          <h1 className="heading-display text-foreground mb-6">
            Our Story of Compassion
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Learn about our journey, mission, and the dedicated team behind Manav Seva Chatra.
          </p>
        </motion.div>
      </section>

      {/* Main Story */}
      <section className="section-padding bg-background">
        <motion.div className="container-narrow mx-auto">
          <motion.div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div>
              <img
                src={aboutImage}
                alt="Our family at Manav Seva Chatra - Placeholder image"
                className="rounded-2xl shadow-lg w-full aspect-[3/2] object-cover"
              />
            </motion.div>
            <motion.div>
              <h2 className="heading-section text-foreground mb-6">
                A Journey That Began With a Promise
              </h2>
              <motion.div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Manavata Hitay Social Foundation is nonprofit organization registered during the
                  2020. Trust is based at pimpri chinchwad and work in all over the pune district
                  and Maharashtra state.
                  The basic objectives of the trust is to work for the underprivileged population
                  specially the street orphan persons who need medical help and rehabilitation.
                  Also since the last 3 years trust is working with another important ignorable group
                  transgender for giving their basic rights
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
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding section-warm-bg">
        <motion.div className="container-narrow mx-auto">
          <motion.div className="grid md:grid-cols-2 gap-8">
            {/* Mission */}
            <motion.div className="card-service">
              <motion.div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-primary" />
              </motion.div>
              <h3 className="font-serif text-2xl font-semibold text-foreground mb-4">
                Our Mission
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Establishment of shelter home, empowering and advocating for the rights of these
                vulnerable populations, promoting social inclusion and celebrating motion.diversity with
                the support of different stakeholders
              </p>
            </motion.div>

            {/* Vision */}
            <motion.div className="card-service">
              <motion.div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <Eye className="w-7 h-7 text-primary" />
              </motion.div>
              <h3 className="font-serif text-2xl font-semibold text-foreground mb-4">
                Our Vision
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Create a future where every street orphan and transgender has the opportunity
                to lead a fulfilling life, reach their full potential, and contribute to their community
                without fear of rejection or stigma.
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* Values */}
      <section className="section-padding bg-background">
        <motion.div className="container-narrow mx-auto">
          <motion.div className="text-center mb-12">
            <p className="text-primary font-medium mb-3 uppercase tracking-wider text-sm">
              Our Core Values
            </p>
            <h2 className="heading-section text-foreground">
              What Guides Us Every Day
            </h2>
          </motion.div>

          <motion.div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Heart, title: "Compassion", desc: "Treating every resident with love and empathy" },
              { icon: Users, title: "Dignity", desc: "Respecting the inmotion.dividuality of each person" },
              { icon: Award, title: "Excellence", desc: "Striving for the highest standards of care" },
              { icon: Calendar, title: "Commitment", desc: "Dedicated service, 24 hours a day, 365 days" },
            ].map((value, index) => (
              <motion.div key={index} className="text-center p-6">
                <motion.div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-7 h-7 text-primary" />
                </motion.div>
                <h3 className="font-serif text-lg font-semibold text-foreground mb-2">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-sm">{value.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>
    </Layout>
  );
};

export default About;
