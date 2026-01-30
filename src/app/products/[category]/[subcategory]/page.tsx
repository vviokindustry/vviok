import { products, productCategories } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  const params: { category: string; subcategory: string }[] = [];
  productCategories.forEach(cat => {
    if (cat.subcategories) {
      cat.subcategories.forEach(sub => {
        params.push({ category: cat.slug, subcategory: sub.slug });
      });
    }
  });
  return params;
}

export default async function SubcategoryPage({ params }: { params: Promise<{ category: string; subcategory: string }> }) {
  const { category, subcategory } = await params;
  const currentCategory = productCategories.find(cat => cat.slug === category);
  const currentSubcategory = currentCategory?.subcategories?.find(sub => sub.slug === subcategory);
  
  if (!currentCategory || !currentSubcategory) {
    return notFound();
  }

  const subcategoryProducts = products[subcategory] || [];

  return (
    <div>
      <section className="bg-primary/5 py-12 md:py-20 text-center">
        <div className="container">
          <div className="text-sm font-bold uppercase tracking-widest text-primary mb-4">
            <Link href={`/products/${currentCategory.slug}`} className="hover:underline">{currentCategory.name}</Link>
          </div>
          <h1 className="font-headline text-4xl md:text-5xl font-bold text-primary">{currentSubcategory.name}</h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            Explore our specialized range of {currentSubcategory.name.toLowerCase()} products designed for industrial excellence.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container">
          {subcategoryProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {subcategoryProducts.map((product) => {
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
          ) : (
            <div className="text-center py-20">
              <p className="text-muted-foreground">No specific products listed for this subcategory yet.</p>
            </div>
          )}
          <div className="mt-12 text-center flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild variant="outline">
              <Link href={`/products/${currentCategory.slug}`}>Back to {currentCategory.name}</Link>
            </Button>
            <Button asChild variant="secondary">
              <Link href="/products">View All Product Categories</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
