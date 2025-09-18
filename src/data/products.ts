import type { Product } from '../types/Product';
import Poogen from '../assets/image-poogen.jpg';
import Wye from '../assets/image-wye.jpg';

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
        title: 'BETOONTOOTED',
        description: 'Betoontorud koos kaasnevaga isevoolsetele torustikele. Ehitusmaterjalide valikul konsulteerime ja vajadusel projekteerime vastavalt lähteülesandest parima lahenduse.',
        image: Poogen,
        linkTitle:'www.rbinfra.fi',
        linkUrl:'https://www.rbinfra.fi/et/avaleht/',
        productItems: [
            {
                title: 'Torud / truubid DN300 - DN2000 (EN1916)',
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
        title: 'GRP TOOTED',
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
    }
]