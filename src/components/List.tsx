import { useState } from 'react';
import ImageCarousel from './ImageCarousel';
import Popover from './Popover';
import IconGallery from '../assets/icon-gallery.png';
import type { ProductItem } from '../types/Product';

type ListProps = {
    items: ProductItem[];
}

export default function List( { items }: ListProps) {
    const [popoverOpen, setPopoverOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState<ProductItem | null>(null);

    function togglePopover(item: ProductItem | null = null) {
        setPopoverOpen((prev) => !prev);
        setSelectedItem(item);
    }

    console.log('list: ', items)

    return (
        <ul className='flex flex-col md:p-6 gap-3 font-list-item'>
            {items.map((item, index) => (
                <li 
                    key={ index } 
                    className={
                        `flex gap-2 rounded-2xl bg-esec-light p-4 
                        transition-colors duration-200 ease-in-out 
                        ${item.images.length > 0 ? 'cursor-pointer hover:bg-[#dcf2f1]' : ''}`
                    }
                    onClick={ () => item.images.length > 0 && togglePopover(item) }
                >
                    <p className='w-full flex flex-1 flex-grow'>{ item.title }</p>
                    { item.images.length > 0 && <img src={IconGallery} className='h-6' />}
                </li>  
            ))}

            {popoverOpen && (
                <Popover isOpen={popoverOpen} closeHandler={togglePopover}>
                    <ImageCarousel 
                        title={ selectedItem!.title }
                        images={ selectedItem!.images }
                        tapAction={togglePopover} 
                    />
                </Popover>
            )}
        </ul>
    );
}