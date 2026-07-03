
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
    description: `We are a leading filter cartridge manufacturer in Ahmedabad, India, providing high-performance filtration solutions for various industrial applications. Our range includes premium quality filter cartridges, cartridge filter housing, and customized filtration systems designed for durability and efficiency. We specialize in producing micro-filtration components that meet the rigorous demands of pharmaceutical, chemical, and food processing industries. Our state-of-the-art facility utilizes advanced melt-blown and pleated technologies to ensure consistent quality across all product lines.`,
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
    description: `We are a leading filter housing manufacturer in Ahmedabad, India, offering high-quality and durable filtration housing solutions for various industrial applications. Our filter housing systems are designed to ensure efficient filtration performance, long service life, and easy maintenance. We provide a complete array of stainless steel housings including bag, cartridge, and high-flow configurations. Every unit is engineered to manage high pressure and flow rates while ensuring 100% bypass-free filtration, critical for maintaining system integrity in sensitive process environments.`,
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
    description: `We are a leading industrial strainer filter manufacturer in Ahmedabad, India, offering reliable and high-performance filtration solutions for various industrial applications. Our strainers are built to protect valuable downstream equipment by effectively removing coarse debris and unwanted solids from process pipelines. We offer a diverse selection including Y-strainers, basket strainers, and duplex units, all fabricated from industrial-grade stainless steel. Our engineering focus is on maximizing flow efficiency while minimizing pressure drops, ensuring your systems run smoothly and without interruption.`,
    metaTitle: 'Industrial Strainer Filter Manufacturer in Ahmedabad, India | Stainless Steel Strainer Supplier',
    metaDescription: 'Leading industrial strainer filter manufacturer in Ahmedabad, India. We supply stainless steel basket, conical, taper and pleated strainer filters across India.',
    metaKeywords: 'Industrial Strainer Filter, strainer filter manufacturer in india, strainer filter supplier in india, strainer filter manufacturer in ahmedabad, stainless steel filter, industrial filtration, Basket Strainers filter, Taper Basket Strainers, Conical Strainers filter, Pleated Strainers filter, stainless steel filter',
    imageId: 'product-industrial-filter',
    subcategories: [
      { name: 'Basket Strainers', slug: 'basket-strainer-manufacturer' },
      { name: 'Taper Basket Strainers', slug: 'taper-basket-strainer-manufacturer' },
      { name: 'Conical Strainers', slug: 'conical-strainer-manufacturer' },
      { name: 'Pleated Strainers', slug: 'pleated-strainer-manufacturer' },
    ]
  },
  {
    name: 'Vessels',
    slug: 'industrial-vessels-manufacturer',
    pageH1: 'Industrial Vessels Manufacturer & Supplier in Ahmedabad, India',
    description: `We are a leading industrial vessels manufacturer in Ahmedabad, India, offering high-quality and durable stainless steel vessel solutions for various industrial applications. Our vessels are designed for storage, mixing, and pressure containment across a wide range of industries. From ASME-compliant pressure vessels to specialized pharmaceutical mixing tanks, we provide engineering excellence in every weld. Our fabrication process emphasizes hygiene, durability, and precise control over technical parameters, ensuring that each vessel meets the exacting standards required for critical industrial processes.`,
    metaTitle: 'Industrial Vessels Manufacturer in Ahmedabad, India | Stainless Steel Pressure Vessel Supplier',
    metaDescription: 'Leading industrial vessels manufacturer in Ahmedabad, India. We supply stainless steel pressure vessels, mixing tanks, fermentation tanks and water storage tanks across India.',
    metaKeywords: 'industrial vessels manufacturer, pressure vessels manufacturers, steel vessels, stainless steel vessel, stainless water storage tank, stainless steel mixing tanks, stainless steel pressure vessel, chemical mixing tank with agitator, stainless steel fermentation tanks, stainless steel mixing tank with agitator',
    imageId: 'product-custom-filter',
    subcategories: [
      { name: 'Storage Tank', slug: 'storage-tank-supplier' },
      { name: 'Pressure vessel', slug: 'pressure-vessel-supplier-india' },
      { name: 'Air receiver tank', slug: 'air-receiver-tank-supplier-india' },
      { name: 'Purified water storage tank', slug: 'purified-water-storage-tank' },
      { name: 'SS pendants', slug: 'ss-pendants' },
    ]
  }
];

export const industries = [
  {
    name: 'Water Treatment',
    description: 'Providing advanced filtration for industrial and municipal water systems, focusing on efficiency and purity.',
    icon: Droplets,
  },
  {
    name: 'Chemical',
    description: 'Specialized solutions for aggressive chemical and solvent processing, ensuring safety and compliance.',
    icon: FlaskConical,
  },
  {
    name: 'Pharmaceutical',
    description: 'Sanitary filtration for sterile air and high-purity process fluids in strictly regulated environments.',
    icon: HeartPulse,
  },
  {
    name: 'Food & Beverage',
    description: 'Compliance-driven filtration for liquid processing and bottling, meeting international hygiene standards.',
    icon: Grape,
  },
  {
    name: 'Oil & Gas',
    description: 'Heavy-duty strainers and housings for refinery and pipeline protection against harsh contaminants.',
    icon: Fuel,
  },
  {
    name: 'Manufacturing',
    description: 'General industrial filtration to protect equipment and optimize performance across diverse manufacturing sectors.',
    icon: Building,
  },
];

export const whyChooseUs = [
  {
    title: 'Expert Engineering',
    description: 'Our team brings over 20 years of specialized experience in industrial filtration, ensuring that every product is designed with technical precision and deep industry knowledge.',
    icon: Settings,
  },
  {
    title: 'Global Export',
    description: 'We maintain a reliable supply chain delivering products to over 15 countries worldwide, handling all logistics and documentation for a seamless international experience.',
    icon: Globe,
  },
  {
    title: 'Quality Standards',
    description: 'All products adhere to strict ASME and ISO quality management protocols. We conduct rigorous in-house testing to guarantee that every unit meets high-performance benchmarks.',
    icon: CheckCircle,
  },
  {
    title: 'Custom Solutions',
    description: 'Tailor-made filtration systems designed to your exact technical parameters. We collaborate closely with clients to develop bespoke solutions for unique industrial challenges.',
    icon: Lightbulb,
  },
  {
    title: 'Reliable Delivery',
    description: 'Committed to on-time shipping and robust packaging for safe transit. We understand the importance of project timelines and ensure your equipment arrives when you need it.',
    icon: Package,
  },
  {
    title: 'Award Winning',
    description: 'Recognized for innovation and excellence in industrial manufacturing, our commitment to pioneering new technologies has earned us high accolades across the sector.',
    icon: Award,
  }
];

