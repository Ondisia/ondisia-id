import { createContext, useContext, useState, ReactNode } from "react";

type Language = "id" | "en";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  id: {
    // Navbar
    "nav.home": "Beranda",
    "nav.about": "Tentang",
    "nav.services": "Layanan",
    "nav.portfolio": "Portfolio",
    "nav.contact": "Kontak",
    
    // Home Page
    "home.hero.title": "Wujudkan Website dan Aplikasi Impian Anda",
    "home.hero.subtitle": "Kami membantu bisnis Anda berkembang dengan solusi digital terbaik. Website profesional, aplikasi modern, dan desain yang memukau.",
    "home.hero.cta1": "Mulai Project",
    "home.hero.cta2": "Lihat Portfolio",
    "home.stats.clients": "Klien Puas",
    "home.stats.projects": "Project Selesai",
    "home.stats.rate": "Success Rate",
    "home.features.title": "Layanan Kami",
    "home.features.subtitle": "Solusi lengkap untuk kebutuhan digital Anda",
    "home.features.web": "Web Development",
    "home.features.webDesc": "Website modern dan responsif dengan teknologi terkini",
    "home.features.mobile": "Mobile App",
    "home.features.mobileDesc": "Aplikasi mobile untuk iOS dan Android yang powerful",
    "home.features.design": "UI/UX Design",
    "home.features.designDesc": "Desain interface yang menarik dan user-friendly",
    "home.features.performance": "Performance",
    "home.features.performanceDesc": "Optimasi performa maksimal untuk pengalaman terbaik",
    "home.cta.title": "Siap Memulai Project Anda?",
    "home.cta.subtitle": "Konsultasikan kebutuhan digital Anda dengan tim expert kami",
    "home.cta.button": "Hubungi Kami Sekarang",
    
    // About Page
    "about.title": "Tentang Ondisia",
    "about.subtitle": "Kami adalah tim profesional yang berdedikasi untuk menciptakan solusi digital berkualitas tinggi untuk bisnis Anda",
    "about.story.title": "Cerita Kami",
    "about.story.p1": "Ondisia didirikan dengan visi untuk membantu bisnis Indonesia bertransformasi secara digital. Kami percaya bahwa setiap bisnis, baik besar maupun kecil, berhak mendapatkan solusi teknologi terbaik.",
    "about.story.p2": "Dengan tim yang terdiri dari developer, designer, dan konsultan berpengalaman, kami telah membantu ratusan klien mewujudkan visi digital mereka.",
    "about.story.p3": "Kami tidak hanya membuat website atau aplikasi - kami membangun solusi yang memberikan nilai nyata untuk bisnis Anda.",
    "about.values.title": "Nilai Kami",
    "about.values.subtitle": "Prinsip yang memandu setiap project yang kami kerjakan",
    "about.values.mission": "Misi Kami",
    "about.values.missionDesc": "Memberikan solusi digital terbaik yang membantu bisnis berkembang dan mencapai target mereka.",
    "about.values.vision": "Visi Kami",
    "about.values.visionDesc": "Menjadi partner teknologi terpercaya untuk transformasi digital di Indonesia.",
    "about.values.commitment": "Komitmen Kami",
    "about.values.commitmentDesc": "Kualitas tinggi, komunikasi transparan, dan kepuasan klien adalah prioritas utama.",
    "about.why.title": "Mengapa Memilih Kami?",
    "about.why.experience": "Tahun Pengalaman",
    "about.why.team": "Tim Expert",
    "about.why.support": "Support",
    "about.why.satisfaction": "Satisfaction",
    
    // Services Page
    "services.title": "Layanan Kami",
    "services.subtitle": "Solusi digital lengkap untuk membantu bisnis Anda berkembang dan mencapai kesuksesan",
    "services.web.title": "Web Development",
    "services.web.desc": "Pembuatan website profesional dengan teknologi terkini seperti React, Vue.js, dan Next.js",
    "services.mobile.title": "Mobile App Development",
    "services.mobile.desc": "Aplikasi mobile native dan cross-platform untuk iOS dan Android",
    "services.design.title": "UI/UX Design",
    "services.design.desc": "Desain interface yang menarik, modern, dan user-friendly",
    "services.backend.title": "Backend Development",
    "services.backend.desc": "Sistem backend yang robust, scalable, dan aman",
    "services.cloud.title": "Cloud Solutions",
    "services.cloud.desc": "Deployment dan management aplikasi di cloud platform",
    "services.maintenance.title": "Maintenance & Support",
    "services.maintenance.desc": "Layanan maintenance dan support untuk aplikasi Anda",
    "services.seo.title": "SEO Optimization",
    "services.seo.desc": "Optimasi website untuk mesin pencari dan performa terbaik",
    "services.consulting.title": "Konsultasi IT",
    "services.consulting.desc": "Konsultasi dan strategi teknologi untuk bisnis Anda",
    "services.process.title": "Proses Kerja Kami",
    "services.process.subtitle": "Metodologi yang terstruktur untuk hasil yang optimal",
    "services.process.step1": "Konsultasi",
    "services.process.step1Desc": "Diskusi kebutuhan dan scope project",
    "services.process.step2": "Planning",
    "services.process.step2Desc": "Perencanaan detail dan timeline",
    "services.process.step3": "Development",
    "services.process.step3Desc": "Pengembangan dan testing",
    "services.process.step4": "Launch",
    "services.process.step4Desc": "Deployment dan handover",
    "services.cta.title": "Siap Memulai Project Anda?",
    "services.cta.subtitle": "Konsultasikan kebutuhan digital Anda dengan tim expert kami",
    "services.cta.button": "Konsultasi Gratis",
    
    // Contact Page
    "contact.title": "Hubungi Kami",
    "contact.subtitle": "Mari diskusikan project Anda dan bagaimana kami bisa membantu",
    "contact.info.title": "Informasi Kontak",
    "contact.info.subtitle": "Jangan ragu untuk menghubungi kami. Tim kami siap membantu menjawab pertanyaan dan memberikan konsultasi gratis untuk project Anda.",
    "contact.info.email": "Email",
    "contact.info.phone": "Telepon",
    "contact.info.address": "Alamat",
    "contact.hours.title": "Jam Operasional",
    "contact.hours.weekday": "Senin - Jumat",
    "contact.hours.saturday": "Sabtu",
    "contact.hours.sunday": "Minggu",
    "contact.hours.closed": "Tutup",
    "contact.form.title": "Kirim Pesan",
    "contact.form.name": "Nama Lengkap",
    "contact.form.email": "Email",
    "contact.form.phone": "Nomor Telepon",
    "contact.form.service": "Layanan yang Diminati",
    "contact.form.servicePlaceholder": "Contoh: Web Development, Mobile App, dll",
    "contact.form.message": "Pesan",
    "contact.form.messagePlaceholder": "Ceritakan tentang project Anda...",
    "contact.form.submit": "Kirim Pesan",
    "contact.form.success": "Terima kasih! Kami akan segera menghubungi Anda.",
    
    // Portfolio Page
    "portfolio.title": "Portfolio Kami",
    "portfolio.subtitle": "Lihat berbagai project yang telah kami selesaikan dengan hasil yang membanggakan",
    "portfolio.filter.all": "Semua",
    "portfolio.filter.web": "Web Development",
    "portfolio.filter.mobile": "Mobile App",
    "portfolio.cta.title": "Tertarik dengan Project Kami?",
    "portfolio.cta.subtitle": "Mari diskusikan bagaimana kami bisa membantu mewujudkan project Anda",
    
    // Portfolio Detail
    "detail.overview": "Overview",
    "detail.features": "Fitur Utama",
    "detail.challenges": "Tantangan",
    "detail.results": "Hasil",
    "detail.related": "Portfolio Sejenis",
    "detail.viewMore": "Lihat Portfolio Lainnya",
    "detail.backToPortfolio": "Kembali ke Portfolio",
    
    // Common
    "common.loading": "Memuat...",
    "common.previous": "Sebelumnya",
    "common.next": "Selanjutnya",
  },
  en: {
    // Navbar
    "nav.home": "Home",
    "nav.about": "About",
    "nav.services": "Services",
    "nav.portfolio": "Portfolio",
    "nav.contact": "Contact",
    
    // Home Page
    "home.hero.title": "Bring Your Dream Website & App to Life",
    "home.hero.subtitle": "We help your business grow with the best digital solutions. Professional websites, modern applications, and stunning designs.",
    "home.hero.cta1": "Start Project",
    "home.hero.cta2": "View Portfolio",
    "home.stats.clients": "Happy Clients",
    "home.stats.projects": "Projects Completed",
    "home.stats.rate": "Success Rate",
    "home.features.title": "Our Services",
    "home.features.subtitle": "Complete solutions for your digital needs",
    "home.features.web": "Web Development",
    "home.features.webDesc": "Modern and responsive websites with cutting-edge technology",
    "home.features.mobile": "Mobile App",
    "home.features.mobileDesc": "Powerful mobile applications for iOS and Android",
    "home.features.design": "UI/UX Design",
    "home.features.designDesc": "Attractive and user-friendly interface design",
    "home.features.performance": "Performance",
    "home.features.performanceDesc": "Maximum performance optimization for the best experience",
    "home.cta.title": "Ready to Start Your Project?",
    "home.cta.subtitle": "Consult your digital needs with our expert team",
    "home.cta.button": "Contact Us Now",
    
    // About Page
    "about.title": "About Ondisia",
    "about.subtitle": "We are a professional team dedicated to creating high-quality digital solutions for your business",
    "about.story.title": "Our Story",
    "about.story.p1": "Ondisia was founded with the vision to help Indonesian businesses transform digitally. We believe that every business, large or small, deserves the best technology solutions.",
    "about.story.p2": "With a team of experienced developers, designers, and consultants, we have helped hundreds of clients realize their digital vision.",
    "about.story.p3": "We don't just build websites or apps - we build solutions that provide real value to your business.",
    "about.values.title": "Our Values",
    "about.values.subtitle": "Principles that guide every project we work on",
    "about.values.mission": "Our Mission",
    "about.values.missionDesc": "Provide the best digital solutions that help businesses grow and achieve their goals.",
    "about.values.vision": "Our Vision",
    "about.values.visionDesc": "To be a trusted technology partner for digital transformation in Indonesia.",
    "about.values.commitment": "Our Commitment",
    "about.values.commitmentDesc": "High quality, transparent communication, and client satisfaction are our top priorities.",
    "about.why.title": "Why Choose Us?",
    "about.why.experience": "Years of Experience",
    "about.why.team": "Expert Team",
    "about.why.support": "Support",
    "about.why.satisfaction": "Satisfaction",
    
    // Services Page
    "services.title": "Our Services",
    "services.subtitle": "Complete digital solutions to help your business grow and achieve success",
    "services.web.title": "Web Development",
    "services.web.desc": "Professional website development with cutting-edge technologies like React, Vue.js, and Next.js",
    "services.mobile.title": "Mobile App Development",
    "services.mobile.desc": "Native and cross-platform mobile applications for iOS and Android",
    "services.design.title": "UI/UX Design",
    "services.design.desc": "Attractive, modern, and user-friendly interface design",
    "services.backend.title": "Backend Development",
    "services.backend.desc": "Robust, scalable, and secure backend systems",
    "services.cloud.title": "Cloud Solutions",
    "services.cloud.desc": "Application deployment and management on cloud platforms",
    "services.maintenance.title": "Maintenance & Support",
    "services.maintenance.desc": "Maintenance and support services for your applications",
    "services.seo.title": "SEO Optimization",
    "services.seo.desc": "Website optimization for search engines and best performance",
    "services.consulting.title": "IT Consulting",
    "services.consulting.desc": "Technology consultation and strategy for your business",
    "services.process.title": "Our Work Process",
    "services.process.subtitle": "Structured methodology for optimal results",
    "services.process.step1": "Consultation",
    "services.process.step1Desc": "Discuss needs and project scope",
    "services.process.step2": "Planning",
    "services.process.step2Desc": "Detailed planning and timeline",
    "services.process.step3": "Development",
    "services.process.step3Desc": "Development and testing",
    "services.process.step4": "Launch",
    "services.process.step4Desc": "Deployment and handover",
    "services.cta.title": "Ready to Start Your Project?",
    "services.cta.subtitle": "Consult your digital needs with our expert team",
    "services.cta.button": "Free Consultation",
    
    // Contact Page
    "contact.title": "Contact Us",
    "contact.subtitle": "Let's discuss your project and how we can help",
    "contact.info.title": "Contact Information",
    "contact.info.subtitle": "Don't hesitate to contact us. Our team is ready to help answer questions and provide free consultation for your project.",
    "contact.info.email": "Email",
    "contact.info.phone": "Phone",
    "contact.info.address": "Address",
    "contact.hours.title": "Office Hours",
    "contact.hours.weekday": "Monday - Friday",
    "contact.hours.saturday": "Saturday",
    "contact.hours.sunday": "Sunday",
    "contact.hours.closed": "Closed",
    "contact.form.title": "Send Message",
    "contact.form.name": "Full Name",
    "contact.form.email": "Email",
    "contact.form.phone": "Phone Number",
    "contact.form.service": "Service of Interest",
    "contact.form.servicePlaceholder": "Example: Web Development, Mobile App, etc",
    "contact.form.message": "Message",
    "contact.form.messagePlaceholder": "Tell us about your project...",
    "contact.form.submit": "Send Message",
    "contact.form.success": "Thank you! We will contact you soon.",
    
    // Portfolio Page
    "portfolio.title": "Our Portfolio",
    "portfolio.subtitle": "Explore our completed projects with outstanding results",
    "portfolio.filter.all": "All",
    "portfolio.filter.web": "Web Development",
    "portfolio.filter.mobile": "Mobile App",
    "portfolio.cta.title": "Interested in Our Projects?",
    "portfolio.cta.subtitle": "Let's discuss how we can help bring your project to life",
    
    // Portfolio Detail
    "detail.overview": "Overview",
    "detail.features": "Key Features",
    "detail.challenges": "Challenges",
    "detail.results": "Results",
    "detail.related": "Related Projects",
    "detail.viewMore": "View All Portfolio",
    "detail.backToPortfolio": "Back to Portfolio",
    
    // Common
    "common.loading": "Loading...",
    "common.previous": "Previous",
    "common.next": "Next",
  },
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>("id");

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.id] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return context;
};
