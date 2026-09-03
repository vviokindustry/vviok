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
  pageH1?: string;
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
    pageH1: 'Top Rated Filter Cartridge Manufacturer & Supplier in Ahmedabad, India',
    description: `VVIOK Industry is a premier filter cartridge manufacturer in Ahmedabad, India, specializing in high-efficiency micro-filtration systems. Our diverse range includes premium PP Spun, Pleated, and PTFE cartridges designed for maximum durability. As a leading filter cartridge manufacturer in India, we utilize advanced thermal bonding and melt-blown technology to ensure zero fiber migration and absolute purity. Our solutions cater to critical sectors like pharmaceuticals, chemicals, and food processing, providing customized industrial cartridge filters that meet global performance benchmarks for precision and reliability.`,
    metaTitle: 'Filter Cartridge Manufacturer Ahmedabad | Industrial Filter Supplier India',
    metaDescription: 'Leading filter cartridge manufacturer in India. We supply premium PP spun, pleated, and PTFE cartridges for industrial water treatment and chemical processing.',
    metaKeywords: 'filter cartridge manufacturer ahmedabad, industrial filter cartridge supplier india, pp spun filter manufacturer, pleated filter supplier, microfiltration india, ss wire mesh cartridge manufacturer',
    imageId: 'product-industrial-filter',
    subcategories: [
      { name: 'PP Pleated Filter Cartridge', slug: 'pp-pleated-filter-cartridge-supplier' },
      { name: 'PP Spun Filter Cartridge', slug: 'pp-spun-filter-cartridge-supplier' },
      { name: 'PTFE Pleated Filter Cartridge', slug: 'ptfe-pleated-filter-cartridge-supplier' },
      { name: 'SS Sintered Powder Cartridge', slug: 'ss-sintered-powder-cartridge' },
      { name: 'SS Wire Mesh Cartridge', slug: 'ss-wire-mesh-cartridge' },
    ]
  },
  {
    name: 'Filter Housing',
    slug: 'filter-housing-manufacturer',
    pageH1: 'Precision Filter Housing Manufacturer in Ahmedabad, India',
    description: `As a leading filter housing manufacturer in Ahmedabad, we engineer high-performance stainless steel vessels for demanding industrial liquid and gas filtration. Our expertise spans single-bag, multi-cartridge, and duplex housings, all fabricated to ensure 100% bypass-free operation. Every unit is pressure-tested and designed for easy maintenance, ensuring long-term reliability in water treatment and chemical plants. We focus on engineering excellence, utilizing SS 304 and 316 grades to provide corrosion-resistant housing solutions for a global clientele.`,
    metaTitle: 'Filter Housing Manufacturer India | Stainless Steel Bag & Cartridge Housing',
    metaDescription: 'Trusted filter housing manufacturer in Ahmedabad. Supplying SS bag filter housing, multi-cartridge vessels, and duplex filters for industrial applications.',
    metaKeywords: 'filter housing manufacturer india, ss bag filter housing supplier, industrial cartridge housing, duplex filter manufacturer, multi bag filter housing ahmedabad',
    imageId: 'product-cartridge-housing-1',
    subcategories: [
      { name: 'Multi-Cartridge Filter Housing', slug: 'multi-cartridge-filter-housing' },
      { name: 'Bag Filter Housing', slug: 'bag-filter-housing' },
      { name: 'Duplex Filter Housing', slug: 'duplex-filter-housing-supplier' },
      { name: 'Catridge Filter Housing', slug: 'catridge-filter-housing-supplier' },
      { name: 'Vent Filter Housing', slug: 'vent-filter-housing-supplier' },
      { name: 'Strainer Filter Housing', slug: 'industrial-strainer-filter-housing-supplier' },
      { name: 'Multi-Bag Filter Housing', slug: 'industrial-multi-bag-filter-housing' },
    ]
  },
  {
    name: 'Industrial Strainer',
    slug: 'industrial-strainer-filters',
    pageH1: 'Industrial Strainer Filter Manufacturer & Supplier in Ahmedabad',
    description: `VVIOK Industry is a trusted industrial strainer filter manufacturer in Ahmedabad, India. We provide robust solutions to protect your downstream equipment from debris and coarse particles. Our range includes Basket, Conical, and Taper strainers, engineered for minimal pressure drop and maximum flow efficiency. Fabricated from high-grade stainless steel, our strainers are essential for pipeline protection in the oil, gas, and chemical sectors. We prioritize ease of cleaning and durability in every custom strainer we build for our international partners.`,
    metaTitle: 'Industrial Strainer Manufacturer India | Basket & Conical Strainer Supplier',
    metaDescription: 'Premier industrial strainer manufacturer in Ahmedabad. Providing SS basket strainers, conical strainers, and pleated strainers for equipment protection.',
    metaKeywords: 'industrial strainer manufacturer ahmedabad, basket strainer supplier india, conical strainer manufacturer, pleated strainer filter, pipeline protection strainers',
    imageId: 'product-vent-filter-1',
    subcategories: [
      { name: 'Conical Strainers', slug: 'conical-strainer-manufacturer' },
      { name: 'Basket Strainers', slug: 'basket-strainer-manufacturer' },
      { name: 'Pleated Strainers', slug: 'pleated-strainer-manufacturer' },
      { name: 'Taper Basket Strainers', slug: 'taper-basket-strainer-manufacturer' },
    ]
  },
  {
    name: 'Industrial Vessels',
    slug: 'industrial-vessels-manufacturer',
    pageH1: 'Expert Industrial Vessels Manufacturer in Ahmedabad, India',
    description: `We are a leading manufacturer of stainless steel industrial vessels, specializing in pressure vessels, air receivers, and water storage tanks. Based in Ahmedabad, our facility leverages precision welding and engineering to meet ASME and ISO standards. Our vessels are trusted for sterile water storage in pharmaceuticals and high-pressure chemical reactions. We focus on hygienic design, durability, and absolute safety, providing custom solutions that integrate seamlessly into complex industrial infrastructures globally.`,
    metaTitle: 'Industrial Vessels Manufacturer India | SS Pressure Vessel & Storage Tanks',
    metaDescription: 'Leading industrial vessels manufacturer in Ahmedabad. Supplying SS pressure vessels, RO water storage tanks, and air receiver tanks worldwide.',
    metaKeywords: 'industrial vessels manufacturer india, pressure vessel supplier ahmedabad, ss storage tank manufacturer, ro water tank supplier, air receiver tank manufacturer',
    imageId: 'product-custom-filter',
    subcategories: [
      { name: 'Pressure vessel', slug: 'pressure-vessel-supplier-india' },
      { name: 'Storage Tank', slug: 'storage-tank-supplier' },
      { name: 'Purified water storage tank', slug: 'purified-water-storage-tank' },
      { name: 'Air receiver tank', slug: 'air-receiver-tank-supplier-india' },
      { name: 'Chemical Storage Tank', slug: 'chemical-storage-tank-manufacturer-india' },
      { name: 'Oil Storage Tank', slug: 'oil-storage-tank-manufacturer-india' },
      { name: 'SS pendants', slug: 'ss-pendants' },
    ]
  }
];

