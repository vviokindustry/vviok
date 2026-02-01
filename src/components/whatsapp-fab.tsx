'use client';

import { WhatsappIcon } from '@/components/icons';
import { cn } from '@/lib/utils';
import { useEffect, useState } from 'react';

export function WhatsAppFab() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show button after a short delay for a nice entrance
    const timer = setTimeout(() => setIsVisible(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  const whatsappNumber = '919106472588';
  const message = encodeURIComponent('Hi VVIOK Industry, I am interested in your products and would like to learn more.');
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        'fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-2xl transition-all duration-300 hover:scale-110 hover:bg-[#128C7E] focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2 md:bottom-8 md:right-8',
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
      )}
      aria-label="Contact us on WhatsApp"
    >
      <WhatsappIcon className="h-8 w-8 fill-current" />
      <span className="absolute right-full mr-3 hidden whitespace-nowrap rounded-md bg-white px-3 py-1.5 text-sm font-bold text-slate-900 shadow-lg md:group-hover:block">
        Inquire on WhatsApp
      </span>
      {/* Pulse effect */}
      <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-[#25D366] opacity-25"></span>
    </a>
  );
}
