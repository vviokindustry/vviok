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
  Wind,
  Layers,
  Settings,
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
    description: 'Precision filter cartridges for liquid and gas processing, sediment removal, and fine filtration.',
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
    description: 'High-quality stainless steel housings designed for high-polish, sanitary, and industrial environments.',
    imageId: 'product-industrial-filter',
    subcategories: [
      { name: 'Stainless Steel Industrial Duplex Filter Housing', slug: 'ss-industrial-duplex-filter-housing' },
      { name: 'Water Filter Housing', slug: 'water-filter-housing' },
      { name: 'Ss Cartridge Filter Housing', slug: 'ss-cartridge-filter-housing' },
      { name: 'SS Single Cartridge Filter Housing', slug: 'ss-single-cartridge-filter-housing' },
    ]
  },
  {
    name: 'Basket Strainer',
    slug: 'basket-strainer',
    description: 'Reliable simplex, duplex, and multi-basket strainers for effective coarse filtration in pipelines.',
    imageId: 'product-industrial-filter',
    subcategories: [
      { name: 'Stainless Steel Filter Housing', slug: 'ss-filter-housing-bs' },
      { name: 'Multi Cartridge Filter Housing', slug: 'multi-cartridge-housing-bs' },
      { name: 'Basket Filter And Strainers', slug: 'basket-filter-strainers' },
    ]
  },
  {
    name: 'Filter Housing',
    slug: 'filter-housing',
    description: 'A wide range of single and multi-cartridge housings built to standard and custom industrial specifications.',
    imageId: 'product-industrial-filter',
    subcategories: [
      { name: 'Code 7 Filter Housing', slug: 'code-7-filter-housing' },
      { name: 'SS 304 Bag Filter Housing', slug: 'ss-304-bag-filter-housing' },
      { name: 'Cartridge Filter Housing', slug: 'cartridge-filter-housing' },
    ]
  },
  {
    name: 'Stainless Steel Filter Housing',
    slug: 'stainless-steel-filter-housing',
    description: 'Specialized SS 304, 316, and 316L housings for demanding pharmaceutical and food grade applications.',
    imageId: 'product-industrial-filter',
    subcategories: [
      { name: 'Industrial Filter Housing', slug: 'industrial-filter-housing' },
      { name: 'Ss Multi Cartridge Filter Housing', slug: 'ss-multi-cartridge-filter-housing' },
      { name: 'Industrial Filter Cartridge', slug: 'industrial-filter-cartridge' },
    ]
  },
  {
    name: 'Duplex Filter',
    slug: 'duplex-filter',
    description: 'High-efficiency duplex filtration systems designed for continuous, uninterrupted industrial operation.',
    imageId: 'product-industrial-filter',
    subcategories: [
      { name: 'Ss Duplex Filter Housing', slug: 'ss-duplex-filter-housing' },
      { name: 'Stainless Steel Basket Filter', slug: 'ss-basket-filter' },
    ]
  },
  {
    name: 'Water Storage Tank',
    slug: 'water-storage-tank',
    description: 'Premium stainless steel water storage solutions, available in various specialized configurations.',
    imageId: 'hero-background',
    subcategories: [
      { name: '1000L Stainless Steel Water Storage Tank', slug: '1000l-ss-water-storage-tank' },
      { name: 'Ss Insulated Storage Tanks', slug: 'ss-insulated-storage-tanks' },
    ]
  },
  {
    name: 'Pressure Tank',
    slug: 'pressure-tank',
    description: 'Industrial-grade pressure vessels engineered for safe and efficient liquid and gas processing.',
    imageId: 'hero-background',
    subcategories: [
      { name: 'Stainless Steel Pressure Vessel Tank', slug: 'ss-pressure-vessel-tank' },
      { name: 'SS Hot Water Storage Tank', slug: 'ss-hot-water-storage-tank' },
    ]
  },
  {
    name: 'Air Filter',
    slug: 'air-filter',
    description: 'High-performance pre-filters and HEPA filters for maintaining clean air in critical environments.',
    imageId: 'product-air-filter',
    subcategories: [
      { name: 'Pre-Filter', slug: 'pre-filter' },
      { name: 'HEPA Filter', slug: 'hepa-filter' },
    ]
  },
  {
    name: 'Duplex Type Filter',
    slug: 'duplex-type-filter',
    description: 'Advanced duplex-type filtration units for critical process fluid purification.',
    imageId: 'product-industrial-filter',
    subcategories: [
      { name: 'Advanced Duplex System', slug: 'advanced-duplex-system' },
    ]
  },
  {
    name: 'Ball Valve',
    slug: 'ball-valve',
    description: 'Durable stainless steel ball valves for precise flow control and isolation in industrial piping.',
    imageId: 'product-custom-filter',
    subcategories: [
      { name: 'SS Ball Valve', slug: 'ss-ball-valve' },
    ]
  },
  {
    name: 'Butterfly Valve',
    slug: 'butterfly-valve',
    description: 'High-quality industrial butterfly valves for efficient and reliable flow regulation.',
    imageId: 'product-custom-filter',
    subcategories: [
      { name: 'SS Butterfly Valve', slug: 'ss-butterfly-valve' },
    ]
  },
  {
    name: 'Stainless Steel Ferrule',
    slug: 'stainless-steel-ferrule',
    description: 'Precision-engineered SS 316 and sanitary ferrules for leak-proof, high-pressure connections.',
    imageId: 'product-custom-filter',
    subcategories: [
      { name: 'SS 316 Ferrule', slug: 'ss-316-ferrule' },
      { name: 'Sanitary Ferrule', slug: 'sanitary-ferrule' },
    ]
  },
];

