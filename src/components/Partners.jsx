import React from 'react';
import { motion, useInView, useMotionValue, useTransform, animate } from 'framer-motion';
import { useRef, useEffect } from 'react';

// Ультра-оптимізований лічильник на Framer Motion
function Counter({ target, suffix }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });
    const count = useMotionValue(0);
    const rounded = useTransform(count, Math.round);

    useEffect(() => {
        if (isInView) {
            const controls = animate(count, target, { duration: 2, ease: "easeOut" });
            return controls.stop;
        }
    }, [isInView, target, count]);

    return (
        <span ref={ref}>
            <motion.span>{rounded}</motion.span>{suffix}
        </span>
    );
}

export default function Partners() {
    return (
        <section id="partners" className="py-28 bg-zinc-900 relative">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_#000_100%)] opacity-40 z-0"></div>
            
            <div className="max-w-7xl mx-auto px-4 relative z-10">
                {/* Заголовок */}
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-20 space-y-4"
                >
                    <h2 className="text-4xl md:text-5xl font-condensed font-black uppercase tracking-widest text-white">
                        Partnerships
                    </h2>
                    <div className="h-1.5 w-24 bg-red-600 mx-auto"></div>
                </motion.div>

                {/* Логотипи брендів */}
                <motion.div 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 0.4 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                    className="flex flex-wrap justify-center items-center gap-16 mb-24 tracking-widest font-condensed text-3xl font-black text-zinc-400"
                >
                    <span className="hover:text-white transition duration-300 cursor-default">BENELLI</span>
                    <span className="hover:text-white transition duration-300 cursor-default">OFFICIAL BRAND</span>
                    <span className="hover:text-white transition duration-300 cursor-default">TACTICAL LAB</span>
                </motion.div>

                {/* Головний блок контенту */}
                <div className="grid lg:grid-cols-2 gap-16 items-start">
                    {/* Переваги */}
                    <motion.div 
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.6 }}
                        className="space-y-6"
                    >
                        <h3 className="text-2xl font-black font-condensed text-white uppercase tracking-wider">
                            What a Partner Gets
                        </h3>
                        <ul className="space-y-4 text-zinc-300 text-lg">
                            <li className="flex items-start gap-4"><span className="text-red-500 text-xl font-bold">✔</span> <span>International brand representation at global Tier-1 shooting events.</span></li>
                            <li className="flex items-start gap-4"><span className="text-red-500 text-xl font-bold">✔</span> <span>Targeted, high-performance tactical social media presence.</span></li>
                            <li className="flex items-start gap-4"><span className="text-red-500 text-xl font-bold">✔</span> <span>Premium content creation (action video, product field testing).</span></li>
                            <li className="flex items-start gap-4"><span className="text-red-500 text-xl font-bold">✔</span> <span>Direct commercial access to an ultra-focused shooting & tactical market.</span></li>
                        </ul>
                    </motion.div>
                    
                    {/* Статистика */}
                    <motion.div 
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.6 }}
                        className="bg-zinc-950 p-10 border border-zinc-800 relative overflow-hidden status-box"
                    >
                        <h3 className="text-2xl font-black font-condensed text-amber-500 mb-8 uppercase tracking-wider">
                            Audience Statistics
                        </h3>
                        <div className="space-y-6">
                            <div>
                                <p className="stat-label">Instagram Monthly Reach</p>
                                <p className="stat-value flex items-baseline">
                                    <span className="font-condensed text-white text-5xl font-black">
                                        <Counter target={100} suffix="K+" />
                                    </span>
                                    <span className="text-base text-zinc-500 font-normal ml-3">/ users</span>
                                </p>
                            </div>
                            <div>
                                <p className="stat-label text-zinc-500 uppercase text-sm font-bold">Core Demographics</p>
                                <p className="text-lg font-bold text-white uppercase tracking-wide font-condensed">Shooting, Tactical Systems</p>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Кнопки */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                    className="mt-20 flex flex-col sm:flex-row justify-center gap-5"
                >
                    <button onClick={() => window.dispatchEvent(new CustomEvent('open-contact'))} className="btn-base btn-primary hover-target uppercase font-condensed font-black tracking-widest">
                        Become a Partner
                    </button>
                    <a href="/media-kit.pdf" download="Alexa_Iliukhina_Media_Kit.pdf" className="btn-base btn-outline hover-target uppercase font-condensed font-black tracking-widest">
                        Download Media Kit
                    </a>
                </motion.div>
            </div>
        </section>
    );
}