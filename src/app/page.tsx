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
      <section className="py-16 md:py-24 pt-32 md:pt-40 bg-background relative z-0">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center p-8 border-slate-100 shadow-lg">
              <div className="flex justify-center mb-4">
                <div className="flex items-center justify-center h-20 w-20 rounded-full bg-primary/10 text-primary">
                  <Goal className="h-10 w-10" />
                </div>
              </div>
              <h3 className="font-headline text-2xl font-bold mb-2">Our Vision</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                To design, develop, and manufacture high-quality filtration systems that meet the diverse needs of our customers across various industries.
              </p>
            </Card>
            <Card className="text-center p-8 border-slate-100 shadow-lg">
              <div className="flex justify-center mb-4">
                <div className="flex items-center justify-center h-20 w-20 rounded-full bg-primary/10 text-primary">
                  <Eye className="h-10 w-10" />
                </div>
              </div>
              <h3 className="font-headline text-2xl font-bold mb-2">Our Mission</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                To be the leading provider of innovative, high-quality filtration solutions that improve the efficiency.
              </p>
            </Card>
            <Card className="text-center p-8 border-slate-100 shadow-lg">
              <div className="flex justify-center mb-4">
                <div className="flex items-center justify-center h-20 w-20 rounded-full bg-primary/10 text-primary">
                  <ThumbsUp className="h-10 w-10" />
                </div>
              </div>
              <h3 className="font-headline text-2xl font-bold mb-2">Customer Satisfaction</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                To design, develop, and manufacture high-quality filtration systems that meet the diverse needs of our customers.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Product Categories Section - Redesigned per screenshot */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-headline text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Our Product Categories
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A wide range of filters designed for performance, reliability, and efficiency.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {productCategories.map((category) => {
              const image = PlaceHolderImages.find((img) => img.id === category.imageId);
              return (
                <Card key={category.name} className="overflow-hidden group flex flex-col border-none shadow-xl rounded-lg">
                  <CardHeader className="p-0">
                    <div className="relative aspect-[4/3] overflow-hidden">
                      {image && (
                        <Image
                          src={image.imageUrl}
                          alt={category.name}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-110"
                          data-ai-hint={image.imageHint}
                        />
                      )}
                    </div>
                  </CardHeader>
                  <CardContent className="p-8 flex-1 flex flex-col">
                    <CardTitle className="font-headline text-2xl font-bold mb-4 text-slate-900">
                      {category.name}
                    </CardTitle>
                    <p className="text-muted-foreground mb-8 flex-1 text-sm leading-relaxed">
                      {category.description}
                    </p>
                    <Button asChild variant="link" className="p-0 h-auto justify-start font-bold text-primary uppercase text-sm tracking-widest group/link">
                      <Link href={`/products/${category.slug}`} className="flex items-center">
                        Learn More <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/link:translate-x-1" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
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
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-headline text-3xl md:text-4xl font-bold">
              Why Choose VVIOK Industry?
            </h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              Our commitment to excellence sets us apart as a trusted filtration partner.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item) => (
              <div key={item.title} className="p-8 bg-white border border-slate-100 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary text-primary-foreground mb-6">
                  <item.icon className="h-6 w-6" />
                </div>
                <h3 className="font-headline text-xl font-bold mb-3 uppercase text-slate-900">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
