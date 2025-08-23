import React from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppWidget: React.FC = () => {
  const openWhatsApp = () => {
    const phoneNumber = '1234567890'; // Replace with your WhatsApp business number
    const message = 'Hi! I would like to know more about your software consulting services.';
    const whatsappUrl = `https://wa.me/${+919007105455}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <button
      onClick={openWhatsApp}
      className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-200 z-40 animate-pulse"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={24} />
      
    </button>
  );
};

export default WhatsAppWidget;