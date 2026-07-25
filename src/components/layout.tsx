import NavButton from "./nav-button.tsx";
import Button from "./button.tsx";
import {useEffect, useState} from "react";
import HomePage from "../pages/HomePage.tsx";

type Page = 'home' | 'products' | 'about' | 'faq';

export default function Layout() {
    const [currentPage, setCurrentPage] = useState<Page>('home');
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const renderPage = () => {
        switch (currentPage) {
            case 'home':
                return <HomePage/>;
            case 'products':
                return <div className="text-center py-20 text-3xl">Products Page (Coming Soon)</div>;
            case 'about':
                return <div className="text-center py-20 text-3xl">About Us Page (Coming Soon)</div>;
            case 'faq':
                return <div className="text-center py-20 text-3xl">FAQ Page (Coming Soon)</div>;
            default:
                return <HomePage/>;
        }
    }

    return <main>
        <header
            className={`transition duration-500 sticky top-0 z-1 text-sm px-16 py-4 bg-white flex items-center justify-between ${isScrolled && 'shadow-md'}`}>
            <p className='font-logo w-0 overflow-visible text-2xl font-bold'>LV<span
                className='text-brand-primary'>TEK</span></p>
            <nav className='flex-1 flex justify-center gap-10'>
                <NavButton active={currentPage === 'home'} onClick={() => setCurrentPage('home')} text='Home'/>
                <NavButton active={currentPage === 'products'} onClick={() => setCurrentPage('products')}
                           text='Products'/>
                <NavButton active={currentPage === 'about'} onClick={() => setCurrentPage('about')} text='About us'/>
                <NavButton active={currentPage === 'faq'} onClick={() => setCurrentPage('faq')} text='FAQ'/>
            </nav>
            <div className='w-0 overflow-visible flex items-center justify-end gap-2'>
                <Button type='secondary' onClick={() => {
                }} text='Sign in'/>
                <Button type='primary' onClick={() => {
                }} text='Sign up' icon='east'/>
            </div>
        </header>
        <div className="flex flex-col my-2 w-[80%] mx-auto gap-24">
            {renderPage()}
        </div>
    </main>
}