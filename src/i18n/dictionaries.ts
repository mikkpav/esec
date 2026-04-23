import type { Locale } from './locale';

export type AppDictionary = {
    /** `<title>` and primary SEO / social title */
    htmlTitle: string;
    /** `<meta name="description">` and `og:description` / `twitter:description` */
    metaDescription: string;
    heroH1: string;
    heroSubtitle: string;
    ctaProducts: string;
    ctaContact: string;
    productsHeading: string;
    companyBlurb: string;
    aboutP1: string;
    aboutP2: string;
    solutions: string[];
    galleryAltBuilding: string;
    galleryAltFloor: string;
    galleryAltSkyline: string;
    surfaceFixHeading: string;
    surfaceFixLead: string;
    comparisonTitleGreen: string;
    comparisonTitleRed: string;
    /** Plain text; em around “re-manufacturing” is added in the UI for ET only where needed */
    comparisonDescGreenEtBefore: string;
    comparisonDescGreenEm: string;
    comparisonDescGreenEtAfter: string;
    comparisonDescGreenEn: string;
    comparisonDescRed: string;
    surfaceFixPro: string[];
    surfaceFixCon: string[];
    gallerySurfaceAlt: string;
    contactHeading: string;
    contactPhoneTitle: string;
    contactEmailTitle: string;
    footerAddress: string;
    contactCatHeadline: string;
    contactCatSub: string;
    contactCatCta: string;
    productConcrete: ProductCopy;
    productGrp: ProductCopy;
    productExtra: ProductCopy;
};

export type ProductCopy = {
    title: string;
    descriptionPlain: string;
    grpDescription: {
        beforeEm: string;
        em: string;
        afterEm: string;
    };
    productItems: string[];
};

