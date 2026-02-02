import { Layout } from "@/components/layout/Layout";
import { Target, Eye, Heart, Users, Award, Calendar } from "lucide-react";
import aboutImage from "@/assets/about-team.jpg";
import { motion } from "framer-motion";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
const About = () => {
  return (
    <Layout>
      {/* Hero */}
      <ScrollReveal>
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
      </ScrollReveal>
      {/* Main Story */}
      <ScrollReveal>
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
                    Maanavta Hitaay Social Foundation is a nonprofit organization registered in 2020.
                    The trust is based in Pimpri-Chinchwad and works across the Pune district and
                    the wider Maharashtra state. Our primary objective is to serve underprivileged
                    communities, especially people living on the streets who need medical help and
                    rehabilitation. In recent years, we have also focused on supporting the
                    transgender community and helping them secure their fundamental rights.
                  </p>
                  <p>
                    Our name &quot;Maanavta Hitaay Seva Chatra&quot; means &quot;Shelter of Human Service&quot; –
                    and that is exactly what we strive to be: a home where every elderly person is
                    treated with respect, care, and love.
                  </p>
                  <p>
                    Located in the peaceful neighborhood of Nigdi Pradhikaran, our facility
                    provides a home-like environment with modern amenities, medical care,
                    and most importantly, a warm, family-like atmosphere.
                  </p>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        </section>
      </ScrollReveal>

      {/* Mission & Vision */}
      <ScrollReveal>
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
                  We are committed for establishing and running shelter homes, empowering and
                  advocating for the rights of vulnerable populations, promoting social inclusion,
                  and celebrating diversity with the support of our partners, donors, and community.
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
                  Create a future where every homeless and bed ridden has the opportunity
                  to lead a fulfilling life, reach their full potential, and contribute to their community
                  without fear of rejection or stigma.
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
        </section>
      </ScrollReveal>

      {/* Values */}
      <ScrollReveal>
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
                { icon: Users, title: "Dignity", desc: "Respecting the individuality of each person" },
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
      </ScrollReveal>
    </Layout>
  );
};

export default About;
