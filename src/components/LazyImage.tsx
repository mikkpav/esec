import { useState } from 'react';

export type ImageScale = 'fit' | 'fill';

type LazyImageProps = {
    src: string;
    alt: string;
    className?: string;
    placeholder?: string;
    scale: ImageScale;
};

export default function LazyImage({ src, alt, className, placeholder, scale }: LazyImageProps) {
    const [loaded, setLoaded] = useState(false);

    return (
        <div
            className={`relative overflow-hidden ${className || ''}`}
        >
            {placeholder && !loaded && (
                <img
                    src={placeholder}
                    alt='placeholder'
                    className='absolute inset-0 w-full h-full blur-md scale-105'
                />
            )}

            <img
                src={src}
                alt={alt}
                loading='lazy'
                onLoad={() => setLoaded(true)}
                className={`w-full h-full transition-opacity duration-500 
                    ${scale === 'fit' ? 'object-contain' : 'object-cover'} 
                    ${loaded ? 'opacity-100' : 'opacity-0'
                }`}
            />
        </div>
    );
}
