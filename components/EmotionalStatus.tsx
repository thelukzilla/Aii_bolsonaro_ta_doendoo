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
  const displaySaudade = isFinished ? "RESOLVIDA" : `${saudade}%`;
  const displayVontade = isFinished ? "EM ANDAMENTO" : vontade;

  return (
    <div 
      onClick={handleClick}
      className={`
        relative h-12 flex items-center justify-center mt-4
        transition-all duration-500 select-none
        ${!isFinished ? 'cursor-pointer hover:opacity-100' : ''}
        ${eggMessage ? 'scale-105 text-purple-300' : 'text-slate-500 opacity-80'}
      `}
    >
      {/* Camada do Easter Egg (aparece ao clicar) */}
      <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-500 ${eggMessage ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
         <span className="text-xs sm:text-sm font-serif-display italic tracking-widest text-center px-4">{eggMessage}</span>
      </div>

      {/* Conteúdo Principal */}
      <div className={`flex gap-4 sm:gap-6 justify-center transition-opacity duration-500 ${eggMessage ? 'opacity-0' : 'opacity-100'}`}>
        
        {/* Status Saudade */}
        <div className="flex items-center gap-2 group">
          <span className={`w-1.5 h-1.5 rounded-full bg-red-900/80 ${isFinished ? '' : 'animate-pulse'}`}></span>
          <span className="text-[10px] sm:text-xs font-light tracking-widest uppercase">
            Saudade: <span className={`transition-all duration-1000 ${!isFinished && 'font-mono'}`}>{displaySaudade}</span>
          </span>
        </div>

        {/* Separador */}
        <div className="w-[1px] h-3 bg-slate-800/50 self-center"></div>

        {/* Status Vontade */}
        <div className="flex items-center gap-2 group">
           <span className={`w-1.5 h-1.5 rounded-full bg-blue-900/80 ${isFinished ? '' : 'animate-pulse'}`} style={{ animationDelay: '1s' }}></span>
          <span className={`text-[10px] sm:text-xs font-light tracking-widest uppercase transition-all duration-1000 ${!isFinished && 'drop-shadow-[0_0_8px_rgba(255,255,255,0.1)]'}`}>
            Vontade: {displayVontade}
          </span>
        </div>

      </div>
    </div>
  );
};

export default EmotionalStatus;