export const products: Record<string, ProductDetail[]> = {
  'pp-spun-filter-cartridge-supplier': [{ 
    name: 'PP Spun Filter Cartridge Manufacturer & Supplier in India', 
    application: 'Sediment and particulate removal, pre-filtration for RO systems', 
    imageId: '/uploads/PP Spun Filter Cartridge Manufacturer in Ahmedabad.png',
    imageIds: ['/uploads/PP Spun Filter Cartridge Manufacturer in Ahmedabad.png'],
    description: `Our PP Spun Filter Cartridge is manufactured using 100% high-grade polypropylene to deliver superior depth filtration and long service life. Designed for effective sediment and particulate removal, these spun polypropylene filter cartridges provide high dirt-holding capacity with low pressure drop. As a trusted PP spun filter cartridge manufacturer in Ahmedabad, India, we supply reliable and cost-effective filtration solutions suitable for industrial and commercial water treatment applications.

The melt-blown manufacturing process ensures a multi-layered structure that captures particles of various sizes throughout the depth of the cartridge. This results in a filter that doesn't just block surface contaminants but uses the entire filter body for particle retention, significantly extending the replacement intervals and protecting sensitive downstream equipment.`,
    detailedSpecs: `Our PP spun cartridge filter is widely used in water treatment plants, chemical industries, pharmaceuticals, food & beverage processing, and RO pre-filtration systems. Manufactured under strict quality standards, our spun polypropylene filter cartridges ensure consistent performance, durability, and competitive pricing across India.

The technical specifications include a high void volume which leads to lower initial pressure drops. The graded density construction means that the outer layers capture larger particles while the inner core captures the smaller ones, preventing premature clogging. We offer standard lengths of 10", 20", 30", and 40" with various diameters to fit all industrial filter housings. The thermally bonded microfibers ensure no fiber migration into the filtered fluid, maintaining high purity standards.`,
    metaTitle: 'PP Spun Filter Cartridge Manufacturer India | Polypropylene Filter Supplier',
    metaDescription: 'Trusted filter cartridge manufacturer and supplier in Ahmedabad, India offering high-quality spun polypropylene filter cartridges at competitive prices.',
    metaKeywords: 'pp spun filter cartridge, spun polypropylene filter cartridge, pp spun cartridge filter, pp spun filter manufacturers, pp spun filter cartridge 5 micron, spun polypropylene filter, pp spun filter cartridge price, polypropylene spun filter, pp spun cartridge',
    features: [
      '100% Polypropylene construction for wide chemical compatibility',
      'Multi-layer depth filtration structure for maximum efficiency',
      'High dirt holding capacity and low pressure drop for energy savings',
      'No surfactants, binders, or adhesives used in the bonding process',
      'Food grade materials (FDA compliant) for safe beverage processing',
      'Excellent removal of sand, silt, dirt, and rust particles'
    ],
    faqs: [
      { question: 'What is the lifespan of a PP Spun filter cartridge?', answer: 'The lifespan typically ranges from 3 to 6 months depending on the water quality and usage volume. In high-turbidity applications, pre-filtration may be needed to extend this life.' },
      { question: 'Are these cartridges compatible with standard housings?', answer: 'Yes, our PP Spun cartridges are designed to fit most standard industrial and domestic filter housings including DOE and SOE configurations.' },
      { question: 'Can these filters be cleaned and reused?', answer: 'PP Spun filters are depth filters designed for single use to ensure maximum hygiene and filtration efficiency; they cannot be backwashed or cleaned effectively.' },
      { question: 'What micron ratings are available for PP Spun filters?', answer: 'We manufacture them in 0.5, 1, 5, 10, 25, 50, and 100 micron ratings to suit different filtration needs and precision levels.' },
      { question: 'Are these filters chemical resistant?', answer: 'Yes, being made of 100% polypropylene, they offer excellent resistance to most acids, bases, and organic solvents, making them versatile for chemical processing.' }
    ]
  }],
  'pp-pleated-filter-cartridge-supplier': [{ 
    name: 'PP Pleated Filter Cartridge Manufacturer in Ahmedabad, India', 
    application: 'High clarity liquid filtration, chemical and solvent processing', 
    imageId: 'product-pp-pleated-1',
    imageIds: ['product-pp-pleated-1', 'product-pp-pleated-2'],
    description: `Our PP Pleated Filter Cartridge is manufactured using high-quality polypropylene filter media to deliver superior surface filtration efficiency and extended service life. The pleated design provides a larger filtration area, ensuring high flow rates with low pressure drop. As a trusted pleated filter cartridge manufacturer in Ahmedabad, India, we supply durable and high-performance pleated polypropylene filter cartridges suitable for demanding industrial filtration applications across India.

These cartridges are ideal for processes where high precision and high flow rates are simultaneously required. The pleated structure significantly increases the effective filtration area compared to standard cylindrical filters, which means fewer filter changes and less downtime for your operations.`,
    detailedSpecs: `Our pleated polypropylene filter cartridges are widely used in water treatment plants, pharmaceuticals, chemicals, food & beverage processing, and dust collector systems. The advanced pleated filter cartridge design ensures better particle retention and longer operational life compared to standard depth filters.

We utilize a fixed pore structure which ensures that particles are not released even under fluctuating pressure conditions. The cartridges are constructed using thermal welding techniques, eliminating the need for adhesives and ensuring maximum chemical compatibility. They are available in absolute and nominal ratings, allowing for precise control over the filtration quality. The robust core and outer cage provide high mechanical strength, allowing the filter to withstand significant differential pressures.`,
    metaTitle: 'PP Pleated Filter Cartridge Manufacturer & Supplier in Ahmedabad, India',
    metaDescription: 'Leading PP pleated filter cartridge manufacturer in Ahmedabad, India. We supply high-quality pleated polypropylene filter cartridges for industrial filtration applications.',
    metaKeywords: 'pp pleated filter cartridge, pleated polypropylene filter cartridges, polypropylene filter media, pleated filter cartridge manufacturer, 5 micron pp filter, Cartridge filter manufacturers in India, Pleated filter cartridge dust collector, filter cartridge manufacturers in ahmedabad, micron cartridge filter manufacturers in india, pleated dust collection cartridges',
    features: [
      'High surface area for high flow rates and long operational life',
      'Absolute and Nominal micron ratings available for precise control',
      'All-polypropylene construction for superior chemical resistance',
      'Fixed pore structure prevents unloading of contaminants',
      'Low pressure drop ensures energy-efficient system operation',
      'FDA compliant materials for food and beverage use'
    ],
    faqs: [
      { question: 'What is the difference between nominal and absolute ratings?', answer: 'Absolute ratings guarantee the removal of particles at the specified size with 99.9% efficiency, whereas nominal ratings represent a general efficiency level usually around 90-95%.' },
      { question: 'Are these filters suitable for chemical processing?', answer: 'Yes, the all-polypropylene construction provides excellent resistance to a wide range of chemicals, including acids and bases.' },
      { question: 'How much more surface area does a pleated filter have?', answer: 'A pleated filter can have 5 to 10 times more surface area than a standard spun cartridge of the same size, depending on pleat depth.' },
      { question: 'Can these cartridges be steam sterilized?', answer: 'Yes, we offer specific high-temperature versions that can withstand autoclave or steam-in-place (SIP) sterilization cycles for pharmaceutical use.' },
      { question: 'What end-cap configurations do you provide?', answer: 'We provide various end-caps including DOE (Double Open End), Code 7, Code 3, and Code 8 (222/226 O-rings) to fit all housing types.' }
    ]
  }],
  'ptfe-pleated-filter-cartridge-supplier': [{ 
    name: 'PTFE Pleated Filter Cartridge Manufacturer in Ahmedabad, India', 
    application: 'Aggressive chemicals, solvents, and sterile air filtration', 
    imageId: 'product-ptfe-pleated-1',
    imageIds: ['product-ptfe-pleated-1', 'product-ptfe-pleated-2'],
    description: `Our PTFE Pleated Filter Cartridge is manufactured using advanced PTFE membrane filter media to deliver superior chemical resistance and high-efficiency filtration performance. Designed with a precision pleated structure, it provides a large filtration surface area, ensuring high flow rates with low pressure drop. As a trusted PTFE pleated filter cartridge manufacturer in Ahmedabad, India, we supply reliable and durable filtration solutions suitable for critical industrial and dust collector applications.

These filters are the gold standard for aggressive chemical environments and sterile air applications. The hydrophobic nature of the PTFE membrane makes it an excellent choice for venting applications where water ingress must be prevented while allowing free air flow.`,
    detailedSpecs: `Our PTFE filter cartridge, also known as a Teflon cartridge filter, is widely used in pharmaceuticals, chemicals, food processing, electronics, and industrial dust collector systems. The advanced PTFE membrane ensures precise particle retention and reliable performance in demanding environments.

The technical design features a high-purity PTFE membrane supported by polypropylene or polyester layers. This combination provides both high filtration efficiency and mechanical robustness. Each cartridge is integrity tested during manufacturing to ensure it meets the required microbial or particulate retention standards. They are particularly effective for solvent filtration, tank venting, and sterile gas supply for bioreactors. We offer various micron ratings from 0.05 to 5 microns, ensuring a solution for even the most sensitive processes.`,
    metaTitle: 'PTFE Pleated Filter Cartridge Manufacturer & Supplier in Ahmedabad, India',
    metaDescription: 'Leading PTFE pleated filter cartridge manufacturer in Ahmedabad, India. We supply high-performance PTFE membrane filter cartridges for industrial filtration and dust collector applications.',
    metaKeywords: 'ptfe pleated filter cartridge, Ptfe pleated filter cartridge price, PTFE Filter Cartridge, ptfe membrane filter cartridge, teflon cartridge filter, Pleated filter cartridge dust collector, Cartridge filter manufacturers in India, filter cartridge manufacturers in india',
    features: [
      'High-performance PTFE membrane filter cartridge for absolute filtration',
      'Excellent chemical and temperature resistance for harsh environments',
      'Large filtration area due to precision pleated design',
      'Low pressure drop and high flow efficiency for system optimization',
      'Naturally hydrophobic for sterile air and gas filtration',
      'Strong mechanical strength and long service life',
      'Available in multiple absolute micron ratings'
    ],
    faqs: [
      { question: 'Can PTFE filters handle sterile air filtration?', answer: 'Yes, their naturally hydrophobic nature makes them excellent for sterile air and gas venting applications, preventing moisture blockage.' },
      { question: 'What chemicals are these filters resistant to?', answer: 'They are resistant to almost all strong acids, bases, and organic solvents, except for molten alkali metals and fluorine.' },
      { question: 'What is the maximum operating temperature for PTFE cartridges?', answer: 'They can typically operate at temperatures up to 150°C (300°F) in continuous service, depending on the support material.' },
      { question: 'Are these filters hydrophobic or hydrophilic?', answer: 'Standard PTFE is naturally hydrophobic, but we can provide specially treated hydrophilic versions for aqueous liquid filtration.' },
      { question: 'What are the main applications in pharmaceuticals?', answer: 'They are primarily used for sterile tank venting, compressed air filtration, solvent clarification, and sterile fermentation gas supply.' }
    ]
  }],
  'ss-wire-mesh-cartridge': [{ 
    name: 'SS Wire Mesh Cartridge Manufacturer in Ahmedabad, India', 
    application: 'High temperature and high pressure liquid filtration in industrial pipelines', 
    imageId: 'product-ss-wire-mesh-1',
    imageIds: ['product-ss-wire-mesh-1', 'product-ss-wire-mesh-2'],
    description: `Our SS Wire Mesh Cartridge is manufactured using high-quality stainless steel filter mesh to provide durable and reusable filtration solutions for industrial applications. Designed for high strength and corrosion resistance, the stainless steel mesh filter cartridge ensures reliable performance under high pressure and temperature conditions. As a trusted SS wire mesh cartridge manufacturer in Ahmedabad, India, we supply precision-engineered filtration products suitable for liquid and process filtration systems.

These cartridges are perfect for applications where disposable filters fail due to heat or aggressive chemicals. The all-metal construction allows for easy cleaning and multiple reuses, making it an eco-friendly and cost-effective solution for long-term industrial use.`,
    detailedSpecs: `Our stainless steel mesh filter cartridge is widely used in chemical processing, pharmaceuticals, food & beverage, oil & gas, and water treatment industries. The SS wire mesh cartridge provides consistent filtration accuracy and durability in demanding environments.

The technical specifications include various weave types such as plain, dutch, and twill to achieve specific filtration goals. The cartridges are constructed by welding the mesh to a central core and end caps, ensuring a bypass-free seal. We offer grades SS 304, 316, and 316L. The pore size can be customized from coarse (1000 micron) to very fine (5 micron). The rigid construction allows it to be used in high-pressure pipelines where standard cartridges would collapse. Reusability is a key feature; these can be cleaned via backwashing or ultrasonic methods.`,
    metaTitle: 'SS Wire Mesh Cartridge Manufacturer & Supplier in Ahmedabad, India',
    metaDescription: 'Leading SS wire mesh cartridge manufacturer in Ahmedabad, India. We supply stainless steel mesh filter cartridges in 5 micron, 100 micron and custom sizes.',
    metaKeywords: 'ss wire mesh cartridge, stainless steel filter mesh, stainless steel mesh filter cartridge, 5 micron stainless steel mesh Filter, 100 micron stainless steel Mesh filter, Ss wire mesh cartridge manufacturer, SS wire Mesh filter, wire mesh filter cartridge, 400 micron stainless steel mesh',
    features: [
      'Premium-grade stainless steel filter mesh construction (304/316/316L)',
      'Available in 5 micron stainless steel mesh filter options for precision',
      '100 micron stainless steel mesh filter variants for coarse filtration',
      'High temperature and pressure resistance for heavy industrial use',
      'Reusable and easy to clean design reduces waste',
      'Strong mechanical strength prevents media migration',
      'Suitable for industrial and process filtration in harsh environments'
    ],
    faqs: [
      { question: 'How do I clean an SS wire mesh cartridge?', answer: 'These can be cleaned using backwashing, ultrasonic cleaning, or chemical cleaning depending on the type of contaminant.' },
      { question: 'What is the maximum operating temperature?', answer: 'Our all-metal SS cartridges can withstand temperatures up to 300°C, limited only by the connection type or gasket.' },
      { question: 'What grades of stainless steel do you use?', answer: 'We primarily use SS 304, SS 316, and SS 316L for maximum corrosion resistance and durability.' },
      { question: 'Can these cartridges be used for steam filtration?', answer: 'Yes, their high-temperature and high-pressure resistance makes them ideal for filtering industrial culinary steam.' },
      { question: 'Do you offer pleated wire mesh cartridges?', answer: 'Yes, we manufacture pleated versions to provide a larger surface area, reducing pressure drop and extending service intervals.' }
    ]
  }],
  'ss-sintered-powder-cartridge': [{ 
    name: 'SS Sintered Powder Cartridge Manufacturer in Ahmedabad, India', 
    application: 'Fine filtration for steam, polymers, and aggressive process fluids', 
    imageId: 'product-ss-sintered-1',
    imageIds: ['product-ss-sintered-1', 'product-ss-sintered-2', 'product-ss-sintered-3'],
    description: `Our SS Sintered Powder Cartridge is manufactured using high-grade stainless steel powder through advanced sintering technology to ensure precise and uniform filtration. Designed for high strength and durability, the sintered powder filter cartridge provides excellent resistance to pressure, temperature, and corrosion. As a trusted SS sintered powder cartridge manufacturer in Ahmedabad, India, we supply reliable and long-lasting filtration solutions suitable for demanding industrial applications.

The sintering process creates a rigid, porous structure that is exceptionally strong and stable. Unlike wire mesh, sintered powder filters offer depth filtration within a metallic body, allowing for very fine particulate capture without the risk of media migration or channeling.`,
    detailedSpecs: `Our sintered SS filter cartridges are widely used in chemical processing, pharmaceuticals, oil & gas, food processing, and water treatment industries. The SS sintered filter cartridge offers consistent filtration accuracy and mechanical strength in harsh operating conditions.

Technically, these filters are produced by fusing stainless steel particles together under heat and pressure. The result is a filter with a highly uniform pore size distribution. They are particularly suitable for filtering hot gases, corrosive liquids, and viscous fluids like polymers. We offer them in various micron ratings from 0.5 to 100. The cartridges are fully welded and can be cleaned and reused, providing a long-term filtration solution for critical processes where reliability is paramount. Their high dirt-holding capacity and resistance to thermal shock make them versatile for many industrial tasks.`,
    metaTitle: 'SS Sintered Powder Cartridge Manufacturer & Supplier in Ahmedabad, India',
    metaDescription: 'Leading SS sintered powder cartridge manufacturer in Ahmedabad, India. We supply durable sintered stainless steel filter cartridges for industrial filtration applications.',
    metaKeywords: 'ss sintered powder cartridge, sintered powder filter cartridge, stainless steel sintered powder filter cartridges, Sintered Filter manufacturer in India, Ss sintered powder cartridge sizes, sintered ss filter cartridges, ss sintered filter cartridge',
    features: [
      'High-quality sintered stainless steel construction for extreme durability',
      'Uniform pore structure for precise and consistent filtration accuracy',
      'Excellent pressure and temperature resistance for demanding processes',
      'Corrosion-resistant design suitable for aggressive fluids',
      'Reusable and easy to clean, offering high long-term value',
      'Suitable for high-performance industrial gas and liquid filtration',
      'Long operational service life compared to traditional media'
    ],
    faqs: [
      { question: 'What exactly is sintering?', answer: 'Sintering is the process of fusing metallic particles together using heat and pressure to form a solid, porous mass without melting the metal.' },
      { question: 'Are these suitable for high-pressure gas filtration?', answer: 'Yes, they are specifically engineered for high-pressure environments and critical gas filtration in chemical plants.' },
      { question: 'What is the filtration accuracy available?', answer: 'They offer very high precision, typically ranging from a fine 0.5 micron to a coarser 100 microns.' },
      { question: 'Can these be used for polymer filtration?', answer: 'Yes, their high mechanical strength and pressure resistance make them ideal for viscous polymer melt filtration.' },
      { question: 'How do you clean these sintered cartridges?', answer: 'Cleaning can be done via ultrasonic baths, high-temperature furnace cleaning (to burn off organics), or chemical solvents.' }
    ]
  }],
  'bag-filter-housing': [{ 
    name: 'Industrial Bag Filter Housing Manufacturer in Ahmedabad, India', 
    application: 'Industrial liquid filtration and water treatment systems', 
    imageId: 'product-bag-housing-1',
    description: `Our Industrial Bag Filter Housing is designed for efficient liquid filtration in demanding industrial environments. Manufactured using high-grade stainless steel, the stainless steel bag filter housing ensures durability, corrosion resistance, and long service life. As a trusted industrial bag filter housing manufacturer in Ahmedabad, India, we supply reliable filtration systems including single bag filter housing, 2 bag filter, and 4 bag filter housing suitable for water and process filtration applications.

These housings are the preferred choice for applications requiring high flow rates and high dirt-loading capacity. The bag filter design allows for quick changes and simple maintenance, making it perfect for industries like paints, inks, and general water treatment.`,
    detailedSpecs: `Our industrial bag filter systems are widely used in water treatment, chemicals, pharmaceuticals, food & beverage, and other industrial filtration applications. The stainless bag filter housing is engineered to provide consistent filtration performance and easy operation in high-flow environments.

Technically, the housing features a heavy-duty internal support basket to prevent bag rupture under pressure. The lid is secured with either eye-bolts or a V-clamp closure for rapid access. We offer both top-entry and side-entry designs. Top-entry ensures a 360-degree seal for absolute filtration, while side-entry is more economical. The housings are available in SS 304, 316, and 316L, and are polished to a high finish to prevent bacterial growth in sanitary applications. The volume and flow rate can be scaled by using multi-bag configurations, handling thousands of liters per hour.`,
    metaTitle: 'Industrial Bag Filter Housing Manufacturer & Supplier in Ahmedabad, India',
    metaDescription: 'Leading industrial bag filter housing manufacturer in Ahmedabad, India. We supply stainless steel single, 2 bag and 4 bag filter housing for water and industrial filtration.',
    metaKeywords: 'bag filter housing, stainless steel bag filter housing, bag filter housing manufacturer, industrial bag filter, single bag filter housing, 2 bag filter, 4 bag filter, 4 bag filter housing, single bag filter housing, size 2 bag filter housing, water bag filter housing, industrial bag filter housing, stainless bag filter housing, bag filter housing supplier',
    features: [
      'Heavy-duty stainless steel bag filter housing for industrial durability',
      'Available in single bag, 2 bag, and multi-bag configurations',
      'Standard Size 2 bag filter housing options always in stock',
      'High flow rate with low initial pressure drop for efficiency',
      'Easy bag replacement mechanism for minimal downtime',
      'Suitable for both industrial and water bag filter housing tasks',
      'Corrosion-resistant and long-lasting construction (SS 304/316)'
    ],
    faqs: [
      { question: 'What materials are available for bag filter housings?', answer: 'We primarily manufacture them in SS 304, SS 316, and SS 316L. Carbon steel with protective coatings is also available for non-critical tasks.' },
      { question: 'How do I choose the right size?', answer: 'Size selection depends on your required flow rate, fluid viscosity, and the expected volume of contaminants.' },
      { question: 'What is the difference between top-entry and side-entry?', answer: 'Top-entry provides a complete seal for absolute filtration, while side-entry is easier to manufacture and more cost-effective.' },
      { question: 'Do you provide quick-opening bolt covers?', answer: 'Yes, we offer eye-bolt closures for fast bag changeover without needing special tools or losing time.' },
      { question: 'Can these housings handle high temperatures?', answer: 'Yes, with appropriate high-temp gaskets like Viton, they can operate at elevated industrial temperatures up to 200°C.' }
    ]
  }],
  'catridge-filter-housing-supplier': [{ 
    name: 'Industrial Cartridge Filter Housing Manufacturer in Ahmedabad, India', 
    application: 'Industrial and sanitary liquid filtration applications', 
    imageId: 'product-cartridge-housing-1',
    imageIds: ['product-cartridge-housing-1', 'product-cartridge-housing-2'],
    description: `Our Industrial Cartridge Filter Housing is designed to provide efficient and reliable liquid filtration for various industrial applications. Manufactured using premium-grade stainless steel, the stainless steel cartridge filter housing ensures durability, corrosion resistance, and long service life. As a trusted cartridge filter housing manufacturer in Ahmedabad, India, we supply high-performance filtration housing systems suitable for industrial and sanitary applications across India.

These housings are engineered to accommodate multiple cartridges, providing a versatile solution for fine filtration. Whether you need a single-round housing for a pilot plant or a multi-round unit for a large-scale refinery, our housings deliver consistent, leak-proof performance.`,
    detailedSpecs: `Our cartridge filter stainless steel housing systems are widely used in pharmaceuticals, chemicals, food & beverage, water treatment, and other industrial filtration processes. Designed for consistent performance, our industrial cartridge filter housing ensures effective particle removal and smooth system operation.

Technically, the housing includes internal support plates to hold the cartridges securely in place. We offer various end-cap connection styles including DOE, Code 7 (226), and Code 3 (222). The surfaces are typically polished to 0.4 Ra for pharmaceutical use. Every unit is pressure tested to ensure safety and integrity. The housings feature vent and drain ports for easy venting of air and drainage of fluid during cartridge changes. We can also provide custom designs with heating jackets or specialized materials for extreme conditions.`,
    metaTitle: 'Industrial Cartridge Filter Housing Manufacturer & Supplier in Ahmedabad, India',
    metaDescription: 'Leading cartridge filter housing manufacturer in Ahmedabad, India. We supply stainless steel industrial and sanitary cartridge filter housing solutions.',
    metaKeywords: 'industrial cartridge filter housing, cartridge filter housing, cartridge filter housing manufacturer, cartridge filter housing supplier, stainless steel cartridge filter housing, stainless steel cartridge filter, sanitary filter housing, cartridge filter stainless steel',
    features: [
      'High-quality stainless steel cartridge filter housing (304/316)',
      'Suitable for both industrial and high-purity sanitary filter housing tasks',
      'Strong and corrosion-resistant construction for years of service',
      'Easy cartridge installation and maintenance with swing-bolt lids',
      'Designed for high pressure and flow performance without bypass',
      'Compatible with various stainless steel and polymeric cartridge filters',
      'Long operational life with very low maintenance requirements'
    ],
    faqs: [
      { question: 'Can these housings handle sanitary applications?', answer: 'Yes, we offer electropolished finishes and tri-clover connections specifically for pharmaceutical and food-grade environments.' },
      { question: 'How many cartridges can a multi-round housing hold?', answer: 'We manufacture housings that can hold from 1 up to 100+ cartridges depending on the total flow requirement.' },
      { question: 'What is the standard pressure rating?', answer: 'Our standard industrial housings are rated for 150 PSI (10 bar), but we can custom design for much higher pressures.' },
      { question: 'Do you provide heating jackets for the housings?', answer: 'Yes, we can provide steam or electric heating jackets for applications involving viscous fluids that need to stay warm.' },
      { question: 'What types of connections are available?', answer: 'We provide NPT/BSP threads, ANSI/DIN flanges, and sanitary TC (Tri-Clamp) connections for all industry types.' }
    ]
  }],
  'industrial-strainer-filter-housing-supplier': [{ 
    name: 'Strainer Filter Housing Manufacturer in Ahmedabad, India', 
    application: 'Pipeline protection and solid particle removal', 
    imageId: 'product-strainer-housing-1',
    imageIds: ['product-strainer-housing-1', 'product-strainer-housing-2', 'product-strainer-housing-3'],
    description: `Our Strainer Filter Housing is designed to protect pumps, valves, and pipelines by effectively removing solid particles from liquids. Manufactured with durable materials and precision-engineered components, the strainer housing ensures reliable performance in industrial and water filtration systems. As trusted strainer filter housing manufacturers in Ahmedabad, India, we supply high-quality water filter strainers, Y strainer filter mesh, and suction strainers for pump applications across various industries.

A strainer is the first line of defense in any fluid system. By capturing large debris, it prevents costly damage to expensive downstream equipment, significantly reducing maintenance costs and downtime for your plant.`,
    detailedSpecs: `Our strainer filter for pumps and water filtration systems is widely used in water treatment plants, chemical industries, agriculture, and industrial process lines. The water strainer mesh size can be customized according to filtration requirements, ensuring effective removal of debris and solid particles.

Technically, our housings are designed for minimal pressure loss. The internal basket is made of heavy-duty perforated stainless steel, which can be lined with fine mesh if needed. We offer Y-type, T-type, and basket-type strainers. The basket design allows for easy removal and cleaning without disturbing the pipeline. We use high-quality casting or fabrication depending on the size and pressure requirements. All strainers are hydro-tested and can be provided with differential pressure gauges to indicate when cleaning is needed.`,
    metaTitle: 'Strainer Filter Housing Manufacturer & Supplier in Ahmedabad, India',
    metaDescription: 'Leading strainer filter housing manufacturer in Ahmedabad, India. We supply water filter strainers, Y strainer mesh and suction strainers for pumps.',
    metaKeywords: 'strainer filter housing, strainer housing, housing strainer, Strainer filter housing manufacturers, Strainer filter mesh size, Strainer Filter for Water Tank, Strainer Filter for pumps, Water Filter Strainer, pool pump strainer housing, y strainer filter mesh, water pump strainer, suction strainer for pump, strainer micron size, water strainer mesh size',
    features: [
      'Heavy-duty strainer housing construction for maximum protection',
      'Available in multiple strainer micron sizes for custom filtration',
      'Y strainer and Basket strainer filter mesh variants available',
      'Suitable as a robust strainer filter for large water tank systems',
      'Effective suction strainer for pump protection in irrigation and industry',
      'Corrosion-resistant and durable design for all-weather use',
      'Easy maintenance and cleaning with quick-access covers'
    ],
    faqs: [
      { question: 'What is the benefit of a quick-opening cover?', answer: 'It reduces downtime significantly during cleaning cycles, allowing for rapid basket removal without tools.' },
      { question: 'What is the difference between a Y-strainer and a Basket Strainer?', answer: 'Y-strainers are for smaller debris and high pressure, while basket strainers have more dirt-holding capacity and easier access.' },
      { question: 'Can you provide custom mesh sizes for the strainer?', answer: 'Yes, we can provide anything from coarse 20 mesh to very fine 400 mesh linings to suit your debris type.' },
      { question: 'Is it possible to monitor the pressure drop?', answer: 'Yes, we can provide differential pressure gauge ports to alert operators when cleaning is required.' },
      { question: 'What materials do you use for gaskets?', answer: 'We offer EPDM, Nitrile, Viton, and PTFE depending on the chemical and temperature requirements.' }
    ]
  }],
  'vent-filter-housing-supplier': [{ 
    name: 'Vent Filter Housing Manufacturer in India', 
    application: 'Sterile air and gas filtration for storage tank venting', 
    imageId: 'product-vent-housing-1',
    imageIds: ['product-vent-housing-1', 'product-vent-housing-2', 'product-vent-housing-3', 'product-vent-housing-4'],
    description: `Vviok Industry manufactures high-quality Vent Filter Housing designed to protect storage tanks and process systems from contamination. Built using premium stainless steel, our stainless steel vent filter housing ensures durability, corrosion resistance, and hygienic performance. As a trusted vent filter housing manufacturer in Ahmedabad, we provide reliable solutions for pharmaceutical, chemical, and water system applications where controlled air filtration is essential.

Vent filters are critical for maintaining the purity of stored liquids. They allow air to flow in and out of the tank as it is filled or emptied, while ensuring that no bacteria, dust, or contaminants enter the sterile environment.`,
    detailedSpecs: `Vviok Industry supplies vent filters for water systems, holding tanks, and industrial process equipment. Our vent filter housing ensures proper air exchange while preventing contamination, following the correct vent filter working principle for safe operation. These systems are widely used in pharmaceuticals, chemical processing, and sanitary applications including Sanigard holding tank vent filter setups.

The technical design includes a highly polished interior to prevent bacterial colonization. The housing typically holds a hydrophobic PTFE membrane cartridge that blocks water while letting air pass freely. We offer various connection types, including Tri-clamp for sanitary use and flanged for industrial tanks. The housings are designed to withstand vacuum and overpressure conditions that occur during rapid tank filling or emptying. Our 0.2 micron absolute vent filters are the industry standard for sterile water and pharmaceutical ingredient storage.`,
    metaTitle: 'Vent Filter Housing Manufacturer & Supplier in Ahmedabad, India',
    metaDescription: 'Vviok Industry is a leading vent filter housing manufacturer in Ahmedabad, India supplying stainless steel vent filters for pharmaceutical and water systems.',
    metaKeywords: 'Vent Filter Housing, duct filter housing, tank vent filter housing, stainless steel vent filter housing, Vent filter housing manufacturer, Vent filter pharmaceutical, Vent filter use, Vent Filter 0.2 Micron, Filter Cartridge manufacturers in ahmedabad, Filter manufacturer in Ahmedabad, Vent Filter in water system, vent filter working principle, 0.2 micron vent filter, sanigard holding tank vent filter',
    features: [
      'High-grade stainless steel vent filter housing (SS 316L)',
      'Perfect for critical pharmaceutical vent filter applications',
      'Available in 0.2 micron absolute vent filter options for sterility',
      'Designed for effective air and gas filtration in humid environments',
      'Corrosion-resistant and hygienic construction with low Ra finish',
      'Easy installation and minimal maintenance required',
      'Custom sizes available for large industrial storage tanks'
    ],
    faqs: [
      { question: 'Why is SS 316L preferred for vent housings?', answer: 'SS 316L offers superior corrosion resistance and is the global standard for high-purity pharmaceutical and food applications.' },
      { question: 'How do I prevent condensation in the vent filter?', answer: 'We can provide optional electrical heating jackets to keep the housing warm and prevent moisture from clogging the filter.' },
      { question: 'What is the flow rate of a typical vent filter?', answer: 'The flow rate is calculated based on the tank\'s maximum fill and empty rate to prevent tank collapse or bursting.' },
      { question: 'How often should the element be replaced?', answer: 'In sterile applications, it is usually replaced every 6 to 12 months, or sooner if a high pressure drop is detected during filling.' },
      { question: 'Are your vent housings suitable for outdoors?', answer: 'Yes, they can be equipped with weather-resistant hoods to prevent rain from entering the filter element.' }
    ]
  }],
  'duplex-filter-housing-supplier': [{ 
    name: 'Duplex Filter Housing Manufacturer in Ahmedabad, India', 
    application: 'Continuous filtration without process interruption', 
    imageId: 'product-duplex-housing-1',
    imageIds: ['product-duplex-housing-1', 'product-duplex-housing-2'],
    description: `Vviok Industry manufactures high-performance Duplex Filter Housings designed for continuous filtration without process interruption. Engineered for durability and efficiency, our duplex filter housing systems allow one unit to operate while the other is under maintenance. As a trusted duplex filter housing manufacturer in Ahmedabad, India, we supply robust filtration solutions including duplex oil filter housing and duplex bag filter housing for demanding industrial applications.

Duplex systems are the ultimate solution for high-value processes where downtime is not an option. By allowing filter cleaning while the system is live, they ensure maximum productivity and operational efficiency for your entire plant.`,
    detailedSpecs: `Vviok Industry designs duplex filter systems based on the efficient duplex filter working principle, ensuring uninterrupted flow and reliable performance. Our systems are widely used in oil filtration, chemical processing, water treatment, and industrial fluid handling applications.

Technically, a duplex system consists of two identical housings connected by a three-way or four-way valve. This valve allows for instantaneous switching of the flow from one housing to the other. Our designs focus on zero-leakage during changeover. We offer both bag and cartridge duplex configurations. The housings are built to ASME standards and are available in various materials. The system can be manual or automated with differential pressure sensors and motorized valves for high-tech industrial environments. This ensures that the system always operates within safe pressure limits.`,
    metaTitle: 'Duplex Filter Housing Manufacturer & Supplier in Ahmedabad, India',
    metaDescription: 'Vviok Industry is a leading duplex filter housing manufacturer in Ahmedabad, India supplying duplex bag filter housing and duplex oil filter systems.',
    metaKeywords: 'Duplex Filter Housings, duplex bag filter, duplex filter assembly, duplex oil filter housing, duplex bag filter housing, duplex strainers manufacturers, hydac duplex filter assembly, Duplex filter working principle, Duplex filter housing price, Duplex filter mesh size, duplex filter manufacturers in india, duplex stainless steel suppliers in india, duplex basket strainer manufacturer in india',
    features: [
      'Heavy-duty duplex stainless steel construction for reliability',
      'True continuous filtration without any system shutdown',
      'Available as duplex bag filter or duplex cartridge housing',
      'Ideal for heavy-duty oil and liquid filtration systems',
      'Customizable duplex filter mesh sizes for different debris types',
      'Easy and safe changeover mechanism with locking levers',
      'Long service life and significantly reduced plant maintenance costs'
    ],
    faqs: [
      { question: 'How does the switch-over mechanism work?', answer: 'A lever or gear-operated valve redirects the flow from the dirty housing to the clean housing instantly without stopping flow.' },
      { question: 'Is it possible to automate the switch-over?', answer: 'Yes, we can provide motorized or pneumatic actuators linked to DP sensors for fully automated changeover.' },
      { question: 'What are the main advantages over a single filter?', answer: 'The primary advantage is zero downtime; you never need to stop the production line to clean or replace a filter element.' },
      { question: 'Do you provide safety interlocks?', answer: 'Yes, we can provide interlocks that prevent the operator from closing both housings simultaneously, ensuring safety.' },
      { question: 'Can these handle high viscosity oils?', answer: 'Absolutely, they are commonly used in large lubrication and hydraulic systems for thick industrial oils.' }
    ]
  }],
  'industrial-multi-bag-filter-housing': [{ 
    name: 'Multi Bag Filter Housing Manufacturer in Ahmedabad, India', 
    application: 'Large-scale high-volume liquid clarification for industrial processes', 
    imageId: 'product-multi-bag-1',
    description: `Vviok Industry manufactures high-performance Multi Bag Filter Housing systems designed for high-flow and heavy-duty industrial filtration applications. Built using premium-grade stainless steel, our stainless steel multi bag filter housing ensures durability, corrosion resistance, and long operational life. As a trusted multi bag filter housing manufacturer in Ahmedabad, India, we provide reliable and cost-effective filtration solutions suitable for large-scale liquid processing systems.

These units are engineered to handle the highest volumes of industrial liquids. By combining multiple filter bags into a single vessel, we achieve enormous flow rates with a compact footprint, making them ideal for wastewater treatment, cooling water, and large chemical plants.`,
    detailedSpecs: `Vviok Industry supplies industrial stainless steel bag filter housings that ensure efficient particle removal and consistent filtration performance. They are widely used in industries such as chemicals, pharmaceuticals, oil & gas, water treatment, food & beverage, and power generation.

The technical design features a high-capacity davit arm for easy lid lifting, which is essential for multi-bag units. Each bag sits in a heavy-duty stainless steel support basket to ensure complete utilization of the filter area. We offer configurations from 2 to 24 bags per vessel. The sealing mechanism is designed for zero bypass, ensuring that all fluid passes through the filter media. The housings are available in various pressure ratings and can be customized with various inlet/outlet positions to fit into existing plant layouts easily. This scalability makes them a very flexible choice for growing industrial operations.`,
    metaTitle: 'Multi Bag Filter Housing Manufacturer & Supplier in Ahmedabad, India',
    metaDescription: 'Vviok Industry is a leading multi bag filter housing manufacturer in Ahmedabad, India supplying stainless steel industrial multi bag filtration systems.',
    metaKeywords: 'multi bag filter housing, multi bag filter housing manufacturer, multi bag filter housing supplier, multi bag filter housing in india, Duplex filter working principle, Duplex filter housing price, stainless steel multi bag filter housing, Industrial Stainless Steel Bag Filter Housings',
    features: [
      'Heavy-duty stainless steel multi bag filter housing (304/316)',
      'Designed for extreme high flow rate industrial applications',
      'Available in 2 to 24 bag capacity configurations for scalability',
      'Easy and ergonomic bag replacement with davit arm support',
      'Advanced sealing system to prevent any bypass or leakage',
      'Corrosion-resistant industrial construction for harsh environments',
      'Long service life with very low long-term maintenance costs'
    ],
    faqs: [
      { question: 'What is a davit arm closure?', answer: 'It is a mechanical arm that helps lift and swing away the heavy lid of a multi-bag housing with minimal physical effort.' },
      { question: 'How many bags can your housings hold?', answer: 'We manufacture housings ranging from 2-bag units up to large 24-bag vessels for extreme flow requirements.' },
      { question: 'What is the maximum flow rate capacity?', answer: 'Capacity can reach up to 1000 m³/hr depending on the number of bags, bag size, and inlet pipe diameter.' },
      { question: 'Do you offer a high-pressure range?', answer: 'Yes, we can design custom multi-bag housings rated for up to 300 PSI or more to meet specific project needs.' },
      { question: 'Are the filter baskets included?', answer: 'Yes, all our multi-bag housings come with heavy-duty perforated stainless steel support baskets for each bag.' }
    ]
  }],
  'multi-cartridge-filter-housing': [{ 
    name: 'Multi Cartridge Filter Housing Manufacturer in Ahmedabad, India', 
    application: 'High-precision large-scale liquid filtration and clarification', 
    imageId: 'product-multi-cartridge-1',
    description: `Vviok Industry manufactures high-quality Multi Cartridge Filter Housing systems designed for high-flow and precision liquid filtration applications. Built using premium stainless steel, our stainless steel multi cartridge filter housing ensures durability, corrosion resistance, and long operational life. As a trusted multi cartridge housing manufacturer in Ahmedabad, India, we supply reliable and efficient filtration solutions suitable for industrial and sanitary applications.

These housings allow for the use of multiple cartridges in parallel, providing a very high filtration surface area in a relatively small vessel. This is perfect for high-purity applications like final water polishing in pharmaceutical or electronics manufacturing.`,
    detailedSpecs: `Vviok Industry supplies multi cartridge filter housing systems widely used in pharmaceuticals, chemicals, food & beverage, water treatment, and industrial processing plants. Our multi cartridge filter design allows simultaneous use of multiple cartridges, increasing filtration capacity and efficiency.

Technically, the housing utilizes an internal cartridge support plate that ensures a perfect seal for every individual cartridge. We offer various closure types including swing-bolts for quick changes. The interiors are finished to a high degree, with optional electropolishing for sanitary environments. The housings can accommodate all standard cartridge end-caps like DOE or Code 7. We provide units that hold from 3 to over 100 cartridges. The design includes air vents and drains to facilitate safe and clean maintenance. Our precision engineering ensures that even at high flow rates, the pressure drop remains low, optimizing your system's energy consumption.`,
    metaTitle: 'Multi Cartridge Filter Housing Manufacturer & Supplier in Ahmedabad, India',
    metaDescription: 'Vviok Industry is a leading multi cartridge filter housing manufacturer in Ahmedabad, India supplying stainless steel sanitary and industrial cartridge housing systems.',
    metaKeywords: 'multi cartridge filter housing, multi cartridge, multi cartridge filter, stainless steel multi cartridge filter housing, cartridge filter housing, stainless steel cartridge filter, sanitary cartridge filter housing',
    features: [
      'Heavy-duty stainless steel multi cartridge housing (SS 304/316)',
      'Designed for high flow rate precision filtration systems',
      'Compatible with all standard and custom stainless steel cartridges',
      'Ideal for sanitary cartridge filter housing tasks in pharma/food',
      'Easy cartridge installation and maintenance with swing-bolt lids',
      'Leak-proof sealing plate ensuring zero-bypass performance',
      'Long service life with high mechanical durability'
    ],
    faqs: [
      { question: 'Are these compatible with high-flow cartridges?', answer: 'Yes, our housings can be customized to fit specific high-flow or large-diameter cartridge formats.' },
      { question: 'What is the benefit of a swing-bolt closure?', answer: 'It allows for quick and easy access to the cartridges without losing bolts or needing special tools.' },
      { question: 'Do you manufacture for 20, 30, or 40-inch cartridges?', answer: 'Yes, we manufacture housings for all standard industrial cartridge lengths, including custom sizes.' },
      { question: 'Do you provide internal polishing?', answer: 'Yes, we can provide internal polishing up to 0.4 Ra for sensitive pharmaceutical-grade applications.' },
      { question: 'What is the lead time for custom housings?', answer: 'Standard custom units typically take 2-4 weeks, depending on the complexity, size, and material availability.' }
    ]
  }],
  'basket-strainer-manufacturer': [{ 
    name: 'Industrial Basket Strainer Manufacturer in Ahmedabad, India', 
    application: 'Removing large particulates and debris from liquid process streams', 
    imageId: 'product-vent-filter-1',
    description: `Vviok Industry manufactures high-performance Industrial Basket Strainers designed to remove solid particles from liquid pipelines and protect pumps, valves, and process equipment. Made from premium stainless steel, our stainless steel basket strainer ensures durability, corrosion resistance, and long service life. As a trusted basket strainer manufacturer in Ahmedabad, India, we supply efficient and reliable basket type strainer filters for various industrial applications.

These strainers are engineered to handle a large volume of debris. The basket design provides a larger collection area than a Y-strainer, which means it can hold more dirt before it needs to be cleaned, making it ideal for high-debris water or industrial fluids.`,
    detailedSpecs: `Vviok Industry supplies industrial basket strainers widely used in chemicals, pharmaceuticals, oil & gas, water treatment, food & beverage, and power generation industries. Our basket strainer filter systems are engineered for consistent filtration performance and equipment protection.

The technical specifications include heavy-duty cast or fabricated bodies with flanged connections. The internal basket is made of perforated stainless steel, which can be custom-lined with wire mesh for finer filtration. We offer various cover types, including quick-opening options for fast maintenance. The design includes a drain plug to allow for easy emptying before opening the housing. The housings are polished to prevent corrosion and are available in various pressure ratings. Our basket strainers are designed for a low pressure drop, ensuring that your system's flow rate is maintained even as the basket collects debris.`,
    metaTitle: 'Industrial Basket Strainer Manufacturer & Supplier in Ahmedabad, India',
    metaDescription: 'Vviok Industry is a leading industrial basket strainer manufacturer in Ahmedabad, India supplying stainless steel vertical and basket type strainer filters.',
    metaKeywords: 'basket strainers, basket strainer filter, industrial basket strainers, basket strainer manufacturer, basket strainer supplier, basket type strainer manufacturer, pool strainer basket, stainless steel basket strainer, stainless steel strainer basket, basket type strainer, vertical basket strainer, basket strainer manufacturers in india',
    features: [
      'Heavy-duty stainless steel basket strainer construction (304/316)',
      'Available in vertical basket strainer design for space efficiency',
      'Highly efficient removal of debris and solid particles from pipelines',
      'Easy cleaning and maintenance with top-access baskets',
      'Strong and leak-proof housing structure tested for high pressure',
      'Suitable for water, oil, and various chemical process fluids',
      'Long operational life with minimal long-term maintenance'
    ],
    faqs: [
      { question: 'What is the standard mesh size for baskets?', answer: 'Standard mesh ranges from 20 to 400 mesh, depending on the size of particles you need to capture.' },
      { question: 'What is the difference between simplex and duplex?', answer: 'A simplex strainer requires the flow to stop for cleaning, while a duplex allows continuous operation by switching between two baskets.' },
      { question: 'Can these strainers be used for thick fluids?', answer: 'Yes, we design them with larger internal volumes and mesh areas to maintain flow with thick industrial liquids.' },
      { question: 'Are the gaskets easily replaceable?', answer: 'Yes, we provide standard replaceable gaskets in EPDM, Viton, or PTFE to suit your specific application.' },
      { question: 'Do you provide flanged connections?', answer: 'Yes, we provide all standard flange connections including ANSI, DIN, and JIS as per your requirement.' }
    ]
  }],
  'taper-basket-strainer-manufacturer': [{ 
    name: 'Taper Basket Strainer Manufacturer in Ahmedabad, India', 
    application: 'Efficient removal of solid particles from pipeline systems and equipment protection', 
    imageId: '/uploads/SS Basket.jpg',
    description: `Vviok Industry manufactures high-quality Taper Basket Strainers designed for efficient removal of solid particles from pipeline systems. Engineered for durability and reliable performance, our industrial taper basket strainer ensures smooth flow and protection of pumps, valves, and other critical equipment. As a trusted strainer manufacturer in Ahmedabad, India, we supply heavy-duty and precision-engineered taper basket strainers suitable for various industrial filtration applications.

The tapered design is particularly effective for vertical installations where it helps in gravity-assisted collection of debris. Its unique shape allows for easy removal of the basket, even when it is full of heavy contaminants.`,
    detailedSpecs: `Vviok Industry supplies industrial taper basket strainers widely used in chemicals, pharmaceuticals, oil & gas, water treatment, and food processing industries. Our strainers are designed to ensure efficient filtration and protect downstream equipment from damage caused by debris.

Technically, these strainers are fabricated to meet high-pressure standards. The tapered basket offers a large surface area relative to the pipe size, ensuring low resistance to flow. We offer them in all standard pipeline sizes. The material of construction is typically SS 304 or SS 316. The baskets are perforated and can be lined with fine mesh for precise filtration. The housings feature quick-access covers and drain ports. Our engineering team can customize the taper angle and basket depth to fit specific space or flow requirements in your plant.`,
    metaTitle: 'Taper Basket Strainer Manufacturer & Supplier in Ahmedabad, India',
    metaDescription: 'Vviok Industry is a leading taper basket strainer manufacturer in Ahmedabad, India supplying heavy-duty industrial pipeline filter strainers.',
    metaKeywords: 'taper basket strainer, Taper basket strainer sizes, Taper basket strainer heavy duty, industrial taper basket strainer, pipeline filter, strainer manufacturer, strainer manufacturer in ahmedabad, strainer manufacturer in india',
    features: [
      'Heavy-duty taper basket strainer construction for long-term use',
      'Available in a wide range of taper basket strainer sizes (1" to 24")',
      'Designed specifically for critical pipeline filter protection',
      'High dirt-holding capacity due to unique tapered shape',
      'Easy removal and cleaning of basket for minimal maintenance time',
      'Durable and corrosion-resistant materials (SS 304/316)',
      'Suitable for high-pressure industrial systems up to 600 PSI'
    ],
    faqs: [
      { question: 'Why choose a tapered design over a straight one?', answer: 'A tapered design allows for better flow dynamics and significantly easier retrieval of the basket from the housing.' },
      { question: 'Are these strainers suitable for startup debris?', answer: 'Yes, they are commonly used during plant commissioning to capture welding slag and construction waste.' },
      { question: 'What is the typical lead time for custom strainers?', answer: 'Most custom taper strainers are fabricated and shipped within 10-15 business days.' },
      { question: 'Can you provide the strainer with a drain plug?', answer: 'Yes, we include drain and vent plugs as standard for easier maintenance and depressurization.' },
      { question: 'What is the maximum pressure these can handle?', answer: 'Our standard designs handle up to 600 PSI, but higher ratings can be custom engineered for offshore or refinery use.' }
    ]
  }],
  'conical-strainer-manufacturer': [{ 
    name: 'Conical Strainer Manufacturer in Ahmedabad, India', 
    application: 'Temporary and permanent filtration in pipeline systems', 
    imageId: 'product-conical-strainer',
    description: `Vviok Industry manufactures high-quality Conical Strainers designed for temporary and permanent filtration in pipeline systems. Also known as cone shaped strainers, these filtration components are ideal for removing debris during system startup and maintenance operations. As a trusted conical strainer manufacturer in Ahmedabad, India, we supply durable stainless steel cone strainers engineered for efficient performance and long service life in industrial applications.

Conical strainers, or 'witch's hats', are a simple yet effective solution for pipeline protection. Their shape allows them to be sandwiched between two flanges, making them easy to install and remove without needing a dedicated housing.`,
    detailedSpecs: `Vviok Industry supplies conical metal strainers widely used in chemicals, pharmaceuticals, oil & gas, water treatment, food processing, and power generation industries. Our conical sieve strainer and conical mesh strainer solutions are engineered for reliable filtration and equipment protection.

The technical design includes a perforated metal body that can be lined with various mesh sizes. We offer both 'pointed' and 'flat-top' (truncated) designs. Truncated cones are used when space between flanges is limited. The strainers are typically made of SS 304 or 316. They are designed to withstand the initial surge of fluid during system startup. We offer a range of lengths and diameters to fit all standard pipe sizes from 1" to 36". Their low cost and high efficiency make them an essential part of any new pipeline commissioning process.`,
    metaTitle: 'Conical Strainer Manufacturer & Supplier in Ahmedabad, India',
    metaDescription: 'Vviok Industry is a leading conical strainer manufacturer in Ahmedabad, India supplying stainless steel cone shaped and temporary cone strainers.',
    metaKeywords: 'conical strainer, strainer conical, conical strainer manufacturers, conical strainer big size, conical strainer price, conical strainer supplier, conical metal strainer, cone shaped strainer, stainless steel cone strainer, conical sieve strainer, conical mesh strainer, temporary cone strainer, chinois conical strainer',
    features: [
      'Premium stainless steel cone strainer construction (SS 304/316)',
      'Ideal as a temporary cone strainer for initial pipeline startup',
      'Available in various sizes including big size options for large mains',
      'Strong and corrosion-resistant design for long-term use',
      'Extremely easy installation and removal between standard flanges',
      'High dirt-holding capacity with minimal pressure drop',
      'Custom conical mesh strainer options available for fine debris'
    ],
    faqs: [
      { question: 'When should I use a conical strainer?', answer: 'They are best used during plant startup to capture welding slag, scale, or other construction debris that could damage pumps.' },
      { question: 'Do you offer truncated cones?', answer: 'Yes, we manufacture flat-top versions for installations where a full cone wouldn\'t fit between the pipes.' },
      { question: 'In which direction should the cone point?', answer: 'Usually, the cone points upstream to collect debris in the tip, but it can point downstream if flow area is limited.' },
      { question: 'What materials are available?', answer: 'We use SS 304, SS 316, and SS 316L, and for specialized needs, exotic alloys like Monel can be used.' },
      { question: 'Are these for permanent installation?', answer: 'They are usually temporary for startup, but can be permanent if debris load is low and they are checked regularly.' }
    ]
  }],
  'pleated-strainer-manufacturer': [{ 
    name: 'Industrial Pleated Strainer Manufacturer in Ahmedabad, India', 
    application: 'Increased surface area for extended service life in critical filtration tasks', 
    imageId: 'product-pleated-strainer',
    description: `Vviok Industry manufactures high-performance Pleated Strainers designed for efficient removal of suspended particles in industrial pipeline systems. The pleated structure provides increased filtration surface area, ensuring better flow rate and improved dirt-holding capacity. As a trusted industrial pleated strainer manufacturer in Ahmedabad, India, we supply durable and precision-engineered pleated strainers suitable for water and industrial process filtration applications.

Pleating is the technology of choice when you need to maximize the time between cleaning cycles. By increasing the effective area by up to 500%, these strainers offer significantly lower pressure drops and higher efficiency than standard flat mesh strainers.`,
    detailedSpecs: `Vviok Industry supplies industrial pleated strainers widely used in chemicals, pharmaceuticals, oil & gas, water treatment, food & beverage, and power generation industries. Our pleated strainers are engineered to provide reliable performance and protect downstream equipment from solid contaminants.

Technically, these strainers consist of a pleated wire mesh or perforated sheet supported by a central core. The pleats are designed to be stable even under high flow rates. The all-metal construction makes them suitable for high-temperature applications where polymeric filters would fail. We offer precision mesh linings from 25 micron up to 800 microns. The robust design ensures they can handle high differential pressures. They are commonly used in fuel lines, lubrication systems, and chemical process pipes where fine particle removal is critical. They are fully cleanable and reusable, offering a sustainable alternative to disposable cartridges.`,
    metaTitle: 'Industrial Pleated Strainer Manufacturer & Supplier in Ahmedabad, India',
    metaDescription: 'Vviok Industry is a leading industrial pleated strainer manufacturer in Ahmedabad, India supplying high-efficiency pleated strainers for water and process filtration.',
    metaKeywords: 'Pleated Strainers, industrial Pleated Strainer, industrial process filtration, strainer for water systems, multiple pleated strainer, Pleated strainer for water, Pleated strainer price, Pleated strainer sizes, Industrial pleated strainer manufacturer, Industrial pleated strainer price',
    features: [
      'Advanced pleated strainer design for up to 5x higher filtration area',
      'Suitable as a robust pleated strainer for critical water systems',
      'Available in multiple pleated strainer sizes for all pipe diameters',
      'Extremely high dirt-holding capacity for extended service life',
      'Durable and corrosion-resistant construction (SS 304/316)',
      'Easy installation and maintenance in standard housings',
      'Consistent filtration performance under high flow conditions'
    ],
    faqs: [
      { question: 'What are the benefits of pleating?', answer: 'Pleating increases surface area, which lowers initial pressure drop and significantly increases dirt holding capacity.' },
      { question: 'Are these suitable for viscous fluids?', answer: 'Yes, the increased surface area is especially helpful in maintaining flow rates with thick industrial oils or chemicals.' },
      { question: 'Can these strainers be reused?', answer: 'Yes, they are designed to be cleaned many times via backwashing, solvents, or ultrasonic methods.' },
      { question: 'What micron ratings are available?', answer: 'We offer precision mesh linings from 25 micron up to 800 microns to suit various particle sizes.' },
      { question: 'Do you provide internal support?', answer: 'Yes, all our pleated elements include a strong internal core to prevent collapsing under high differential pressure.' }
    ]
  }],
  'storage-tank-supplier': [{ 
    name: 'Industrial Storage Tank Manufacturer in Ahmedabad, India', 
    application: 'Industrial liquid storage and containment for chemical and process industries', 
    imageId: '/uploads/Storage Tank Manufacturer -Vviok industry.png',
    description: `Vviok Industry manufactures high-quality Industrial Storage Tanks designed for safe and efficient storage of water, chemicals, and industrial liquids. Built using premium-grade stainless steel and durable metal construction, our storage tanks ensure strength, corrosion resistance, and long service life. As a trusted storage tank manufacturer in Ahmedabad, India, we supply reliable and customized liquid storage solutions for various industrial applications.

Our tanks are engineered for a lifetime of service. We focus on structural integrity and superior finish, ensuring that your valuable fluids are stored without risk of contamination or leakage.`,
    detailedSpecs: `Vviok Industry supplies industrial liquid storage tanks widely used in chemicals, pharmaceuticals, food & beverage, oil & gas, water treatment, and power generation industries. Our stainless steel liquid storage tanks and stainless steel chemical storage tanks are engineered for safety, durability, and efficient storage performance.

The technical design features various dish styles, including torispherical, hemispherical, and conical, to suit specific drainage and pressure needs. We offer vertical and horizontal configurations. The tanks can be equipped with various accessories like manways, level indicators, air vents, and spray balls for cleaning. We use advanced welding techniques to ensure leak-proof seams. The surface finish can be customized from mill finish to a mirror polish of 0.2 Ra for pharmaceutical storage. We can also provide insulated and jacketed tanks for processes requiring precise temperature control. All tanks are hydro-tested and undergo rigorous quality checks before dispatch.`,
    metaTitle: 'Industrial Storage Tank Manufacturer & Supplier in Ahmedabad, India',
    metaDescription: 'Vviok Industry is a leading industrial storage tank manufacturer in Ahmedabad, India supplying stainless steel water and chemical storage tanks.',
    metaKeywords: 'storage tank, industrial storage tank, storage tank manufacturer, storage tank supplier, water storage tanks, steel water tanks, industrial liquid storage tanks, steel water tank price, bulk liquid storage tanks, stainless steel liquid storage tanks, custom water tanks, chemical storage tank, bulk chemical storage tanks, stainless steel storage tank, metal water tank, stainless steel chemical storage tank',
    features: [
      'Heavy-duty stainless steel storage tank construction (304/316/316L)',
      'Suitable for water storage tanks and hazardous chemical storage',
      'Available as bulk liquid storage tanks up to 50,000 liters',
      'Corrosion-resistant and 100% leak-proof welded design',
      'Custom water tanks engineered as per industrial site requirements',
      'Strong structural support and long service life for heavy industrial use',
      'Easy installation and low maintenance with sanitary access ports'
    ],
    faqs: [
      { question: 'What is the maximum capacity you can build?', answer: 'We can manufacture custom storage tanks up to 50,000 liters. Larger tanks can be fabricated on-site if required.' },
      { question: 'Do you provide jacketed tanks?', answer: 'Yes, we offer limpet coils, dimple jackets, and plain jackets for efficient heating or cooling.' },
      { question: 'What interior finishes are available?', answer: 'We offer finishes from industrial matt to high-gloss mirror finish and electropolishing for pharma use.' },
      { question: 'Can you install an agitator?', answer: 'Yes, we can design the top dish with reinforced mounts to support various mixers and agitators.' },
      { question: 'What certifications are provided?', answer: 'We provide material test certificates (MTC), hydro-test reports, DP test reports, and weld mapping for all tanks.' }
    ]
  }],
  'pressure-vessel-supplier-india': [{ 
    name: 'Industrial Pressure Vessel Manufacturer & Supplier in India', 
    application: 'Safe operation under high pressure and demanding industrial conditions', 
    imageId: '/uploads/pressure tank.jpeg',
    description: `Vviok Industry manufactures high-performance Pressure Vessels designed for safe operation under high pressure and demanding industrial conditions. Built using premium-grade stainless steel and precision engineering standards, our vessels ensure strength, durability, and operational safety. As a trusted stainless steel pressure vessel manufacturer in India, we provide high pressure vessels and custom pressure vessels suitable for various industrial process requirements.

Safety is our top priority when it comes to pressure vessels. Our engineering team follows international codes to ensure that every vessel can handle its design pressure with a significant safety margin, protecting your personnel and your plant.`,
    detailedSpecs: `Vviok Industry supplies pressure vessels widely used in chemical processing, pharmaceuticals, oil & gas, water treatment, and power generation industries. Our product range includes high pressure reactor vessels and stainless steel pressure tanks designed to withstand extreme pressure conditions.

Technically, our vessels are designed and manufactured in accordance with ASME Section VIII Division 1 or equivalent local standards. We use specialized welding procedures and conduct non-destructive testing (NDT) like X-ray and ultrasonic testing on critical joints. The vessels can be customized with various internals like baffles, heating coils, and spargers. We offer a range of materials including SS 304, 316, 316L, and Duplex steel. Each vessel is hydro-tested to 1.5 times the design pressure. We also provide complete documentation, including design calculations and material traceability, ensuring that you can easily integrate our vessels into your regulated processes.`,
    metaTitle: 'Pressure Vessel Manufacturer in India | Stainless Steel Pressure Vessel | Vviok Industry',
    metaDescription: 'Vviok Industry is a leading pressure vessel manufacturer in India supplying stainless steel, high pressure and custom pressure vessels for industrial applications.',
    metaKeywords: 'pressure vessel, pressure vessel manufacturer, pressure vessel supplier, pressure vessel in india, stainless steel pressure vessel, high pressure vessel, custom pressure vessels, water pressure vessel, stainless steel pressure vessel manufacturer, high pressure reactor, stainless steel pressure tank, high pressure reactor vessel, pressure vessel manufacturer in india, pressure vessel manufacturer in gujarat',
    features: [
      'Heavy-duty stainless steel pressure vessel construction to ASME standards',
      'Designed for extreme high pressure vessel applications up to 100 bar',
      'Available as custom pressure vessels for specialized chemical reactors',
      'Suitable for critical water pressure vessel and surge tank systems',
      'Precision engineered for the highest industrial safety standards',
      'Corrosion-resistant materials ensuring long service life in harsh use',
      'Reliable performance in critical operations with full NDT certification'
    ],
    faqs: [
      { question: 'Do your vessels meet ASME standards?', answer: 'Yes, we design and manufacture pressure vessels according to ASME Section VIII Division 1 standards as a benchmark.' },
      { question: 'What kind of pressure testing is done?', answer: 'We conduct rigorous Hydro-testing at 1.5 times the design pressure to ensure zero leakage and total structural integrity.' },
      { question: 'Can you build high-pressure reactors?', answer: 'Yes, we specialize in high-pressure reactors with customized internal heating or cooling coils for chemical synthesis.' },
      { question: 'What safety features are standard?', answer: 'Every vessel includes ports for safety valves, pressure gauges, and burst discs to ensure safe operation.' },
      { question: 'What is the maximum pressure engineered?', answer: 'We can engineer vessels for pressures up to 100 bar, depending on the required material thickness and dimensions.' }
    ]
  }],
  'air-receiver-tank-supplier-india': [{ 
    name: 'Industrial Air Receiver Tank Manufacturer & Supplier in India', 
    application: 'Compressed air storage and pressure stabilization for industrial systems', 
    imageId: '/uploads/Air receiver tank manufacturer supplier in india -vviok industry.jpeg',
    description: `Vviok Industry manufactures high-quality Air Receiver Tanks designed to store compressed air safely and efficiently in industrial systems. Built with robust steel construction and engineered to withstand high pressure, our tanks ensure stable airflow and improved compressor performance. As a trusted air receiver tank manufacturer in India, we supply vertical air tanks and horizontal air compressor tanks suitable for various industrial applications.

An air receiver tank is vital for any compressed air system. It acts as a buffer, preventing the compressor from frequent cycling and ensuring a steady supply of air for your tools and machinery, even during peak demand periods.`,
    detailedSpecs: `Vviok Industry supplies air receiver tanks widely used in manufacturing units, automotive industries, power plants, and process industries. Our vertical and horizontal air compressor tanks are engineered to regulate air pressure, reduce compressor load, and enhance system efficiency.

Technically, the tanks are designed to handle pressure fluctuations and include safety features like pressure relief valves and moisture drains. The interior can be coated with epoxy to prevent rust from moisture in the compressed air. We offer a wide range of capacities from 50 to 10,000 liters. The tanks are hydro-tested to ensure they meet the required pressure rating. The vertical design is popular for space-saving, while the horizontal design is often used for compressor-mounted packages. Our tanks help in cooling the air and allowing moisture to condense, which protects your pneumatic tools from water damage. We ensure that every tank is built for safety and long-term reliability in busy industrial environments.`,
    metaTitle: 'Air Receiver Tank Manufacturer in India | Vertical & Horizontal Air Tanks | Vviok Industry',
    metaDescription: 'Vviok Industry is a leading air receiver tank manufacturer in India supplying vertical and horizontal air compressor tanks for industrial applications.',
    metaKeywords: 'Air receiver tank, air receiver tank manufacturer, air receiver tank supplier, air receiver tank manufacturers in india, air reciver tank, vertical air tank, vertical air compressor tank, horizontal air compressor tank, horizontal air receiver tank',
    features: [
      'Heavy-duty air receiver tank construction for maximum safety',
      'Available as vertical air tank and horizontal air receiver tank types',
      'Suitable for vertical air compressor tank systems to save space',
      'Designed for high pressure compressed air storage up to 15 bar',
      'Corrosion-resistant internal coating and long service life',
      'Precision welded and hydro-tested for absolute safety',
      'Easy installation with standard connection sizes and low maintenance'
    ],
    faqs: [
      { question: 'Why is an air receiver tank necessary?', answer: 'It stores air, buffers pressure surges from the compressor, and helps cool the air to drop out moisture.' },
      { question: 'Do you offer internal coatings?', answer: 'Yes, we provide internal epoxy coating to prevent corrosion from condensation and ensure clean air output.' },
      { question: 'Vertical vs Horizontal: Which is better?', answer: 'Vertical tanks save floor space, while horizontal tanks are often easier to integrate with modular compressor packages.' },
      { question: 'Are these tanks inspected by 3rd parties?', answer: 'We can arrange for inspections by agencies like TUV or Bureau Veritas upon client request for peace of mind.' },
      { question: 'What is the recommended maintenance?', answer: 'Daily draining of moisture and annual safety valve inspections are critical for long-term safe operation.' }
    ]
  }],
  'purified-water-storage-tank': [{ 
    name: 'Purified Water Storage Tank Manufacturer & Supplier in India', 
    application: 'Sterile water storage for pharmaceutical and food processing', 
    imageId: 'product-purified-water-tank',
    description: `Vviok Industry manufactures high-quality Purified Water Storage Tanks specially designed for safe storage of RO and treated water in industrial and commercial applications. Fabricated using premium-grade stainless steel, our tanks ensure hygienic storage, corrosion resistance, and long service life. As a reliable stainless steel RO tank manufacturer in India, we offer durable and precision-engineered purified water storage tanks suitable for pharmaceutical, food, and water treatment industries.

Hygienic storage is paramount for purified water. Our tanks are designed to prevent dead zones and bacterial growth, ensuring that your high-purity water remains within its specified quality parameters until it is needed in your process.`,
    detailedSpecs: `Vviok Industry supplies stainless steel purified water storage tanks widely used in pharmaceutical plants, hospitals, food processing units, and water treatment systems. Our stainless steel RO tanks are designed to maintain water purity and prevent contamination.

Technically, these tanks feature a mirror-polished interior (up to 0.2 Ra) and a sanitary design. We use SS 316L for all wetted parts for maximum corrosion resistance. The tanks include a conical or torispherical bottom for complete drainage. A sanitary vent filter is used to prevent airborne contaminants from entering as water is drawn out. We also provide spray balls for automated CIP cleaning. The tanks can be customized with level sensors, temperature probes, and conductivity ports. Every unit is pressure tested and can be provided with a complete validation package, including weld mapping and material traceability, essential for cGMP compliance in the pharmaceutical industry.`,
    metaTitle: 'Purified Water Storage Tank Manufacturer in India | Stainless Steel RO Tank | Vviok Industry',
    metaDescription: 'Vviok Industry is a trusted purified water storage tank manufacturer in India supplying stainless steel RO tanks and 1000L water storage tanks.',
    metaKeywords: 'purified water storage tank, ro water tank price, ro stainless steel tank, stainless steel ro tank, 1000l water storage tank, water storage tank 1000 ltr price, water storage tank manufacturer, water storage tank supplier, water storage tank in india',
    features: [
      'High-grade stainless steel RO tank construction (SS 316L)',
      'Specially designed for purified water and RO water storage',
      'Available in 1000L and custom capacities for all facility sizes',
      'Hygienic, mirror-polished interior surface (0.2 Ra)',
      'Leak-proof, sanitary design prevents bacterial bio-film',
      'Easy cleaning with integrated spray balls for CIP systems',
      'Full validation documentation available for pharmaceutical audit'
    ],
    faqs: [
      { question: 'How is contamination prevented in these tanks?', answer: 'We use sanitary vent filters, sterile overflow systems, and high-grade SS 316L with electropolished surfaces to prevent bio-film.' },
      { question: 'Why use SS 316L for purified water?', answer: 'SS 316L has superior corrosion resistance and is the global standard for pharmaceutical grade water systems.' },
      { question: 'Do you provide a spray ball?', answer: 'Yes, we provide static or rotary spray balls for efficient automated Cleaning-In-Place (CIP) systems.' },
      { question: 'Is the bottom conical?', answer: 'Yes, we design with a conical or torispherical bottom to ensure 100% drainage and no dead zones for bacteria.' },
      { question: 'What sensors can be integrated?', answer: 'We can provide ports for level sensors, temperature probes, and conductivity meters for process monitoring.' }
    ]
  }],
  'ss-pendants': [{ 
    name: `SS Pendants Manufacturer & Supplier in India`, 
    application: `Industrial and utility applications requiring durable stainless steel components`, 
    imageId: 'product-ss-pendants',
    description: `Vviok Industry manufactures premium-quality SS Pendants designed for industrial and utility applications requiring durable stainless steel components. Fabricated using high-grade stainless steel, our pendants ensure strength, corrosion resistance, and long service life even in demanding environments. As a reliable SS pendants manufacturer in India, we supply precision-engineered stainless steel pendants suitable for various industrial installations and structural requirements.

These pendants are ideal for cleanroom environments and heavy-duty industrial settings where plastic or painted steel components would corrode or outgas. Their sleek, durable design makes them a long-term utility solution for sophisticated manufacturing plants.`,
    detailedSpecs: `Vviok Industry supplies SS pendants widely used in industrial plants, process units, and structural applications. Our pendant stainless steel products are manufactured under strict quality standards to ensure durability and structural integrity.

Technically, these pendants are designed to support heavy equipment or route utilities through cleanrooms. They are typically made from SS 304 or SS 316. The surface is polished to a smooth finish to prevent dust accumulation. We offer custom lengths and diameters to suit specific ceiling heights and load requirements. The hollow structure allows for clean and protected routing of electrical cables, air lines, and other utility conduits. They include heavy-duty base plates for secure mounting. Their corrosion-resistant nature makes them perfect for chemical plants and food processing facilities where frequent cleaning with harsh agents is required.`,
    metaTitle: `SS Pendants Manufacturer in India | Stainless Steel Pendant Supplier | Vviok Industry`,
    metaDescription: `Vviok Industry is a trusted SS pendants manufacturer in India supplying high-quality stainless steel pendants for industrial applications.`,
    metaKeywords: `ss pendants, stainless steel pendant, pendant stainless steel, stainless pendant, ss pendants manufacturer, ss pendants supplier`,
    features: [
      'High-grade stainless steel pendant construction (304/316)',
      'Durable and corrosion-resistant finish for cleanrooms',
      'Precision engineered for heavy industrial utility use',
      'Strong and long-lasting stainless pendant design for support',
      'Custom lengths and specifications available to suit any plant',
      'Easy installation with heavy-duty base plates and low maintenance',
      'Reliable performance in harsh chemical environments'
    ],
    faqs: [
      { question: 'Are these pendants suitable for cleanrooms?', answer: 'Yes, our SS pendants are designed for use in pharmaceutical cleanrooms where hygiene and no-outgassing are mandatory.' },
      { question: 'What grades of stainless steel are available?', answer: 'We primarily offer them in SS 304 and SS 316 grades, depending on the environment.' },
      { question: 'Can you provide custom lengths?', answer: 'Yes, we can fabricate pendants to any specified length to suit your unique ceiling height and equipment.' },
      { question: 'How are they mounted?', answer: 'They come with heavy-duty base plates for secure ceiling or wall mounting, ensuring structural safety.' },
      { question: 'Do they support electrical conduits?', answer: 'Yes, the hollow design allows for easy and clean routing of electrical wires and utility lines through the pendant.' }
    ]
  }],
};
