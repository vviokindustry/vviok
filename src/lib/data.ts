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
}

export const productCategories: Category[] = [
  {
    name: 'Filter Systems & Housings',
    slug: 'filter-systems-housings',
    description: 'Robust housings for industrial filtration systems.',
    imageId: 'product-industrial-filter',
    subcategories: [
      { name: 'SS Filter Housing', slug: 'ss-filter-housing' },
      { name: 'Basket Strainer / Housing', slug: 'basket-strainer' },
      { name: 'Filter Housing', slug: 'filter-housing' },
      { name: 'Stainless Steel Filter Housing', slug: 'stainless-steel-filter-housing' },
      { name: 'Duplex Filter', slug: 'duplex-filter' },
      { name: 'Duplex Type Filter', slug: 'duplex-type-filter' },
    ]
  },
  {
    name: 'Filter Cartridge',
    slug: 'filter-cartridge',
    description: 'Precision filter cartridges for liquid and gas processing.',
    imageId: 'product-industrial-filter',
    subcategories: [
      { name: 'Filter Housing and Connection', slug: 'filter-housing-connection' },
      { name: 'PP Filter Cartridge', slug: 'pp-filter-cartridge' },
      { name: 'PP Spun Filter Cartridge', slug: 'pp-spun-filter-cartridge' },
      { name: 'PP Pleated Filter Cartridges', slug: 'pp-pleated-filter-cartridges' },
      { name: 'Paper Pleated Filter Cartridge', slug: 'paper-pleated-filter-cartridge' },
      { name: 'Sintered Ss316 Filter Cartridges', slug: 'sintered-ss316-filter-cartridges' },
      { name: 'Filter Cartridges Code 7', slug: 'filter-cartridges-code-7' },
      { name: 'Stainless Steel Filter Cartridges', slug: 'ss-filter-cartridges' },
      { name: 'Conical Filter', slug: 'conical-filter' },
      { name: 'Steam Filter Housing', slug: 'steam-filter-housing' },
    ]
  },
  {
    name: 'Storage Tanks & Vessels',
    slug: 'storage-tanks-vessels',
    description: 'High-quality stainless steel storage solutions.',
    imageId: 'hero-background',
    subcategories: [
      { name: 'Water Storage Tank', slug: 'water-storage-tank' },
      { name: 'Pressure Tank', slug: 'pressure-tank' },
    ]
  },
  {
    name: 'Valves & Fittings',
    slug: 'valves-fittings',
    description: 'Precision industrial valves and sanitary fittings.',
    imageId: 'product-custom-filter',
    subcategories: [
      { name: 'Ball Valve', slug: 'ball-valve' },
      { name: 'Butterfly Valve', slug: 'butterfly-valve' },
      { name: 'Stainless Steel Ferrule', slug: 'ss-ferrule' },
    ]
  },
  {
    name: 'Air Filters',
    slug: 'air-filters',
    description: 'High-efficiency particulate air (HEPA) filters for clean environments.',
    imageId: 'product-air-filter',
    subcategories: [
      { name: 'Air Filter', slug: 'air-filter' },
      { name: 'HEPA Filters', slug: 'hepa-filters' },
      { name: 'Carbon Filters', slug: 'carbon-filters' },
    ]
  },
];

