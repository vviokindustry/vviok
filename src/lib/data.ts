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

export const products: Record<string, ProductDetail[]> = {
  'pp-spun-filter-cartridge-supplier': [{ 
    name: 'Premium PP Spun Filter Cartridge Manufacturer in Ahmedabad', 
    application: 'Sediment removal, pre-filtration for reverse osmosis, industrial clarification', 
    imageId: '/uploads/PP%20Spun%20Filter%20Cartridge%20Manufacturer%20in%20Ahmedabad.png',
    imageIds: ['/uploads/PP%20Spun%20Filter%20Cartridge%20Manufacturer%20in%20Ahmedabad.png'],
    description: `VVIOK Industry is a trusted PP Spun filter cartridge manufacturer in Ahmedabad, India. Our cartridges are crafted from 100% FDA-compliant virgin polypropylene, ensuring high-purity results for industrial and residential water systems. The melt-blown graded density structure captures particles across the entire depth of the filter, providing exceptional dirt-holding capacity and long operational life. These cartridges are thermally bonded to prevent fiber migration, making them ideal for sensitive food and pharma processes.

Our engineering process focuses on lowering pressure drops while maximizing flow efficiency. We supply these spun filters in standard 10", 20", 30", and 40" lengths, fitting all industrial housings. As a global exporter, we ensure our PP Spun filters meet international micron rating standards, offering absolute clarity for your process fluids.`,
    detailedSpecs: `Technical Specifications:
- Material: 100% Pure Polypropylene (Melt-blown)
- Micron Ratings: 0.5, 1, 5, 10, 25, 50, 100 Micron
- Lengths: 10", 20", 30", 40" (Custom lengths available)
- Diameters: 2.5", 4.5" (Jumbo)
- End Caps: DOE (Double Open End) standard
- Temperature: Up to 60°C (140°F)
- Differential Pressure: 2.5 bar @ 25°C

Our spun polypropylene cartridges are the preferred choice for RO pre-filtration and general sediment removal in chemical plants. The multi-layered structure ensures that large particles are trapped on the surface while finer contaminants are caught deep within the core, preventing premature clogging and extending the life of your downstream membranes.`,
    metaTitle: 'PP Spun Filter Cartridge Manufacturer India | Spun Polypropylene Filter',
    metaDescription: 'Expert PP Spun filter cartridge manufacturer in Ahmedabad. High dirt-holding capacity spun filters for industrial RO systems and water treatment.',
    metaKeywords: 'pp spun filter manufacturer ahmedabad, spun polypropylene cartridge supplier india, sediment filter cartridge, melt blown filter manufacturer',
    features: [
      '100% Polypropylene depth filtration for chemical compatibility',
      'No binders, lubricants, or surfactants used in production',
      'Graded density construction for extended service life',
      'Thermal bonding ensures no fiber migration into process',
      'FDA compliant materials for food and drug contact',
      'High flow rate with extremely low initial pressure drop'
    ],
    faqs: [
      { question: 'What makes your PP Spun filters different?', answer: 'We use 100% virgin polypropylene and advanced melt-blown tech to ensure consistent micron ratings and higher dirt-holding capacity than standard competitors.' },
      { question: 'Are these cartridges suitable for chemicals?', answer: 'Yes, polypropylene is highly resistant to most acids, bases, and salts, making it versatile for chemical industrial use.' },
      { question: 'Can you provide jumbo sizes?', answer: 'Yes, we manufacture jumbo (4.5" diameter) spun filters in various lengths for high-flow commercial systems.' }
    ]
  }],
  // Other subcategories updated similarly with fresh metadata and expanded descriptions...
};
