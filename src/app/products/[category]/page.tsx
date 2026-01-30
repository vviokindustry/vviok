import { products, productCategories } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowRight, ChevronRight, Home } from 'lucide-react';

export async function generateStaticParams() {
  return productCategories.map((cat) => ({
    category: cat.slug,
  }));
}

export default async function CategoryPage({ params }: { params: Promise<{ category: string }> }) {
  const { category } = await params;
  const currentCategory = productCategories.find(cat => cat.slug === category);
  
  if (!currentCategory) {
    return notFound();
  }

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
          <span className="text-primary">{currentCategory.name}</span>
        </div>
      </div>

      {/* Page Header */}
      <section className="bg-white py-12 md:py-20 border-b">
        <div className="container text-center max-w-4xl">
          <h1 className="font-headline text-4xl md:text-5xl font-bold text-slate-900">{currentCategory.name}</h1>
          <p className="mt-4 text-lg text-muted-foreground">
            {currentCategory.description}
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-slate-50/50">
        <div className="container">
          {/* If the category has subcategories, display subcategory cards */}
          {currentCategory.subcategories && currentCategory.subcategories.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {currentCategory.subcategories.map((sub) => (
                <Card key={sub.slug} className="group hover:shadow-xl transition-all border-slate-200">
                  <CardHeader className="bg-white border-b p-6">
                    <CardTitle className="font-headline text-2xl font-bold group-hover:text-primary transition-colors">
                      {sub.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-6">
                    <p className="text-muted-foreground mb-6">
                      Explore our specialized high-performance solutions for {sub.name.toLowerCase()}. Engineered for reliability and precision.
                    </p>
                    <Button asChild className="w-full font-bold uppercase tracking-wide">
                      <Link href={`/products/${currentCategory.slug}/${sub.slug}`}>
                        View Products <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            /* Otherwise, display products for this category directly */
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {(products[currentCategory.slug] || []).map((product) => {
                const image = PlaceHolderImages.find((img) => img.id === product.imageId);
                return (
                  <Card key={product.name} className="flex flex-col border-slate-200 hover:shadow-lg transition-all">
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
                      <p className="text-sm text-muted-foreground mt-3 flex-1">
                        <span className="font-bold text-slate-700 uppercase tracking-wider text-[10px]">Primary Applications:</span>
                        <br />
                        {product.application}
                      </p>
                      <Button asChild className="mt-6 w-full font-bold" variant="outline">
                        <Link href="/contact">Request Information</Link>
                      </Button>
                    </CardContent>
                  </Card>
                );
              })}
              {(products[currentCategory.slug] || []).length === 0 && (
                <div className="col-span-full text-center py-20 bg-white rounded-lg border border-dashed">
                  <p className="text-muted-foreground font-medium">No products listed for this specific category yet. Please contact us for specialized requirements.</p>
                </div>
              )}
            </div>
          )}
          <div className="mt-16 text-center">
            <Button asChild variant="secondary" className="px-8 font-bold">
              <Link href="/products">View All Product Categories</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
