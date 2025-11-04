
import React from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppButton: React.FC = () => {
  return (
    <div className="fixed bottom-6 right-6 z-40 group">
      <a
        href="https://wa.me/674772569"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-14 h-14 bg-green-500 rounded-full shadow-lg transform transition-transform duration-300 hover:scale-110"
        aria-label="Chat with us on WhatsApp"
      >
        <MessageCircle size={32} className="text-white animate-pulse" />
      </a>
      <div className="absolute bottom-1/2 transform translate-y-1/2 right-full mr-3 px-3 py-1.5 bg-gray-800 text-white text-sm rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
        Chat with us on WhatsApp
        <div className="absolute right-[-4px] bottom-1/2 transform translate-y-1/2 w-2 h-2 bg-gray-800 rotate-45"></div>
      </div>
    </div>
  );
};

export default WhatsAppButton;
