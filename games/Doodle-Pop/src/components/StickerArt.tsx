import React from 'react';
import { getStickerById } from '../game/stickers';
import { StickerAnimType } from '../game/types';

interface StickerArtProps {
  stickerId: string;
  size?: number;
  locked?: boolean;
  animated?: boolean;
  className?: string;
}

const ANIM_CLASS_MAP: Record<StickerAnimType, string> = {
  bounce: 'animate-sticker-bounce',
  wiggle: 'animate-sticker-wiggle',
  twinkle: 'animate-sticker-twinkle',
  float: 'animate-sticker-float',
};

export const StickerArt: React.FC<StickerArtProps> = ({
  stickerId,
  size = 64,
  locked = false,
  animated = true,
  className = '',
}) => {
  const def = getStickerById(stickerId);
  const animClass = animated && !locked && def ? ANIM_CLASS_MAP[def.anim] : '';

  return (
    <div
      className={`inline-flex items-center justify-center select-none ${animClass} ${className}`}
      style={{ width: size, height: size }}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 100 100"
        className={`w-full h-full drop-shadow-sm ${locked ? 'grayscale opacity-35' : ''}`}
      >
        {renderStickerSvgContent(stickerId)}
      </svg>
    </div>
  );
};

function renderStickerSvgContent(id: string): React.ReactNode {
  switch (id) {
    case 'happy-star':
      return (
        <g>
          <polygon
            points="50,8 62,35 92,38 69,58 76,88 50,72 24,88 31,58 8,38 38,35"
            fill="#FFCA3A"
            stroke="#232946"
            strokeWidth="5"
            strokeLinejoin="round"
          />
          <circle cx="40" cy="48" r="4" fill="#232946" />
          <circle cx="60" cy="48" r="4" fill="#232946" />
          <path d="M42 59 Q50 66 58 59" fill="none" stroke="#232946" strokeWidth="4" strokeLinecap="round" />
          <circle cx="33" cy="54" r="4" fill="#FF595E" opacity="0.6" />
          <circle cx="67" cy="54" r="4" fill="#FF595E" opacity="0.6" />
        </g>
      );

    case 'bouncy-dino':
      return (
        <g>
          <path
            d="M25 72 Q15 62 18 52 Q26 58 34 55 Q42 38 56 36 Q60 18 72 16 Q86 16 86 30 Q86 42 74 44 Q72 64 70 78 L60 78 L60 66 L44 66 L44 78 L34 78 L34 68 Z"
            fill="#8AC926"
            stroke="#232946"
            strokeWidth="5"
            strokeLinejoin="round"
          />
          <circle cx="74" cy="28" r="4" fill="#232946" />
          <path d="M72 36 Q78 40 82 35" fill="none" stroke="#232946" strokeWidth="3.5" strokeLinecap="round" />
          <circle cx="50" cy="50" r="6" fill="#FFCA3A" stroke="#232946" strokeWidth="2.5" />
          <circle cx="46" cy="36" r="5" fill="#FF595E" stroke="#232946" strokeWidth="2.5" />
        </g>
      );

    case 'rocket-pop':
      return (
        <g transform="rotate(-18 50 50)">
          <path d="M40 72 L34 90 L50 82 L66 90 L60 72 Z" fill="#FFCA3A" stroke="#232946" strokeWidth="4" strokeLinejoin="round" />
          <path d="M32 52 L18 68 L34 68 Z" fill="#1982C4" stroke="#232946" strokeWidth="4" strokeLinejoin="round" />
          <path d="M68 52 L82 68 L66 68 Z" fill="#1982C4" stroke="#232946" strokeWidth="4" strokeLinejoin="round" />
          <path
            d="M50 12 Q68 30 66 70 L34 70 Q32 30 50 12 Z"
            fill="#FF595E"
            stroke="#232946"
            strokeWidth="5"
            strokeLinejoin="round"
          />
          <circle cx="50" cy="44" r="11" fill="#A8E6FF" stroke="#232946" strokeWidth="4" />
        </g>
      );

    case 'happy-heart':
      return (
        <g>
          <path
            d="M50 84 C20 64 12 42 18 28 C24 14 42 14 50 28 C58 14 76 14 82 28 C88 42 80 64 50 84 Z"
            fill="#FF6B9D"
            stroke="#232946"
            strokeWidth="5"
            strokeLinejoin="round"
          />
          <circle cx="38" cy="42" r="4" fill="#232946" />
          <circle cx="62" cy="42" r="4" fill="#232946" />
          <path d="M42 52 Q50 59 58 52" fill="none" stroke="#232946" strokeWidth="4" strokeLinecap="round" />
          <ellipse cx="32" cy="30" rx="5" ry="3" fill="#FFFFFF" opacity="0.7" transform="rotate(-30 32 30)" />
        </g>
      );

    case 'rainbow-cloud':
      return (
        <g>
          <path d="M22 62 A28 28 0 0 1 78 62" fill="none" stroke="#FF595E" strokeWidth="9" strokeLinecap="round" />
          <path d="M30 62 A20 20 0 0 1 70 62" fill="none" stroke="#FFCA3A" strokeWidth="8" strokeLinecap="round" />
          <path d="M38 62 A12 12 0 0 1 62 62" fill="none" stroke="#1982C4" strokeWidth="7" strokeLinecap="round" />
          <path
            d="M24 78 Q12 78 12 66 Q12 56 22 54 Q26 42 39 44 Q50 34 62 44 Q76 42 80 54 Q90 56 90 66 Q90 78 76 78 Z"
            fill="#FFFFFF"
            stroke="#232946"
            strokeWidth="4.5"
            strokeLinejoin="round"
          />
          <circle cx="42" cy="63" r="3" fill="#232946" />
          <circle cx="58" cy="63" r="3" fill="#232946" />
          <path d="M46 69 Q50 73 54 69" fill="none" stroke="#232946" strokeWidth="3" strokeLinecap="round" />
        </g>
      );

    case 'flutter-butterfly':
      return (
        <g>
          <ellipse cx="32" cy="38" rx="20" ry="18" fill="#C77DFF" stroke="#232946" strokeWidth="4.5" />
          <ellipse cx="68" cy="38" rx="20" ry="18" fill="#C77DFF" stroke="#232946" strokeWidth="4.5" />
          <ellipse cx="34" cy="64" rx="15" ry="14" fill="#FF6B9D" stroke="#232946" strokeWidth="4.5" />
          <ellipse cx="66" cy="64" rx="15" ry="14" fill="#FF6B9D" stroke="#232946" strokeWidth="4.5" />
          <circle cx="30" cy="36" r="6" fill="#FFCA3A" />
          <circle cx="70" cy="36" r="6" fill="#FFCA3A" />
          <rect x="44" y="26" width="12" height="50" rx="6" fill="#232946" />
          <path d="M46 26 Q38 12 32 16 M54 26 Q62 12 68 16" fill="none" stroke="#232946" strokeWidth="4" strokeLinecap="round" />
        </g>
      );

    case 'splash-whale':
      return (
        <g>
          <path d="M44 26 Q38 14 32 20 M52 24 Q58 12 64 18" fill="none" stroke="#4CC9F0" strokeWidth="5" strokeLinecap="round" />
          <path
            d="M18 60 Q16 34 46 34 Q70 34 74 52 L88 42 Q90 56 78 60 Q88 68 84 76 Q70 72 64 66 Q44 74 26 68 Q18 66 18 60 Z"
            fill="#1982C4"
            stroke="#232946"
            strokeWidth="4.5"
            strokeLinejoin="round"
          />
          <circle cx="34" cy="50" r="3.5" fill="#232946" />
          <path d="M26 57 Q34 62 40 57" fill="none" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" />
        </g>
      );

    case 'golden-crown':
      return (
        <g>
          <path
            d="M16 74 L14 34 L34 52 L50 22 L66 52 L86 34 L84 74 Z"
            fill="#FFB703"
            stroke="#232946"
            strokeWidth="5"
            strokeLinejoin="round"
          />
          <circle cx="50" cy="54" r="7" fill="#FF595E" stroke="#232946" strokeWidth="3" />
          <circle cx="28" cy="58" r="5" fill="#1982C4" stroke="#232946" strokeWidth="2.5" />
          <circle cx="72" cy="58" r="5" fill="#8AC926" stroke="#232946" strokeWidth="2.5" />
        </g>
      );

    case 'astro-cat':
      return (
        <g>
          <circle cx="50" cy="54" r="34" fill="#E0FBFC" stroke="#232946" strokeWidth="4.5" opacity="0.9" />
          <path d="M30 40 L34 24 L45 36 Z" fill="#9B5DE5" stroke="#232946" strokeWidth="4" strokeLinejoin="round" />
          <path d="M70 40 L66 24 L55 36 Z" fill="#9B5DE5" stroke="#232946" strokeWidth="4" strokeLinejoin="round" />
          <circle cx="50" cy="55" r="22" fill="#C77DFF" stroke="#232946" strokeWidth="4" />
          <circle cx="42" cy="52" r="3.5" fill="#232946" />
          <circle cx="58" cy="52" r="3.5" fill="#232946" />
          <path d="M46 60 Q50 64 54 60" fill="none" stroke="#232946" strokeWidth="3" strokeLinecap="round" />
        </g>
      );

    case 'berry-cupcake':
      return (
        <g>
          <path d="M26 56 L74 56 L66 86 L34 86 Z" fill="#FFCA3A" stroke="#232946" strokeWidth="4.5" strokeLinejoin="round" />
          <path
            d="M22 56 Q18 36 36 34 Q40 20 52 22 Q64 20 68 34 Q82 36 78 56 Z"
            fill="#F15BB5"
            stroke="#232946"
            strokeWidth="4.5"
            strokeLinejoin="round"
          />
          <circle cx="50" cy="18" r="8" fill="#FF595E" stroke="#232946" strokeWidth="3.5" />
          <circle cx="38" cy="42" r="3" fill="#FFFFFF" />
          <circle cx="62" cy="44" r="3" fill="#FFCA3A" />
        </g>
      );

    case 'smiling-sun':
      return (
        <g>
          {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => (
            <line
              key={deg}
              x1="50"
              y1="10"
              x2="50"
              y2="20"
              stroke="#FB8500"
              strokeWidth="7"
              strokeLinecap="round"
              transform={`rotate(${deg} 50 50)`}
            />
          ))}
          <circle cx="50" cy="50" r="26" fill="#FFCA3A" stroke="#232946" strokeWidth="5" />
          <circle cx="42" cy="46" r="3.5" fill="#232946" />
          <circle cx="58" cy="46" r="3.5" fill="#232946" />
          <path d="M42 56 Q50 63 58 56" fill="none" stroke="#232946" strokeWidth="3.5" strokeLinecap="round" />
        </g>
      );

    case 'magic-trophy':
    default:
      return (
        <g>
          <path d="M28 24 H72 V46 C72 62 28 62 28 46 Z" fill="#FFD166" stroke="#232946" strokeWidth="5" strokeLinejoin="round" />
          <path d="M28 30 H16 C16 44 24 48 28 48" fill="none" stroke="#232946" strokeWidth="4.5" strokeLinecap="round" />
          <path d="M72 30 H84 C84 44 76 48 72 48" fill="none" stroke="#232946" strokeWidth="4.5" strokeLinecap="round" />
          <rect x="44" y="58" width="12" height="16" fill="#FFD166" stroke="#232946" strokeWidth="4" />
          <rect x="32" y="74" width="36" height="10" rx="4" fill="#FF595E" stroke="#232946" strokeWidth="4" />
          <polygon points="50,31 53,39 61,39 55,44 57,52 50,47 43,52 45,44 39,39 47,39" fill="#FFFFFF" />
        </g>
      );
  }
}

