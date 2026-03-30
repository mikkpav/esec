import { useEffect, useRef } from 'react';

interface LogoMarqueeProps {
    logos: { src: string; alt: string }[];
    speed?: number;
}

export default function LogoMarquee({ logos, speed = 0.4 }: LogoMarqueeProps) {
    const trackRef = useRef<HTMLDivElement>(null);
    const rafRef = useRef<number>(0);
    const offsetRef = useRef(0);
    const dragRef = useRef<{ active: boolean; lastX: number }>({ active: false, lastX: 0 });

    useEffect(() => {
        const track = trackRef.current;
        if (!track) return;

        const tick = () => {
            const half = track.scrollWidth / 2;

            if (!dragRef.current.active) {
                offsetRef.current += speed;
            }

            if (half > 0 && offsetRef.current >= half) {
                offsetRef.current -= half;
            }
            if (offsetRef.current < 0) {
                offsetRef.current += half;
            }

            track.style.transform = `translateX(-${offsetRef.current}px)`;
            rafRef.current = requestAnimationFrame(tick);
        };

        rafRef.current = requestAnimationFrame(tick);

        const onPointerDown = (e: PointerEvent) => {
            dragRef.current = { active: true, lastX: e.clientX };
            track.setPointerCapture(e.pointerId);
        };
        const onPointerMove = (e: PointerEvent) => {
            if (!dragRef.current.active) return;
            const dx = dragRef.current.lastX - e.clientX;
            offsetRef.current += dx;
            dragRef.current.lastX = e.clientX;
        };
        const onPointerUp = () => {
            dragRef.current.active = false;
        };

        const onWheel = (e: WheelEvent) => {
            if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) {
                e.preventDefault();
            }
            offsetRef.current += e.deltaX;
        };

        const container = track.parentElement!;
        container.addEventListener('wheel', onWheel, { passive: false });
        track.addEventListener('pointerdown', onPointerDown);
        track.addEventListener('pointermove', onPointerMove);
        track.addEventListener('pointerup', onPointerUp);
        track.addEventListener('pointercancel', onPointerUp);

        return () => {
            cancelAnimationFrame(rafRef.current);
            container.removeEventListener('wheel', onWheel);
            track.removeEventListener('pointerdown', onPointerDown);
            track.removeEventListener('pointermove', onPointerMove);
            track.removeEventListener('pointerup', onPointerUp);
            track.removeEventListener('pointercancel', onPointerUp);
        };
    }, [speed]);

    return (
        <div className='w-full overflow-hidden opacity-30 cursor-grab active:cursor-grabbing'>
            <div ref={trackRef} className='flex w-max items-center select-none'>
                {[0, 1].map((copy) => (
                    <div key={copy} className='flex items-center gap-20 px-6'>
                        {logos.map((logo) => (
                            <img
                                key={logo.alt}
                                src={logo.src}
                                alt={logo.alt}
                                className='object-contain h-8 shrink-0 pointer-events-none'
                                draggable={false}
                            />
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
}
