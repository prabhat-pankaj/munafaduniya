import { StickerDef } from './types';

export const STICKER_CATALOG: StickerDef[] = [
  { id: 'happy-star', name: 'Sunny Star', anim: 'twinkle', accent: '#FFCA3A', unlockOrder: 0 },
  { id: 'bouncy-dino', name: 'Bouncy Dino', anim: 'bounce', accent: '#8AC926', unlockOrder: 0 },
  { id: 'rocket-pop', name: 'Zoom Rocket', anim: 'float', accent: '#FF595E', unlockOrder: 0 },
  { id: 'happy-heart', name: 'Bubble Heart', anim: 'wiggle', accent: '#FF6B9D', unlockOrder: 0 },
  { id: 'rainbow-cloud', name: 'Rainbow Cloud', anim: 'float', accent: '#4CC9F0', unlockOrder: 1 },
  { id: 'flutter-butterfly', name: 'Flutter Bug', anim: 'wiggle', accent: '#C77DFF', unlockOrder: 2 },
  { id: 'splash-whale', name: 'Splash Whale', anim: 'bounce', accent: '#1982C4', unlockOrder: 3 },
  { id: 'golden-crown', name: 'Royal Crown', anim: 'twinkle', accent: '#FFB703', unlockOrder: 4 },
  { id: 'astro-cat', name: 'Astro Kitty', anim: 'float', accent: '#9B5DE5', unlockOrder: 5 },
  { id: 'berry-cupcake', name: 'Party Cupcake', anim: 'bounce', accent: '#F15BB5', unlockOrder: 6 },
  { id: 'smiling-sun', name: 'Giggle Sun', anim: 'wiggle', accent: '#FB8500', unlockOrder: 7 },
  { id: 'magic-trophy', name: 'Master Trophy', anim: 'twinkle', accent: '#FFD166', unlockOrder: 8 },
];

export const INITIAL_UNLOCKED_STICKERS: string[] = STICKER_CATALOG
  .filter((s) => s.unlockOrder === 0)
  .map((s) => s.id);

export function getStickerById(id: string): StickerDef | undefined {
  return STICKER_CATALOG.find((s) => s.id === id);
}

export function getNextUnlockableSticker(unlockedIds: string[]): StickerDef | null {
  const unlockedSet = new Set(unlockedIds);
  const sorted = [...STICKER_CATALOG].sort((a, b) => a.unlockOrder - b.unlockOrder);
  return sorted.find((s) => !unlockedSet.has(s.id)) ?? null;
}
