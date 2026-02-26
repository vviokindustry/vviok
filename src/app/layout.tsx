import type { Metadata } from 'next';
import './globals.css';
import { cn } from '@/lib/utils';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Toaster } from '@/components/ui/toaster';
import { WhatsAppFab } from '@/components/whatsapp-fab';

export const metadata: Metadata = {
  title: 'VVIOK Industry - Filtration Products Manufacturer & Exporter',
  description:
    'VVIOK Industry is a leading manufacturer, supplier, and exporter of high-quality industrial filtration products in India, serving a global market.',
  icons: {
    icon: [
      { url: '/uploads/vviok%20industry%20icon.png?v=10', type: 'image/png' },
    ],
    shortcut: ['/uploads/vviok%20industry%20icon.png?v=10'],
    apple: [
      { url: '/uploads/vviok%20industry%20icon.png?v=10', sizes: '180x180', type: 'image/png' },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        {/* Force favicon override with manual link tags and cache-busting */}
        <link rel="icon" href="/uploads/vviok%20industry%20icon.png?v=10" type="image/png" sizes="any" />
        <link rel="shortcut icon" href="/uploads/vviok%20industry%20icon.png?v=10" type="image/png" />
        <link rel="apple-touch-icon" href="/uploads/vviok%20industry%20icon.png?v=10" />
        
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=PT+Sans:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={cn('font-body antialiased')} suppressHydrationWarning>
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
        <Toaster />
        <WhatsAppFab />
      </body>
    </html>
  );
}
