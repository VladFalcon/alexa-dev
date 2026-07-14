import React, { useState, useEffect } from 'react';

export default function VideoModal() {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        // Слухаємо кастомну подію для відкриття відео
        const handleOpen = () => {
            setIsOpen(true);
            document.body.style.overflow = 'hidden'; // Блокуємо скрол сайту
        };
        window.addEventListener('open-video', handleOpen);
        
        return () => window.removeEventListener('open-video', handleOpen);
    }, []);

    const closeModal = () => {
        setIsOpen(false);
        document.body.style.overflow = 'auto';
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10">
            {/* Темний напівпрозорий фон */}
            <div 
                className="absolute inset-0 bg-black/95 backdrop-blur-xl cursor-pointer"
                onClick={closeModal}
            ></div>
            
            {/* Контейнер відео */}
            <div className="relative w-full max-w-5xl aspect-video bg-black shadow-2xl border border-zinc-800 z-10 animate-fade-in">
                <button 
                    onClick={closeModal}
                    className="absolute -top-12 right-0 text-zinc-500 hover:text-white transition-colors hover-target p-2 text-sm font-black font-condensed tracking-widest uppercase"
                >
                    ✕ Close Video
                </button>
                
                {/* Заміни "dQw4w9WgXcQ" на ID реального відео з YouTube. 
                  Параметр ?autoplay=1 змушує відео запускатися автоматично при відкритті.
                */}
                <iframe 
                    className="w-full h-full"
                    src={`https://www.youtube.com/embed/zN-yQ3smQbU?autoplay=1`}
                    title="Action Video"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                ></iframe>
            </div>
        </div>
    );
}