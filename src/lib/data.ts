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
  metaTitle?: string;
  metaDescription?: string;
  metaKeywords?: string;
  pageH1?: string;
}

export interface ProductDetail {
  name: string;
  application: string;
  imageId: string;
  imageIds?: string[];
  description?: string;
  features?: string[];
  specifications?: Record<string, string>;
}

export const productCategories: Category[] = [
  {
    name: 'Filter Cartridge',
    slug: 'filter-cartridge-manufacturer',
    pageH1: 'Filter Cartridge Manufacturer & Supplier in Ahmedabad, India',
    description: 'We are a leading filter cartridge manufacturer in Ahmedabad, India, providing high-performance filtration solutions for various industrial applications. Our range includes premium quality filter cartridges, cartridge filter housing, and customized filtration systems designed for durability and efficiency.\n\nAs a trusted cartridge filter supplier in India, we serve industries such as pharmaceuticals, chemicals, food processing, water treatment, and more. Our products are manufactured using advanced technology and high-grade raw materials to ensure superior filtration performance and long service life.\n\nWith competitive pricing, timely delivery, and strong technical support, we are recognized among the top cartridge filter manufacturers in India.',
    metaTitle: 'Filter Cartridge Manufacturer in Ahmedabad, India | Industrial Cartridge Filter Supplier',
    metaDescription: 'Trusted filter cartridge manufacturer and supplier in Ahmedabad, India offering industrial cartridge filters and filter housing solutions for multiple industries across India.',
    metaKeywords: 'filter cartridge, filter cartridge supplier, filter cartridge manufacturer, filter cartridge manufacturer in ahmedabad, filter cartridge manufacturer in India, filter cartridge supplier in ahmedabad, filter cartridge supplier in India, cartridge filter manufacturers in india, cartridge filter housing manufacturer',
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
    slug: 'filter-housing-manufacturer',
    pageH1: 'Filter Housing Manufacturer & Supplier in Ahmedabad, India',
    description: 'We are a leading filter housing manufacturer in Ahmedabad, India, offering high-quality and durable filtration housing solutions for various industrial applications. Our filter housing systems are designed to ensure efficient filtration performance, long service life, and easy maintenance.\n\nAs a trusted filter housing supplier in India, we manufacture a wide range of products including bag filter housing, duplex bag filter housing, multi-bag filter housing, cartridge filter housing, multi-cartridge filter housing, code 7 filter housing, vent filter housing, strainer housing filter, and duplex filter housing. Our products are engineered using premium-grade raw materials and advanced manufacturing technology to meet industrial quality standards.\n\nBag filter housing systems are ideal for high-flow and heavy-duty applications, while cartridge filter housing provides fine filtration for precise industrial processes. Duplex filter housing ensures continuous operation without downtime, making it suitable for critical industrial environments. We also provide multi-bag and multi-cartridge filter housing solutions for large-scale filtration requirements.\n\nWe offer these housings for a wide range of applications spread across industries like pharmaceuticals, chemicals, food and beverage, power, water and wastewater treatment, and many more. Our filtration housing systems are designed to handle various liquids and process fluids efficiently.\n\nWith a strong focus on quality, performance, and customer satisfaction, we are recognized among reliable filter housing manufacturers in India. We provide customized solutions, competitive pricing, and timely delivery across India to meet specific client requirements.\n\nIf you are looking for a dependable filter housing manufacturer & supplier in Ahmedabad, India, we deliver high-performance and cost-effective filtration housing solutions tailored to your industry needs.',
    metaTitle: 'Filter Housing Manufacturer in Ahmedabad, India | Bag & Cartridge Filter Housing Supplier',
    metaDescription: 'Leading filter housing manufacturer and supplier in Ahmedabad, India offering bag filter housing, cartridge filter housing, duplex and multi-bag filter housing for industrial applications.',
    metaKeywords: 'filter housing, filter housing manufacturer, filter housing supplier, bag filter housing, code 7 filter housing, catridge filter housing, strainer housing filter, housing strainer, vent filter housing, duplex filter housing, duplex bag filter housing, Multi-Bag Filter Housing, Multi-Cartridge Filter Housing',
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
    slug: 'industrial-strainer-filters',
    pageH1: 'Industrial Strainer Filter Manufacturer & Supplier in Ahmedabad, India',
    description: 'We are a leading industrial strainer filter manufacturer in Ahmedabad, India, offering reliable and high-performance filtration solutions for various industrial applications. Our strainer filters are specially designed to remove unwanted solid particles from pipelines, protecting pumps, valves, and other critical equipment.\n\nAs a trusted strainer filter supplier in India, we manufacture a wide range of stainless steel filter products suitable for different industrial requirements. Our product range includes basket strainer filters, taper basket strainers, conical strainer filters, pleated strainer filters, and stainless steel filters. Each product is engineered for durability, efficiency, and long service life.\n\nBasket strainers are ideal for high-flow industrial filtration systems and allow easy cleaning and maintenance. Conical strainers are commonly used for temporary filtration during plant startup operations. Taper basket strainers provide enhanced dirt-holding capacity, while pleated strainer filters offer improved filtration performance due to their increased surface area.\n\nOur industrial strainer filters are widely used in industries such as chemicals, pharmaceuticals, food processing, oil & gas, water treatment, and other industrial filtration applications. Manufactured using premium-grade stainless steel, our products ensure corrosion resistance, high strength, and reliable performance under demanding operating conditions.\n\nRecognized among reliable strainer filter manufacturers in India, we focus on quality control, precision engineering, competitive pricing, and timely delivery across India.',
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
  }
];

