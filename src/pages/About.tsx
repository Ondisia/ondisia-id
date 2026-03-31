import { Card, CardContent } from "@/components/ui/card";
import { Target, Eye, Award, Clock, Users, Headphones, ThumbsUp } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { FadeIn, ScaleIn } from "@/components/AnimatedText";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import teamImage from "@/assets/ab.png";

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
      <section className="pt-32 pb-20 px-6 bg-gradient-subtle">
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
      <section className="py-20 px-6 overflow-hidden">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <FadeIn direction="left" className="w-full flex justify-center">
              <motion.img
                src={teamImage}
                alt="Tim Ondisia"
                className="w-full max-w-md h-auto object-cover"
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
      <section className="py-20 px-6 bg-card">
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

      {/* Why Choose Us - Premium Section */}
      <section className="py-24 px-6 relative overflow-hidden">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-[image:var(--gradient-hero)]" />
        <div className="absolute inset-0 bg-[image:var(--gradient-hero-glow)]" />
        
        {/* Animated Decorative Orbs */}
        <motion.div
          className="absolute top-10 left-10 w-72 h-72 rounded-full opacity-20"
          style={{ background: "radial-gradient(circle, hsl(195 100% 65% / 0.4), transparent 70%)" }}
          animate={{ x: [0, 30, 0], y: [0, -20, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-10 right-10 w-96 h-96 rounded-full opacity-15"
          style={{ background: "radial-gradient(circle, hsl(200 95% 45% / 0.4), transparent 70%)" }}
          animate={{ x: [0, -25, 0], y: [0, 15, 0], scale: [1, 1.15, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full opacity-10"
          style={{ background: "radial-gradient(circle, hsl(190 85% 55% / 0.5), transparent 70%)" }}
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="container mx-auto relative z-10">
          <FadeIn>
            <div className="text-center mb-16">
              <motion.span 
                className="inline-block px-4 py-1.5 rounded-full text-sm font-medium mb-4 border"
                style={{ 
                  background: "hsl(195 100% 55% / 0.1)", 
                  borderColor: "hsl(195 100% 55% / 0.3)",
                  color: "hsl(195 100% 70%)" 
                }}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                ★ {t("about.why.title")}
              </motion.span>
              <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">
                {t("about.why.title")}
              </h2>
              <p className="text-white/60 max-w-2xl mx-auto text-lg">
                {t("about.values.subtitle")}
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              { value: "5+", label: t("about.why.experience"), icon: Clock, color: "195 100% 55%" },
              { value: "5+", label: t("about.why.team"), icon: Users, color: "200 95% 45%" },
              { value: "24/7", label: t("about.why.support"), icon: Headphones, color: "190 85% 55%" },
              { value: "100%", label: t("about.why.satisfaction"), icon: ThumbsUp, color: "195 100% 65%" },
            ].map((stat, index) => (
              <FadeIn key={index} delay={index * 0.15}>
                <motion.div
                  className="group relative rounded-2xl p-[1px] cursor-default"
                  style={{
                    background: `linear-gradient(135deg, hsl(${stat.color} / 0.4), hsl(${stat.color} / 0.1))`,
                  }}
                  whileHover={{ y: -8, scale: 1.03 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                >
                  <div className="relative rounded-2xl p-6 md:p-8 text-center h-full overflow-hidden"
                    style={{ background: "hsl(220 20% 10% / 0.85)", backdropFilter: "blur(20px)" }}
                  >
                    {/* Glow on hover */}
                    <div 
                      className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      style={{ background: `radial-gradient(circle at 50% 50%, hsl(${stat.color} / 0.15), transparent 70%)` }}
                    />

                    <div className="relative z-10">
                      {/* Icon */}
                      <motion.div
                        className="mx-auto mb-4 w-14 h-14 rounded-xl flex items-center justify-center"
                        style={{ background: `linear-gradient(135deg, hsl(${stat.color} / 0.2), hsl(${stat.color} / 0.05))` }}
                        whileHover={{ rotate: [0, -10, 10, 0] }}
                        transition={{ duration: 0.5 }}
                      >
                        <stat.icon className="w-7 h-7" style={{ color: `hsl(${stat.color})` }} />
                      </motion.div>

                      {/* Value */}
                      <div 
                        className="text-4xl md:text-5xl font-extrabold mb-2 bg-clip-text text-transparent"
                        style={{ 
                          backgroundImage: `linear-gradient(135deg, hsl(${stat.color}), white)` 
                        }}
                      >
                        {stat.value}
                      </div>

                      {/* Label */}
                      <div className="text-white/60 text-sm md:text-base font-medium">
                        {stat.label}
                      </div>
                    </div>
                  </div>
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
