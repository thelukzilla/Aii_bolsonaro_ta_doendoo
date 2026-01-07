import React, { useState, useEffect } from 'react';

// Frases dinâmicas para o estado de "Vontade"
const VONTADE_PHRASES = [
  "Difícil de controlar",
  "Ignorada sem sucesso",
  "Mal administrada",
  "Claramente problemática",
  "Incontrolável",
  "Instável",
  "Fora do script"
];

// Frases ocultas (Easter Eggs) ao clicar
const EASTER_EGGS = [
  "Status atualizado pela sua ausência.",
  "Não é bug. É você.",
  "Valores aproximados. Sentimento exato.",
  "Tentando recalcular...",
  "O sistema não aguenta tanta espera."
];

interface Props {
  isFinished?: boolean;
}

const EmotionalStatus: React.FC<Props> = ({ isFinished = false }) => {
  const [saudade, setSaudade] = useState(92);
  const [vontade, setVontade] = useState("Incontrolável");
  const [eggMessage, setEggMessage] = useState<string | null>(null);

  // Efeito de flutuação e mudança dinâmica
  useEffect(() => {
    if (isFinished) return;

    const interval = setInterval(() => {
      // Flutua a Saudade levemente entre 85% e 100%
      setSaudade(prev => {
        // 50% de chance de subir ou descer
        const change = Math.random() > 0.5 ? 1 : -1;
        const next = prev + change;
        return Math.max(85, Math.min(100, next));
      });

      // 30% de chance de trocar a frase da Vontade a cada ciclo
      if (Math.random() > 0.7) {
        const randomIdx = Math.floor(Math.random() * VONTADE_PHRASES.length);
        setVontade(VONTADE_PHRASES[randomIdx]);
      }
    }, 3000); // Atualiza a cada 3 segundos

    return () => clearInterval(interval);
  }, [isFinished]);

  // Interação Oculta (Easter Egg)
  const handleClick = () => {
    if (isFinished || eggMessage) return;

    const randomMsg = EASTER_EGGS[Math.floor(Math.random() * EASTER_EGGS.length)];
    setEggMessage(randomMsg);

    // Reseta a mensagem após 3 segundos
    setTimeout(() => {
      setEggMessage(null);
    }, 3000);
  };

  // Define os textos baseados no estado final
  const displaySaudade = isFinished ? "CONCLUÍDA" : `${saudade}%`;
  const displayVontade = isFinished ? "SACIEDADE IMEDIATA" : vontade;

  // Estilos especiais para o final (Dourado/Premium)
  const finaleContainerClass = isFinished 
    ? "bg-gradient-to-r from-purple-900/40 via-fuchsia-900/40 to-purple-900/40 border-purple-500/30 px-8 py-2 rounded-full shadow-[0_0_15px_rgba(168,85,247,0.3)]" 
    : "";

  const finaleTextClass = isFinished ? "text-fuchsia-100 drop-shadow-md font-medium" : "text-slate-500";
  const finaleDotClass = isFinished ? "bg-fuchsia-400 shadow-[0_0_8px_#e879f9]" : "bg-red-900/80 animate-pulse";

  return (
    <div 
      onClick={handleClick}
      className={`
        relative h-16 flex items-center justify-center mt-4
        transition-all duration-500 select-none
        ${!isFinished ? 'cursor-pointer hover:opacity-100' : ''}
        ${eggMessage ? 'scale-105 text-purple-300' : 'opacity-90'}
      `}
    >
      {/* Camada do Easter Egg (aparece ao clicar) */}
      <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-500 ${eggMessage ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
         <span className="text-xs sm:text-sm font-serif-display italic tracking-widest text-center px-4">{eggMessage}</span>
      </div>

      {/* Conteúdo Principal */}
      <div className={`flex gap-4 sm:gap-6 justify-center items-center transition-all duration-500 ${eggMessage ? 'opacity-0' : 'opacity-100'} ${finaleContainerClass}`}>
        
        {/* Status Saudade */}
        <div className="flex items-center gap-3 group">
          <span className={`w-2 h-2 rounded-full transition-colors duration-1000 ${finaleDotClass}`}></span>
          <span className={`text-[10px] sm:text-xs font-light tracking-widest uppercase ${finaleTextClass}`}>
            Saudade: <span className={`transition-all duration-1000 ${!isFinished && 'font-mono'}`}>{displaySaudade}</span>
          </span>
        </div>

        {/* Separador */}
        <div className={`w-[1px] h-4 self-center transition-colors duration-1000 ${isFinished ? 'bg-fuchsia-500/40' : 'bg-slate-800/50'}`}></div>

        {/* Status Vontade */}
        <div className="flex items-center gap-3 group">
           <span className={`w-2 h-2 rounded-full transition-colors duration-1000 ${isFinished ? 'bg-purple-400 shadow-[0_0_8px_#c084fc]' : 'bg-blue-900/80 animate-pulse'}`} style={{ animationDelay: '1s' }}></span>
          <span className={`text-[10px] sm:text-xs font-light tracking-widest uppercase transition-all duration-1000 ${finaleTextClass} ${!isFinished && 'drop-shadow-[0_0_8px_rgba(255,255,255,0.1)]'}`}>
            Vontade: {displayVontade}
          </span>
        </div>

      </div>
    </div>
  );
};

export default EmotionalStatus;