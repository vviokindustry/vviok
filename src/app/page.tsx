
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight,
  Settings,
  Database,
  Container,
  Mountain,
  Lightbulb,
  Award,
  HelpCircle,
  ShieldCheck,
  CheckCircle,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { productCategories, industries, whyChooseUs } from '@/lib/data';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Global Leader in Industrial Filtration Products | VVIOK Industry India',
  description: 'VVIOK Industry is a premier manufacturer and exporter of industrial filter housings, cartridges, and pressure vessels in Ahmedabad, India. Engineering excellence for global markets.',
  keywords: 'top industrial filtration manufacturer india, filter cartridge supplier ahmedabad, ss pressure vessel manufacturer, industrial filter housing exporter, vviok industry ahmedabad',
};

const companyFaqs = [
  {
    question: "What technical parameters do you consider when designing a filtration system?",
    answer: "We analyze critical factors including service temperature, operating pressure, fluid viscosity, flow rate requirements, and chemical compatibility. Our team ensures that every housing and cartridge is engineered to handle the specific micron rating and dirt-holding capacity your process demands, ensuring 100% bypass-free filtration."
  },
  {
    question: "Are your industrial vessels and housings ASME compliant?",
    answer: "Yes, we design and manufacture our stainless steel housings and pressure vessels in accordance with international standards, including ASME and CE guidelines. Every unit undergoes rigorous in-house hydro-testing and quality verification to guarantee structural integrity and safety in demanding industrial environments."
  },
  {
    question: "Which industries trust VVIOK Industry for their filtration needs?",
    answer: "Our global clientele spans the Pharmaceutical, Chemical, Food & Beverage, Water Treatment, and Oil & Gas sectors. We provide specialized solutions like sterile vent filters for pharma and high-pressure duplex strainers for refinery operations, ensuring operational excellence across all major manufacturing fields."
  },
  {
    question: "Do you provide international shipping and documentation?",
    answer: "Absolutely. As a leading exporter, we deliver to over 18 countries including the Middle East, Southeast Asia, and Europe. We handle all logistics, sea-worthy packaging, and provide complete documentation such as Material Test Certificates (MTC) and pressure test reports for smooth customs clearance."
  },
  {
    question: "Can I get a custom-engineered filtration solution for my plant?",
    answer: "Customization is our core strength. Whether you need a unique multi-bag housing configuration or specialized sintered powder cartridges, our senior engineering team collaborates with you to develop a bespoke system that optimizes your plant's performance and longevity."
  }
];

