import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Globe, Package, ShieldCheck, Ship } from 'lucide-react';

export default function ExportPage() {
  const exportImage = PlaceHolderImages.find((img) => img.id === 'export-logistics');

  return (
    <div>
      {/* Page Header */}
      <section className="bg-primary/5 py-12 md:py-20 text-center">
        <div className="container">
          <h1 className="font-headline text-4xl md:text-5xl font-bold text-primary">Global Export Capabilities</h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            Delivering Indian manufacturing excellence to the world with reliable logistics and unwavering quality assurance.
          </p>
        </div>
      </section>

      {/* Hero Image for Export */}
      {exportImage && (
        <section className="container py-16">
          <div className="aspect-w-16 aspect-h-7 rounded-lg overflow-hidden shadow-lg">
            <Image
              src={exportImage.imageUrl}
              alt={exportImage.description}
              width={1200}
              height={525}
              className="object-cover"
              data-ai-hint={exportImage.imageHint}
            />
          </div>
        </section>
      )}

      {/* Export Details */}
      <section className="pb-16 md:pb-24">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardHeader className="flex-row items-center gap-4">
                <Globe className="h-10 w-10 text-primary" />
                <CardTitle className="font-headline text-2xl">Countries Served</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We have a strong and growing presence in international markets. Our products are trusted by clients in:
                </p>
                <ul className="mt-4 list-disc list-inside text-muted-foreground">
                  <li>Middle East (UAE, Saudi Arabia)</li>
                  <li>Southeast Asia (Singapore, Malaysia)</li>
                  <li>Africa (Nigeria, South Africa)</li>
                  <li>Europe (Germany, UK)</li>
                  <li>North &amp; South America</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex-row items-center gap-4">
                <Package className="h-10 w-10 text-primary" />
                <CardTitle className="font-headline text-2xl">Packaging &amp; Logistics</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We understand the importance of safe and timely delivery. Our expert logistics team ensures:
                </p>
                <ul className="mt-4 list-disc list-inside text-muted-foreground">
                  <li>Customized, sea-worthy packaging to prevent damage.</li>
                  <li>Compliance with all international shipping regulations.</li>
                  <li>Partnerships with leading freight forwarders.</li>
                  <li>Complete documentation support for smooth customs clearance.</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex-row items-center gap-4">
                <ShieldCheck className="h-10 w-10 text-primary" />
                <CardTitle className="font-headline text-2xl">International Quality</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Our commitment to quality transcends borders. International clients can expect:
                </p>
                <ul className="mt-4 list-disc list-inside text-muted-foreground">
                  <li>Products manufactured to global standards (ISO, CE).</li>
                  <li>Third-party inspection services available upon request.</li>
                  <li>Full traceability of materials and production batches.</li>
                  <li>Comprehensive after-sales and technical support.</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
