import React, { useState, useMemo } from 'react';
import { Quote, Shuffle, BookHeart, Sparkles } from 'lucide-react';
import { FRESH_QUOTES, CLASSIC_QUOTES, PURPLE_QUOTES, QUOTES } from '../constants';

const QuoteArchive: React.FC = () => {
  // Unifica todas as frases em uma única lista
  const allQuotes = useMemo(() => {
    return [
      ...QUOTES,
      ...FRESH_QUOTES,
      ...CLASSIC_QUOTES,
      ...PURPLE_QUOTES
    ];
  }, []);

  const totalQuotes = allQuotes.length;

  // Estado para a frase atual
  const [currentIndex, setCurrentIndex] = useState(() => Math.floor(Math.random() * totalQuotes));
  const [isAnimating, setIsAnimating] = useState(false);

  const currentQuote = allQuotes[currentIndex];

  const handleNextQuote = () => {
    setIsAnimating(true);
    setTimeout(() => {
      let nextIndex;
      do {
        nextIndex = Math.floor(Math.random() * totalQuotes);
      } while (nextIndex === currentIndex); // Evita repetição imediata
      
      setCurrentIndex(nextIndex);
      setIsAnimating(false);
    }, 300); // Tempo para a animação de saída
  };

  return (
    <div className="w-full max-w-3xl mx-auto px-4 animate-in slide-in-from-bottom duration-1000 delay-200">
      
      {/* Header do Arquivo */}
      <div className="flex flex-col items-center text-center mb-10 space-y-4">
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-slate-950/40 border border-purple-500/20 text-purple-200 text-xs uppercase tracking-widest backdrop-blur-sm shadow-lg">
            <BookHeart size={14} className="text-fuchsia-400" />
            <span className="font-medium opacity-80">Memórias da Distância</span>
        </div>
        <p className="text-purple-200/50 font-light text-sm max-w-lg leading-relaxed">
          Enquanto você não chegava, o sistema gerou <strong className="text-fuchsia-200/90 font-medium">{totalQuotes} formas diferentes</strong> de dizer que eu sentia sua falta.
        </p>
      </div>

      {/* Card de Frase Interativo - Minimalist Float Design */}
      <div 
        onClick={handleNextQuote}
        className="relative group cursor-pointer perspective-1000"
      >
        {/* Glow Effect Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 via-fuchsia-600/10 to-purple-600/10 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-3xl"></div>

        <div className="relative bg-[#080214]/60 backdrop-blur-xl border border-purple-500/10 hover:border-purple-500/30 rounded-3xl p-10 md:p-14 text-center transition-all duration-500 group-hover:-translate-y-1 shadow-2xl shadow-purple-900/20">
            
            {/* Ícone de Citação */}
            <Quote size={32} className="mx-auto text-purple-500/20 mb-6 transform scale-x-[-1]" />

            {/* Texto da Frase */}
            <div className={`min-h-[100px] flex items-center justify-center transition-all duration-300 ${isAnimating ? 'opacity-0 scale-95 blur-sm' : 'opacity-100 scale-100 blur-0'}`}>
                <p className="font-serif-display text-2xl md:text-3xl text-purple-50 italic leading-tight drop-shadow-sm">
                    "{currentQuote}"
                </p>
            </div>

            {/* Botão de Shuffle */}
            <div className="mt-10 flex justify-center">
                <button 
                    className="flex items-center gap-3 text-[10px] uppercase tracking-[0.2em] text-purple-400/40 group-hover:text-fuchsia-300 transition-colors border-b border-transparent group-hover:border-fuchsia-300/30 pb-1"
                >
                    <Shuffle size={12} className={`transition-transform duration-500 ${isAnimating ? 'rotate-180' : ''}`} />
                    <span>Ver outra memória</span>
                </button>
            </div>
            
            {/* Decoração de Brilho */}
            <Sparkles className="absolute top-6 right-6 text-fuchsia-500/20 group-hover:text-fuchsia-400/60 transition-colors animate-pulse" size={16} />
            <Sparkles className="absolute bottom-6 left-6 text-purple-500/20 group-hover:text-purple-400/60 transition-colors" size={12} />
        </div>
      </div>

      {/* Separador Visual Suave */}
      <div className="w-full flex justify-center mt-16 mb-8">
        <div className="w-2 h-2 bg-purple-500/20 rounded-full mx-2"></div>
        <div className="w-2 h-2 bg-purple-500/20 rounded-full mx-2"></div>
        <div className="w-2 h-2 bg-purple-500/20 rounded-full mx-2"></div>
      </div>

    </div>
  );
};

export default QuoteArchive;