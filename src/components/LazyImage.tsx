import { useState } from 'react';

type LazyImageProps = {
    src: string;
    alt: string;
    className?: string;
    onSwipeLeft?: () => void;
    onSwipeRight?: () => void;
};

export default function LazyImage({ src, alt, className, onSwipeLeft, onSwipeRight }: LazyImageProps) {
    const [isPortrait, setIsPortrait] = useState(false);
    const [touchStartX, setTouchStartX] = useState<number | null>(null);

    function handleLoad(e: React.SyntheticEvent<HTMLImageElement>) {
        const image = e.currentTarget;
        setIsPortrait(image.naturalHeight > image.naturalWidth);
    }

    const handleTouchStart = (e: React.TouchEvent) => {
        setTouchStartX(e.touches[0].clientX);
    };

    const handleTouchMove = (e: React.TouchEvent) => {
        // Prevent vertical page scrolling
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
        <div className={`relative overflow-hidden ${className || ''}`}>
            <img
                src={src}
                alt={alt}
                loading="lazy"
                onLoad={handleLoad}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
                className={`w-full h-full transition-opacity duration-300 
                    ${isPortrait ? 'object-contain' : 'object-cover'}
                }`}
            />
        </div>
    );
}
