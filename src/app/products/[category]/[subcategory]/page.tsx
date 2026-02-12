import { products, productCategories } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ChevronRight, Home, Package, Share2, CheckCircle2 } from 'lucide-react';
import { Table, TableBody, TableCell, TableRow } from '@/components/ui/table';
import { resolveImageSource } from '@/lib/utils';
import { ProductImageGallery } from '@/components/product-image-gallery';

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
  const product = subcategoryProducts[0];

  if (!product) {
    return notFound();
  }

  const primaryImage = resolveImageSource(product.imageId, PlaceHolderImages);
  const galleryImages = product.imageIds 
    ? product.imageIds.map(id => resolveImageSource(id, PlaceHolderImages))
    : [primaryImage];

  return (
    <div className="bg-white min-h-screen">
      <div className="bg-slate-50 border-b">
        <div className="container py-4 flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground overflow-x-auto whitespace-nowrap">
          <Link href="/" className="hover:text-primary flex items-center gap-2 transition-colors">
            <Home className="h-3.5 w-3.5" /> Home
          </Link>
          <ChevronRight className="h-3 w-3 opacity-30" />
          <Link href="/products" className="hover:text-primary transition-colors">Products</Link>
          <ChevronRight className="h-3 w-3 opacity-30" />
          <Link href={`/products/${currentCategory.slug}`} className="hover:text-primary transition-colors">{currentCategory.name}</Link>
          <ChevronRight className="h-3 w-3 opacity-30" />
          <span className="text-primary">{currentSubcategory.name}</span>
        </div>
      </div>

      <section className="py-12 md:py-20">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <ProductImageGallery images={galleryImages} alt={product.name} />

            <div className="flex flex-col">
              <span className="text-primary font-black uppercase tracking-[0.3em] text-[10px] mb-4">Industrial Grade Excellence</span>
              <h1 className="font-headline text-3xl md:text-5xl font-black text-slate-900 leading-[1.1] mb-8 uppercase tracking-tighter">
                {product.name}
              </h1>
              
              <div className="space-y-8">
                <div className="prose prose-slate max-w-none">
                  <p className="text-slate-600 text-lg md:text-xl leading-relaxed font-medium">
                    {product.description || `High-performance industrial solution designed for ${product.application.toLowerCase()}.`}
                  </p>
                </div>

                {product.features && (
                  <div className="space-y-3 pt-8 border-t">
                    <p className="font-black text-slate-900 uppercase text-[10px] tracking-widest mb-4">Core Performance Features</p>
                    <div className="grid gap-3">
                      {product.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-3 text-base md:text-lg text-slate-700 font-bold">
                          <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mt-12 pt-10 border-t">
                <Button asChild size="lg" className="flex-1 bg-primary hover:bg-primary/90 text-white font-black uppercase tracking-widest rounded-xl h-16 shadow-lg shadow-primary/10 text-sm">
                  <Link href="/contact">
                    <Package className="mr-2 h-5 w-5" /> Send Inquiry
                  </Link>
                </Button>
                <Button variant="outline" size="icon" className="h-16 w-16 rounded-xl border-2 border-slate-100">
                  <Share2 className="h-6 w-6 text-slate-400" />
                </Button>
              </div>
            </div>
          </div>

          <div className="mt-20">
            <Tabs defaultValue="description" className="w-full">
              <TabsList className="w-full justify-start bg-transparent border-b-2 border-slate-100 rounded-none h-auto p-0 gap-10">
                <TabsTrigger value="description" className="rounded-none border-b-4 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:shadow-none font-black uppercase tracking-[0.2em] text-[10px] py-6 px-0">Detailed Specs</TabsTrigger>
                <TabsTrigger value="info" className="rounded-none border-b-4 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:shadow-none font-black uppercase tracking-[0.2em] text-[10px] py-6 px-0">Technical Info</TabsTrigger>
              </TabsList>
              <div className="py-12">
                <TabsContent value="description" className="mt-0 outline-none">
                  <div className="max-w-4xl space-y-8">
                    <p className="text-slate-600 text-lg font-medium leading-relaxed">
                      The {product.name} is the pinnacle of engineering for {product.application.toLowerCase()}.
                    </p>
                    {product.features && (
                      <div className="bg-slate-50 p-10 rounded-[2rem] border-2 border-slate-100">
                        <h4 className="font-black text-slate-900 mb-6 uppercase tracking-tight text-xl">Technical Advantages</h4>
                        <ul className="grid md:grid-cols-2 gap-4 list-none p-0">
                          {product.features.map((feature, idx) => (
                            <li key={idx} className="flex gap-2 text-base font-bold text-slate-600">
                              <span className="text-primary">–</span> {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </TabsContent>
                <TabsContent value="info" className="mt-0 outline-none">
                  <div className="max-w-4xl">
                    <h4 className="font-black text-slate-900 mb-8 uppercase tracking-widest text-[10px]">Product Specifications</h4>
                    <div className="rounded-[1.5rem] shadow-xl shadow-slate-200 border-2 border-slate-100 overflow-hidden bg-white">
                      <Table>
                        <TableBody>
                          {product.specifications ? (
                            Object.entries(product.specifications).map(([key, value]) => (
                              <TableRow key={key} className="hover:bg-slate-50 border-slate-100 transition-colors">
                                <TableCell className="font-black text-slate-900 bg-slate-50/50 w-2/5 py-4 px-6 text-[10px] uppercase tracking-widest border-r">{key}</TableCell>
                                <TableCell className="text-slate-700 py-4 px-6 text-base font-bold">{value}</TableCell>
                              </TableRow>
                            ))
                          ) : (
                            <TableRow>
                              <TableCell className="text-center py-8 text-slate-400">Standard industrial specifications apply.</TableCell>
                            </TableRow>
                          )}
                        </TableBody>
                      </Table>
                    </div>
                  </div>
                </TabsContent>
              </div>
            </Tabs>
          </div>
        </div>
      </section>
    </div>
  );
}
