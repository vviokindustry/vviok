import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { productCategories } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ArrowRight } from 'lucide-react';

export default function ProductsPage() {
  return (
    <div>
      {/* Page Header */}
      <section className="bg-primary/5 py-12 md:py-20 text-center">
        <div className="container">
          <h1 className="font-headline text-4xl md:text-5xl font-bold text-primary">All Product Categories</h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            Explore our comprehensive range of high-performance filtration products, water storage solutions, and precision engineered valves.
          </p>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {productCategories.map((category) => {
              const image = PlaceHolderImages.find((img) => img.id === category.imageId);
              return (
                <Card key={category.slug} className="flex flex-col group hover:shadow-xl transition-all border-slate-200">
                  <CardHeader className="p-0 overflow-hidden">
                    <div className="aspect-w-16 aspect-h-9 relative">
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
                  <CardContent className="p-6 flex-1 flex flex-col">
                    <CardTitle className="font-headline text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                      {category.name}
                    </CardTitle>
                    <p className="text-muted-foreground mb-6 flex-1">
                      {category.description}
                    </p>
                    <div className="flex flex-col space-y-3">
                      <Button asChild className="w-full font-bold uppercase tracking-wide">
                        <Link href={`/products/${category.slug}`}>
                          Explore Category <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                      {category.subcategories && (
                        <p className="text-xs text-center font-bold text-muted-foreground uppercase tracking-widest">
                          {category.subcategories.length} Specialized Sub-items
                        </p>
                      )}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Custom Solutions CTA */}
      <section className="py-16 bg-primary text-primary-foreground text-center">
        <div className="container">
          <h2 className="font-headline text-3xl font-bold">Need a Custom Filtration Solution?</h2>
          <p className="mt-4 text-lg opacity-90 max-w-2xl mx-auto">
            Our engineering team can design and manufacture bespoke systems tailored to your specific industrial parameters.
          </p>
          <Button asChild size="lg" variant="secondary" className="mt-8 font-bold px-10 rounded-full">
            <Link href="/contact">Get A Technical Consultation</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
