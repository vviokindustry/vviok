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

export const productCategories = [
  {
    name: 'Industrial Filters',
    slug: 'industrial-filters',
    description: 'Robust filters for heavy-duty industrial applications.',
    imageId: 'product-industrial-filter',
  },
  {
    name: 'Filter Cartridges',
    slug: 'filter-cartridge',
    description: 'High-performance cartridges for precise micron filtration.',
    imageId: 'product-industrial-filter',
  },
  {
    name: 'Air Filters',
    slug: 'air-filters',
    description: 'High-efficiency particulate air (HEPA) filters for clean environments.',
    imageId: 'product-air-filter',
  },
  {
    name: 'Liquid Filters',
    slug: 'liquid-filters',
    description: 'Precision filters for fluid processing and purification.',
    imageId: 'product-liquid-filter',
  },
  {
    name: 'Customized Solutions',
    slug: 'customized-filtration',
    description: 'Bespoke filtration systems designed to your exact specifications.',
    imageId: 'product-custom-filter',
  },
];

export const products = {
  'industrial-filters': [
    { name: 'Bag Filters', application: 'Dust collection, chemical processing', imageId: 'product-industrial-filter' },
    { name: 'Cartridge Filters', application: 'Water treatment, pharmaceuticals', imageId: 'product-industrial-filter' },
    { name: 'Panel Filters', application: 'HVAC systems, pre-filtration', imageId: 'product-industrial-filter' },
  ],
  'filter-cartridge': [
    { name: 'Polypropylene Cartridge', application: 'Chemicals, water filtration', imageId: 'product-industrial-filter' },
    { name: 'Resin-Bonded Filter Cartridge', application: 'Paints, resins, oils, inks', imageId: 'product-industrial-filter' },
    { name: 'Stainless Steel Cartridge', application: 'High temperature, steam filtration', imageId: 'product-industrial-filter' },
    { name: 'Wound Filter Cartridge', application: 'Sediment removal, pre-filtration', imageId: 'product-industrial-filter' },
  ],
  'air-filters': [
    { name: 'HEPA Filters', application: 'Cleanrooms, hospitals, electronics', imageId: 'product-air-filter' },
    { name: 'Carbon Filters', application: 'Odor control, gas purification', imageId: 'product-air-filter' },
    { name: 'Pleated Filters', application: 'General ventilation, air handling units', imageId: 'product-air-filter' },
  ],
  'liquid-filters': [
    { name: 'Micron Filters', application: 'RO water pre-filtration, beverage industry', imageId: 'product-liquid-filter' },
    { name: 'Strainers', application: 'Pipeline protection, process fluids', imageId: 'product-liquid-filter' },
    { name: 'Filter Press', application: 'Wastewater treatment, sludge dewatering', imageId: 'product-liquid-filter' },
  ],
  'customized-filtration': [
    { name: 'OEM Filter Manufacturing', application: 'Integration into client machinery', imageId: 'product-custom-filter' },
    { name: 'High-Temp Filters', application: 'Furnaces, power generation', imageId: 'product-custom-filter' },
    { name: 'Corrosion-Resistant Filters', application: 'Chemical plants, marine environments', imageId: 'product-custom-filter' },
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
