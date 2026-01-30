import { products, productCategories } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  return productCategories.map((cat) => ({
    category: cat.slug,
  }));
}

export default async function CategoryPage({ params }: { params: Promise<{ category: string }> }) {
  const { category } = await params;
  const currentCategory = productCategories.find(cat => cat.slug === category);
  
  if (!currentCategory || !products[category as keyof typeof products]) {
    return notFound();
  }

  const categoryProducts = products[category as keyof typeof products];

  return (
    <div>
      <section className="bg-primary/5 py-12 md:py-20 text-center">
        <div className="container">
          <h1 className="font-headline text-4xl md:text-5xl font-bold text-primary">{currentCategory.name}</h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            {currentCategory.description}
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {categoryProducts.map((product) => {
              const image = PlaceHolderImages.find((img) => img.id === product.imageId);
              return (
                <Card key={product.name} className="flex flex-col">
                  <CardHeader className="p-0">
                    <div className="aspect-w-4 aspect-h-3 relative">
                      {image && (
                        <Image
                          src={image.imageUrl}
                          alt={product.name}
                          fill
                          className="object-cover rounded-t-lg"
                          data-ai-hint={image.imageHint}
                        />
                      )}
                    </div>
                  </CardHeader>
                  <CardContent className="p-6 flex-1 flex flex-col">
                    <h3 className="font-headline text-xl font-semibold">{product.name}</h3>
                    <p className="text-sm text-muted-foreground mt-2 flex-1">
                      <span className="font-semibold text-foreground">Applications:</span> {product.application}
                    </p>
                    <Button asChild className="mt-4 w-full" variant="outline">
                      <Link href="/contact">Inquire Now</Link>
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
          <div className="mt-12 text-center">
            <Button asChild variant="secondary">
              <Link href="/products">View All Product Categories</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
