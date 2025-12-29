import React, { useMemo } from 'react';
import { QUOTES } from '../constants';

const DailyQuote: React.FC = () => {
  const quote = useMemo(() => {
    // Calculate 8-hour blocks since a fixed epoch (e.g., Jan 1, 1970)
    const now = new Date();
    
    // Divide by (1000ms * 60s * 60m * 8h) to change every 8 hours
    const blockIndex = Math.floor(now.getTime() / (1000 * 60 * 60 * 8));
    
    return QUOTES[blockIndex % QUOTES.length];
  }, []);

  return (
    <div className="max-w-2xl mx-auto px-6 py-8 text-center relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 text-6xl text-red-900/10 font-serif-display">“</div>
      <p className="text-lg md:text-xl text-slate-300 font-light leading-relaxed italic tracking-wide">
        {quote}
      </p>
      <div className="w-16 h-[1px] bg-red-900/30 mx-auto mt-6"></div>
      <p className="text-xs text-slate-600 mt-3 uppercase tracking-widest">Pensamento do Momento</p>
    </div>
  );
};

export default DailyQuote;