/**
 * Draws a crisp sticker onto a Canvas2D context for PNG export / social sharing.
 */
export function drawStickerOnCanvas(
  ctx: CanvasRenderingContext2D,
  stickerId: string,
  cx: number,
  cy: number,
  size: number,
  rotationDeg = 0
): void {
  const def = getStickerById(stickerId);
  const accent = def?.accent ?? '#FFCA3A';
  ctx.save();
  ctx.translate(cx, cy);
  ctx.rotate((rotationDeg * Math.PI) / 180);

  // Soft white sticker backing badge so stickers pop on any background
  const r = size * 0.46;
  ctx.beginPath();
  ctx.arc(0, 0, r, 0, Math.PI * 2);
  ctx.fillStyle = '#FFFFFF';
  ctx.fill();
  ctx.lineWidth = Math.max(2, size * 0.055);
  ctx.strokeStyle = '#232946';
  ctx.stroke();

  // Inner bright color emblem
  ctx.beginPath();
  ctx.arc(0, 0, r * 0.78, 0, Math.PI * 2);
  ctx.fillStyle = accent;
  ctx.fill();

  // Friendly star sparkle face inside exported badge
  ctx.fillStyle = '#FFFFFF';
  ctx.beginPath();
  for (let i = 0; i < 10; i++) {
    const rad = i % 2 === 0 ? r * 0.56 : r * 0.26;
    const ang = (i * Math.PI) / 5 - Math.PI / 2;
    const px = Math.cos(ang) * rad;
    const py = Math.sin(ang) * rad;
    if (i === 0) ctx.moveTo(px, py);
    else ctx.lineTo(px, py);
  }
  ctx.closePath();
  ctx.fill();
  ctx.strokeStyle = '#232946';
  ctx.lineWidth = Math.max(1.5, size * 0.035);
  ctx.stroke();

  ctx.restore();
}
