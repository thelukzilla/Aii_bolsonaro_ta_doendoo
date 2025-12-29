import React, { useState, useMemo, useEffect } from 'react';
import { Heart, Moon, VolumeX, Volume2 } from 'lucide-react';
import Countdown from './components/Countdown';
import MusicPlayer from './components/MusicPlayer';
import DailyQuote from './components/DailyQuote';
import EmotionalStatus from './components/EmotionalStatus';
import { FOOTER_QUOTES, TIME_GREETINGS, HIDDEN_MESSAGE, TARGET_DATE } from './constants';

const App: React.FC = () => {
  const [hasEntered, setHasEntered] = useState(false);
  const [isSilenceMode, setIsSilenceMode] = useState(false);
  const [clickCount, setClickCount] = useState(0);
  const [showHidden, setShowHidden] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());

  // 1. Time Logic for Greetings & Night Mode (Brasilia UTC-3)
  const brasiliaHour = useMemo(() => {
    // Get current time in UTC
    const now = new Date();
    const utc = now.getTime() + (now.getTimezoneOffset() * 60000);
    // Brasilia is UTC-3
    const brTime = new Date(utc + (3600000 * -3));
    return brTime.getHours();
  }, [currentTime]);

  const timeGreeting = useMemo(() => {
    if (brasiliaHour >= 5 && brasiliaHour < 12) return TIME_GREETINGS.morning;
    if (brasiliaHour >= 12 && brasiliaHour < 18) return TIME_GREETINGS.afternoon;
    return TIME_GREETINGS.night;
  }, [brasiliaHour]);

  const isNight = brasiliaHour >= 18 || brasiliaHour < 5;

  // 2. Nights Counter Logic
  const nightsLeft = useMemo(() => {
    const diff = +new Date(TARGET_DATE) - +new Date();
    if (diff <= 0) return 0;
    return Math.floor(diff / (1000 * 60 * 60 * 24));
  }, [currentTime]);

  // 3. Random Footer Quote (Changes on reload)
  const randomFooterQuote = useMemo(() => {
    const randomIndex = Math.floor(Math.random() * FOOTER_QUOTES.length);
    return FOOTER_QUOTES[randomIndex];
  }, []);

  // Update time periodically to keep "Nights" and Greeting accurate without refresh
  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 60000);
    return () => clearInterval(timer);
  }, []);

  // 7. Hidden Message Logic (Timer + Clicks)
  useEffect(() => {
    if (hasEntered) {
        const timer = setTimeout(() => {
            setShowHidden(true);
        }, 10000); // 10 seconds
        return () => clearTimeout(timer);
    }
  }, [hasEntered]);

  const handleGlobalClick = () => {
    if (!showHidden) {
        const newCount = clickCount + 1;
        setClickCount(newCount);
        if (newCount >= 3) setShowHidden(true);
    }
  };

  const handleEnter = () => {
    setHasEntered(true);
  };

  if (!hasEntered) {
    return (
      <div className="fixed inset-0 bg-slate-950 flex flex-col items-center justify-center z-50 text-slate-200 cursor-pointer" onClick={handleEnter}>
        <div className="text-center space-y-6 animate-in fade-in duration-1000 p-6">
            <h1 className="font-serif-display text-4xl md:text-6xl tracking-wider text-slate-100">
                Anna Beatriz
            </h1>
            <p className="font-light text-slate-400 tracking-[0.2em] text-sm uppercase">
                Toque para entrar
            </p>
            <div className="mt-8 flex justify-center">
                <div className="w-1 h-16 bg-gradient-to-b from-red-900/0 via-red-900/50 to-red-900/0"></div>
            </div>
        </div>
      </div>
    );
  }

  return (
    <div 
        className={`min-h-screen bg-slate-950 text-slate-200 overflow-hidden relative selection:bg-red-900/30 selection:text-red-100 transition-colors duration-1000 ${isSilenceMode ? 'brightness-[0.4]' : ''}`}
        onClick={handleGlobalClick}
    >
      
      {/* 4. Grain/Noise Overlay */}
      <div className="noise-overlay"></div>

      {/* Ambient Background Effects */}
      <div className="fixed inset-0 pointer-events-none transition-opacity duration-1000" style={{ opacity: isSilenceMode ? 0.1 : 1 }}>
        <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-red-900/5 rounded-full blur-[120px] pulse-slow"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] bg-blue-900/5 rounded-full blur-[150px] pulse-slow" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,transparent_0%,#020617_100%)]"></div>
      </div>

      <main className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 pb-24">
        
        {/* Silence Toggle Button (Always visible/clickable) */}
        <div className="absolute top-8 right-8 z-50">
            <button 
                onClick={(e) => { e.stopPropagation(); setIsSilenceMode(!isSilenceMode); }}
                className="flex items-center gap-2 text-xs uppercase tracking-widest text-slate-600 hover:text-slate-300 transition-colors"
            >
                {isSilenceMode ? <><Volume2 size={14} /> Voltar</> : <><VolumeX size={14} /> Silêncio</>}
            </button>
        </div>

        {/* Content Wrapper - Fades in Silence Mode */}
        <div className={`transition-all duration-1000 w-full flex flex-col items-center ${isSilenceMode ? 'opacity-30 grayscale' : 'opacity-100'}`}>
            
            {/* Header */}
            <header className="mb-8 text-center animate-in slide-in-from-top duration-1000">
            <div className="inline-flex items-center gap-2 mb-4 text-red-800/80">
                {/* 3. Subtle Heartbeat */}
                <Heart size={16} fill="currentColor" className="heartbeat" />
            </div>
            <h1 className="font-cinzel text-3xl md:text-5xl text-slate-100 tracking-widest mb-2">
                ANNA BEATRIZ
            </h1>
            <p className="font-light text-slate-500 tracking-[0.3em] text-xs md:text-sm uppercase mb-6">
                {timeGreeting}
            </p>
            </header>

            {/* Countdown Section */}
            <section className="w-full max-w-4xl mx-auto backdrop-blur-sm bg-slate-900/20 border border-slate-800/50 rounded-2xl p-6 md:p-12 shadow-2xl shadow-black/50">
            <Countdown />
            
            <div className="flex flex-col items-center mt-8 gap-4">
                <div className="text-center">
                    <p className="text-xs text-slate-600 uppercase tracking-widest mb-1">Data oficial</p>
                    <p className="text-slate-400 font-serif-display italic">07 de Janeiro de 2026</p>
                </div>

                {/* 5. Nights Counter (Only visible at night) */}
                {isNight && (
                    <div className="mt-4 flex items-center gap-2 text-blue-900/60 animate-in fade-in duration-1000">
                        <Moon size={14} />
                        <span className="text-sm font-serif-display italic tracking-wide text-blue-100/40">
                            Faltam {nightsLeft} noites solitárias
                        </span>
                    </div>
                )}
            </div>
            </section>

            {/* 6. Emotional Weather */}
            <EmotionalStatus />

            {/* Daily Quote Section */}
            <section className="mt-12 w-full animate-in slide-in-from-bottom duration-1000 delay-300">
            <DailyQuote />
            </section>

            {/* 7. Hidden Message */}
            <div className={`mt-8 h-8 flex items-center justify-center transition-opacity duration-1000 ${showHidden ? 'opacity-100' : 'opacity-0'}`}>
                <p className="text-xs text-red-900/70 font-serif-display italic tracking-widest">
                    {HIDDEN_MESSAGE}
                </p>
            </div>

            {/* Fixed Footer Text */}
            <footer className="mt-12 text-center opacity-60 hover:opacity-100 transition-opacity duration-500">
            <p className="font-serif-display text-lg md:text-xl italic text-slate-400">
                “{randomFooterQuote}”
            </p>
            </footer>
        </div>

      </main>

      {/* Music Player */}
      <MusicPlayer autoStart={true} isSilenceMode={isSilenceMode} />
    </div>
  );
};

export default App;