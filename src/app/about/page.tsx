import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle } from 'lucide-react';

export default function AboutPage() {
  const aboutImage = PlaceHolderImages.find((img) => img.id === 'about-us-manufacturing');

  return (
    <div>
      {/* Page Header */}
      <section className="bg-primary/5 py-12 md:py-20 text-center">
        <div className="container">
          <h1 className="font-headline text-4xl md:text-5xl font-bold text-primary">About VVIOK Industry</h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            Your trusted partner in industrial filtration, committed to quality, innovation, and customer success.
          </p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="prose prose-lg max-w-none">
              <h2 className="font-headline text-3xl font-bold">A Legacy of Filtration Excellence</h2>
              <p>
                Founded on the principles of engineering precision and a commitment to quality, VVIOK Industry has grown to become a leading name in the industrial filtration sector. We are a proud Indian manufacturer, supplier, and exporter, serving a diverse clientele that spans across the globe.
              </p>
              <p>
                Our journey is defined by a relentless pursuit of innovation. We understand that in the industrial world, efficiency, reliability, and compliance are paramount. That's why we've invested in building a world-class manufacturing infrastructure and a team of experts dedicated to solving the most complex filtration challenges.
              </p>
            </div>
            <div>
              {aboutImage && (
                <div className="aspect-w-4 aspect-h-3 rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src={aboutImage.imageUrl}
                    alt={aboutImage.description}
                    width={800}
                    height={600}
                    className="object-cover"
                    data-ai-hint={aboutImage.imageHint}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 md:py-24 bg-primary/5">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="font-headline text-2xl text-primary">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  To design, manufacture, and deliver superior filtration products that enhance our customers' operational efficiency, ensure product quality, and contribute to a safer, cleaner environment. We strive to be a reliable partner through continuous innovation and exceptional service.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="font-headline text-2xl text-primary">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  To be a globally recognized leader in the filtration industry, renowned for our technological expertise, product quality, and unwavering commitment to customer satisfaction. We aim to set new benchmarks for performance and sustainability in filtration.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Quality & Manufacturing */}
      <section className="py-16 md:py-24">
        <div className="container text-center">
          <h2 className="font-headline text-3xl md:text-4xl font-bold">A Trusted Filtration Partner</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            Our strength lies in our robust manufacturing capabilities and a stringent quality assurance process that guarantees excellence in every product.
          </p>
          <div className="grid md:grid-cols-3 gap-8 mt-12 text-left">
            <div className="flex items-start gap-4">
              <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-lg">State-of-the-Art Facility</h3>
                <p className="text-sm text-muted-foreground">Utilizing advanced machinery for precision and high-volume production.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-lg">ISO Certified Processes</h3>
                <p className="text-sm text-muted-foreground">Adhering to internationally recognized quality management systems.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-lg">Expert Engineering Team</h3>
                <p className="text-sm text-muted-foreground">Continuously innovating and developing custom solutions for clients.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