export default function Home() {
  const heroImage = PlaceHolderImages.find((img) => img.id === 'hero-background');
  const cat1Img = PlaceHolderImages.find(img => img.id === 'product-pp-spun-1');
  const cat2Img = PlaceHolderImages.find(img => img.id === 'product-cartridge-housing-1');
  const cat3Img = PlaceHolderImages.find(img => img.id === 'product-strainer-housing-1');
  const cat4Img = PlaceHolderImages.find(img => img.id === 'product-purified-water-tank');
  const expertiseImage = PlaceHolderImages.find((img) => img.id === 'product-custom-filter');

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": companyFaqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <div className="flex flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero Section */}
      <section className="relative min-h-[700px] w-full flex flex-col justify-center items-center text-center text-white overflow-hidden px-4">
        {heroImage && (
          <div className="absolute inset-0 z-0">
            <Image
              src={heroImage.imageUrl}
              alt="Industrial Filtration Excellence"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black/50" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-900/30" />
          </div>
        )}

        <div className="relative z-10 max-w-5xl mx-auto">
          <h1 className="font-headline text-4xl md:text-6xl lg:text-8xl font-black uppercase tracking-tighter leading-[0.9] mb-8">
            Top Industrial <span className="text-[#a5be1d]">Filtration Products</span> Manufacturer in India
          </h1>
          <p className="text-xl md:text-2xl text-slate-100 font-bold max-w-3xl mx-auto mb-12 uppercase tracking-widest leading-relaxed">
            India's Premier Manufacturer of SS Housings, Cartridges & Pressure Vessels. Trusted Globally Since 2021.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button asChild size="lg" className="bg-[#a5be1d] hover:bg-[#94ab1a] text-white font-black uppercase tracking-widest rounded-2xl px-12 h-20 shadow-2xl">
              <Link href="/products">View Catalog</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="bg-white/5 hover:bg-white/10 text-white border-white/30 backdrop-blur-xl font-black uppercase tracking-widest rounded-2xl px-12 h-20">
              <Link href="/contact">Get Expert Quote</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Expanded Introduction for GEO */}
      <section className="py-24 md:py-40 bg-white">
        <div className="container text-center max-w-6xl mx-auto px-4">
          <h2 className="font-headline text-3xl md:text-5xl lg:text-6xl font-black text-slate-900 mb-12 uppercase tracking-tighter">
            Global Hub for <span className="text-[#a5be1d]">Industrial Micro-Filtration</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-16 text-left">
            <div className="space-y-6">
              <p className="text-lg text-slate-600 font-medium leading-relaxed">
                VVIOK Industry stands at the forefront of industrial filtration engineering in Ahmedabad, India. We specialize in the design and manufacture of high-precision stainless steel equipment, ranging from sophisticated cartridge housings to heavy-duty pressure vessels. Our commitment to excellence is reflected in our ISO 9001:2015 certification and our strict adherence to ASME fabrication codes.
              </p>
              <p className="text-lg text-slate-600 font-medium leading-relaxed">
                With a focus on innovation and reliability, we provide total filtration solutions to pharmaceutical, chemical, and food processing giants across 18 countries. Our engineering team, possessing over two decades of specialized knowledge, works tirelessly to solve complex challenges in fluid clarification and sterile gas venting.
              </p>
            </div>
            <div className="space-y-6">
              <p className="text-lg text-slate-600 font-medium leading-relaxed">
                We utilize premium SS 304, 316, and 316L grades to ensure our products withstand the most aggressive industrial environments. Our state-of-the-art facility is equipped for high-precision welding, mirror-polishing, and rigorous hydro-testing. We don't just sell products; we deliver engineering integrity that protects your downstream assets and optimizes operational yield.
              </p>
              <div className="pt-6 text-white">
                <Button asChild variant="link" className="text-primary font-black uppercase tracking-widest p-0 text-base">
                  <Link href="/about">Learn More About Our Journey <ArrowRight className="ml-2 h-5 w-5" /></Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Engineering Superiority Section Updated */}
      <section className="py-24 bg-slate-950 text-white overflow-hidden">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-10">
              <h2 className="font-headline text-3xl md:text-5xl lg:text-6xl font-black uppercase tracking-tighter leading-tight text-primary">
                Engineering Superiority in Filtration
              </h2>
              <div className="space-y-8 text-lg font-medium leading-relaxed">
                <p className="text-white">
                  Our manufacturing excellence is forged in state-of-the-art facilities where precision craftsmanship meets advanced technology. We prioritize the structural integrity of every weld, ensuring that our housings and vessels perform flawlessly under extreme industrial pressures.
                </p>
                <p className="text-white">
                  From raw material sourcing of premium SS 316L to final dimensional verification, every step of our process is strictly monitored under our ISO quality management system. We understand that in critical processes like pharmaceutical manufacturing or chemical synthesis, even the smallest bypass can lead to significant losses.
                </p>
                <p className="text-white">
                  VVIOK Industry is not just a supplier; we are your technical partner in fluid clarification. We provide comprehensive documentation, including MTC and pressure test certifications, ensuring total transparency and trust for our global partners.
                </p>
              </div>
            </div>
            <div className="relative aspect-square lg:h-[700px] rounded-[4rem] overflow-hidden border-8 border-slate-900 shadow-[0_0_50px_rgba(165,190,29,0.2)]">
               {expertiseImage && (
                  <Image 
                    src={expertiseImage.imageUrl} 
                    alt="High-Precision Industrial Filtration System" 
                    fill 
                    className="object-cover"
                  />
               )}
               <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-white">
        <div className="container max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-headline text-3xl md:text-5xl font-black text-slate-900 uppercase tracking-tighter">
              Expert Insights: <span className="text-primary">FAQ</span>
            </h2>
            <p className="mt-6 text-slate-500 font-medium text-lg">Detailed technical answers from our senior engineering team.</p>
          </div>

          <div className="bg-slate-50 p-10 md:p-16 rounded-[4rem] border-2 border-slate-100 shadow-xl">
            <Accordion type="single" collapsible className="w-full">
              {companyFaqs.map((faq, index) => (
                <AccordionItem key={index} value={`company-faq-${index}`} className="border-b border-slate-200 last:border-0 py-4">
                  <AccordionTrigger className="text-left font-black tracking-tight text-slate-900 hover:text-primary transition-colors py-4 text-base md:text-xl">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-600 text-lg leading-relaxed font-medium pb-8">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>
    </div>
  );
}
