import React, { useMemo } from 'react';
import { QUOTES } from '../constants';

const DailyQuote: React.FC = () => {
  const quote = useMemo(() => {
    // Calculate days since a fixed epoch (e.g., Jan 1, 1970) to ensure rotation every 24h
    const now = new Date();
    // Use UTC to ensure consistency across refresh, or local if preferred. 
    // Using Brasilia time offset logic roughly implies we want it to change day-by-day.
    // A simple day index works well.
    const dayIndex = Math.floor(now.getTime() / (1000 * 60 * 60 * 24));
    return QUOTES[dayIndex % QUOTES.length];
  }, []);

  return (
    <div className="max-w-2xl mx-auto px-6 py-8 text-center relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 text-6xl text-red-900/10 font-serif-display">“</div>
      <p className="text-lg md:text-xl text-slate-300 font-light leading-relaxed italic tracking-wide">
        {quote}
      </p>
      <div className="w-16 h-[1px] bg-red-900/30 mx-auto mt-6"></div>
      <p className="text-xs text-slate-600 mt-3 uppercase tracking-widest">Pensamento do Dia</p>
    </div>
  );
};

export default DailyQuote;