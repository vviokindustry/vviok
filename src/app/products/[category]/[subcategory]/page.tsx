import { products, productCategories } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ChevronRight, Home, LayoutGrid, List, Search } from 'lucide-react';
import { cn } from '@/lib/utils';

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

const BADGES = [
  { label: 'BEST SELLER', className: 'bg-[#001b3d] text-white' },
  { label: 'NEW RELEASE', className: 'bg-[#001b3d] text-white' },
  { label: 'LIMITED STOCK', className: 'bg-[#22c55e] text-white' },
  { label: 'JUST IN', className: 'bg-[#7c3aed] text-white' },
];

export default async function SubcategoryPage({ params }: { params: Promise<{ category: string; subcategory: string }> }) {
  const { category, subcategory } = await params;
  const currentCategory = productCategories.find(cat => cat.slug === category);
  const currentSubcategory = currentCategory?.subcategories?.find(sub => sub.slug === subcategory);
  
  if (!currentCategory || !currentSubcategory) {
    return notFound();
  }

  const subcategoryProducts = products[subcategory] || [];
  const itemCount = subcategoryProducts.length;

  return (
    <div className="bg-white min-h-screen">
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

      <section className="py-8 md:py-12">
        <div className="container">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
            <div>
              <h1 className="font-headline text-3xl font-bold text-slate-900">{currentSubcategory.name}</h1>
              <p className="text-sm text-muted-foreground mt-1">Specialized industrial solutions for {currentSubcategory.name.toLowerCase()}.</p>
            </div>
            
            {/* Filter Bar */}
            <div className="flex flex-wrap items-center gap-4">
              <div className="flex items-center gap-2 bg-slate-50 p-1 rounded-md border">
                <Button variant="ghost" size="icon" className="h-8 w-8 bg-white shadow-sm"><LayoutGrid className="h-4 w-4" /></Button>
                <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground"><List className="h-4 w-4" /></Button>
              </div>
              <p className="text-sm text-muted-foreground whitespace-nowrap">
                Showing 1-{itemCount} of {itemCount} results
              </p>
              <Select defaultValue="default">
                <SelectTrigger className="w-[140px] h-10">
                  <SelectValue placeholder="Sort By" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="default">Default sorting</SelectItem>
                  <SelectItem value="latest">Sort by latest</SelectItem>
                  <SelectItem value="popular">Sort by popularity</SelectItem>
                </SelectContent>
              </Select>
              <div className="relative w-full sm:w-64">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input placeholder="Search from here..." className="pl-10 h-10" />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {subcategoryProducts.length > 0 ? (
              subcategoryProducts.map((product, idx) => {
                const badge = BADGES[idx % BADGES.length];
                const image = PlaceHolderImages.find((img) => img.id === product.imageId);
                return (
                  <Link key={product.name} href="/contact" className="group">
                    <Card className="relative h-full border-slate-200 shadow-none hover:border-primary/50 transition-colors flex flex-col items-center p-6 rounded-none">
                      <div className={cn("absolute top-4 right-0 px-3 py-1 text-[10px] font-bold tracking-tighter", badge.className)}>
                        {badge.label}
                      </div>
                      <div className="aspect-square relative w-full mb-6 flex items-center justify-center p-4">
                        {image && (
                          <Image
                            src={image.imageUrl}
                            alt={product.name}
                            width={300}
                            height={300}
                            className="object-contain transition-transform duration-300 group-hover:scale-105"
                          />
                        )}
                      </div>
                      <div className="text-center mt-auto">
                        <h3 className="font-headline text-[15px] font-bold text-slate-900 group-hover:text-primary transition-colors line-clamp-2 min-h-[40px]">
                          {product.name}
                        </h3>
                        <p className="text-xs text-muted-foreground mt-2 line-clamp-1 italic">{product.application}</p>
                        <p className="text-[13px] font-bold text-slate-500 mt-2 uppercase tracking-wide">Inquire for Quote</p>
                      </div>
                    </Card>
                  </Link>
                );
              })
            ) : (
              <div className="col-span-full text-center py-24 bg-slate-50 border border-dashed border-slate-300">
                <p className="text-muted-foreground font-medium">Detailed models for this sub-item are available upon technical request.</p>
                <Button asChild variant="outline" className="mt-6 font-bold">
                  <Link href="/contact">Submit Technical Inquiry</Link>
                </Button>
              </div>
            )}
          </div>

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
