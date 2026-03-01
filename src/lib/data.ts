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
    pageH1: 'Filter Cartridge Manufacturer & Supplier in Ahmedabad, India',
    description: 'We are a leading filter cartridge manufacturer in Ahmedabad, India, providing high-performance filtration solutions for various industrial applications. Our range includes premium quality filter cartridges, cartridge filter housing, and customized filtration systems designed for durability and efficiency.',
    metaTitle: 'Filter Cartridge Manufacturer in Ahmedabad, India | Industrial Cartridge Filter Supplier',
    metaDescription: 'Trusted filter cartridge manufacturer and supplier in Ahmedabad, India offering industrial cartridge filters and filter housing solutions for multiple industries across India.',
    metaKeywords: 'filter cartridge, filter cartridge supplier, filter cartridge manufacturer, filter cartridge manufacturer in ahmedabad, filter cartridge manufacturer in India, filter cartridge supplier in ahmedabad, filter cartridge supplier in India, cartridge filter manufacturers in india, cartridge filter housing manufacturer',
    imageId: 'product-industrial-filter',
    subcategories: [
      { name: 'PP Spun Filter Cartridge', slug: 'pp-spun-filter-cartridge-supplier' },
      { name: 'PP Pleated Filter Cartridge', slug: 'pp-pleated-filter-cartridge-supplier' },
      { name: 'PTFE Pleated Filter Cartridge', slug: 'ptfe-pleated-filter-cartridge-supplier' },
      { name: 'SS Wire Mesh Cartridge', slug: 'ss-wire-mesh-cartridge' },
      { name: 'SS Sintered Powder Cartridge', slug: 'ss-sintered-powder-cartridge' },
    ]
  },
  {
    name: 'Housing',
    slug: 'filter-housing-manufacturer',
    pageH1: 'Filter Housing Manufacturer & Supplier in Ahmedabad, India',
    description: 'We are a leading filter housing manufacturer in Ahmedabad, India, offering high-quality and durable filtration housing solutions for various industrial applications. Our filter housing systems are designed to ensure efficient filtration performance, long service life, and easy maintenance.',
    metaTitle: 'Filter Housing Manufacturer in Ahmedabad, India | Bag & Cartridge Filter Housing Supplier',
    metaDescription: 'Leading filter housing manufacturer and supplier in Ahmedabad, India offering bag filter housing, cartridge filter housing, duplex and multi-bag filter housing for industrial applications.',
    metaKeywords: 'filter housing, filter housing manufacturer, filter housing supplier, bag filter housing, code 7 filter housing, catridge filter housing, strainer housing filter, housing strainer, vent filter housing, duplex filter housing, duplex bag filter housing, Multi-Bag Filter Housing, Multi-Cartridge Filter Housing',
    imageId: 'product-industrial-filter',
    subcategories: [
      { name: 'Bag Filter Housing', slug: 'bag-filter-housing' },
      { name: 'Catridge Filter Housing', slug: 'catridge-filter-housing-supplier' },
      { name: 'Strainer Filter Housing', slug: 'industrial-strainer-filter-housing-supplier' },
      { name: 'Vent Filter Housing', slug: 'vent-filter-housing-supplier' },
      { name: 'Duplex Filter Housing', slug: 'duplex-filter-housing-supplier' },
      { name: 'Multi-Bag Filter Housing', slug: 'industrial-multi-bag-filter-housing' },
      { name: 'Multi-Cartridge Filter Housing', slug: 'multi-cartridge-filter-housing' },
    ]
  },
  {
    name: 'Strainer',
    slug: 'industrial-strainer-filters',
    pageH1: 'Industrial Strainer Filter Manufacturer & Supplier in Ahmedabad, India',
    description: 'We are a leading industrial strainer filter manufacturer in Ahmedabad, India, offering reliable and high-performance filtration solutions for various industrial applications.',
    metaTitle: 'Industrial Strainer Filter Manufacturer in Ahmedabad, India | Stainless Steel Strainer Supplier',
    metaDescription: 'Leading industrial strainer filter manufacturer in Ahmedabad, India. We supply stainless steel basket, conical, taper and pleated strainer filters across India.',
    metaKeywords: 'Industrial Strainer Filter, strainer filter manufacturer in india, strainer filter supplier in india, strainer filter manufacturer in ahmedabad, stainless steel filter, industrial filtration, Basket Strainers filter, Taper Basket Strainers, Conical Strainers filter, Pleated Strainers filter, stainless steel filter',
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
    slug: 'industrial-vessels-manufacturer',
    pageH1: 'Industrial Vessels Manufacturer & Supplier in Ahmedabad, India',
    description: 'We are a leading industrial vessels manufacturer in Ahmedabad, India, offering high-quality and durable stainless steel vessel solutions for various industrial applications.',
    metaTitle: 'Industrial Vessels Manufacturer in Ahmedabad, India | Stainless Steel Pressure Vessel Supplier',
    metaDescription: 'Leading industrial vessels manufacturer in Ahmedabad, India. We supply stainless steel pressure vessels, mixing tanks, fermentation tanks and water storage tanks across India.',
    metaKeywords: 'industrial vessels manufacturer, pressure vessels manufacturers, steel vessels, stainless steel vessel, stainless water storage tank, stainless steel mixing tanks, stainless steel pressure vessel, chemical mixing tank with agitator, stainless steel fermentation tanks, stainless steel mixing tank with agitator',
    imageId: 'product-custom-filter',
    subcategories: [
      { name: 'Storage Tank', slug: 'storage-tank' },
      { name: 'Pressure vessel', slug: 'pressure-vessel' },
      { name: 'Air reciver tank', slug: 'air-reciver-tank' },
      { name: 'Purified water storage tank', slug: 'purified-water-storage-tank' },
      { name: 'SS pendants', slug: 'ss-pendants' },
    ]
  }
];

