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
  'bag-filter-housing': [generateProductDetails('Bag Filter Housing', 'Filter Housing', 'product-bag-housing-1')],
  'duplex-filter-housing-supplier': [generateProductDetails('Duplex Filter Housing', 'Filter Housing', 'product-duplex-housing-1', ['product-duplex-housing-1', 'product-duplex-housing-2'])],
  'catridge-filter-housing-supplier': [generateProductDetails('Cartridge Filter Housing', 'Filter Housing', 'product-cartridge-housing-1', ['product-cartridge-housing-1', 'product-cartridge-housing-2'])],
  'vent-filter-housing-supplier': [generateProductDetails('Vent Filter Housing', 'Filter Housing', 'product-vent-housing-1', ['product-vent-housing-1', 'product-vent-housing-2', 'product-vent-housing-3'])],
  'industrial-strainer-filter-housing-supplier': [generateProductDetails('Strainer Filter Housing', 'Filter Housing', 'product-strainer-housing-1', ['product-strainer-housing-1', 'product-strainer-housing-2'])],
  'industrial-multi-bag-filter-housing': [generateProductDetails('Multi-Bag Filter Housing', 'Filter Housing', 'product-multi-bag-1', ['product-multi-bag-1', 'product-multi-bag-2'])],
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
    imageId: '/uploads/Storage%20Tank%20Manufacturer%20-Vviok%20industry.png',
    imageIds: ['/uploads/Storage%20Tank%20Manufacturer%20-Vviok%20industry.png', '/uploads/pressure%20tank.jpeg'],
    description: `VVIOK Industry is a premier **Chemical Storage Tank manufacturer and Supplier in india**, delivering world-class liquid storage and process containment systems for chemical, pharmaceutical, petrochemical, agrochemical, and water treatment industries. As a reputable **acid storage tank manufacturer** and custom vessel engineering specialist, we design and fabricate high-integrity tanks engineered to withstand high temperatures, aggressive chemical corrosion, hydrostatic stress, and extreme operating pressures.

Whether your facility requires a compact **100 gallon chemical tank** for precision batch dosing and pilot plants, or high-capacity **bulk chemical storage tanks** exceeding 50,000 liters for heavy industrial processing, our custom-engineered vessels deliver unmatched structural stability, safety, and longevity. 

Our product portfolio covers heavy-duty Stainless Steel (SS 304, SS 316, SS 316L, Duplex Steel) and high-density polymer structures like **hdpe chemical storage tank manufacturer** solutions for non-metallic acid compatibility. To ensure secondary containment and zero hazard leakage in sensitive manufacturing environments, we specialize in certified **double wall chemical tanks** equipped with leak detection annular spaces, level transmitters, vent scrubbers, and pressure relief assemblies. Every tank is built strictly conforming to ASME Section VIII, ASTM D1998, BS EN 14015, and ISO 9001:2015 quality standards.`,
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
  'ss-pendants': [generateProductDetails('SS Pendants', 'Industrial Vessel', 'product-ss-pendants')],
};
