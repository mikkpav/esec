import EsecIcon from '../assets/esec_icon.png';
import ActionButton from './ActionButton';
import { useI18n } from '../i18n/I18nProvider';

type ContactCATProps = {
    action: () => void;
    className?: string;
}

export default function ContactCat({ action, className='' }: ContactCATProps) {
    const { dt } = useI18n();

    function buttonAction() {
        action();
    }

    return (
        <div className={`flex flex-col items-start border-black border-2 rounded-xl w-fit md:border-4 p-6 md:py-8 md:p-12 gap-level-atom ${className}`}>
            <img src={EsecIcon} className='h-14 object-contain' alt='' />
            <div className='flex flex-col gap-2'>
                <div className='flex gap-4 items-center'>
                    <p className='font-list-header whitespace-nowrap'>{dt.contactCatHeadline}</p>
                </div>
                <p className='font-content md:whitespace-nowrap'>
                    {dt.contactCatSub}
                </p>
            </div>
            <ActionButton title={dt.contactCatCta} action={buttonAction}/>
        </div>
    );
}