import { Layout } from "@/components/layout/Layout";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const Contact = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <ScrollReveal>
        <section className="section-padding section-green-light">
          <div className="container-narrow mx-auto text-center">
            <p className="text-primary font-medium mb-3 uppercase tracking-wider text-sm">
              Contact Us
            </p>
            <h1 className="heading-display text-foreground mb-6">
              Get in Touch with Us
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              We welcome visitors, well-wishers, and supporters. Please feel free
              to reach out to us using the details below.
            </p>
          </div>
        </section>
      </ScrollReveal>

      {/* Contact Information */}
      <ScrollReveal>
        <section className="section-padding bg-background">
          <div className="container-narrow mx-auto">
            <h2 className="font-serif text-2xl font-semibold text-foreground mb-8 text-center">
              Contact Information
            </h2>

            <div className="space-y-6 max-w-2xl mx-auto">
              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium text-foreground mb-1">Address</h3>
                  <p className="text-muted-foreground text-sm">
                    Sector 23, Nigdi Pradhikaran,<br />
                    Pune, Maharashtra 411044,<br />
                    India
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium text-foreground mb-1">Phone</h3>
                  <p className="text-muted-foreground text-sm">
                    +91 7066883322<br />
                    +91 8600998799
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium text-foreground mb-1">Email</h3>
                  <p className="text-muted-foreground text-sm">
                    info@manavsevachatra.org<br />
                    donate@manavsevachatra.org
                  </p>
                </div>
              </div>

              {/* Visiting Hours */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium text-foreground mb-1">
                    Visiting Hours
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Monday – Saturday: 10:00 AM – 6:00 PM<br />
                    Sunday: 10:00 AM – 2:00 PM
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Google Map */}
      <section className="section-padding section-warm-bg">
        <div className="container-narrow mx-auto">
          <h2 className="heading-section text-foreground mb-6 text-center">
            Find Us on the Map
          </h2>

          <div className="aspect-[16/9] md:aspect-[21/9] rounded-2xl overflow-hidden border border-border">
            <iframe
              src="https://www.google.com/maps?q=Manavta+Hitay+Organisation+Nigdi+Pradhikaran+Pune&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
