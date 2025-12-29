import React, { useState, useRef, useEffect } from 'react';
import { PLAYLIST } from '../constants';
import { PlayerState } from '../types';
import { Play, Pause, SkipForward, SkipBack, Music2 } from 'lucide-react';

interface MusicPlayerProps {
  autoStart?: boolean;
}

// We cannot use the full YT Iframe API package, so we use a controlled iframe approach 
// or a simple simulated visual. To make it functional, we embed a hidden iframe.
const MusicPlayer: React.FC<MusicPlayerProps> = ({ autoStart = false }) => {
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [playerState, setPlayerState] = useState<PlayerState>(autoStart ? PlayerState.PLAYING : PlayerState.PAUSED);
  const [volume, setVolume] = useState(50);
  
  const currentSong = PLAYLIST[currentSongIndex];

  // YouTube Embed URL construction
  // autoplay=1 only works if user interacted with DOM, handled by App's "Enter" overlay
  const embedUrl = `https://www.youtube.com/embed/${currentSong.id}?enablejsapi=1&autoplay=${playerState === PlayerState.PLAYING ? 1 : 0}&controls=0&loop=1`;

  const togglePlay = () => {
    setPlayerState(prev => prev === PlayerState.PLAYING ? PlayerState.PAUSED : PlayerState.PLAYING);
  };

  const nextSong = () => {
    setCurrentSongIndex((prev) => (prev + 1) % PLAYLIST.length);
    setPlayerState(PlayerState.PLAYING);
  };

  const prevSong = () => {
    setCurrentSongIndex((prev) => (prev - 1 + PLAYLIST.length) % PLAYLIST.length);
    setPlayerState(PlayerState.PLAYING);
  };

  return (
    <div className="fixed bottom-0 left-0 w-full bg-slate-950/80 backdrop-blur-md border-t border-slate-800/50 p-4 z-40 transition-all duration-500">
      <div className="max-w-4xl mx-auto flex items-center justify-between gap-4">
        
        {/* Hidden Iframe for Audio */}
        {/* Note: This is a "hacky" way to do audio-only YT without backend. 
            For a real production app, one would use the YouTube IFrame Player API properly 
            to control state without reloading the iframe. Here we rely on React key updates for simplicity in a single file structure. */}
        <div className="hidden">
           {playerState === PlayerState.PLAYING && (
              <iframe 
                width="1" 
                height="1" 
                src={`https://www.youtube.com/embed/${currentSong.id}?autoplay=1&loop=1&playlist=${currentSong.id}`} 
                title="audio-player" 
                allow="autoplay"
              ></iframe>
           )}
        </div>

        {/* Song Info */}
        <div className="flex items-center gap-3 w-1/3 overflow-hidden">
            <div className={`p-2 rounded-full bg-red-900/20 ${playerState === PlayerState.PLAYING ? 'animate-spin-slow' : ''}`}>
                <Music2 size={20} className="text-red-400" />
            </div>
            <div className="flex flex-col truncate">
                <span className="text-sm font-medium text-slate-200 truncate">{currentSong.title}</span>
                <span className="text-xs text-slate-500 truncate">{currentSong.artist}</span>
            </div>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center gap-6 w-1/3">
            <button onClick={prevSong} className="text-slate-400 hover:text-white transition-colors">
                <SkipBack size={20} />
            </button>
            <button 
                onClick={togglePlay} 
                className="w-10 h-10 rounded-full bg-slate-200 text-slate-900 flex items-center justify-center hover:scale-105 transition-transform"
            >
                {playerState === PlayerState.PLAYING ? <Pause size={20} fill="currentColor" /> : <Play size={20} fill="currentColor" className="ml-0.5"/>}
            </button>
            <button onClick={nextSong} className="text-slate-400 hover:text-white transition-colors">
                <SkipForward size={20} />
            </button>
        </div>

        {/* Fake Volume / Visualizer (Visual Only) */}
        <div className="hidden sm:flex items-center justify-end gap-2 w-1/3">
            <div className="flex items-end gap-1 h-8">
                {[...Array(5)].map((_, i) => (
                    <div 
                        key={i} 
                        className={`w-1 bg-red-500/40 rounded-t-sm transition-all duration-300 ${playerState === PlayerState.PLAYING ? 'animate-pulse' : 'h-1'}`}
                        style={{ height: playerState === PlayerState.PLAYING ? `${Math.random() * 100}%` : '4px', animationDelay: `${i * 0.1}s` }}
                    ></div>
                ))}
            </div>
        </div>

      </div>
      <style>{`
        .animate-spin-slow {
            animation: spin 8s linear infinite;
        }
        @keyframes spin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

export default MusicPlayer;