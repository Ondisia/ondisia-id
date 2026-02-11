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
import projectEcommerce from "@/assets/startflow.png";
import projectCorporate from "@/assets/umkm.png";
import projectMobileBanking from "@/assets/nusantara.png";
import projectLms from "@/assets/edu.png";
import projectFoodDelivery from "@/assets/company.png";
import projectHealthcare from "@/assets/book.png";
import projectRealEstate from "@/assets/event.png";
import projectFitness from "@/assets/biztrack.png";
import projectSaas from "@/assets/eta.png";
import projectTravel from "@/assets/warga.png";
import projectSmartHome from "@/assets/kursus.png";
import projectLogistics from "@/assets/kapa.png";

const PortfolioDetail = () => {
  const { id } = useParams();
  const { t } = useLanguage();

  const allProjects = [
    {
      id: 1,
      title: t("portfolio.project1.title"),
      description: t("portfolio.project1.desc"),
      fullDescription: "StartFlow adalah platform akselerator startup yang dirancang untuk membantu pengusaha baru mengelola dan mengembangkan bisnis mereka dengan lebih efisien. Platform ini menyediakan alat kolaborasi, pelacakan KPI, dan manajemen tugas yang disesuaikan untuk kebutuhan startup tahap awal.",
      image: projectEcommerce,
      tags: ["React", "Tailwind", "Vite"],
      category: "Web Development",
      client: "StartFlow Global",
      duration: "3 bulan",
      year: "2024",
      challenges: "Membangun antarmuka yang intuitif untuk manajemen data yang kompleks.",
      results: "Membantu 50+ startup meningkatkan efisiensi operasional sebesar 40%.",
      features: [
        "Dashboard Analytics",
        "Task Management",
        "KPI Tracking",
        "Investor CRM",
        "Resource Library",
        "Community Hub"
      ],
      demoUrl: "https://start-flow-scale-your-startup-faste.vercel.app/"
    },
    {
      id: 2,
      title: t("portfolio.project2.title"),
      description: t("portfolio.project2.desc"),
      fullDescription: "UMK-M Mart adalah marketplace inovatif yang menghubungkan pelaku UMKM dengan pasar yang lebih luas. Platform ini tidak hanya berfungsi sebagai tempat berjualan, tetapi juga sebagai pusat pendampingan digital bagi para pelaku usaha mikro.",
      image: projectCorporate,
      tags: ["React", "Firebase", "Tailwind"],
      category: "Web Development",
      client: "Aliansi UMKM Indonesia",
      duration: "4 bulan",
      year: "2024",
      challenges: "Integrasi sistem pembayaran lokal dan manajemen logistik untuk daerah terpencil.",
      results: "Meningkatkan pendapatan mitra UMKM rata-rata 65% dalam 6 bulan.",
      features: [
        "Product Showcase",
        "Order Management",
        "Payment Gateway Integration",
        "Seller Dashboard",
        "Customer Review System",
        "Mobile Responsive"
      ],
      demoUrl: "https://umk-mmart-global-standard-msme-mark.vercel.app/"
    },
    {
      id: 3,
      title: t("portfolio.project3.title"),
      description: t("portfolio.project3.desc"),
      fullDescription: "Visit Nusantara adalah portal pariwisata yang bertujuan untuk memperkenalkan keindahan Indonesia kepada dunia. Melalui platform ini, wisatawan dapat menemukan destinasi tersembunyi, merencanakan perjalanan, dan memesan pemandu lokal.",
      image: projectMobileBanking,
      tags: ["React", "Lucide", "Vite"],
      category: "Web Development",
      client: "Tourism Board",
      duration: "2 bulan",
      year: "2024",
      challenges: "Menampilkan konten multimedia berkualitas tinggi dengan performa loading yang cepat.",
      results: "Meningkatkan kunjungan wisatawan ke destinasi binaan sebesar 30%.",
      features: [
        "Interactive Destination Maps",
        "Local Guide Booking",
        "Travel Itinerary Planner",
        "Event Calendar",
        "Multi-language Support",
        "Virtual Tours"
      ],
      demoUrl: "https://visit-nusantara-sooty.vercel.app/"
    },
    {
      id: 4,
      title: t("portfolio.project4.title"),
      description: t("portfolio.project4.desc"),
      fullDescription: "EduForm adalah sistem manajemen data pendidikan berbasis Cloud yang memudahkan institusi dalam mengelola formulir pendaftaran, evaluasi, dan database siswa secara real-time.",
      image: projectLms,
      tags: ["React", "Tailwind", "Vite"],
      category: "Web Development",
      client: "EduTech Solusindo",
      duration: "3 bulan",
      year: "2024",
      challenges: "Menjamin keamanan data sensitif siswa dan integrasi antar modul.",
      results: "Mengurangi waktu pemrosesan administrasi sebesar 75%.",
      features: [
        "Custom Form Builder",
        "Real-time Data Entry",
        "Automated Reporting",
        "User Access Control",
        "Email Notifications",
        "CSV/PDF Export"
      ],
      demoUrl: "https://eduform.vercel.app/"
    },
    {
      id: 5,
      title: t("portfolio.project5.title"),
      description: t("portfolio.project5.desc"),
      fullDescription: "StartFlow PSI merupakan versi enterprise dari platform StartFlow, difokuskan pada sinkronisasi data antar departemen dan optimasi alur kerja untuk perusahaan rintisan yang sedang berkembang pesat.",
      image: projectFoodDelivery,
      tags: ["React", "Tailwind", "Framer Motion"],
      category: "Web Development",
      client: "PSI Venture",
      duration: "5 bulan",
      year: "2024",
      challenges: "Sinkronisasi data real-time antar ribuan pengguna aktif.",
      results: "Optimasi alur kerja tim meningkat hingga 50%.",
      features: [
        "Advanced Workflow Automation",
        "Inter-departmental Sync",
        "Predictive Analytics",
        "Custom Branding",
        "SLA Monitoring",
        "API Integration"
      ],
      demoUrl: "https://startflow-psi.vercel.app/"
    },
    {
      id: 6,
      title: t("portfolio.project6.title"),
      description: t("portfolio.project6.desc"),
      fullDescription: "BookEase adalah solusi pemesanan yang dapat disesuaikan untuk berbagai jenis bisnis, mulai dari salon hingga klinik, memungkinkan pelanggan melakukan reservasi kapan saja dan di mana saja.",
      image: projectHealthcare,
      tags: ["React", "Shadcn UI", "Tailwind"],
      category: "Web Development",
      client: "Service Hub ID",
      duration: "3 bulan",
      year: "2024",
      challenges: "Manajemen jadwal yang kompleks dan pencegahan double booking.",
      results: "Meningkatkan jumlah reservasi online sebesar 80%.",
      features: [
        "Real-time Scheduling",
        "Staff Management",
        "Customer Reminders",
        "Service Catalog",
        "Payment on Booking",
        "Mobile App Sync"
      ],
      demoUrl: "https://bookease-jade.vercel.app/"
    },
    {
      id: 7,
      title: t("portfolio.project7.title"),
      description: t("portfolio.project7.desc"),
      fullDescription: "Aplikasi mobile yang memberikan informasi lengkap tentang berbagai acara, konser, dan festival. Memungkinkan pengguna untuk mendapatkan tiket dan notifikasi terbaru langsung di ponsel mereka.",
      image: projectRealEstate,
      tags: ["React Native", "Expo", "Firebase"],
      category: "Mobile App",
      client: "Event Organizer Corp",
      duration: "4 bulan",
      year: "2024",
      challenges: "Handling lonjakan pengguna saat pembukaan penjualan tiket.",
      results: "50rb+ pengguna aktif dalam sebulan pertama.",
      features: ["Push Notifications", "E-Ticket Wallet", "Social Sharing", "Event Maps", "Rating System"],
      demoUrl: "https://event-info-blond.vercel.app/"
    },
    {
      id: 8,
      title: t("portfolio.project8.title"),
      description: t("portfolio.project8.desc"),
      fullDescription: "BizTrack membantu pemilik bisnis memantau inventaris, penjualan, dan kinerja tim di lapangan melalui satu aplikasi yang terintegrasi.",
      image: projectFitness,
      tags: ["React Native", "Redux", "API"],
      category: "Mobile App",
      client: "Retail Monitoring Solusi",
      duration: "4 bulan",
      year: "2024",
      challenges: "Offline data synchronization untuk area dengan sinyal lemah.",
      results: "Akurasi data inventaris meningkat menjadi 99%.",
      features: ["Real-time Tracking", "Inventory Management", "Sales Reports", "Team Attendance", "Cloud Sync"],
      demoUrl: "https://biztrack-phi.vercel.app/"
    },
    {
      id: 9,
      title: t("portfolio.project9.title"),
      description: t("portfolio.project9.desc"),
      fullDescription: "Pusat informasi dan layanan digital untuk UMKM, menyediakan materi edukasi, akses pasar, dan alat manajemen usaha sederhana dalam genggaman.",
      image: projectSaas,
      tags: ["React Native", "NativeWind", "Supabase"],
      category: "Mobile App",
      client: "Dinas Koperasi & UMKM",
      duration: "5 bulan",
      year: "2024",
      challenges: "Memastikan aplikasi tetap ringan untuk HP spesifikasi rendah.",
      results: "Mendampingi 1000+ pelaku UMKM dalam digitalisasi.",
      features: ["Learning Module", "Marketplace Access", "Financial Tracker", "Community Chat", "Official News"],
      demoUrl: "https://umkm-eta.vercel.app/"
    },
    {
      id: 10,
      title: t("portfolio.project10.title"),
      description: t("portfolio.project10.desc"),
      fullDescription: "Platform pengaduan warga untuk meningkatkan komunikasi antara masyarakat dan pemerintah setempat demi pelayanan publik yang lebih baik.",
      image: projectTravel,
      tags: ["React Native", "Expo", "Maps"],
      category: "Mobile App",
      client: "Smart City Initiative",
      duration: "6 bulan",
      year: "2024",
      challenges: "Verifikasi lokasi laporan secara akurat dan real-time.",
      results: "Waktu respon pemerintah meningkat 60% lebih cepat.",
      features: ["Geotagging Reports", "Status Tracking", "Emergency Button", "Direct Feedback", "AI Categorization"],
      demoUrl: "https://lapor-warga-nine.vercel.app/"
    },
    {
      id: 11,
      title: t("portfolio.project11.title"),
      description: t("portfolio.project11.desc"),
      fullDescription: "Aplikasi pembelajaran mobile yang menawarkan kursus video interaktif dan kuis untuk meningkatkan skill profesional pengguna.",
      image: projectSmartHome,
      tags: ["React Native", "Context API", "Vite"],
      category: "Mobile App",
      client: "Global Learning Inc",
      duration: "5 bulan",
      year: "2024",
      challenges: "Streaming video berkualitas tinggi dengan bandwidth rendah.",
      results: "Rating 4.9 di Play Store dengan 100rb+ download.",
      features: ["Offline Video", "Interactive Quizzes", "Skill Certificates", "Progress Roadmap", "Download Manager"],
      demoUrl: "https://course-lesson.vercel.app/"
    },
    {
      id: 12,
      title: t("portfolio.project12.title"),
      description: t("portfolio.project12.desc"),
      fullDescription: "Sistem reservasi pintar untuk menghindari kerumunan, memungkinkan pengguna membooking waktu kunjungan mereka di mall, taman, atau kantor.",
      image: projectLogistics,
      tags: ["React Native", "Expo", "Shadcn"],
      category: "Mobile App",
      client: "Property Management ID",
      duration: "3 bulan",
      year: "2024",
      challenges: "Menghitung kapasitas area secara dinamis.",
      results: "Mengurangi waktu tunggu antrean hingga 70%.",
      features: ["QR Code Entry", "Capacity Monitoring", "Smart Reminders", "Waitlist System", "Review Place"],
      demoUrl: "https://smartbooking-kappa.vercel.app/"
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
                className="rounded-xl overflow-hidden shadow-elegant bg-white"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className={`w-full h-[400px] ${project.category === "Web Development" ? "object-cover" : "object-contain object-bottom"}`}
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

              <div className="flex flex-wrap items-center gap-4 mb-8">
                {project.demoUrl && (
                  <Button asChild size="lg" className="gap-2">
                    <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4" />
                      Live Demo
                    </a>
                  </Button>
                )}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="outline">
                      {tag}
                    </Badge>
                  ))}
                </div>
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
                            <div className="relative overflow-hidden h-40 bg-white">
                              <motion.img
                                src={relatedProject.image}
                                alt={relatedProject.title}
                                className={`w-full h-full ${relatedProject.category === "Web Development" ? "object-cover" : "object-contain object-bottom"}`}
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
