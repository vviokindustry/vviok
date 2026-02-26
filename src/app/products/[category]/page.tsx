import { products, productCategories } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ChevronRight, Home } from 'lucide-react';

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

  const subItems = currentCategory.subcategories || [];
  const displayProducts = products[currentCategory.slug] || [];

  return (
    <div className="bg-white min-h-screen">
      {/* Breadcrumbs */}
      <div className="bg-slate-50 border-b">
        <div className="container py-3 flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground overflow-x-auto whitespace-nowrap">
          <Link href="/" className="hover:text-primary flex items-center gap-2 transition-colors">
            <Home className="h-3.5 w-3.5" /> Home
          </Link>
          <ChevronRight className="h-3 w-3 opacity-30" />
          <Link href="/products" className="hover:text-primary transition-colors">Products</Link>
          <ChevronRight className="h-3 w-3 opacity-30" />
          <span className="text-primary">{currentCategory.name}</span>
        </div>
      </div>

      <section className="py-12 md:py-16">
        <div className="container">
          <div className="mb-10 border-l-8 border-primary pl-6">
            <h1 className="font-headline text-xl md:text-3xl font-black text-slate-900 uppercase tracking-tighter leading-tight">
              {currentCategory.name}
            </h1>
            <p className="text-sm md:text-base text-slate-500 mt-2 font-medium max-w-3xl">
              {currentCategory.description}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {subItems.length > 0 ? (
              subItems.map((sub) => {
                const subProduct = products[sub.slug]?.[0];
                const imageId = subProduct?.imageId || currentCategory.imageId;
                const image = PlaceHolderImages.find(img => img.id === imageId);
                
                return (
                  <Link key={sub.slug} href={`/products/${currentCategory.slug}/${sub.slug}`} className="group">
                    <Card className="relative h-full border-2 border-slate-100 shadow-xl shadow-slate-200/50 hover:border-primary/50 transition-all duration-500 flex flex-col items-center p-8 rounded-[3rem] bg-white overflow-hidden">
                      <div className="aspect-square relative w-full mb-8 flex items-center justify-center p-6 bg-slate-50 rounded-[2.5rem] group-hover:bg-white transition-colors duration-500">
                        {image ? (
                          <Image
                            src={image.imageUrl}
                            alt={sub.name}
                            width={400}
                            height={400}
                            className="object-contain transition-transform duration-700 group-hover:scale-110"
                          />
                        ) : (
                          <div className="text-slate-200 uppercase font-black tracking-widest text-xs">No Image</div>
                        )}
                      </div>
                      <div className="text-center mt-auto w-full">
                        <span className="text-[10px] font-black uppercase tracking-[0.3em] text-primary mb-2 block">Technical Series</span>
                        <h3 className="font-headline text-xl md:text-2xl font-black text-slate-900 group-hover:text-primary transition-colors leading-tight uppercase tracking-tight">
                          {sub.name}
                        </h3>
                        <div className="mt-6 pt-6 border-t border-slate-50 flex items-center justify-center gap-2 text-slate-400 group-hover:text-primary transition-colors font-black uppercase text-[10px] tracking-widest">
                          View Specifications <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </div>
                      </div>
                    </Card>
                  </Link>
                );
              })
            ) : (
              displayProducts.map((product) => {
                const image = PlaceHolderImages.find((img) => img.id === product.imageId);
                return (
                  <Link key={product.name} href="/contact" className="group">
                    <Card className="relative h-full border-2 border-slate-100 shadow-xl shadow-slate-200/50 hover:border-primary/50 transition-all duration-500 flex flex-col items-center p-8 rounded-[3rem] bg-white overflow-hidden">
                      <div className="aspect-square relative w-full mb-8 flex items-center justify-center p-6 bg-slate-50 rounded-[2.5rem] group-hover:bg-white transition-colors duration-500">
                        {image && (
                          <Image
                            src={image.imageUrl}
                            alt={product.name}
                            width={400}
                            height={400}
                            className="object-contain transition-transform duration-700 group-hover:scale-110"
                          />
                        )}
                      </div>
                      <div className="text-center mt-auto w-full">
                        <h3 className="font-headline text-xl md:text-2xl font-black text-slate-900 group-hover:text-primary transition-colors leading-tight uppercase tracking-tight">
                          {product.name}
                        </h3>
                        <p className="text-xs font-black text-slate-400 mt-4 uppercase tracking-[0.2em]">Inquire for Details</p>
                      </div>
                    </Card>
                  </Link>
                )
              })
            )}
          </div>
          
          {(subItems.length === 0 && displayProducts.length === 0) && (
            <div className="text-center py-24 bg-slate-50 border-4 border-dashed rounded-[4rem] border-slate-100">
              <p className="text-slate-400 font-black uppercase tracking-widest text-sm">No specialized products listed for this category yet.</p>
              <Button asChild size="lg" className="mt-8 rounded-2xl font-black uppercase tracking-widest h-16 px-12">
                <Link href="/contact">Request Custom Quote</Link>
              </Button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
