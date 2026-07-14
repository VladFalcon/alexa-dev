import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

export default function Results() {
    const { t } = useLanguage();

    // Варіанти анімації для контейнера карток (робить каскадну появу)
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {      
            opacity: 1,
            transition: {
                staggerChildren: 0.2 // Затримка 0.2с між появою кожної наступної картки
            }
        }
    };

    // Варіанти анімації для самої картки
    const cardVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
    };

    return (
        // Ми прибрали класи reveal, бо тепер анімацією керує Framer Motion
        <section id="results" className="py-28 bg-zinc-950 border-t border-zinc-900">
            <div className="max-w-7xl mx-auto px-4">
                
                {/* Заголовок */}
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }} // once: true означає, що анімація програється лише раз
                    transition={{ duration: 0.6 }}
                    className="text-center mb-20 space-y-4"
                >
                    <h2 className="text-4xl md:text-5xl font-condensed font-black uppercase tracking-widest text-white">
                        {t.results.title}
                    </h2>
                    <div className="h-1.5 w-24 bg-gradient-to-r from-red-700 to-amber-500 mx-auto"></div>
                </motion.div>

                {/* Картки досягнень (з каскадною анімацією) */}
                <motion.div 
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    className="grid md:grid-cols-3 gap-8"
                >
                    <motion.div variants={cardVariants} className="status-box">
                        <h3 className="text-2xl font-black font-condensed text-amber-500 mb-3 uppercase tracking-wide">
                            {t.results.benelli.title}
                        </h3>
                        <p className="text-zinc-400 text-base leading-relaxed">
                            {t.results.benelli.description}
                        </p>
                    </motion.div>
                    
                    <motion.div variants={cardVariants} className="status-box">
                        <h3 className="text-2xl font-black font-condensed text-white mb-3 uppercase tracking-wide">
                            {t.results.viceWorldChampion.title}
                        </h3>
                        <p className="text-zinc-400 text-base leading-relaxed">
                            {t.results.viceWorldChampion.description}
                        </p>
                    </motion.div>
                    
                    <motion.div variants={cardVariants} className="status-box">
                        <h3 className="text-2xl font-black font-condensed text-white mb-3 uppercase tracking-wide">
                            {t.results.europeanChampion.title}
                        </h3>
                        <p className="text-zinc-400 text-base leading-relaxed">
                            {t.results.europeanChampion.description}
                        </p>
                    </motion.div>
                </motion.div>

                {/* Календар та Перемоги */}
                <motion.div 
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.8 }}
                    className="mt-24 grid lg:grid-cols-2 gap-16"
                >
                    <div className="space-y-6">
                        <h3 className="text-2xl font-bold font-condensed text-white uppercase tracking-wider border-b border-zinc-800 pb-3">
                            {t.results.keyVictories.title}
                        </h3>
                        <ul className="space-y-4 text-zinc-300 font-condensed tracking-wide text-lg">
                            <li className="flex justify-between border-b border-zinc-900 pb-2">
                                <span>{t.results.keyVictories.firstVictory}</span>
                            </li>
                            <li className="flex justify-between border-b border-zinc-900 pb-2">
                                <span>{t.results.keyVictories.secondVictory}</span>
                            </li>
                            <li className="flex justify-between border-b border-zinc-900 pb-2">
                                <span>{t.results.keyVictories.thirdVictory}</span>
                            </li>
                        </ul>
                    </div>
                    
                    <div className="space-y-6">
                        <h3 className="text-2xl font-bold font-condensed text-white uppercase tracking-wider border-b border-zinc-800 pb-3">
                            {t.results.competitionSchedule.title}
                        </h3>
                        <ul className="space-y-4 text-zinc-300 font-condensed tracking-wide text-lg">
                            <li className="flex justify-between border-b border-zinc-900 pb-2">
                                <span>{t.results.competitionSchedule.firstSchedule}</span>
                            </li>
                            <li className="flex justify-between border-b border-zinc-900 pb-2">
                                <span>{t.results.competitionSchedule.secondSchedule}</span>
                            </li>
                            <li className="flex justify-between border-b border-zinc-900 pb-2">
                                <span>{t.results.competitionSchedule.thirdSchedule}</span>
                            </li>
                        </ul>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}