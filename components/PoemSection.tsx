import React from 'react';
import { Feather } from 'lucide-react';

const PoemSection: React.FC = () => {
  return (
    <div className="w-full max-w-2xl mx-auto px-8 py-12 md:py-16 text-center animate-in slide-in-from-bottom duration-1000 delay-300 relative group perspective-1000">
      
      {/* Glass Card Container */}
      <div className="absolute inset-0 bg-slate-950/40 backdrop-blur-xl border border-purple-500/10 rounded-[3px] shadow-[0_0_40px_rgba(0,0,0,0.5)] group-hover:border-purple-500/20 transition-all duration-700"></div>
      
      {/* Inner Glow/Sheen */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-purple-900/10 opacity-50 rounded-[3px] pointer-events-none"></div>

      <div className="relative z-10">
        {/* Decoração Superior */}
        <div className="flex flex-col items-center justify-center mb-10 opacity-60 text-purple-300 gap-2">
            <Feather size={20} className="drop-shadow-glow" />
            <div className="w-1 h-8 bg-gradient-to-b from-purple-500/0 via-purple-500/50 to-purple-500/0"></div>
        </div>

        {/* Título do Poema */}
        <h3 className="font-serif-display text-3xl md:text-5xl text-purple-50 mb-12 tracking-wide italic drop-shadow-md">
            A Voz e o Horizonte
        </h3>

        {/* Corpo do Poema - Improved Typography */}
        <div className="space-y-10 font-light text-purple-100/80 text-lg md:text-xl leading-relaxed tracking-wide">
            <div className="hover:text-purple-50 transition-colors duration-500">
                <p>Você trocou a calmaria das águas pelo concreto,</p>
                <p>Trouxe na mala a coragem e um plano incerto.</p>
                <p>Diz que é "seguramente esperançosa" no caminhar,</p>
                <p>Mas mal sabe a certeza que traz só pelo olhar.</p>
            </div>

            <div className="hover:text-purple-50 transition-colors duration-500">
                <p>Seus pensamentos são vastos, não cabem no silêncio,</p>
                <p>Escapam pela boca num ritmo que eu reverencio.</p>
                <p>E se você adora falar, num fluxo que não tem fim,</p>
                <p>Sorte a minha: meu lugar favorito é te ouvir assim.</p>
            </div>

            <div className="hover:text-purple-50 transition-colors duration-500">
                <p>Tem esse nariz empinado, desenhado com graça,</p>
                <p>De quem enfrenta o mundo, de quem ocupa o espaço.</p>
                <p>Brincalhona e leve num dia pesado e comum,</p>
                <p>Você tem um carisma que não se vê em qualquer um.</p>
            </div>

            <div className="hover:text-purple-50 transition-colors duration-500">
                <p>Entre o deboche, a pressa e o riso incontido,</p>
                <p>Há uma verdade leve que faz todo o sentido.</p>
                <p>Sabe, é bom demais ter cruzado o destino e te ver,</p>
                <p>E ter encontrado esse caos estranhamente divertido que é você.</p>
            </div>

            <div className="relative py-6">
                <div className="absolute inset-0 bg-fuchsia-900/10 blur-xl rounded-full transform scale-x-50"></div>
                <p className="relative text-fuchsia-100 font-serif-display italic text-xl md:text-2xl drop-shadow-lg">
                    "O melhor destino, Anna, é onde alcança o seu abraço."
                </p>
            </div>
        </div>

        {/* Decoração Inferior */}
        <div className="mt-14 w-32 h-[1px] bg-gradient-to-r from-transparent via-purple-400/30 to-transparent mx-auto"></div>
      </div>
    </div>
  );
};

export default PoemSection;