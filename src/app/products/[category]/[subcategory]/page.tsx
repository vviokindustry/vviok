import { products, productCategories } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ChevronRight, Home, Info } from 'lucide-react';

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
      {/* Breadcrumbs */}
      <div className="bg-slate-50 border-b">
        <div className="container py-3 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-muted-foreground">
          <Link href="/" className="hover:text-primary flex items-center gap-1">
            <Home className="h-3 w-3" /> Home
          </Link>
          <ChevronRight className="h-3 w-3" />
          <Link href="/products" className="hover:text-primary">Products</Link>
          <ChevronRight className="h-3 w-3" />
          <Link href={`/products/${currentCategory.slug}`} className="hover:text-primary">{currentCategory.name}</Link>
          <ChevronRight className="h-3 w-3" />
          <span className="text-primary">{currentSubcategory.name}</span>
        </div>
      </div>

      <section className="bg-white py-12 md:py-20 border-b">
        <div className="container text-center max-w-4xl">
          <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary mb-3">
            Product Subcategory
          </div>
          <h1 className="font-headline text-4xl md:text-5xl font-bold text-slate-900">{currentSubcategory.name}</h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Explore our specialized range of {currentSubcategory.name.toLowerCase()} products, designed for high-efficiency industrial performance and reliability.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-slate-50/50">
        <div className="container">
          {subcategoryProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {subcategoryProducts.map((product) => {
                const image = PlaceHolderImages.find((img) => img.id === product.imageId);
                return (
                  <Card key={product.name} className="flex flex-col border-slate-200 hover:shadow-xl transition-all">
                    <CardHeader className="p-0">
                      <div className="aspect-w-4 aspect-h-3 relative overflow-hidden">
                        {image && (
                          <Image
                            src={image.imageUrl}
                            alt={product.name}
                            fill
                            className="object-cover rounded-t-lg transition-transform duration-500 hover:scale-105"
                            data-ai-hint={image.imageHint}
                          />
                        )}
                      </div>
                    </CardHeader>
                    <CardContent className="p-6 flex-1 flex flex-col">
                      <h3 className="font-headline text-xl font-bold text-slate-900">{product.name}</h3>
                      <div className="mt-4 p-4 bg-slate-50 rounded-sm border-l-4 border-primary/20">
                        <div className="flex items-center gap-2 mb-1">
                          <Info className="h-3 w-3 text-primary" />
                          <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Technical Application</span>
                        </div>
                        <p className="text-sm text-slate-700 font-medium">
                          {product.application}
                        </p>
                      </div>
                      <Button asChild className="mt-6 w-full font-bold uppercase tracking-wide">
                        <Link href="/contact">Get Technical Quote</Link>
                      </Button>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          ) : (
            <div className="text-center py-24 bg-white rounded-lg border border-dashed border-slate-300">
              <p className="text-muted-foreground font-medium">Specific product models for this subcategory are available upon request.</p>
              <Button asChild variant="outline" className="mt-6 font-bold">
                <Link href="/contact">Inquire for Models</Link>
              </Button>
            </div>
          )}

          <div className="mt-16 flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild variant="outline" className="font-bold">
              <Link href={`/products/${currentCategory.slug}`}>Back to {currentCategory.name}</Link>
            </Button>
            <Button asChild variant="secondary" className="font-bold">
              <Link href="/products">View All Categories</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
