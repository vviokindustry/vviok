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
      <section className="relative h-[60vh] md:h-[80vh] w-full flex items-center justify-center text-center text-white">
        {heroImage && (
          <Image
            src={heroImage.imageUrl}
            alt={heroImage.description}
            fill
            className="object-cover"
            priority
            data-ai-hint={heroImage.imageHint}
          />
        )}
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 max-w-4xl px-4">
          <h1 className="font-headline text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
            High-Quality Industrial Filtration Products Manufacturer & Exporter
          </h1>
          <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto">
            Your trusted partner for innovative and reliable filtration solutions, serving industries worldwide from India.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Button asChild size="lg" className="font-bold">
              <Link href="/contact">
                Get a Quote <ArrowRight className="ml-2" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="secondary" className="font-bold">
              <Link href="/products">Explore Products</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-16 md:py-24 bg-background">
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
      <section className="py-16 md:py-24 bg-background">
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
