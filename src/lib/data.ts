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
      { name: 'Stainless Steel Single Bag Filter Housing', slug: 'ss-single-bag-filter-housing' },
      { name: 'Filter Cartridges Code 7', slug: 'filter-cartridges-code-7' },
      { name: 'Stainless Steel Filter Cartridges', slug: 'ss-filter-cartridges' },
      { name: 'Conical Filter', slug: 'conical-filter' },
      { name: 'Steam Filter Housing', slug: 'steam-filter-housing' },
    ]
  },
  {
    name: 'Ss Filter Housing',
    slug: 'ss-filter-housing',
    description: 'High-quality stainless steel housings for diverse applications.',
    imageId: 'product-industrial-filter',
    subcategories: [
      { name: 'High Polish SS Housing', slug: 'high-polish-ss-housing' },
      { name: 'Sanitary SS Housing', slug: 'sanitary-ss-housing' },
      { name: 'Industrial SS Housing', slug: 'industrial-ss-housing' },
      { name: 'Chemical Grade SS Housing', slug: 'chemical-grade-ss-housing' },
    ]
  },
  {
    name: 'Basket Strainer',
    slug: 'basket-strainer',
    description: 'Reliable basket strainers for coarse filtration.',
    imageId: 'product-industrial-filter',
    subcategories: [
      { name: 'Simplex Basket Strainer', slug: 'simplex-basket-strainer' },
      { name: 'Duplex Basket Strainer', slug: 'duplex-basket-strainer' },
      { name: 'Multi-Basket Strainer', slug: 'multi-basket-strainer' },
    ]
  },
  {
    name: 'Filter Housing',
    slug: 'filter-housing',
    description: 'Standard and custom filter housings for industrial use.',
    imageId: 'product-industrial-filter',
    subcategories: [
      { name: 'Single Cartridge Housing', slug: 'single-cartridge-housing' },
      { name: 'Multi-Cartridge Housing', slug: 'multi-cartridge-housing' },
      { name: 'Custom Filter Housing', slug: 'custom-filter-housing' },
    ]
  },
  {
    name: 'Stainless Steel Filter Housing',
    slug: 'stainless-steel-filter-housing',
    description: 'Specialized SS housings for pharmaceutical and food industries.',
    imageId: 'product-industrial-filter',
    subcategories: [
      { name: 'SS 304 Housing', slug: 'ss-304-housing' },
      { name: 'SS 316 Housing', slug: 'ss-316-housing' },
      { name: 'SS 316L Housing', slug: 'ss-316l-housing' },
    ]
  },
  {
    name: 'Duplex Filter',
    slug: 'duplex-filter',
    description: 'Duplex filtration systems for continuous operation.',
    imageId: 'product-industrial-filter',
    subcategories: [
      { name: 'Standard Duplex Filter', slug: 'standard-duplex-filter' },
      { name: 'Automated Duplex Filter', slug: 'automated-duplex-filter' },
    ]
  },
  {
    name: 'Water Storage Tank',
    slug: 'water-storage-tank',
    description: 'Stainless steel water storage solutions for domestic and industrial use.',
    imageId: 'hero-background',
    subcategories: [
      { name: 'Horizontal SS Tank', slug: 'horizontal-ss-tank' },
      { name: 'Vertical SS Tank', slug: 'vertical-ss-tank' },
    ]
  },
  {
    name: 'Pressure Tank',
    slug: 'pressure-tank',
    description: 'Industrial grade pressure tanks for liquid and gas processing.',
    imageId: 'hero-background',
    subcategories: [
      { name: 'Low Pressure Tank', slug: 'low-pressure-tank' },
      { name: 'High Pressure Tank', slug: 'high-pressure-tank' },
    ]
  },
  {
    name: 'Air Filter',
    slug: 'air-filter',
    description: 'High-efficiency air filtration products for clean environments.',
    imageId: 'product-air-filter',
    subcategories: [
      { name: 'Pre-Filter', slug: 'pre-filter' },
      { name: 'HEPA Filter', slug: 'hepa-filter' },
    ]
  },
  {
    name: 'Duplex Type Filter',
    slug: 'duplex-type-filter',
    description: 'Advanced duplex type filters for critical processes.',
    imageId: 'product-industrial-filter',
    subcategories: [
      { name: 'Advanced Duplex System', slug: 'advanced-duplex-system' },
    ]
  },
  {
    name: 'Ball Valve',
    slug: 'ball-valve',
    description: 'Stainless steel ball valves for precise flow control.',
    imageId: 'product-custom-filter',
    subcategories: [
      { name: 'SS Ball Valve', slug: 'ss-ball-valve' },
    ]
  },
  {
    name: 'Butterfly Valve',
    slug: 'butterfly-valve',
    description: 'Industrial butterfly valves for efficient flow isolation.',
    imageId: 'product-custom-filter',
    subcategories: [
      { name: 'SS Butterfly Valve', slug: 'ss-butterfly-valve' },
    ]
  },
];

