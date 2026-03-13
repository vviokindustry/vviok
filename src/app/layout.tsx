import type { Metadata } from 'next';
import './globals.css';
import { cn } from '@/lib/utils';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Toaster } from '@/components/ui/toaster';
import { WhatsAppFab } from '@/components/whatsapp-fab';
import Script from 'next/script';
import { Inter, PT_Sans } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const ptSans = PT_Sans({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-pt-sans',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.vviokindustry.in'),
  title: 'VVIOK Industry - Filtration Products Manufacturer & Exporter',
  description:
    'VVIOK Industry is a leading manufacturer, supplier, and exporter of high-quality industrial filtration products in India, serving a global market.',
  verification: {
    google: 'nscCigG5Ub7D8EXkDWr9OIDvsp3X90AepDixohVRwYU',
  },
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: [
      { url: '/uploads/vviokicon.png?v=4', type: 'image/png' },
    ],
    shortcut: '/uploads/vviokicon.png?v=4',
    apple: [
      { url: '/uploads/vviokicon.png?v=4', sizes: '180x180', type: 'image/png' },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn('scroll-smooth', inter.variable, ptSans.variable)} suppressHydrationWarning>
      <head>
        {/* Google Analytics Tag */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-GC26EJYP10"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-GC26EJYP10');
          `}
        </Script>

        {/* Resource Pre-loading for Performance */}
        <link rel="dns-prefetch" href="https://drive.google.com" />
        <link rel="preconnect" href="https://drive.google.com" crossOrigin="anonymous" />
        
        {/* Force favicon override with manual link tags and cache-busting */}
        <link rel="icon" href="/uploads/vviokicon.png?v=4" type="image/png" sizes="any" />
        <link rel="shortcut icon" href="/uploads/vviokicon.png?v=4" type="image/png" />
        <link rel="apple-touch-icon" href="/uploads/vviokicon.png?v=4" />
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
