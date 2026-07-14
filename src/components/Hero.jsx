import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

export default function Hero() {
    const { t } = useLanguage();

    return (
        <section className="min-h-screen flex items-center justify-center pt-20 hero-bg-fix relative overflow-hidden">
            <div className="absolute inset-0 z-0">
                <img src="/img/main.jpeg" alt="Oleksandra Iliukhina" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-zinc-950/30 to-zinc-950"></div>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_#000_100%)]"></div>
            </div>

            {/* ТУТ: Зменшили space-y-9 на space-y-6 та прибрали mt-20, щоб весь блок піднявся вище */}
            <div className="max-w-5xl mx-auto px-4 relative z-10 text-center space-y-6 md:space-y-8 mt-10">
                
                <motion.h1 
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="hero-text text-6xl md:text-9xl font-black tracking-tighter text-white uppercase font-condensed leading-none"
                >
                    Oleksandra <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-700 via-red-600 to-amber-500">
                        Iliukhina
                    </span>
                </motion.h1>
                
                <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                    className="text-lg md:text-2xl text-zinc-300 font-light font-condensed tracking-widest uppercase"
                >
                    {t.hero.subtitle.split('●').map((part, i, arr) => (
                        <React.Fragment key={i}>
                            {part.trim()}
                            {i !== arr.length - 1 && <span className="text-amber-500 font-normal px-2">●</span>}
                        </React.Fragment>
                    ))}
                </motion.p>
                
                {/* ТУТ: Зменшили відступ зверху до pt-2 (було pt-6) */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
                    className="pt-2 flex justify-center"
                >
                    <button 
                        onClick={() => window.dispatchEvent(new CustomEvent('open-video'))}
                        className="group flex items-center gap-4 hover-target cursor-none"
                    >
                        <div className="w-14 h-14 rounded-full bg-red-600 flex items-center justify-center group-hover:bg-amber-500 transition-colors shadow-[0_0_20px_rgba(220,38,38,0.4)] group-hover:shadow-[0_0_25px_rgba(245,158,11,0.6)]">
                            <div className="w-0 h-0 border-t-[6px] border-t-transparent border-l-[10px] border-l-white border-b-[6px] border-b-transparent ml-1"></div>
                        </div>
                        <span className="text-white font-condensed tracking-widest uppercase font-bold text-sm group-hover:text-amber-500 transition-colors">
                            Watch Action Reel
                        </span>
                    </button>
                </motion.div>

                {/* ТУТ: Зменшили відступ зверху до pt-4 (було pt-8) */}
                <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.7 }}
                    className="pt-4 flex flex-col sm:flex-row gap-5 justify-center items-center"
                >
                    <button onClick={() => window.dispatchEvent(new CustomEvent('open-contact'))} className="btn-base btn-primary hover-target w-full sm:w-auto uppercase font-condensed font-black tracking-widest">{t.hero.btnPartner}</button>
                    <a href="#media" className="btn-base btn-secondary hover-target w-full sm:w-auto">{t.hero.btnMedia}</a>
                    <button onClick={() => window.dispatchEvent(new CustomEvent('open-contact'))} className="btn-base btn-outline hover-target w-full sm:w-auto uppercase font-condensed font-black tracking-widest">{t.hero.btnTrain}</button>
                </motion.div>

            </div>
        </section>
    );
}