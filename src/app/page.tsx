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
  title: 'Top Industrial Filtration Products Manufacturer in Ahmedabad, India | Vviok Industry',
  description: 'Vviok Industry is India\'s trusted manufacturer of industrial filtration products in Ahmedabad. We specialize in high-quality filter cartridges, cartridge housings, and industrial strainers for global markets.',
  keywords: 'best industrial filtration products manufacturer, who is the leading filter housing supplier in india, filter cartridge manufacturer ahmedabad, custom industrial filtration solutions india, stainless steel water treatment equipment manufacturer',
};

const companyFaqs = [
  {
    question: "What types of industrial filtration products does VVIOK Industry manufacture?",
    answer: "VVIOK Industry specializes in a wide range of high-performance products including Filter Cartridges (PP Spun, Pleated, PTFE, SS Mesh, Sintered), Industrial Filter Housings (Bag, Cartridge, Duplex, Multi-bag, Vent), Industrial Strainers (Basket, Conical, Taper, Pleated), and Stainless Steel Storage Tanks & Pressure Vessels. Every product is engineered to manage high pressure and flow rates while ensuring 100% bypass-free filtration."
  },
  {
    question: "Does VVIOK Industry provide customized filtration solutions?",
    answer: "Yes, we provide total filtration solutions. Our expert engineering team, with over 20 years of experience, can design and manufacture bespoke systems tailored to your specific service temperature, pressure, flow rate, and fluid compatibility requirements. We collaborate closely with your technical team to ensure the system integrates perfectly into your existing process flow."
  },
  {
    question: "Are VVIOK Industry products compliant with international standards?",
    answer: "Absolutely. All our products are manufactured to meet high-quality engineering standards, including adherence to ASME and CE guidelines. We maintain rigorous in-house quality performance testing and ISO 9001:2015 compliant management systems. We also provide full documentation like material test certificates (MTC) and hydro-test reports for every vessel and housing we manufacture."
  },
  {
    question: "Which industries do you primarily serve?",
    answer: "We serve a diverse range of sectors globally, including Water Treatment, Chemical Processing, Pharmaceuticals, Food & Beverage, Oil & Gas, and General Manufacturing. Our products are specially designed to handle aggressive chemicals, sterile air requirements, and high-volume industrial fluid clarification."
  },
  {
    question: "How can I get a technical consultation or a quote?",
    answer: "You can reach out to us via our Contact page, email us at vviokindustry2021@gmail.com, or directly call/WhatsApp us at +91 91064 72588. Our technical team is ready to assist you by analyzing your specific industrial parameters and recommending the most efficient filtration solution for your needs."
  }
];

