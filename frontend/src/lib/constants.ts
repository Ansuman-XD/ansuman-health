export const WHATSAPP_NUMBER = "919658659119";
export const CLINIC_NAME = "Dr.Physiotherapy Clinic";
export const CLINIC_PHONE = "+91 96586 59119";
export const CLINIC_EMAIL = "sukantamoharana0@gmail.com";
export const CLINIC_ADDRESS = "Sahadevkhunta, Near Bhaskarganj Fandi, Balasore - 756001, Odisha";

export const whatsappLink = (message: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

export const WHATSAPP_DEFAULT = whatsappLink("Hello, I would like to book a session.");