export const industries = [
  {
    name: 'Pharmaceutical',
    description: 'Specializing in sanitary filtration for sterile air and high-purity process fluids in strictly regulated labs.',
    icon: HeartPulse,
  },
  {
    name: 'Water Treatment',
    description: 'Advanced micro-filtration solutions for industrial, municipal, and commercial water purification systems.',
    icon: Droplets,
  },
  {
    name: 'Chemical Processing',
    description: 'Engineered filtration for aggressive acids, solvents, and hazardous chemical processing environments.',
    icon: FlaskConical,
  },
  {
    name: 'Food & Beverage',
    description: 'Hygienic filtration systems for liquid processing, bottling, and steam clarification to meet global safety standards.',
    icon: Grape,
  },
  {
    name: 'Oil & Gas',
    description: 'High-pressure strainers and housings for refinery pipeline protection and hydrocarbon clarification.',
    icon: Fuel,
  },
  {
    name: 'Manufacturing',
    description: 'General industrial filtration to enhance machinery performance and protect critical downstream assets.',
    icon: Building,
  },
];

export const whyChooseUs = [
  {
    title: 'Precision Engineering',
    description: 'With over 23 years of combined expertise, our engineers design filtration systems that meet exact technical parameters for pressure, flow, and temperature.',
    icon: Settings,
  },
  {
    title: 'Quality Compliance',
    description: 'Strict adherence to ISO 9001:2015 and ASME standards. Every vessel and cartridge undergoes 100% in-house performance and pressure testing.',
    icon: CheckCircle,
  },
  {
    title: 'Global Export Hub',
    description: 'We export Indian engineering excellence to over 18 countries, handling all international logistics, sea-worthy packaging, and documentation.',
    icon: Globe,
  },
  {
    title: 'Bespoke Solutions',
    description: 'We specialize in total custom filtration. From unique micron ratings to specialized housing dimensions, we build what your process demands.',
    icon: Lightbulb,
  },
  {
    title: 'Industry Accredited',
    description: 'Recognized for innovation in stainless steel fabrication, our brand is synonymous with reliability in critical manufacturing sectors.',
    icon: Award,
  },
  {
    title: 'Logistics Excellence',
    description: 'Timely delivery guaranteed. We utilize robust packaging protocols to ensure your equipment arrives in perfect condition, wherever you are.',
    icon: Package,
  }
];

// Helper to generate dynamic product data for all slugs to prevent 404s
const generateProductDetails = (name: string, category: string, imageId: string, imageIds: string[] = []): ProductDetail => ({
  name: `${name} Manufacturer & Supplier`,
  application: `Industrial ${category} solutions for critical manufacturing processes, including water treatment, pharma, and chemical clarification.`,
  imageId,
  imageIds: imageIds.length > 0 ? imageIds : [imageId],
  description: `VVIOK Industry is a premier ${name} manufacturer in Ahmedabad, India. We specialize in engineering high-precision ${category} equipment designed for maximum durability and efficiency. Our ${name} is trusted by global industrial leaders for its robust construction and superior performance in demanding environments. We utilize premium SS 304 and 316L materials to ensure zero corrosion and absolute structural integrity. Our commitment to quality and engineering excellence makes us a preferred technical partner for industries across 18 countries.`,
  detailedSpecs: `Technical Specifications for ${name}:
- Material of Construction: SS 304, SS 316, SS 316L
- Design Code: ASME Section VIII Div 1 & ISO 9001:2015
- Operating Pressure: Designed as per process requirements (up to 20 bar)
- Operating Temperature: -20°C to 150°C
- Surface Finish: Mirror Polished / Electropolished (0.4 to 0.8 Ra)
- Connection Types: Flanged, Triclover, NPT/BSP Threaded
- Sealing: FDA Grade Silicon, EPDM, Viton, PTFE

Our engineering team provides full technical documentation, including pressure test reports and material test certificates (MTC), ensuring complete transparency and compliance with international standards.`,
  features: [
    'ASME compliant design and fabrication',
    'High corrosion resistance with premium SS grades',
    'Customizable dimensions to fit existing pipelines',
    'Zero bypass engineering for maximum efficiency',
    'Easy maintenance and tool-free cleaning designs',
    '100% hydro-tested for structural integrity'
  ],
  faqs: [
    { question: `Do you provide custom sizes for ${name}?`, answer: 'Yes, we specialize in bespoke engineering. We can customize every dimension and specification according to your specific industrial parameters.' },
    { question: `What documentation is provided with ${name}?`, answer: 'We provide comprehensive documentation including Material Test Certificates (MTC), Pressure Test Certificates, and dimensional drawings.' },
    { question: 'Is international shipping available?', answer: 'Absolutely. We export to over 18 countries with sea-worthy packaging and full logistics support.' }
  ],
  metaTitle: `${name} Manufacturer Ahmedabad | Industrial ${category} Supplier India`,
  metaDescription: `Leading ${name} manufacturer in India. We supply high-performance ${category} solutions for industrial water storage and chemical processing.`,
  metaKeywords: `${name.toLowerCase()}, industrial ${category.toLowerCase()}, ss equipment manufacturer, vviok industry ahmedabad`
});

