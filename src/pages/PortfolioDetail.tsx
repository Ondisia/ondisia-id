import { useParams, Link } from "react-router-dom";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ExternalLink, Calendar, Users, Award } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { FadeIn, ScaleIn } from "@/components/AnimatedText";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";

const PortfolioDetail = () => {
  const { id } = useParams();
  const { t } = useLanguage();

  const allProjects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "Platform e-commerce lengkap dengan sistem payment gateway dan inventory management",
      fullDescription: "Platform e-commerce modern yang dibangun dengan teknologi terkini. Sistem ini dilengkapi dengan payment gateway terintegrasi, inventory management real-time, dashboard analytics komprehensif, dan sistem notifikasi otomatis. Mendukung multiple payment methods dan multi-currency.",
      image: project1,
      tags: ["React", "Node.js", "MongoDB"],
      category: "Web Development",
      client: "PT Retail Indonesia",
      duration: "3 bulan",
      year: "2024",
      challenges: "Integrasi multiple payment gateway dan sinkronisasi inventory real-time",
      results: "Peningkatan konversi penjualan 40% dan efisiensi operasional 60%",
      features: [
        "Multi-vendor marketplace",
        "Real-time inventory tracking",
        "Payment gateway integration",
        "Advanced analytics dashboard",
        "Mobile responsive design",
        "SEO optimized"
      ]
    },
    {
      id: 2,
      title: "Corporate Website",
      description: "Website corporate profesional dengan CMS untuk management konten",
      fullDescription: "Website corporate yang elegant dan profesional dengan CMS custom yang memudahkan tim untuk mengelola konten secara mandiri. Dilengkapi dengan blog system, gallery management, dan contact form terintegrasi.",
      image: project2,
      tags: ["WordPress", "PHP", "MySQL"],
      category: "Web Development",
      client: "ABC Corporation",
      duration: "2 bulan",
      year: "2024",
      challenges: "Migrasi dari sistem lama tanpa downtime",
      results: "Load time 3x lebih cepat dan user engagement meningkat 55%",
      features: [
        "Custom CMS",
        "Blog management system",
        "Gallery & portfolio showcase",
        "Multi-language support",
        "Contact form integration",
        "Newsletter subscription"
      ]
    },
    {
      id: 3,
      title: "Mobile Banking App",
      description: "Aplikasi mobile banking dengan fitur transfer, pembayaran, dan investment",
      fullDescription: "Aplikasi mobile banking yang aman dan user-friendly dengan berbagai fitur lengkap. Dilengkapi dengan enkripsi end-to-end, biometric authentication, dan real-time transaction monitoring.",
      image: project3,
      tags: ["React Native", "Firebase", "API"],
      category: "Mobile App",
      client: "Bank Digital Nusantara",
      duration: "6 bulan",
      year: "2023",
      challenges: "Keamanan data dan compliance dengan regulasi perbankan",
      results: "500K+ downloads dalam 3 bulan pertama, rating 4.8/5.0",
      features: [
        "Secure money transfer",
        "Bill payments",
        "Investment portfolio",
        "Biometric authentication",
        "Real-time notifications",
        "Transaction history & reports"
      ]
    },
    {
      id: 4,
      title: "Learning Management System",
      description: "Platform pembelajaran online dengan video streaming dan quiz interaktif",
      fullDescription: "LMS komprehensif untuk institusi pendidikan dengan fitur video streaming HD, quiz interaktif, assignment tracking, dan reporting system yang detail untuk monitoring progress siswa.",
      image: project1,
      tags: ["Vue.js", "Laravel", "PostgreSQL"],
      category: "Web Development",
      client: "Universitas Teknologi Modern",
      duration: "4 bulan",
      year: "2023",
      challenges: "Skalabilitas untuk ribuan pengguna concurrent",
      results: "Mendukung 10,000+ siswa dengan 99.9% uptime",
      features: [
        "HD video streaming",
        "Interactive quizzes",
        "Assignment management",
        "Progress tracking",
        "Discussion forums",
        "Certificate generation"
      ]
    },
    {
      id: 5,
      title: "Food Delivery App",
      description: "Aplikasi delivery makanan dengan real-time tracking dan payment integration",
      fullDescription: "Aplikasi food delivery yang menghubungkan restaurant, driver, dan customer dalam satu platform terintegrasi. Dilengkapi dengan real-time GPS tracking, multiple payment options, dan rating system.",
      image: project2,
      tags: ["Flutter", "Firebase", "Google Maps"],
      category: "Mobile App",
      client: "FoodHub Indonesia",
      duration: "5 bulan",
      year: "2024",
      challenges: "Optimisasi routing dan real-time GPS tracking",
      results: "200+ restaurants terdaftar, 50K+ orders per bulan",
      features: [
        "Real-time order tracking",
        "Multiple payment methods",
        "Rating & review system",
        "Push notifications",
        "Promo & voucher management",
        "Driver management system"
      ]
    },
    {
      id: 6,
      title: "Healthcare Portal",
      description: "Portal kesehatan dengan fitur booking dokter dan telemedicine",
      fullDescription: "Portal kesehatan digital yang memudahkan pasien untuk booking appointment, konsultasi online, dan akses medical records. Dilengkapi dengan video consultation dan prescription management.",
      image: project3,
      tags: ["Next.js", "Express", "MongoDB"],
      category: "Web Development",
      client: "HealthCare Plus",
      duration: "4 bulan",
      year: "2023",
      challenges: "Compliance dengan standar keamanan data medis (HIPAA)",
      results: "15,000+ konsultasi online dalam 6 bulan pertama",
      features: [
        "Doctor appointment booking",
        "Video consultation",
        "Medical records management",
        "Prescription tracking",
        "Health articles & tips",
        "Emergency contact system"
      ]
    },
  ];

  const project = allProjects.find((p) => p.id === parseInt(id || ""));
  
  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Project tidak ditemukan</h1>
          <Button asChild>
            <Link to="/portfolio">Kembali ke Portfolio</Link>
          </Button>
        </div>
      </div>
    );
  }

  const relatedProjects = allProjects
    .filter((p) => p.category === project.category && p.id !== project.id)
    .slice(0, 2);

  return (
    <div className="min-h-screen">
      <Navbar />
      <WhatsAppButton />

      {/* Hero Section */}
      <section className="pt-32 pb-12 px-4 bg-gradient-subtle">
        <div className="container mx-auto">
          <FadeIn>
            <Button variant="ghost" asChild className="mb-6">
              <Link to="/portfolio">
                <ArrowLeft className="mr-2 h-4 w-4" />
                {t("detail.backToPortfolio")}
              </Link>
            </Button>
          </FadeIn>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <FadeIn>
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="rounded-xl overflow-hidden shadow-elegant"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-[400px] object-cover"
                />
              </motion.div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/20">
                {project.category}
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                {project.title}
              </h1>
              <p className="text-xl text-muted-foreground mb-6">
                {project.description}
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-primary" />
                  <div>
                    <p className="text-sm text-muted-foreground">Client</p>
                    <p className="font-semibold">{project.client}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-primary" />
                  <div>
                    <p className="text-sm text-muted-foreground">Durasi</p>
                    <p className="font-semibold">{project.duration}</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <Badge key={tag} variant="outline">
                    {tag}
                  </Badge>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="grid gap-12">
            <FadeIn>
              <div>
                <h2 className="text-3xl font-bold mb-4">{t("detail.overview")}</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {project.fullDescription}
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <div>
                <h2 className="text-3xl font-bold mb-6">{t("detail.features")}</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {project.features.map((feature, index) => (
                    <motion.div
                      key={feature}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start gap-3 p-4 rounded-lg bg-card border border-border hover:shadow-card transition-shadow"
                    >
                      <Award className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="grid md:grid-cols-2 gap-8">
                <Card className="p-6 border-border">
                  <h3 className="text-xl font-bold mb-3">{t("detail.challenges")}</h3>
                  <p className="text-muted-foreground">{project.challenges}</p>
                </Card>
                <Card className="p-6 border-border bg-gradient-primary text-white">
                  <h3 className="text-xl font-bold mb-3">{t("detail.results")}</h3>
                  <p>{project.results}</p>
                </Card>
              </div>
            </FadeIn>
              </div>
            </div>

            {/* Sidebar - Related Projects */}
            {relatedProjects.length > 0 && (
              <div className="lg:col-span-1">
                <div className="sticky top-24">
                  <FadeIn>
                    <h2 className="text-2xl font-bold mb-6">
                      {t("detail.related")}
                    </h2>
                  </FadeIn>
                  
                  <div className="grid gap-6">
                  {relatedProjects.map((relatedProject, index) => (
                    <ScaleIn key={relatedProject.id} delay={index * 0.1}>
                      <Link to={`/portfolio/${relatedProject.id}`}>
                        <motion.div
                          whileHover={{ y: -5 }}
                          transition={{ duration: 0.3 }}
                        >
                          <Card className="group overflow-hidden hover:shadow-hover transition-all duration-300 flex flex-col h-full">
                            <div className="relative overflow-hidden h-40">
                              <motion.img
                                src={relatedProject.image}
                                alt={relatedProject.title}
                                className="w-full h-full object-cover"
                                whileHover={{ scale: 1.1 }}
                                transition={{ duration: 0.5 }}
                              />
                              <motion.div 
                                className="absolute inset-0 bg-gradient-primary flex items-center justify-center"
                                initial={{ opacity: 0 }}
                                whileHover={{ opacity: 0.9 }}
                                transition={{ duration: 0.3 }}
                              >
                                <ExternalLink className="h-8 w-8 text-white" />
                              </motion.div>
                            </div>
                            <CardContent className="pt-4 flex-grow">
                              <Badge className="mb-2 bg-primary/10 text-primary hover:bg-primary/20 text-xs">
                                {relatedProject.category}
                              </Badge>
                              <h3 className="font-semibold text-lg mb-2 line-clamp-2">
                                {relatedProject.title}
                              </h3>
                              <p className="text-xs text-muted-foreground line-clamp-2">
                                {relatedProject.description}
                              </p>
                            </CardContent>
                            <CardFooter className="pt-0">
                              <div className="flex flex-wrap gap-1">
                                {relatedProject.tags.slice(0, 2).map((tag) => (
                                  <Badge key={tag} variant="outline" className="text-xs">
                                    {tag}
                                  </Badge>
                                ))}
                              </div>
                            </CardFooter>
                          </Card>
                        </motion.div>
                      </Link>
                    </ScaleIn>
                  ))}
                  </div>
                  
                  <div className="mt-6">
                    <Button variant="outline" className="w-full" asChild>
                      <Link to="/portfolio">{t("detail.viewMore")}</Link>
                    </Button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Tertarik dengan Project Serupa?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Mari diskusikan kebutuhan project Anda dengan tim kami
            </p>
            <Button size="lg" variant="hero" asChild>
              <Link to="/contact">Konsultasi Gratis</Link>
            </Button>
          </FadeIn>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PortfolioDetail;
