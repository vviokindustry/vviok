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
    name: 'Housing',
    slug: 'housing',
    description: 'A wide range of specialized housings built to standard and custom industrial specifications.',
    imageId: 'product-industrial-filter',
    subcategories: [
      { name: 'Bag Filter Housing', slug: 'bag-filter-housing' },
      { name: 'Catridge Filter Housing', slug: 'catridge-filter-housing' },
      { name: 'Strainer Filter Housing', slug: 'stainer-filter-housing' },
      { name: 'Vent Filter Housing', slug: 'vent-filter-housing' },
      { name: 'Duplex Filter Housing', slug: 'duplex-filter-housing' },
      { name: 'Multi-Bag Filter Housing', slug: 'multi-bag-filter-housing' },
      { name: 'Multi-Cartridge Filter Housing', slug: 'multi-cartridge-housing' },
    ]
  },
  {
    name: 'Strainer',
    slug: 'strainer',
    description: 'Reliable simplex, duplex, and multi-basket strainers for effective coarse filtration in pipelines.',
    imageId: 'product-industrial-filter',
    subcategories: [
      { name: 'Basket Strainers', slug: 'basket-strainers' },
      { name: 'Taper Basket Strainers', slug: 'taper-basket-strainers' },
      { name: 'Conical Strainers', slug: 'conical-strainers' },
      { name: 'Pleated Strainers', slug: 'pleated-strainers' },
    ]
  },
  {
    name: 'Vessels',
    slug: 'vessels',
    description: 'High-performance industrial vessels and specialized tanks for critical storage and process requirements.',
    imageId: 'product-custom-filter',
    subcategories: [
      { name: 'Storage Tank', slug: 'storage-tank' },
      { name: 'Pressure vessel', slug: 'pressure-vessel' },
      { name: 'Air reciver tank', slug: 'air-reciver-tank' },
      { name: 'Purified water storage tank', slug: 'purified-water-storage-tank' },
      { name: 'SS pendants', slug: 'ss-pendants' },
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
  }
];

export const products: Record<string, { name: string; application: string; imageId: string }[]> = {
  // Filter Cartridge
  'pp-spun-filter-cartridge': [{ name: 'PP Spun Filter Cartridge', application: 'Sediment and particulate removal, pre-filtration for RO systems', imageId: 'product-industrial-filter' }],
  'pp-pleated-filter-cartridge': [{ name: 'PP Pleated Filter Cartridge', application: 'High clarity liquid filtration, chemical and solvent processing', imageId: 'product-industrial-filter' }],
  'ptfe-pleated-filter-cartridge': [{ name: 'PTFE Pleated Filter Cartridge', application: 'Aggressive chemicals, solvents, and sterile air filtration', imageId: 'product-industrial-filter' }],
  'ss-wire-mesh-cartridge': [{ name: 'SS Wire Mesh Cartridge', application: 'High temperature and high pressure liquid filtration in industrial pipelines', imageId: 'product-industrial-filter' }],
  'ss-sintered-powder-cartridge': [{ name: 'SS Sintered Powder Cartridge', application: 'Fine filtration for steam, polymers, and aggressive process fluids', imageId: 'product-industrial-filter' }],
  
  // Housing
  'bag-filter-housing': [{ name: 'Bag Filter Housing', application: 'High-volume liquid clarification and bulk filtration', imageId: 'product-industrial-filter' }],
  'catridge-filter-housing': [{ name: 'Cartridge Filter Housing', application: 'Precision liquid and gas processing in sanitary environments', imageId: 'product-industrial-filter' }],
  'stainer-filter-housing': [{ name: 'Strainer Filter Housing', application: 'Pipeline debris removal and coarse filtration protection', imageId: 'product-industrial-filter' }],
  'vent-filter-housing': [{ name: 'Vent Filter Housing', application: 'Sterile air and gas filtration for storage tank venting', imageId: 'product-industrial-filter' }],
  'duplex-filter-housing': [{ name: 'Duplex Filter Housing', application: 'Continuous flow filtration with zero downtime for maintenance', imageId: 'product-industrial-filter' }],
  'multi-bag-filter-housing': [{ name: 'Multi-Bag Filter Housing', application: 'High-volume liquid clarification for large industrial processes', imageId: 'product-industrial-filter' }],
  'multi-cartridge-housing': [{ name: 'Multi-Cartridge Filter Housing', application: 'High-precision large-scale liquid filtration and clarification', imageId: 'product-industrial-filter' }],
  
  // Strainer
  'basket-strainers': [{ name: 'Basket Strainers', application: 'Removing large particulates and debris from liquid process streams', imageId: 'product-industrial-filter' }],
  'taper-basket-strainers': [{ name: 'Taper Basket Strainers', application: 'Efficient coarse filtration in high-flow pipelines with tapered design', imageId: 'product-industrial-filter' }],
  'conical-strainers': [{ name: 'Conical Strainers', application: 'Temporary or permanent protection for pumps, valves, and other equipment', imageId: 'product-industrial-filter' }],
  'pleated-strainers': [{ name: 'Pleated Strainers', application: 'Increased surface area for extended service life in critical filtration tasks', imageId: 'product-industrial-filter' }],
  
  // Vessels
  'storage-tank': [{ name: 'Storage Tank', application: 'Industrial liquid storage and containment for chemical and process industries', imageId: 'product-custom-filter' }],
  'pressure-vessel': [{ name: 'Pressure vessel', application: 'Safe processing and storage of liquids and gases under high pressure', imageId: 'product-custom-filter' }],
  'air-reciver-tank': [{ name: 'Air reciver tank', application: 'Compressed air storage and pressure stabilization for industrial systems', imageId: 'product-custom-filter' }],
  'purified-water-storage-tank': [{ name: 'Purified water storage tank', application: 'Sterile water storage for pharmaceutical and food processing', imageId: 'product-custom-filter' }],
  'ss-pendants': [{ name: 'SS pendants', application: 'Sanitary support systems for industrial equipment and piping', imageId: 'product-custom-filter' }],
  
  // SS Ferrule
  'ss-ferrule': [{ name: 'Stainless Steel Ferrule', application: 'Precision connections for leak-proof industrial piping', imageId: 'product-custom-filter' }],
  
  // Water Storage Tank
  '1000l-ss-water-storage-tank': [{ name: '1000L Stainless Steel Water Storage Tank', application: 'Bulk water storage for residential and industrial use', imageId: 'hero-background' }],
  'ss-insulated-storage-tanks': [{ name: 'SS Insulated Storage Tanks', application: 'Temperature-controlled liquid storage for pharmaceutical and food processing', imageId: 'hero-background' }],
  
  // Pressure Tank
  'ss-pressure-vessel-tank': [{ name: 'Stainless Steel Pressure Vessel Tank', application: 'Industrial process pressure control, chemical storage', imageId: 'hero-background' }],
  'ss-hot-water-storage-tank': [{ name: 'SS Hot Water Storage Tank', application: 'Domestic and industrial hot water supply systems', imageId: 'hero-background' }],
  
  // Air Filter
  'hydraulic-oil-filters': [{ name: 'Hydraulic Oil Filters', application: 'Removing contaminants from hydraulic fluid in industrial machinery', imageId: 'product-industrial-filter' }],
  'sintered-stainless-steel-filter': [{ name: 'Sintered Stainless Steel Filter', application: 'High-temperature and high-pressure liquid and gas filtration', imageId: 'product-industrial-filter' }],
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
