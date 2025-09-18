
export type Product = {
    title: string;
    description: string;
    image: string;
    linkTitle: string;
    linkUrl: string;
    productItems: ProductItem[];
}

export type ProductItem = {
    title: string;
    images: string[];
}

