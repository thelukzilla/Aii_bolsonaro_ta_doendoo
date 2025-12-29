import React, { useState, useRef, useEffect } from 'react';
import { PLAYLIST } from '../constants';
import { PlayerState } from '../types';
import { Play, Pause, SkipForward, SkipBack, Music2 } from 'lucide-react';

interface MusicPlayerProps {
  autoStart?: boolean;
}

const MusicPlayer: React.FC<MusicPlayerProps> = ({ autoStart = false }) => {
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [playerState, setPlayerState] = useState<PlayerState>(autoStart ? PlayerState.PLAYING : PlayerState.PAUSED);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  
  const currentSong = PLAYLIST[currentSongIndex];

  // Effect to control Play/Pause via postMessage API
  // This prevents the iframe from reloading completely on pause/play
  useEffect(() => {
    if (iframeRef.current && iframeRef.current.contentWindow) {
      const action = playerState === PlayerState.PLAYING ? 'playVideo' : 'pauseVideo';
      iframeRef.current.contentWindow.postMessage(
        JSON.stringify({ event: 'command', func: action, args: [] }), 
        '*'
      );
    }
  }, [playerState]);

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

  // Construct URL with enablejsapi to allow postMessage control
  const embedUrl = `https://www.youtube.com/embed/${currentSong.id}?enablejsapi=1&autoplay=1&controls=0&loop=1&playlist=${currentSong.id}&origin=${window.location.origin}`;

  return (
    <div className="fixed bottom-0 left-0 w-full bg-slate-950/80 backdrop-blur-md border-t border-slate-800/50 p-4 z-40 transition-all duration-500">
      <div className="max-w-4xl mx-auto flex items-center justify-between gap-4">
        
        {/* 
            CRITICAL FIX: Do not use 'hidden' or 'display: none'. 
            YouTube players often stop working if hidden.
            Instead, use opacity 0 and pointer-events none with a 1px size.
        */}
        <div style={{ position: 'absolute', top: 0, left: 0, width: '1px', height: '1px', opacity: 0, pointerEvents: 'none', overflow: 'hidden' }}>
            <iframe 
              ref={iframeRef}
              width="100%" 
              height="100%" 
              src={embedUrl}
              title="audio-player" 
              allow="autoplay; encrypted-media"
              allowFullScreen
            ></iframe>
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