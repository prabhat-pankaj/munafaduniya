import React from 'react';
import { Download, Heart, Images, Sparkles, Star, ThumbsUp, X } from 'lucide-react';
import { ArtworkFrameId, SharedArtwork } from '../game/types';
import { StickerArt } from './StickerArt';

interface ArtWallModalProps {
  artworks: SharedArtwork[];
  onReact: (artworkId: string, kind: 'hearts' | 'stars' | 'claps') => void;
  onClose: () => void;
}

const WALL_FRAME_COLOR: Record<ArtworkFrameId, string> = {
  classic: 'border-[#E6CCB2]',
  rainbow: 'border-[#FF595E]',
  polka: 'border-[#1982C4]',
  starry: 'border-[#FFCA3A]',
};

export const ArtWallModal: React.FC<ArtWallModalProps> = ({
  artworks,
  onReact,
  onClose,
}) => {
  const handleDownload = (art: SharedArtwork) => {
    const a = document.createElement('a');
    a.href = art.imageDataUrl;
    a.download = `${art.title.toLowerCase().replace(/[^a-z0-9]+/g, '-') || 'masterpiece'}.png`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="art-wall-title"
      className="fixed inset-0 z-50 bg-[#232946]/60 flex items-center justify-center p-4"
    >
      <div className="bg-[#FFFBF2] border-4 border-[#232946] rounded-3xl shadow-[0_10px_0_#232946] w-full max-w-5xl max-h-[92vh] flex flex-col overflow-hidden">
        <div className="flex items-center justify-between px-6 py-4 bg-[#1982C4] text-white border-b-3 border-[#232946]">
          <div className="flex items-center gap-3">
            <Images className="w-6 h-6" aria-hidden="true" />
            <h2 id="art-wall-title" className="font-display text-2xl font-bold">
              Live Shared Art Wall
            </h2>
            <span className="text-sm font-extrabold opacity-90 tabular-nums">
              {artworks.length} {artworks.length === 1 ? 'Masterpiece' : 'Masterpieces'}
            </span>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close art wall"
            className="w-11 h-11 rounded-xl bg-white text-[#232946] hover:bg-[#FF595E] hover:text-white border-3 border-[#232946] flex items-center justify-center cursor-pointer"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {artworks.length === 0 ? (
          <div className="p-12 flex flex-col items-center justify-center text-center gap-4">
            <StickerArt stickerId="rainbow-cloud" size={96} animated />
            <h3 className="font-display text-2xl font-bold text-[#232946]">
              No Shared Masterpieces Yet!
            </h3>
            <p className="text-base font-bold text-[#232946]/70 max-w-md">
              Color a page or paint a neon doodle, tap Done &amp; Share, and post your art here to celebrate with reactions!
            </p>
          </div>
        ) : (
          <div className="p-5 overflow-y-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {artworks.map((art) => (
              <article
                key={art.id}
                className="bg-white rounded-2xl border-3 border-[#232946] shadow-[0_5px_0_#232946] overflow-hidden flex flex-col"
              >
                <div className={`relative aspect-[10/7] border-b-3 border-[#232946] p-2 bg-[#F6EFE2]`}>
                  <div
                    className={`relative w-full h-full rounded-xl overflow-hidden border-4 bg-white ${
                      WALL_FRAME_COLOR[art.frameId] || 'border-[#E6CCB2]'
                    }`}
                  >
                    <img
                      src={art.imageDataUrl}
                      alt={`${art.title} by ${art.artistName}`}
                      className="w-full h-full object-contain block"
                    />
                    <div className="absolute inset-0 pointer-events-none">
                      {art.stickers.map((st) => (
                        <div
                          key={st.uid}
                          className="absolute"
                          style={{
                            left: `${st.x * 100}%`,
                            top: `${st.y * 100}%`,
                            transform: `translate(-50%, -50%) rotate(${st.rotation}deg)`,
                          }}
                        >
                          <StickerArt
                            stickerId={st.stickerId}
                            size={Math.round(32 * st.scale)}
                            animated
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-3.5 flex flex-col gap-3">
                  <div className="flex items-start justify-between gap-2">
                    <div className="min-w-0">
                      <h3 className="font-display font-bold text-lg text-[#232946] truncate">
                        {art.title}
                      </h3>
                      <p className="text-xs font-bold text-[#232946]/65 truncate">
                        by {art.artistName}
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={() => handleDownload(art)}
                      aria-label={`Download ${art.title}`}
                      className="w-9 h-9 rounded-xl bg-[#F6EFE2] hover:bg-[#FFCA3A] border-2 border-[#232946] flex items-center justify-center shrink-0 cursor-pointer"
                    >
                      <Download className="w-4 h-4 text-[#232946]" />
                    </button>
                  </div>

                  {/* Real-time Reactions Bar */}
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => onReact(art.id, 'hearts')}
                      aria-label={`Send heart to ${art.title}`}
                      className="group flex-1 inline-flex items-center justify-center gap-1.5 py-2 min-h-[40px] rounded-xl bg-[#FFF0F3] hover:bg-[#FF595E] hover:text-white text-[#232946] font-bold text-sm border-2 border-[#232946] cursor-pointer transition-colors"
                    >
                      <Heart
                        className="w-4 h-4 fill-[#FF595E] text-[#FF595E] group-hover:fill-white group-hover:text-white transition-colors"
                        aria-hidden="true"
                      />
                      <span className="tabular-nums">{art.reactions.hearts}</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => onReact(art.id, 'stars')}
                      aria-label={`Send star to ${art.title}`}
                      className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 min-h-[40px] rounded-xl bg-[#FFF9DB] hover:bg-[#FFCA3A] text-[#232946] font-bold text-sm border-2 border-[#232946] cursor-pointer transition-colors"
                    >
                      <Star className="w-4 h-4 fill-[#FFCA3A] text-[#232946]" aria-hidden="true" />
                      <span className="tabular-nums">{art.reactions.stars}</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => onReact(art.id, 'claps')}
                      aria-label={`Send applause to ${art.title}`}
                      className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 min-h-[40px] rounded-xl bg-[#E8F8F5] hover:bg-[#8AC926] text-[#232946] font-bold text-sm border-2 border-[#232946] cursor-pointer transition-colors"
                    >
                      <ThumbsUp className="w-4 h-4 text-[#1982C4]" aria-hidden="true" />
                      <span className="tabular-nums">{art.reactions.claps}</span>
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
