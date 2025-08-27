import { MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface WhatsAppButtonProps {
  text?: string;
  variant?: 'default' | 'floating';
  className?: string;
}

export const WhatsAppButton = ({ 
  text = "WhatsApp", 
  variant = 'default',
  className = '' 
}: WhatsAppButtonProps) => {
  const phoneNumber = "919848925249";
  const message = "Hello! I'm interested in your Vasthu consultation services.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  if (variant === 'floating') {
    return (
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={`fixed bottom-6 right-6 z-50 animate-float ${className}`}
        aria-label="Contact via WhatsApp"
      >
        <div className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-elevated hover:shadow-golden transition-all duration-300 hover:scale-110">
          <MessageCircle className="h-6 w-6" />
        </div>
      </a>
    );
  }

  return (
    <Button
      asChild
      className={`btn-golden ${className}`}
    >
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2"
      >
        <MessageCircle className="h-5 w-5" />
        {text}
      </a>
    </Button>
  );
};