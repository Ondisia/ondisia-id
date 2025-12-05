import { Card, CardContent } from "@/components/ui/card";
import { Target, Eye, Award } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { FadeIn, ScaleIn } from "@/components/AnimatedText";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import teamImage from "@/assets/about-team.jpg";

const About = () => {
  const { t } = useLanguage();
  
  const values = [
    {
      icon: Target,
      title: t("about.values.mission"),
      description: t("about.values.missionDesc"),
    },
    {
      icon: Eye,
      title: t("about.values.vision"),
      description: t("about.values.visionDesc"),
    },
    {
      icon: Award,
      title: t("about.values.commitment"),
      description: t("about.values.commitmentDesc"),
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
              {t("about.title")}
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {t("about.subtitle")}
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <FadeIn direction="left">
              <motion.img
                src={teamImage}
                alt="Tim Ondisia"
                className="rounded-lg shadow-card w-full h-auto"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              />
            </FadeIn>
            <FadeIn direction="right" delay={0.2}>
              <h2 className="text-3xl font-bold mb-6">{t("about.story.title")}</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>{t("about.story.p1")}</p>
                <p>{t("about.story.p2")}</p>
                <p>{t("about.story.p3")}</p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 bg-card">
        <div className="container mx-auto">
          <FadeIn>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("about.values.title")}</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                {t("about.values.subtitle")}
              </p>
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <ScaleIn key={index} delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className="border-border hover:shadow-card transition-shadow h-full">
                    <CardContent className="pt-6 text-center">
                      <value.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                      <h3 className="font-semibold text-xl mb-3">{value.title}</h3>
                      <p className="text-muted-foreground">{value.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              </ScaleIn>
            ))}
          </div>
        </div>
      </section>

      {/* Team Stats */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <FadeIn>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("about.why.title")}</h2>
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {[
              { value: "5+", label: t("about.why.experience") },
              { value: "15+", label: t("about.why.team") },
              { value: "24/7", label: t("about.why.support") },
              { value: "100%", label: t("about.why.satisfaction") },
            ].map((stat, index) => (
              <FadeIn key={index} delay={index * 0.1}>
                <motion.div 
                  className="text-center p-6 bg-card rounded-lg border border-border"
                  whileHover={{ y: -5, scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </motion.div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
