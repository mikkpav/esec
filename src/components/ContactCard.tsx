import IconPhone from '../assets/icon-phone.png';
import IconEmail from '../assets/icon-email.png';

type ContactCardProps = {
    title: string;
    content: string;
    type: ContactType;
    actionString: string;
    contactName: string;
}

type ContactType = 'phone' | 'email';

export default function ContactCard({ title, content, type, actionString, contactName }: ContactCardProps) {
    const trimmedPhoneNr = type === 'phone' && actionString.trim();

    return (
        <div className='flex flex-col md:flex-row gap-level-top md:items-start justify-between'>
            <div className='flex flex-col gap-level-atom'>
                    <h2 className='font-list-header'>{title}</h2>
                    <p>{content}</p>
                    <a 
                        href={type === 'phone' ? `tel:${trimmedPhoneNr}` : `mailto:${actionString}`} 
                        className='font-action whitespace-nowrap'>
                            {`${actionString} >`}
                    </a>
            </div>

            <div className='flex flex-col items-center group gap-6'>
                <a
                    href={type === 'phone' ? `tel:${trimmedPhoneNr}` : `mailto:${actionString}`}
                    className='w-50 flex flex-col bg-white hover:bg-gray-200 transition-colors duration-300 ease-in-out cursor-pointer rounded-xl justify-center items-center aspect-square p-4'
                >
                    <img src={type === 'phone' ? IconPhone : IconEmail} className='h-20' />
                </a>
                <div className='flex flex-col'>
                    <p className='font-list-header opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out'
                    >
                        {contactName}
                    </p>
                    <a
                        href={type === 'phone' ? `tel:${trimmedPhoneNr}` : `mailto:${actionString}`}
                        className='font-action opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out'
                    >
                        {actionString}
                    </a>
                </div>
            </div>
        </div>
    );
}