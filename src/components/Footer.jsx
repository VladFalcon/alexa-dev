import React from 'react';
import { motion } from 'framer-motion';
// Імпортуємо потрібні іконки з колекції FontAwesome (fa)
import { FaInstagram, FaFacebookF, FaTiktok, FaYoutube } from 'react-icons/fa';

export default function Footer() {
    return (
        <footer id="contacts" className="py-16 bg-black text-center text-zinc-600 border-t border-zinc-900">
            <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="max-w-7xl mx-auto px-4"
            >
                <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                    
                    {/* Ліва частина: Ім'я та статус */}
                    <div className="text-center md:text-left space-y-2">
                        <p className="text-white font-condensed font-black tracking-widest text-xl">OLEKSANDRA ILIUKHINA</p>
                        <p className="text-sm uppercase tracking-wider text-zinc-500">Professional Athlete & Brand Ambassador</p>
                    </div>

                    {/* Права частина: Контакти та Соцмережі */}
                    <div className="flex flex-col sm:flex-row items-center gap-6">
                        
                        {/* Кнопка повідомлення */}
                        <button 
                            onClick={() => window.dispatchEvent(new CustomEvent('open-contact'))} 
                            className="hover-target text-sm font-bold font-condensed uppercase tracking-widest text-zinc-400 hover:text-amber-500 transition"
                        >
                            Direct Message
                        </button>

                        {/* Вертикальний розділювач (зникне на мобільному) */}
                        <div className="hidden sm:block w-px h-6 bg-zinc-800"></div>

                        {/* Блок круглих іконок соцмереж */}
                        <div className="flex items-center gap-3">
                            <a 
                                href="https://www.instagram.com/alexiliukhina/" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="w-10 h-10 rounded-full border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-amber-500 hover:border-amber-500 hover:bg-amber-500/10 transition-all hover-target"
                                aria-label="Instagram"
                            >
                                <FaInstagram size={18} />
                            </a>
                            <a 
                                href="https://www.facebook.com/oleksandra.iliukhina" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="w-10 h-10 rounded-full border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-amber-500 hover:border-amber-500 hover:bg-amber-500/10 transition-all hover-target"
                                aria-label="Facebook"
                            >
                                <FaFacebookF size={16} />
                            </a>
                            <a 
                                href="https://www.tiktok.com/@alexiliukhina" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="w-10 h-10 rounded-full border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-amber-500 hover:border-amber-500 hover:bg-amber-500/10 transition-all hover-target"
                                aria-label="TikTok"
                            >
                                <FaTiktok size={16} />
                            </a>
                            <a 
                                href="https://www.youtube.com/@alexiliukhina" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="w-10 h-10 rounded-full border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-amber-500 hover:border-amber-500 hover:bg-amber-500/10 transition-all hover-target"
                                aria-label="YouTube"
                            >
                                <FaYoutube size={18} />
                            </a>
                        </div>
                    </div>

                </div>
                
                {/* Копірайт */}
                <div className="mt-12 text-center text-xs tracking-widest text-zinc-700 uppercase">
                    &copy; {new Date().getFullYear()} Oleksandra Iliukhina. All rights reserved.
                </div>
            </motion.div>
        </footer>
    );
}