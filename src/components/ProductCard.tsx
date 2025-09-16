import Disclosure from './Disclosure';
import IconArrowright from '../assets/icon-arrow-right.png';
import List from './List';

type ProductCardProps = {
    title: string;
    description: string;
    image: string;
    items: string[];
    linkTitle: string;
    linkUrl: string;
};

export default function ProductCard({ title, description, image, items, linkTitle, linkUrl }: ProductCardProps) {
    return (
        <div className="flex flex-1 items-start">
            <Disclosure
                titleChildren={
                    <div className="flex flex-col gap-4 p-3 md:p-10 bg-white">
                        <div className="flex flex-col gap-2">
                            <h2 className="font-list-header">{title}</h2>
                            <img src={image} className="h-60 object-contain" />
                        </div>
                    </div>
                }
            >
                <div className="flex flex-col items-center bg-white px-2 py-4 md:p-10 gap-8">
                    <p className="font-detail">{description}</p>
                    <List items={items} />
                    <a
                        href={linkUrl}
                        className="flex gap-1 md:gap-4 items-center font-link text-center hover:border-b-1"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {linkTitle}
                        <img
                            src={IconArrowright}
                            className="object-contain h-8"
                        />
                    </a>
                </div>
            </Disclosure>
        </div>
    );
}
