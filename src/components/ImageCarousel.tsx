import { useCallback, useEffect, useState } from 'react';
import LazyImage from './LazyImage';

type ImageCarouselProps = {
    title?: string | null;
    images: string[];
    tapAction?: () => void;
    onIndexChange?: (index: number) => void;
};


export default function ImageCarousel({ title=null, images, tapAction, onIndexChange }: ImageCarouselProps) {
    const [selectedIndex, setSelectedIndex] = useState(0);

    if (images.length === 0) return null;

    const selectPreviousImage = useCallback(() => {
        setSelectedIndex((prev) => {
            const newIndex = prev === 0 ? images.length - 1 : prev - 1;
            onIndexChange?.(newIndex);
            return newIndex;
        });
    }, [images.length, onIndexChange]);

    const selectNextImage = useCallback(() => {
        setSelectedIndex((prev) => {
            const newIndex = prev === images.length - 1 ? 0 : prev + 1;
            onIndexChange?.(newIndex);
            return newIndex;
        });
    }, [images.length, onIndexChange]);

    useEffect(() => {
        if (images.length <= 1) return;
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'ArrowLeft') {
                selectPreviousImage();
            } else if (event.key === 'ArrowRight') {
                selectNextImage();
            }
        };

        window.addEventListener('keydown', handleKeyDown);

        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [images.length, selectPreviousImage, selectNextImage]);

    return (
        <div className='flex flex-col justify-start items-center gap-4'>
            { title &&
                <div className=''>
                    <h1 className='relative w-fit bg-esec text-white rounded-2xl p-4 text-center font-black text-xl'>
                        {title}
                    </h1>
                </div>
            }

            <div className='relative w-full'>
                <div onClick={tapAction} className=''>
                    <LazyImage
                        src={images[selectedIndex]}
                        alt={`Concrete well image ${selectedIndex}`}
                        onSwipeLeft={images.length > 1 ? selectPreviousImage : undefined}
                        onSwipeRight={images.length > 1 ? selectNextImage : undefined}
                    />
                </div>

                {images.length > 1 && (
                    <>
                        <button
                            type='button'
                            onClick={selectPreviousImage}
                            className='absolute top-1/2 left-4 transform -translate-y-1/2 cursor-pointer bg-white/70 hover:bg-white/90 rounded-full w-10 aspect-square transition'
                        >
                            ◀
                        </button>

                        <button
                            type='button'
                            onClick={selectNextImage}
                            className='absolute top-1/2 right-4 transform -translate-y-1/2 cursor-pointer bg-white/70 hover:bg-white/90 rounded-full w-10 aspect-square transition'
                        >
                            ▶
                        </button>
                    </>
                )}
            </div>
        </div>
    );
}
