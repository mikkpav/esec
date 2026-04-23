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

export type ProductShell = {
    image: string;
    linkTitle: string;
    linkUrl: string;
    productItems: { images: string[] }[];
};

export const productShells: ProductShell[] = [
    {
        image: Poogen,
        linkTitle: 'www.rbinfra.fi',
        linkUrl: 'https://www.rbinfra.fi/et/avaleht/',
        productItems: [
            { images: imagesConcretePipes },
            { images: imagesConcreteWell },
            { images: imagesConcreteSquared },
            { images: imagesConcreteSpecialty },
        ],
    },
    {
        image: Wye,
        linkTitle: 'www.amiblu.com',
        linkUrl: 'http://www.amiblu.com',
        productItems: [
            { images: imagesGRPPipes },
            { images: imagesGRPWells },
            { images: imagesGRPSpecialty },
            { images: imagesGRPMicro },
        ],
    },
    {
        image: CoversHero,
        linkTitle: '',
        linkUrl: '',
        productItems: [
            { images: imagesExtraPenstock },
            { images: imagesExtraSupports },
            { images: imagesExtraFilters },
            { images: imagesExtraCarbon },
            { images: imagesExtraCovers },
        ],
    },
];