const productConcreteEt: ProductCopy = {
    title: 'BETOON­TORUSTIKUD',
    descriptionPlain:
        'Raudbetoonist torusüsteemid isevoolsetele torustikele. Konsultatsioon ja projekteerimine vastavalt lähteülesandele.',
    grpDescription: { beforeEm: '', em: '', afterEm: '' },
    productItems: [
        'Betoontorud / truubid DN300 - DN2000 (EN1916)',
        'Betoonkaevud DN600 - DN2000 (EN1917)',
        'Karptruubid',
        'Erilahendused (mahutid, seadmekaevud, pumplad)',
    ],
 };
 
 
 const productConcreteEn: ProductCopy = {
    title: 'CONCRETE PIPING',
    descriptionPlain:
        'Reinforced concrete piping systems for gravity sewers. Consultation and design according to the project brief.',
    grpDescription: { beforeEm: '', em: '', afterEm: '' },
    productItems: [
        'Concrete pipes DN300 – DN2000 (EN 1916)',
        'Concrete manholes DN600 – DN2000 (EN 1917)',
        'Box culverts',
        'Custom solutions (tanks, plant manholes, pump pits)',
    ],
 };
 
 
 const productGrpEt: ProductCopy = {
    title: 'GRP TORUSTIKUD',
    descriptionPlain: '',
    grpDescription: {
        beforeEm: 'GRP (klaasplast, ',
        em: 'glass reinforced plastic',
        afterEm: ') tooted isevoolsetele ja survetorustikele, kaevevabad lahendused.',
    },
    productItems: [
        'Ümarad torud DN150 - DN3000 (kerimis- või tsentrifugaalvalu meetodil valmistatud)',
        'Kaevud',
        'Erikujulised torud',
        'Mikrotunnel-meetodil paigaldatavad torud',
    ],
 };
 
 
 const productGrpEn: ProductCopy = {
    title: 'GRP PIPING',
    descriptionPlain: '',
    grpDescription: {
        beforeEm: 'GRP (',
        em: 'glass reinforced plastic',
        afterEm: ') products for gravity and pressure pipelines, including trenchless solutions.',
    },
    productItems: [
        'Circular pipes DN150 – DN3000 (filament wound or centrifugally cast)',
        'Manholes',
        'Non-circular and custom pipe shapes',
        'Pipes installed by microtunnelling',
    ],
 };
 
 
 const productExtraEt: ProductCopy = {
    title: 'LISATOOTED',
    descriptionPlain: 'Torusüsteemide komponendid ja lisaseadmed.',
    grpDescription: { beforeEm: '', em: '', afterEm: '' },
    productItems: [
        'Kilpsiibrid',
        'Tsentreerimistoed',
        'Kanalisatsiooni­gaaside filtrid',
        'Aktiivsüsi',
        'Kaevuluugid',
    ],
 };
 
 
 const productExtraEn: ProductCopy = {
    title: 'ADDITIONAL PRODUCTS',
    descriptionPlain: 'Components and accessories for pipeline systems.',
    grpDescription: { beforeEm: '', em: '', afterEm: '' },
    productItems: [
        'Penstocks',
        'Centre supports',
        'Sewer gas filters',
        'Activated carbon',
        'Manhole covers',
    ],
 };
 
 
 const et: AppDictionary = {
    htmlTitle: 'Jätkusuutlik infrastruktuur | ESEC Estonia',
    metaDescription:
        'Maa-aluste torustike lahendused ning ehituseks vajalike torude ja ligipääsude müük.',
    
    heroH1: 'JÄTKUSUUTLIK INFRASTRUKTUUR',
    heroSubtitle:
        'Maa-aluste torustike lahendused ning ehituseks vajalike torude ja ligipääsude müük.',
    ctaProducts: 'Vaata tooteid',
    ctaContact: 'Võta ühendust',
    productsHeading: 'Tooted',
    companyBlurb:
        'ESEC Estonia on 2020. aastal loodud ettevõte, mis pakub lahendusi maa-aluste infrastruktuurivõrkude ehituseks ja hoolduseks.',
    aboutP1:
        'ESEC peab oluliseks pakutavate lahenduste pikka eluiga ja jätkusuutlikust ning ringmajanduse põhimõtteid.',
    aboutP2:
        'Koostöös oma valdkonna juhtivate tootjatega pakub ESEC võrguomanikele üle 100-aastase elueaga ehitusmaterjale ja nende lisakomponente.',
    solutions: [
        'Torud / truubid',
        'Kaevud',
        'Karptruubid',
        'Erilahendused (mahutid, seadmekaevud, pumplad)',
        'Ümarad torud',
        'Erikujulised torud',
        'Mikrotunnel-meetodil paigaldatavad torud',
    ],
    galleryAltBuilding: 'Klaasfassaadiga ärihoone',
    galleryAltFloor: 'Tööstuslik sisepõrand betooni ja kollaste ohutusmärkidega',
    galleryAltSkyline: 'Linnaruumi siluett videvikus',
    surfaceFixHeading: 'ESEC kaevevaba meetod',
    surfaceFixLead:
        "Koliseva kaevuluugikomplekti parandus patenteeritud ESEC'i meetodil. Oma tööprotsessiga suudame pikendada juba paigaldatud luugikomplekti eluiga vähemalt kahekordseks – tekitades sealjuures praktiliselt märkamatu koguse ümbertöötlematuid jäätmeid. Tööprotsessi käigus taastöödeldakse kulunud malmkrae kontaktpinnad ilma asfalti lõhkumata.",
    comparisonTitleGreen: 'ESEC kaevevaba meetod',
    comparisonTitleRed: 'Kaevuluugi vahetus kaevemeetodil',
    comparisonDescGreenEtBefore: 'Kohapealne taastootmine (',
    comparisonDescGreenEm: 're-manufacturing',
    comparisonDescGreenEtAfter: ')',
    comparisonDescGreenEn: '',
    comparisonDescRed:
        'Kaevetehnika, tagasitäitematerjalide transpordivahendid, töö teostajate transpordivahendid',
    surfaceFixPro: [
        '2 operaatorit',
        'Tööeg kuni 2h',
        'Vähene liikluse takistamine ja müra',
        'Ringmajanduslik mudel',
        'Kordades vähendatud CO2 jalajälg',
        'Kohandatud lahendus',
    ],
    surfaceFixCon: [
        'Vähemalt 3–4 erinevat spetsialisti tööga seotud',
        'Kumulatiivne tööaeg 16–24h',
        'Pikaajalisemad liiklusseisakud',
        'Palju uute materjalide kasutamist ja vanade utiliseerimist',
        'Kõrge CO2 jalajälg',
        'Liinitootmise standardlahendused ja teetööd',
    ],
    gallerySurfaceAlt: 'Pindparandus ja remondinäited',
    contactHeading: 'Kontakt',
    contactPhoneTitle: 'Tekkis küsimusi?',
    contactEmailTitle: 'Kirjelda oma ülesannet',
    footerAddress: 'ESEC Estonia OÜ 14926037 Randvere tee 1b, Miiduranna küla, 74015 Viimsi vald, Harju maakond',
    contactCatHeadline: 'Uuri lähemalt',
    contactCatSub: 'Tutvu ESECi võimaluste ja lahendustega',
    contactCatCta: 'Võta ühendust',
    productConcrete: productConcreteEt,
    productGrp: productGrpEt,
    productExtra: productExtraEt,
 };
 
 
 const en: AppDictionary = {
    htmlTitle: 'Sustainable infrastructure | ESEC Estonia',
    metaDescription:
        'Underground pipeline solutions; pipes and access components for construction. Long-life materials and the ESEC no-dig manhole method.',
    
    heroH1: 'SUSTAINABLE INFRASTRUCTURE',
    heroSubtitle: 'Underground pipeline solutions, pipes, access points and flow management components your projects need.',
    ctaProducts: 'View products',
    ctaContact: 'Get in touch',
    productsHeading: 'Products',
    companyBlurb:
        'ESEC Estonia, founded in 2020, supplies solutions for building and maintaining underground infrastructure networks.',
    aboutP1:
        'ESEC values long service life, sustainability and circular-economy principles in the systems we help deliver.',
    aboutP2:
        'Together with leading manufacturers, ESEC offers network owners construction materials and accessories, often designed for 100+ year service life.',
    solutions: [
        'Pipes / box culverts',
        'Manholes',
        'Box culverts',
        'Custom solutions (tanks, plant manholes, pump pits)',
        'Circular pipes',
        'Non-standard pipe shapes',
        'Pipes for microtunnelling installation',
    ],
    galleryAltBuilding: 'Modern commercial building with a glass curtain wall',
    galleryAltFloor: 'Industrial floor with concrete finish and yellow safety markings',
    galleryAltSkyline: 'City skyline at dusk with high-rise buildings',
    surfaceFixHeading: 'ESEC no-dig manhole method',
    surfaceFixLead:
        'Rattling manhole cover refurbishment using the patented ESEC process. We can more than double the life of an installed manhole cover assembly – with virtually no unrecyclable waste. Worn cast-iron contact surfaces are re-machined in-situ, without cutting the asphalt open.',
    comparisonTitleGreen: 'ESEC no-dig method',
    comparisonTitleRed: 'Open-cut manhole replacement',
    comparisonDescGreenEtBefore: '', // not used in EN
    comparisonDescGreenEm: '',
    comparisonDescGreenEtAfter: '',
    comparisonDescGreenEn: 'On-site refurbishment (re-manufacturing).',
    comparisonDescRed: 'Trenching equipment, haulage for backfill, crew transport to site',
    surfaceFixPro: [
        '2 operators on site',
        'Work duration up to 2h',
        'Lower traffic impact and noise',
        'Circular-economy approach',
        'Drastically lower CO2 footprint',
        'Tailor-made to the job',
    ],
    surfaceFixCon: [
        '3–4+ specialist trade roles on site',
        'Cumulative time consumption 16–24h',
        'Long traffic disruptions',
        'Heavy use of new materials; old material disposal',
        'High CO2 footprint',
        'Standard catalogue parts',
    ],
    gallerySurfaceAlt: 'Surface repair and manhole refurbishment examples',
    contactHeading: 'Contact',
    contactPhoneTitle: 'Questions?',
    contactEmailTitle: 'Describe your project',
    footerAddress: 'ESEC Estonia OÜ · 14926037 · Randvere tee 1b, Miiduranna village, 74015 Viimsi parish, Harju County',
    contactCatHeadline: 'Learn more',
    contactCatSub: 'Explore what ESEC can do for you',
    contactCatCta: 'Get in touch',
    productConcrete: productConcreteEn,
    productGrp: productGrpEn,
    productExtra: productExtraEn,
 }; 

export const dictionaries: Record<Locale, AppDictionary> = { et, en };

export function t(locale: Locale): AppDictionary {
    return dictionaries[locale];
}
