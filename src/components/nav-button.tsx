import {useNavigate} from "react-router";

type NavButtonProps = {
    active: boolean;
    navigateTo: string;
    text: string;
}

export default function NavButton({active, navigateTo, text}: NavButtonProps) {
    const navigate = useNavigate();

    return <button className='cursor-pointer relative group' onClick={() => navigate(navigateTo)}>
        {text}
        <div className={`transition-all absolute bottom-0 bg-black h-px w-0 group-hover:w-full ${active && 'w-full'}`}/>
    </button>
}