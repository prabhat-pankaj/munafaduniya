import test from 'node:test';
import assert from 'node:assert/strict';
import { floodFillRGBA, hexToRgba } from './floodFill';

test('hexToRgba parses 6-digit and 3-digit hex strings', () => {
  assert.deepEqual(hexToRgba('#FF595E'), { r: 255, g: 89, b: 94, a: 255 });
  assert.deepEqual(hexToRgba('#0f8'), { r: 0, g: 255, b: 136, a: 255 });
});

test('floodFillRGBA fills connected blank region and stops at outline mask', () => {
  const width = 5;
  const height = 5;
  const data = new Uint8ClampedArray(width * height * 4);
  const outline = new Uint8ClampedArray(width * height * 4);

  // Fill background white (255,255,255,255)
  for (let i = 0; i < width * height; i++) {
    const idx = i * 4;
    data[idx] = 255;
    data[idx + 1] = 255;
    data[idx + 2] = 255;
    data[idx + 3] = 255;
  }

  // Draw vertical outline wall along column x = 2
  for (let y = 0; y < height; y++) {
    const idx = (y * width + 2) * 4;
    outline[idx] = 35;
    outline[idx + 1] = 41;
    outline[idx + 2] = 70;
    outline[idx + 3] = 255;
  }

  const changed = floodFillRGBA(data, width, height, 0, 0, '#FF595E', 32, outline, 110);
  // Left side columns x=0,1 (10 pixels) should be filled; x=2,3,4 stay white
  assert.equal(changed, 10);
  assert.equal(data[(0 * width + 0) * 4], 255);
  assert.equal(data[(0 * width + 0) * 4 + 1], 89);
  assert.equal(data[(0 * width + 3) * 4], 255);
  assert.equal(data[(0 * width + 3) * 4 + 1], 255);
});

test('floodFillRGBA returns 0 when clicking directly on an outline line', () => {
  const width = 3;
  const height = 3;
  const data = new Uint8ClampedArray(width * height * 4).fill(255);
  const outline = new Uint8ClampedArray(width * height * 4);
  const centerIdx = (1 * width + 1) * 4;
  outline[centerIdx + 3] = 255;

  const changed = floodFillRGBA(data, width, height, 1, 1, '#1982C4', 32, outline, 110);
  assert.equal(changed, 0);
});
