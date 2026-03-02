export const WHATSAPP_NUMBER = "919658659119";
export const CLINIC_NAME = "PhysioElite";
export const CLINIC_PHONE = "+91 96586 59119";
export const CLINIC_EMAIL = "info@physioelite.com";
export const CLINIC_ADDRESS = "123 Healthcare Avenue, Medical District, City 400001";

export const whatsappLink = (message: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

export const WHATSAPP_DEFAULT = whatsappLink("Hello, I would like to book a session.");
