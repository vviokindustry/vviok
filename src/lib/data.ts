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
      { name: 'Cartridge Filter Housing', slug: 'cartridge-filter-housing' },
      { name: 'Bag Filter Housing', slug: 'bag-filter-housing' },
      { name: 'Basket Filter Housing', slug: 'basket-filter-housing' },
    ]
  },
  {
    name: 'Filter Cartridge',
    slug: 'filter-cartridge',
    description: 'Precision filter cartridges for liquid and gas processing.',
    imageId: 'product-industrial-filter',
    subcategories: [
      { name: 'Filter Housing', slug: 'filter-housing' },
      { name: 'Connection', slug: 'connection' },
      { name: 'Polypropylene Cartridge', slug: 'pp-cartridge' },
      { name: 'Stainless Steel Cartridge', slug: 'ss-cartridge' },
    ]
  },
  {
    name: 'Air Filters',
    slug: 'air-filters',
    description: 'High-efficiency particulate air (HEPA) filters for clean environments.',
    imageId: 'product-air-filter',
    subcategories: [
      { name: 'HEPA Filters', slug: 'hepa-filters' },
      { name: 'Carbon Filters', slug: 'carbon-filters' },
    ]
  },
  {
    name: 'Filter Bags',
    slug: 'filter-bags',
    description: 'Durable filter bags for dust and liquid separation.',
    imageId: 'product-liquid-filter',
  },
  {
    name: 'Customized Solutions',
    slug: 'customized-filtration',
    description: 'Bespoke filtration systems designed to your exact specifications.',
    imageId: 'product-custom-filter',
  },
];

export const products: Record<string, { name: string; application: string; imageId: string }[]> = {
  // Subcategory slugs
  'cartridge-filter-housing': [
    { name: 'Single Cartridge Housing', application: 'Low flow water, chemical dosing', imageId: 'product-industrial-filter' },
    { name: 'Multi-Cartridge Housing', application: 'High flow industrial water, beverages', imageId: 'product-industrial-filter' },
  ],
  'bag-filter-housing': [
    { name: 'Single Bag Housing', application: 'Paint, resins, pre-filtration', imageId: 'product-industrial-filter' },
    { name: 'Multi-Bag Housing', application: 'Bulk liquid processing, cooling towers', imageId: 'product-industrial-filter' },
  ],
  'filter-housing': [
    { name: 'Industrial Cartridge Housing', application: 'General manufacturing, process water', imageId: 'product-industrial-filter' },
    { name: 'Sanitary Housing', application: 'Pharma, food and beverage compliance', imageId: 'product-industrial-filter' },
  ],
  'connection': [
    { name: 'Flange Connections', application: 'High pressure pipelines, heavy industry', imageId: 'product-industrial-filter' },
    { name: 'Threaded Connections', application: 'Compact systems, instrumentation', imageId: 'product-industrial-filter' },
    { name: 'Tri-Clamp Fittings', application: 'Hygienic and sanitary applications', imageId: 'product-industrial-filter' },
  ],
  'pp-cartridge': [
    { name: 'Spun Bound PP', application: 'Sediment removal, pre-filtration', imageId: 'product-industrial-filter' },
    { name: 'Pleated PP Cartridge', application: 'High surface area filtration', imageId: 'product-industrial-filter' },
  ],
  'ss-cartridge': [
    { name: 'Sintered Mesh Cartridge', application: 'High temp gas, chemical recovery', imageId: 'product-industrial-filter' },
    { name: 'Pleated SS Filter', application: 'Aggressive solvents, steam', imageId: 'product-industrial-filter' },
  ],
  'hepa-filters': [
    { name: 'H13 HEPA Filter', application: 'Cleanrooms, hospital surgery rooms', imageId: 'product-air-filter' },
    { name: 'H14 HEPA Filter', application: 'Electronics manufacturing, labs', imageId: 'product-air-filter' },
  ],
  // Category slugs (for those without subcategories)
  'filter-bags': [
    { name: 'Nomex Filter Bag', application: 'High temperature dust collection', imageId: 'product-liquid-filter' },
    { name: 'Polyester Filter Bag', application: 'General purpose liquid filtration', imageId: 'product-liquid-filter' },
  ],
  'customized-filtration': [
    { name: 'OEM Filter Units', application: 'Custom machine integration', imageId: 'product-custom-filter' },
    { name: 'Skid Mounted Systems', application: 'Turnkey filtration solutions', imageId: 'product-custom-filter' },
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
