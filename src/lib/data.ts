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
      { name: 'PP Spun Filter Cartridge', slug: 'pp-spun-filter-cartridge' },
      { name: 'PP Pleated Filter Cartridge', slug: 'pp-pleated-filter-cartridge' },
      { name: 'PTFE Pleated Filter Cartridge', slug: 'ptfe-pleated-filter-cartridge' },
      { name: 'SS Wire Mesh Cartridge', slug: 'ss-wire-mesh-cartridge' },
      { name: 'SS Sintered Powder Cartridge', slug: 'ss-sintered-powder-cartridge' },
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
    description: 'A wide range of specialized housings built to standard and custom industrial specifications.',
    imageId: 'product-industrial-filter',
    subcategories: [
      { name: 'Bag filter housing', slug: 'bag-filter-housing' },
      { name: 'Catridge filter housing', slug: 'catridge-filter-housing' },
      { name: 'Stainer filter housing', slug: 'stainer-filter-housing' },
      { name: 'Vent filter housing', slug: 'vent-filter-housing' },
      { name: 'Duplex filter housing', slug: 'duplex-filter-housing' },
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
    description: 'High-performance filtration solutions for industrial and hydraulic systems.',
    imageId: 'product-air-filter',
    subcategories: [
      { name: 'Hydraulic Oil Filters', slug: 'hydraulic-oil-filters' },
      { name: 'Sintered Stainless Steel Filter', slug: 'sintered-stainless-steel-filter' },
    ]
  },
  {
    name: 'Duplex Type Filter',
    slug: 'duplex-type-filter',
    description: 'Advanced duplex-type filtration units for critical process fluid purification.',
    imageId: 'product-industrial-filter',
    subcategories: [
      { name: 'SS Duplex Filter Housing', slug: 'ss-duplex-filter-housing-type' },
    ]
  },
  {
    name: 'Ball Valve',
    slug: 'ball-valve',
    description: 'Durable stainless steel valves for precise flow control and isolation in industrial piping.',
    imageId: 'product-custom-filter',
    subcategories: [
      { name: 'Stainless Steel Basket Strainers', slug: 'ss-basket-strainers-valve' },
    ]
  },
  {
    name: 'Butterfly Valve',
    slug: 'butterfly-valve',
    description: 'High-quality industrial butterfly valves for efficient and reliable flow regulation.',
    imageId: 'product-custom-filter',
    subcategories: [
      { name: 'Stainless Steel Dairy Fittings', slug: 'ss-dairy-fittings' },
    ]
  },
  {
    name: 'Stainless Steel Ferrule',
    slug: 'stainless-steel-ferrule',
    description: 'Precision-engineered SS 316 and sanitary ferrules for leak-proof, high-pressure connections.',
    imageId: 'product-custom-filter',
    subcategories: [
      { name: 'Stainless Steel Ferrule', slug: 'ss-ferrule' },
    ]
  },
];

