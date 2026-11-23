import React, { useState } from 'react';
import { Award, Images, Play } from 'lucide-react';
import { StickerArt } from './StickerArt';

interface TitleScreenProps {
  onStart: () => void;
  onOpenStickers: () => void;
  onOpenGallery: () => void;
  unlockedCount: number;
  totalStickers: number;
  galleryCount: number;
}

export const TitleScreen: React.FC<TitleScreenProps> = ({
  onStart,
  onOpenStickers,
  onOpenGallery,
  unlockedCount,
  totalStickers,
  galleryCount,
}) => {
  const [imgFailed, setImgFailed] = useState(false);

  return (
    <main className="relative w-full h-full overflow-hidden bg-[#FFFBF2] flex flex-col justify-between">
      {/* Illustrated Key-Art Backdrop with calm left negative space */}
      {!imgFailed ? (
        <img
          src="/src/assets/images/title_bg_1795448545963.jpg"
          alt="Children's sunlit art desk with crayons, brushes, and paper stars"
          referrerPolicy="no-referrer"
          onError={() => setImgFailed(true)}
          className="absolute inset-0 w-full h-full object-cover object-right pointer-events-none select-none"
        />
      ) : (
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(circle at 75% 45%, #FFE8C2 0%, #FFFBF2 60%)',
          }}
        />
      )}

      {/* Subtle warm readability veil on the left negative space */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'linear-gradient(90deg, rgba(255,251,242,0.92) 0%, rgba(255,251,242,0.78) 42%, rgba(255,251,242,0.08) 72%, rgba(255,251,242,0) 100%)',
        }}
      />

      {/* Live ambient floating animated stickers on right desk area */}
      <div className="hidden md:block absolute right-10 top-10 pointer-events-none">
        <StickerArt stickerId="happy-star" size={72} />
      </div>
      <div className="hidden lg:block absolute right-24 bottom-20 pointer-events-none">
        <StickerArt stickerId="bouncy-dino" size={82} />
      </div>

      {/* Left-third Hero Lockup + Start CTA (<= 3 menu actions) */}
      <div className="relative z-10 flex-1 flex items-center px-6 sm:px-12 lg:px-16">
        <div className="max-w-lg w-full flex flex-col items-start gap-6">
          {/* Bespoke inline SVG Title Lockup */}
          <div className="w-full max-w-[400px]">
            <svg
              viewBox="0 0 420 156"
              className="w-full h-auto overflow-visible"
              role="img"
              aria-label="DoodlePop Studio"
            >
              {/* Playful crayon accent behind title */}
              <g transform="translate(8, 12) rotate(-6)">
                <rect
                  x="0"
                  y="0"
                  width="54"
                  height="20"
                  rx="8"
                  fill="#FF595E"
                  stroke="#232946"
                  strokeWidth="4"
                />
                <polygon
                  points="54,2 70,10 54,18"
                  fill="#FFCA3A"
                  stroke="#232946"
                  strokeWidth="4"
                  strokeLinejoin="round"
                />
              </g>

              <text
                x="4"
                y="84"
                className="font-display"
                fontSize="60"
                fontWeight="700"
                fill="#FF595E"
                stroke="#232946"
                strokeWidth="10"
                paintOrder="stroke fill"
                letterSpacing="-1"
              >
                DoodlePop
              </text>
              <text
                x="8"
                y="138"
                className="font-display"
                fontSize="44"
                fontWeight="700"
                fill="#1982C4"
                stroke="#232946"
                strokeWidth="8"
                paintOrder="stroke fill"
              >
                Studio
              </text>

              {/* Sparkle burst beside wordmark */}
              <polygon
                points="358,38 364,52 378,54 367,63 370,77 358,69 346,77 349,63 338,54 352,52"
                fill="#FFCA3A"
                stroke="#232946"
                strokeWidth="4"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          <p className="text-lg sm:text-xl font-bold text-[#232946]/85 max-w-md leading-snug">
            Color magical pages, stamp dancing stickers, and share your art with friends.
          </p>

          {/* Primary Start CTA + 2 compact menu actions */}
          <div className="flex flex-wrap items-center gap-3 pt-1">
            <button
              type="button"
              data-start="true"
              onClick={onStart}
              className="group inline-flex items-center gap-3 px-8 py-4 min-h-[56px] rounded-2xl bg-[#FF595E] hover:bg-[#ff464c] active:translate-y-0.5 text-white font-display text-2xl font-bold border-4 border-[#232946] shadow-[0_6px_0_#232946] hover:shadow-[0_4px_0_#232946] transition-all cursor-pointer whitespace-nowrap shrink-0 focus-visible:outline-4 focus-visible:outline-[#1982C4]"
            >
              <Play className="w-7 h-7 fill-white" aria-hidden="true" />
              <span>Start Drawing</span>
            </button>

            <button
              type="button"
              onClick={onOpenStickers}
              className="inline-flex items-center gap-2.5 px-5 py-3.5 min-h-[52px] rounded-2xl bg-[#FFCA3A] hover:bg-[#ffc01f] active:translate-y-0.5 text-[#232946] font-bold text-base border-3 border-[#232946] shadow-[0_4px_0_#232946] transition-all cursor-pointer whitespace-nowrap shrink-0 focus-visible:outline-4 focus-visible:outline-[#1982C4]"
            >
              <Award className="w-5 h-5" aria-hidden="true" />
              <span>Stickers</span>
              <span className="tabular-nums font-extrabold">
                {unlockedCount}/{totalStickers}
              </span>
            </button>

            <button
              type="button"
              onClick={onOpenGallery}
              className="inline-flex items-center gap-2.5 px-5 py-3.5 min-h-[52px] rounded-2xl bg-white hover:bg-[#F6EFE2] active:translate-y-0.5 text-[#232946] font-bold text-base border-3 border-[#232946] shadow-[0_4px_0_#232946] transition-all cursor-pointer whitespace-nowrap shrink-0 focus-visible:outline-4 focus-visible:outline-[#1982C4]"
            >
              <Images className="w-5 h-5 text-[#1982C4]" aria-hidden="true" />
              <span>Art Wall</span>
              <span className="tabular-nums font-extrabold">{galleryCount}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Single flat control-hint line in bottom safe margin */}
      <footer className="relative z-10 px-6 sm:px-12 lg:px-16 pb-5 pt-2">
        <p className="text-sm font-bold text-[#232946]/70 tracking-wide">
          Tap or Drag to Paint · Bucket to Fill · Stamp Animated Stickers · Esc Pause
        </p>
      </footer>
    </main>
  );
};
