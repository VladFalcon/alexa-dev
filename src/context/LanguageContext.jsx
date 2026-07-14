import React, { createContext, useState, useContext } from 'react';
import { translations } from '../translations';

// Створюємо сам контекст
const LanguageContext = createContext();

// Провайдер, який обгорне наш додаток
export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState('en'); // За замовчуванням англійська

  const toggleLanguage = (lang) => {
    setLanguage(lang);
  };

  // t - це поточний словник (всі слова обраної мови)
  const t = translations[language];

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

// Зручний хук для використання в компонентах
export const useLanguage = () => useContext(LanguageContext);