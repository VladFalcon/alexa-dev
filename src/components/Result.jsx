import React from 'react';
import { motion } from 'framer-motion';

export default function Results() {
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
                        Results & Status
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
                            Benelli Team
                        </h3>
                        <p className="text-zinc-400 text-base leading-relaxed">
                            Official factory shooter representing Benelli globally in international circuits.
                        </p>
                    </motion.div>
                    
                    <motion.div variants={cardVariants} className="status-box">
                        <h3 className="text-2xl font-black font-condensed text-white mb-3 uppercase tracking-wide">
                            Vice-World Champion
                        </h3>
                        <p className="text-zinc-400 text-base leading-relaxed">
                            Silver medalist at the prestigious IPSC World Shoot 2023 in Thailand.
                        </p>
                    </motion.div>
                    
                    <motion.div variants={cardVariants} className="status-box">
                        <h3 className="text-2xl font-black font-condensed text-white mb-3 uppercase tracking-wide">
                            European Champion
                        </h3>
                        <p className="text-zinc-400 text-base leading-relaxed">
                            Gold medalist and title holder at the IPSC European Championship.
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
                            Key Victories & Podiums
                        </h3>
                        <ul className="space-y-4 text-zinc-300 font-condensed tracking-wide text-lg">
                            <li className="flex justify-between border-b border-zinc-900 pb-2">
                                <span>Benelli German National Shotgun</span> <span className="text-amber-500 font-bold">🥇 Gold</span>
                            </li>
                            <li className="flex justify-between border-b border-zinc-900 pb-2">
                                <span>Ukrainian National Championship (2023, 2024, 2025)</span> <span className="text-amber-500 font-bold">🥇 Gold</span>
                            </li>
                            <li className="flex justify-between border-b border-zinc-900 pb-2">
                                <span>IPSC World Shoot (Standard Lady)</span> <span className="text-zinc-400 font-bold">🥈 Silver</span>
                            </li>
                        </ul>
                    </div>
                    
                    <div className="space-y-6">
                        <h3 className="text-2xl font-bold font-condensed text-white uppercase tracking-wider border-b border-zinc-800 pb-3">
                            Upcoming Competition Schedule
                        </h3>
                        <ul className="space-y-4 text-zinc-300 font-condensed tracking-wide text-lg">
                            <li className="flex justify-between border-b border-zinc-900 pb-2">
                                <span>IPSC Level III International Match</span> <span className="text-red-500 font-bold">Schedule 2026</span>
                            </li>
                            <li className="flex justify-between border-b border-zinc-900 pb-2">
                                <span>European Handgun Championship</span> <span className="text-red-500 font-bold">Schedule 2026</span>
                            </li>
                        </ul>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}