import type { Product } from '../types/Product';
import Poogen from '../assets/image-poogen.jpg';
import Wye from '../assets/image-wye.jpg';
import Rings from '../assets/image-rings.jpg';

const imagesConcreteWell = Object.values(
    import.meta.glob('../images/concrete/wells/*.jpg', { eager: true, as: 'url' })
);
const imagesConcretePipes = Object.values(
    import.meta.glob('../images/concrete/pipes/*.jpg', { eager: true, as: 'url' })
);
const imagesConcreteSquared = Object.values(
    import.meta.glob('../images/concrete/squared/*.jpg', { eager: true, as: 'url' })
);
const imagesConcreteSpecialty = Object.values(
    import.meta.glob('../images/concrete/specialty/*.jpg', { eager: true, as: 'url' })
);
const imagesGRPPipes = Object.values(
    import.meta.glob('../images/grp/pipes/*.jpg', { eager: true, as: 'url' })
);
const imagesGRPWells = Object.values(
    import.meta.glob('../images/grp/wells/*.jpg', { eager: true, as: 'url' })
);
const imagesGRPSpecialty = Object.values(
    import.meta.glob('../images/grp/specialty/*.jpg', { eager: true, as: 'url' })
);
const imagesGRPMicro = Object.values(
    import.meta.glob('../images/grp/micro/*.jpg', { eager: true, as: 'url' })
);

export const products: Product[] = [
    {
        title: 'BETOON\u00ADTORUSTIKUD',
        description: 'Raudbetoonist torusüsteemid isevoolsetele torustikele. Konsultatsioon ja projekteerimine vastavalt lähteülesandele.',
        image: Poogen,
        linkTitle:'www.rbinfra.fi',
        linkUrl:'https://www.rbinfra.fi/et/avaleht/',
        productItems: [
            {
                title: 'Betoontorud / truubid DN300 - DN2000 (EN1916)',
                images: imagesConcretePipes
            },
            {
                title: 'Kaevud DN600 - DN2000 (EN1917)',
                images: imagesConcreteWell
            },
            {
                title: 'Karptruubid',
                images: imagesConcreteSquared
            },
            {
                title: 'Erilahendused (mahutid, seadmekaevud, pumplad)',
                images: imagesConcreteSpecialty
            }
        ]
    },
    {
        title: 'GRP TORU\u00ADSTIKUD',
        description: 'ESEC on spetsialiseerunud GRP (klaasplast) toodete pakkumisele Eesti turul - lahendused survesüsteemidele ja kaevevabadele teenustele.',
        image: Wye,
        linkTitle: 'www.amiblu.com',
        linkUrl: 'http://www.amiblu.com',
        productItems: [
            {
                title: 'Ümarad torud DN150 - DN3000 (kerimis- või tsentrifugaalvalu meetodil valmistatud)',
                images: imagesGRPPipes
            },
            {
                title: 'Kaevud',
                images: imagesGRPWells
            },
            {
                title: 'Erikujulised torud',
                images: imagesGRPSpecialty
            },
            {
                title: 'Mikrotunnel-meetodil paigaldatavad torud',
                images: imagesGRPMicro
            }
        ]
    },
    {
        title: 'ERI\u00ADTOOTED',
        description: 'Muud konkurentidelt üle varastatud ROI pumbad.',
        image: Rings,
        linkTitle: '',
        linkUrl: '',
        productItems: [
            {
                title: 'Sitahaisu filtrid',
                images: []
            },
            {
                title: 'Aktiivsöed',
                images: []
            },
            {
                title: 'Mingid asjad veel',
                images: []
            }
        ]
    }
]