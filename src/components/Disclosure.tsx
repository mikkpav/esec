import { useRef, useState } from 'react';


type DisclosureProps = {
    bgColor?: string;
    handleOpen?: (open: boolean) => void;
    titleChildren: React.ReactNode;
    children: React.ReactNode;
};

export default function Disclosure({
    bgColor,
    handleOpen,
    titleChildren,
    children,
}: DisclosureProps) {
    const [open, setOpen] = useState(false);
    const contentRef = useRef<HTMLDivElement>(null);

    function toggle() { 
        setOpen((prev) => {
            const newOpenValue = !prev;
            handleOpen?.(newOpenValue);
            return newOpenValue;
        })
    }

    return (
        <div className={`flex flex-col w-full rounded-2xl gap-4 overflow-clip ${bgColor ?? 'bg-white'}`}>
            <button
                onClick={toggle}
                aria-expanded={open}
                className='flex flex-col w-full md:px-14 focus:outline-none cursor-pointer'
            >
                {titleChildren}
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
