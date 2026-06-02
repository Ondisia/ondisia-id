import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();
  
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-6 py-12 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">{t("footer.nav")}</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  {t("nav.home")}
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  {t("nav.about")}
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  {t("nav.portfolio")}
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  {t("nav.services")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">{t("footer.services")}</h4>
            <ul className="space-y-2">
              <li className="text-sm text-muted-foreground">{t("services.web.title")}</li>
              <li className="text-sm text-muted-foreground">{t("services.mobile.title")}</li>
              <li className="text-sm text-muted-foreground">{t("services.design.title")}</li>
              <li className="text-sm text-muted-foreground">{t("services.consulting.title")}</li>
              <li className="text-sm text-muted-foreground">{t("home.services.course.title")}</li>
              <li className="text-sm text-muted-foreground">{t("home.services.task.title")}</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">{t("footer.contact")}</h4>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4" />
                ondisia.id@gmail.com
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4" />
                +62 8222-9062-398
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4" />
                Probolinggo, Jawa Timur, Indonesia
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Ondisia. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
