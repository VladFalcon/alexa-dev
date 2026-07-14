import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Cursor from './components/Cursor';
import Result from './components/Result';
import Partners from './components/Partners';
import Media from './components/Media';
import Training from './components/Training';
import Philosophy from './components/Philosophy';
import Footer from './components/Footer';
import ContactModal from './components/ContactModal';
import VideoModal from './components/VideoModal';
import { LanguageProvider } from './context/LanguageContext';

function App() {
  return (
    // Обгортаємо весь div у LanguageProvider
    <LanguageProvider>
      <div className="bg-zinc-950 text-zinc-100 font-sans antialiased overflow-x-hidden">
        <Cursor />
        <Header />
        <Hero />
        <Result />
        <Partners />
        <Media />
        <Training />
        <Philosophy />
        <Footer />
        <ContactModal />
        <VideoModal />
      </div>
    </LanguageProvider>
  );
}
export default App;