export interface RgbaColor {
  r: number;
  g: number;
  b: number;
  a: number;
}

export function hexToRgba(hex: string): RgbaColor {
  const clean = hex.replace('#', '').trim();
  if (clean.length === 3) {
    const r = parseInt(clean[0] + clean[0], 16);
    const g = parseInt(clean[1] + clean[1], 16);
    const b = parseInt(clean[2] + clean[2], 16);
    return { r, g, b, a: 255 };
  }
  const r = parseInt(clean.slice(0, 2), 16) || 0;
  const g = parseInt(clean.slice(2, 4), 16) || 0;
  const b = parseInt(clean.slice(4, 6), 16) || 0;
  return { r, g, b, a: 255 };
}

export function colorsClose(
  r1: number,
  g1: number,
  b1: number,
  a1: number,
  r2: number,
  g2: number,
  b2: number,
  a2: number,
  tolerance: number
): boolean {
  return (
    Math.abs(r1 - r2) <= tolerance &&
    Math.abs(g1 - g2) <= tolerance &&
    Math.abs(b1 - b2) <= tolerance &&
    Math.abs(a1 - a2) <= tolerance
  );
}

/**
 * Scanline flood fill operating on a flat RGBA pixel buffer.
 * Optional outlineData prevents filling across dark coloring-book line art
 * and closes minor anti-aliased edge gaps cleanly.
 * Returns number of pixels modified.
 */
export function floodFillRGBA(
  data: Uint8ClampedArray,
  width: number,
  height: number,
  startX: number,
  startY: number,
  fillHex: string,
  tolerance = 36,
  outlineData?: Uint8ClampedArray,
  outlineAlphaThreshold = 110
): number {
  const sx = Math.floor(startX);
  const sy = Math.floor(startY);
  if (sx < 0 || sx >= width || sy < 0 || sy >= height) return 0;

  const startIdx = (sy * width + sx) * 4;
  if (outlineData && outlineData[startIdx + 3] >= outlineAlphaThreshold) {
    return 0;
  }

  const fill = hexToRgba(fillHex);
  const tr = data[startIdx];
  const tg = data[startIdx + 1];
  const tb = data[startIdx + 2];
  const ta = data[startIdx + 3];

  if (
    Math.abs(tr - fill.r) <= 4 &&
    Math.abs(tg - fill.g) <= 4 &&
    Math.abs(tb - fill.b) <= 4 &&
    Math.abs(ta - fill.a) <= 4
  ) {
    return 0;
  }

  const visited = new Uint8Array(width * height);
  const stack = new Int32Array(width * height);
  let stackPtr = 0;

  const canFill = (pixelIndex: number): boolean => {
    if (visited[pixelIndex]) return false;
    const idx = pixelIndex * 4;
    if (outlineData && outlineData[idx + 3] >= outlineAlphaThreshold) {
      return false;
    }
    return colorsClose(
      data[idx],
      data[idx + 1],
      data[idx + 2],
      data[idx + 3],
      tr,
      tg,
      tb,
      ta,
      tolerance
    );
  };

  stack[stackPtr++] = sy * width + sx;
  let filledCount = 0;

  while (stackPtr > 0) {
    const pos = stack[--stackPtr];
    if (visited[pos]) continue;

    const y = Math.floor(pos / width);
    let x = pos - y * width;

    while (x > 0 && canFill(y * width + (x - 1))) {
      x--;
    }

    let spanAbove = false;
    let spanBelow = false;

    while (x < width && canFill(y * width + x)) {
      const pIdx = y * width + x;
      visited[pIdx] = 1;
      const idx = pIdx * 4;
      data[idx] = fill.r;
      data[idx + 1] = fill.g;
      data[idx + 2] = fill.b;
      data[idx + 3] = fill.a;
      filledCount++;

      if (y > 0) {
        const upIdx = (y - 1) * width + x;
        const upOk = canFill(upIdx);
        if (!spanAbove && upOk) {
          stack[stackPtr++] = upIdx;
          spanAbove = true;
        } else if (spanAbove && !upOk) {
          spanAbove = false;
        }
      }

      if (y < height - 1) {
        const downIdx = (y + 1) * width + x;
        const downOk = canFill(downIdx);
        if (!spanBelow && downOk) {
          stack[stackPtr++] = downIdx;
          spanBelow = true;
        } else if (spanBelow && !downOk) {
          spanBelow = false;
        }
      }

      x++;
    }
  }

  // Soft fringe bleed (1px into semi-transparent outline anti-aliasing) so fills meet ink lines cleanly
  if (outlineData && filledCount > 0) {
    for (let y = 1; y < height - 1; y++) {
      for (let x = 1; x < width - 1; x++) {
        const p = y * width + x;
        const idx = p * 4;
        const oAlpha = outlineData[idx + 3];
        if (oAlpha > 0 && oAlpha < outlineAlphaThreshold && !visited[p]) {
          if (
            visited[p - 1] ||
            visited[p + 1] ||
            visited[p - width] ||
            visited[p + width]
          ) {
            data[idx] = fill.r;
            data[idx + 1] = fill.g;
            data[idx + 2] = fill.b;
            data[idx + 3] = fill.a;
          }
        }
      }
    }
  }

  return filledCount;
}