export const products: Record<string, { name: string; application: string; imageId: string }[]> = {
  'ss-industrial-duplex-filter-housing': [{ name: 'Stainless Steel Industrial Duplex Filter Housing', application: 'Continuous flow systems, industrial refineries', imageId: 'product-industrial-filter' }],
  'water-filter-housing': [{ name: 'Water Filter Housing', application: 'Municipal water, commercial buildings', imageId: 'product-industrial-filter' }],
  'ss-cartridge-filter-housing': [{ name: 'Ss Cartridge Filter Housing', application: 'General process liquid filtration', imageId: 'product-industrial-filter' }],
  'ss-single-cartridge-filter-housing': [{ name: 'SS Single Cartridge Filter Housing', application: 'Small batch processing, point-of-use filtration', imageId: 'product-industrial-filter' }],
  'ss-filter-housing-bs': [{ name: 'Stainless Steel Filter Housing', application: 'Particulate removal in industrial water and chemicals', imageId: 'product-industrial-filter' }],
  'multi-cartridge-housing-bs': [{ name: 'Multi Cartridge Filter Housing', application: 'Large scale liquid clarification and filtration', imageId: 'product-industrial-filter' }],
  'basket-filter-strainers': [{ name: 'Basket Filter And Strainers', application: 'Coarse and fine particulate removal in high-flow pipelines', imageId: 'product-industrial-filter' }],
  'code-7-filter-housing': [{ name: 'Code 7 Filter Housing', application: 'Pharmaceutical and biotechnology grade sterile filtration', imageId: 'product-industrial-filter' }],
  'ss-304-bag-filter-housing': [{ name: 'SS 304 Bag Filter Housing', application: 'Industrial liquid clarification, batch filtration', imageId: 'product-industrial-filter' }],
  'cartridge-filter-housing': [{ name: 'Cartridge Filter Housing', application: 'General purpose liquid and gas filtration', imageId: 'product-industrial-filter' }],
  'industrial-filter-housing': [{ name: 'Industrial Filter Housing', application: 'Heavy-duty industrial fluid purification', imageId: 'product-industrial-filter' }],
  'ss-multi-cartridge-filter-housing': [{ name: 'Ss Multi Cartridge Filter Housing', application: 'Large volume liquid clarification in manufacturing', imageId: 'product-industrial-filter' }],
  'industrial-filter-cartridge': [{ name: 'Industrial Filter Cartridge', application: 'Process water and chemical filtration', imageId: 'product-industrial-filter' }],
  'ss-duplex-filter-housing': [{ name: 'Ss Duplex Filter Housing', application: 'Continuous flow industrial systems', imageId: 'product-industrial-filter' }],
  'ss-basket-filter': [{ name: 'Stainless Steel Basket Filter', application: 'Coarse and fine particulate removal', imageId: 'product-industrial-filter' }],
  '1000l-ss-water-storage-tank': [{ name: '1000L Stainless Steel Water Storage Tank', application: 'Bulk water storage for residential and industrial use', imageId: 'hero-background' }],
  'ss-insulated-storage-tanks': [{ name: 'Ss Insulated Storage Tanks', application: 'Temperature-controlled liquid storage for pharmaceutical and food processing', imageId: 'hero-background' }],
  'ss-pressure-vessel-tank': [{ name: 'Stainless Steel Pressure Vessel Tank', application: 'Industrial process pressure control, chemical storage', imageId: 'hero-background' }],
  'ss-hot-water-storage-tank': [{ name: 'SS Hot Water Storage Tank', application: 'Domestic and industrial hot water supply systems', imageId: 'hero-background' }],
  'pre-filter': [{ name: 'Pre-Filter', application: 'HVAC intake, Dust removal', imageId: 'product-air-filter' }],
  'hepa-filter': [{ name: 'HEPA Filter', application: 'Cleanrooms, Medical facilities', imageId: 'product-air-filter' }],
  'advanced-duplex-system': [{ name: 'Advanced Duplex System', application: 'Critical process filtration', imageId: 'product-industrial-filter' }],
  'ss-ball-valve': [{ name: 'SS Ball Valve', application: 'Precise flow isolation and control', imageId: 'product-custom-filter' }],
  'ss-butterfly-valve': [{ name: 'SS Butterfly Valve', application: 'Throttling and shut-off in large pipelines', imageId: 'product-custom-filter' }],
  'filter-housing-connection': [{ name: 'Filter Housing Connection', application: 'Industrial piping systems', imageId: 'product-industrial-filter' }],
  'pp-filter-cartridge': [{ name: 'PP Filter Cartridge', application: 'Sediment and particulate filtration', imageId: 'product-industrial-filter' }],
  'pp-spun-filter-cartridge': [{ name: 'PP Spun Filter Cartridge', application: 'Pre-filtration for RO systems', imageId: 'product-industrial-filter' }],
  'pp-pleated-filter-cartridges': [{ name: 'PP Pleated Filter Cartridges', application: 'Fine clarity liquid filtration', imageId: 'product-industrial-filter' }],
  'paper-pleated-filter-cartridge': [{ name: 'Paper Pleated Filter Cartridge', application: 'Lube oil and fuel filtration', imageId: 'product-industrial-filter' }],
  'sintered-ss316-filter-cartridges': [{ name: 'Sintered Ss316 Filter Cartridges', application: 'High temperature / Pressure fluids', imageId: 'product-industrial-filter' }],
  'ss-single-bag-filter-housing': [{ name: 'SS Single Bag Filter Housing', application: 'Bulk industrial liquid clarification', imageId: 'product-industrial-filter' }],
  'filter-cartridges-code-7': [{ name: 'Filter Cartridges Code 7', application: 'Sterile pharmaceutical filtration', imageId: 'product-industrial-filter' }],
  'ss-filter-cartridges': [{ name: 'Stainless Steel Filter Cartridges', application: 'Aggressive chemicals and steam', imageId: 'product-industrial-filter' }],
  'conical-filter': [{ name: 'Conical Filter', application: 'Pipeline commissioning and protection', imageId: 'product-industrial-filter' }],
  'steam-filter-housing': [{ name: 'Steam Filter Housing', application: 'Sterile culinary and industrial steam', imageId: 'product-industrial-filter' }],
  'ss-316-ferrule': [{ name: 'SS 316 Ferrule', application: 'High pressure industrial fittings', imageId: 'product-custom-filter' }],
  'sanitary-ferrule': [{ name: 'Sanitary Ferrule', application: 'Food, Beverage, and Bio-pharma piping', imageId: 'product-custom-filter' }],
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
