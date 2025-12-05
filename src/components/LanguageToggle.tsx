import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "./ui/button";
import { Globe } from "lucide-react";

const LanguageToggle = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={() => setLanguage(language === "id" ? "en" : "id")}
      className="gap-2"
    >
      <Globe className="h-4 w-4" />
      <span className="text-sm font-medium">{language === "id" ? "EN" : "ID"}</span>
    </Button>
  );
};

export default LanguageToggle;
