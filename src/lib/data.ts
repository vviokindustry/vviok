import {
  Factory,
  CheckCircle,
  Globe,
  Ship,
  Package,
  Droplets,
  FlaskConical,
  HeartPulse,
  Grape,
  Fuel,
  Building,
  Settings,
  Lightbulb,
  Award,
  Database,
  Container,
} from 'lucide-react';

export interface Subcategory {
  name: string;
  slug: string;
}

export interface Category {
  name: string;
  slug: string;
  description: string;
  imageId: string;
  subcategories?: Subcategory[];
  metaTitle?: string;
  metaDescription?: string;
  metaKeywords?: string;
  pageH1?: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface ProductDetail {
  name: string;
  application: string;
  imageId: string;
  imageIds?: string[];
  description?: string;
  detailedSpecs?: string;
  features?: string[];
  specifications?: Record<string, string>;
  faqs?: FAQ[];
  metaTitle?: string;
  metaDescription?: string;
  metaKeywords?: string;
}

export const productCategories: Category[] = [
  {
    name: 'Filter Cartridge',
    slug: 'filter-cartridge-manufacturer',
    pageH1: 'Top Rated Filter Cartridge Manufacturer & Supplier in Ahmedabad, India',
    description: `VVIOK Industry is a premier filter cartridge manufacturer in Ahmedabad, India, specializing in high-efficiency micro-filtration systems. Our diverse range includes premium PP Spun, Pleated, and PTFE cartridges designed for maximum durability. As a leading filter cartridge manufacturer in India, we utilize advanced thermal bonding and melt-blown technology to ensure zero fiber migration and absolute purity. Our solutions cater to critical sectors like pharmaceuticals, chemicals, and food processing, providing customized industrial cartridge filters that meet global performance benchmarks for precision and reliability.`,
    metaTitle: 'Filter Cartridge Manufacturer Ahmedabad | Industrial Filter Supplier India',
    metaDescription: 'Leading filter cartridge manufacturer in India. We supply premium PP spun, pleated, and PTFE cartridges for industrial water treatment and chemical processing.',
    metaKeywords: 'filter cartridge manufacturer ahmedabad, industrial filter cartridge supplier india, pp spun filter manufacturer, pleated filter supplier, microfiltration india, ss wire mesh cartridge manufacturer',
    imageId: 'product-industrial-filter',
    subcategories: [
      { name: 'PP Pleated Filter Cartridge', slug: 'pp-pleated-filter-cartridge-supplier' },
      { name: 'PP Spun Filter Cartridge', slug: 'pp-spun-filter-cartridge-supplier' },
      { name: 'PTFE Pleated Filter Cartridge', slug: 'ptfe-pleated-filter-cartridge-supplier' },
      { name: 'SS Sintered Powder Cartridge', slug: 'ss-sintered-powder-cartridge' },
      { name: 'SS Wire Mesh Cartridge', slug: 'ss-wire-mesh-cartridge' },
    ]
  },
  {
    name: 'Filter Housing',
    slug: 'filter-housing-manufacturer',
    pageH1: 'Precision Filter Housing Manufacturer in Ahmedabad, India',
    description: `As a leading filter housing manufacturer in Ahmedabad, we engineer high-performance stainless steel vessels for demanding industrial liquid and gas filtration. Our expertise spans single-bag, multi-cartridge, and duplex housings, all fabricated to ensure 100% bypass-free operation. Every unit is pressure-tested and designed for easy maintenance, ensuring long-term reliability in water treatment and chemical plants. We focus on engineering excellence, utilizing SS 304 and 316 grades to provide corrosion-resistant housing solutions for a global clientele.`,
    metaTitle: 'Filter Housing Manufacturer India | Stainless Steel Bag & Cartridge Housing',
    metaDescription: 'Trusted filter housing manufacturer in Ahmedabad. Supplying SS bag filter housing, multi-cartridge vessels, and duplex filters for industrial applications.',
    metaKeywords: 'filter housing manufacturer india, ss bag filter housing supplier, industrial cartridge housing, duplex filter manufacturer, multi bag filter housing ahmedabad',
    imageId: 'product-cartridge-housing-1',
    subcategories: [
      { name: 'Multi-Cartridge Filter Housing', slug: 'multi-cartridge-filter-housing' },
      { name: 'Bag Filter Housing', slug: 'bag-filter-housing' },
      { name: 'Duplex Filter Housing', slug: 'duplex-filter-housing-supplier' },
      { name: 'Catridge Filter Housing', slug: 'catridge-filter-housing-supplier' },
      { name: 'Vent Filter Housing', slug: 'vent-filter-housing-supplier' },
      { name: 'Strainer Filter Housing', slug: 'industrial-strainer-filter-housing-supplier' },
      { name: 'Multi-Bag Filter Housing', slug: 'industrial-multi-bag-filter-housing' },
    ]
  },
  {
    name: 'Industrial Strainer',
    slug: 'industrial-strainer-filters',
    pageH1: 'Industrial Strainer Filter Manufacturer & Supplier in Ahmedabad',
    description: `VVIOK Industry is a trusted industrial strainer filter manufacturer in Ahmedabad, India. We provide robust solutions to protect your downstream equipment from debris and coarse particles. Our range includes Basket, Conical, and Taper strainers, engineered for minimal pressure drop and maximum flow efficiency. Fabricated from high-grade stainless steel, our strainers are essential for pipeline protection in the oil, gas, and chemical sectors. We prioritize ease of cleaning and durability in every custom strainer we build for our international partners.`,
    metaTitle: 'Industrial Strainer Manufacturer India | Basket & Conical Strainer Supplier',
    metaDescription: 'Premier industrial strainer manufacturer in Ahmedabad. Providing SS basket strainers, conical strainers, and pleated strainers for equipment protection.',
    metaKeywords: 'industrial strainer manufacturer ahmedabad, basket strainer supplier india, conical strainer manufacturer, pleated strainer filter, pipeline protection strainers',
    imageId: 'product-vent-filter-1',
    subcategories: [
      { name: 'Conical Strainers', slug: 'conical-strainer-manufacturer' },
      { name: 'Basket Strainers', slug: 'basket-strainer-manufacturer' },
      { name: 'Pleated Strainers', slug: 'pleated-strainer-manufacturer' },
      { name: 'Taper Basket Strainers', slug: 'taper-basket-strainer-manufacturer' },
    ]
  },
  {
    name: 'Industrial Vessels',
    slug: 'industrial-vessels-manufacturer',
    pageH1: 'Expert Industrial Vessels Manufacturer in Ahmedabad, India',
    description: `We are a leading manufacturer of stainless steel industrial vessels, specializing in pressure vessels, air receivers, and water storage tanks. Based in Ahmedabad, our facility leverages precision welding and engineering to meet ASME and ISO standards. Our vessels are trusted for sterile water storage in pharmaceuticals and high-pressure chemical reactions. We focus on hygienic design, durability, and absolute safety, providing custom solutions that integrate seamlessly into complex industrial infrastructures globally.`,
    metaTitle: 'Industrial Vessels Manufacturer India | SS Pressure Vessel & Storage Tanks',
    metaDescription: 'Leading industrial vessels manufacturer in Ahmedabad. Supplying SS pressure vessels, RO water storage tanks, and air receiver tanks worldwide.',
    metaKeywords: 'industrial vessels manufacturer india, pressure vessel supplier ahmedabad, ss storage tank manufacturer, ro water tank supplier, air receiver tank manufacturer',
    imageId: 'product-custom-filter',
    subcategories: [
      { name: 'Pressure vessel', slug: 'pressure-vessel-supplier-india' },
      { name: 'Storage Tank', slug: 'storage-tank-supplier' },
      { name: 'Purified water storage tank', slug: 'purified-water-storage-tank' },
      { name: 'Air receiver tank', slug: 'air-receiver-tank-supplier-india' },
      { name: 'SS pendants', slug: 'ss-pendants' },
    ]
  }
];

export const industries = [
  {
    name: 'Pharmaceutical',
    description: 'Specializing in sanitary filtration for sterile air and high-purity process fluids in strictly regulated labs.',
    icon: HeartPulse,
  },
  {
    name: 'Water Treatment',
    description: 'Advanced micro-filtration solutions for industrial, municipal, and commercial water purification systems.',
    icon: Droplets,
  },
  {
    name: 'Chemical Processing',
    description: 'Engineered filtration for aggressive acids, solvents, and hazardous chemical processing environments.',
    icon: FlaskConical,
  },
  {
    name: 'Food & Beverage',
    description: 'Hygienic filtration systems for liquid processing, bottling, and steam clarification to meet global safety standards.',
    icon: Grape,
  },
  {
    name: 'Oil & Gas',
    description: 'High-pressure strainers and housings for refinery pipeline protection and hydrocarbon clarification.',
    icon: Fuel,
  },
  {
    name: 'Manufacturing',
    description: 'General industrial filtration to enhance machinery performance and protect critical downstream assets.',
    icon: Building,
  },
];

export const whyChooseUs = [
  {
    title: 'Precision Engineering',
    description: 'With over 23 years of combined expertise, our engineers design filtration systems that meet exact technical parameters for pressure, flow, and temperature.',
    icon: Settings,
  },
  {
    title: 'Quality Compliance',
    description: 'Strict adherence to ISO 9001:2015 and ASME standards. Every vessel and cartridge undergoes 100% in-house performance and pressure testing.',
    icon: CheckCircle,
  },
  {
    title: 'Global Export Hub',
    description: 'We export Indian engineering excellence to over 18 countries, handling all international logistics, sea-worthy packaging, and documentation.',
    icon: Globe,
  },
  {
    title: 'Bespoke Solutions',
    description: 'We specialize in total custom filtration. From unique micron ratings to specialized housing dimensions, we build what your process demands.',
    icon: Lightbulb,
  },
  {
    title: 'Industry Accredited',
    description: 'Recognized for innovation in stainless steel fabrication, our brand is synonymous with reliability in critical manufacturing sectors.',
    icon: Award,
  },
  {
    title: 'Logistics Excellence',
    description: 'Timely delivery guaranteed. We utilize robust packaging protocols to ensure your equipment arrives in perfect condition, wherever you are.',
    icon: Package,
  }
];

// Helper to generate dynamic product data for all slugs to prevent 404s
const generateProductDetails = (name: string, category: string, imageId: string, imageIds: string[] = []): ProductDetail => ({
  name: `${name} Manufacturer & Supplier`,
  application: `Industrial ${category} solutions for critical manufacturing processes, including water treatment, pharma, and chemical clarification.`,
  imageId,
  imageIds: imageIds.length > 0 ? imageIds : [imageId],
  description: `VVIOK Industry is a premier ${name} manufacturer in Ahmedabad, India. We specialize in engineering high-precision ${category} equipment designed for maximum durability and efficiency. Our ${name} is trusted by global industrial leaders for its robust construction and superior performance in demanding environments. We utilize premium SS 304 and 316L materials to ensure zero corrosion and absolute structural integrity. Our commitment to quality and engineering excellence makes us a preferred technical partner for industries across 18 countries.`,
  detailedSpecs: `Technical Specifications for ${name}:
- Material of Construction: SS 304, SS 316, SS 316L
- Design Code: ASME Section VIII Div 1 & ISO 9001:2015
- Operating Pressure: Designed as per process requirements (up to 20 bar)
- Operating Temperature: -20°C to 150°C
- Surface Finish: Mirror Polished / Electropolished (0.4 to 0.8 Ra)
- Connection Types: Flanged, Triclover, NPT/BSP Threaded
- Sealing: FDA Grade Silicon, EPDM, Viton, PTFE

Our engineering team provides full technical documentation, including pressure test reports and material test certificates (MTC), ensuring complete transparency and compliance with international standards.`,
  features: [
    'ASME compliant design and fabrication',
    'High corrosion resistance with premium SS grades',
    'Customizable dimensions to fit existing pipelines',
    'Zero bypass engineering for maximum efficiency',
    'Easy maintenance and tool-free cleaning designs',
    '100% hydro-tested for structural integrity'
  ],
  faqs: [
    { question: `Do you provide custom sizes for ${name}?`, answer: 'Yes, we specialize in bespoke engineering. We can customize every dimension and specification according to your specific industrial parameters.' },
    { question: `What documentation is provided with ${name}?`, answer: 'We provide comprehensive documentation including Material Test Certificates (MTC), Pressure Test Certificates, and dimensional drawings.' },
    { question: 'Is international shipping available?', answer: 'Absolutely. We export to over 18 countries with sea-worthy packaging and full logistics support.' }
  ],
  metaTitle: `${name} Manufacturer Ahmedabad | Industrial ${category} Supplier India`,
  metaDescription: `Leading ${name} manufacturer in India. We supply high-performance ${category} solutions for industrial water storage and chemical processing.`,
  metaKeywords: `${name.toLowerCase()}, industrial ${category.toLowerCase()}, ss equipment manufacturer, vviok industry ahmedabad`
});

export const products: Record<string, ProductDetail[]> = {
  'pp-pleated-filter-cartridge-supplier': [generateProductDetails('PP Pleated Filter Cartridge', 'Filter Cartridge', 'product-pp-pleated-1', ['product-pp-pleated-1', 'product-pp-pleated-2'])],
  'pp-spun-filter-cartridge-supplier': [generateProductDetails('PP Spun Filter Cartridge', 'Filter Cartridge', 'product-pp-spun-1', ['product-pp-spun-1', 'product-pp-spun-2'])],
  'ptfe-pleated-filter-cartridge-supplier': [generateProductDetails('PTFE Pleated Filter Cartridge', 'Filter Cartridge', 'product-ptfe-pleated-1', ['product-ptfe-pleated-1', 'product-ptfe-pleated-2'])],
  'ss-sintered-powder-cartridge': [generateProductDetails('SS Sintered Powder Cartridge', 'Filter Cartridge', 'product-ss-sintered-1', ['product-ss-sintered-1', 'product-ss-sintered-2', 'product-ss-sintered-3'])],
  'ss-wire-mesh-cartridge': [generateProductDetails('SS Wire Mesh Cartridge', 'Filter Cartridge', 'product-ss-wire-mesh-1', ['product-ss-wire-mesh-1', 'product-ss-wire-mesh-2'])],
  'multi-cartridge-filter-housing': [generateProductDetails('Multi-Cartridge Filter Housing', 'Filter Housing', 'product-multi-cartridge-1', ['product-multi-cartridge-1', 'product-multi-cartridge-2', 'product-multi-cartridge-3'])],
  'bag-filter-housing': [generateProductDetails('Bag Filter Housing', 'Filter Housing', 'product-bag-housing-1')],
  'duplex-filter-housing-supplier': [generateProductDetails('Duplex Filter Housing', 'Filter Housing', 'product-duplex-housing-1', ['product-duplex-housing-1', 'product-duplex-housing-2'])],
  'catridge-filter-housing-supplier': [generateProductDetails('Cartridge Filter Housing', 'Filter Housing', 'product-cartridge-housing-1', ['product-cartridge-housing-1', 'product-cartridge-housing-2'])],
  'vent-filter-housing-supplier': [generateProductDetails('Vent Filter Housing', 'Filter Housing', 'product-vent-housing-1', ['product-vent-housing-1', 'product-vent-housing-2', 'product-vent-housing-3'])],
  'industrial-strainer-filter-housing-supplier': [generateProductDetails('Strainer Filter Housing', 'Filter Housing', 'product-strainer-housing-1', ['product-strainer-housing-1', 'product-strainer-housing-2'])],
  'industrial-multi-bag-filter-housing': [generateProductDetails('Multi-Bag Filter Housing', 'Filter Housing', 'product-multi-bag-1', ['product-multi-bag-1', 'product-multi-bag-2'])],
  'conical-strainer-manufacturer': [generateProductDetails('Conical Strainer', 'Industrial Strainer', 'product-conical-strainer')],
  'basket-strainer-manufacturer': [generateProductDetails('Basket Strainer', 'Industrial Strainer', 'product-vent-filter-1')],
  'pleated-strainer-manufacturer': [generateProductDetails('Pleated Strainer', 'Industrial Strainer', 'product-pleated-strainer')],
  'taper-basket-strainer-manufacturer': [generateProductDetails('Taper Basket Strainer', 'Industrial Strainer', 'product-vent-filter-1')],
  'pressure-vessel-supplier-india': [generateProductDetails('Pressure Vessel', 'Industrial Vessel', '/uploads/pressure%20tank.jpeg')],
  'storage-tank-supplier': [generateProductDetails('Storage Tank', 'Industrial Vessel', 'product-purified-water-tank')],
  'purified-water-storage-tank': [generateProductDetails('Purified Water Storage Tank', 'Industrial Vessel', 'product-purified-water-tank')],
  'air-receiver-tank-supplier-india': [generateProductDetails('Air Receiver Tank', 'Industrial Vessel', 'product-custom-filter')],
  'ss-pendants': [generateProductDetails('SS Pendants', 'Industrial Vessel', 'product-ss-pendants')],
};
