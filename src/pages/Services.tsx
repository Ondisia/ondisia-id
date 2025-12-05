import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Code2, 
  Smartphone, 
  Palette, 
  Database, 
  Cloud, 
  Shield,
  Search,
  Headphones 
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { FadeIn, ScaleIn } from "@/components/AnimatedText";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

const Services = () => {
  const { t } = useLanguage();
  
  const services = [
    {
      icon: Code2,
      title: t("services.web.title"),
      description: t("services.web.desc"),
      features: [
        "Website Company Profile",
        "E-Commerce Platform",
        "Web Application",
        "Landing Page",
      ],
    },
    {
      icon: Smartphone,
      title: t("services.mobile.title"),
      description: t("services.mobile.desc"),
      features: [
        "Android App Development",
        "iOS App Development",
        "React Native",
        "Flutter Development",
      ],
    },
    {
      icon: Palette,
      title: t("services.design.title"),
      description: t("services.design.desc"),
      features: [
        "User Interface Design",
        "User Experience Design",
        "Prototyping",
        "Brand Identity",
      ],
    },
    {
      icon: Database,
      title: t("services.backend.title"),
      description: t("services.backend.desc"),
      features: [
        "API Development",
        "Database Design",
        "Server Configuration",
        "Integration Services",
      ],
    },
    {
      icon: Cloud,
      title: t("services.cloud.title"),
      description: t("services.cloud.desc"),
      features: [
        "AWS Services",
        "Google Cloud",
        "Azure Platform",
        "DevOps Setup",
      ],
    },
    {
      icon: Shield,
      title: t("services.maintenance.title"),
      description: t("services.maintenance.desc"),
      features: [
        "Bug Fixes",
        "Performance Optimization",
        "Security Updates",
        "Technical Support",
      ],
    },
    {
      icon: Search,
      title: t("services.seo.title"),
      description: t("services.seo.desc"),
      features: [
        "On-Page SEO",
        "Technical SEO",
        "Content Strategy",
        "Analytics Setup",
      ],
    },
    {
      icon: Headphones,
      title: t("services.consulting.title"),
      description: t("services.consulting.desc"),
      features: [
        "Technology Audit",
        "Solution Architecture",
        "Project Planning",
        "Best Practices",
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <WhatsAppButton />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 bg-gradient-subtle">
        <div className="container mx-auto text-center">
          <FadeIn>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {t("services.title")}
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {t("services.subtitle")}
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <ScaleIn key={index} delay={index * 0.05}>
                <motion.div
                  whileHover={{ y: -10, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className="border-border hover:shadow-card transition-shadow h-full">
                    <CardContent className="pt-6">
                      <service.icon className="h-12 w-12 text-primary mb-4" />
                      <h3 className="font-semibold text-lg mb-2">{service.title}</h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        {service.description}
                      </p>
                      <ul className="space-y-2">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="text-sm text-muted-foreground flex items-start">
                            <span className="text-primary mr-2">✓</span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              </ScaleIn>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 bg-card">
        <div className="container mx-auto">
          <FadeIn>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("services.process.title")}</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                {t("services.process.subtitle")}
              </p>
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: t("services.process.step1"), desc: t("services.process.step1Desc") },
              { step: "02", title: t("services.process.step2"), desc: t("services.process.step2Desc") },
              { step: "03", title: t("services.process.step3"), desc: t("services.process.step3Desc") },
              { step: "04", title: t("services.process.step4"), desc: t("services.process.step4Desc") },
            ].map((process, index) => (
              <FadeIn key={index} delay={index * 0.1}>
                <motion.div 
                  className="text-center"
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="text-5xl font-bold text-primary/20 mb-4">{process.step}</div>
                  <h3 className="font-semibold text-xl mb-2">{process.title}</h3>
                  <p className="text-sm text-muted-foreground">{process.desc}</p>
                </motion.div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-primary">
        <div className="container mx-auto text-center">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {t("services.cta.title")}
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              {t("services.cta.subtitle")}
            </p>
            <motion.div 
              whileHover={{ scale: 1.05 }} 
              whileTap={{ scale: 0.95 }}
              className="inline-block"
            >
              <Button variant="hero" size="lg" asChild className="bg-white text-primary hover:bg-white/90 shadow-glow">
                <Link to="/contact">{t("services.cta.button")}</Link>
              </Button>
            </motion.div>
          </FadeIn>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
