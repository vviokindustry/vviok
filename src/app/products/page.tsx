import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { products } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';

type ProductKey = keyof typeof products;

const productTabs: { value: ProductKey; label: string }[] = [
  { value: 'industrial-filters', label: 'Industrial Filters' },
  { value: 'air-filters', label: 'Air Filters' },
  { value: 'liquid-filters', label: 'Liquid Filters' },
  { value: 'customized-filtration', label: 'Customized Solutions' },
];

export default function ProductsPage() {
  return (
    <div>
      {/* Page Header */}
      <section className="bg-primary/5 py-12 md:py-20 text-center">
        <div className="container">
          <h1 className="font-headline text-4xl md:text-5xl font-bold text-primary">Our Filtration Products</h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            Explore our comprehensive range of high-performance filtration products, engineered for reliability and efficiency across various industries.
          </p>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <Tabs defaultValue="industrial-filters" className="w-full">
            <div className="flex justify-center">
              <TabsList className="grid w-full max-w-2xl grid-cols-2 md:grid-cols-4 h-auto">
                {productTabs.map((tab) => (
                  <TabsTrigger key={tab.value} value={tab.value} className="py-2.5">
                    {tab.label}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            {productTabs.map((tab) => (
              <TabsContent key={tab.value} value={tab.value} className="mt-12">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                  {products[tab.value].map((product) => {
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
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>
    </div>
  );
}
