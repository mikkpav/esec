import Disclosure from './Disclosure';
import IconArrowright from '../assets/icon-arrow-right.png';
import List from './List';
import ImageCarousel from './ImageCarousel';
import Popover from './Popover';
import { useState } from 'react';

type ProductCardProps = {
    title: string;
    description: string;
    image: string;
    items: string[];
    linkTitle: string;
    linkUrl: string;
};

export default function ProductCard({ title, description, image, items, linkTitle, linkUrl }: ProductCardProps) {
    const [popoverOpen, setPopoverOpen] = useState(false);
    const concreteWellImages = Object.values(
        import.meta.glob('../images/concrete/wells/*.jpg', {
            eager: true,
            as: 'url',
        })
    );

    function togglePopover() {
        setPopoverOpen((prev) => !prev);
    }

    return (
        <div className='flex flex-1 items-start min-w-0'>
            <Disclosure
                titleChildren={
                    <div className='flex flex-col gap-4 p-3 md:p-10 bg-white'>
                        <div className='flex flex-col gap-2'>
                            <h2 className='font-list-header'>{title}</h2>
                            <img src={image} className='h-60 object-contain' />
                        </div>
                    </div>
                }
            >
                <div className='flex flex-col items-center bg-white px-2 py-4 md:p-10 gap-8'>
                    <p className='font-detail'>{description}</p>
                    <List items={items} />

                    <div className='w-full'>
                        <ImageCarousel 
                            images={concreteWellImages} 
                            tapAction={togglePopover} 
                            scale='fill'
                        />
                    </div>

                    <a
                        href={linkUrl}
                        className='flex gap-1 md:gap-4 items-center font-link text-center hover:border-b-1'
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        {linkTitle}
                        <img
                            src={IconArrowright}
                            className='object-contain h-8'
                        />
                    </a>
                </div>
            </Disclosure>

            {popoverOpen && (
                <Popover isOpen={popoverOpen} closeHandler={togglePopover}>
                    <ImageCarousel 
                        images={concreteWellImages} 
                        tapAction={togglePopover} 
                        scale='fit'
                    />
                </Popover>
            )}
        </div>
    );
}
