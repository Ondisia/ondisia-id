import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { FadeIn, ScaleIn } from "@/components/AnimatedText";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import PortfolioSkeleton from "@/components/PortfolioSkeleton";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
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

const Portfolio = () => {
  const { t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const itemsPerPage = 6;

  useEffect(() => {
    // Simulate loading
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(timer);
  }, [selectedCategory, currentPage]);

  const projects = [
    {
      id: 1,
      title: t("portfolio.project1.title"),
      description: t("portfolio.project1.desc"),
      image: projectEcommerce,
      tags: ["React", "Node.js", "MongoDB"],
      category: "Web Development",
    },
    {
      id: 2,
      title: t("portfolio.project2.title"),
      description: t("portfolio.project2.desc"),
      image: projectCorporate,
      tags: ["WordPress", "PHP", "MySQL"],
      category: "Web Development",
    },
    {
      id: 3,
      title: t("portfolio.project3.title"),
      description: t("portfolio.project3.desc"),
      image: projectMobileBanking,
      tags: ["React Native", "Firebase", "API"],
      category: "Mobile App",
    },
    {
      id: 4,
      title: t("portfolio.project4.title"),
      description: t("portfolio.project4.desc"),
      image: projectLms,
      tags: ["Vue.js", "Laravel", "PostgreSQL"],
      category: "Web Development",
    },
    {
      id: 5,
      title: t("portfolio.project5.title"),
      description: t("portfolio.project5.desc"),
      image: projectFoodDelivery,
      tags: ["Flutter", "Firebase", "Google Maps"],
      category: "Mobile App",
    },
    {
      id: 6,
      title: t("portfolio.project6.title"),
      description: t("portfolio.project6.desc"),
      image: projectHealthcare,
      tags: ["Next.js", "Express", "MongoDB"],
      category: "Web Development",
    },
    {
      id: 7,
      title: t("portfolio.project7.title"),
      description: t("portfolio.project7.desc"),
      image: projectRealEstate,
      tags: ["Next.js", "Tailwind", "Supabase"],
      category: "Web Development",
    },
    {
      id: 8,
      title: t("portfolio.project8.title"),
      description: t("portfolio.project8.desc"),
      image: projectFitness,
      tags: ["React Native", "HealthKit", "Firebase"],
      category: "Mobile App",
    },
    {
      id: 9,
      title: t("portfolio.project9.title"),
      description: t("portfolio.project9.desc"),
      image: projectSaas,
      tags: ["React", "D3.js", "Tailwind"],
      category: "Web Development",
    },
    {
      id: 10,
      title: t("portfolio.project10.title"),
      description: t("portfolio.project10.desc"),
      image: projectTravel,
      tags: ["Vue.js", "Python", "AWS"],
      category: "Web Development",
    },
    {
      id: 11,
      title: t("portfolio.project11.title"),
      description: t("portfolio.project11.desc"),
      image: projectSmartHome,
      tags: ["Flutter", "MQTT", "Node.js"],
      category: "Mobile App",
    },
    {
      id: 12,
      title: t("portfolio.project12.title"),
      description: t("portfolio.project12.desc"),
      image: projectLogistics,
      tags: ["React", "Go", "PostgreSQL"],
      category: "Web Development",
    },
  ];

  const categories = ["all", "Web Development", "Mobile App"];
  
  const filteredProjects = selectedCategory === "all" 
    ? projects 
    : projects.filter(p => p.category === selectedCategory);

  const totalPages = Math.ceil(filteredProjects.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedProjects = filteredProjects.slice(startIndex, startIndex + itemsPerPage);

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <WhatsAppButton />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 bg-gradient-subtle">
        <div className="container mx-auto text-center">
          <FadeIn>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {t("portfolio.title")}
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {t("portfolio.subtitle")}
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 px-6 bg-card/50">
        <div className="container mx-auto">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => handleCategoryChange(category)}
                className="capitalize"
              >
                {category === "all" 
                  ? t("portfolio.filter.all")
                  : category === "Web Development"
                  ? t("portfolio.filter.web")
                  : t("portfolio.filter.mobile")}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {loading ? (
              <PortfolioSkeleton />
            ) : (
              paginatedProjects.map((project, index) => (
                <ScaleIn key={project.id} delay={index * 0.1}>
                  <Link to={`/portfolio/${project.id}`}>
                    <motion.div
                      whileHover={{ y: -10 }}
                      transition={{ duration: 0.3 }}
                      className="h-full"
                    >
                      <Card className="group overflow-hidden hover:shadow-hover transition-all duration-500 cursor-pointer flex flex-col h-full">
                        <div className="relative overflow-hidden h-56 flex-shrink-0">
                          <motion.img
                            src={project.image}
                            alt={project.title}
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
                            <ExternalLink className="h-12 w-12 text-white" />
                          </motion.div>
                        </div>
                        <CardContent className="pt-6 flex-grow flex flex-col">
                          <Badge className="mb-3 bg-primary/10 text-primary hover:bg-primary/20 w-fit">
                            {project.category}
                          </Badge>
                          <h3 className="font-semibold text-xl mb-2">{project.title}</h3>
                          <p className="text-sm text-muted-foreground mb-4 flex-grow">
                            {project.description}
                          </p>
                        </CardContent>
                        <CardFooter className="pt-0 mt-auto">
                          <div className="flex flex-wrap gap-2">
                            {project.tags.map((tag) => (
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
              ))
            )}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-end">
              <Pagination>
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious
                      onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                      className={currentPage === 1 ? "pointer-events-none opacity-50" : "cursor-pointer"}
                    />
                  </PaginationItem>
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                    <PaginationItem key={page}>
                      <PaginationLink
                        onClick={() => setCurrentPage(page)}
                        isActive={currentPage === page}
                        className="cursor-pointer"
                      >
                        {page}
                      </PaginationLink>
                    </PaginationItem>
                  ))}
                  <PaginationItem>
                    <PaginationNext
                      onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                      className={currentPage === totalPages ? "pointer-events-none opacity-50" : "cursor-pointer"}
                    />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-card">
        <div className="container mx-auto text-center">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t("portfolio.cta.title")}
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              {t("portfolio.cta.subtitle")}
            </p>
          </FadeIn>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Portfolio;
