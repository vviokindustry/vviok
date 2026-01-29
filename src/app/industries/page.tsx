import { industries } from '@/lib/data';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function IndustriesPage() {
  return (
    <div>
      {/* Page Header */}
      <section className="bg-primary/5 py-12 md:py-20 text-center">
        <div className="container">
          <h1 className="font-headline text-4xl md:text-5xl font-bold text-primary">Industries We Serve</h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            We provide specialized filtration solutions to meet the unique challenges of diverse industrial sectors, ensuring operational excellence and compliance.
          </p>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry) => (
              <Card key={industry.name} className="flex flex-col text-center items-center">
                <CardHeader>
                  <div className="flex items-center justify-center h-20 w-20 rounded-full bg-primary/10 text-primary mx-auto mb-4">
                    <industry.icon className="h-10 w-10" />
                  </div>
                  <CardTitle className="font-headline text-2xl">{industry.name}</CardTitle>
                </CardHeader>
                <CardContent className="flex-1">
                  <p className="text-muted-foreground">{industry.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
