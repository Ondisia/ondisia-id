import { Button } from "@/components/ui/button";
import { Zap, Users, BookOpen, GraduationCap, Code, ChevronRight, CheckCircle, Globe, Target, Star, Award, Clock, Smartphone } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";

const Index = () => {
  const { t } = useLanguage();
  
  return (
    <div className="min-h-screen">
      <Navbar />
      <WhatsAppButton />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-hero text-white pt-24 pb-16 md:pt-32 md:pb-32 text-center lg:text-left">
        {/* Subtle Background Elements */}
        <div className="absolute inset-0 bg-dot-pattern opacity-[0.05] pointer-events-none"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(0,100,255,0.05),transparent_70%)] pointer-events-none"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div 
              className="space-y-8"
            >
              <div className="space-y-6">
                <div
                  className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-blue-200 text-sm font-medium"
                >
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                  </span>
                  {t("home.hero.feat1")}
                </div>
                
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-blue-200">
                  {t("home.hero.title")}
                </h1>
                
                <p className="text-lg md:text-xl text-blue-100/80 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                  {t("home.hero.subtitle")}
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button size="lg" className="bg-white text-slate-900 hover:bg-blue-50 text-base px-8 py-6 rounded-full font-semibold shadow-2xl hover:shadow-blue-500/20 transition-all duration-300 transform hover:scale-105" asChild>
                  <a 
                    href={`https://wa.me/6282229062398?text=${encodeURIComponent("Halo Ondisia, saya tertarik untuk konsultasi mengenai pembuatan website/aplikasi.")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {t("home.hero.cta1")}
                    <ChevronRight className="ml-2 h-5 w-5" />
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="border-white/20 bg-white/5 hover:bg-white/10 text-white backdrop-blur-sm text-base px-8 py-6 rounded-full font-semibold transition-all duration-300 transform hover:scale-105" asChild>
                  <a href="/services">
                    {t("home.hero.cta2")}
                  </a>
                </Button>
              </div>
              
              <div className="flex flex-wrap justify-center lg:justify-start gap-x-8 gap-y-4 text-blue-100/60">
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle className="h-4 w-4 text-blue-400" />
                  <span>{t("home.hero.feat2")}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle className="h-4 w-4 text-blue-400" />
                  <span>{t("home.hero.feat3")}</span>
                </div>
              </div>
            </div>
            
            <div 
              className="relative"
            >
              {/* Floating Dashboard Card */}
              <div className="relative z-10 glass-card p-1 rounded-2xl bg-gradient-to-b from-white/10 to-transparent border border-white/10 shadow-2xl">
                <div className="bg-slate-900/40 backdrop-blur-lg rounded-2xl p-6 md:p-10">
                  <div className="grid grid-cols-2 gap-4 md:gap-6">
                    <motion.div 
                      whileHover={{ y: -5 }}
                      className="bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl p-6 text-center transition-colors"
                    >
                      <Code className="h-10 w-10 mx-auto mb-3 text-blue-400" />
                      <p className="font-medium text-sm md:text-base">Modern Web</p>
                    </motion.div>
                    <motion.div 
                      whileHover={{ y: -5 }}
                      className="bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl p-6 text-center transition-colors"
                    >
                      <Smartphone className="h-10 w-10 mx-auto mb-3 text-emerald-400" />
                      <p className="font-medium text-sm md:text-base">Mobile App</p>
                    </motion.div>
                    <motion.div 
                      whileHover={{ y: -5 }}
                      className="bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl p-6 text-center transition-colors"
                    >
                      <Globe className="h-10 w-10 mx-auto mb-3 text-purple-400" />
                      <p className="font-medium text-sm md:text-base">Scaleable</p>
                    </motion.div>
                    <motion.div 
                      whileHover={{ y: -5 }}
                      className="bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl p-6 text-center transition-colors"
                    >
                      <Users className="h-10 w-10 mx-auto mb-3 text-amber-400" />
                      <p className="font-medium text-sm md:text-base">{t("services.process.step1")}</p>
                    </motion.div>
                  </div>
                </div>
              </div>
              
              {/* Modern Background Decorations */}
              <div className="absolute -top-10 -right-10 w-48 h-48 bg-blue-500/10 rounded-full blur-[80px]"></div>
              <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-indigo-500/10 rounded-full blur-[80px]"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Tentang Ondisia */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <motion.h2 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground"
            >
              {t("home.about.title")}
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.4 }}
              className="text-xl text-muted-foreground leading-relaxed italic"
            >
              "{t("home.about.desc")}"
            </motion.p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
              {[
                { icon: Code, color: "blue", label: t("home.about.item1"), desc: t("home.about.item1Desc") },
                { icon: Zap, color: "emerald", label: t("home.about.item2"), desc: t("home.about.item2Desc") },
                { icon: BookOpen, color: "purple", label: t("home.about.item3"), desc: t("home.about.item3Desc") },
                { icon: GraduationCap, color: "amber", label: t("home.about.item4"), desc: t("home.about.item4Desc") },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.05 * idx, duration: 0.3 }}
                  className="group p-8 rounded-3xl bg-card border border-border/50 hover:border-primary/20 hover:shadow-elegant transition-all will-change-transform"
                >
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform ${
                    item.color === "blue" ? "bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400" :
                    item.color === "emerald" ? "bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400" :
                    item.color === "purple" ? "bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400" :
                    "bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400"
                  }`}>
                    <item.icon className="h-7 w-7" />
                  </div>
                  <h3 className="font-bold text-lg text-foreground mb-3">{item.label}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Layanan */}
      <section id="services" className="py-24 bg-muted/20 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center space-y-4 mb-20">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
              {t("home.services.title")}
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {t("home.services.subtitle")}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="hover:shadow-elegant transition-all duration-300 border-0 bg-background/50 backdrop-blur-sm group p-2">
              <CardHeader className="text-center pb-4">
                <div className="w-20 h-20 bg-blue-100 dark:bg-blue-900/40 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <BookOpen className="h-10 w-10 text-blue-600 dark:text-blue-400" />
                </div>
                <CardTitle className="text-xl font-bold">{t("home.services.task.title")}</CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-6">
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {t("home.services.task.desc")}
                </CardDescription>
                <ul className="text-left space-y-3">
                  {[1, 2, 3].map((i) => (
                    <li key={i} className="flex items-center gap-3 text-sm text-muted-foreground">
                      <div className="h-5 w-5 rounded-full bg-emerald-500/10 flex items-center justify-center flex-shrink-0">
                        <CheckCircle className="h-3 w-3 text-emerald-500" />
                      </div>
                      <span>{t(`home.services.task.feat${i}`)}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-elegant transition-all duration-300 border-0 bg-background/50 backdrop-blur-sm group p-2">
              <CardHeader className="text-center pb-4">
                <div className="w-20 h-20 bg-emerald-100 dark:bg-emerald-900/40 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Zap className="h-10 w-10 text-emerald-600 dark:text-emerald-400" />
                </div>
                <CardTitle className="text-xl font-bold">{t("home.services.opt.title")}</CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-6">
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {t("home.services.opt.desc")}
                </CardDescription>
                <ul className="text-left space-y-3">
                  {[1, 2, 3].map((i) => (
                    <li key={i} className="flex items-center gap-3 text-sm text-muted-foreground">
                      <div className="h-5 w-5 rounded-full bg-emerald-500/10 flex items-center justify-center flex-shrink-0">
                        <CheckCircle className="h-3 w-3 text-emerald-500" />
                      </div>
                      <span>{t(`home.services.opt.feat${i}`)}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-elegant transition-all duration-300 border-0 bg-background/50 backdrop-blur-sm group p-2">
              <CardHeader className="text-center pb-4">
                <div className="w-20 h-20 bg-purple-100 dark:bg-purple-900/40 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Code className="h-10 w-10 text-purple-600 dark:text-purple-400" />
                </div>
                <CardTitle className="text-xl font-bold">{t("home.services.dev.title")}</CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-6">
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {t("home.services.dev.desc")}
                </CardDescription>
                <ul className="text-left space-y-3">
                  {[1, 2, 3].map((i) => (
                    <li key={i} className="flex items-center gap-3 text-sm text-muted-foreground">
                      <div className="h-5 w-5 rounded-full bg-emerald-500/10 flex items-center justify-center flex-shrink-0">
                        <CheckCircle className="h-3 w-3 text-emerald-500" />
                      </div>
                      <span>{t(`home.services.dev.feat${i}`)}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-elegant transition-all duration-300 border-0 bg-background/50 backdrop-blur-sm group p-2">
              <CardHeader className="text-center pb-4">
                <div className="w-20 h-20 bg-amber-100 dark:bg-amber-900/40 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <GraduationCap className="h-10 w-10 text-amber-600 dark:text-amber-400" />
                </div>
                <CardTitle className="text-xl font-bold">{t("home.services.course.title")}</CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-6">
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {t("home.services.course.desc")}
                </CardDescription>
                <ul className="text-left space-y-3">
                  {[1, 2, 3].map((i) => (
                    <li key={i} className="flex items-center gap-3 text-sm text-muted-foreground">
                      <div className="h-5 w-5 rounded-full bg-emerald-500/10 flex items-center justify-center flex-shrink-0">
                        <CheckCircle className="h-3 w-3 text-emerald-500" />
                      </div>
                      <span>{t(`home.services.course.feat${i}`)}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Mengapa Memilih Kami */}
      <section className="py-24 bg-background overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="text-center space-y-4 mb-20">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
              {t("home.why.title")}
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {t("home.why.subtitle")}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
            {[
              { icon: Zap, color: "blue", label: t("home.why.item1.title"), desc: t("home.why.item1.desc") },
              { icon: Target, color: "emerald", label: t("home.why.item2.title"), desc: t("home.why.item2.desc") },
              { icon: Users, color: "purple", label: t("home.why.item3.title"), desc: t("home.why.item3.desc") },
              { icon: Star, color: "amber", label: t("home.why.item4.title"), desc: t("home.why.item4.desc") },
              { icon: Award, color: "red", label: t("home.why.item5.title"), desc: t("home.why.item5.desc") },
              { icon: Clock, color: "indigo", label: t("home.why.item6.title"), desc: t("home.why.item6.desc") },
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.03, duration: 0.3 }}
                className="flex gap-6 items-start will-change-transform"
              >
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 ${
                    item.color === "blue" ? "bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400" :
                    item.color === "emerald" ? "bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400" :
                    item.color === "purple" ? "bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400" :
                    item.color === "amber" ? "bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400" :
                    item.color === "red" ? "bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400" :
                    "bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400"
                }`}>
                  <item.icon className="h-7 w-7" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{item.label}</h3>
                  <p className="text-muted-foreground leading-relaxed italic text-sm">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
