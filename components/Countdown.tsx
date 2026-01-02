import React, { useState, useEffect } from 'react';
import { TimeLeft } from '../types';
import { TARGET_DATE } from '../constants';

interface CountdownProps {
  onComplete?: () => void;
}

const Countdown: React.FC<CountdownProps> = ({ onComplete }) => {
  const calculateTimeLeft = (): TimeLeft => {
    const difference = +new Date(TARGET_DATE) - +new Date();
    let timeLeft: TimeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      const difference = +new Date(TARGET_DATE) - +new Date();
      
      if (difference <= 0) {
        // Time is up
        clearInterval(timer);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        if (!isFinished) {
            setIsFinished(true);
            if (onComplete) onComplete();
        }
      } else {
        setTimeLeft(calculateTimeLeft());
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [isFinished, onComplete]);

  const TimeUnit: React.FC<{ value: number; label: string }> = ({ value, label }) => (
    <div className="flex flex-col items-center mx-2 sm:mx-4">
      <div className="relative">
        <span className="text-4xl sm:text-6xl md:text-7xl font-serif-display font-thin text-slate-100 tracking-wider">
          {String(value).padStart(2, '0')}
        </span>
        <div className="absolute -bottom-2 w-full h-[1px] bg-gradient-to-r from-transparent via-red-900/50 to-transparent"></div>
      </div>
      <span className="text-xs sm:text-sm text-slate-500 uppercase tracking-[0.2em] mt-2 font-light">
        {label}
      </span>
    </div>
  );

  return (
    <div className="flex justify-center items-center flex-wrap my-8 sm:my-12 animate-in fade-in zoom-in duration-1000">
      <TimeUnit value={timeLeft.days} label="Dias" />
      <span className="text-2xl sm:text-4xl font-thin text-red-900/40 mb-6">:</span>
      <TimeUnit value={timeLeft.hours} label="Horas" />
      <span className="text-2xl sm:text-4xl font-thin text-red-900/40 mb-6">:</span>
      <TimeUnit value={timeLeft.minutes} label="Min" />
      <span className="text-2xl sm:text-4xl font-thin text-red-900/40 mb-6">:</span>
      <TimeUnit value={timeLeft.seconds} label="Seg" />
    </div>
  );
};

export default Countdown;