export default function Home() {
  const heroImage = PlaceHolderImages.find((img) => img.id === 'hero-background');
  const manufacturingImage = PlaceHolderImages.find((img) => img.id === 'about-us-manufacturing');

  // Specific images for category backgrounds
  const cat1Img = PlaceHolderImages.find(img => img.id === 'product-pp-spun-1');
  const cat2Img = PlaceHolderImages.find(img => img.id === 'product-cartridge-housing-1');
  const cat3Img = PlaceHolderImages.find(img => img.id === 'product-strainer-housing-1');
  const cat4Img = PlaceHolderImages.find(img => img.id === 'product-purified-water-tank');

  const pageTitle = "Industrial Filtration Products Manufacturer in Ahmedabad, India | Vviok Industry";

  // FAQ Schema for GEO optimization
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
      <section className="relative min-h-[600px] w-full flex flex-col justify-center items-center text-center text-white overflow-visible px-4">
        {/* Background Image */}
        {heroImage && (
          <div className="absolute inset-0 z-0">
            <Image
              src={heroImage.imageUrl}
              alt={pageTitle}
              fill
              sizes="(max-width: 768px) 100vw, 100vw"
              className="object-cover"
              priority
            />
            {/* Minimal Overlay for clarity */}
            <div className="absolute inset-0 bg-black/40" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent" />
          </div>
        )}

        {/* SEO H1 Header */}
        <div className="relative z-10 max-w-5xl mx-auto">
          <h1 className="font-headline text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-tighter leading-[0.95] mb-6">
            Top Industrial <span className="text-[#a5be1d]">Filtration Products</span> Manufacturer in India
          </h1>
          <p className="text-lg md:text-xl text-slate-200 font-bold max-w-2xl mx-auto mb-10 uppercase tracking-widest leading-relaxed">
            Engineering Excellence for Global Markets Since 2021. Specializing in SS Housing, Cartridges & Industrial Vessels.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-[#a5be1d] hover:bg-[#94ab1a] text-white font-black uppercase tracking-widest rounded-xl px-10 h-16 text-sm shadow-xl shadow-black/20">
              <Link href="/products">Explore Products</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="bg-white/10 hover:bg-white/20 text-white border-white/20 backdrop-blur-md font-black uppercase tracking-widest rounded-xl px-10 h-16 text-sm">
              <Link href="/contact">Inquire Now</Link>
            </Button>
          </div>
        </div>

        {/* Feature Boxes */}
        <div className="absolute bottom-0 left-0 w-full hidden lg:block translate-y-1/2 z-30">
          <div className="container grid grid-cols-3 px-0">
            <div className="bg-[#a5be1d] p-8 flex items-center gap-6 transition-transform hover:-translate-y-1 shadow-2xl">
              <Settings className="h-10 w-10 text-white shrink-0" />
              <div className="text-left">
                <h3 className="font-bold text-base uppercase leading-tight tracking-wide text-white">Industrial Housings</h3>
              </div>
            </div>
            <div className="bg-[#a5be1d] p-8 flex items-center gap-6 border-x border-white/10 opacity-95 transition-transform hover:-translate-y-1 shadow-2xl">
              <Database className="h-10 w-10 text-white shrink-0" />
              <div className="text-left">
                <h3 className="font-bold text-base uppercase leading-tight tracking-wide text-white">Filtration Cartridges</h3>
              </div>
            </div>
            <div className="bg-[#a5be1d] p-8 flex items-center gap-6 opacity-90 transition-transform hover:-translate-y-1 shadow-2xl">
              <Container className="h-10 w-10 text-white shrink-0" />
              <div className="text-left">
                <h3 className="font-bold text-base uppercase leading-tight tracking-wide text-white">Stainless Steel Tanks</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile Feature Boxes */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:hidden relative z-10">
        <div className="bg-[#a5be1d] p-6 flex items-center gap-4 text-white border-b border-white/10">
          <Settings className="h-8 w-8 shrink-0" />
          <h3 className="font-bold uppercase tracking-wide text-white text-sm">Industrial Housings</h3>
        </div>
        <div className="bg-[#a5be1d] p-6 flex items-center gap-4 text-white border-b border-white/10 opacity-95">
          <Database className="h-8 w-8 shrink-0" />
          <h3 className="font-bold uppercase tracking-wide text-white text-sm">Filtration Cartridges</h3>
        </div>
        <div className="bg-[#a5be1d] p-6 flex items-center gap-4 text-white opacity-90">
          <Container className="h-8 w-8 shrink-0" />
          <h3 className="font-bold uppercase tracking-wide text-white text-sm">Stainless Steel Tanks</h3>
        </div>
      </div>
      
      {/* Vision, Mission Section */}
      <section className="py-24 md:py-32 pt-32 md:pt-48 bg-background relative z-0">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 items-start">
            
            {/* Our Mission */}
            <div className="flex flex-col items-center text-center px-6 md:px-4 lg:px-10 mb-16 md:mb-0 relative group">
              <div className="relative mb-10 flex justify-center items-center">
                <div className="w-40 h-40 rounded-full border-[1.5px] border-slate-100 flex items-center justify-center relative">
                  <div className="absolute inset-0 rounded-full border-[5px] border-transparent border-t-[#0284c7] border-r-[#0284c7] border-b-[#0284c7] rotate-[45deg]"></div>
                  <Mountain className="w-16 h-16 text-[#0284c7]" />
                </div>
              </div>
              <h3 className="font-headline text-3xl md:text-3xl lg:text-4xl font-black uppercase tracking-tight mb-5 whitespace-nowrap">
                <span className="text-slate-900">OUR</span> <span className="text-[#0284c7]">MISSION</span>
              </h3>
              <p className="text-slate-400 text-base md:text-lg leading-relaxed max-w-sm mx-auto font-medium">
                To be the leading global provider of innovative, high-quality filtration solutions that improve efficiency and protect process integrity across all industrial sectors.
              </p>
              <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 h-24 w-[1px] bg-slate-100"></div>
            </div>

            {/* Our Vision */}
            <div className="flex flex-col items-center text-center px-6 md:px-4 lg:px-10 mb-16 md:mb-0 relative">
              <div className="relative mb-10 flex justify-center items-center">
                <div className="w-40 h-40 rounded-full border-[1.5px] border-slate-100 flex items-center justify-center relative">
                  <div className="absolute inset-0 rounded-full border-[5px] border-transparent border-t-[#a5be1d] border-b-[#a5be1d] rotate-[45deg]"></div>
                  <Lightbulb className="w-16 h-16 text-[#a5be1d]" />
                </div>
              </div>
              <h3 className="font-headline text-3xl md:text-3xl lg:text-4xl font-black uppercase tracking-tight mb-5 whitespace-nowrap">
                <span className="text-slate-900">OUR</span> <span className="text-[#a5be1d]">VISION</span>
              </h3>
              <p className="text-slate-400 text-base md:text-lg leading-relaxed max-w-sm mx-auto font-medium">
                To design, develop, and manufacture advanced filtration systems that meet the evolving needs of our global customers through engineering excellence and technical innovation.
              </p>
              <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 h-24 w-[1px] bg-slate-100"></div>
            </div>

            {/* Industries We Serve Card */}
            <div className="flex flex-col items-center text-center px-6 md:px-4 lg:px-10 relative">
              <div className="relative mb-10 flex justify-center items-center">
                <div className="w-40 h-40 rounded-full border-[1.5px] border-slate-100 flex items-center justify-center relative">
                  <div className="absolute inset-0 rounded-full border-[5px] border-transparent border-t-[#ffc107] border-b-[#ffc107] rotate-[45deg]"></div>
                  <Award className="w-16 h-16 text-[#ffc107]" />
                </div>
              </div>
              <h3 className="font-headline text-2xl md:text-2xl lg:text-3xl xl:text-4xl font-black uppercase tracking-tight mb-5 flex items-center gap-3 justify-center whitespace-nowrap">
                <span className="text-slate-900">INDUSTRIES</span> <span className="text-[#ffc107]">WE SERVE</span> <ArrowRight className="h-8 w-8 md:h-10 md:w-10 text-[#ffc107]" />
              </h3>
              <p className="text-slate-400 text-base md:text-lg leading-relaxed max-w-sm mx-auto font-medium">
                Providing specialized filtration solutions to meet the unique challenges of diverse industrial sectors globally with unwavering reliability and technical precision.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Welcome Section - Content Expansion for SEO */}
      <section className="py-20 md:py-24 bg-slate-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-headline text-3xl md:text-5xl font-black text-[#a5be1d] mb-10 uppercase tracking-tight">
            Expert Filtration Manufacturing Excellence
          </h2>
          <div className="max-w-5xl mx-auto space-y-8">
            <p className="text-slate-600 text-base md:text-lg leading-relaxed font-medium">
              VVIOK Industry stands as India's premier expert in industrial filtration solutions. Based in Ahmedabad, we engineer state-of-the-art 
              filter housings, cartridges, and storage tanks that strictly adhere to ASME and CE standards. Our systems are trusted by 
              pharmaceutical, chemical, and food processing leaders across the globe. We leverage a qualified team of engineers with 15-23 years of specialized experience to provide total filtration solutions to global markets.
            </p>
            <p className="text-slate-600 text-base md:text-lg leading-relaxed font-medium">
              Our commitment to quality transcends borders. International clients can expect products manufactured to global standards (ISO, CE), 
              third-party inspection services available upon request, full traceability of materials, and comprehensive after-sales technical support. 
              We prioritize long-term cost-efficiency in micron filtration, offering economical engineering solutions without compromising on performance. 
              Our media offers industry-leading reproducibility, ranging from Nominal to Absolute Beta 1000 ratings for critical applications.
            </p>
            <p className="text-slate-600 text-base md:text-lg leading-relaxed font-medium">
              We specialize in stainless steel equipment fabrication, ensuring that every weld and finish meets the highest hygiene and durability standards. Our product range includes high-pressure vessels, mixing tanks, and specialized air receiver tanks that are vital for modern manufacturing infrastructures. By combining advanced technology with traditional craftsmanship, we deliver products that outperform expectations in longevity and efficiency.
            </p>
          </div>
        </div>
      </section>

      {/* Product Categories Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-headline text-2xl md:text-4xl font-black text-slate-900 mb-4 uppercase tracking-tighter">
              Explore Our Core Product Entities
            </h2>
            <div className="w-16 h-1.5 bg-[#a5be1d] mx-auto rounded-full" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:auto-rows-[280px]">
            {/* 1. Filter Cartridge */}
            <div className="lg:col-span-2 lg:row-span-2 rounded-[3rem] bg-slate-950 p-10 md:p-14 flex flex-col justify-between group relative overflow-hidden text-white shadow-2xl">
              {cat1Img && (
                <div className="absolute inset-0 z-0 opacity-30 transition-transform duration-1000 group-hover:scale-110 blur-sm">
                  <Image src={cat1Img.imageUrl} alt="Filter Cartridge Manufacturer" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover grayscale" />
                </div>
              )}
              <div className="relative z-10">
                <span className="text-[#a5be1d] text-[10px] font-bold uppercase tracking-[0.3em] block mb-6">Master Solutions</span>
                <h3 className="text-4xl md:text-6xl font-black uppercase leading-[0.85] tracking-tighter">
                  Filter<br/><span className="text-[#a5be1d]">Cartridge</span>
                </h3>
                <p className="mt-8 text-slate-300 text-sm md:text-base max-w-xs font-medium leading-relaxed">Precision engineered for high-purity liquid and gas processing with absolute micron ratings and superior dirt-holding capacity.</p>
              </div>
              <Button asChild className="relative z-10 bg-[#a5be1d] hover:bg-[#94ab1a] text-white rounded-2xl px-10 h-14 font-black uppercase text-[11px] tracking-widest w-fit mt-10">
                <Link href={`/products/${productCategories[0].slug}`}>
                  Shop Now <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>

            {/* 2. Housing */}
            <div className="lg:col-span-2 rounded-[3rem] bg-[#a5be1d] p-10 flex flex-col justify-between group relative overflow-hidden text-white shadow-xl">
              {cat2Img && (
                <div className="absolute inset-0 z-0 opacity-40 transition-transform duration-1000 group-hover:scale-110 blur-[1px]">
                  <Image src={cat2Img.imageUrl} alt="Industrial Filter Housing Manufacturer" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
                </div>
              )}
              <div className="flex justify-between items-start relative z-10">
                <h3 className="text-3xl font-black uppercase tracking-tighter leading-none">
                  Industrial<br/>Housing
                </h3>
                <Database className="w-8 h-8 text-white opacity-40" />
              </div>
              <Link href={`/products/${productCategories[1].slug}`} className="relative z-10 text-white font-black uppercase text-xs tracking-[0.2em] flex items-center mt-6 group/link">
                Explore Collection <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/link:translate-x-2" />
              </Link>
            </div>

            {/* 3. Strainer - Yellow Theme */}
            <div className="rounded-[3rem] bg-[#ffc107] p-10 flex flex-col justify-between group relative overflow-hidden transition-all duration-500 shadow-xl text-slate-900">
              {cat3Img && (
                <div className="absolute inset-0 z-0 opacity-80 transition-transform duration-1000 group-hover:scale-110">
                  <Image src={cat3Img.imageUrl} alt="Industrial Strainer Filter Manufacturer" fill sizes="(max-width: 768px) 100vw, 25vw" className="object-cover" />
                </div>
              )}
              <h3 className="text-2xl font-black uppercase tracking-tighter leading-none relative z-10">
                Technical<br/>Strainer
              </h3>
              <Link href={`/products/${productCategories[2].slug}`} className="relative z-10 text-slate-900/60 font-black uppercase text-xs tracking-widest flex items-center group-hover:text-slate-900 transition-colors mt-6">
                View Details <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-2" />
              </Link>
            </div>

            {/* 4. Vessels - Green Theme */}
            <div className="rounded-[3rem] bg-[#a5be1d] p-10 flex flex-col justify-between group relative overflow-hidden transition-all duration-500 shadow-xl text-white">
              {cat4Img && (
                <div className="absolute inset-0 z-0 opacity-80 transition-transform duration-1000 group-hover:scale-110">
                  <Image src={cat4Img.imageUrl} alt="Industrial Vessels & Tanks Manufacturer" fill sizes="(max-width: 768px) 100vw, 25vw" className="object-cover" />
                </div>
              )}
              <h3 className="text-2xl font-black uppercase tracking-tighter leading-none relative z-10">
                Vessels<br/>& Tanks
              </h3>
              <Link href={`/products/${productCategories[3].slug}`} className="relative z-10 text-white/60 font-black uppercase text-xs tracking-widest flex items-center group-hover:text-white transition-colors mt-6">
                Configure <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Industrial Expertise Section - Expanded with White Text for Visibility */}
      <section className="py-24 bg-slate-950 text-slate-50 overflow-hidden">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="font-headline text-3xl md:text-5xl font-black uppercase tracking-tighter leading-tight text-[#a5be1d]">
                Engineering Superiority in Industrial Filtration
              </h2>
              <div className="space-y-6 text-slate-50 text-lg font-medium leading-relaxed">
                <p className="text-slate-50">
                  At VVIOK Industry, our engineering excellence is forged in our state-of-the-art manufacturing facilities and rigorous quality control protocols. We combine cutting-edge technology with expert craftsmanship to optimize precision, scalability, and efficiency. From raw material sourcing to final assembly, every step is meticulously controlled to produce filtration products that meet the highest standards of performance and reliability.
                </p>
                <p className="text-slate-50">
                  Our manufacturing infrastructure is designed to deliver reliability and precision. We adhere to stringent quality management systems to ensure that every filter and tank leaving our facility meets international performance standards, including ASME and CE Standard Compliance. We operate advanced in-house testing facilities to validate product performance against international standards, ensuring our products are ready for deployment in regulated industries worldwide.
                </p>
                <p className="text-slate-50">
                  We understand the critical nature of industrial processes, which is why we offer comprehensive technical support and consultation. Our engineers work directly with your team to solve complex filtration challenges, ensuring that your operations remain safe, efficient, and compliant with global environmental and safety standards.
                </p>
              </div>
              <div className="grid sm:grid-cols-2 gap-6 pt-8 border-t border-slate-800">
                <div className="flex items-start gap-4">
                  <ShieldCheck className="h-8 w-8 text-[#a5be1d] shrink-0" />
                  <div>
                    <h4 className="font-bold text-slate-50 uppercase tracking-wider text-sm mb-2">ISO 9001:2015</h4>
                    <p className="text-xs text-slate-200 font-medium">Certified Quality Management Systems for every manufacturing process and product line.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle className="h-8 w-8 text-[#a5be1d] shrink-0" />
                  <div>
                    <h4 className="font-bold text-slate-50 uppercase tracking-wider text-sm mb-2">ASME Standards</h4>
                    <p className="text-xs text-slate-200 font-medium">Compliance with international pressure vessel and housing standards for high-pressure safety.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative aspect-square lg:aspect-auto lg:h-[600px] rounded-[3rem] overflow-hidden border-4 border-slate-800 shadow-2xl">
               {manufacturingImage && (
                  <Image 
                    src={manufacturingImage.imageUrl} 
                    alt="Industrial Filtration Manufacturing Expertise" 
                    fill 
                    className="object-cover"
                    data-ai-hint="manufacturing plant"
                  />
               )}
               <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60" />
            </div>
          </div>
        </div>
      </section>

      {/* Industries Served */}
      <section className="py-20 bg-[#0f172a] text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-headline text-2xl md:text-3xl font-bold mb-4 flex items-center justify-center gap-4 text-[#ffc107]">
              Industries Served by Our Experts <ArrowRight className="h-6 w-6" />
            </h2>
            <p className="text-base text-white max-w-3xl mx-auto font-medium leading-relaxed">
              We provide critical filtration solutions to diverse industrial sectors globally, focusing on safety, reliability, and technical precision for pharmaceuticals, chemicals, food, and energy.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 text-center">
            {industries.map((industry) => (
              <div key={industry.name} className="flex flex-col items-center group">
                <div className="flex items-center justify-center h-20 w-20 rounded-full bg-white/5 text-white mb-4 transition-all duration-300 group-hover:bg-[#ffc107] group-hover:scale-110">
                  <industry.icon className="h-10 w-10" />
                </div>
                <h3 className="font-bold text-sm uppercase tracking-widest text-white">{industry.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 md:py-32 bg-white overflow-hidden relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20 relative">
            <h2 className="font-headline text-3xl md:text-5xl font-black text-[#0284c7] mb-6 uppercase tracking-tight">
              The VVIOK Advantage
            </h2>
            <p className="text-slate-500 text-base md:text-lg max-w-4xl mx-auto leading-relaxed font-medium">
              Why leading industrial partners trust VVIOK for their critical filtration and storage needs. Our legacy is built on trust, engineering expertise, and quality results that withstand the test of time and high-pressure industrial use.
            </p>
          </div>

          <div className="relative max-w-[1400px] mx-auto">
            <div className="bg-slate-900 rounded-[3rem] p-16 md:p-24 shadow-2xl relative overflow-visible">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-16 relative z-10">
                {whyChooseUs.slice(0, 3).map((item) => (
                  <div key={item.title} className="flex flex-col items-center text-center">
                    <div className="w-32 h-32 bg-[#0284c7] rounded-3xl flex items-center justify-center mb-10 -mt-24 md:-mt-32 shadow-2xl transition-transform hover:scale-110">
                      <item.icon className="w-14 h-14 text-white" />
                    </div>
                    
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-5 uppercase tracking-tight whitespace-nowrap">
                      {item.title}
                    </h3>
                    <p className="text-slate-400 text-base md:text-lg leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company FAQ Section */}
      <section className="py-20 bg-slate-50 border-t">
        <div className="container max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center p-3 rounded-2xl bg-primary/10 text-primary mb-4">
              <HelpCircle className="h-8 w-8" />
            </div>
            <h2 className="font-headline text-3xl md:text-4xl font-black text-slate-900 uppercase tracking-tighter">
              Industrial Expertise: Frequently Asked Questions
            </h2>
            <p className="mt-4 text-slate-500 font-medium">Common technical inquiries answered by our senior engineering team to help you make informed decisions for your facility.</p>
          </div>

          <div className="bg-white p-8 md:p-12 rounded-[3rem] border-2 border-slate-100 shadow-xl shadow-slate-200/50">
            <Accordion type="single" collapsible className="w-full">
              {companyFaqs.map((faq, index) => (
                <AccordionItem key={index} value={`company-faq-${index}`} className="border-b border-slate-100 last:border-0 py-2">
                  <AccordionTrigger className="text-left font-black tracking-tight text-slate-900 hover:text-primary transition-colors py-4 text-sm md:text-base">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-600 text-base leading-relaxed font-medium pb-6">
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
