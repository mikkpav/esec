import Disclosure from './Disclosure';
import IconArrowright from '../assets/icon-arrow-right.png';
import List from './List';
import IconArrowDown from '../assets/icon-arrow-down.png';
import { useState } from 'react';
import type { Product } from '../types/Product';

type ProductCardProps = {
    product: Product;
    headerRef?: (el: HTMLDivElement | null) => void;
    titleRef?: (el: HTMLDivElement | null) => void;
};

export default function ProductCard({ product, headerRef, titleRef }: ProductCardProps) {
    const [open, setOpen] = useState(false);

    return (
        <div className='flex min-w-0 flex-1 flex-col'>
            <Disclosure
                bgColor='bg-white'
                handleOpen={setOpen}
                titleChildren={
                    <div
                        ref={headerRef}
                        className='flex min-h-0 w-full flex-col gap-4 bg-white p-3 md:p-10'
                    >
                        <div
                            ref={titleRef}
                            className='flex w-full shrink-0 flex-col items-center justify-center text-center'
                        >
                            <h3 className='font-list-header hyphens-manual'>{ product.title }</h3>
                        </div>

                        <div className='flex min-h-0 w-full flex-1 flex-col items-center justify-center'>
                            <img
                                src={product.image}
                                alt={product.title}
                                className='max-h-60 w-full object-contain'
                            />
                        </div>

                        <img
                            src={IconArrowDown}
                            alt=''
                            className={`h-10 shrink-0 object-contain opacity-70 transition-transform duration-300 ease-in-out ${
                                open ? 'rotate-180' : 'rotate-0'
                            }`}
                        />
                    </div>
                }
            >
                <div className='flex flex-col items-center bg-white px-2 py-4 md:p-10 gap-8'>
                    <p className='font-detail'>{ product.description }</p>
                    <List items={ product.productItems } />

                    {product.linkUrl.trim() !== '' && (
                        <a
                            href={ product.linkUrl }
                            className='flex md:gap-4 items-center font-link text-center hover:border-b-1'
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            { product.linkTitle }
                            <img
                                src={IconArrowright}
                                className='object-contain h-6'
                                alt=''
                            />
                        </a>
                    )}
                </div>
            </Disclosure>
        </div>
    );
}