export const products: Record<string, { name: string; application: string; imageId: string }[]> = {
  'ss-filter-housing': [
    { name: 'High Polish SS Housing', application: 'Sanitary water, food grade liquids', imageId: 'product-industrial-filter' },
    { name: 'Industrial Grade SS Housing', application: 'Chemical processing, industrial water', imageId: 'product-industrial-filter' },
  ],
  'basket-strainer': [
    { name: 'Simplex Basket Strainer', application: 'Coarse filtration, pump protection', imageId: 'product-industrial-filter' },
    { name: 'Multi-Basket Strainer', application: 'High flow pipeline systems', imageId: 'product-industrial-filter' },
  ],
  'filter-housing': [
    { name: 'Standard Filter Housing', application: 'General purpose industrial filtration', imageId: 'product-industrial-filter' },
  ],
  'stainless-steel-filter-housing': [
    { name: 'Grade 316L SS Housing', application: 'Pharmaceutical and high-purity systems', imageId: 'product-industrial-filter' },
  ],
  'duplex-filter': [
    { name: 'Continuous Flow Duplex Filter', application: 'Uninterrupted flow, oil & fuel lines', imageId: 'product-industrial-filter' },
  ],
  'duplex-type-filter': [
    { name: 'Advanced Duplex Filter', application: 'Critical process filtration with redundancy', imageId: 'product-industrial-filter' },
  ],
  'water-storage-tank': [
    { name: 'SS304 Water Tank', application: 'Domestic water storage, industrial cooling', imageId: 'hero-background' },
    { name: 'SS316 Water Tank', application: 'Pharmaceutical storage, high purity water', imageId: 'hero-background' },
  ],
  'pressure-tank': [
    { name: 'Stainless Steel Pressure Vessel', application: 'Process chemistry, air compression', imageId: 'hero-background' },
  ],
  'ball-valve': [
    { name: 'Stainless Steel Ball Valve', application: 'Flow control, pipeline isolation', imageId: 'product-custom-filter' },
  ],
  'butterfly-valve': [
    { name: 'Sanitary Butterfly Valve', application: 'Food & Beverage processing, dairy', imageId: 'product-custom-filter' },
  ],
  'ss-ferrule': [
    { name: 'Sanitary Tri-Clover Ferrule', application: 'Food & Pharma pipe fittings', imageId: 'product-custom-filter' },
  ],
  'air-filter': [
    { name: 'Standard Industrial Air Filter', application: 'Dust and particulate removal in factories', imageId: 'product-air-filter' },
  ],
  'cartridge-filter-housing': [
    { name: 'Single Cartridge Housing', application: 'Low flow water, chemical dosing', imageId: 'product-industrial-filter' },
    { name: 'Multi-Cartridge Housing', application: 'High flow industrial water, beverages', imageId: 'product-industrial-filter' },
  ],
  'bag-filter-housing': [
    { name: 'Single Bag Housing', application: 'Paint, resins, pre-filtration', imageId: 'product-industrial-filter' },
    { name: 'Multi-Bag Housing', application: 'Bulk liquid processing, cooling towers', imageId: 'product-industrial-filter' },
  ],
  'filter-housing-connection': [
    { name: 'Standard Connection Kit', application: 'General piping integration', imageId: 'product-industrial-filter' },
  ],
  'pp-filter-cartridge': [
    { name: 'Standard PP Cartridge', application: 'Domestic and industrial water', imageId: 'product-industrial-filter' },
  ],
  'pp-spun-filter-cartridge': [
    { name: 'Melt Blown Spun', application: 'Prefiltration, sediment removal', imageId: 'product-industrial-filter' },
  ],
  'pp-pleated-filter-cartridges': [
    { name: 'High Area Pleated PP', application: 'Final filtration, pharma grade', imageId: 'product-industrial-filter' },
  ],
  'paper-pleated-filter-cartridge': [
    { name: 'Disposable Paper Pleated', application: 'Lube oil, coolant filtration', imageId: 'product-industrial-filter' },
  ],
  'sintered-ss316-filter-cartridges': [
    { name: 'Porous SS316 Sintered', application: 'Extreme high temp, catalyst recovery', imageId: 'product-industrial-filter' },
  ],
  'filter-cartridges-code-7': [
    { name: 'Code 7 Sanitary Cartridge', application: 'Aseptic filtration, pharma standard', imageId: 'product-industrial-filter' },
  ],
  'ss-filter-cartridges': [
    { name: 'Cylindrical SS Cartridge', application: 'Aggressive fluids, high pressure', imageId: 'product-industrial-filter' },
  ],
  'conical-filter': [
    { name: 'Temporary Conical Strainer', application: 'New pipeline commissioning', imageId: 'product-industrial-filter' },
  ],
  'steam-filter-housing': [
    { name: 'High Temp Steam Filter', application: 'Culinary steam, sterilization', imageId: 'product-industrial-filter' },
  ],
  'hepa-filters': [
    { name: 'H13 HEPA Filter', application: 'Cleanrooms, hospital surgery rooms', imageId: 'product-air-filter' },
  ],
  'carbon-filters': [
    { name: 'Activated Carbon Block', application: 'Odor and VOC removal', imageId: 'product-air-filter' },
  ],
};

export const industries = [
  { name: 'Water Treatment', icon: Droplets, description: 'Ensuring water purity and safety with our advanced filtration systems for municipal, industrial, and wastewater applications.', imageId: 'industry-water-treatment' },
  { name: 'Chemical Industry', icon: FlaskConical, description: 'Providing robust and corrosion-resistant filters for separating and purifying aggressive chemicals, solvents, and polymers.', imageId: 'industry-chemical' },
  { name: 'Pharmaceutical', icon: HeartPulse, description: 'Delivering sterile and high-purity filtration solutions that meet the stringent standards of pharmaceutical manufacturing.', imageId: 'industry-pharmaceutical' },
  { name: 'Food & Beverage', icon: Grape, description: 'Maintaining product quality and safety with food-grade filters for liquids, ingredients, and air purification.', imageId: 'industry-food-beverage' },
  { name: 'Oil & Gas', icon: Fuel, description: 'Offering reliable filtration for refineries and processing plants to remove contaminants from hydrocarbons and process fluids.', imageId: 'industry-oil-gas' },
  { name: 'Manufacturing', icon: Building, description: 'Improving air quality and protecting equipment with our durable filters for various manufacturing environments.', imageId: 'industry-manufacturing' },
];

export const whyChooseUs = [
  {
    icon: CheckCircle,
    title: 'Uncompromising Quality',
    description: 'We adhere to the highest international quality standards, ensuring every product is reliable and efficient.',
  },
  {
    icon: Factory,
    title: 'Advanced Manufacturing',
    description: 'Our state-of-the-art facility enables us to produce high-performance filters with precision and consistency.',
  },
  {
    icon: Package,
    title: 'Customization Expertise',
    description: 'We engineer bespoke filtration solutions tailored to meet your unique operational requirements.',
  },
  {
    icon: Globe,
    title: 'Global Export Reach',
    description: 'With robust logistics, we deliver our products on time to clients across the globe.',
  },
];
