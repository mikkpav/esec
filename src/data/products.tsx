import type { Product } from '../types/Product';
import Poogen from '../assets/image-poogen.jpg';
import Wye from '../assets/image-wye.jpg';
import CoversHero from '../assets/image-covers.jpg';

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
const imagesExtraPenstock = Object.values(
    import.meta.glob('../images/extra/penstock/*.jpg', { eager: true, as: 'url' })
).sort();
const imagesExtraSupports = Object.values(
    import.meta.glob('../images/extra/supports/*.jpg', { eager: true, as: 'url' })
).sort();
const imagesExtraFilters = Object.values(
    import.meta.glob('../images/extra/filters/*.jpg', { eager: true, as: 'url' })
).sort();
const imagesExtraCarbon = Object.values(
    import.meta.glob('../images/extra/carbon/*.jpg', { eager: true, as: 'url' })
).sort();
const imagesExtraCovers = Object.values(
    import.meta.glob('../images/extra/covers/*.jpg', { eager: true, as: 'url' })
).sort();

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
                title: 'Betoonkaevud DN600 - DN2000 (EN1917)',
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
        title: 'GRP TORUSTIKUD',
        description: (
            <>
                GRP (klaasplast, <em>glass reinforced plastic</em>) tooted isevoolsetele ja survetorustikele, kaevevabad lahendused.
            </>
        ),
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
        title: 'LISATOOTED',
        description: 'Torusüsteemide komponendid ja lisaseadmed.',
        image: CoversHero,
        linkTitle: '',
        linkUrl: '',
        productItems: [
            {
                title: 'Kilpsiibrid',
                images: imagesExtraPenstock
            },
            {
                title: 'Tsentreerimistoed',
                images: imagesExtraSupports
            },
            {
                title: 'Kanalisatsiooni\u00ADgaaside filtrid',
                images: imagesExtraFilters
            },
            {
                title: 'Aktiivsüsi',
                images: imagesExtraCarbon
            },
            {
                title: 'Kaevuluugid',
                images: imagesExtraCovers
            }
        ]
    }
]
