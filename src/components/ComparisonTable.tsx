import SplitList from './SplitList';
import IconDiagonal from '../assets/icon-diagonal.png';

type ComparisonTableProps = {
    titleGreen: string;
    descriptionGreen: string;
    titleRed: string;
    descriptionRed: string;
    itemsGreen: string[];
    itemsRed: string[];
};

export default function ComparisonTable({ titleGreen, titleRed, descriptionGreen, descriptionRed, itemsGreen, itemsRed }: ComparisonTableProps) {
    return (
        <div className='flex flex-col gap-10 md:w-[90%] lg:w-[70%] rounded-2xl bg-white md:p-10 p-4 w-full max-w-full'>
            <div className='flex flex-col md:flex-row gap-6 items-center md:items-start'>
                <div className='flex flex-1 flex-col text-center md:text-left'>
                    <h2 className='font-list-header'>{titleGreen}</h2>
                    <p className='font-detail'>{descriptionGreen}</p>
                </div>

                <picture>
                    <img src={IconDiagonal} className='h-10 object-contain md:hidden' alt='Comparison icon' />
                    <source srcSet={IconDiagonal} media='(min-width: 768px)' />
                </picture>

                <div className='flex flex-1 flex-col text-center md:text-left'>
                    <h2 className='font-list-header'>{titleRed}</h2>
                    <p className='font-detail'>{descriptionRed}</p>
                </div>
            </div>

            <SplitList itemsGreen={itemsGreen} itemsRed={itemsRed} />
        </div>
    );
}