export const products: Record<string, ProductDetail[]> = {
  'pp-pleated-filter-cartridge-supplier': [generateProductDetails('PP Pleated Filter Cartridge', 'Filter Cartridge', 'product-pp-pleated-1', ['product-pp-pleated-1', 'product-pp-pleated-2'])],
  'pp-spun-filter-cartridge-supplier': [generateProductDetails('PP Spun Filter Cartridge', 'Filter Cartridge', '/uploads/PP%20Spun%20Filter%20Cartridge%20Manufacturer%20in%20Ahmedabad.png', ['/uploads/PP%20Spun%20Filter%20Cartridge%20Manufacturer%20in%20Ahmedabad.png'])],
  'ptfe-pleated-filter-cartridge-supplier': [generateProductDetails('PTFE Pleated Filter Cartridge', 'Filter Cartridge', 'product-ptfe-pleated-1', ['product-ptfe-pleated-1', 'product-ptfe-pleated-2'])],
  'ss-sintered-powder-cartridge': [generateProductDetails('SS Sintered Powder Cartridge', 'Filter Cartridge', 'product-ss-sintered-1', ['product-ss-sintered-1', 'product-ss-sintered-2', 'product-ss-sintered-3'])],
  'ss-wire-mesh-cartridge': [generateProductDetails('SS Wire Mesh Cartridge', 'Filter Cartridge', 'product-ss-wire-mesh-1', ['product-ss-wire-mesh-1', 'product-ss-wire-mesh-2'])],
  'multi-cartridge-filter-housing': [generateProductDetails('Multi-Cartridge Filter Housing', 'Filter Housing', 'product-multi-cartridge-1', ['product-multi-cartridge-1', 'product-multi-cartridge-2', 'product-multi-cartridge-3'])],
  'bag-filter-housing': [{
    name: 'Bag Filter Housing',
    pageH1: 'Bag Filter Housing Manufacturer & Supplier in India',
    application: 'Precision liquid-solid clarification, high-flow chemical process filtration, and industrial water treatment systems.',
    imageId: '/uploads/Bag%20Filter%20Housing%20manufacturer%20supplier%20in%20india.png',
    imageIds: [
      '/uploads/Bag%20Filter%20Housing%20manufacturer%20supplier%20in%20india.png',
      '/uploads/Multi-Bag%20Filter%20Housing%20manufacturer%20supplier%20in%20India%20vviok%20industry.png',
      '/uploads/Multi-Bag%20Filter%20Housing%20manufacturer%20supplier%20in%20ahmedabad%20vviok%20industry.png',
      'product-bag-housing-1'
    ],
    description: `VVIOK Industry is an established, premier bag filter housing manufacturer and trusted bag filter housing supplier in India, delivering world-class liquid filtration and process clarification systems to chemical, pharmaceutical, petrochemical, water treatment, agrochemical, and food processing plants worldwide. Engineered for high flow capacity, minimal pressure drop, and exceptional dirt-holding efficiency, our precision-fabricated stainless steel bag filter housing assemblies ensure 100% bypass-free separation, protecting downstream process equipment and guaranteeing strict compliance with international manufacturing quality benchmarks.

As a renowned industrial bag filter housing manufacturer, we engineer and fabricate an extensive portfolio of filtration vessels, ranging from compact single bag filter housing models for pilot plants and localized batch processes to heavy-duty multi bag filter housing assemblies built for high-volume industrial pipelines. When process applications require higher flow capacity and extended filtration cycles, our multi-basket series provides unmatched operational flexibility. We manufacture modular single-basket units as well as multi-basket vessels, including precision-engineered 2 bag filter housing setups for continuous medium-capacity flows and heavy-duty 4 bag filter housing vessels engineered for heavy solid-loading streams up to 160 m³/hr and higher without interrupting line pressure. For high-throughput industrial complexes, our multi bag filter housing line extends up to 12-bag and 24-bag vessels tailored to client specifications.

Every industrial bag filter vessel designed by VVIOK Industry is manufactured in strict compliance with ASME Section VIII Division 1, PED 2014/68/EU, and ISO 9001:2015 engineering standards. Manufactured from certified SS 304, SS 316, SS 316L, or specialty alloys like Duplex Stainless Steel, our stainless steel bag filter housing systems offer superior mechanical strength and outstanding resistance against corrosive chemicals, hot process fluids, and volatile solvents. Each unit features internal precision-machined bag seats, heavy-duty stainless steel perforated retainer baskets, top hold-down compression rings, and quick-opening eye-bolt or davit-arm cover lifting mechanisms for rapid, tool-less bag changeovers that drastically reduce operational downtime.

As a dedicated bag filter housing supplier to global markets across more than 18 countries, VVIOK Industry caters to versatile filtration requirements across micron ratings from 0.5 to 1000 microns. Whether you need a standard Size 1 or Size 2 single bag filter housing for fine chemical clarification, a duplex continuous-duty system, or a high-capacity 2 bag filter housing or 4 bag filter housing skid with differential pressure transmitters, automated valves, and sanitary tri-clamp or flanged connections, we deliver tailor-made engineering. Our multi bag filter housing systems are extensively utilized in solvent filtration, pre-RO water treatment, resin processing, paints, coatings, edible oil refining, and industrial effluent recycling.

Every industrial bag filter housing manufactured at our advanced Ahmedabad production facility undergoes rigorous quality assurance, including 100% hydrostatic testing up to 1.5 times design pressure, dye-penetrant examination, pneumatic leak checks, and optional third-party inspection (TUV, BVQI, SGS). By partnering with VVIOK Industry—a top-tier bag filter housing manufacturer and bag filter housing supplier—you receive guaranteed filtration efficiency, turnkey technical support, complete Material Test Certificates (MTC), and export-compliant sea-worthy packaging.`,
    detailedSpecs: `Comprehensive Engineering Specifications for Industrial Bag Filter Housings:

1. Design Codes & Compliance Standards:
- ASME Section VIII Div 1 (Boiler and Pressure Vessel Code), EN 13445, PED 2014/68/EU, Good Manufacturing Practice (GMP) compliant, ISO 9001:2015 quality standards.

2. Vessel Types & Structural Configurations:
- Single Bag Filter Housing: Standard Size 1 (Ø 7" x 17" L), Size 2 (Ø 7" x 32" L), Size 3 (Ø 4" x 9" L), and Size 4 (Ø 4" x 15" L).
- 2 Bag Filter Housing: Dual-basket vessel handling flow rates up to 80 m³/hr, ideal for continuous medium process pipelines.
- 4 Bag Filter Housing: Four-basket vessel accommodating up to 160 m³/hr with optimized hydraulic flow distribution.
- Multi Bag Filter Housing: High-flow multi-basket configurations holding 6, 8, 12, and up to 24 bags for heavy chemical and water clarification up to 1,000+ m³/hr.

3. Materials of Construction (MOC):
- Stainless Steel: SS 304, SS 304L, SS 316, SS 316L, and Duplex Stainless Steel 2205.
- Carbon Steel: IS 2062 Grade B / ASTM A106 with corrosion-resistant industrial epoxy coatings.

4. Flow, Pressure & Operating Limits:
- Design Pressure: 6 Bar, 10 Bar, 16 Bar, up to 25 Bar (ASME stamped on request).
- Operating Temperature: -20°C to +200°C (depending on gasket selection).
- Flow Capacity: 5 m³/hr (Single Bag) to 1,000+ m³/hr (Multi-Bag assemblies).

5. Internal Baskets & Sealing Systems:
- Restrainer Baskets: Heavy-duty perforated stainless steel 316 sheet with optional inner wire mesh liner.
- Sealing: Positive hold-down spring mechanism ensuring 360-degree axial pressure and zero fluid bypass.
- Gaskets: Food-grade Silicone, EPDM, Viton (FKM), Nitrile, and PTFE encapsulated.

6. Closures, Connections & Cover Lift Aids:
- Cover Closure: High-strength swing eye bolts with brass/SS hex nuts, clamp closure for sanitary lines.
- Cover Lifting Mechanism: Davit arm with handwheel, counterbalanced spring-assist hinge, or hydraulic lifter for multi-bag covers.
- Nozzle Connections: ANSI B16.5 150# / 300# Flanged, DIN, BSP/NPT threaded, or Tri-Clamp ferrules.
- Accessories: Differential pressure gauges (DPG), top air vent valve, bottom drain port, and adjustable heavy-duty support legs.`,
    features: [
      'Engineered by leading bag filter housing manufacturer with ASME Section VIII compliance',
      'Available in single bag filter housing, 2 bag filter housing, 4 bag filter housing, and multi bag filter housing units',
      'Fabricated from high-grade stainless steel (SS 304, SS 316, SS 316L, and Duplex Steel)',
      '100% bypass-free positive bag hold-down seal mechanism for micron ratings from 0.5 to 1000 µm',
      'Quick-opening swing bolt and davit arm cover mechanism for fast, tool-free bag replacement',
      'Equipped with heavy-gauge stainless steel perforated internal support baskets',
      'Mirror polished sanitary finishes (Ra < 0.4 µm) or industrial acid-pickled and passivated surfaces',
      '100% hydro-tested to 1.5x design pressure with complete Material Test Certificates (MTC)'
    ],
    specifications: {
      'Housing Configurations': 'Single Bag Housing (Size 1-4), 2 Bag Filter Housing, 4 Bag Filter Housing, Multi-Bag (up to 24 Bags)',
      'Material of Construction (MOC)': 'SS 304, SS 304L, SS 316, SS 316L, Duplex 2205, Carbon Steel',
      'Operating Flow Rate': '5 m³/hr to 1,000+ m³/hr (custom engineered)',
      'Design Pressure Rating': 'Standard 10 Bar / 16 Bar (Custom up to 25 Bar ASME)',
      'Design Temperature Range': '-20°C to +200°C (depending on elastomer material)',
      'Filter Bag Compatibility': 'Size 1 (7"x17"), Size 2 (7"x32"), Size 3 (4"x9"), Size 4 (4"x15")',
      'Micron Retention Rating': '0.5 Micron to 1000 Microns',
      'Cover Lifting System': 'Davit Arm, Spring Assisted Hinge, or Hydraulic Lift Mechanism',
      'Inlet / Outlet Connections': '1" to 12" ANSI 150# / 300# Flanged, DIN, BSP/NPT, Tri-Clamp',
      'Surface Finishing': 'Internal Mirror Polish (Ra < 0.4 µm), External Pickled & Passivated / Bead Blasted',
      'Testing & Certification': '100% Hydrostatic Test, Dye Penetrant Test, Radiography, ASME / ISO 9001:2015'
    },
    faqs: [
      {
        question: 'What is the difference between single bag filter housing and multi bag filter housing?',
        answer: 'A single bag filter housing accommodates one filter bag and is ideal for low-to-medium flow rates (up to 40 m³/hr) in batch processing or compact installations. A multi bag filter housing houses multiple filter bags (such as 2 bag filter housing, 4 bag filter housing, up to 24 bags) in a single vessel, handling high continuous flow rates up to 1,000+ m³/hr with extended service intervals and higher solid-holding capacity.'
      },
      {
        question: 'Why choose a stainless steel bag filter housing over plastic or carbon steel vessels?',
        answer: 'A stainless steel bag filter housing (fabricated from SS 304 or SS 316L) provides superior mechanical strength, high temperature tolerance up to 200°C, and exceptional resistance against corrosive chemicals, solvents, and acidic streams. In addition, stainless steel can be sanitary polished (Ra < 0.4 µm) to prevent bacterial growth in pharmaceutical, food, and high-purity water applications.'
      },
      {
        question: 'When should our plant install a 2 bag filter housing or 4 bag filter housing?',
        answer: 'A 2 bag filter housing is the optimal choice when process flow exceeds the capacity of a single bag (typically 40 to 80 m³/hr) or when you want longer cycle times between filter replacements. A 4 bag filter housing is designed for high-capacity industrial lines (80 to 160 m³/hr) with heavy dirt loading, ensuring uninterrupted filtration, lower pressure drops, and balanced fluid distribution.'
      },
      {
        question: 'How does VVIOK Industry ensure zero bypass in industrial bag filter systems?',
        answer: 'As an experienced bag filter housing manufacturer, we design our vessels with precision-machined internal bag collars and heavy-duty mechanical hold-down spring assemblies. When the vessel cover is clamped down, the hold-down ring applies uniform 360-degree axial pressure on the filter bag top ring, eliminating bypass even during pressure surges.'
      },
      {
        question: 'What quality testing and documentation are supplied with each bag filter housing?',
        answer: 'Every bag filter housing is 100% hydrostatically tested at 1.5 times the design working pressure and inspected for weld integrity via dye-penetrant testing. As a certified bag filter housing supplier, VVIOK Industry provides comprehensive documentation packages including Material Test Certificates (EN 10204 3.1 MTC), hydrostatic test certificates, dimensional drawings, and operation manuals.'
      }
    ],
    metaTitle: 'Bag Filter Housing Manufacturer & Supplier in India | SS Multi & Single Bag Filters',
    metaDescription: 'Leading bag filter housing manufacturer and supplier in India. We manufacture stainless steel bag filter housing, single bag, 2 bag, 4 bag, and multi bag filter housing systems.',
    metaKeywords: 'bag filter housing manufacturer, bag filter housing supplier, stainless steel bag filter housing, multi bag filter housing, industrial bag filter, single bag filter housing, 4 bag filter housing, 2 bag filter housing, bag filter housing india'
  }],
  'duplex-filter-housing-supplier': [generateProductDetails('Duplex Filter Housing', 'Filter Housing', 'product-duplex-housing-1', ['product-duplex-housing-1', 'product-duplex-housing-2'])],
  'catridge-filter-housing-supplier': [generateProductDetails('Cartridge Filter Housing', 'Filter Housing', 'product-cartridge-housing-1', ['product-cartridge-housing-1', 'product-cartridge-housing-2'])],
  'vent-filter-housing-supplier': [generateProductDetails('Vent Filter Housing', 'Filter Housing', 'product-vent-housing-1', ['product-vent-housing-1', 'product-vent-housing-2', 'product-vent-housing-3'])],
  'industrial-strainer-filter-housing-supplier': [generateProductDetails('Strainer Filter Housing', 'Filter Housing', 'product-strainer-housing-1', ['product-strainer-housing-1', 'product-strainer-housing-2'])],
  'industrial-multi-bag-filter-housing': [generateProductDetails('Multi-Bag Filter Housing', 'Filter Housing', '/uploads/Multi-Bag%20Filter%20Housing%20manufacturer%20supplier%20in%20India%20vviok%20industry.png', ['/uploads/Multi-Bag%20Filter%20Housing%20manufacturer%20supplier%20in%20India%20vviok%20industry.png', '/uploads/Multi-Bag%20Filter%20Housing%20manufacturer%20supplier%20in%20ahmedabad%20vviok%20industry.png'])],
  'conical-strainer-manufacturer': [generateProductDetails('Conical Strainer', 'Industrial Strainer', 'product-conical-strainer')],
  'basket-strainer-manufacturer': [generateProductDetails('Basket Strainer', 'Industrial Strainer', 'product-vent-filter-1')],
  'pleated-strainer-manufacturer': [generateProductDetails('Pleated Strainer', 'Industrial Strainer', 'product-pleated-strainer')],
  'taper-basket-strainer-manufacturer': [generateProductDetails('Taper Basket Strainer', 'Industrial Strainer', 'product-vent-filter-1')],
  'pressure-vessel-supplier-india': [generateProductDetails('Pressure Vessel', 'Industrial Vessel', '/uploads/pressure%20tank.jpeg')],
  'storage-tank-supplier': [generateProductDetails('Storage Tank', 'Industrial Vessel', '/uploads/Storage%20Tank%20Manufacturer%20-Vviok%20industry.png', ['/uploads/Storage%20Tank%20Manufacturer%20-Vviok%20industry.png'])],
  'purified-water-storage-tank': [generateProductDetails('Purified Water Storage Tank', 'Industrial Vessel', 'product-purified-water-tank')],
  'air-receiver-tank-supplier-india': [generateProductDetails('Air Receiver Tank', 'Industrial Vessel', '/uploads/Air%20receiver%20tank%20manufacturer%20supplier%20in%20india%20-vviok%20industry.jpeg')],
  'chemical-storage-tank-manufacturer-india': [{
    name: 'Chemical Storage Tank',
    pageH1: 'Chemical Storage Tank manufacturer',
    application: 'Heavy-duty containment and safe storage for corrosive acids, alkalis, industrial solvents, and bulk liquid chemicals.',
    imageId: 'product-chemical-storage-tank',
    imageIds: ['product-chemical-storage-tank', '/uploads/Storage%20Tank%20Manufacturer%20-Vviok%20industry.png', '/uploads/pressure%20tank.jpeg'],
    description: `VVIOK Industry is a premier Chemical Storage Tank manufacturer and Supplier in india, delivering world-class liquid storage and process containment systems for chemical, pharmaceutical, petrochemical, agrochemical, and water treatment industries. As a reputable acid storage tank manufacturer and custom vessel engineering specialist, we design and fabricate high-integrity tanks engineered to withstand high temperatures, aggressive chemical corrosion, hydrostatic stress, and extreme operating pressures.

Whether your facility requires a compact 100 gallon chemical tank for precision batch dosing and pilot plants, or high-capacity bulk chemical storage tanks exceeding 50,000 liters for heavy industrial processing, our custom-engineered vessels deliver unmatched structural stability, safety, and longevity. 

Our product portfolio covers heavy-duty Stainless Steel (SS 304, SS 316, SS 316L, Duplex Steel) and high-density polymer structures like hdpe chemical storage tank manufacturer solutions for non-metallic acid compatibility. To ensure secondary containment and zero hazard leakage in sensitive manufacturing environments, we specialize in certified double wall chemical tanks equipped with leak detection annular spaces, level transmitters, vent scrubbers, and pressure relief assemblies. Every tank is built strictly conforming to ASME Section VIII, ASTM D1998, BS EN 14015, and ISO 9001:2015 quality standards.`,
    detailedSpecs: `Comprehensive Engineering Specifications for Chemical Storage Tanks:

1. Design Standards & Compliance:
- ASME Section VIII Div 1, API 650, BS 4994, ASTM D1998, Good Manufacturing Practice (GMP) compliant.

2. Material Grades & Construction:
- Stainless Steel: SS 304, SS 304L, SS 316, SS 316L, SS 316Ti, Duplex Stainless Steel 2205.
- Non-Metallic & Thermoplastics: High-Density Polyethylene (HDPE), Polypropylene (PP), FRP / GRP lined, PTFE / PFA lined for extreme acid resistance.
- Configuration Options: Vertical cylindrical, horizontal cylindrical, flat bottom, dished bottom, conical bottom, skid-mounted dosing units.

3. Capacity & Size Range:
- Standard Range: 100 Gallon chemical tank (approx 380 Liters) to 50,000+ Gallons (200,000 Liters) bulk chemical storage tanks.
- Wall Thickness: 4 mm to 25 mm based on specific gravity of stored chemical and structural FEA analysis.

4. Containment & Safety Types:
- Single Wall Atmospheric Storage Tanks
- Double Wall Chemical Tanks (Self-bunded with 110% secondary containment)
- Jacketed / Limpet Coil Reaction and Temperature-Controlled Storage Tanks
- Insulated and Cladded vessels for temperature preservation.

5. Surface Treatment & Internal Finishes:
- Mirror Polished / Electro-polished finish (Ra < 0.4 µm) for sanitary applications.
- Acid Pickling and Passivation according to ASTM A380 standards.
- Anti-corrosive chemical barrier coatings.

6. Standard Accessories & Instrumentation:
- Heavy-duty top manway with viton / PTFE chemical-resistant gaskets.
- Flanged inlet/outlet nozzles (ANSI 150# / 300# / DIN / Tri-Clamp).
- Level indicators (Magnetic level gauge, ultrasonic level transmitter, radar sensors).
- Pressure relief valve (PRV), flame arrestor, breather vent with scrubber connection.
- Lifting lugs, earthing bosses, anchor chairs, and ladder with safety cage.`,
    features: [
      'ASME Section VIII & API 650 compliant engineering',
      'Engineered for aggressive acids, alkalis, solvents, and hazardous liquids',
      'Available in SS 316L, SS 304, Duplex, and HDPE/PP materials',
      'Advanced double wall chemical tanks for 100% secondary containment and leak prevention',
      'From 100 gallon chemical tank dosing systems to 50,000+ gallon bulk chemical storage tanks',
      'Precision welded with 100% radiographic / dye-penetrant testing and hydrostatic testing',
      'Corrosion-resistant pickling & passivation finish for maximum operational lifespan',
      'Complete documentation including Material Test Certificates (MTC) and Hydro-test reports'
    ],
    specifications: {
      'Storage Capacity': '100 Gallon (380 L) to 50,000+ Gallons (200,000 Liters)',
      'Material of Construction': 'SS 304, SS 316, SS 316L, Duplex 2205, HDPE / PP',
      'Tank Configuration': 'Vertical Cylindrical / Horizontal / Conical Bottom',
      'Design Pressure': 'Atmospheric up to 10 Bar (Custom pressure designs)',
      'Operating Temperature': '-40°C to +200°C (depending on material & lining)',
      'Containment Options': 'Single Wall / Double Wall (Bunded) with Leak Detection',
      'Compatible Media': 'Sulfuric Acid, Hydrochloric Acid, Nitric Acid, Caustic Soda, Solvents, Effluents',
      'Surface Finishing': 'Internal mirror polish / electropolish Ra < 0.4µm, External pickled & passivated',
      'Testing & Certification': '100% Hydrostatic Test, Dye Penetrant (DP), Radiography, ASME / ISO 9001'
    },
    faqs: [
      {
        question: 'What materials are best suited for acid and hazardous chemical storage tanks?',
        answer: 'For concentrated acids and harsh industrial solvents, high-grade Stainless Steel (SS 316L, Duplex 2205) or lined thermoplastics (HDPE, PP, PTFE) are recommended. As an experienced acid storage tank manufacturer, VVIOK Industry evaluates your chemical concentration, operating temperature, and pressure to select the most cost-effective and corrosion-resistant material.'
      },
      {
        question: 'What are the safety advantages of double wall chemical tanks?',
        answer: 'Double wall chemical tanks feature an inner tank for chemical containment and an outer tank providing 110% secondary containment. This prevents hazardous spills, protects ground water, complies with environmental EPA regulations, and allows continuous interstitial monitoring for early leak detection without interrupting operations.'
      },
      {
        question: 'Can you fabricate custom 100 gallon chemical tanks for dosing systems?',
        answer: 'Yes! We manufacture precision 100 gallon chemical tanks and custom batch dosing tanks equipped with mixer mountings, calibration scales, level gauges, and chemical metering pump connections tailored to water treatment and chemical dosing skids.'
      },
      {
        question: 'Do you manufacture large bulk chemical storage tanks for industrial plants?',
        answer: 'Yes, VVIOK Industry manufactures bulk chemical storage tanks up to 200,000 liters. We provide complete turnkey fabrication including structural reinforcement, cat ladders, handrails, agitation nozzles, and export-compliant sea-worthy packaging.'
      }
    ],
    metaTitle: 'Chemical Storage Tank manufacturer and Supplier in india',
    metaDescription: 'VVIOK Industry is a trusted Chemical Storage Tank Manufacturer & Supplier in India, offering high-quality storage tanks designed for safe and reliable handling of various chemicals and industrial liquids.',
    metaKeywords: 'chemical storage tank manufacturer, chemical storage tank manufacturer and supplier in india, 100 gallon chemical tank, double wall chemical tanks, bulk chemical storage tanks, acid storage tank manufacturer, hdpe chemical storage tank manufacturer, ss chemical tank india'
  }],
  'oil-storage-tank-manufacturer-india': [{
    name: 'Oil Storage Tank',
    pageH1: 'Oil Storage Tank manufacturer',
    application: 'Heavy-duty storage and safe bulk containment for fuel oil, diesel, crude oil, lubricating oils, edible oils, and petrochemical liquids.',
    imageId: 'product-oil-storage-tank',
    imageIds: ['product-oil-storage-tank', '/uploads/Storage%20Tank%20Manufacturer%20-Vviok%20industry.png', '/uploads/pressure%20tank.jpeg'],
    description: `VVIOK Industry is a distinguished Oil Storage Tank manufacturer and Supplier in india, delivering state-of-the-art liquid containment systems for petroleum refineries, edible oil refineries, power stations, automotive manufacturing, and chemical processing facilities. Recognized among the premier oil storage tank manufacturers in india, our engineering facility designs and manufactures robust atmospheric, pressurized, and underground oil storage tanks engineered to meet stringent safety, environmental, and thermal containment demands.

As one of the most reliable oil tank manufacturers and certified oil tank suppliers, we provide custom-built containment solutions ranging from factory-assembled skid tanks to monumental bulk oil storage tanks exceeding 500,000 liters. Whether your installation requires heavy fuel oil (HFO) storage with steam heating coils, diesel generator day tanks, hydraulic fluid reservoirs, or sanitary grade stainless steel vessels for edible vegetable oils, our vessels deliver unmatched longevity and structural integrity.

When choosing an industrial oil storage tank in india, partnering with established oil tank manufacturers in india guarantees compliance with rigorous international design codes such as API 650, API 620, UL 142, and ASME Section VIII. Our tanks feature precision submerged arc welding, specialized anti-corrosive epoxy internal linings, flame arrestors, breather valves, and double-wall self-bunded safety containment to eliminate spill hazards and ensure compliance with environmental and fire safety regulations.`,
    detailedSpecs: `Comprehensive Engineering Specifications for Industrial Oil Storage Tanks:

1. Design Codes & Engineering Standards:
- API 650 (Welded Tanks for Oil Storage), API 620 (Low-Pressure Storage Tanks), API 653, ASME Section VIII Div 1, UL 142 (Steel Aboveground Tanks for Flammable and Combustible Liquids), IS 803 / IS 2825.

2. Materials of Construction (MOC):
- Carbon Steel / Mild Steel: IS 2062 Grade B, ASTM A36, ASTM A516 Grade 70 (for pressure and temperature resistance).
- Stainless Steel: SS 304, SS 304L, SS 316, SS 316L (for high-purity edible oils, biodiesel, and corrosive petrochemical blends).
- Lining & Coatings: Food-grade epoxy lining, coal tar epoxy, polyurethane external protective coatings.

3. Capacity & Structural Configurations:
- Capacity Range: 500 Liters to 500,000+ Liters (Bulk oil storage tanks).
- Orientations: Vertical Cylindrical with flat/conical bottom, Horizontal Cylindrical with saddle supports, Underground double-wall tanks.
- Roof Types: Self-supporting conical roof, dome roof, floating roof (internal/external for volatile vapor minimization).

4. Heating, Insulation & Thermal Systems:
- Internal steam heating coils (SS / Carbon Steel seamless schedule pipes) for high-viscosity furnace oil and bitumen.
- Electric immersion heating bundles with digital thermostatic control panels.
- Mineral wool / Rockwool insulation with aluminum or SS 304 weather-proof cladding.

5. Safety, Venting & Fire Protection Accessories:
- Free vents and pressure-vacuum relief valves (PVRV) with integrated flame arrestors.
- Double-wall interstitial leak detection sensors and annular space monitoring.
- Foam pourer systems, fire water cooling ring headers, and earthing bosses for static discharge protection.

6. Inspection, Testing & Quality Assurance:
- 100% Radiographic Testing (RT) and Ultrasonic Testing (UT) on shell and weld seams.
- Hydrostatic leak testing, pneumatic pressure testing, and vacuum box testing on bottom plates.
- Third-party inspection (TUV, BVQI, DNV, SGS) and comprehensive Material Test Certificates (MTC).`,
    features: [
      'Engineered in accordance with API 650, API 620, and ASME Section VIII standards',
      'Available from leading oil storage tank manufacturers in india with complete turnkey fabrication',
      'Wide capacity range from modular fuel tanks to massive bulk oil storage tanks up to 500,000+ Liters',
      'Manufactured in IS 2062 Carbon Steel, ASTM A516 Gr 70, and sanitary SS 304/316 Stainless Steel',
      'Integrated internal steam/thermal heating coils for viscous oils, bitumen, and furnace fuel',
      'Double-wall bunded containment configurations for 110% leak protection and environmental safety',
      'High-performance anti-corrosive external epoxy coatings and specialized internal tank linings',
      'Equipped with flame arrestors, breather valves, radar level transmitters, and safety ladder cages'
    ],
    specifications: {
      'Capacity Range': '500 Liters up to 500,000+ Liters (Custom bulk capacities)',
      'Design Standards': 'API 650, API 620, UL 142, ASME Section VIII, IS 803',
      'Material of Construction': 'Carbon Steel (IS 2062 / ASTM A36 / A516 Gr 70), SS 304, SS 316L',
      'Orientation': 'Vertical Cylindrical / Horizontal Saddle Mounted / Underground',
      'Heating System Options': 'Internal Steam Heating Coil / Electric Immersion Heater / Thermal Oil Coil',
      'Containment Type': 'Single Wall / Double Wall (Self-Bunded) with Leak Detection',
      'Operating Temperature': '-20°C to +250°C (depending on heating and insulation)',
      'Design Pressure': 'Atmospheric to 5 Bar (Pressurized fuel storage vessels)',
      'Applicable Media': 'Furnace Oil, Diesel (HSD), LDO, Crude Oil, Transformer Oil, Edible Oils, Hydraulic Oils',
      'Testing & Certification': 'Hydrostatic Testing, Radiographic Examination, Vacuum Box Test, Dye Penetrant'
    },
    faqs: [
      {
        question: 'What materials and standards are used by oil storage tank manufacturers in india?',
        answer: 'Reputable oil storage tank manufacturers in india use high-tensile carbon steel (ASTM A36, IS 2062) or stainless steel (SS 304, SS 316L) conforming to API 650, API 620, UL 142, and ASME Section VIII codes to ensure structural safety, leak-proof welding, and long operating lifespans.'
      },
      {
        question: 'Why are heating coils required in bulk oil storage tanks?',
        answer: 'High-viscosity oils such as furnace oil, heavy fuel oil (HFO), and crude oil solidify or become difficult to pump at lower ambient temperatures. Installing internal steam heating coils or electric immersion bundles maintains optimum fluid viscosity for smooth pumping and plant operations.'
      },
      {
        question: 'What are the safety advantages of double-wall oil tanks from certified oil tank suppliers?',
        answer: 'Double-wall oil storage tanks feature an outer secondary containment that holds up to 110% of the inner tank capacity. This prevents environmental soil contamination, minimizes fire hazards, complies with EPA/Pollution Control Board norms, and features continuous leak-monitoring sensors.'
      },
      {
        question: 'Do you fabricate customized oil storage tanks in india for edible oils and food processing?',
        answer: 'Yes, VVIOK Industry is one of the premier oil tank manufacturers in india fabricating sanitary grade SS 304 and SS 316L tanks with internal mirror finishes (Ra < 0.4 µm), CIP cleaning nozzles, and nitrogen blanketing for refined edible oils, palm oil, and food-grade liquids.'
      }
    ],
    metaTitle: 'Oil Storage Tank manufacturer and Supplier in india',
    metaDescription: 'VVIOK Industry is a trusted Oil Storage Tank Manufacturer & Supplier in India, offering high-quality storage tanks designed for safe and reliable handling of various chemicals and industrial liquids.',
    metaKeywords: 'oil storage tank manufacturer, bulk oil storage tanks, oil tank suppliers, oil tank manufacturers, oil storage tank manufacturers in india, oil tank manufacturers in india, oil storage tank in india, industrial oil tanks, fuel storage tank india'
  }],
  'ss-pendants': [generateProductDetails('SS Pendants', 'Industrial Vessel', 'product-ss-pendants')],
};
