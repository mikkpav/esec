import Disclosure from './Disclosure';
import IconArrowright from '../assets/icon-arrow-right.png';
import List from './List';
import IconArrowDown from '../assets/icon-arrow-down.png';
import { useState } from 'react';
import type { Product } from '../types/Product';

type ProductCardProps = {
    product: Product
}

export default function ProductCard( { product }: ProductCardProps) {
    const [open, setOpen] = useState(false);

    return (
        <div className='flex flex-1 items-start min-w-0'>
            <Disclosure
                bgColor='bg-white'
                handleOpen={setOpen}
                titleChildren={
                    <div className='flex flex-col gap-4 p-3 md:p-10 bg-white w-full'>
                        <div className='flex flex-col items-center gap-2 w-full'>
                            <h2 className='font-list-header text-center hyphens-auto'>{ product.title }</h2>
                            <img src={ product.image } className='w-full max-h-60 object-contain' />
                        </div>

                        <img
                            src={IconArrowDown} 
                            className={`opacity-70 h-10 object-contain transition-transform duration-300 ease-in-out ${
                                open ? 'rotate-180' : 'rotate-0'
                        }`} />
                    </div>
                }
            >
                <div className='flex flex-col items-center bg-white px-2 py-4 md:p-10 gap-8'>
                    <p className='font-detail'>{ product.description }</p>
                    <List items={ product.productItems } />

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
                        />
                    </a>
                </div>
            </Disclosure>
        </div>
    );
}
