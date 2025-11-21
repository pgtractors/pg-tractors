import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const phoneNumber = "919894428729"; // WhatsApp format: country code + number
  const message = encodeURIComponent("Hi, I would like to inquire about your services.");
  
  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-strong hover:scale-110 transition-transform duration-300"
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle className="h-6 w-6" />
    </a>
  );
};

export default WhatsAppButton;
