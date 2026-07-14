import React, { useState, useEffect } from 'react';
// 1. Імпортуємо наш хук мови
import { useLanguage } from '../context/LanguageContext';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    // 2. Дістаємо поточну мову, функцію перемикання та словник (змінна t)
    const { language, toggleLanguage, t } = useLanguage();

    // Відслідковуємо скрол
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 60);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Керуємо мобільним меню
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
        document.body.style.overflow = !isMenuOpen ? 'hidden' : 'auto';
    };

    return (
        <>
            <header 
                id="main-header" 
                className={`fixed top-0 left-0 w-full z-50 border-b border-transparent transition-all duration-300 ${
                    isScrolled ? 'bg-zinc-950/95 backdrop-blur-xl border-zinc-900 shadow-2xl' : 'bg-transparent'
                }`}
            >
                <div 
                    id="header-container" 
                    className={`max-w-7xl mx-auto px-4 flex justify-between items-center transition-all duration-300 ${
                        isScrolled ? 'py-3.5' : 'py-6'
                    }`}
                >
                    <a href="#" className="logo text-3xl text-white hover-target z-50">
                        OLEKSANDRA<span className="text-red-600">.IPSC</span>
                    </a>
                    
                    {/* Desktop Menu - Тут ми замінили англійські слова на змінні зі словника */}
                    <nav className="hidden lg:flex space-x-8 text-xs font-bold font-condensed tracking-widest uppercase">
                        <a href="#results" className="hover-target text-white hover:text-amber-500 transition">{t.nav.results}</a>
                        <a href="#partners" className="hover-target text-white hover:text-amber-500 transition">{t.nav.partners}</a>
                        <a href="#media" className="hover-target text-white hover:text-amber-500 transition">{t.nav.media}</a>
                        <a href="#training" className="hover-target text-white hover:text-amber-500 transition">{t.nav.training}</a>
                        <a href="#philosophy" className="hover-target text-white hover:text-amber-500 transition">{t.nav.philosophy}</a>
                    </nav>

                    {/* Language & Mobile Burger */}
                    <div className="flex items-center gap-5 z-50">
                        <div className="hidden md:flex items-center gap-2 text-sm font-black font-condensed tracking-widest">
                            {/* Кнопка EN */}
                            <button 
                                onClick={() => toggleLanguage('en')}
                                className={`hover-target transition ${language === 'en' ? 'text-amber-500' : 'text-zinc-500 hover:text-white'}`}
                            >
                                EN
                            </button>
                            <span className="text-zinc-700">|</span>
                            {/* Кнопка UA */}
                            <button 
                                onClick={() => toggleLanguage('ua')}
                                className={`hover-target transition ${language === 'ua' ? 'text-amber-500' : 'text-zinc-500 hover:text-white'}`}
                            >
                                UA
                            </button>
                        </div>
                        
                        <button 
                            onClick={toggleMenu}
                            className="lg:hidden text-white focus:outline-none hover-target p-1" 
                            aria-label="Toggle Menu"
                        >
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="2.5" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
                            </svg>
                        </button>
                    </div>
                </div>
            </header>

            {/* Mobile Menu Overlay - Тут також замінили текст для мобілки */}
            <div 
                className={`fixed inset-0 bg-black/95 backdrop-blur-2xl z-40 flex flex-col justify-center items-center space-y-10 transition-transform duration-300 ${
                    isMenuOpen ? 'translate-x-0' : 'translate-x-full'
                }`}
            >
                <a href="#results" onClick={toggleMenu} className="text-3xl font-black font-condensed uppercase tracking-widest text-white hover:text-amber-500">{t.nav.results}</a>
                <a href="#partners" onClick={toggleMenu} className="text-3xl font-black font-condensed uppercase tracking-widest text-white hover:text-amber-500">{t.nav.partners}</a>
                <a href="#media" onClick={toggleMenu} className="text-3xl font-black font-condensed uppercase tracking-widest text-white hover:text-amber-500">{t.nav.media}</a>
                <a href="#training" onClick={toggleMenu} className="text-3xl font-black font-condensed uppercase tracking-widest text-white hover:text-amber-500">{t.nav.training}</a>
                <a href="#philosophy" onClick={toggleMenu} className="text-3xl font-black font-condensed uppercase tracking-widest text-white hover:text-amber-500">{t.nav.philosophy}</a>
                
                <div className="flex items-center gap-5 text-2xl font-black font-condensed tracking-widest mt-12 pt-10 border-t border-zinc-800 w-2/3 justify-center">
                    <button onClick={() => { toggleLanguage('en'); toggleMenu(); }} className={`${language === 'en' ? 'text-amber-500' : 'text-zinc-500 hover:text-white'}`}>EN</button>
                    <span className="text-zinc-700">|</span>
                    <button onClick={() => { toggleLanguage('ua'); toggleMenu(); }} className={`${language === 'ua' ? 'text-amber-500' : 'text-zinc-500 hover:text-white'}`}>UA</button>
                </div>
            </div>
        </>
    );
}