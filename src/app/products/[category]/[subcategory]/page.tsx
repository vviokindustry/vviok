import { products, productCategories } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ChevronRight, Home, Package, Share2, Facebook, Twitter, Linkedin, ChevronLeft, CheckCircle2 } from 'lucide-react';
import { Table, TableBody, TableCell, TableRow } from '@/components/ui/table';

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
  const product = subcategoryProducts[0]; // Display the primary product for this sub-category

  if (!product) {
    return notFound();
  }

  const productImage = PlaceHolderImages.find((img) => img.id === product.imageId);
  const relatedSubcategories = currentCategory.subcategories?.filter(sub => sub.slug !== subcategory).slice(0, 3) || [];

  return (
    <div className="bg-white min-h-screen">
      {/* Breadcrumbs */}
      <div className="bg-slate-50 border-b">
        <div className="container py-4 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-muted-foreground overflow-x-auto whitespace-nowrap">
          <Link href="/" className="hover:text-primary flex items-center gap-1 transition-colors">
            <Home className="h-3.3 w-3.3" /> Home
          </Link>
          <ChevronRight className="h-3 w-3" />
          <Link href="/products" className="hover:text-primary transition-colors">Products</Link>
          <ChevronRight className="h-3 w-3" />
          <Link href={`/products/${currentCategory.slug}`} className="hover:text-primary transition-colors">{currentCategory.name}</Link>
          <ChevronRight className="h-3 w-3" />
          <span className="text-primary">{currentSubcategory.name}</span>
        </div>
      </div>

      <section className="py-12 md:py-20">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Product Image Section */}
            <div className="space-y-6">
              <div className="aspect-square relative bg-slate-50 rounded-sm border overflow-hidden flex items-center justify-center p-8 group">
                {productImage && (
                  <Image
                    src={productImage.imageUrl}
                    alt={product.name}
                    width={600}
                    height={600}
                    className="object-contain transition-transform duration-500 group-hover:scale-110"
                    priority
                  />
                )}
              </div>
              <div className="grid grid-cols-4 gap-4">
                 <div className="aspect-square relative bg-slate-50 border rounded-sm p-2 cursor-pointer hover:border-primary transition-colors">
                    {productImage && <Image src={productImage.imageUrl} alt="thumbnail" fill className="object-contain p-1" />}
                 </div>
                 <div className="aspect-square relative bg-slate-50 border rounded-sm p-2 cursor-pointer hover:border-primary transition-colors opacity-50">
                    {productImage && <Image src={productImage.imageUrl} alt="thumbnail" fill className="object-contain p-1 grayscale" />}
                 </div>
                 <div className="aspect-square relative bg-slate-50 border rounded-sm p-2 cursor-pointer hover:border-primary transition-colors opacity-50">
                    {productImage && <Image src={productImage.imageUrl} alt="thumbnail" fill className="object-contain p-1 grayscale" />}
                 </div>
              </div>
            </div>

            {/* Product Details Section */}
            <div className="flex flex-col">
              <h1 className="font-headline text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight mb-6 uppercase">
                {product.name}
              </h1>
              
              <div className="prose prose-slate mb-8 max-w-none">
                <p className="text-muted-foreground text-lg leading-relaxed">
                  {product.description || `High-performance industrial solution designed for ${product.application.toLowerCase()}. Engineered with premium stainless steel components to ensure durability and precision in demanding environments.`}
                </p>
                {product.features && (
                  <div className="mt-6 space-y-2">
                    <p className="font-bold text-slate-900 uppercase text-xs tracking-widest mb-3">Key Features:</p>
                    {product.features.slice(0, 4).map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm text-slate-600">
                        <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mb-10 pt-6 border-t">
                <Button asChild size="lg" className="flex-1 bg-[#ff5a00] hover:bg-[#e65100] text-white font-bold uppercase tracking-wider rounded-sm h-14 shadow-md">
                  <Link href="/contact">
                    <Package className="mr-2 h-5 w-5" /> Inquire Now
                  </Link>
                </Button>
                <Button variant="outline" size="icon" className="h-14 w-14 rounded-sm border-slate-200">
                  <Share2 className="h-5 w-5 text-slate-400" />
                </Button>
              </div>

              <div className="space-y-4 pt-4 border-t border-slate-100">
                <div className="flex items-center gap-2">
                  <span className="text-[11px] font-bold text-slate-900 uppercase tracking-widest min-w-[80px]">Categories:</span>
                  <span className="text-[11px] text-muted-foreground">{currentCategory.name}, {currentSubcategory.name}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[11px] font-bold text-slate-900 uppercase tracking-widest min-w-[80px]">Tags:</span>
                  <span className="text-[11px] text-muted-foreground">Industrial, Stainless Steel, Premium</span>
                </div>
                <div className="flex items-center gap-4 pt-2">
                  <span className="text-[11px] font-bold text-slate-900 uppercase tracking-widest min-w-[80px]">Share:</span>
                  <div className="flex gap-4">
                    <Facebook className="h-4 w-4 text-slate-400 hover:text-primary cursor-pointer transition-colors" />
                    <Twitter className="h-4 w-4 text-slate-400 hover:text-primary cursor-pointer transition-colors" />
                    <Linkedin className="h-4 w-4 text-slate-400 hover:text-primary cursor-pointer transition-colors" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Product Tabs Section */}
          <div className="mt-20">
            <Tabs defaultValue="description" className="w-full">
              <TabsList className="w-full justify-start bg-transparent border-b rounded-none h-auto p-0 gap-8">
                <TabsTrigger value="description" className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:shadow-none font-bold uppercase tracking-widest text-xs py-4 px-0">Description</TabsTrigger>
                <TabsTrigger value="info" className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:shadow-none font-bold uppercase tracking-widest text-xs py-4 px-0">Additional Information</TabsTrigger>
              </TabsList>
              <div className="py-10">
                <TabsContent value="description" className="mt-0">
                  <div className="prose prose-slate max-w-4xl text-slate-600">
                    <p className="mb-6">
                      The {product.name} represents the pinnacle of industrial filtration technology. Specifically engineered for {product.application.toLowerCase()}, this system offers unparalleled reliability and efficiency. 
                    </p>
                    {product.features && (
                      <div className="mb-6">
                        <h4 className="font-bold text-slate-900 mb-4">Key Advantages:</h4>
                        <ul className="list-disc pl-5 space-y-2">
                          {product.features.map((feature, idx) => (
                            <li key={idx}>{feature}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                    <p>
                      Each unit is manufactured using high-grade materials, ensuring long-term resistance to corrosion and wear. The precision-engineered design allows for quick maintenance and minimal downtime, making it an essential component for critical process environments.
                    </p>
                  </div>
                </TabsContent>
                <TabsContent value="info" className="mt-0">
                  <div className="max-w-3xl">
                    <h4 className="font-bold text-slate-900 mb-6 uppercase tracking-wider text-sm">Technical Specifications</h4>
                    <Card className="rounded-none shadow-none border-slate-100">
                      <Table>
                        <TableBody>
                          {product.specifications ? (
                            Object.entries(product.specifications).map(([key, value]) => (
                              <TableRow key={key} className="hover:bg-transparent border-slate-50">
                                <TableCell className="font-bold text-slate-900 bg-slate-50/50 w-1/3 py-4">{key}</TableCell>
                                <TableCell className="text-slate-600 py-4">{value}</TableCell>
                              </TableRow>
                            ))
                          ) : (
                            <>
                              <TableRow className="hover:bg-transparent border-slate-50">
                                <TableCell className="font-bold text-slate-900 bg-slate-50/50 w-1/3 py-4">Material</TableCell>
                                <TableCell className="text-slate-600 py-4">High Grade Stainless Steel (SS304/SS316)</TableCell>
                              </TableRow>
                              <TableRow className="hover:bg-transparent border-slate-50">
                                <TableCell className="font-bold text-slate-900 bg-slate-50/50 w-1/3 py-4">Standard</TableCell>
                                <TableCell className="text-slate-600 py-4">ASME / CE Compliant</TableCell>
                              </TableRow>
                              <TableRow className="hover:bg-transparent border-slate-50">
                                <TableCell className="font-bold text-slate-900 bg-slate-50/50 w-1/3 py-4">Warranty</TableCell>
                                <TableCell className="text-slate-600 py-4">12 Months Manufacturing Warranty</TableCell>
                              </TableRow>
                              <TableRow className="hover:bg-transparent border-slate-50">
                                <TableCell className="font-bold text-slate-900 bg-slate-50/50 w-1/3 py-4">Origin</TableCell>
                                <TableCell className="text-slate-600 py-4">Proudly Manufactured in India</TableCell>
                              </TableRow>
                            </>
                          )}
                        </TableBody>
                      </Table>
                    </Card>
                  </div>
                </TabsContent>
              </div>
            </Tabs>
          </div>

          {/* Related Products Section */}
          {relatedSubcategories.length > 0 && (
            <div className="mt-24">
              <div className="flex items-center justify-between mb-10">
                <h2 className="font-headline text-2xl font-bold text-slate-900 uppercase">Related Products</h2>
                <div className="flex gap-2">
                  <Button variant="outline" size="icon" className="h-8 w-8 rounded-sm"><ChevronLeft className="h-4 w-4" /></Button>
                  <Button variant="outline" size="icon" className="h-8 w-8 rounded-sm bg-[#ff5a00] text-white border-[#ff5a00]"><ChevronRight className="h-4 w-4" /></Button>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {relatedSubcategories.map((sub) => {
                  const subProduct = products[sub.slug]?.[0];
                  const subImage = subProduct ? PlaceHolderImages.find(img => img.id === subProduct.imageId) : null;
                  
                  return (
                    <Link key={sub.slug} href={`/products/${currentCategory.slug}/${sub.slug}`} className="group">
                      <Card className="h-full border-slate-100 shadow-none hover:border-primary/50 transition-all rounded-sm flex flex-col items-center p-8 overflow-hidden">
                        <div className="aspect-square relative w-full mb-8 flex items-center justify-center">
                          {subImage && (
                            <Image
                              src={subImage.imageUrl}
                              alt={sub.name}
                              width={250}
                              height={250}
                              className="object-contain transition-transform duration-500 group-hover:scale-105"
                            />
                          )}
                        </div>
                        <div className="text-center mt-auto w-full">
                          <h3 className="font-headline text-[15px] font-bold text-slate-900 group-hover:text-primary transition-colors line-clamp-2 min-h-[40px] uppercase">
                            {sub.name}
                          </h3>
                          <p className="text-xs font-bold text-primary mt-4 tracking-widest">INQUIRE FOR DETAILS</p>
                        </div>
                      </Card>
                    </Link>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
