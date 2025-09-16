import { useState } from 'react';
import LazyImage, { type ImageScale } from './LazyImage';

type ImageCarouselProps = {
    images: string[];
    scale: ImageScale;
    tapAction: () => void;
};


export default function ImageCarousel({ images, scale, tapAction }: ImageCarouselProps) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const prevImage = () => {
        setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    };

    const nextImage = () => {
        setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    };

    if (images.length === 0) return null;

    return (
        <div className='relative'>
            <div onClick={tapAction} className=''>
                <LazyImage
                    src={images[currentIndex]}
                    alt={`Concrete well image ${currentIndex}`}
                    className='rounded-xl w-full aspect-3/2'
                    scale={scale}
                />
            </div>

            <button
                onClick={prevImage}
                className='absolute top-1/2 left-2 transform -translate-y-1/2 cursor-pointer bg-white/70 hover:bg-white/90 rounded-full w-10 aspect-square transition'
            >
                ◀
            </button>

            <button
                onClick={nextImage}
                className='absolute top-1/2 right-2 transform -translate-y-1/2 cursor-pointer bg-white/70 hover:bg-white/90 rounded-full w-10 aspect-square transition'
            >
                ▶
            </button>
        </div>
    );
}
