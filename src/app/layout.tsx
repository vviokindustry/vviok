
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

const ICON_URL = "/uploads/favicon.png";

export const metadata: Metadata = {
  metadataBase: new URL('https://www.vviokindustry.in'),
  title: 'VVIOK Industry | Global Industrial Filtration & SS Equipment Manufacturer',
  description:
    'VVIOK Industry is India\'s trusted manufacturer of industrial filtration products, specializing in SS housings, cartridges, and pressure vessels for global markets since 2021.',
  verification: {
    google: 'nscCigG5Ub7D8EXkDWr9OIDvsp3X90AepDixohVRwYU',
  },
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: ICON_URL,
    shortcut: ICON_URL,
    apple: ICON_URL,
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "VVIOK Industry",
  "url": "https://www.vviokindustry.in",
  "logo": "https://www.vviokindustry.in/uploads/Vviok%20industry%20logo.png",
  "description": "Premier manufacturer and global exporter of high-precision industrial filtration solutions, including stainless steel filter housings, micro-filtration cartridges, and ASME pressure vessels.",
  "knowsAbout": [
    "Industrial Micro-Filtration Engineering",
    "Stainless Steel Pressure Vessel Manufacturing",
    "Sterile Air Venting Technology",
    "Chemical Resistant Filter Housing",
    "High-Flow Bag Filtration Systems"
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+91-91064-72588",
    "contactType": "technical support",
    "areaServed": "Global",
    "availableLanguage": ["en", "hi", "gu"]
  },
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "45, Pushkar Cottage, Near Ramol Toll Plaza",
    "addressLocality": "Ahmedabad",
    "addressRegion": "Gujarat",
    "postalCode": "382415",
    "addressCountry": "IN"
  },
  "sameAs": [
    "https://www.facebook.com/p/VVIOK-Industry-61566349642536/",
    "https://www.instagram.com/vviok.industry",
    "https://x.com/VviokIndustry",
    "https://www.linkedin.com/company/vviok-industry-industrial-filtration-stainless-steel-equipment-manufacturer"
  ]
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "VVIOK Industry Ahmedabad",
  "image": "https://www.vviokindustry.in/uploads/Vviok%20industry%20logo.png",
  "@id": "https://www.vviokindustry.in",
  "url": "https://www.vviokindustry.in",
  "telephone": "+91-91064-72588",
  "priceRange": "$$$",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "45, Pushkar Cottage, Near Ramol Toll Plaza",
    "addressLocality": "Ahmedabad",
    "addressRegion": "Gujarat",
    "postalCode": "382415",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 22.9806,
    "longitude": 72.6738
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    "opens": "09:00",
    "closes": "19:00"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn('scroll-smooth', inter.variable, ptSans.variable)} suppressHydrationWarning>
      <head>
        <link rel="icon" href={ICON_URL} />
        <link rel="apple-touch-icon" href={ICON_URL} />
        <meta name="p:domain_verify" content="58896636f0e0d8da3b4e4a8924d46e37"/>
        <meta name="msvalidate.01" content="D75D8D4F6BB6203BE66B57E666DCF429" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
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
