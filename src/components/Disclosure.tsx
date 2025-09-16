import { useRef, useState } from 'react';
import IconArrowDown from '../assets/icon-arrow-down.png';

type DisclosureProps = {
    titleChildren: React.ReactNode;
    children: React.ReactNode;
};

export default function Disclosure({
    titleChildren,
    children,
}: DisclosureProps) {
    const [open, setOpen] = useState(false);
    const contentRef = useRef<HTMLDivElement>(null);

    const toggle = () => setOpen((prev) => !prev);

    return (
        <div className='flex flex-col w-full rounded-2xl bg-white gap-10 overflow-clip'>
            <button
                onClick={toggle}
                aria-expanded={open}
                className='flex flex-col justify-center items-center md:px-14 focus:outline-none cursor-pointer'
            >
                {titleChildren}
                <img 
                    src={IconArrowDown} 
                    className={`opacity-70 h-10 object-contain transition-transform duration-300 ease-in-out ${
                        open ? 'rotate-180' : 'rotate-0'
                }`} />
            </button>
            <div
                ref={contentRef}
                className='transition-[height] duration-300 ease-in-out overflow-hidden'
                style={{
                    height: open ? contentRef.current?.scrollHeight : 0,
                }}
            >
                <div className='px-4'>{children}</div>
            </div>
        </div>
    );
}
