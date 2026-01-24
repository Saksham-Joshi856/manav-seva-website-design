import { Link } from "react-router-dom";
import { Heart, MapPin, Phone, Mail, Clock } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="container-narrow mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* About */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                <Heart className="w-5 h-5 text-primary-foreground" />
              </div>
              <div>
                <h3 className="font-serif text-lg font-semibold">Manavta Hitay Organisation</h3>
              </div>
            </div>
            <p className="text-background/70 text-sm leading-relaxed">
              Providing dignified care, love, and support to elderly individuals in need.
              A registered non-profit organization serving the community since 2020.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { name: "Home", path: "/" },
                { name: "About Us", path: "/about" },
                { name: "Our Services", path: "/services" },
                { name: "Gallery", path: "/gallery" },
                { name: "Donate", path: "/donate" },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-background/70 hover:text-background transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-background/70">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                <span>Office no-305,2nd Floor, Kamala corner , near Morya Hospital,
                  Chinchwad, Pune- 411033</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-background/70">
                <Phone className="w-4 h-4 shrink-0" />
                <span>+91 70668 83322</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-background/70">
                <Mail className="w-4 h-4 shrink-0" />
                <span>info@manavsevachatra.org</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-background/70">
                <Clock className="w-4 h-4 shrink-0" />
                <span>Visiting Hours: 10 AM - 6 PM</span>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-background/70">
              <li>Registered under Bombay Public Trust Act of
                1950</li>
              <li>Registered under section 12AA (2) of Income Tax
                Act 1961</li>
              <li>FCRA Registered for Foreign Donations</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-background/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-background/60">
            <p className="text-sm text-muted-foreground mt-4 text-center">
              © 2026 Manavta Hitay Organisation. All rights reserved.
            </p>

            <p className="text-xs text-muted-foreground/70 mt-1 text-center">
              Website developed by students of Pimpri Chinchwad College of Engineering (PCCOE),
              under the guidance of their mentor.
            </p>


            <p className="text-center md:text-right">
              A non-profit organization dedicated to elderly care and welfare.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
