import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight,
  CheckCircle,
  Factory,
  Globe,
  Package,
  Ship,
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
      <section className="relative w-full bg-background overflow-hidden">
        <div 
          className="absolute inset-y-0 right-0 w-3/5"
          style={{
            backgroundColor: 'hsl(var(--primary))',
            clipPath: 'ellipse(80% 100% at 100% 50%)'
          }}
        />
         <div className="absolute top-1/2 left-1/4 transform -translate-y-1/2 h-80 w-80 opacity-[0.03]">
            <svg viewBox="0 0 200 50" xmlns="http://www.w3.org/2000/svg" className="h-full w-full">
              <text
                x="10"
                y="35"
                fontFamily="var(--font-headline), sans-serif"
                fontSize="30"
                fontWeight="bold"
                fill="hsl(var(--primary))"
              >
                VVIOK
              </text>
            </svg>
         </div>


        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-8 items-center py-20 md:py-32">
            {/* Left side: Text content */}
            <div className="text-foreground">
              <p className="text-lg md:text-xl">We are Manufacturer & Supplier of</p>
              <h1 className="font-headline text-5xl md:text-6xl font-bold text-primary mt-2 uppercase">
                Bag Filter
                <br />
                Housing
              </h1>
              <div className="mt-6">
                 <svg width="80" height="15" viewBox="0 0 105 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.58301 10.915C2.58301 10.915 22.4163 0.914979 49.9997 10.915C77.583 20.915 102.416 10.915 102.416 10.915" stroke="currentColor" className="text-primary" strokeWidth="5" strokeLinecap="round"/>
                    <path d="M2.58301 19.915C2.58301 19.915 22.4163 9.91498 49.9997 19.915C77.583 29.915 102.416 19.915 102.416 19.915" stroke="currentColor" className="text-primary" strokeWidth="5" strokeLinecap="round"/>
                </svg>
              </div>
            </div>
            {/* Right side: Image */}
            <div className="relative flex justify-center md:justify-end">
              <div className="relative">
                {heroImage && (
                  <div className="bg-white p-2 rounded-lg shadow-2xl">
                      <Image
                        src={heroImage.imageUrl}
                        alt={heroImage.description}
                        width={450}
                        height={450}
                        className="object-contain"
                        data-ai-hint={heroImage.imageHint}
                        priority
                      />
                  </div>
                )}
                <div className="absolute -top-4 -right-4 h-20 w-20 z-20 hidden lg:grid grid-cols-6 gap-2">
                      {Array.from({ length: 36 }).map((_, i) => (
                          <div key={i} className="h-1.5 w-1.5 rounded-full bg-white"></div>
                      ))}
                  </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-16 md:py-24 bg-card">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary">
            Welcome to VVIOK Industry
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            VVIOK Industry is a premier manufacturer, supplier, and exporter of a comprehensive range of industrial filtration products. Based in India, we leverage state-of-the-art manufacturing facilities and a commitment to quality to deliver solutions that meet the rigorous demands of our domestic and international clients.
          </p>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-headline text-3xl md:text-4xl font-bold">
              Our Product Categories
            </h2>
            <p className="mt-2 text-lg text-muted-foreground max-w-2xl mx-auto">
              A wide range of filters designed for performance, reliability, and efficiency.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {productCategories.map((category) => {
              const image = PlaceHolderImages.find((img) => img.id === category.imageId);
              return (
                <Card key={category.name} className="overflow-hidden group flex flex-col">
                  <CardHeader className="p-0">
                    <div className="relative h-48">
                      {image && (
                        <Image
                          src={image.imageUrl}
                          alt={category.name}
                          fill
                          className="object-cover transition-transform duration-300 group-hover:scale-105"
                          data-ai-hint={image.imageHint}
                        />
                      )}
                    </div>
                  </CardHeader>
                  <CardContent className="p-6 flex-1 flex flex-col">
                    <CardTitle className="font-headline text-xl font-semibold mb-2">
                      {category.name}
                    </CardTitle>
                    <p className="text-muted-foreground mb-4 flex-1">
                      {category.description}
                    </p>
                    <Button asChild variant="link" className="p-0 h-auto justify-start font-bold text-primary">
                      <Link href="/products">
                        Learn More <ArrowRight className="ml-2 h-4 w-4" />
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
      <section className="py-16 md:py-24 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-headline text-3xl md:text-4xl font-bold">
              Industries We Serve
            </h2>
            <p className="mt-2 text-lg text-muted-foreground max-w-2xl mx-auto">
              Providing critical filtration solutions to diverse industrial sectors globally.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 text-center">
            {industries.map((industry) => (
              <div key={industry.name} className="flex flex-col items-center">
                <div className="flex items-center justify-center h-16 w-16 rounded-full bg-primary/10 text-primary mb-4">
                  <industry.icon className="h-8 w-8" />
                </div>
                <h3 className="font-semibold text-lg">{industry.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-headline text-3xl md:text-4xl font-bold">
              Why Choose VVIOK Industry?
            </h2>
            <p className="mt-2 text-lg text-muted-foreground max-w-2xl mx-auto">
              Our commitment to excellence sets us apart as a trusted filtration partner.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item) => (
              <div key={item.title} className="p-6">
                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary text-primary-foreground mb-4">
                  <item.icon className="h-6 w-6" />
                </div>
                <h3 className="font-headline text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