export const products: Record<string, { name: string; application: string; imageId: string }[]> = {
  'pp-spun-filter-cartridge': [{ name: 'PP Spun Filter Cartridge', application: 'Sediment and particulate removal, pre-filtration for RO systems', imageId: 'product-industrial-filter' }],
  'pp-pleated-filter-cartridge': [{ name: 'PP Pleated Filter Cartridge', application: 'High clarity liquid filtration, chemical and solvent processing', imageId: 'product-industrial-filter' }],
  'ptfe-pleated-filter-cartridge': [{ name: 'PTFE Pleated Filter Cartridge', application: 'Aggressive chemicals, solvents, and sterile air filtration', imageId: 'product-industrial-filter' }],
  'ss-wire-mesh-cartridge': [{ name: 'SS Wire Mesh Cartridge', application: 'High temperature and high pressure liquid filtration in industrial pipelines', imageId: 'product-industrial-filter' }],
  'ss-sintered-powder-cartridge': [{ name: 'SS Sintered Powder Cartridge', application: 'Fine filtration for steam, polymers, and aggressive process fluids', imageId: 'product-industrial-filter' }],
  'ss-industrial-duplex-filter-housing': [{ name: 'Stainless Steel Industrial Duplex Filter Housing', application: 'Continuous flow systems, industrial refineries', imageId: 'product-industrial-filter' }],
  'water-filter-housing': [{ name: 'Water Filter Housing', application: 'Municipal water, commercial buildings', imageId: 'product-industrial-filter' }],
  'ss-cartridge-filter-housing': [{ name: 'Ss Cartridge Filter Housing', application: 'General process liquid filtration', imageId: 'product-industrial-filter' }],
  'ss-single-cartridge-filter-housing': [{ name: 'SS Single Cartridge Filter Housing', application: 'Small batch processing, point-of-use filtration', imageId: 'product-industrial-filter' }],
  'ss-filter-housing-bs': [{ name: 'Stainless Steel Filter Housing', application: 'Particulate removal in industrial water and chemicals', imageId: 'product-industrial-filter' }],
  'multi-cartridge-housing-bs': [{ name: 'Multi Cartridge Filter Housing', application: 'Large scale liquid clarification and filtration', imageId: 'product-industrial-filter' }],
  'basket-filter-strainers': [{ name: 'Basket Filter And Strainers', application: 'Coarse and fine particulate removal in high-flow pipelines', imageId: 'product-industrial-filter' }],
  'bag-filter-housing': [{ name: 'Bag filter housing', application: 'High-volume liquid clarification and bulk filtration', imageId: 'product-industrial-filter' }],
  'catridge-filter-housing': [{ name: 'Catridge filter housing', application: 'Precision liquid and gas processing in sanitary environments', imageId: 'product-industrial-filter' }],
  'stainer-filter-housing': [{ name: 'Stainer filter housing', application: 'Pipeline debris removal and coarse filtration protection', imageId: 'product-industrial-filter' }],
  'vent-filter-housing': [{ name: 'Vent filter housing', application: 'Sterile air and gas filtration for storage tank venting', imageId: 'product-industrial-filter' }],
  'duplex-filter-housing': [{ name: 'Duplex filter housing', application: 'Continuous flow filtration with zero downtime for maintenance', imageId: 'product-industrial-filter' }],
  'industrial-filter-housing': [{ name: 'Industrial Filter Housing', application: 'Heavy-duty industrial fluid purification', imageId: 'product-industrial-filter' }],
  'ss-multi-cartridge-filter-housing': [{ name: 'Ss Multi Cartridge Filter Housing', application: 'Large volume liquid clarification in manufacturing', imageId: 'product-industrial-filter' }],
  'industrial-filter-cartridge': [{ name: 'Industrial Filter Cartridge', application: 'Process water and chemical filtration', imageId: 'product-industrial-filter' }],
  'ss-duplex-filter-housing': [{ name: 'Ss Duplex Filter Housing', application: 'Continuous flow industrial systems', imageId: 'product-industrial-filter' }],
  'ss-basket-filter': [{ name: 'Stainless Steel Basket Filter', application: 'Coarse and fine particulate removal', imageId: 'product-industrial-filter' }],
  '1000l-ss-water-storage-tank': [{ name: '1000L Stainless Steel Water Storage Tank', application: 'Bulk water storage for residential and industrial use', imageId: 'hero-background' }],
  'ss-insulated-storage-tanks': [{ name: 'Ss Insulated Storage Tanks', application: 'Temperature-controlled liquid storage for pharmaceutical and food processing', imageId: 'hero-background' }],
  'ss-pressure-vessel-tank': [{ name: 'Stainless Steel Pressure Vessel Tank', application: 'Industrial process pressure control, chemical storage', imageId: 'hero-background' }],
  'ss-hot-water-storage-tank': [{ name: 'SS Hot Water Storage Tank', application: 'Domestic and industrial hot water supply systems', imageId: 'hero-background' }],
  'hydraulic-oil-filters': [{ name: 'Hydraulic Oil Filters', application: 'Removing contaminants from hydraulic fluid in industrial machinery', imageId: 'product-industrial-filter' }],
  'sintered-stainless-steel-filter': [{ name: 'Sintered Stainless Steel Filter', application: 'High-temperature and high-pressure liquid and gas filtration', imageId: 'product-industrial-filter' }],
  'ss-duplex-filter-housing-type': [{ name: 'SS Duplex Filter Housing', application: 'Advanced industrial process filtration requiring zero downtime', imageId: 'product-industrial-filter' }],
  'ss-basket-strainers-valve': [{ name: 'Stainless Steel Basket Strainers', application: 'Efficient coarse filtration and flow control', imageId: 'product-custom-filter' }],
  'ss-dairy-fittings': [{ name: 'Stainless Steel Dairy Fittings', application: 'Sanitary flow control and connection in dairy and food processing', imageId: 'product-custom-filter' }],
  'ss-ferrule': [{ name: 'Stainless Steel Ferrule', application: 'Precision connections for leak-proof industrial piping', imageId: 'product-custom-filter' }],
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