export const products: Record<string, { name: string; application: string; imageId: string }[]> = {
  // Products are mapped by subcategory slug
  'high-polish-ss-housing': [{ name: 'High Polish SS Housing', application: 'Sanitary water', imageId: 'product-industrial-filter' }],
  'sanitary-ss-housing': [{ name: 'Sanitary SS Housing', application: 'Food grade liquids', imageId: 'product-industrial-filter' }],
  'industrial-ss-housing': [{ name: 'Industrial SS Housing', application: 'Chemical processing', imageId: 'product-industrial-filter' }],
  'chemical-grade-ss-housing': [{ name: 'Chemical Grade SS Housing', application: 'Industrial water', imageId: 'product-industrial-filter' }],
  'simplex-basket-strainer': [{ name: 'Simplex Basket Strainer', application: 'Coarse filtration', imageId: 'product-industrial-filter' }],
  'duplex-basket-strainer': [{ name: 'Duplex Basket Strainer', application: 'Oil & fuel lines', imageId: 'product-industrial-filter' }],
  'multi-basket-strainer': [{ name: 'Multi-Basket Strainer', application: 'High flow pipelines', imageId: 'product-industrial-filter' }],
  'single-cartridge-housing': [{ name: 'Single Cartridge Housing', application: 'General purpose', imageId: 'product-industrial-filter' }],
  'multi-cartridge-housing': [{ name: 'Multi-Cartridge Housing', application: 'Bulk liquid processing', imageId: 'product-industrial-filter' }],
  'custom-filter-housing': [{ name: 'Custom Filter Housing', application: 'Special requirements', imageId: 'product-industrial-filter' }],
  'ss-304-housing': [{ name: 'SS 304 Housing', application: 'Domestic water', imageId: 'product-industrial-filter' }],
  'ss-316-housing': [{ name: 'SS 316 Housing', application: 'Industrial chemical', imageId: 'product-industrial-filter' }],
  'ss-316l-housing': [{ name: 'SS 316L Housing', application: 'Pharmaceutical', imageId: 'product-industrial-filter' }],
  'standard-duplex-filter': [{ name: 'Standard Duplex Filter', application: 'Uninterrupted flow', imageId: 'product-industrial-filter' }],
  'automated-duplex-filter': [{ name: 'Automated Duplex Filter', application: 'Automated processing', imageId: 'product-industrial-filter' }],
  'horizontal-ss-tank': [{ name: 'Horizontal SS Tank', application: 'Space-saving storage', imageId: 'hero-background' }],
  'vertical-ss-tank': [{ name: 'Vertical SS Tank', application: 'Industrial cooling', imageId: 'hero-background' }],
  'low-pressure-tank': [{ name: 'Low Pressure Tank', application: 'Air compression', imageId: 'hero-background' }],
  'high-pressure-tank': [{ name: 'High Pressure Tank', application: 'Process chemistry', imageId: 'hero-background' }],
  'pre-filter': [{ name: 'Pre-Filter', application: 'Dust removal', imageId: 'product-air-filter' }],
  'hepa-filter': [{ name: 'HEPA Filter', application: 'Cleanrooms', imageId: 'product-air-filter' }],
  'advanced-duplex-system': [{ name: 'Advanced Duplex System', application: 'Critical filtration', imageId: 'product-industrial-filter' }],
  'ss-ball-valve': [{ name: 'SS Ball Valve', application: 'Flow control', imageId: 'product-custom-filter' }],
  'ss-butterfly-valve': [{ name: 'SS Butterfly Valve', application: 'Flow isolation', imageId: 'product-custom-filter' }],
  'filter-housing-connection': [{ name: 'Filter Housing Connection', application: 'General piping', imageId: 'product-industrial-filter' }],
  'pp-filter-cartridge': [{ name: 'PP Filter Cartridge', application: 'Water filtration', imageId: 'product-industrial-filter' }],
  'pp-spun-filter-cartridge': [{ name: 'PP Spun Filter Cartridge', application: 'Sediment removal', imageId: 'product-industrial-filter' }],
  'pp-pleated-filter-cartridges': [{ name: 'PP Pleated Filter Cartridges', application: 'Final filtration', imageId: 'product-industrial-filter' }],
  'paper-pleated-filter-cartridge': [{ name: 'Paper Pleated Filter Cartridge', application: 'Lube oil', imageId: 'product-industrial-filter' }],
  'sintered-ss316-filter-cartridges': [{ name: 'Sintered Ss316 Filter Cartridges', application: 'High temp fluids', imageId: 'product-industrial-filter' }],
  'ss-single-bag-filter-housing': [{ name: 'SS Single Bag Filter Housing', application: 'Bulk liquid', imageId: 'product-industrial-filter' }],
  'filter-cartridges-code-7': [{ name: 'Filter Cartridges Code 7', application: 'Pharmaceutical', imageId: 'product-industrial-filter' }],
  'ss-filter-cartridges': [{ name: 'Stainless Steel Filter Cartridges', application: 'Aggressive fluids', imageId: 'product-industrial-filter' }],
  'conical-filter': [{ name: 'Conical Filter', application: 'Pipeline commissioning', imageId: 'product-industrial-filter' }],
  'steam-filter-housing': [{ name: 'Steam Filter Housing', application: 'Culinary steam', imageId: 'product-industrial-filter' }],
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
