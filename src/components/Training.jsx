import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

export default function Training() {
    const { t } = useLanguage();

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
    };

    return (
        <section id="training" className="py-28 bg-zinc-900 border-t border-zinc-900 relative overflow-hidden">
            <div className="max-w-5xl mx-auto px-4 text-center space-y-8 relative z-10">

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-4xl md:text-5xl font-condensed font-black uppercase tracking-widest text-white mb-4">
                        {t.training.title}
                    </h2>
                    <div className="h-1.5 w-24 bg-red-600 mx-auto mb-8"></div>
                    <p className="text-zinc-400 text-lg max-w-2xl mx-auto leading-relaxed">
                        {t.training.description}
                    </p>
                </motion.div>

                {/* Каскадна сітка */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    className="grid sm:grid-cols-2 gap-6 text-left pt-10"
                >
                    {t.training.services.map((item, index) => (
                        <motion.div key={index} variants={cardVariants} className="border border-zinc-800 bg-zinc-950 p-6 status-box">
                            <h4 className="text-amber-500 font-bold font-condensed text-xl mb-2 uppercase tracking-wide">
                                {item.title}
                            </h4>
                            <p className="text-zinc-400 text-sm leading-relaxed">
                                {item.desc}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6, duration: 0.5 }}
                    className="pt-10"
                >
                    <button onClick={() => window.dispatchEvent(new CustomEvent('open-contact'))} className="btn-base btn-primary hover-target w-full sm:w-auto uppercase font-condensed font-black tracking-widest">
                        {t.training.btnApply}
                    </button>
                </motion.div>
            </div>
        </section>
    );
}