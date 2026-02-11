import { MessageCircle, Send } from "lucide-react";

const WhatsAppButton = () => {
  const phoneNumber = "6282229062398";
  const telegramUsername = "bLack_Domon";
  const message = "Halo Ondisia, saya tertarik untuk konsultasi mengenai pembuatan website/aplikasi.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  const telegramUrl = `https://t.me/${telegramUsername}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 group">
      {/* Popup Options */}
      <div className="absolute bottom-full right-0 pb-4 flex flex-col gap-3 opacity-0 translate-y-4 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-300 w-full min-w-[150px]">
        <a
          href={telegramUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-3 bg-[#0088cc] hover:bg-[#0099e6] text-white px-5 py-3 rounded-full shadow-lg transition-all hover:scale-105"
        >
          <Send className="h-5 w-5" />
          <span className="font-semibold text-sm">Telegram</span>
        </a>
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-3 bg-[#25d366] hover:bg-[#2ae06d] text-white px-5 py-3 rounded-full shadow-lg transition-all hover:scale-105"
        >
          <MessageCircle className="h-5 w-5" />
          <span className="font-semibold text-sm">WhatsApp</span>
        </a>
      </div>

      {/* Main Button */}
      <button
        className="bg-[#e7e7e7] hover:bg-[#ffffff] text-black rounded-full px-6 py-4 shadow-glow hover:scale-105 transition-all duration-300 flex items-center gap-2 group-hover:shadow-elegant relative z-10"
      >
        <MessageCircle className="h-6 w-6" />
        <span className="font-semibold text-sm">Chat Me</span>
      </button>
    </div>
  );
};

export default WhatsAppButton;
