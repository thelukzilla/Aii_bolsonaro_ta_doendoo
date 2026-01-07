import React, { useState } from 'react';
import { ChevronRight, RefreshCw, Star, MapPin, Beer, MessageCircleHeart } from 'lucide-react';
import { FINAL_CARDS } from '../constants';
import { CardData } from '../types';

const FinalCards: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const cards = FINAL_CARDS;

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % (cards.length + 1));
  };

  const isSpecialMessage = activeIndex === cards.length;
  const currentCard = !isSpecialMessage ? cards[activeIndex] : null;
  const isLastCard = activeIndex === cards.length - 1;

  // Função para ícones decorativos
  const getIcon = (index: number) => {
    const icons = [MapPin, Beer, Star, RefreshCw]; 
    const Icon = icons[index % icons.length];
    return <Icon size={16} className="text-purple-400 opacity-50" />;
  };

  const handleWhatsApp = (e: React.MouseEvent) => {
    e.stopPropagation();
    window.open('https://wa.me/qr/U7MI2OIYBO4GO1', '_blank');
  };

  return (
    <div className="w-full max-w-md mx-auto relative perspective-1000 h-[480px] flex items-center justify-center animate-in fade-in slide-in-from-bottom duration-1000">
      
      {/* Background decoration cards (stack effect) */}
      <div className="absolute top-2 w-[90%] h-full bg-purple-900/20 rounded-2xl border border-purple-500/10 blur-[1px] transform scale-95 translate-y-4 -z-10"></div>
      <div className="absolute top-4 w-[85%] h-full bg-purple-900/10 rounded-2xl border border-purple-500/5 blur-[2px] transform scale-90 translate-y-8 -z-20"></div>

      {/* Main Card */}
      <div 
        onClick={handleNext}
        className="w-full h-full bg-slate-950/80 backdrop-blur-xl border border-purple-500/30 rounded-2xl shadow-2xl shadow-purple-900/40 p-8 flex flex-col items-center justify-center text-center cursor-pointer hover:scale-[1.02] transition-transform duration-300 relative overflow-hidden group"
      >
        {/* Decorative corner glow */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-purple-600/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-fuchsia-600/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

        {/* Content */}
        <div className="relative z-10 flex flex-col h-full justify-between items-center py-4 w-full">
            
            {!isSpecialMessage ? (
                /* REGULAR CARD CONTENT */
                <>
                    <div className="flex items-center gap-2 mb-4">
                        <span className="text-[10px] uppercase tracking-[0.3em] text-purple-300/60 font-medium">
                            Card {activeIndex + 1} / {cards.length}
                        </span>
                        {getIcon(activeIndex)}
                    </div>

                    <div className="flex-1 flex flex-col justify-center animate-in slide-in-from-right fade-in duration-500 key={activeIndex} w-full">
                        {/* Se tiver imagem */}
                        {currentCard?.imageUrl ? (
                           <div className="w-full h-56 mb-2 relative rounded-lg overflow-hidden border border-purple-500/20 shadow-lg bg-black/40">
                              <img 
                                src={currentCard.imageUrl} 
                                alt={currentCard.title} 
                                referrerPolicy="no-referrer"
                                className="w-full h-full object-contain object-center transform hover:scale-105 transition-transform duration-700"
                              />
                           </div>
                        ) : (
                           <h3 className="font-serif-display text-2xl md:text-3xl text-purple-100 mb-6 leading-tight italic">
                                {currentCard?.title}
                           </h3>
                        )}
                        
                        <p className={`font-light leading-relaxed ${currentCard?.imageUrl ? 'text-lg font-bold text-red-400 drop-shadow-md' : 'text-slate-300 text-sm md:text-base'}`}>
                            "{currentCard?.text}"
                        </p>
                    </div>

                    <div className="mt-8 flex flex-col items-center gap-2">
                        <p className="text-[10px] text-purple-400/50 text-center px-4 uppercase tracking-widest">
                            Toque para o próximo
                        </p>
                        <ChevronRight size={20} className={`text-purple-400/30 mt-2 transition-transform duration-300 ${isLastCard ? 'rotate-90' : 'group-hover:translate-x-1'}`} />
                    </div>
                </>
            ) : (
                /* WHATSAPP MESSAGE CONTENT (Final Screen) */
                <div className="flex-1 flex flex-col justify-center items-center animate-in zoom-in fade-in duration-700 w-full">
                    <div className="mb-6 text-purple-400 animate-bounce-slow">
                        <MessageCircleHeart size={32} />
                    </div>

                    <div className="space-y-4 font-serif-display italic text-purple-50 text-lg md:text-xl leading-relaxed mb-8">
                        <p>Agora que você chegou,<br/>pode parar de recarregar a página.</p>
                        <p className="text-purple-200">O que era espera virou presença.</p>
                        <p>As palavras ainda funcionam,<br/>mas ao vivo elas têm outro efeito.</p>
                        <p className="text-purple-200">Deixa que eu repito tudo sem tela,<br/>mais perto, mais lento<br/>e do jeito que você gosta de entender.</p>
                    </div>

                    <button 
                        onClick={handleWhatsApp}
                        className="group relative px-6 py-3 bg-fuchsia-900/40 hover:bg-fuchsia-800/60 border border-purple-500/50 rounded-full transition-all duration-300 flex items-center gap-3 overflow-hidden"
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-fuchsia-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <span className="font-light uppercase tracking-widest text-xs text-purple-100 relative z-10">
                            Responder ao vivo
                        </span>
                        <ChevronRight size={14} className="text-purple-200 group-hover:translate-x-1 transition-transform relative z-10" />
                    </button>
                    
                    <span className="text-[10px] text-purple-500/30 uppercase tracking-widest mt-6 cursor-pointer hover:text-purple-400 transition-colors">
                        Toque no card para reiniciar
                    </span>
                </div>
            )}
        </div>

      </div>
    </div>
  );
};

export default FinalCards;