export const industries = [
  {
    name: 'Water Treatment',
    description: 'Providing advanced filtration for industrial and municipal water systems.',
    icon: Droplets,
  },
  {
    name: 'Chemical',
    description: 'Specialized solutions for aggressive chemical and solvent processing.',
    icon: FlaskConical,
  },
  {
    name: 'Pharmaceutical',
    description: 'Sanitary filtration for sterile air and high-purity process fluids.',
    icon: HeartPulse,
  },
  {
    name: 'Food & Beverage',
    description: 'Compliance-driven filtration for liquid processing and bottling.',
    icon: Grape,
  },
  {
    name: 'Oil & Gas',
    description: 'Heavy-duty strainers and housings for refinery and pipeline protection.',
    icon: Fuel,
  },
  {
    name: 'Manufacturing',
    description: 'General industrial filtration to protect equipment and optimize performance.',
    icon: Building,
  },
];

export const whyChooseUs = [
  {
    title: 'Expert Engineering',
    description: 'Our team brings over 20 years of specialized experience in industrial filtration.',
    icon: Settings,
  },
  {
    title: 'Global Export',
    description: 'Reliable supply chain delivering products to over 15 countries worldwide.',
    icon: Globe,
  },
  {
    title: 'Quality Standards',
    description: 'All products adhere to strict ASME and ISO quality management protocols.',
    icon: CheckCircle,
  },
  {
    title: 'Custom Solutions',
    description: 'Tailor-made filtration systems designed to your exact technical parameters.',
    icon: Lightbulb,
  },
  {
    title: 'Reliable Delivery',
    description: 'Committed to on-time shipping and robust packaging for safe transit.',
    icon: Package,
  },
  {
    title: 'Award Winning',
    description: 'Recognized for innovation and excellence in industrial manufacturing.',
    icon: Award,
  }
];

