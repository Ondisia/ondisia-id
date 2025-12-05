import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { toast } from "sonner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { FadeIn, ScaleIn } from "@/components/AnimatedText";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

const Contact = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success(t("contact.form.success"));
    setFormData({ name: "", email: "", phone: "", service: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: t("contact.info.email"),
      detail: "ondisia.id@gmail.com",
      link: "mailto:ondisia.id@gmail.com",
    },
    {
      icon: Phone,
      title: t("contact.info.phone"),
      detail: "+62 822-2906-2398",
      link: "tel:+6282229062398",
    },
    {
      icon: MapPin,
      title: t("contact.info.address"),
      detail: "Probolinggo, Jawa Timur, Indonesia",
      link: "#",
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
              {t("contact.title")}
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {t("contact.subtitle")}
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <FadeIn direction="left">
              <div>
                <h2 className="text-3xl font-bold mb-6">{t("contact.info.title")}</h2>
                <p className="text-muted-foreground mb-8">
                  {t("contact.info.subtitle")}
                </p>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <ScaleIn key={index} delay={index * 0.1}>
                      <Card className="border-border hover:shadow-card transition-shadow">
                        <CardContent className="pt-6">
                          <motion.a 
                            href={info.link} 
                            className="flex items-start gap-4 group"
                            whileHover={{ x: 5 }}
                            transition={{ duration: 0.2 }}
                          >
                            <info.icon className="h-6 w-6 text-primary flex-shrink-0 group-hover:scale-110 transition-transform" />
                            <div>
                              <h3 className="font-semibold mb-1">{info.title}</h3>
                              <p className="text-sm text-muted-foreground group-hover:text-primary transition-colors">
                                {info.detail}
                              </p>
                            </div>
                          </motion.a>
                        </CardContent>
                      </Card>
                    </ScaleIn>
                  ))}
                </div>

                {/* Office Hours */}
                <ScaleIn delay={0.4}>
                  <Card className="mt-6 border-border bg-card">
                    <CardContent className="pt-6">
                      <h3 className="font-semibold mb-3">{t("contact.hours.title")}</h3>
                      <div className="space-y-2 text-sm text-muted-foreground">
                        <div className="flex justify-between">
                          <span>{t("contact.hours.weekday")}</span>
                          <span>09:00 - 18:00 WIB</span>
                        </div>
                        <div className="flex justify-between">
                          <span>{t("contact.hours.saturday")}</span>
                          <span>09:00 - 15:00 WIB</span>
                        </div>
                        <div className="flex justify-between">
                          <span>{t("contact.hours.sunday")}</span>
                          <span>{t("contact.hours.closed")}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </ScaleIn>
              </div>
            </FadeIn>

            {/* Contact Form */}
            <FadeIn direction="right" delay={0.2}>
              <Card className="border-border shadow-card">
                <CardContent className="pt-6">
                  <h2 className="text-2xl font-bold mb-6">{t("contact.form.title")}</h2>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 }}
                    >
                      <Label htmlFor="name">{t("contact.form.name")} *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder={t("contact.form.name")}
                        className="mt-1"
                      />
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 }}
                    >
                      <Label htmlFor="email">{t("contact.form.email")} *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="email@example.com"
                        className="mt-1"
                      />
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 }}
                    >
                      <Label htmlFor="phone">{t("contact.form.phone")} *</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        placeholder="+62 812-3456-7890"
                        className="mt-1"
                      />
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4 }}
                    >
                      <Label htmlFor="service">{t("contact.form.service")}</Label>
                      <Input
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        placeholder={t("contact.form.servicePlaceholder")}
                        className="mt-1"
                      />
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 }}
                    >
                      <Label htmlFor="message">{t("contact.form.message")} *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        placeholder={t("contact.form.messagePlaceholder")}
                        className="mt-1 min-h-32"
                      />
                    </motion.div>
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Button type="submit" variant="hero" size="lg" className="w-full">
                        <Send className="mr-2 h-4 w-4" />
                        {t("contact.form.submit")}
                      </Button>
                    </motion.div>
                  </form>
                </CardContent>
              </Card>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 px-4 bg-muted">
        <div className="container mx-auto">
          <FadeIn>
            <Card className="border-border shadow-card overflow-hidden">
              <div className="h-96 bg-gradient-subtle flex items-center justify-center">
                <div className="text-center">
                  <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <MapPin className="h-16 w-16 text-primary mx-auto mb-4" />
                  </motion.div>
                  <p className="text-muted-foreground">Probolinggo, Jawa Timur, Indonesia</p>
                </div>
              </div>
            </Card>
          </FadeIn>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
