
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Filter, Globe, ShieldCheck, RefreshCw, MousePointerClick, CheckCircle, Goal, Eye, Award } from 'lucide-react';

const technicalParameters = [
  'Service temperature [Operating, design]',
  'Service pressure [Operating, design]',
  'Initial clean pressure drop',
  'Pressure drop restrictions [Total Allowable Pressure]',
  'Service flow rate [Operating, design]',
  'Filter area',
  'Flux rate [gpm/ft2]',
  'Fluid density',
  'Fluid viscosity',
  'Efficiency required',
  'Removal rating',
  'Filter medium and gasket/O-ring chemical compatibility',
  'Filter life required [Continuous or batch operation]',
  'Type of particulate [Hard, gelatinous]',
];

const impactFactors = [
  {
    title: 'ECONOMICS',
    icon: Globe,
    color: 'text-blue-600',
    borderColor: 'border-blue-600',
    description: 'We prioritize long-term cost-efficiency in micron filtration, offering economical engineering solutions without compromising on performance.',
  },
  {
    title: 'RELIABILITY',
    icon: ShieldCheck,
    color: 'text-teal-600',
    borderColor: 'border-teal-600',
    description: 'Reliability is our cornerstone. We provide precise micron ratings verified by rigorous testing to ensure your systems never fail.',
  },
  {
    title: 'CONSISTENCY',
    icon: RefreshCw,
    color: 'text-pink-600',
    borderColor: 'border-pink-600',
    description: 'Our media offers industry-leading reproducibility, ranging from Nominal to Absolute Beta 1000 ratings for critical applications.',
  },
  {
    title: 'EASE OF USE',
    icon: MousePointerClick,
    color: 'text-orange-600',
    borderColor: 'border-orange-600',
    description: 'Smart design facilitates quick housing access, allowing for seamless cartridge replacement and minimal maintenance downtime.',
  },
];

