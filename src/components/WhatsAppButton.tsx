import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const whatsappNumber = "6282229062398"; // Replace with actual number
  const message = "Halo Ondisia, saya tertarik untuk konsultasi mengenai pembuatan website/aplikasi.";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#e7e7e7] hover:bg-[#ffffff] text-dark rounded-full p-4 shadow-glow hover:scale-110 transition-all duration-300 animate-float group"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="h-6 w-6" />
      <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-card text-foreground px-3 py-1.5 rounded-lg text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity shadow-card border border-border">
        Chat via WhatsApp
      </span>
    </a>
  );
};

export default WhatsAppButton;
