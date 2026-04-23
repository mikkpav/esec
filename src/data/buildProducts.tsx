import type { Locale } from '../i18n/locale';
import { t } from '../i18n/dictionaries';
import type { Product } from '../types/Product';
import { productShells } from './productStatic';

function grpDescription(locale: Locale) {
    const gr = t(locale).productGrp.grpDescription;
    return (
        <>
            {gr.beforeEm}
            <em>{gr.em}</em>
            {gr.afterEm}
        </>
    );
}

export function buildProducts(locale: Locale): Product[] {
    const d = t(locale);
    const copies = [d.productConcrete, d.productGrp, d.productExtra] as const;

    return productShells.map((shell, i) => {
        const copy = copies[i];
        const description =
            i === 1 ? grpDescription(locale) : copy.descriptionPlain;

        return {
            title: copy.title,
            description,
            image: shell.image,
            linkTitle: shell.linkTitle,
            linkUrl: shell.linkUrl,
            productItems: shell.productItems.map((item, j) => ({
                images: item.images,
                title: copy.productItems[j] ?? '',
            })),
        };
    });
}