export const products: Record<string, ProductDetail[]> = {
  // Filter Cartridge
  'pp-spun-filter-cartridge': [{ 
    name: 'PP Spun Filter Cartridge', 
    application: 'Sediment and particulate removal, pre-filtration for RO systems', 
    imageId: 'product-pp-spun-1',
    imageIds: ['product-pp-spun-1', 'product-pp-spun-2'],
    description: 'PP Spun Filter Cartridges are made of 100% food-grade polypropylene. These melt-blown cartridges feature a multi-layer structure that provides graduated filtration from the outside to the inside, ensuring high dirt holding capacity and long service life. They are widely used for sediment and particulate removal in various industrial and domestic water treatment processes.',
    features: [
      '100% Polypropylene construction for wide chemical compatibility',
      'Multi-layer depth filtration structure',
      'High dirt holding capacity and low pressure drop',
      'No surfactants, binders, or adhesives used',
      'Food grade materials (FDA compliant)',
      'Excellent removal of sand, silt, dirt, and rust particles'
    ],
    specifications: {
      'Micron Rating': '1, 5, 10, 20, 50, 100 Micron',
      'Length': '10", 20", 30", 40", 50"',
      'Inner Diameter': '28mm',
      'Outer Diameter': '63mm (Standard), 110mm (Jumbo)',
      'Material': '100% Polypropylene',
      'Max Operating Temp': '60°C',
      'Core': 'Polypropylene or No Core options available'
    }
  }],
  'pp-pleated-filter-cartridge': [{ 
    name: 'PP Pleated Filter Cartridge', 
    application: 'High clarity liquid filtration, chemical and solvent processing', 
    imageId: 'product-pp-pleated-1',
    imageIds: ['product-pp-pleated-1', 'product-pp-pleated-2'],
    description: 'PP Pleated Filter Cartridges are designed for high efficiency and high surface area filtration. These cartridges are constructed with a polypropylene pleated medium, providing a large filtration area and extended service life. They are ideal for critical applications requiring fine filtration, high flow rates, and broad chemical compatibility.',
    features: [
      'High surface area for high flow rates and long life',
      'Absolute and Nominal micron ratings available',
      'All-polypropylene construction for chemical resistance',
      'Fixed pore structure prevents unloading of contaminants',
      'Low pressure drop ensures efficient operation',
      'FDA compliant materials for food and beverage use'
    ],
    specifications: {
      'Micron Rating': '0.1, 0.22, 0.45, 1, 5, 10, 20 Micron',
      'Length': '10", 20", 30", 40"',
      'Material': 'Polypropylene Pleated Media',
      'Max Operating Temp': '80°C',
      'Support/Cage': 'Polypropylene',
      'End Caps': 'DOE, 222, 226 styles'
    }
  }],
  'ptfe-pleated-filter-cartridge': [{ 
    name: 'PTFE Pleated Filter Cartridge', 
    application: 'Aggressive chemicals, solvents, and sterile air filtration', 
    imageId: 'product-ptfe-pleated-1',
    imageIds: ['product-ptfe-pleated-1', 'product-ptfe-pleated-2'],
    description: 'PTFE Pleated Filter Cartridges are constructed with a naturally hydrophobic PTFE membrane. These cartridges are specifically designed for the filtration of aggressive chemicals, solvents, and air/gas streams. They offer exceptional chemical resistance and high thermal stability, making them the preferred choice for critical applications in chemical and pharmaceutical manufacturing.',
    features: [
      'Naturally hydrophobic PTFE membrane',
      'Superior chemical resistance to acids and solvents',
      'High thermal stability for demanding environments',
      'Absolute micron ratings for reliable performance',
      'High flow rates with low pressure differential',
      '100% integrity tested during manufacturing'
    ],
    specifications: {
      'Micron Rating': '0.1, 0.22, 0.45 Micron',
      'Length': '10", 20", 30", 40"',
      'Membrane Material': 'Hydrophobic PTFE',
      'Support Material': 'Polypropylene',
      'Max Operating Temp': '90°C',
      'Filtration Efficiency': '99.99% Absolute'
    }
  }],
  'ss-wire-mesh-cartridge': [{ 
    name: 'SS Wire Mesh Cartridge', 
    application: 'High temperature and high pressure liquid filtration in industrial pipelines', 
    imageId: 'product-ss-wire-mesh-1',
    imageIds: ['product-ss-wire-mesh-1', 'product-ss-wire-mesh-2'],
    description: 'Stainless Steel Wire Mesh Cartridges are designed for high-temperature and high-pressure filtration applications. Constructed from premium SS304 or SS316 wire cloth, these cartridges offer exceptional durability, back-washability, and reuse potential. They are ideal for removing large particles, protecting downstream equipment, and filtering aggressive fluids that would damage polymer-based media.',
    features: [
      'High mechanical strength and pressure resistance',
      'Wide chemical and thermal compatibility',
      'Cleanable and reusable for long-term cost savings',
      'Precise filtration with uniform pore size',
      'No media migration into the process stream',
      'Available in multi-layer sintered or single-layer cloth'
    ],
    specifications: {
      'Micron Rating': '5, 10, 25, 40, 75, 100, 200, 500 Micron',
      'Length': '10", 20", 30", 40"',
      'Material': 'SS 304 / SS 316 / SS 316L',
      'Max Operating Temp': 'Up to 300°C',
      'End Caps': 'DOE, 222, 226, NPT/BSP Threaded',
      'Max Differential Pressure': '10 Bar'
    }
  }],
  'ss-sintered-powder-cartridge': [{ 
    name: 'SS Sintered Powder Cartridge', 
    application: 'Fine filtration for steam, polymers, and aggressive process fluids', 
    imageId: 'product-ss-sintered-1',
    imageIds: ['product-ss-sintered-1', 'product-ss-sintered-2', 'product-ss-sintered-3'],
    description: 'SS Sintered Powder Cartridges are manufactured by sintering high-quality stainless steel powder. This process creates a porous structure with high mechanical strength and exceptional thermal resistance. These cartridges are designed for fine filtration of liquids and gases in extreme environments where polymer media would fail. They are widely used for steam filtration, catalyst recovery, and processing corrosive chemicals.',
    features: [
      'Exceptional mechanical strength and integrity',
      'High temperature and pressure resistance',
      'Uniform pore size distribution for precise filtration',
      'Excellent chemical compatibility with aggressive fluids',
      'Back-washable and ultrasonically cleanable',
      'No media migration or fiber shedding'
    ],
    specifications: {
      'Micron Rating': '0.5, 1, 3, 5, 10, 20, 50 Micron',
      'Length': '10", 20", 30"',
      'Material': 'SS 316L Sintered Powder',
      'Max Operating Temp': 'Up to 600°C (in inert atmosphere)',
      'Porosity': '35% to 50%',
      'End Caps': 'DOE, Threaded, 222, 226'
    }
  }],
  
  // Housing
  'bag-filter-housing': [{ 
    name: 'Bag Filter Housing', 
    application: 'High-volume liquid clarification and bulk filtration', 
    imageId: 'product-bag-housing-1',
    imageIds: ['product-bag-housing-1'],
    description: 'Our Bag Filter Housings are engineered for high-performance liquid filtration across diverse industrial applications. Designed for durability and ease of maintenance, these housings provide a reliable solution for bulk filtration and clarification. Available in various sizes and materials to suit specific flow rates and chemical compatibility requirements.',
    features: [
      'Robust construction in SS 304, SS 316, or Carbon Steel',
      'High dirt-holding capacity for extended operation',
      'Easy-to-open swing bolt or V-clamp closures for quick bag replacement',
      'Positive bag sealing to prevent bypass',
      'Suitable for high flow rates with low pressure drop',
      'Corrosion-resistant exterior finish'
    ],
    specifications: {
      'Housing Material': 'SS 304 / SS 316 / SS 316L',
      'Design Pressure': 'Up to 10 Bar (Custom up to 25 Bar)',
      'Design Temperature': 'Up to 120°C',
      'Closure Type': 'Swing Bolt / V-Clamp',
      'Bag Sizes Supported': 'Size 1, Size 2, Size 3, Size 4',
      'Flow Rate Capacity': 'Up to 200 m³/hr per housing',
      'Connection Types': 'ANSI/DIN Flanged, NPT/BSP Threaded'
    }
  }],
  'catridge-filter-housing': [{ 
    name: 'Cartridge Filter Housing', 
    application: 'Precision liquid and gas processing in sanitary environments', 
    imageId: 'product-cartridge-housing-1',
    imageIds: ['product-cartridge-housing-1', 'product-cartridge-housing-2'],
    description: 'Cartridge Filter Housings are designed to meet the most demanding requirements of the process industry. These housings are ideal for high-purity liquid and gas applications where precision and reliability are paramount. Available in a wide range of sizes, from single to multi-cartridge configurations, to handle various flow rates and pressure requirements.',
    features: [
      'High-quality Stainless Steel construction (SS304/SS316/SS316L)',
      'Sanitary design with electropolished surfaces available',
      'Suitable for standard DOE or 222/226 code 7 cartridges',
      'Easy access for cleaning and maintenance',
      'Robust sealing with high-performance O-rings',
      'Compliance with ASME/CE standards'
    ],
    specifications: {
      'Material': 'SS 304, SS 316, SS 316L',
      'No. of Cartridges': '1 to 50+',
      'Cartridge Lengths': '10\", 20\", 30\", 40\"',
      'Operating Pressure': 'Up to 10 Bar (Custom up to 25 Bar)',
      'Operating Temperature': 'Up to 150°C',
      'Connection': 'Flanged, Threaded, Tri-clover'
    }
  }],
  'stainer-filter-housing': [{ 
    name: 'Strainer Filter Housing', 
    application: 'Pipeline debris removal and coarse filtration protection', 
    imageId: 'product-strainer-housing-1',
    imageIds: ['product-strainer-housing-1', 'product-strainer-housing-2', 'product-strainer-housing-3'],
    description: 'Strainer Filter Housings are robust components designed for the effective removal of unwanted debris and large particulates from industrial pipelines. These housings protect critical downstream equipment such as pumps, valves, and flow meters from damage and clogging. Engineered with a focus on durability and low maintenance, our strainers are suitable for a wide range of process fluids and operating conditions.',
    features: [
      'Heavy-duty Stainless Steel construction (SS304/SS316/SS316L)',
      'Large internal volume for minimal pressure drop',
      'Quick-opening cover designs for fast cleaning and maintenance',
      'Wide range of mesh and perforation sizes available',
      'Available in Simplex, Duplex, and Y-strainer configurations',
      'Custom designs available for high-pressure and high-temperature services'
    ],
    specifications: {
      'Housing Material': 'SS 304, SS 316, SS 316L',
      'Closure Type': 'Swing Bolt / Bolted / Quick Release',
      'Inlet/Outlet Connections': '1" to 24" (ANSI/DIN/BS Flanged)',
      'Design Pressure': 'Up to 10 Bar (Custom up to 40 Bar)',
      'Design Temperature': 'Up to 150°C',
      'Screen/Basket Material': 'Stainless Steel 304/316',
      'Filtration Range': '20 Micron to 10mm Perforation'
    }
  }],
  'vent-filter-housing': [{ 
    name: 'Vent Filter Housing', 
    application: 'Sterile air and gas filtration for storage tank venting', 
    imageId: 'product-vent-housing-1',
    imageIds: ['product-vent-housing-1', 'product-vent-housing-2', 'product-vent-housing-3', 'product-vent-housing-4'],
    description: 'Vent Filter Housings are specialized components designed for the sterile venting of storage tanks and vessels. These housings ensure that as fluid is drawn from or added to a tank, the air exchanged is free from contaminants, bacteria, and moisture. They are critical for maintaining product purity and integrity in pharmaceutical, biotechnology, and food processing environments.',
    features: [
      'High-quality Stainless Steel construction (SS316L preferred)',
      'Sanitary electropolished internal and external surfaces',
      'Designed for hydrophilic and hydrophobic pleated cartridges',
      'Easy disassembly for cleaning and sterilization',
      'Suitable for SIP (Steam-In-Place) and CIP (Clean-In-Place) processes',
      'Low holdup volume to prevent microbial growth'
    ],
    specifications: {
      'Material': 'SS 316L / SS 304',
      'Surface Finish': 'Ra < 0.4 μm (Electropolished)',
      'Cartridge Fitting': '226 (Code 7) / 222 / DOE',
      'Inlet/Outlet': 'Tri-Clamp / Flanged / NPT',
      'Design Pressure': 'Atms / Up to 10 Bar',
      'Design Temperature': 'Up to 150°C',
      'Drain/Vent Ports': '1/2" Tri-Clamp / NPT'
    }
  }],
  'duplex-filter-housing': [{ 
    name: 'Duplex Filter Housing', 
    application: 'Continuous flow filtration with zero downtime for maintenance', 
    imageId: 'product-duplex-housing-1',
    imageIds: ['product-duplex-housing-1', 'product-duplex-housing-2'],
    description: 'Duplex Filter Housings are designed for applications where the process flow cannot be interrupted for filter maintenance. These systems consist of two identical filter housings connected by a three-way or four-way valve system, allowing the operator to switch between housings seamlessly. While one housing is in operation, the other can be cleaned or serviced without stopping the main process.',
    features: [
      'Continuous operation with zero process downtime',
      'Seamless switch-over via high-quality valve system',
      'Heavy-duty Stainless Steel construction (SS304/SS316/SS316L)',
      'Pressure balance line for safe and smooth transitions',
      'Independent venting and draining for each housing',
      'Customizable for bag, cartridge, or basket filter media'
    ],
    specifications: {
      'Housing Material': 'SS 304 / SS 316 / SS 316L',
      'Switch-over Valve': '3-Way / 4-Way Ball or Butterfly Valve',
      'Design Pressure': 'Up to 10 Bar (Custom up to 25 Bar)',
      'Design Temperature': 'Up to 150°C',
      'Connection Size': '1" to 12" (Flanged / Threaded)',
      'Seal Material': 'EPDM / Viton / PTFE',
      'Compliance': 'ASME / CE Standard Construction'
    }
  }],
  'multi-bag-filter-housing': [{ 
    name: 'Multi-Bag Filter Housing', 
    application: 'Large-scale high-volume liquid clarification for industrial processes', 
    imageId: 'product-multi-bag-1',
    imageIds: ['product-multi-bag-1', 'product-multi-bag-2'],
    description: 'Multi-Bag Filter Housings are specifically designed for applications requiring high flow rates and high dirt-holding capacity. These robust systems utilize multiple filter bags within a single housing, significantly increasing the filtration area. Ideal for large-scale water treatment, chemical processing, and refinery operations where efficiency and minimal downtime are critical.',
    features: [
      'High flow capacity with multiple bag configurations (2 to 24 bags)',
      'Robust and durable Stainless Steel construction (SS304/SS316)',
      'Low pressure drop at high flow rates',
      'Quick-opening cover designs (Davit arm / Spring assisted) for easy maintenance',
      'Positive bag sealing technology ensures zero bypass',
      'Versatile inlet and outlet configurations'
    ],
    specifications: {
      'Housing Material': 'SS 304, SS 316, SS 316L',
      'No. of Bags': '2 to 24 Bags',
      'Bag Size': 'Size 2 (7" x 32")',
      'Design Pressure': 'Up to 10 Bar (Custom up to 20 Bar)',
      'Flow Rate': 'Up to 1000 m³/hr',
      'Connection': '3" to 14" Flanged (ANSI/DIN)',
      'Closure Type': 'Swing Bolt / Davit Arm'
    }
  }],
  'multi-cartridge-housing': [{ 
    name: 'Multi-Cartridge Filter Housing', 
    application: 'High-precision large-scale liquid filtration and clarification', 
    imageId: 'product-multi-cartridge-1',
    imageIds: ['product-multi-cartridge-1', 'product-multi-cartridge-2', 'product-multi-cartridge-3'],
    description: 'Multi-Cartridge Filter Housings are engineered for high-purity liquid filtration at industrial scales. These systems accommodate multiple filter cartridges within a single high-grade stainless steel vessel, providing a large surface area for fine filtration with minimal pressure loss. They are the ideal choice for final filtration and clarification in pharmaceutical, chemical, and advanced water treatment processes.',
    features: [
      'Accommodates 3 to 100+ cartridges for varied flow requirements',
      'High-grade Stainless Steel construction (SS304/SS316/SS316L)',
      'Compatible with standard DOE or 222/226 (Code 7) cartridge adapters',
      'Advanced sealing mechanisms ensure zero contaminant bypass',
      'Davit arm or spring-assisted lids for safe and easy handling of larger models',
      'Designed for high thermal and chemical stability'
    ],
    specifications: {
      'Housing Material': 'SS 304 / SS 316 / SS 316L',
      'No. of Cartridges': '3 to 100+ Cartridges',
      'Cartridge Lengths': '10\", 20\", 30\", 40\"',
      'Design Pressure': 'Up to 10 Bar (Custom up to 25 Bar)',
      'Inlet/Outlet Connections': '2" to 12" Flanged (ANSI/DIN)',
      'Surface Finish': 'Industrial Polish / Electropolish available',
      'Design Temperature': 'Up to 150°C'
    }
  }],
  
  // Strainer
  'basket-strainers': [{ 
    name: 'Basket Strainers', 
    application: 'Removing large particulates and debris from liquid process streams', 
    imageId: 'product-vent-filter-1',
    imageIds: ['product-vent-filter-1'],
    description: 'High-quality industrial Basket Strainers designed for effective removal of large particulates and debris from liquid process streams. Built with heavy-duty materials to ensure reliability in demanding environments.',
    features: [
      'Heavy-duty construction for industrial durability',
      'Easy access cover for quick cleaning',
      'Large basket area for minimal pressure drop',
      'Precision mesh or perforated screen options',
      'Corrosion resistant materials (SS304/SS316)'
    ],
    specifications: {
      'Body Material': 'SS 304 / SS 316 / SS 316L',
      'Inlet/Outlet': '1" to 24" Flanged',
      'Mesh Range': '20 to 400 Mesh',
      'Max Pressure': '10 Bar (Standard)',
      'Gasket': 'EPDM / Viton / PTFE'
    }
  }],
  'taper-basket-strainers': [{ name: 'Taper Basket Strainers', application: 'Efficient coarse filtration in high-flow pipelines with tapered design', imageId: '/uploads/SS Basket.jpg' }],
  'conical-strainers': [{ name: 'Conical Strainers', application: 'Temporary or permanent protection for pumps, valves, and other equipment', imageId: 'product-conical-strainer' }],
  'pleated-strainers': [{ name: 'Pleated Strainers', application: 'Increased surface area for extended service life in critical filtration tasks', imageId: 'product-pleated-strainer' }],
  
  // Vessels
  'storage-tank': [{ name: 'Storage Tank', application: 'Industrial liquid storage and containment for chemical and process industries', imageId: '/uploads/Storage Tank Manufacturer -Vviok industry.png' }],
  'pressure-vessel': [{ name: 'Pressure vessel', application: 'Safe processing and storage of liquids and gases under high pressure', imageId: '/uploads/pressure tank.jpeg' }],
  'air-reciver-tank': [{ name: 'Air reciver tank', application: 'Compressed air storage and pressure stabilization for industrial systems', imageId: '/uploads/Air receiver tank manufacturer supplier in india -vviok industry.jpeg' }],
  'purified-water-storage-tank': [{ name: 'Purified water storage tank', application: 'Sterile water storage for pharmaceutical and food processing', imageId: 'product-purified-water-tank' }],
  'ss-pendants': [{ name: 'SS pendants', application: 'Sanitary support systems for industrial equipment and piping', imageId: 'product-ss-pendants' }],
};

export const industries = [
  { name: 'Water Treatment', icon: Droplets, description: 'Ensuring water purity and safety with our advanced filtration systems for municipal, industrial, and wastewater applications.', imageId: 'industry-water-treatment' },
  { name: 'Chemical Industry', icon: FlaskConical, description: 'Providing robust and corrosion-resistant filters for separating and purifying aggressive chemicals, solvents, and polymers.', imageId: 'industry-chemical' },
  { name: 'Pharmaceutical', icon: HeartPulse, description: 'Delivering sterile and high-purity filtration solutions that meet the stringent standards of pharmaceutical manufacturing.', imageId: 'industry-pharmaceutical' },
  { name: 'Food & Beverage', icon: Grape, description: 'Maintaining product quality and safety with food-grade filters for liquids, ingredients, and air purification.', imageId: 'industry-food-beverage' },
  { name: 'Water Storage', icon: Droplets, description: 'Providing safe and reliable water storage solutions with our high-quality stainless steel tanks.', imageId: 'industry-water-treatment' },
  { name: 'Oil & Gas', icon: Fuel, description: 'Offering reliable filtration for refineries and processing plants to remove contaminants from hydrocarbons and process fluids.', imageId: 'industry-oil-gas' },
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