
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

// New direct link for the Google Drive icon
const NEW_ICON_URL = "https://drive.google.com/uc?export=view&id=18FDh4yH--rrRWfa6X6k1_6yk90gR2OD-";

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
    icon: NEW_ICON_URL,
    shortcut: NEW_ICON_URL,
    apple: NEW_ICON_URL,
  },
};

// Global Schema Definitions
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "VVIOK Industry",
  "url": "https://www.vviokindustry.in",
  "logo": "https://www.vviokindustry.in/uploads/Vviok%20industry%20logo.png",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+91-91064-72588",
    "contactType": "customer service",
    "areaServed": "IN",
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
  "name": "VVIOK Industry",
  "image": "https://www.vviokindustry.in/uploads/Vviok%20industry%20logo.png",
  "@id": "https://www.vviokindustry.in",
  "url": "https://www.vviokindustry.in",
  "telephone": "+91-91064-72588",
  "priceRange": "$$",
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
    "dayOfWeek": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ],
    "opens": "09:00",
    "closes": "19:00"
  },
  "sameAs": [
    "https://www.facebook.com/p/VVIOK-Industry-61566349642536/",
    "https://www.instagram.com/vviok.industry",
    "https://x.com/VviokIndustry",
    "https://www.linkedin.com/company/vviok-industry-industrial-filtration-stainless-steel-equipment-manufacturer"
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn('scroll-smooth', inter.variable, ptSans.variable)} suppressHydrationWarning>
      <head>
        {/* Force custom icon from Google Drive and override any other favicons */}
        <link rel="icon" href={NEW_ICON_URL} sizes="any" />
        <link rel="apple-touch-icon" href={NEW_ICON_URL} />
        <link rel="shortcut icon" href={NEW_ICON_URL} />

        {/* Global Schemas */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />

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

        <link rel="dns-prefetch" href="https://drive.google.com" />
        <link rel="preconnect" href="https://drive.google.com" crossOrigin="anonymous" />
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
