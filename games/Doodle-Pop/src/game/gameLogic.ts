import { INITIAL_UNLOCKED_STICKERS, getNextUnlockableSticker } from './stickers';
import {
  ArtworkFrameId,
  BrushSizeOption,
  CanvasMode,
  ColorSwatch,
  PlacedSticker,
  SaveDataPayload,
  SharedArtwork,
} from './types';

export const COLOR_SWATCHES: ColorSwatch[] = [
  { id: 'coral', name: 'Coral Red', hex: '#FF595E' },
  { id: 'tangerine', name: 'Tangerine', hex: '#FF924C' },
  { id: 'sunny', name: 'Sunny Yellow', hex: '#FFCA3A' },
  { id: 'lime', name: 'Meadow Green', hex: '#8AC926' },
  { id: 'mint', name: 'Mint Splash', hex: '#2EC4B6' },
  { id: 'sky', name: 'Sky Blue', hex: '#1982C4' },
  { id: 'cobalt', name: 'Ocean Blue', hex: '#3A50E8' },
  { id: 'grape', name: 'Berry Purple', hex: '#6A4C93' },
  { id: 'bubblegum', name: 'Bubblegum Pink', hex: '#FF6B9D' },
  { id: 'lavender', name: 'Lilac Mist', hex: '#C77DFF' },
  { id: 'peach', name: 'Warm Peach', hex: '#FFBE98' },
  { id: 'cocoa', name: 'Cocoa Brown', hex: '#8D5B4C' },
  { id: 'ink', name: 'Midnight Ink', hex: '#232946' },
  { id: 'cloud', name: 'Cloud White', hex: '#FFFFFF' },
];

export const BRUSH_SIZES: BrushSizeOption[] = [
  { id: 'sm', label: 'Fine', px: 8 },
  { id: 'md', label: 'Medium', px: 20 },
  { id: 'lg', label: 'Jumbo', px: 38 },
];

export const ARTWORK_FRAMES: { id: ArtworkFrameId; label: string; borderColor: string }[] = [
  { id: 'classic', label: 'Warm Oak', borderColor: '#E6CCB2' },
  { id: 'rainbow', label: 'Rainbow Pop', borderColor: '#FF595E' },
  { id: 'polka', label: 'Polka Dots', borderColor: '#1982C4' },
  { id: 'starry', label: 'Starry Gold', borderColor: '#FFCA3A' },
];

/**
 * Generates a vibrant HSL rainbow hex color based on stroke distance.
 */
export function getRainbowHex(distancePx: number): string {
  const hue = Math.round(distancePx * 0.9) % 360;
  return hslToHex(hue, 92, 56);
}

export function hslToHex(h: number, s: number, l: number): string {
  const hue = ((h % 360) + 360) % 360;
  const sat = Math.max(0, Math.min(100, s)) / 100;
  const lig = Math.max(0, Math.min(100, l)) / 100;
  const c = (1 - Math.abs(2 * lig - 1)) * sat;
  const x = c * (1 - Math.abs(((hue / 60) % 2) - 1));
  const m = lig - c / 2;

  let r = 0;
  let g = 0;
  let b = 0;
  if (hue < 60) {
    r = c;
    g = x;
  } else if (hue < 120) {
    r = x;
    g = c;
  } else if (hue < 180) {
    g = c;
    b = x;
  } else if (hue < 240) {
    g = x;
    b = c;
  } else if (hue < 300) {
    r = x;
    b = c;
  } else {
    r = c;
    b = x;
  }

  const toHex = (v: number) =>
    Math.round((v + m) * 255)
      .toString(16)
      .padStart(2, '0');
  return `#${toHex(r)}${toHex(g)}${toHex(b)}`.toUpperCase();
}

export function calculateArtworkScore(params: {
  strokeCount: number;
  fillCount: number;
  stickerCount: number;
  colorsUsedCount: number;
}): number {
  const base = 100;
  const strokes = Math.min(params.strokeCount, 60) * 10;
  const fills = Math.min(params.fillCount, 25) * 20;
  const stickers = Math.min(params.stickerCount, 12) * 35;
  const variety = Math.min(params.colorsUsedCount, 14) * 25;
  return Math.round(base + strokes + fills + stickers + variety);
}

export function getCreativeBadge(score: number): string {
  if (score >= 700) return 'Master Rainbow Painter';
  if (score >= 450) return 'Super Sticker Artist';
  if (score >= 250) return 'Color Explorer';
  return 'Happy Doodler';
}

export function createDefaultSaveData(): SaveDataPayload {
  return {
    unlockedStickers: [...INITIAL_UNLOCKED_STICKERS],
    totalArtworksCompleted: 0,
    highScore: 0,
    gallery: [],
  };
}

export function normalizeSaveData(raw: unknown): SaveDataPayload {
  const defaults = createDefaultSaveData();
  if (!raw || typeof raw !== 'object') return defaults;
  const obj = raw as Partial<SaveDataPayload>;

  const unlockedSet = new Set<string>(defaults.unlockedStickers);
  if (Array.isArray(obj.unlockedStickers)) {
    for (const id of obj.unlockedStickers) {
      if (typeof id === 'string') unlockedSet.add(id);
    }
  }

  const gallery = Array.isArray(obj.gallery)
    ? obj.gallery.filter(
        (item): item is SharedArtwork =>
          Boolean(item && typeof item.id === 'string' && typeof item.imageDataUrl === 'string')
      )
    : [];

  return {
    unlockedStickers: Array.from(unlockedSet),
    totalArtworksCompleted:
      typeof obj.totalArtworksCompleted === 'number' && obj.totalArtworksCompleted >= 0
        ? Math.floor(obj.totalArtworksCompleted)
        : 0,
    highScore:
      typeof obj.highScore === 'number' && obj.highScore >= 0 ? Math.floor(obj.highScore) : 0,
    gallery: gallery.slice(0, 24),
  };
}

export function awardStickerForCompletion(
  saveData: SaveDataPayload,
  score: number
): { nextSaveData: SaveDataPayload; newlyUnlockedId: string | null } {
  const nextSticker = getNextUnlockableSticker(saveData.unlockedStickers);
  const unlockedStickers = nextSticker
    ? [...saveData.unlockedStickers, nextSticker.id]
    : [...saveData.unlockedStickers];

  return {
    newlyUnlockedId: nextSticker ? nextSticker.id : null,
    nextSaveData: {
      ...saveData,
      unlockedStickers,
      totalArtworksCompleted: saveData.totalArtworksCompleted + 1,
      highScore: Math.max(saveData.highScore, Math.round(score)),
    },
  };
}

export function createSharedArtwork(params: {
  id: string;
  title: string;
  artistName: string;
  pageId: string;
  mode: CanvasMode;
  frameId: ArtworkFrameId;
  imageDataUrl: string;
  stickers: PlacedSticker[];
  createdAt?: number;
}): SharedArtwork {
  return {
    id: params.id,
    title: params.title.trim() || 'My Colorful Masterpiece',
    artistName: params.artistName.trim() || 'Young Artist',
    pageId: params.pageId,
    mode: params.mode,
    frameId: params.frameId,
    imageDataUrl: params.imageDataUrl,
    stickers: params.stickers.map((s) => ({ ...s })),
    createdAt: params.createdAt ?? Date.now(),
    reactions: { hearts: 1, stars: 1, claps: 0 },
  };
}
