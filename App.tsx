import React, { useState, useMemo, useEffect } from 'react';
import { Heart, Moon, Shuffle, Crown, Stars } from 'lucide-react';
import Countdown from './components/Countdown';
import MusicPlayer from './components/MusicPlayer';
import DailyQuote from './components/DailyQuote';
import EmotionalStatus from './components/EmotionalStatus';
import FinalCards from './components/FinalCards';
import { FRESH_QUOTES, CLASSIC_QUOTES, PURPLE_QUOTES, FINALE_QUOTES, TIME_GREETINGS, HIDDEN_MESSAGES, TARGET_DATE, THEMES } from './constants';

const App: React.FC = () => {
  const [hasEntered, setHasEntered] = useState(false);
  const [clickCount, setClickCount] = useState(0);
  const [showHidden, setShowHidden] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());
  
  // State for Finale
  const [isFinished, setIsFinished] = useState(false);
  
  // Theme and Quote State
  const [currentThemeIndex, setCurrentThemeIndex] = useState(0);
  const [currentFooterQuote, setCurrentFooterQuote] = useState('');

  const theme = THEMES[currentThemeIndex];
  
  // Lógica para detectar se é o tema exclusivo (Roxo)
  const isPurpleTheme = theme.name === "O Mundo Dela";

  // Helper to pick a quote based on current theme and weighted probability
  const getWeightedQuote = (isPurple: boolean) => {
    // 1. Se for tema Roxo, SEMPRE usa frases roxas.
    if (isPurple) {
        const randomIndex = Math.floor(Math.random() * PURPLE_QUOTES.length);
        return PURPLE_QUOTES[randomIndex];
    }
    
    // 2. Se for outro tema, 60% chance de FRESH, 40% chance de CLASSIC
    const useFresh = Math.random() < 0.6;
    const sourceArray = useFresh ? FRESH_QUOTES : CLASSIC_QUOTES;
    const randomIndex = Math.floor(Math.random() * sourceArray.length);
    return sourceArray[randomIndex];
  };

  // Trigger when countdown ends or preview is clicked
  const handleFinish = () => {
    setIsFinished(true);
    // Force switch to Purple Theme if not already
    const purpleIndex = THEMES.findIndex(t => t.name === "O Mundo Dela");
    if (purpleIndex !== -1) {
        setCurrentThemeIndex(purpleIndex);
    }
    // Set a specific finale quote
    const randomFinaleQuote = FINALE_QUOTES[Math.floor(Math.random() * FINALE_QUOTES.length)];
    setCurrentFooterQuote(randomFinaleQuote);
  };

  // Initialize random footer quote on mount
  useEffect(() => {
    setCurrentFooterQuote(getWeightedQuote(isPurpleTheme));
  }, []);

  // Handler to change theme and quote simultaneously
  const handleNewAtmosphere = (e: React.MouseEvent) => {
    e.stopPropagation();
    
    // Rotate Theme
    const nextIndex = (currentThemeIndex + 1) % THEMES.length;
    setCurrentThemeIndex(nextIndex);
    
    // Check if next theme is the Exclusive Purple theme
    const nextTheme = THEMES[nextIndex];
    const nextIsPurple = nextTheme.name === "O Mundo Dela";
    
    // Pick quote based on theme and weight
    setCurrentFooterQuote(getWeightedQuote(nextIsPurple));
  };

  // Handler just for quotes when Finished (Theme Locked)
  const handleNewFinaleQuote = (e: React.MouseEvent) => {
    e.stopPropagation();
    const randomIndex = Math.floor(Math.random() * FINALE_QUOTES.length);
    setCurrentFooterQuote(FINALE_QUOTES[randomIndex]);
  }

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
    if (isFinished) return "Bem-vinda ao nosso caos.";
    if (isPurpleTheme) return "O roxo te veste tão bem quanto a minha saudade.";
    if (brasiliaHour >= 5 && brasiliaHour < 12) return TIME_GREETINGS.morning;
    if (brasiliaHour >= 12 && brasiliaHour < 18) return TIME_GREETINGS.afternoon;
    return TIME_GREETINGS.night;
  }, [brasiliaHour, isPurpleTheme, isFinished]);

  const isNight = brasiliaHour >= 18 || brasiliaHour < 5;

  // 2. Nights Counter Logic
  const nightsLeft = useMemo(() => {
    const diff = +new Date(TARGET_DATE) - +new Date();
    if (diff <= 0) return 0;
    return Math.floor(diff / (1000 * 60 * 60 * 24));
  }, [currentTime]);

  // 4. Random Hidden Message (Changes on reload)
  const randomHiddenMessage = useMemo(() => {
    const randomIndex = Math.floor(Math.random() * HIDDEN_MESSAGES.length);
    return HIDDEN_MESSAGES[randomIndex];
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
    if (!showHidden && !isFinished) { // Disable hidden message clicks in finale
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
      <div className={`fixed inset-0 ${theme.bgClass} flex flex-col items-center justify-center z-50 text-slate-200 cursor-pointer transition-colors duration-1000`} onClick={handleEnter}>
        <div className="text-center space-y-6 animate-in fade-in duration-1000 p-6">
            <h1 className="font-serif-display text-4xl md:text-6xl tracking-wider text-slate-100">
                Anna Beatriz
            </h1>
            <p className={`font-light ${theme.textMuted} tracking-[0.2em] text-sm uppercase`}>
                Toque para entrar
            </p>
            <div className="mt-8 flex justify-center">
                <div className={`w-1 h-16 bg-gradient-to-b from-transparent via-${theme.accentBg.replace('bg-', '')} to-transparent opacity-50`}></div>
            </div>
        </div>
      </div>
    );
  }

  return (
    <div 
        className={`min-h-screen ${theme.bgClass} ${theme.textMain} ${theme.selection} overflow-hidden relative transition-colors duration-1000`}
        onClick={handleGlobalClick}
    >
      
      {/* 4. Grain/Noise Overlay */}
      <div className="noise-overlay"></div>

      {/* Improved Heartbeat Background Effect */}
      <div className="fixed inset-0 pointer-events-none transition-all duration-1000">
         {/* Central beating heart core - Larger and glowier if Purple Theme */}
        <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full animate-heartbeat-bg ${theme.accentBg} ${isPurpleTheme ? 'w-[60vw] h-[60vw] md:w-[40vw] md:h-[40vw] blur-[120px] opacity-40' : 'w-[40vw] h-[40vw] md:w-[25vw] md:h-[25vw] blur-[100px]'}`}></div>
        
        {/* Secondary ambient glow */}
        <div className={`absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] rounded-full blur-[150px] pulse-slow opacity-20 ${theme.accentBg}`} style={{ animationDelay: '2s' }}></div>
        
        {/* Vignette */}
        <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,transparent_0%,${theme.bgClass.replace('bg-', '#')}99_100%)]`}></div>
      </div>

      <main className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 pb-24">
        
        {/* Top Right Controls */}
        <div className="absolute top-8 right-8 z-50 flex flex-col items-end gap-3">
            {/* Standard Theme Switcher - Hidden when Finished */}
            {!isFinished && (
                <button 
                    onClick={handleNewAtmosphere}
                    className={`flex items-center gap-2 text-xs uppercase tracking-widest ${theme.textMuted} hover:${theme.textMain} transition-colors group`}
                >
                    <Shuffle size={14} className="group-hover:rotate-180 transition-transform duration-500" /> 
                    <span className="hidden sm:inline">Nova Atmosfera</span>
                </button>
            )}

            {/* Finale Quote Switcher - Visible ONLY when Finished */}
            {isFinished && (
                <button 
                    onClick={handleNewFinaleQuote}
                    className={`flex items-center gap-2 text-xs uppercase tracking-widest text-purple-300/60 hover:text-purple-100 transition-colors group`}
                >
                    <Stars size={14} className="group-hover:spin-slow transition-transform" /> 
                    <span className="hidden sm:inline">Nova Frase</span>
                </button>
            )}
        </div>

        {/* Content Wrapper */}
        <div className="transition-all duration-1000 w-full flex flex-col items-center">
            
            {/* Header */}
            <header className="mb-8 text-center animate-in slide-in-from-top duration-1000">
                <div className={`inline-flex items-center gap-2 mb-4 ${theme.accentText} opacity-80`}>
                    {/* 3. Icon: Heart usually, Crown if Purple Theme */}
                    {isPurpleTheme ? (
                    <Crown size={20} fill="currentColor" className="heartbeat-icon text-yellow-500/80 drop-shadow-glow" />
                    ) : (
                    <Heart size={16} fill="currentColor" className="heartbeat-icon" />
                    )}
                </div>
                
                {/* Title changes based on Theme */}
                {isPurpleTheme ? (
                <h1 className="font-serif-display italic text-4xl md:text-6xl tracking-wide mb-2 text-transparent bg-clip-text bg-gradient-to-r from-purple-200 via-fuchsia-200 to-purple-200 animate-pulse">
                    Minha Anna
                </h1>
                ) : (
                <h1 className="font-cinzel text-3xl md:text-5xl tracking-widest mb-2">
                    ANNA BEATRIZ
                </h1>
                )}

                <p className={`font-light ${theme.textMuted} tracking-[0.3em] text-xs md:text-sm uppercase mb-6`}>
                    {timeGreeting}
                </p>
            </header>

            {/* CONDITIONAL RENDERING: Countdown OR Final Cards */}
            {!isFinished ? (
                <>
                    {/* Countdown Section */}
                    <section className={`w-full max-w-4xl mx-auto backdrop-blur-sm rounded-2xl p-6 md:p-12 shadow-2xl transition-all duration-1000 ${isPurpleTheme ? 'bg-fuchsia-950/20 border border-purple-500/20 shadow-purple-900/30' : 'bg-black/10 border border-white/5 shadow-black/50'}`}>
                        <Countdown onComplete={handleFinish} />
                        
                        <div className="flex flex-col items-center mt-8 gap-4">
                            <div className="text-center">
                                <p className={`text-xs ${theme.textMuted} uppercase tracking-widest mb-1`}>
                                {isPurpleTheme ? "Nosso reencontro real" : "Data oficial"}
                                </p>
                                <p className={`font-serif-display italic opacity-80`}>07 de Janeiro de 2026</p>
                            </div>

                            {/* Nights Counter (Only visible at night OR if it's the Purple Theme) */}
                            {(isNight || isPurpleTheme) && (
                                <div className={`mt-4 flex items-center gap-2 ${theme.accentText} animate-in fade-in duration-1000 opacity-60`}>
                                    <Moon size={14} />
                                    <span className="text-sm font-serif-display italic tracking-wide">
                                        Faltam {nightsLeft} noites {isPurpleTheme ? "sonhando com você" : "solitárias"}
                                    </span>
                                </div>
                            )}
                        </div>
                    </section>

                    {/* Emotional Weather */}
                    <EmotionalStatus isFinished={isFinished} />

                    {/* Daily Quote Section */}
                    <section className="mt-12 w-full animate-in slide-in-from-bottom duration-1000 delay-300">
                        <DailyQuote />
                    </section>
                </>
            ) : (
                /* FINAL STATE UI */
                <div className="w-full mt-8 animate-in zoom-in duration-1000 ease-out">
                    <FinalCards />
                    
                    <div className="mt-12 text-center opacity-80 animate-in fade-in slide-in-from-bottom duration-1000 delay-500">
                        <EmotionalStatus isFinished={isFinished} />
                        <div className="mt-8">
                            <p className="text-purple-200/50 text-xs uppercase tracking-widest mb-2">Status Atual</p>
                            <p className="text-purple-100 font-serif-display italic text-lg">
                                Vivendo o extraordinário.
                            </p>
                        </div>
                    </div>
                </div>
            )}

            {/* Hidden Message (Only if NOT finished) */}
            {!isFinished && (
                <div className={`mt-8 h-8 flex items-center justify-center transition-opacity duration-1000 ${showHidden ? 'opacity-100' : 'opacity-0'}`}>
                    <p className={`text-xs ${theme.accentText} font-serif-display italic tracking-widest opacity-70`}>
                        {randomHiddenMessage}
                    </p>
                </div>
            )}

            {/* Fixed Footer Text (Dynamic) */}
            <footer className="mt-12 text-center opacity-60 hover:opacity-100 transition-opacity duration-500 px-4">
                <p className={`font-serif-display text-lg md:text-xl italic ${theme.textMuted} animate-in fade-in slide-in-from-bottom-2 duration-500`} key={currentFooterQuote}>
                    “{currentFooterQuote}”
                </p>
            </footer>
        </div>

      </main>

      {/* Music Player */}
      <MusicPlayer autoStart={true} />
    </div>
  );
};

export default App;