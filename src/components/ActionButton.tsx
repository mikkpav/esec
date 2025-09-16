
type ActionButtonProps = {
    title: string;
    light?: boolean;
    small?: boolean;
    action: (() => void);
}

export default function ActionButton({ title, light = false, small = false, action }:ActionButtonProps) {
    return (
        <button 
                className={
                    `${small ? 'text-md p-2' : 'text-lg p-4'} w-full font-semibold rounded-md whitespace-nowrap cursor-pointer ${light ? 'bg-esec-light text-gray-800' : 'bg-esec text-white'}`
                }
                onClick={action}
            >
                {title}
            </button>
    );
}