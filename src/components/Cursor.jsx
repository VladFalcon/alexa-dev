import React, { useEffect } from 'react';

export default function Cursor() {
    useEffect(() => {
        // Перевіряємо, чи це десктоп (щоб не ламало тачскрін на мобільних)
        if (!window.matchMedia("(pointer: fine)").matches) return;

        const cursor = document.querySelector('.custom-cursor');
        const follower = document.querySelector('.custom-cursor-follower');

        // Логіка руху курсора
        const onMouseMove = (e) => {
            if (cursor && follower) {
                cursor.style.left = e.clientX + 'px';
                cursor.style.top = e.clientY + 'px';

                // Затримка для кільця (ефект плавності)
                setTimeout(() => {
                    follower.style.left = e.clientX + 'px';
                    follower.style.top = e.clientY + 'px';
                }, 45);
            }
        };

        // Логіка наведення на інтерактивні елементи (кнопки, посилання)
        const handleMouseOver = (e) => {
            const isTarget = e.target.tagName.toLowerCase() === 'a' ||
                e.target.tagName.toLowerCase() === 'button' ||
                e.target.closest('.hover-target');
            if (isTarget) {
                document.body.classList.add('hovering');
            }
        };

        const handleMouseOut = (e) => {
            const isTarget = e.target.tagName.toLowerCase() === 'a' ||
                e.target.tagName.toLowerCase() === 'button' ||
                e.target.closest('.hover-target');
            if (isTarget) {
                document.body.classList.remove('hovering');
            }
        };

        // Підключаємо слухачі подій
        document.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mouseover', handleMouseOver);
        document.addEventListener('mouseout', handleMouseOut);

        // Прибирання за собою (важливе правило React)
        return () => {
            document.removeEventListener('mousemove', onMouseMove);
            document.removeEventListener('mouseover', handleMouseOver);
            document.removeEventListener('mouseout', handleMouseOut);
        };
    }, []);

    return (
        <>
            <div className="custom-cursor hidden md:block z-[9999]"></div>
            <div className="custom-cursor-follower hidden md:block z-[9998]"></div>
        </>
    );
}