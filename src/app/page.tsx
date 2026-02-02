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
  CircleCheckBig,
  Globe,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { productCategories, industries, whyChooseUs } from '@/lib/data';
import { cn } from '@/lib/utils';

export default function Home() {
  const heroImage = PlaceHolderImages.find((img) => img.id === 'about-us-manufacturing');

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-[600px] w-full flex flex-col justify-center items-center text-center text-white overflow-visible">
        {/* Background Image */}
        {heroImage && (
          <div className="absolute inset-0 z-0">
            <Image
              src={heroImage.imageUrl}
              alt="Industrial Background"
              fill
              className="object-cover"
              priority
            />
            {/* Multi-tone Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/40 to-cyan-600/60 mix-blend-multiply" />
          </div>
        )}

        {/* Hero Content */}
        <div className="container relative z-10 py-20 px-4">
          <h1 className="font-headline text-4xl md:text-6xl font-extrabold uppercase tracking-tight max-w-4xl mx-auto leading-tight">
            We are experts in Industrial Filtration products
          </h1>
          <p className="mt-6 text-lg md:text-xl max-w-2xl mx-auto opacity-90 font-medium">
            We are committed to supplying our customers with robust filtration components and reliable services through our international commercial and production network.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white rounded-full px-10 h-14 font-bold uppercase tracking-wide">
              <Link href="/about">
                In Details <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-white/10 hover:bg-white/20 text-white border-white/50 rounded-full px-10 h-14 font-bold uppercase tracking-wide backdrop-blur-sm">
              <Link href="/contact">
                Get a Quote <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>

        {/* Feature Boxes */}
        <div className="absolute bottom-0 left-0 w-full hidden lg:block translate-y-1/2 z-30">
          <div className="container grid grid-cols-3">
            <div className="bg-[#00acc1] p-10 flex items-center gap-6 transition-transform hover:-translate-y-1 shadow-2xl">
              <Settings className="h-12 w-12 text-white shrink-0" />
              <div className="text-left">
                <h3 className="font-bold text-lg uppercase leading-tight tracking-wide">Industrial Housings</h3>
              </div>
            </div>
            <div className="bg-[#0097a7] p-10 flex items-center gap-6 border-x border-white/10 transition-transform hover:-translate-y-1 shadow-2xl">
              <Database className="h-12 w-12 text-white shrink-0" />
              <div className="text-left">
                <h3 className="font-bold text-lg uppercase leading-tight tracking-wide">Filtration Cartridges</h3>
              </div>
            </div>
            <div className="bg-[#00838f] p-10 flex items-center gap-6 transition-transform hover:-translate-y-1 shadow-2xl">
              <Container className="h-12 w-12 text-white shrink-0" />
              <div className="text-left">
                <h3 className="font-bold text-lg uppercase leading-tight tracking-wide">Stainless Steel Tanks</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile Feature Boxes */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:hidden relative z-10">
        <div className="bg-[#00acc1] p-8 flex items-center gap-6 text-white border-b border-white/10">
          <Settings className="h-10 w-10 shrink-0" />
          <h3 className="font-bold uppercase tracking-wide">Industrial Housings</h3>
        </div>
        <div className="bg-[#0097a7] p-8 flex items-center gap-6 text-white border-b border-white/10">
          <Database className="h-10 w-10 shrink-0" />
          <h3 className="font-bold uppercase tracking-wide">Filtration Cartridges</h3>
        </div>
        <div className="bg-[#00838f] p-8 flex items-center gap-6 text-white">
          <Container className="h-10 w-10 shrink-0" />
          <h3 className="font-bold uppercase tracking-wide">Stainless Steel Tanks</h3>
        </div>
      </div>
      
      {/* Vision, Mission Section */}
      <section className="py-20 md:py-32 pt-32 md:pt-48 bg-background relative z-0">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 items-start">
            
            {/* Our Mission */}
            <div className="flex flex-col items-center text-center px-6 mb-16 md:mb-0 relative">
              <div className="relative mb-10 flex justify-center items-center">
                <div className="w-32 h-32 rounded-full border-[1px] border-slate-200 flex items-center justify-center relative">
                  {/* Colored dual-tone ring effect */}
                  <div className="absolute inset-0 rounded-full border-[4px] border-transparent border-t-primary border-b-primary rotate-[45deg]"></div>
                  <div className="absolute inset-0 rounded-full border-[4px] border-transparent border-l-slate-100 border-r-slate-100 rotate-[45deg]"></div>
                  <Mountain className="w-12 h-12 text-primary" />
                </div>
              </div>
              <h3 className="font-headline text-xl font-black uppercase tracking-tight mb-4">
                Our <span className="text-primary">Mission</span>
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed max-w-xs mx-auto">
                To be the leading provider of innovative, high-quality filtration solutions that improve the efficiency.
              </p>
              {/* Vertical Divider for desktop */}
              <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 h-20 w-[1px] bg-slate-200"></div>
            </div>

            {/* Our Vision */}
            <div className="flex flex-col items-center text-center px-6 mb-16 md:mb-0 relative">
              <div className="relative mb-10 flex justify-center items-center">
                <div className="w-32 h-32 rounded-full border-[1px] border-slate-200 flex items-center justify-center relative">
                  {/* Colored dual-tone ring effect */}
                  <div className="absolute inset-0 rounded-full border-[4px] border-transparent border-t-[#00bcd4] border-b-[#00bcd4] rotate-[45deg]"></div>
                  <div className="absolute inset-0 rounded-full border-[4px] border-transparent border-l-slate-100 border-r-slate-100 rotate-[45deg]"></div>
                  <Lightbulb className="w-12 h-12 text-[#00bcd4]" />
                </div>
              </div>
              <h3 className="font-headline text-xl font-black uppercase tracking-tight mb-4">
                Our <span className="text-[#00bcd4]">Vision</span>
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed max-w-xs mx-auto">
                To design, develop, and manufacture high-quality filtration systems that meet the diverse needs of our customers across various industries.
              </p>
              {/* Vertical Divider for desktop */}
              <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 h-20 w-[1px] bg-slate-200"></div>
            </div>

            {/* Customer Satisfaction */}
            <div className="flex flex-col items-center text-center px-6 relative">
              <div className="relative mb-10 flex justify-center items-center">
                <div className="w-32 h-32 rounded-full border-[1px] border-slate-200 flex items-center justify-center relative">
                  {/* Colored dual-tone ring effect */}
                  <div className="absolute inset-0 rounded-full border-[4px] border-transparent border-t-[#ffc107] border-b-[#ffc107] rotate-[45deg]"></div>
                  <div className="absolute inset-0 rounded-full border-[4px] border-transparent border-l-slate-100 border-r-slate-100 rotate-[45deg]"></div>
                  <Award className="w-12 h-12 text-[#ffc107]" />
                </div>
              </div>
              <h3 className="font-headline text-xl font-black uppercase tracking-tight mb-4">
                Customer <span className="text-[#ffc107]">Satisfaction</span>
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed max-w-xs mx-auto">
                To design, develop, and manufacture high-quality filtration systems that meet the diverse needs of our customers.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Product Categories Section - Focused 4-Grid Redesign */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-headline text-5xl md:text-6xl font-black text-slate-800 mb-4 uppercase tracking-tighter">
              Product Categories
            </h2>
            <div className="w-24 h-2 bg-primary mx-auto rounded-full" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:auto-rows-[280px]">
            {/* 1. Filter Cartridge - Large Feature 2x2 */}
            <div className="lg:col-span-2 lg:row-span-2 rounded-[3.5rem] bg-slate-900 p-12 flex flex-col justify-between group relative overflow-hidden text-white shadow-2xl shadow-slate-200">
              <div className="relative z-10">
                <span className="text-[#00bcd4] text-sm font-bold uppercase tracking-[0.3em] block mb-6">Master Solutions</span>
                <h3 className="text-5xl md:text-7xl font-black uppercase leading-[0.85] tracking-tighter">
                  Filter<br/><span className="text-[#00bcd4]">Cartridge</span>
                </h3>
                <p className="mt-8 text-slate-400 text-lg max-w-xs font-medium">Precision engineered for high-purity liquid and gas processing.</p>
              </div>
              <Button asChild className="relative z-10 bg-primary hover:bg-primary/90 text-white rounded-2xl px-10 h-16 font-bold uppercase text-sm tracking-widest w-fit mt-12 shadow-lg shadow-primary/20">
                <Link href={`/products/${productCategories[0].slug}`}>
                  Shop Now <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              {/* Decorative Watermark */}
              <div className="absolute -bottom-10 -right-10 opacity-[0.03] pointer-events-none">
                <Settings className="w-80 h-80 rotate-12" />
              </div>
            </div>

            {/* 2. Housing - Wide Feature 2x1 */}
            <div className="lg:col-span-2 rounded-[3.5rem] bg-[#00bcd4] p-10 flex flex-col justify-between group relative overflow-hidden text-white shadow-xl shadow-cyan-100">
              <div className="flex justify-between items-start relative z-10">
                <h3 className="text-4xl font-black uppercase tracking-tighter leading-none">
                  Industrial<br/>Housing
                </h3>
                <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-md">
                  <Database className="w-6 h-6 text-white" />
                </div>
              </div>
              <Link href={`/products/${productCategories[1].slug}`} className="relative z-10 group/link text-white font-bold uppercase text-xs tracking-[0.2em] flex items-center mt-8">
                Explore Collection <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/link:translate-x-2" />
              </Link>
              {/* Decorative Glow */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
            </div>

            {/* 3. Strainer - Square 1x1 */}
            <div className="rounded-[3.5rem] bg-white border-2 border-slate-100 p-10 flex flex-col justify-between group hover:border-primary/30 transition-all duration-500 shadow-lg shadow-slate-100">
              <h3 className="text-3xl font-black uppercase tracking-tighter text-slate-900 leading-none">
                Technical<br/><span className="text-primary">Strainer</span>
              </h3>
              <Link href={`/products/${productCategories[2].slug}`} className="text-slate-400 group-hover:text-primary font-bold uppercase text-[10px] tracking-widest flex items-center transition-colors">
                View Details <ArrowRight className="ml-2 h-3 w-3" />
              </Link>
            </div>

            {/* 4. Vessels - Square 1x1 */}
            <div className="rounded-[3.5rem] bg-slate-50 border-2 border-slate-100 p-10 flex flex-col justify-between group hover:border-[#00bcd4]/30 transition-all duration-500 shadow-lg shadow-slate-100">
              <h3 className="text-3xl font-black uppercase tracking-tighter text-slate-900 leading-none">
                Vessels<br/><span className="text-[#00bcd4]">& Tanks</span>
              </h3>
              <Link href={`/products/${productCategories[3].slug}`} className="text-slate-400 group-hover:text-[#00bcd4] font-bold uppercase text-[10px] tracking-widest flex items-center transition-colors">
                Configure <ArrowRight className="ml-2 h-3 w-3" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Served */}
      <section className="py-20 md:py-28 bg-[#0f172a] text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-headline text-4xl md:text-5xl font-bold mb-4">
              Industries We Serve
            </h2>
            <p className="text-lg opacity-60 max-w-2xl mx-auto">
              Providing critical filtration solutions to diverse industrial sectors globally.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10 text-center">
            {industries.map((industry) => (
              <div key={industry.name} className="flex flex-col items-center group">
                <div className="flex items-center justify-center h-20 w-20 rounded-full bg-white/5 text-white mb-6 transition-all duration-300 group-hover:bg-primary group-hover:scale-110">
                  <industry.icon className="h-10 w-10" />
                </div>
                <h3 className="font-bold text-sm uppercase tracking-wider text-white/90">{industry.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-white overflow-hidden relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-24 relative">
            {/* Decorative Dots Pattern */}
            <div className="absolute -top-10 -right-4 hidden lg:block opacity-40">
              <div className="grid grid-cols-3 gap-2">
                {[...Array(9)].map((_, i) => (
                  <div key={i} className="w-1.5 h-1.5 rounded-full bg-[#00bcd4]"></div>
                ))}
              </div>
            </div>
            
            <h2 className="font-headline text-4xl md:text-5xl font-black text-[#00bcd4] mb-6">
              Why You Choose Us?
            </h2>
            <p className="text-slate-500 max-w-3xl mx-auto leading-relaxed">
              VVIOK Industry stands as a beacon of reliability in the global filtration market. We combine decades of engineering expertise with cutting-edge manufacturing to deliver absolute precision in every component.
            </p>
          </div>

          <div className="relative max-w-6xl mx-auto">
            {/* Dark Container Box */}
            <div className="bg-slate-900 rounded-[40px] p-12 md:p-20 md:pb-24 shadow-2xl relative overflow-visible">
              {/* Subtle background element (Lightbulb watermark style) */}
              <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none">
                <Lightbulb className="w-[500px] h-[500px] text-white" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-20 md:gap-12 relative z-10">
                {whyChooseUs.slice(0, 3).map((item) => (
                  <div key={item.title} className="flex flex-col items-center text-center">
                    {/* Floating Square Icon */}
                    <div className="w-20 h-20 bg-[#00bcd4] rounded-2xl flex items-center justify-center mb-8 -mt-20 md:-mt-28 shadow-xl shadow-[#00bcd4]/30 transform transition-transform hover:scale-110">
                      <item.icon className="w-10 h-10 text-white" />
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-4 uppercase tracking-tight">
                      {item.title}
                    </h3>
                    <p className="text-slate-400 text-sm leading-relaxed">
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
