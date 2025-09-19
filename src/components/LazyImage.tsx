import { useState } from 'react';

type LazyImageProps = {
    src: string;
    alt: string;
    onSwipeLeft?: () => void;
    onSwipeRight?: () => void;
};

export default function LazyImage({ src, alt, onSwipeLeft, onSwipeRight }: LazyImageProps) {
    const [touchStartX, setTouchStartX] = useState<number | null>(null);

    const handleTouchStart = (e: React.TouchEvent) => {
        setTouchStartX(e.touches[0].clientX);
    };

    const handleTouchMove = (e: React.TouchEvent) => {
        e.preventDefault();
    };

    const handleTouchEnd = (e: React.TouchEvent) => {
        if (touchStartX === null) return;
        const diffX = e.changedTouches[0].clientX - touchStartX;

        if (diffX > 50) {
            onSwipeRight?.();
        } else if (diffX < -50) {
            onSwipeLeft?.();
        }
        
        setTouchStartX(null);
    };

    return (
        <div className={'flex justify-center aspect-3/2'}>
            <img
                src={src}
                alt={alt}
                loading='lazy'
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
                className='rounded-2xl transition-opacity duration-300'
            />
        </div>
    );
}
