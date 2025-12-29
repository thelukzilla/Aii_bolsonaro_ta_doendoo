import React, { useMemo } from 'react';

const EmotionalStatus: React.FC = () => {
  const status = useMemo(() => {
    const saudade = Math.floor(Math.random() * (100 - 85 + 1)) + 85; // 85% to 100%
    return {
      saudade,
      vontade: 'Incontrolável'
    };
  }, []);

  return (
    <div className="flex gap-6 justify-center mt-6 text-xs sm:text-sm font-light tracking-widest text-slate-500 uppercase opacity-80">
      <div className="flex items-center gap-2">
        <span className="w-1.5 h-1.5 rounded-full bg-red-900/60 animate-pulse"></span>
        <span>Saudade: {status.saudade}%</span>
      </div>
      <div className="w-[1px] h-4 bg-slate-800"></div>
      <div className="flex items-center gap-2">
        <span className="w-1.5 h-1.5 rounded-full bg-blue-900/60 animate-pulse" style={{ animationDelay: '1s' }}></span>
        <span>Vontade: {status.vontade}</span>
      </div>
    </div>
  );
};

export default EmotionalStatus;