export const products: Record<string, ProductDetail[]> = {
  'pp-spun-filter-cartridge-supplier': [{ 
    name: 'PP Spun Filter Cartridge Manufacturer & Supplier in India', 
    application: 'Sediment and particulate removal, pre-filtration for RO systems', 
    imageId: 'product-pp-spun-1',
    imageIds: ['product-pp-spun-1', 'product-pp-spun-2'],
    description: 'Our PP Spun Filter Cartridge is manufactured using 100% high-grade polypropylene to deliver superior depth filtration and long service life. Designed for effective sediment and particulate removal, these spun polypropylene filter cartridges provide high dirt-holding capacity with low pressure drop.\n\nAs a trusted PP spun filter cartridge manufacturer in Ahmedabad, India, we supply reliable and cost-effective filtration solutions suitable for industrial and commercial water treatment applications.',
    detailedSpecs: 'Our PP spun cartridge filter is widely used in water treatment plants, chemical industries, pharmaceuticals, food & beverage processing, and RO pre-filtration systems. Manufactured under strict quality standards, our spun polypropylene filter cartridges ensure consistent performance, durability, and competitive pricing across India.',
    metaTitle: 'PP Spun Filter Cartridge Manufacturer India | Polypropylene Filter Supplier',
    metaDescription: 'Trusted filter cartridge manufacturer and supplier in Ahmedabad, India offering high-quality spun polypropylene filter cartridges at competitive prices.',
    metaKeywords: 'pp spun filter cartridge, spun polypropylene filter cartridge, pp spun cartridge filter, pp spun filter manufacturers, pp spun filter cartridge 5 micron, spun polypropylene filter, pp spun filter cartridge price, polypropylene spun filter, pp spun cartridge',
    features: [
      '100% Polypropylene construction for wide chemical compatibility',
      'Multi-layer depth filtration structure',
      'High dirt holding capacity and low pressure drop',
      'No surfactants, binders, or adhesives used',
      'Food grade materials (FDA compliant)',
      'Excellent removal of sand, silt, dirt, and rust particles'
    ],
    faqs: [
      { question: 'What is the lifespan of a pp spun filter cartridge?', answer: 'The lifespan typically ranges from 3 to 6 months depending on the water quality and usage volume.' },
      { question: 'Are these cartridges compatible with standard housings?', answer: 'Yes, our pp spun cartridges are designed to fit most standard industrial and domestic filter housings.' },
      { question: 'Can these filters be cleaned and reused?', answer: 'Pp spun filters are depth filters designed for single use to ensure maximum hygiene and filtration efficiency.' }
    ]
  }],
  'pp-pleated-filter-cartridge-supplier': [{ 
    name: 'PP Pleated Filter Cartridge Manufacturer in Ahmedabad, India', 
    application: 'High clarity liquid filtration, chemical and solvent processing', 
    imageId: 'product-pp-pleated-1',
    imageIds: ['product-pp-pleated-1', 'product-pp-pleated-2'],
    description: 'Our PP Pleated Filter Cartridge is manufactured using high-quality polypropylene filter media to deliver superior surface filtration efficiency and extended service life. The pleated design provides a larger filtration area, ensuring high flow rates with low pressure drop.\n\nAs a trusted pleated filter cartridge manufacturer in Ahmedabad, India, we supply durable and high-performance pleated polypropylene filter cartridges suitable for demanding industrial filtration applications across India.',
    detailedSpecs: 'Our pleated polypropylene filter cartridges are widely used in water treatment plants, pharmaceuticals, chemicals, food & beverage processing, and dust collector systems. The advanced pleated filter cartridge design ensures better particle retention and longer operational life compared to standard depth filters.\n\nRecognized among reliable cartridge filter manufacturers in India, we focus on quality manufacturing, competitive pricing, and timely supply across India.',
    metaTitle: 'PP Pleated Filter Cartridge Manufacturer & Supplier in Ahmedabad, India',
    metaDescription: 'Leading PP pleated filter cartridge manufacturer in Ahmedabad, India. We supply high-quality pleated polypropylene filter cartridges for industrial filtration applications.',
    metaKeywords: 'pp pleated filter cartridge, pleated polypropylene filter cartridges, polypropylene filter media, pleated filter cartridge manufacturer, 5 micron pp filter, Cartridge filter manufacturers in India, Pleated filter cartridge dust collector, filter cartridge manufacturers in ahmedabad, micron cartridge filter manufacturers in india, pleated dust collection cartridges',
    features: [
      'High surface area for high flow rates and long life',
      'Absolute and Nominal micron ratings available',
      'All-polypropylene construction for chemical resistance',
      'Fixed pore structure prevents unloading of contaminants',
      'Low pressure drop ensures efficient operation',
      'FDA compliant materials for food and beverage use'
    ],
    faqs: [
      { question: 'What is the difference between nominal and absolute ratings?', answer: 'Absolute ratings guarantee the removal of particles at the specified size with 99.9% efficiency, whereas nominal ratings represent a general efficiency level.' },
      { question: 'Are these filters suitable for chemical processing?', answer: 'Yes, the all-polypropylene construction provides excellent resistance to a wide range of chemicals and solvents.' }
    ]
  }],
  'ptfe-pleated-filter-cartridge-supplier': [{ 
    name: 'PTFE Pleated Filter Cartridge Manufacturer in Ahmedabad, India', 
    application: 'Aggressive chemicals, solvents, and sterile air filtration', 
    imageId: 'product-ptfe-pleated-1',
    imageIds: ['product-ptfe-pleated-1', 'product-ptfe-pleated-2'],
    description: 'Our PTFE Pleated Filter Cartridge is manufactured using advanced PTFE membrane filter media to deliver superior chemical resistance and high-efficiency filtration performance. Designed with a precision pleated structure, it provides a large filtration surface area, ensuring high flow rates with low pressure drop.\n\nAs a trusted PTFE pleated filter cartridge manufacturer in Ahmedabad, India, we supply reliable and durable filtration solutions suitable for critical industrial and dust collector applications.',
    features: [
      'High-performance PTFE membrane filter cartridge',
      'Excellent chemical and temperature resistance',
      'Large filtration area due to pleated design',
      'Low pressure drop and high flow efficiency',
      'Suitable for fine particle and dust filtration',
      'Strong mechanical strength and long service life',
      'Available in multiple micron ratings'
    ],
    detailedSpecs: 'Our PTFE filter cartridge, also known as a Teflon cartridge filter, is widely used in pharmaceuticals, chemicals, food processing, electronics, and industrial dust collector systems. The advanced PTFE membrane ensures precise particle retention and reliable performance in demanding environments.\n\nRecognized among leading filter cartridge manufacturers in India, we focus on quality manufacturing, competitive PTFE pleated filter cartridge price, and timely supply across India.',
    metaTitle: 'PTFE Pleated Filter Cartridge Manufacturer & Supplier in Ahmedabad, India',
    metaDescription: 'Leading PTFE pleated filter cartridge manufacturer in Ahmedabad, India. We supply high-performance PTFE membrane filter cartridges for industrial filtration and dust collector applications.',
    metaKeywords: 'ptfe pleated filter cartridge, Ptfe pleated filter cartridge price, PTFE Filter Cartridge, ptfe membrane filter cartridge, teflon cartridge filter, Pleated filter cartridge dust collector, Cartridge filter manufacturers in India, filter cartridge manufacturers in india',
    faqs: [
      { question: 'Can ptfe filters handle sterile air filtration?', answer: 'Yes, their hydrophobic nature makes them excellent for sterile air and gas venting applications.' },
      { question: 'What chemicals are these filters resistant to?', answer: 'They are resistant to almost all strong acids, bases, and organic solvents.' }
    ]
  }],
  'ss-wire-mesh-cartridge': [{ 
    name: 'SS Wire Mesh Cartridge Manufacturer in Ahmedabad, India', 
    application: 'High temperature and high pressure liquid filtration in industrial pipelines', 
    imageId: 'product-ss-wire-mesh-1',
    imageIds: ['product-ss-wire-mesh-1', 'product-ss-wire-mesh-2'],
    description: 'Our SS Wire Mesh Cartridge is manufactured using high-quality stainless steel filter mesh to provide durable and reusable filtration solutions for industrial applications. Designed for high strength and corrosion resistance, the stainless steel mesh filter cartridge ensures reliable performance under high pressure and temperature conditions.\n\nAs a trusted SS wire mesh cartridge manufacturer in Ahmedabad, India, we supply precision-engineered filtration products suitable for liquid and process filtration systems.',
    features: [
      'Premium-grade stainless steel filter mesh construction',
      'Available in 5 micron stainless steel mesh filter options',
      '100 micron stainless steel mesh filter variants available',
      'High temperature and pressure resistance',
      'Reusable and easy to clean design',
      'Strong mechanical strength and long service life',
      'Suitable for industrial and process filtration'
    ],
    detailedSpecs: 'Our stainless steel mesh filter cartridge is widely used in chemical processing, pharmaceuticals, food & beverage, oil & gas, and water treatment industries. The SS wire mesh cartridge provides consistent filtration accuracy and durability in demanding environments.\n\nRecognized among reliable SS wire mesh cartridge manufacturers in India, we ensure strict quality control, competitive pricing, and timely delivery across India.',
    metaTitle: 'SS Wire Mesh Cartridge Manufacturer & Supplier in Ahmedabad, India',
    metaDescription: 'Leading SS wire mesh cartridge manufacturer in Ahmedabad, India. We supply stainless steel mesh filter cartridges in 5 micron, 100 micron and custom sizes.',
    metaKeywords: 'ss wire mesh cartridge, stainless steel filter mesh, stainless steel mesh filter cartridge, 5 micron stainless steel mesh Filter, 100 micron stainless steel Mesh filter, Ss wire mesh cartridge manufacturer, SS wire Mesh filter, wire mesh filter cartridge, 400 micron stainless steel mesh',
    faqs: [
      { question: 'How do i clean an ss wire mesh cartridge?', answer: 'These can be cleaned using backwashing, ultrasonic cleaning, or chemical cleaning depending on the contaminant.' },
      { question: 'What is the maximum operating temperature?', answer: 'Our ss cartridges can withstand temperatures up to 300°c depending on the seal material used.' }
    ]
  }],
  'ss-sintered-powder-cartridge': [{ 
    name: 'SS Sintered Powder Cartridge Manufacturer in Ahmedabad, India', 
    application: 'Fine filtration for steam, polymers, and aggressive process fluids', 
    imageId: 'product-ss-sintered-1',
    imageIds: ['product-ss-sintered-1', 'product-ss-sintered-2', 'product-ss-sintered-3'],
    description: 'Our SS Sintered Powder Cartridge is manufactured using high-grade stainless steel powder through advanced sintering technology to ensure precise and uniform filtration. Designed for high strength and durability, the sintered powder filter cartridge provides excellent resistance to pressure, temperature, and corrosion.\n\nAs a trusted SS sintered powder cartridge manufacturer in Ahmedabad, India, we supply reliable and long-lasting filtration solutions suitable for demanding industrial applications.',
    features: [
      'High-quality sintered stainless steel construction',
      'Uniform pore structure for precise filtration',
      'Excellent pressure and temperature resistance',
      'Corrosion-resistant and durable design',
      'Reusable and easy to clean',
      'Suitable for high-performance industrial filtration',
      'Long operational service life'
    ],
    detailedSpecs: 'Our sintered SS filter cartridges are widely used in chemical processing, pharmaceuticals, oil & gas, food processing, and water treatment industries. The SS sintered filter cartridge offers consistent filtration accuracy and mechanical strength in harsh operating conditions.\n\nRecognized among reliable sintered powder filter cartridge manufacturers in India, we focus on quality manufacturing, competitive pricing, and timely supply across India.',
    metaTitle: 'SS Sintered Powder Cartridge Manufacturer & Supplier in Ahmedabad, India',
    metaDescription: 'Leading SS sintered powder cartridge manufacturer in Ahmedabad, India. We supply durable sintered stainless steel filter cartridges for industrial filtration applications.',
    metaKeywords: 'ss sintered powder cartridge, sintered powder filter cartridge, stainless steel sintered powder filter cartridges, Sintered Filter manufacturer in India, Ss sintered powder cartridge sizes, sintered ss filter cartridges, ss sintered filter cartridge',
    faqs: [
      { question: 'What is sintering?', answer: 'Sintering is a process of compacting and forming a solid mass of material by heat or pressure without melting it to the point of liquefaction.' },
      { question: 'Are these suitable for high-pressure gas filtration?', answer: 'Yes, they are specifically engineered for high-pressure environments and critical gas filtration.' }
    ]
  }],
  'bag-filter-housing': [{ 
    name: 'Industrial Bag Filter Housing Manufacturer in Ahmedabad, India', 
    application: 'Industrial liquid filtration and water treatment systems', 
    imageId: 'product-bag-housing-1',
    description: 'Our Industrial Bag Filter Housing is designed for efficient liquid filtration in demanding industrial environments. Manufactured using high-grade stainless steel, the stainless steel bag filter housing ensures durability, corrosion resistance, and long service life.\n\nAs a trusted industrial bag filter housing manufacturer in Ahmedabad, India, we supply reliable filtration systems including single bag filter housing, 2 bag filter, and 4 bag filter housing suitable for water and process filtration applications.',
    features: [
      'Heavy-duty stainless steel bag filter housing',
      'Available in single bag, 2 bag and 4 bag configurations',
      'Size 2 bag filter housing options available',
      'High flow rate with low pressure drop',
      'Easy bag replacement and maintenance',
      'Suitable for water bag filter housing applications',
      'Corrosion-resistant and long-lasting construction'
    ],
    detailedSpecs: 'Our industrial bag filter systems are widely used in water treatment, chemicals, pharmaceuticals, food & beverage, and other industrial filtration applications. The stainless bag filter housing is engineered to provide consistent filtration performance and easy operation in high-flow environments.\n\nRecognized among reliable industrial bag filter housing manufacturers in India, we ensure precision manufacturing, competitive pricing, and timely delivery across India.',
    metaTitle: 'Industrial Bag Filter Housing Manufacturer & Supplier in Ahmedabad, India',
    metaDescription: 'Leading industrial bag filter housing manufacturer in Ahmedabad, India. We supply stainless steel single, 2 bag and 4 bag filter housing for water and industrial filtration.',
    metaKeywords: 'bag filter housing, stainless steel bag filter housing, bag filter housing manufacturer, industrial bag filter, single bag filter housing, 2 bag filter, 4 bag filter, 4 bag filter housing, single bag filter housing, size 2 bag filter housing, water bag filter housing, industrial bag filter housing, stainless bag filter housing, bag filter housing supplier',
    faqs: [
      { question: 'What materials are available for bag filter housings?', answer: 'We primarily manufacture them in ss 304, ss 316, and ss 316l, but custom carbon steel options are also available.' },
      { question: 'How do i choose the right size?', answer: 'Size selection depends on your required flow rate and the volume of contaminants in your process fluid.' }
    ]
  }],
  'catridge-filter-housing-supplier': [{ 
    name: 'Industrial Cartridge Filter Housing Manufacturer in Ahmedabad, India', 
    application: 'Industrial and sanitary liquid filtration applications', 
    imageId: 'product-cartridge-housing-1',
    imageIds: ['product-cartridge-housing-1', 'product-cartridge-housing-2'],
    description: 'Our Industrial Cartridge Filter Housing is designed to provide efficient and reliable liquid filtration for various industrial applications. Manufactured using premium-grade stainless steel, the stainless steel cartridge filter housing ensures durability, corrosion resistance, and long service life.\n\nAs a trusted cartridge filter housing manufacturer in Ahmedabad, India, we supply high-performance filtration housing systems suitable for industrial and sanitary applications across India.',
    features: [
      'High-quality stainless steel cartridge filter housing',
      'Suitable for industrial and sanitary filter housing applications',
      'Strong and corrosion-resistant construction',
      'Easy cartridge installation and maintenance',
      'Designed for high pressure and flow performance',
      'Compatible with various stainless steel cartridge filters',
      'Long operational life with low maintenance'
    ],
    detailedSpecs: 'Our cartridge filter stainless steel housing systems are widely used in pharmaceuticals, chemicals, food & beverage, water treatment, and other industrial filtration processes. Designed for consistent performance, our industrial cartridge filter housing ensures effective particle removal and smooth system operation.',
    metaTitle: 'Industrial Cartridge Filter Housing Manufacturer & Supplier in Ahmedabad, India',
    metaDescription: 'Leading cartridge filter housing manufacturer in Ahmedabad, India. We supply stainless steel industrial and sanitary cartridge filter housing solutions.',
    metaKeywords: 'industrial cartridge filter housing, cartridge filter housing, cartridge filter housing manufacturer, cartridge filter housing supplier, stainless steel cartridge filter housing, stainless steel cartridge filter, sanitary filter housing, cartridge filter stainless steel',
    faqs: [
      { question: 'Can these housings handle sanitary applications?', answer: 'Yes, we offer electropolished finishes and tri-clover connections specifically for pharmaceutical and food-grade environments.' }
    ]
  }],
  'industrial-strainer-filter-housing-supplier': [{ 
    name: 'Strainer Filter Housing Manufacturer in Ahmedabad, India', 
    application: 'Pipeline protection and solid particle removal', 
    imageId: 'product-strainer-housing-1',
    imageIds: ['product-strainer-housing-1', 'product-strainer-housing-2', 'product-strainer-housing-3'],
    description: 'Our Strainer Filter Housing is designed to protect pumps, valves, and pipelines by effectively removing solid particles from liquids. Manufactured with durable materials and precision-engineered components, the strainer housing ensures reliable performance in industrial and water filtration systems.\n\nAs trusted strainer filter housing manufacturers in Ahmedabad, India, we supply high-quality water filter strainers, Y strainer filter mesh, and suction strainers for pump applications across various industries.',
    features: [
      'Heavy-duty strainer housing construction',
      'Available in multiple strainer micron size options',
      'Y strainer filter mesh variants available',
      'Suitable as strainer filter for water tank systems',
      'Effective suction strainer for pump protection',
      'Corrosion-resistant and durable design',
      'Easy maintenance and cleaning'
    ],
    detailedSpecs: 'Our strainer filter for pumps and water filtration systems is widely used in water treatment plants, chemical industries, agriculture, and industrial process lines. The water strainer mesh size can be customized according to filtration requirements, ensuring effective removal of debris and solid particles.\n\nRecognized among reliable strainer filter housing manufacturers in India, we focus on precision engineering, competitive pricing, and timely delivery across India.',
    metaTitle: 'Strainer Filter Housing Manufacturer & Supplier in Ahmedabad, India',
    metaDescription: 'Leading strainer filter housing manufacturer in Ahmedabad, India. We supply water filter strainers, Y strainer mesh and suction strainers for pumps.',
    metaKeywords: 'strainer filter housing, strainer housing, housing strainer, Strainer filter housing manufacturers, Strainer filter mesh size, Strainer Filter for Water Tank, Strainer Filter for pumps, Water Filter Strainer, pool pump strainer housing, y strainer filter mesh, water pump strainer, suction strainer for pump, strainer micron size, water strainer mesh size',
    faqs: [
      { question: 'What is the benefit of a quick-opening cover?', answer: 'It reduces downtime significantly during cleaning cycles, allowing for rapid basket removal.' }
    ]
  }],
  'vent-filter-housing-supplier': [{ 
    name: 'Vent Filter Housing Manufacturer in India', 
    application: 'Sterile air and gas filtration for storage tank venting', 
    imageId: 'product-vent-housing-1',
    imageIds: ['product-vent-housing-1', 'product-vent-housing-2', 'product-vent-housing-3', 'product-vent-housing-4'],
    description: 'Vviok Industry manufactures high-quality Vent Filter Housing designed to protect storage tanks and process systems from contamination. Built using premium stainless steel, our stainless steel vent filter housing ensures durability, corrosion resistance, and hygienic performance.\n\nAs a trusted vent filter housing manufacturer in Ahmedabad, we provide reliable solutions for pharmaceutical, chemical, and water system applications where controlled air filtration is essential.',
    features: [
      'High-grade stainless steel vent filter housing',
      'Suitable for pharmaceutical vent filter applications',
      'Available in 0.2 micron vent filter options',
      'Designed for effective air and gas filtration',
      'Corrosion-resistant and hygienic construction',
      'Easy installation and maintenance',
      'Custom sizes available as per requirement'
    ],
    detailedSpecs: 'Vviok Industry supplies vent filters for water systems, holding tanks, and industrial process equipment. Our vent filter housing ensures proper air exchange while preventing contamination, following the correct vent filter working principle for safe operation. These systems are widely used in pharmaceuticals, chemical processing, and sanitary applications including Sanigard holding tank vent filter setups.\n\nRecognized as a reliable filter manufacturer in Ahmedabad, Vviok Industry focuses on precision engineering, competitive pricing, and timely delivery across India.',
    metaTitle: 'Vent Filter Housing Manufacturer & Supplier in Ahmedabad, India',
    metaDescription: 'Vviok Industry is a leading vent filter housing manufacturer in Ahmedabad, India supplying stainless steel vent filters for pharmaceutical and water systems.',
    metaKeywords: 'Vent Filter Housing, duct filter housing, tank vent filter housing, stainless steel vent filter housing, Vent filter housing manufacturer, Vent filter pharmaceutical, Vent filter use, Vent Filter 0.2 Micron, Filter Cartridge manufacturers in ahmedabad, Filter manufacturer in Ahmedabad, Vent Filter in water system, vent filter working principle, 0.2 micron vent filter, sanigard holding tank vent filter',
    faqs: [
      { question: 'Why is ss 316l preferred for vent housings?', answer: 'Ss 316l offers superior corrosion resistance and is the standard for high-purity pharmaceutical applications.' }
    ]
  }],
  'duplex-filter-housing-supplier': [{ 
    name: 'Duplex Filter Housing Manufacturer in Ahmedabad, India', 
    application: 'Continuous filtration without process interruption', 
    imageId: 'product-duplex-housing-1',
    imageIds: ['product-duplex-housing-1', 'product-duplex-housing-2'],
    description: 'Vviok Industry manufactures high-performance Duplex Filter Housings designed for continuous filtration without process interruption. Engineered for durability and efficiency, our duplex filter housing systems allow one unit to operate while the other is under maintenance.\n\nAs a trusted duplex filter housing manufacturer in Ahmedabad, India, we supply robust filtration solutions including duplex oil filter housing and duplex bag filter housing for demanding industrial applications.',
    features: [
      'Heavy-duty duplex stainless steel construction',
      'Continuous filtration without shutdown',
      'Available as duplex bag filter housing',
      'Suitable for oil and liquid filtration systems',
      'Customizable duplex filter mesh size options',
      'Easy changeover mechanism',
      'Long service life and low maintenance'
    ],
    detailedSpecs: 'Vviok Industry designs duplex filter systems based on the efficient duplex filter working principle, ensuring uninterrupted flow and reliable performance. Our systems are widely used in oil filtration, chemical processing, water treatment, and industrial fluid handling applications.\n\nRecognized among dependable duplex filter manufacturers in India, we focus on precision engineering, competitive duplex filter housing price, and timely supply across India. We also manufacture duplex basket strainer systems tailored to specific industrial requirements.',
    metaTitle: 'Duplex Filter Housing Manufacturer & Supplier in Ahmedabad, India',
    metaDescription: 'Vviok Industry is a leading duplex filter housing manufacturer in Ahmedabad, India supplying duplex bag filter housing and duplex oil filter systems.',
    metaKeywords: 'Duplex Filter Housings, duplex bag filter, duplex filter assembly, duplex oil filter housing, duplex bag filter housing, duplex strainers manufacturers, hydac duplex filter assembly, Duplex filter working principle, Duplex filter housing price, Duplex filter mesh size, duplex filter manufacturers in india, duplex stainless steel suppliers in india, duplex basket strainer manufacturer in india',
    faqs: [
      { question: 'How does the switch-over mechanism work?', answer: 'A lever or gear-operated valve redirects the flow from the dirty housing to the clean housing instantly.' }
    ]
  }],
  'industrial-multi-bag-filter-housing': [{ 
    name: 'Multi Bag Filter Housing Manufacturer in Ahmedabad, India', 
    application: 'Large-scale high-volume liquid clarification for industrial processes', 
    imageId: 'product-multi-bag-1',
    description: 'Vviok Industry manufactures high-performance Multi Bag Filter Housing systems designed for high-flow and heavy-duty industrial filtration applications. Built using premium-grade stainless steel, our stainless steel multi bag filter housing ensures durability, corrosion resistance, and long operational life.\n\nAs a trusted multi bag filter housing manufacturer in Ahmedabad, India, we provide reliable and cost-effective filtration solutions suitable for large-scale liquid processing systems.',
    features: [
      'Heavy-duty stainless steel multi bag filter housing',
      'Designed for high flow rate applications',
      'Available in multiple bag capacity configurations',
      'Easy bag replacement and maintenance',
      'Strong sealing system to prevent leakage',
      'Corrosion-resistant industrial construction',
      'Long service life with low maintenance'
    ],
    detailedSpecs: 'Vviok Industry supplies industrial stainless steel bag filter housings that ensure efficient particle removal and consistent filtration performance. They are widely used in industries such as chemicals, pharmaceuticals, oil & gas, water treatment, food & beverage, and power generation.\n\nOur multi bag filter housing in India is engineered for durability and smooth operation, making it ideal for demanding industrial environments. Recognized among reliable multi bag filter housing manufacturers and suppliers in India, we focus on precision manufacturing, competitive pricing, and timely delivery across India.',
    metaTitle: 'Multi Bag Filter Housing Manufacturer & Supplier in Ahmedabad, India',
    metaDescription: 'Vviok Industry is a leading multi bag filter housing manufacturer in Ahmedabad, India supplying stainless steel industrial multi bag filtration systems.',
    metaKeywords: 'multi bag filter housing, multi bag filter housing manufacturer, multi bag filter housing supplier, multi bag filter housing in india, Duplex filter working principle, Duplex filter housing price, stainless steel multi bag filter housing, Industrial Stainless Steel Bag Filter Housings',
    faqs: [
      { question: 'What is a davit arm closure?', answer: 'It is a mechanical arm that helps lift and swing away the heavy lid of a multi-bag housing with minimal effort.' }
    ]
  }],
  'multi-cartridge-filter-housing': [{ 
    name: 'Multi Cartridge Filter Housing Manufacturer in Ahmedabad, India', 
    application: 'High-precision large-scale liquid filtration and clarification', 
    imageId: 'product-multi-cartridge-1',
    description: 'Vviok Industry manufactures high-quality Multi Cartridge Filter Housing systems designed for high-flow and precision liquid filtration applications. Built using premium stainless steel, our stainless steel multi cartridge filter housing ensures durability, corrosion resistance, and long operational life.\n\nAs a trusted multi cartridge housing manufacturer in Ahmedabad, India, we supply reliable and efficient filtration solutions suitable for industrial and sanitary applications.',
    features: [
      'Heavy-duty stainless steel multi cartridge housing',
      'Designed for high flow rate filtration systems',
      'Compatible with various stainless steel cartridge filters',
      'Suitable for sanitary cartridge filter housing applications',
      'Easy cartridge installation and maintenance',
      'Leak-proof sealing and durable construction',
      'Long service life with low maintenance'
    ],
    detailedSpecs: 'Vviok Industry supplies multi cartridge filter housing systems widely used in pharmaceuticals, chemicals, food & beverage, water treatment, and industrial processing plants. Our multi cartridge filter design allows simultaneous use of multiple cartridges, increasing filtration capacity and efficiency.\n\nRecognized among reliable cartridge filter housing manufacturers in India, we focus on precision engineering, competitive pricing, and timely supply across India.',
    metaTitle: 'Multi Cartridge Filter Housing Manufacturer & Supplier in Ahmedabad, India',
    metaDescription: 'Vviok Industry is a leading multi cartridge filter housing manufacturer in Ahmedabad, India supplying stainless steel sanitary and industrial cartridge housing systems.',
    metaKeywords: 'multi cartridge filter housing, multi cartridge, multi cartridge filter, stainless steel multi cartridge filter housing, cartridge filter housing, stainless steel cartridge filter, sanitary cartridge filter housing',
    faqs: [
      { question: 'Are these compatible with high-flow cartridges?', answer: 'Yes, our housings can be customized to fit specific high-flow cartridge formats.' }
    ]
  }],
  'basket-strainers': [{ 
    name: 'Basket Strainers', 
    application: 'Removing large particulates and debris from liquid process streams', 
    imageId: 'product-vent-filter-1',
    faqs: [
      { question: 'What is the standard mesh size for basket strainers?', answer: 'Standard mesh ranges from 20 to 400 mesh, but we can provide custom perforated screens for larger debris.' }
    ]
  }],
  'taper-basket-strainers': [{ 
    name: 'Taper Basket Strainers', 
    application: 'Efficient coarse filtration in high-flow pipelines with tapered design', 
    imageId: '/uploads/SS Basket.jpg',
    faqs: [
      { question: 'Why use a tapered design?', answer: 'A tapered design allows for better flow dynamics and easier retrieval of the basket from the housing in vertical installations.' }
    ]
  }],
  'conical-strainers': [{ 
    name: 'Conical Strainers', 
    application: 'Temporary or permanent protection for pumps, valves, and other equipment', 
    imageId: 'product-conical-strainer',
    faqs: [
      { question: 'When should i use a conical strainer?', answer: 'They are typically used during plant startup to capture welding slag or other construction debris.' }
    ]
  }],
  'pleated-strainers': [{ 
    name: 'Pleated Strainers', 
    application: 'Increased surface area for extended service life in critical filtration tasks', 
    imageId: 'product-pleated-strainer',
    faqs: [
      { question: 'What are the benefits of pleating a strainer?', answer: 'Pleating increases the surface area significantly, which lowers the initial pressure drop and increases the dirt holding capacity.' }
    ]
  }],
  'storage-tank': [{ 
    name: 'Storage Tank', 
    application: 'Industrial liquid storage and containment for chemical and process industries', 
    imageId: '/uploads/Storage Tank Manufacturer -Vviok industry.png',
    faqs: [
      { question: 'What is the maximum capacity you can manufacture?', answer: 'We can manufacture custom storage tanks up to 50,000 liters depending on site requirements.' }
    ]
  }],
  'pressure-vessel': [{ 
    name: 'Pressure vessel', 
    application: 'Safe processing and storage of liquids and gases under high pressure', 
    imageId: '/uploads/pressure tank.jpeg',
    faqs: [
      { question: 'Do your pressure vessels meet asme standards?', answer: 'Yes, we design and manufacture all pressure vessels according to asme section viii division 1 standards.' }
    ]
  }],
  'air-reciver-tank': [{ 
    name: 'Air reciver tank', 
    application: 'Compressed air storage and pressure stabilization for industrial systems', 
    imageId: '/uploads/Air receiver tank manufacturer supplier in india -vviok industry.jpeg',
    faqs: [
      { question: 'Why is an air receiver tank necessary?', answer: 'It acts as a reservoir to buffer pressure surges from the compressor and helps cool the air, allowing moisture to drop out.' }
    ]
  }],
  'purified-water-storage-tank': [{ 
    name: 'Purified water storage tank', 
    application: 'Sterile water storage for pharmaceutical and food processing', 
    imageId: 'product-purified-water-tank',
    faqs: [
      { question: 'What prevents contamination in purified water tanks?', answer: 'We use sanitary vents, sterile overflow systems, and high-grade ss 316l with electropolished surfaces to prevent bio-film buildup.' }
    ]
  }],
  'ss-pendants': [{ 
    name: 'SS pendants', 
    application: 'Sanitary support systems for industrial equipment and piping', 
    imageId: 'product-ss-pendants',
    faqs: [
      { question: 'Are these pendants suitable for cleanrooms?', answer: 'Yes, our ss pendants are designed for use in pharmaceutical cleanrooms where hygiene and ease of cleaning are mandatory.' }
    ]
  }],
};
