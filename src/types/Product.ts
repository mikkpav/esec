import type { ReactNode } from 'react';

export type Product = {
    title: string;
    description: ReactNode;
    image: string;
    linkTitle: string;
    linkUrl: string;
    productItems: ProductItem[];
};

export type ProductItem = {
    title: string;
    images: string[];
};
