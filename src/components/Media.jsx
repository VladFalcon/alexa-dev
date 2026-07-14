import React from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Autoplay, Navigation } from 'swiper/modules';

// Імпорт стилів Swiper
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';

export default function Media() {
    // Просто додай сюди назви своїх файлів з папки public/img/media/
    const photos = [
        'media1.jpeg',
        'media2.jpeg',
        'media3.jpeg',
        'media4.jpeg',
        'media5.jpeg',
        'media6.jpeg',
        'media7.jpeg',
        ];

    return (
        <section id="media" className="py-28 bg-zinc-950">
            <div className="max-w-6xl mx-auto px-4">
                
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-black font-condensed uppercase tracking-widest text-white">Media Gallery</h2>
                    <div className="h-1.5 w-24 bg-amber-500 mx-auto mt-4"></div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <Swiper
                        modules={[EffectFade, Autoplay, Navigation]}
                        effect="fade"
                        autoplay={{ delay: 3000, disableOnInteraction: false }}
                        navigation
                        loop={true}
                        className="rounded-2xl border border-zinc-800 shadow-2xl overflow-hidden"
                    >
                        {photos.map((photo, index) => (
                            <SwiperSlide key={index}>
                                {/* Фіксуємо висоту, щоб слайдер не стрибав (500px для мобілок, 600px для ПК) */}
                                <div className="w-full h-[500px] md:h-[600px] bg-black relative overflow-hidden flex items-center justify-center">
                                    
                                    {/* 1. Задній фон: розмита і затемнена копія цієї ж фотографії */}
                                    <img 
                                        src={`/img/media/${photo}`} 
                                        alt="" 
                                        className="absolute inset-0 w-full h-full object-cover blur-2xl opacity-40 scale-110 pointer-events-none" 
                                    />
                                    
                                    {/* 2. Передній план: сама фотографія, яка вписується без обрізки (object-contain) */}
                                    <img 
                                        src={`/img/media/${photo}`} 
                                        alt={`Oleksandra Iliukhina ${index + 1}`} 
                                        className="relative z-10 w-full h-full object-contain drop-shadow-2xl" 
                                    />

                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </motion.div>
            </div>
        </section>
    );
}