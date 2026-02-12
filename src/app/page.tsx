import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight,
  Settings,
  ShieldCheck,
  Package,
  Goal,
  Eye,
  ThumbsUp,
  Factory,
  Database,
  Container,
  Lightbulb,
  Award,
  Mountain,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { productCategories, industries, whyChooseUs } from '@/lib/data';
import { cn } from '@/lib/utils';

export default function Home() {
  const heroImage = PlaceHolderImages.find((img) => img.id === 'hero-background');

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-[600px] w-full flex flex-col justify-center items-center text-center text-white overflow-visible">
        {/* Background Image */}
        {heroImage && (
          <div className="absolute inset-0 z-0">
            <Image
              src={heroImage.imageUrl}
              alt="VVIOK Industry Industrial Banner"
              fill
              className="object-cover"
              priority
            />
            {/* Very Subtle Overlay for Text Readability - Keeping Banner Clear */}
            <div className="absolute inset-0 bg-black/10" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent" />
          </div>
        )}

        {/* Hero Content */}
        <div className="container relative z-10 py-16 px-4">
          <h1 className="font-headline text-3xl md:text-5xl font-extrabold uppercase tracking-tight max-w-4xl mx-auto leading-tight drop-shadow-lg">
            We are experts in Industrial Filtration products
          </h1>
          <p className="mt-6 text-base md:text-lg max-w-2xl mx-auto opacity-95 font-bold drop-shadow-md">
            We are committed to supplying our customers with robust filtration components and reliable services through our international commercial and production network.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white rounded-full px-10 h-14 font-bold uppercase tracking-wide shadow-xl">
              <Link href="/about">
                In Details <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-white/20 hover:bg-white/30 text-white border-white/50 rounded-full px-10 h-14 font-bold uppercase tracking-wide backdrop-blur-md shadow-xl">
              <Link href="/contact">
                Get a Quote <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>

        {/* Feature Boxes */}
        <div className="absolute bottom-0 left-0 w-full hidden lg:block translate-y-1/2 z-30">
          <div className="container grid grid-cols-3">
            <div className="bg-[#00acc1] p-8 flex items-center gap-6 transition-transform hover:-translate-y-1 shadow-2xl">
              <Settings className="h-10 w-10 text-white shrink-0" />
              <div className="text-left">
                <h3 className="font-bold text-base uppercase leading-tight tracking-wide text-white">Industrial Housings</h3>
              </div>
            </div>
            <div className="bg-[#0097a7] p-8 flex items-center gap-6 border-x border-white/10 transition-transform hover:-translate-y-1 shadow-2xl">
              <Database className="h-10 w-10 text-white shrink-0" />
              <div className="text-left">
                <h3 className="font-bold text-base uppercase leading-tight tracking-wide text-white">Filtration Cartridges</h3>
              </div>
            </div>
            <div className="bg-[#00838f] p-8 flex items-center gap-6 transition-transform hover:-translate-y-1 shadow-2xl">
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
        <div className="bg-[#00acc1] p-6 flex items-center gap-4 text-white border-b border-white/10">
          <Settings className="h-8 w-8 shrink-0" />
          <h3 className="font-bold uppercase tracking-wide text-white text-sm">Industrial Housings</h3>
        </div>
        <div className="bg-[#0097a7] p-6 flex items-center gap-4 text-white border-b border-white/10">
          <Database className="h-8 w-8 shrink-0" />
          <h3 className="font-bold uppercase tracking-wide text-white text-sm">Filtration Cartridges</h3>
        </div>
        <div className="bg-[#00838f] p-6 flex items-center gap-4 text-white">
          <Container className="h-8 w-8 shrink-0" />
          <h3 className="font-bold uppercase tracking-wide text-white text-sm">Stainless Steel Tanks</h3>
        </div>
      </div>
      
      {/* Vision, Mission Section */}
      <section className="py-20 md:py-32 pt-32 md:pt-48 bg-background relative z-0">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 items-start">
            
            {/* Our Mission */}
            <div className="flex flex-col items-center text-center px-6 mb-12 md:mb-0 relative">
              <div className="relative mb-8 flex justify-center items-center">
                <div className="w-20 h-20 rounded-full border-[1px] border-slate-200 flex items-center justify-center relative">
                  <div className="absolute inset-0 rounded-full border-[3px] border-transparent border-t-primary border-b-primary rotate-[45deg]"></div>
                  <Mountain className="w-6 h-6 text-primary" />
                </div>
              </div>
              <h3 className="font-headline text-xl font-black uppercase tracking-tight mb-4">
                Our <span className="text-primary">Mission</span>
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed max-w-xs mx-auto">
                To be the leading provider of innovative, high-quality filtration solutions that improve the efficiency.
              </p>
              <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 h-16 w-[1px] bg-slate-200"></div>
            </div>

            {/* Our Vision */}
            <div className="flex flex-col items-center text-center px-6 mb-12 md:mb-0 relative">
              <div className="relative mb-8 flex justify-center items-center">
                <div className="w-20 h-20 rounded-full border-[1px] border-slate-200 flex items-center justify-center relative">
                  <div className="absolute inset-0 rounded-full border-[3px] border-transparent border-t-[#00bcd4] border-b-[#00bcd4] rotate-[45deg]"></div>
                  <Lightbulb className="w-6 h-6 text-[#00bcd4]" />
                </div>
              </div>
              <h3 className="font-headline text-xl font-black uppercase tracking-tight mb-4">
                Our <span className="text-[#00bcd4]">Vision</span>
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed max-w-xs mx-auto">
                To design, develop, and manufacture high-quality filtration systems that meet the diverse needs of our customers across various industries.
              </p>
              <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 h-16 w-[1px] bg-slate-200"></div>
            </div>

            {/* Industries We Serve Card */}
            <div className="flex flex-col items-center text-center px-6 relative">
              <div className="relative mb-8 flex justify-center items-center">
                <div className="w-20 h-20 rounded-full border-[1px] border-slate-200 flex items-center justify-center relative">
                  <div className="absolute inset-0 rounded-full border-[3px] border-transparent border-t-[#ffc107] border-b-[#ffc107] rotate-[45deg]"></div>
                  <Award className="w-6 h-6 text-[#ffc107]" />
                </div>
              </div>
              <h3 className="font-headline text-xl font-black uppercase tracking-tight mb-4 text-[#ffc107] flex items-center gap-2">
                Industries We Serve <ArrowRight className="h-5 w-5" />
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed max-w-xs mx-auto">
                Providing specialized filtration solutions to meet the unique challenges of diverse industrial sectors globally.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-headline text-3xl md:text-4xl font-black text-[#0056b3] mb-8 uppercase tracking-tight">
            Welcome to VVIOK Industry
          </h2>
          <p className="text-slate-600 text-base md:text-lg max-w-4xl mx-auto leading-relaxed font-medium">
            VVIOK Industry is a premier manufacturer, supplier, and exporter of a comprehensive range of 
            industrial filtration products. Based in India, we leverage state-of-the-art manufacturing 
            facilities and a commitment to quality to deliver solutions that meet the rigorous demands of 
            our domestic and international clients.
          </p>
        </div>
      </section>

      {/* Product Categories Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-headline text-2xl md:text-4xl font-black text-slate-800 mb-4 uppercase tracking-tighter">
              Our Product Categories
            </h2>
            <div className="w-16 h-1.5 bg-primary mx-auto rounded-full" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:auto-rows-[250px]">
            {/* 1. Filter Cartridge */}
            <div className="lg:col-span-2 lg:row-span-2 rounded-[2.5rem] bg-slate-900 p-10 flex flex-col justify-between group relative overflow-hidden text-white shadow-2xl shadow-slate-200">
              <div className="relative z-10">
                <span className="text-[#00bcd4] text-[10px] font-bold uppercase tracking-[0.3em] block mb-4">Master Solutions</span>
                <h3 className="text-3xl md:text-5xl font-black uppercase leading-[0.85] tracking-tighter">
                  Filter<br/><span className="text-[#00bcd4]">Cartridge</span>
                </h3>
                <p className="mt-6 text-slate-400 text-sm max-w-xs font-medium">Precision engineered for high-purity liquid and gas processing.</p>
              </div>
              <Button asChild className="relative z-10 bg-primary hover:bg-primary/90 text-white rounded-xl px-8 h-12 font-bold uppercase text-[10px] tracking-widest w-fit mt-8">
                <Link href={`/products/${productCategories[0].slug}`}>
                  Shop Now <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>

            {/* 2. Housing */}
            <div className="lg:col-span-2 rounded-[2.5rem] bg-[#00bcd4] p-8 flex flex-col justify-between group relative overflow-hidden text-white shadow-xl shadow-cyan-100">
              <div className="flex justify-between items-start relative z-10">
                <h3 className="text-2xl font-black uppercase tracking-tighter leading-none">
                  Industrial<br/>Housing
                </h3>
                <Database className="w-6 h-6 text-white opacity-40" />
              </div>
              <Link href={`/products/${productCategories[1].slug}`} className="relative z-10 text-white font-bold uppercase text-[9px] tracking-[0.2em] flex items-center mt-6">
                Explore Collection <ArrowRight className="ml-2 h-3 w-3" />
              </Link>
            </div>

            {/* 3. Strainer */}
            <div className="rounded-[2.5rem] bg-white border-2 border-slate-100 p-8 flex flex-col justify-between group hover:border-primary/30 transition-all duration-500 shadow-lg shadow-slate-100">
              <h3 className="text-xl font-black uppercase tracking-tighter text-slate-900 leading-none">
                Technical<br/><span className="text-primary">Strainer</span>
              </h3>
              <Link href={`/products/${productCategories[2].slug}`} className="text-slate-400 font-bold uppercase text-[9px] tracking-widest flex items-center">
                View Details <ArrowRight className="ml-2 h-3 w-3" />
              </Link>
            </div>

            {/* 4. Vessels */}
            <div className="rounded-[2.5rem] bg-slate-50 border-2 border-slate-100 p-8 flex flex-col justify-between group hover:border-[#00bcd4]/30 transition-all duration-500 shadow-lg shadow-slate-100">
              <h3 className="text-xl font-black uppercase tracking-tighter text-slate-900 leading-none">
                Vessels<br/><span className="text-[#00bcd4]">& Tanks</span>
              </h3>
              <Link href={`/products/${productCategories[3].slug}`} className="text-slate-400 font-bold uppercase text-[9px] tracking-widest flex items-center">
                Configure <ArrowRight className="ml-2 h-3 w-3" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Served */}
      <section className="py-20 bg-[#0f172a] text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-headline text-2xl md:text-3xl font-bold mb-4 flex items-center justify-center gap-4 text-[#ffc107]">
              Industries We Serve <ArrowRight className="h-6 w-6" />
            </h2>
            <p className="text-sm opacity-60 max-w-2xl mx-auto">
              Providing critical filtration solutions to diverse industrial sectors globally.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 text-center">
            {industries.map((industry) => (
              <div key={industry.name} className="flex flex-col items-center group">
                <div className="flex items-center justify-center h-14 w-14 rounded-full bg-white/5 text-white mb-4 transition-all duration-300 group-hover:bg-[#ffc107] group-hover:scale-110">
                  <industry.icon className="h-6 w-6" />
                </div>
                <h3 className="font-bold text-[10px] uppercase tracking-wider text-white/90">{industry.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white overflow-hidden relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 relative">
            <h2 className="font-headline text-2xl md:text-4xl font-black text-[#00bcd4] mb-4">
              Why You Choose Us?
            </h2>
            <p className="text-slate-500 text-sm max-w-4xl mx-auto leading-relaxed">
              VVIOK Industry stands as a beacon of reliability in the global filtration market.
            </p>
          </div>

          <div className="relative max-w-5xl mx-auto">
            <div className="bg-slate-900 rounded-[2.5rem] p-12 shadow-2xl relative overflow-visible">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
                {whyChooseUs.slice(0, 3).map((item) => (
                  <div key={item.title} className="flex flex-col items-center text-center">
                    <div className="w-14 h-14 bg-[#00bcd4] rounded-xl flex items-center justify-center mb-6 -mt-20 md:-mt-24 shadow-xl">
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                    
                    <h3 className="text-base font-bold text-white mb-3 uppercase tracking-tight">
                      {item.title}
                    </h3>
                    <p className="text-slate-400 text-xs leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
