type NavButtonProps = {
    active: boolean;
    onClick: () => void;
    text: string;
}

export default function NavButton({active, onClick, text}: NavButtonProps) {
    return <button className='cursor-pointer relative group' onClick={onClick}>
        {text}
        <div className={`transition-all absolute bottom-0 bg-black h-px w-0 group-hover:w-full ${active && 'w-full'}`}/>
    </button>
}