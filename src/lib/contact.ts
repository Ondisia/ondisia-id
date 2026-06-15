export const CONTACT = {
  whatsapp: "6285178962397",
  telegram: "bLack_Domon",
  email: "ondisia.id@gmail.com",
  phone: "+62 8222-9062-398",
  address: "Probolinggo, Jawa Timur, Indonesia",
};

export const waUrl = (message: string) =>
  `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(message)}`;

export const WA_DEFAULT_MSG =
  "Halo Ondisia, saya tertarik untuk konsultasi gratis mengenai layanan pembuatan website/aplikasi. Mohon informasinya lebih lanjut.";

export const WA_GENERAL_MSG =
  "Halo Ondisia, saya tertarik untuk konsultasi mengenai pembuatan website/aplikasi.";
