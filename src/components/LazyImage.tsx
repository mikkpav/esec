import { useState } from 'react';

type LazyImageProps = {
    src: string;
    alt: string;
    className?: string;
};

export default function LazyImage({ src, alt, className }: LazyImageProps) {
    const [isPortrait, setIsPortrait] = useState(false);

    function handleLoad(e: React.SyntheticEvent<HTMLImageElement>) {
        const image = e.currentTarget;
        setIsPortrait(image.naturalHeight > image.naturalWidth);
    }

    return (
        <div
            className={`relative overflow-hidden ${className || ''}`}
        >
            <img
                src={src}
                alt={alt}
                loading='lazy'
                onLoad={handleLoad}
                className={`w-full h-full transition-opacity duration-300 
                    ${isPortrait ? 'object-contain' : 'object-cover'}
                }`}
            />
        </div>
    );
}
