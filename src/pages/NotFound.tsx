import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();
  const { t } = useLanguage();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-muted">
      <div className="text-center px-6">
        <h1 className="mb-4 text-7xl font-bold text-primary">404</h1>
        <h2 className="mb-4 text-2xl font-semibold">{t("404.title")}</h2>
        <p className="mb-8 text-muted-foreground">{t("404.subtitle")}</p>
        <Button asChild>
          <Link to="/">
            {t("404.link")}
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
