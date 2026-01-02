export interface Song {
  id: string; // YouTube ID
  title: string;
  artist: string;
}

export interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export enum PlayerState {
  PLAYING = 'PLAYING',
  PAUSED = 'PAUSED',
}

export interface Theme {
  name: string;
  bgClass: string;      // Background color class
  accentText: string;   // For icons/highlights
  accentBg: string;     // For blobs/gradients
  textMain: string;     // Main text color
  textMuted: string;    // Secondary text color
  selection: string;    // Selection color
}

export interface CardData {
  id: number;
  title: string;
  text: string;
  icon?: string; // Optional icon identifier if needed
}