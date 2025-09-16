
type SplitListProps = {
    itemsGreen: string[];
    itemsRed: string[];
}

export default function SplitList({ itemsGreen, itemsRed }: SplitListProps) {
    const zipped = itemsGreen.map((item, index) => [item, itemsRed[index]]);

    return (
        <ul className='flex flex-col gap-3 font-list-item'>
            {zipped.map(([greenItem, redItem], index) => (
                <li 
                    key={ index } 
                    className={`flex overflow-hidden rounded-2xl`}
                >
                    <div className='flex-1/2 bg-esec-light p-4 break-word'>
                        { greenItem }
                    </div>
                    <div className='flex-1/2 bg-esec-opposite p-4 break-word'>
                        { redItem }
                    </div>
                </li>
            ))}
        </ul>
    );
}