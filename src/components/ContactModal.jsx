import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';

export default function ContactModal() {
    const [isOpen, setIsOpen] = useState(false);
    const [status, setStatus] = useState(''); // 'sending', 'success', 'error'
    
    // Ініціалізація React Hook Form
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    // Слухаємо подію відкриття модалки
    useEffect(() => {
        const handleOpen = () => {
            setIsOpen(true);
            document.body.style.overflow = 'hidden'; // Блокуємо скрол фону
        };
        window.addEventListener('open-contact', handleOpen);
        
        return () => window.removeEventListener('open-contact', handleOpen);
    }, []);

    const closeModal = () => {
        setIsOpen(false);
        document.body.style.overflow = 'auto';
        setStatus('');
        reset();
    };

    // Функція відправки листа
    const onSubmit = (data) => {
        setStatus('sending');
        
        // ВАЖЛИВО: Ці ключі ми отримаємо на сайті EmailJS пізніше
        const serviceID = 'service_hc0b4ai';
        const templateID = 'template_1ryll6o';
        const publicKey = 'QjNd--x0LCYaQRcMJ';

        emailjs.send(serviceID, templateID, data, publicKey)
            .then(() => {
                setStatus('success');
                setTimeout(() => closeModal(), 3000); // Закриваємо через 3 сек
            })
            .catch((err) => {
                console.error('Email sending error:', err);
                setStatus('error');
            });
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            {/* Темний фон (Backdrop) */}
            <div 
                className="absolute inset-0 bg-black/80 backdrop-blur-sm cursor-pointer"
                onClick={closeModal}
            ></div>
            
            {/* Вікно форми */}
            <div className="relative bg-zinc-950 border border-zinc-800 p-8 md:p-10 max-w-md w-full shadow-2xl reveal active">
                <button 
                    onClick={closeModal}
                    className="absolute top-4 right-4 text-zinc-500 hover:text-white transition hover-target p-2"
                >
                    ✕
                </button>

                <h3 className="text-3xl font-black font-condensed uppercase tracking-widest text-white mb-2">
                    Send Request
                </h3>
                <div className="h-1 w-12 bg-amber-500 mb-8"></div>

                {status === 'success' ? (
                    <div className="text-center py-10 space-y-4">
                        <div className="text-5xl">✔</div>
                        <p className="text-xl font-condensed tracking-widest uppercase text-white">Message Sent</p>
                        <p className="text-zinc-400">We will get back to you shortly.</p>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                        <div>
                            <input 
                                type="text" 
                                placeholder="Your Name" 
                                className={`w-full bg-zinc-900 border ${errors.user_name ? 'border-red-500' : 'border-zinc-800'} p-4 text-white focus:outline-none focus:border-amber-500 transition font-condensed tracking-wide text-lg`}
                                {...register("user_name", { required: true })}
                            />
                        </div>
                        
                        <div>
                            <input 
                                type="email" 
                                placeholder="Your Email" 
                                className={`w-full bg-zinc-900 border ${errors.user_email ? 'border-red-500' : 'border-zinc-800'} p-4 text-white focus:outline-none focus:border-amber-500 transition font-condensed tracking-wide text-lg`}
                                {...register("user_email", { required: true, pattern: /^\S+@\S+$/i })}
                            />
                        </div>
                        
                        <div>
                            <textarea 
                                placeholder="Details (Partnership, Training, etc.)" 
                                rows="4"
                                className={`w-full bg-zinc-900 border ${errors.message ? 'border-red-500' : 'border-zinc-800'} p-4 text-white focus:outline-none focus:border-amber-500 transition font-condensed tracking-wide text-lg resize-none`}
                                {...register("message", { required: true })}
                            ></textarea>
                        </div>

                        {status === 'error' && (
                            <p className="text-red-500 text-sm font-bold">Something went wrong. Please try again.</p>
                        )}

                        <button 
                            type="submit" 
                            disabled={status === 'sending'}
                            className="w-full btn-base btn-primary hover-target mt-4 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {status === 'sending' ? 'Sending...' : 'Submit Form'}
                        </button>
                    </form>
                )}
            </div>
        </div>
    );
}