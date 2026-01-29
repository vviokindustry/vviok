import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { CheckCircle } from 'lucide-react';

const qualityStandards = [
  'ISO 9001:2015 Certified Quality Management System',
  'Adherence to ASME and CE marking standards',
  'Use of FDA-approved materials for food & pharma grades',
  '100% inspection of raw materials and finished goods',
  'Continuous process improvement via Kaizen and Lean manufacturing',
  'Comprehensive performance testing for efficiency and durability',
];

export default function ManufacturingQualityPage() {
  const manufacturingImage = PlaceHolderImages.find((img) => img.id === 'manufacturing-process');
  const qualityImage = PlaceHolderImages.find((img) => img.id === 'quality-control');
  const testingImage = PlaceHolderImages.find((img) => img.id === 'testing-facilities');

  return (
    <div>
      {/* Page Header */}
      <section className="bg-primary/5 py-12 md:py-20 text-center">
        <div className="container">
          <h1 className="font-headline text-4xl md:text-5xl font-bold text-primary">Manufacturing &amp; Quality</h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            Our commitment to excellence is forged in our state-of-the-art manufacturing facilities and rigorous quality control protocols.
          </p>
        </div>
      </section>

      {/* Manufacturing Process */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="prose prose-lg max-w-none">
              <h2 className="font-headline text-3xl font-bold">Our Manufacturing Process</h2>
              <p>
                At VVIOK Industry, we combine cutting-edge technology with expert craftsmanship. Our manufacturing process is optimized for precision, scalability, and efficiency. From raw material sourcing to final assembly, every step is meticulously controlled to produce filtration products that meet the highest standards of performance and reliability.
              </p>
              <ul className="list-none p-0">
                <li className="flex items-start gap-3 mt-4"><CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" /><span>Automated production lines for consistency.</span></li>
                <li className="flex items-start gap-3 mt-4"><CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" /><span>Advanced welding and fabrication techniques.</span></li>
                <li className="flex items-start gap-3 mt-4"><CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" /><span>In-house tooling for rapid prototyping and customization.</span></li>
              </ul>
            </div>
            {manufacturingImage && (
              <div className="aspect-w-4 aspect-h-3 rounded-lg overflow-hidden shadow-lg">
                <Image
                  src={manufacturingImage.imageUrl}
                  alt={manufacturingImage.description}
                  width={800}
                  height={600}
                  className="object-cover"
                  data-ai-hint={manufacturingImage.imageHint}
                />
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Quality Control */}
      <section className="py-16 md:py-24 bg-primary/5">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
             {qualityImage && (
              <div className="aspect-w-4 aspect-h-3 rounded-lg overflow-hidden shadow-lg md:order-last">
                <Image
                  src={qualityImage.imageUrl}
                  alt={qualityImage.description}
                  width={800}
                  height={600}
                  className="object-cover"
                  data-ai-hint={qualityImage.imageHint}
                />
              </div>
            )}
            <div className="prose prose-lg max-w-none">
              <h2 className="font-headline text-3xl font-bold">Uncompromising Quality Control</h2>
              <p>
                Quality is not just a department at VVIOK; it's the foundation of everything we do. Our multi-stage quality control process ensures that every product leaving our facility is flawless. We employ a team of dedicated quality engineers who monitor and test products at every stage of production.
              </p>
              <p>
                Our quality assurance includes dimensional checks, material analysis, pressure testing, and filtration efficiency tests to guarantee that our products perform reliably in the most demanding environments.
              </p>
            </div>
          </div>
        </div>
      </section>
      
       {/* Compliance & Testing */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="prose prose-lg max-w-none">
              <h2 className="font-headline text-3xl font-bold">Compliance and Testing Facilities</h2>
              <p>
                We operate advanced in-house testing facilities to validate product performance against international standards. Our commitment to compliance ensures our products are ready for deployment in regulated industries worldwide.
              </p>
              <ul className="mt-6 space-y-3">
                {qualityStandards.map((standard, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <span>{standard}</span>
                  </li>
                ))}
              </ul>
            </div>
            {testingImage && (
              <div className="aspect-w-4 aspect-h-3 rounded-lg overflow-hidden shadow-lg">
                <Image
                  src={testingImage.imageUrl}
                  alt={testingImage.description}
                  width={800}
                  height={600}
                  className="object-cover"
                  data-ai-hint={testingImage.imageHint}
                />
              </div>
            )}
          </div>
        </div>
      </section>

    </div>
  );
}