export default function AboutPage() {
  const aboutImage = PlaceHolderImages.find((img) => img.id === 'about-us-manufacturing');
  const pageTitle = "About VVIOK Industry";

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Page Header */}
      <section className="bg-white py-12 border-b">
        <div className="container text-center">
          <h1 className="font-headline text-4xl md:text-5xl font-bold text-slate-900">{pageTitle}</h1>
          <p className="mt-2 text-muted-foreground flex items-center justify-center gap-2">
            <span>Home</span>
            <span>&raquo;</span>
            <span className="text-primary font-medium">About Us</span>
          </p>
        </div>
      </section>

      {/* Intro Section - SEO & EEAT Optimized */}
      <section className="py-16">
        <div className="container relative">
          <div className="bg-white p-8 md:p-12 shadow-xl rounded-sm border-l-8 border-primary relative z-10">
            <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Leading Manufacturer of Industrial Filtration & Water Storage Solutions</h2>
              <p className="text-lg">
                Established in the year <strong>2021</strong>, <strong>VVIOK Industry</strong> has quickly positioned itself as a premier manufacturer of a wide range of <strong>Stainless Steel Filter Housing</strong>, <strong>Stainless Steel Water Storage Tanks</strong>, and <strong>Industrial Duplex Filters</strong>. Based in India, we leverage a qualified team of engineers with 15-23 years of specialized experience to provide total filtration solutions to global markets.
              </p>
              <p>
                We direct all our activities to cater to the evolving expectations of our customers. By providing excellent quality products engineered for peak performance, we ensure total customer gratification. Furthermore, we follow moral business policies and maintain crystal-pure transparency in all our transactions to foster healthy, long-term relationships with our global clientele.
              </p>
              <div className="mt-10 p-6 bg-slate-50 rounded-lg border border-slate-100 flex items-start gap-4">
                <Award className="h-10 w-10 text-primary flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-slate-900 text-xl">Our Leadership</h3>
                  <p className="mt-2 text-slate-600 italic">
                    "For our accomplishment story, we are grateful to <strong>Mr. Rajesh Panchal</strong>, whose continual backing and direction have been instrumental in our attaining exponential development in the current industrial market."
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* Accent Box */}
          <div className="absolute top-0 left-0 w-32 h-32 bg-primary/10 -translate-x-4 -translate-y-4 rounded-sm -z-0" />
        </div>
      </section>

      {/* Technical Parameters Section - Demonstrates Expertise */}
      <section className="py-12 bg-white border-y">
        <div className="container">
          <div className="max-w-4xl mx-auto bg-slate-50 p-8 md:p-12 rounded-sm border shadow-sm">
            <h2 className="font-headline text-3xl font-bold text-center mb-10">Core Engineering Parameters</h2>
            <div className="grid md:grid-cols-2 gap-x-12 gap-y-4">
              {technicalParameters.map((param, index) => (
                <div key={index} className="flex items-start gap-3">
                  <Filter className="h-5 w-5 text-slate-900 mt-1 flex-shrink-0" />
                  <span className="text-slate-700 font-medium">{param}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Impact Factors Section */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="font-headline text-3xl md:text-4xl font-bold max-w-2xl mx-auto leading-tight">
              Strategic Factors Influencing Our Filtration Design
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {impactFactors.map((factor) => (
              <div key={factor.title} className="flex flex-col items-center">
                <div className={`w-full aspect-square bg-white border-2 ${factor.borderColor} rounded-2xl flex flex-col items-center justify-center p-6 shadow-md transition-transform hover:-translate-y-1`}>
                  <div className={`p-4 rounded-full bg-slate-50 mb-4`}>
                    <factor.icon className={`h-12 w-12 ${factor.color}`} />
                  </div>
                  <h3 className={`font-headline text-lg font-bold ${factor.color}`}>{factor.title}</h3>
                </div>
                <div className="mt-6 text-center">
                  <p className="text-sm text-slate-600 line-clamp-4">{factor.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="py-20 bg-primary/5">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white p-10 rounded-sm shadow-lg border-t-4 border-primary">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <Goal className="h-8 w-8 text-primary" />
                </div>
                <h2 className="font-headline text-2xl font-bold">Our Vision</h2>
              </div>
              <p className="text-slate-700 leading-relaxed">
                To design, develop, and manufacture high-performance <strong>Stainless Steel Water Storage Tanks</strong> and filtration systems that meet the diverse, critical needs of our customers across global industries while maintaining engineering excellence.
              </p>
            </div>
            <div className="bg-white p-10 rounded-sm shadow-lg border-t-4 border-primary">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <Eye className="h-8 w-8 text-primary" />
                </div>
                <h2 className="font-headline text-2xl font-bold">Our Mission</h2>
              </div>
              <p className="text-slate-700 leading-relaxed">
                To be the leading global supplier of <strong>industrial filter housing</strong> solutions, delivering innovative products that improve operational efficiency, protect equipment, and ensure absolute safety for our partners.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Standards */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="prose prose-lg max-w-none">
              <h2 className="font-headline text-3xl font-bold">Manufacturing Quality & Excellence</h2>
              <p>
                Our manufacturing infrastructure is designed to deliver reliability and precision. We adhere to stringent quality management systems to ensure that every filter and tank leaving our facility meets international performance standards.
              </p>
              <ul className="list-none p-0 space-y-4">
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0" />
                  <span className="font-medium">ASME and CE Standard Compliance</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0" />
                  <span className="font-medium">Specialized SS 316, SS 304 Fabrication</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0" />
                  <span className="font-medium">100% In-house Quality Performance Testing</span>
                </li>
              </ul>
            </div>
            {aboutImage && (
              <div className="aspect-w-16 aspect-h-10 rounded-sm overflow-hidden shadow-2xl">
                <Image
                  src={aboutImage.imageUrl}
                  alt={pageTitle}
                  width={800}
                  height={500}
                  className="object-cover"
                  data-ai-hint="manufacturing plant"
                />
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
