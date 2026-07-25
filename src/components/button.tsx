type ButtonType = 'primary' | 'secondary' | 'secondary-white' | 'transparent';

type ButtonProps = {
    type: ButtonType;
    onClick?: () => void;
    text?: string;
    icon?: string;
    className?: string;
}

const typeStyle: Record<ButtonType, string> = {
    'primary': 'bg-black text-white hover:gap-1',
    'secondary': 'bg-transparent border border-black hover:bg-black hover:text-white',
    'secondary-white': 'bg-transparent border border-white text-white hover:bg-white hover:text-black',
    'transparent': 'bg-transparent'
}

export default function Button({type, onClick, text, icon, className}: ButtonProps) {
    return <button
        className={`transition-all flex items-center justify-center gap-2 px-4 py-2.5 cursor-pointer rounded-full ${typeStyle[type]} ${className}`}
        onClick={onClick}>
        {icon && <span className='material-symbols-rounded leading-none text-base!'>{icon}</span>}
        <p className='text-nowrap'>{text}</p>
    </button>
}