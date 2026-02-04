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
import projectEcommerce from "@/assets/ecomerce.jpg";
import projectCorporate from "@/assets/project-corporate.png";
import projectMobileBanking from "@/assets/project-mobile-banking.jpg";
import projectLms from "@/assets/project-lms.jpg";
import projectFoodDelivery from "@/assets/project-food-delivery.jpg";
import projectHealthcare from "@/assets/project-healthcare.jpg";
import projectRealEstate from "@/assets/project-real-estate.jpg";
import projectFitness from "@/assets/project-fitness.jpg";
import projectSaas from "@/assets/project-saas.jpg";
import projectTravel from "@/assets/project-travel.jpg";
import projectSmartHome from "@/assets/project-smart-home.jpg";
import projectLogistics from "@/assets/project-logistics.jpg";

const PortfolioDetail = () => {
  const { id } = useParams();
  const { t } = useLanguage();

  const allProjects = [
    {
      id: 1,
      title: t("portfolio.project1.title"),
      description: t("portfolio.project1.desc"),
      fullDescription: "Platform e-commerce modern yang dibangun dengan teknologi terkini. Sistem ini dilengkapi dengan payment gateway terintegrasi, inventory management real-time, dashboard analytics komprehensif, dan sistem notifikasi otomatis. Mendukung multiple payment methods dan multi-currency.",
      image: projectEcommerce,
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
      title: t("portfolio.project2.title"),
      description: t("portfolio.project2.desc"),
      fullDescription: "Website corporate yang elegant dan profesional dengan CMS custom yang memudahkan tim untuk mengelola konten secara mandiri. Dilengkapi dengan blog system, gallery management, dan contact form terintegrasi.",
      image: projectCorporate,
      tags: ["WordPress", "PHP", "MySQL"],
      category: "Web Development",
      client: "ABC Corporation",
      duration: "2 bulan",
      year: "2024",
      challenges: "Migrasi dari sistem lama tanpa downtime",
      results: "Load time 3x lebih cepat and user engagement meningkat 55%",
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
      title: t("portfolio.project3.title"),
      description: t("portfolio.project3.desc"),
      fullDescription: "Aplikasi mobile banking yang aman dan user-friendly dengan berbagai fitur lengkap. Dilengkapi dengan enkripsi end-to-end, biometric authentication, dan real-time transaction monitoring.",
      image: projectMobileBanking,
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
      title: t("portfolio.project4.title"),
      description: t("portfolio.project4.desc"),
      fullDescription: "LMS komprehensif untuk institusi pendidikan dengan fitur video streaming HD, quiz interaktif, assignment tracking, dan reporting system yang detail untuk monitoring progress siswa.",
      image: projectLms,
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
      title: t("portfolio.project5.title"),
      description: t("portfolio.project5.desc"),
      fullDescription: "Aplikasi food delivery yang menghubungkan restaurant, driver, dan customer dalam satu platform terintegrasi. Dilengkapi dengan real-time GPS tracking, multiple payment options, dan rating system.",
      image: projectFoodDelivery,
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
      title: t("portfolio.project6.title"),
      description: t("portfolio.project6.desc"),
      fullDescription: "Portal kesehatan digital yang memudahkan pasien untuk booking appointment, konsultasi online, dan akses medical records. Dilengkapi dengan video consultation dan prescription management.",
      image: projectHealthcare,
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
    {
      id: 7,
      title: t("portfolio.project7.title"),
      description: t("portfolio.project7.desc"),
      fullDescription: "Platform pencarian properti yang memudahkan pengguna mencari rumah atau apartemen impian. Dilengkapi dengan tur virtual 360, kalkulator KPR, dan chat langsung dengan agen.",
      image: projectRealEstate,
      tags: ["Next.js", "Tailwind", "Supabase"],
      category: "Web Development",
      client: "Estate Global",
      duration: "3 bulan",
      year: "2024",
      challenges: "Implementasi tur virtual dan manajemen database properti yang besar",
      results: "Digunakan oleh 50+ agen properti ternama",
      features: ["360 Virtual Tour", "Mortgage Calculator", "Direct Agent Chat", "Advanced Filters"]
    },
    {
      id: 8,
      title: t("portfolio.project8.title"),
      description: t("portfolio.project8.desc"),
      fullDescription: "Aplikasi kebugaran yang membantu pengguna melacak aktivitas olahraga, asupan kalori, dan progres kesehatan secara real-time.",
      image: projectFitness,
      tags: ["React Native", "HealthKit", "Firebase"],
      category: "Mobile App",
      client: "FitLife Studio",
      duration: "4 bulan",
      year: "2024",
      challenges: "Sinkronisasi data dengan wearable devices",
      results: "Meningkatkan retensi member gym sebesar 30%",
      features: ["Workout Tracking", "Calorie Counter", "Progress Charts", "Social Challenges"]
    },
    {
      id: 9,
      title: t("portfolio.project9.title"),
      description: t("portfolio.project9.desc"),
      fullDescription: "Dashboard analitik canggih untuk perusahaan skala menengah hingga besar untuk memantau performa bisnis di berbagai departemen.",
      image: projectSaas,
      tags: ["React", "D3.js", "Tailwind"],
      category: "Web Development",
      client: "Logix Analytics",
      duration: "5 bulan",
      year: "2024",
      challenges: "Visualisasi data besar dengan performa tinggi",
      results: "Penghematan waktu pelaporan hingga 80%",
      features: ["Custom Dashboards", "Data Exporting", "Role-based Access", "Predictive Analytics"]
    },
    {
      id: 10,
      title: t("portfolio.project10.title"),
      description: t("portfolio.project10.desc"),
      fullDescription: "Sistem reservasi travel yang terintegrasi with berbagai provider penerbangan dan hotel di seluruh dunia.",
      image: projectTravel,
      tags: ["Vue.js", "Python", "AWS"],
      category: "Web Development",
      client: "TravelEase",
      duration: "6 bulan",
      year: "2023",
      challenges: "Integrasi API dengan ribuan provider secara stabil",
      results: "Memproses 1000+ booking setiap harinya",
      features: ["Flight Search", "Hotel Booking", "Payment Installments", "Booking Management"]
    },
    {
      id: 11,
      title: t("portfolio.project11.title"),
      description: t("portfolio.project11.desc"),
      fullDescription: "Aplikasi untuk mengontrol seluruh perangkat pintar di rumah dari satu tempat dengan tingkat keamanan yang tinggi.",
      image: projectSmartHome,
      tags: ["Flutter", "MQTT", "Node.js"],
      category: "Mobile App",
      client: "SmartHome Tech",
      duration: "5 bulan",
      year: "2023",
      challenges: "Latency rendah untuk kontrol real-time",
      results: "Rating 4.9 di App Store dan Play Store",
      features: ["Device Grouping", "Automated Scenes", "Energy Monitoring", "Security Alerts"]
    },
    {
      id: 12,
      title: t("portfolio.project12.title"),
      description: t("portfolio.project12.desc"),
      fullDescription: "Solusi end-to-end untuk perusahaan logistik dalam mengelola pengiriman, armada, dan inventaris secara efisien.",
      image: projectLogistics,
      tags: ["React", "Go", "PostgreSQL"],
      category: "Web Development",
      client: "FastLogistics ID",
      duration: "7 bulan",
      year: "2024",
      challenges: "Optimasi rute dan tracking GPS multi-armada",
      results: "Efisiensi pengiriman meningkat 25%",
      features: ["Fleet Tracking", "Order Management", "Route Optimization", "Inventory Sync"]
    },
  ];

  const project = allProjects.find((p) => p.id === parseInt(id || ""));
  
  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">{t("detail.notFound")}</h1>
          <Button asChild>
            <Link to="/portfolio">{t("detail.backToPortfolio")}</Link>
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
                    <p className="text-sm text-muted-foreground">{t("detail.client")}</p>
                    <p className="font-semibold">{project.client}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-primary" />
                  <div>
                    <p className="text-sm text-muted-foreground">{t("detail.duration")}</p>
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
              {t("detail.cta.title")}
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              {t("detail.cta.subtitle")}
            </p>
            <Button size="lg" variant="hero" asChild>
              <Link to="/contact">{t("nav.cta")}</Link>
            </Button>
          </FadeIn>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PortfolioDetail;
