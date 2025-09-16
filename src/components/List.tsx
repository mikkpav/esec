type ListProps = {
    items: string[];
}

export default function List({ items }: ListProps) {
    return (
        <ul className='flex flex-col md:p-6 gap-3 font-list-item'>
            {items.map((item, index) => (
                <li 
                    key={ index } 
                    className={`flex rounded-2xl bg-esec-light p-4`}
                >
                    { item }
                </li>
            ))}
        </ul>
    );
}