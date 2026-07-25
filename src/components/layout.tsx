import NavButton from "./nav-button.tsx";
import Button from "./button.tsx";
import {Outlet, useNavigate} from "react-router";
import {useEffect, useState} from "react";

export default function Layout() {
    const navigate = useNavigate();

    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return <main>
        <header
            className={`transition duration-500 sticky top-0 z-1 text-sm px-16 py-4 bg-white flex items-center justify-between ${isScrolled && 'shadow-md'}`}>
            <p className='font-logo w-0 overflow-visible text-2xl font-bold'>LV<span
                className='text-brand-primary'>TEK</span></p>
            <nav className='flex-1 flex justify-center gap-10'>
                <NavButton active={true} navigateTo='/home' text='Home'/>
                <NavButton active={false} navigateTo='/home' text='Products'/>
                <NavButton active={false} navigateTo='/home' text='About us'/>
                <NavButton active={false} navigateTo='/home' text='FAQ'/>
            </nav>
            <div className='w-0 overflow-visible flex items-center justify-end gap-2'>
                <Button type='secondary' onClick={() => navigate('home')} text='Sign in'/>
                <Button type='primary' onClick={() => navigate('home')} text='Sign up' icon='east'/>
            </div>
        </header>
        <div className="flex flex-col my-2 w-[80%] mx-auto gap-24">
            <Outlet/>
        </div>
    </main>
}