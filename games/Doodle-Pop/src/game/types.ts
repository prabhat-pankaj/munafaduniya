export type GameState = 'title' | 'playing' | 'paused' | 'celebration';

export type CanvasMode = 'coloring' | 'freedraw' | 'glow';

export type ToolType =
  | 'brush'
  | 'crayon'
  | 'rainbow'
  | 'glitter'
  | 'bucket'
  | 'sticker'
  | 'eraser';

export type BrushSizeId = 'sm' | 'md' | 'lg';

export interface BrushSizeOption {
  id: BrushSizeId;
  label: string;
  px: number;
}

export interface ColorSwatch {
  id: string;
  name: string;
  hex: string;
}

export type StickerAnimType = 'bounce' | 'wiggle' | 'twinkle' | 'float';

export interface StickerDef {
  id: string;
  name: string;
  anim: StickerAnimType;
  accent: string;
  unlockOrder: number;
}

export interface PlacedSticker {
  uid: string;
  stickerId: string;
  /** Normalized 0..1 coordinates relative to canvas width/height */
  x: number;
  y: number;
  scale: number;
  rotation: number;
}

export type ArtworkFrameId = 'classic' | 'rainbow' | 'polka' | 'starry';

export interface ColoringPageDef {
  id: string;
  title: string;
  mode: CanvasMode;
  accent: string;
}

export interface SharedArtwork {
  id: string;
  title: string;
  artistName: string;
  pageId: string;
  mode: CanvasMode;
  frameId: ArtworkFrameId;
  imageDataUrl: string;
  stickers: PlacedSticker[];
  createdAt: number;
  reactions: {
    hearts: number;
    stars: number;
    claps: number;
  };
}

export interface SaveDataPayload {
  unlockedStickers: string[];
  totalArtworksCompleted: number;
  highScore: number;
  gallery: SharedArtwork[];
}
