import React, { useState } from 'react';
import { Lock, Sparkles, X } from 'lucide-react';
import { STICKER_CATALOG } from '../game/stickers';
import { soundEngine } from '../utils/soundEngine';
import { StickerArt } from './StickerArt';

interface StickerAlbumModalProps {
  unlockedStickers: string[];
  onSelectForCanvas?: (stickerId: string) => void;
  onClose: () => void;
}

export const StickerAlbumModal: React.FC<StickerAlbumModalProps> = ({
  unlockedStickers,
  onSelectForCanvas,
  onClose,
}) => {
  const unlockedSet = new Set(unlockedStickers);
  const [poppingId, setPoppingId] = useState<string | null>(null);

  const handleTap = (id: string, isUnlocked: boolean) => {
    if (!isUnlocked) {
      soundEngine.playUndo();
      return;
    }
    setPoppingId(id);
    soundEngine.playStamp();
    window.setTimeout(() => setPoppingId(null), 350);
    if (onSelectForCanvas) {
      onSelectForCanvas(id);
      onClose();
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="sticker-album-title"
      className="fixed inset-0 z-50 bg-[#232946]/55 flex items-center justify-center p-4"
    >
      <div className="bg-[#FFFBF2] border-4 border-[#232946] rounded-3xl shadow-[0_10px_0_#232946] w-full max-w-3xl max-h-[90vh] flex flex-col overflow-hidden">
        <div className="flex items-center justify-between px-6 py-4 bg-[#FFCA3A] border-b-3 border-[#232946]">
          <div className="flex items-center gap-3">
            <Sparkles className="w-6 h-6 text-[#232946]" aria-hidden="true" />
            <h2 id="sticker-album-title" className="font-display text-2xl font-bold text-[#232946]">
              Animated Sticker Album
            </h2>
            <span className="text-base font-extrabold text-[#232946]/80 tabular-nums">
              {unlockedStickers.length}/{STICKER_CATALOG.length}
            </span>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close sticker album"
            className="w-11 h-11 rounded-xl bg-white hover:bg-[#FF595E] hover:text-white border-3 border-[#232946] flex items-center justify-center transition-colors cursor-pointer"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="px-6 pt-4 pb-2 text-sm font-bold text-[#232946]/75">
          Finish and celebrate your drawings to unlock every dancing sticker!
        </div>

        <div className="p-5 overflow-y-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {STICKER_CATALOG.map((sticker) => {
            const isUnlocked = unlockedSet.has(sticker.id);
            const isPopping = poppingId === sticker.id;
            return (
              <button
                key={sticker.id}
                type="button"
                onClick={() => handleTap(sticker.id, isUnlocked)}
                className={`relative flex flex-col items-center gap-2 p-4 rounded-2xl border-3 border-[#232946] transition-transform cursor-pointer ${
                  isUnlocked
                    ? 'bg-white hover:bg-[#F6EFE2] shadow-[0_4px_0_#232946] active:translate-y-0.5'
                    : 'bg-[#EDE6D6] opacity-75'
                } ${isPopping ? 'scale-105' : ''}`}
              >
                <div className="relative">
                  <StickerArt stickerId={sticker.id} size={72} locked={!isUnlocked} animated={isUnlocked} />
                  {!isUnlocked && (
                    <span className="absolute -bottom-1 -right-1 w-7 h-7 rounded-full bg-[#232946] text-white flex items-center justify-center">
                      <Lock className="w-3.5 h-3.5" aria-hidden="true" />
                    </span>
                  )}
                </div>
                <span className="font-display font-bold text-base text-[#232946] text-center">
                  {sticker.name}
                </span>
                <span className="text-xs font-bold text-[#232946]/65">
                  {isUnlocked ? 'Unlocked' : 'Finish a drawing'}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
