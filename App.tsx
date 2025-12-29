import React, { useState } from 'react';
import { Heart } from 'lucide-react';
import Countdown from './components/Countdown';
import MusicPlayer from './components/MusicPlayer';
import DailyQuote from './components/DailyQuote';

const App: React.FC = () => {
  const [hasEntered, setHasEntered] = useState(false);

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
    <div className="min-h-screen bg-slate-950 text-slate-200 overflow-hidden relative selection:bg-red-900/30 selection:text-red-100">
      
      {/* Ambient Background Effects */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-red-900/5 rounded-full blur-[120px] pulse-slow"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] bg-blue-900/5 rounded-full blur-[150px] pulse-slow" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,transparent_0%,#020617_100%)]"></div>
      </div>

      <main className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 pb-24">
        
        {/* Header */}
        <header className="mb-12 text-center animate-in slide-in-from-top duration-1000">
          <div className="inline-flex items-center gap-2 mb-4 text-red-800/60">
             <Heart size={16} fill="currentColor" className="animate-pulse" />
          </div>
          <h1 className="font-cinzel text-3xl md:text-5xl text-slate-100 tracking-widest mb-2">
            ANNA BEATRIZ
          </h1>
          <p className="font-light text-slate-500 tracking-[0.3em] text-xs md:text-sm uppercase">
            Até o nosso encontro
          </p>
        </header>

        {/* Countdown Section */}
        <section className="w-full max-w-4xl mx-auto backdrop-blur-sm bg-slate-900/20 border border-slate-800/50 rounded-2xl p-6 md:p-12 shadow-2xl shadow-black/50">
          <Countdown />
          <div className="text-center mt-8">
            <p className="text-xs text-slate-600 uppercase tracking-widest mb-1">Data oficial</p>
            <p className="text-slate-400 font-serif-display italic">07 de Janeiro de 2026</p>
          </div>
        </section>

        {/* Daily Quote Section */}
        <section className="mt-16 w-full animate-in slide-in-from-bottom duration-1000 delay-300">
          <DailyQuote />
        </section>

        {/* Fixed Footer Text */}
        <footer className="mt-20 text-center opacity-60 hover:opacity-100 transition-opacity duration-500">
          <p className="font-serif-display text-lg md:text-xl italic text-slate-400">
            “Algumas pessoas não se esquecem. Se esperam.”
          </p>
        </footer>

      </main>

      {/* Music Player */}
      <MusicPlayer autoStart={true} />
    </div>
  );
};

export default App;