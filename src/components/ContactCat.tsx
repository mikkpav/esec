import EsecIcon from '../assets/esec_icon.png';
import ActionButton from './ActionButton';

type ContactCATProps = {
    action: () => void;
}

export default function ContactCat({ action }: ContactCATProps) {

    function buttonAction() {
        action();
    }

    return (
        <div className='flex flex-col items-start border-black border-2 rounded-xl w-fit md:border-4 p-6 md:py-8 md:p-12 gap-level-atom'>
            <img src={EsecIcon} className='h-14 object-contain'/>
            <div className='flex flex-col gap-2'>
                <div className='flex gap-4 items-center'>
                    <p className='font-list-header whitespace-nowrap'>Uuri lähemalt</p>
                </div>
                <p className='font-content md:whitespace-nowrap'>
                    Tutvu ESECi võimaluste ja lahendustega
                </p>
            </div>
            <ActionButton title='Võta ühendust' action={buttonAction}/>
        </div>
    );
}