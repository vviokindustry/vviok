import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Filter, Globe, ShieldCheck, RefreshCw, MousePointerClick, CheckCircle, Goal, Eye } from 'lucide-react';

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
    description: 'Economics is very important in micron filtration and we, being an experience team of engineers, recommend long-term economical solution to the problems.',
  },
  {
    title: 'RELIABILITY',
    icon: ShieldCheck,
    color: 'text-teal-600',
    borderColor: 'border-teal-600',
    description: 'Reliability is most important in micron filtration. Giving micron rating to the media is an arbitrary micrometer value indicated by the filter manufacturer.',
  },
  {
    title: 'CONSISTENCY',
    icon: RefreshCw,
    color: 'text-pink-600',
    borderColor: 'border-pink-600',
    description: 'Consistency and re-productivity is must in filter media. We give Nominal, absolute Beta or up to 1000 Bacterial Aerosol Challenge tested cartridges depend upon the application.',
  },
  {
    title: 'EASE OF USE',
    icon: MousePointerClick,
    color: 'text-orange-600',
    borderColor: 'border-orange-600',
    description: 'Ease of use is being considered during sizing and designing of the system. We give quick opening of the housing to replace/remove the cartridge within no time.',
  },
];

export default function AboutPage() {
  const aboutImage = PlaceHolderImages.find((img) => img.id === 'about-us-manufacturing');

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Page Header */}
      <section className="bg-white py-12 border-b">
        <div className="container text-center">
          <h1 className="font-headline text-4xl md:text-5xl font-bold text-slate-900">About Us</h1>
          <p className="mt-2 text-muted-foreground flex items-center justify-center gap-2">
            <span>Home</span>
            <span>&raquo;</span>
            <span className="text-primary font-medium">About Us</span>
          </p>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-16">
        <div className="container relative">
          <div className="bg-white p-8 md:p-12 shadow-xl rounded-sm border-l-8 border-primary relative z-10">
            <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed">
              <p>
                We take pleasure to introduce our self as a team of qualified and experience team of engineers involved in filtration business. Most of our engineers are trained and having more than 15-23 years of experience in providing industrial and hydraulic filter to the Indian industry. Based on fluid parameters, we design and select the filter cartridge from our wide range and manufacture required filter housing in C.S., M.S., M.S.R.L., S.S. 316, S.S. 304, <strong>Industrial Filter</strong>, Filter Housing Exporter, Resin-Bonded Filter Cartridge, <strong>Industrial Filter Supplier</strong>, Polypropylene Cartridge Manufacturer, Bag Filter Housing India and give total solution to the end users, OEM or traders.
              </p>
              <p>
                We have been able to offer filters for most demanding applications from single source. To effectively select and specify any optimum filter element for a given application, several guidelines should be followed. Many variables need to be considered.
              </p>
            </div>
          </div>
          {/* Accent Box */}
          <div className="absolute top-0 left-0 w-32 h-32 bg-primary/10 -translate-x-4 -translate-y-4 rounded-sm -z-0" />
        </div>
      </section>

      {/* Technical Parameters Section */}
      <section className="py-12 bg-white border-y">
        <div className="container">
          <div className="max-w-4xl mx-auto bg-slate-50 p-8 md:p-12 rounded-sm border shadow-sm">
            <h2 className="font-headline text-3xl font-bold text-center mb-10">These Includes</h2>
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
              Any Combination Of These Factors Can Impact Final Selection
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
              <p className="text-slate-700 leading-relaxed italic">
                "To design, develop, and manufacture high-quality filtration systems that meet the diverse needs of our customers across various industries, while maintaining the highest standards of engineering excellence."
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
                "To be the leading provider of innovative, high-quality filtration solutions that improve efficiency, protect equipment, and contribute to a cleaner environment for our global partners."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Standards (kept as a value-add) */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="prose prose-lg max-w-none">
              <h2 className="font-headline text-3xl font-bold">Quality & Excellence</h2>
              <p>
                Our manufacturing infrastructure is designed to deliver reliability and precision. We adhere to stringent quality management systems to ensure that every filter leaving our facility meets international performance standards.
              </p>
              <ul className="list-none p-0 space-y-4">
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0" />
                  <span className="font-medium">ISO Certified Manufacturing Processes</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0" />
                  <span className="font-medium">ASME and CE Standard Compliance</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0" />
                  <span className="font-medium">100% In-house Performance Testing</span>
                </li>
              </ul>
            </div>
            {aboutImage && (
              <div className="aspect-w-16 aspect-h-10 rounded-sm overflow-hidden shadow-2xl">
                <Image
                  src={aboutImage.imageUrl}
                  alt={aboutImage.description}
                  width={800}
                  height={500}
                  className="object-cover"
                  data-ai-hint={aboutImage.imageHint}
                />
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
