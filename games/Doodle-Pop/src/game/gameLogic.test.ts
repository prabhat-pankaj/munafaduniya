import test from 'node:test';
import assert from 'node:assert/strict';
import {
  awardStickerForCompletion,
  calculateArtworkScore,
  createDefaultSaveData,
  createSharedArtwork,
  getCreativeBadge,
  getRainbowHex,
  normalizeSaveData,
} from './gameLogic';
import { INITIAL_UNLOCKED_STICKERS, STICKER_CATALOG } from './stickers';

test('getRainbowHex cycles valid uppercase hex colors across distances', () => {
  const c1 = getRainbowHex(0);
  const c2 = getRainbowHex(120);
  assert.match(c1, /^#[0-9A-F]{6}$/);
  assert.match(c2, /^#[0-9A-F]{6}$/);
  assert.notEqual(c1, c2);
});

test('calculateArtworkScore and creative badge scale deterministically', () => {
  const lowScore = calculateArtworkScore({
    strokeCount: 2,
    fillCount: 1,
    stickerCount: 0,
    colorsUsedCount: 2,
  });
  assert.equal(lowScore, 100 + 20 + 20 + 0 + 50);
  assert.equal(getCreativeBadge(lowScore), 'Happy Doodler');

  const masterScore = calculateArtworkScore({
    strokeCount: 40,
    fillCount: 10,
    stickerCount: 4,
    colorsUsedCount: 8,
  });
  assert.ok(masterScore >= 700);
  assert.equal(getCreativeBadge(masterScore), 'Master Rainbow Painter');
});

test('awardStickerForCompletion unlocks next locked sticker and updates stats', () => {
  let state = createDefaultSaveData();
  assert.equal(state.unlockedStickers.length, INITIAL_UNLOCKED_STICKERS.length);

  const res1 = awardStickerForCompletion(state, 350);
  assert.ok(res1.newlyUnlockedId !== null);
  assert.equal(res1.nextSaveData.unlockedStickers.length, INITIAL_UNLOCKED_STICKERS.length + 1);
  assert.equal(res1.nextSaveData.totalArtworksCompleted, 1);
  assert.equal(res1.nextSaveData.highScore, 350);

  // Unlock all remaining stickers
  state = res1.nextSaveData;
  while (state.unlockedStickers.length < STICKER_CATALOG.length) {
    state = awardStickerForCompletion(state, 500).nextSaveData;
  }
  const finalRes = awardStickerForCompletion(state, 600);
  assert.equal(finalRes.newlyUnlockedId, null);
  assert.equal(finalRes.nextSaveData.unlockedStickers.length, STICKER_CATALOG.length);
  assert.equal(finalRes.nextSaveData.highScore, 600);
});

test('normalizeSaveData safely recovers malformed input and createSharedArtwork applies defaults', () => {
  const recovered = normalizeSaveData({ totalArtworksCompleted: -5, unlockedStickers: 'bad' });
  assert.equal(recovered.totalArtworksCompleted, 0);
  assert.equal(recovered.unlockedStickers.length, INITIAL_UNLOCKED_STICKERS.length);

  const shared = createSharedArtwork({
    id: 'art-1',
    title: '   ',
    artistName: '',
    pageId: 'dino',
    mode: 'coloring',
    frameId: 'rainbow',
    imageDataUrl: 'data:image/png;base64,abc',
    stickers: [],
  });
  assert.equal(shared.title, 'My Colorful Masterpiece');
  assert.equal(shared.artistName, 'Young Artist');
  assert.equal(shared.reactions.hearts, 1);
});
