import React, { useMemo, useState } from 'react';
import {
  Check,
  Copy,
  Download,
  Images,
  Play,
  Share2,
  Sparkles,
  Trophy,
  X,
} from 'lucide-react';
import { ARTWORK_FRAMES, getCreativeBadge } from '../game/gameLogic';
import { getStickerById, STICKER_CATALOG } from '../game/stickers';
import { ArtworkFrameId, CanvasMode, PlacedSticker } from '../game/types';
import { soundEngine } from '../utils/soundEngine';
import { StickerArt } from './StickerArt';

interface CelebrationShareModalProps {
  imageDataUrl: string;
  exportCompositeUrl: string;
  stickers: PlacedSticker[];
  pageId: string;
  pageTitle: string;
  mode: CanvasMode;
  score: number;
  newlyUnlockedStickerId: string | null;
  unlockedStickersCount: number;
  onPublishToWall: (params: {
    title: string;
    artistName: string;
    frameId: ArtworkFrameId;
  }) => void;
  onDrawAgain: () => void;
  onBackToCanvas: () => void;
  onOpenWall: () => void;
}

const FRAME_STYLE_MAP: Record<ArtworkFrameId, string> = {
  classic: 'border-[#E6CCB2] bg-[#F6EFE2]',
  rainbow: 'border-[#FF595E] bg-[#FFCA3A]/20',
  polka: 'border-[#1982C4] bg-[#E0F4FF]',
  starry: 'border-[#FFCA3A] bg-[#232946]',
};

async function buildFramedPngBlob(
  imageDataUrl: string,
  frameId: ArtworkFrameId,
  title: string,
  artistName: string
): Promise<Blob | null> {
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => {
      const pad = 48;
      const footerH = 72;
      const out = document.createElement('canvas');
      out.width = img.width + pad * 2;
      out.height = img.height + pad * 2 + footerH;
      const ctx = out.getContext('2d');
      if (!ctx) {
        resolve(null);
        return;
      }

      const frameBg: Record<ArtworkFrameId, string> = {
        classic: '#E6CCB2',
        rainbow: '#FF595E',
        polka: '#1982C4',
        starry: '#232946',
      };
      ctx.fillStyle = frameBg[frameId];
      ctx.fillRect(0, 0, out.width, out.height);

      // Decorative polka dots or stars on frame
      if (frameId === 'polka') {
        ctx.fillStyle = 'rgba(255,255,255,0.45)';
        for (let x = 24; x < out.width; x += 60) {
          ctx.beginPath();
          ctx.arc(x, 24, 9, 0, Math.PI * 2);
          ctx.arc(x, out.height - 24, 9, 0, Math.PI * 2);
          ctx.fill();
        }
      } else if (frameId === 'starry') {
        ctx.fillStyle = '#FFCA3A';
        for (let x = 32; x < out.width; x += 72) {
          ctx.beginPath();
          ctx.arc(x, 24, 6, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      ctx.fillStyle = '#FFFFFF';
      ctx.fillRect(pad - 6, pad - 6, img.width + 12, img.height + 12);
      ctx.drawImage(img, pad, pad);

      // Caption strip
      ctx.fillStyle = frameId === 'starry' ? '#FFFBF2' : '#232946';
      ctx.font = '700 30px Fredoka, Nunito, sans-serif';
      ctx.fillText(title || 'My Masterpiece', pad, img.height + pad + 44);

      ctx.font = '700 22px Nunito, sans-serif';
      const byText = `by ${artistName || 'Young Artist'} · DoodlePop Studio`;
      const metrics = ctx.measureText(byText);
      ctx.fillText(byText, out.width - pad - metrics.width, img.height + pad + 44);

      out.toBlob((blob) => resolve(blob), 'image/png');
    };
    img.onerror = () => resolve(null);
    img.src = imageDataUrl;
  });
}

export const CelebrationShareModal: React.FC<CelebrationShareModalProps> = ({
  imageDataUrl,
  exportCompositeUrl,
  stickers,
  pageTitle,
  score,
  newlyUnlockedStickerId,
  unlockedStickersCount,
  onPublishToWall,
  onDrawAgain,
  onBackToCanvas,
  onOpenWall,
}) => {
  const [frameId, setFrameId] = useState<ArtworkFrameId>('rainbow');
  const [title, setTitle] = useState(`My ${pageTitle}`);
  const [artistName, setArtistName] = useState('Young Artist');
  const [published, setPublished] = useState(false);
  const [feedbackMsg, setFeedbackMsg] = useState<string | null>(null);

  const unlockedDef = useMemo(
    () => (newlyUnlockedStickerId ? getStickerById(newlyUnlockedStickerId) : null),
    [newlyUnlockedStickerId]
  );

  const showTempFeedback = (msg: string) => {
    setFeedbackMsg(msg);
    window.setTimeout(() => setFeedbackMsg(null), 2600);
  };

  const handlePublish = () => {
    if (!published) {
      onPublishToWall({ title, artistName, frameId });
      setPublished(true);
      soundEngine.playReaction();
      showTempFeedback('Posted to Live Art Wall!');
    } else {
      onOpenWall();
    }
  };

  const handleDownload = async () => {
    const blob = await buildFramedPngBlob(exportCompositeUrl, frameId, title, artistName);
    if (!blob) return;
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${title.toLowerCase().replace(/[^a-z0-9]+/g, '-') || 'doodlepop-art'}.png`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    soundEngine.playPop(5);
    showTempFeedback('Saved PNG Masterpiece!');
  };

  const handleCopyImage = async () => {
    try {
      const blob = await buildFramedPngBlob(exportCompositeUrl, frameId, title, artistName);
      if (blob && navigator.clipboard && typeof ClipboardItem !== 'undefined') {
        await navigator.clipboard.write([new ClipboardItem({ 'image/png': blob })]);
        soundEngine.playPop(6);
        showTempFeedback('Copied image to clipboard!');
        return;
      }
    } catch {
      // Fallback to text share copy
    }
    try {
      await navigator.clipboard?.writeText(
        `Check out "${title}" by ${artistName} made in DoodlePop Studio!`
      );
      soundEngine.playPop(6);
      showTempFeedback('Copied share caption!');
    } catch {
      showTempFeedback('Use Save PNG to download your art!');
    }
  };

  const handleNativeShare = async () => {
    const blob = await buildFramedPngBlob(exportCompositeUrl, frameId, title, artistName);
    const shareText = `Look at "${title}" by ${artistName} created in DoodlePop Studio!`;

    if (navigator.share) {
      try {
        if (blob) {
          const file = new File([blob], 'doodlepop-masterpiece.png', { type: 'image/png' });
          if (navigator.canShare && navigator.canShare({ files: [file] })) {
            await navigator.share({ title, text: shareText, files: [file] });
            soundEngine.playReaction();
            showTempFeedback('Shared masterpiece!');
            return;
          }
        }
        await navigator.share({
          title,
          text: shareText,
          url: window.location.href,
        });
        soundEngine.playReaction();
        showTempFeedback('Shared link!');
        return;
      } catch {
        // User cancelled or unsupported file share; fall through cleanly
      }
    }

    // Fallback: publish to live wall & copy caption
    if (!published) {
      onPublishToWall({ title, artistName, frameId });
      setPublished(true);
    }
    try {
      await navigator.clipboard?.writeText(`${shareText} ${window.location.href}`);
      showTempFeedback('Posted to Wall & Copied Link!');
    } catch {
      showTempFeedback('Posted to Live Art Wall!');
    }
    soundEngine.playReaction();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="celebration-title"
      className="fixed inset-0 z-50 bg-[#232946]/65 flex items-center justify-center p-3 sm:p-5"
    >
      <div className="bg-[#FFFBF2] border-4 border-[#232946] rounded-3xl shadow-[0_12px_0_#232946] w-full max-w-4xl max-h-[94vh] flex flex-col overflow-hidden">
        {/* Celebration Header */}
        <div className="flex items-center justify-between px-5 sm:px-7 py-3.5 bg-[#FFCA3A] border-b-3 border-[#232946]">
          <div className="flex items-center gap-3">
            <Trophy className="w-7 h-7 text-[#232946]" aria-hidden="true" />
            <div>
              <h2 id="celebration-title" className="font-display text-2xl sm:text-3xl font-bold text-[#232946] leading-none">
                Amazing Masterpiece!
              </h2>
              <p className="text-xs sm:text-sm font-extrabold text-[#232946]/80 pt-0.5 tabular-nums">
                {getCreativeBadge(score)} · Score {score} · Stickers {unlockedStickersCount}/
                {STICKER_CATALOG.length}
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onBackToCanvas}
            aria-label="Back to canvas"
            className="w-11 h-11 rounded-xl bg-white hover:bg-[#FF595E] hover:text-white border-3 border-[#232946] flex items-center justify-center cursor-pointer"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Body Grid */}
        <div className="p-4 sm:p-6 overflow-y-auto grid grid-cols-1 lg:grid-cols-12 gap-5 items-start">
          {/* Left: Live Framed Masterpiece Preview */}
          <div className="lg:col-span-7 flex flex-col gap-3">
            <div
              className={`relative rounded-2xl border-8 p-2.5 shadow-[0_6px_0_rgba(35,41,70,0.2)] transition-colors ${FRAME_STYLE_MAP[frameId]}`}
            >
              <div className="relative w-full aspect-[10/7] rounded-xl overflow-hidden bg-white border-2 border-[#232946]">
                <img
                  src={imageDataUrl}
                  alt={title}
                  className="w-full h-full object-contain block"
                />
                {/* Live bouncing sticker overlay preview */}
                <div className="absolute inset-0 pointer-events-none">
                  {stickers.map((st) => (
                    <div
                      key={st.uid}
                      className="absolute"
                      style={{
                        left: `${st.x * 100}%`,
                        top: `${st.y * 100}%`,
                        transform: `translate(-50%, -50%) rotate(${st.rotation}deg)`,
                      }}
                    >
                      <StickerArt stickerId={st.stickerId} size={Math.round(48 * st.scale)} animated />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Frame Picker */}
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-xs font-extrabold uppercase tracking-wider text-[#232946]/70 mr-1">
                Frame
              </span>
              {ARTWORK_FRAMES.map((f) => (
                <button
                  key={f.id}
                  type="button"
                  onClick={() => {
                    setFrameId(f.id);
                    soundEngine.playPop(2);
                  }}
                  className={`px-3.5 py-2 min-h-[40px] rounded-xl text-sm font-bold border-2 border-[#232946] cursor-pointer transition-colors ${
                    frameId === f.id
                      ? 'bg-[#232946] text-white'
                      : 'bg-white text-[#232946] hover:bg-[#F6EFE2]'
                  }`}
                >
                  {f.label}
                </button>
              ))}
            </div>
          </div>

          {/* Right: Animated Sticker Reward + Real-Time Social Share */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            {/* Newly Unlocked Animated Sticker Reward Card */}
            <div className="rounded-2xl bg-[#F6EFE2] border-3 border-[#232946] p-4 flex items-center gap-4">
              <div className="w-20 h-20 rounded-2xl bg-white border-3 border-[#232946] flex items-center justify-center shrink-0">
                <StickerArt
                  stickerId={unlockedDef ? unlockedDef.id : 'magic-trophy'}
                  size={66}
                  animated
                />
              </div>
              <div className="min-w-0">
                <div className="inline-flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-wider text-[#FF595E]">
                  <Sparkles className="w-4 h-4" aria-hidden="true" />
                  <span>{unlockedDef ? 'New Sticker Unlocked!' : 'All Stickers Collected!'}</span>
                </div>
                <p className="font-display text-xl font-bold text-[#232946] truncate">
                  {unlockedDef ? unlockedDef.name : 'Master Sticker Artist'}
                </p>
                <p className="text-xs font-bold text-[#232946]/70">
                  {unlockedDef
                    ? 'Added to your sticker bar & album!'
                    : 'Every animated sticker is yours!'}
                </p>
              </div>
            </div>

            {/* Artwork Name & Artist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-2.5">
              <label className="flex flex-col gap-1">
                <span className="text-xs font-extrabold text-[#232946]/75">Artwork Title</span>
                <input
                  type="text"
                  maxLength={32}
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="px-3.5 py-2.5 rounded-xl bg-white border-3 border-[#232946] font-bold text-sm text-[#232946] focus:outline-none focus:ring-2 focus:ring-[#1982C4]"
                />
              </label>
              <label className="flex flex-col gap-1">
                <span className="text-xs font-extrabold text-[#232946]/75">Artist Name</span>
                <input
                  type="text"
                  maxLength={24}
                  value={artistName}
                  onChange={(e) => setArtistName(e.target.value)}
                  className="px-3.5 py-2.5 rounded-xl bg-white border-3 border-[#232946] font-bold text-sm text-[#232946] focus:outline-none focus:ring-2 focus:ring-[#1982C4]"
                />
              </label>
            </div>

            {/* Social Sharing Buttons */}
            <div className="flex flex-col gap-2.5">
              <div className="grid grid-cols-2 gap-2.5">
                <button
                  type="button"
                  onClick={handlePublish}
                  className={`inline-flex items-center justify-center gap-2 px-4 py-3 min-h-[48px] rounded-2xl font-bold text-sm border-3 border-[#232946] shadow-[0_4px_0_#232946] cursor-pointer transition-colors ${
                    published
                      ? 'bg-[#8AC926] text-[#232946]'
                      : 'bg-[#1982C4] hover:bg-[#1572ab] text-white'
                  }`}
                >
                  {published ? <Images className="w-4 h-4" /> : <Sparkles className="w-4 h-4" />}
                  <span>{published ? 'View Art Wall' : 'Post to Art Wall'}</span>
                </button>

                <button
                  type="button"
                  onClick={handleNativeShare}
                  className="inline-flex items-center justify-center gap-2 px-4 py-3 min-h-[48px] rounded-2xl bg-[#FF595E] hover:bg-[#ff464c] text-white font-bold text-sm border-3 border-[#232946] shadow-[0_4px_0_#232946] cursor-pointer"
                >
                  <Share2 className="w-4 h-4" />
                  <span>Share Now</span>
                </button>
              </div>

              <div className="grid grid-cols-2 gap-2.5">
                <button
                  type="button"
                  onClick={handleDownload}
                  className="inline-flex items-center justify-center gap-2 px-4 py-2.5 min-h-[44px] rounded-xl bg-white hover:bg-[#F6EFE2] text-[#232946] font-bold text-sm border-2 border-[#232946] cursor-pointer"
                >
                  <Download className="w-4 h-4" />
                  <span>Save PNG</span>
                </button>

                <button
                  type="button"
                  onClick={handleCopyImage}
                  className="inline-flex items-center justify-center gap-2 px-4 py-2.5 min-h-[44px] rounded-xl bg-white hover:bg-[#F6EFE2] text-[#232946] font-bold text-sm border-2 border-[#232946] cursor-pointer"
                >
                  <Copy className="w-4 h-4" />
                  <span>Copy Image</span>
                </button>
              </div>

              {feedbackMsg && (
                <div
                  role="status"
                  className="inline-flex items-center justify-center gap-1.5 text-sm font-extrabold text-[#232946] bg-[#8AC926]/35 border-2 border-[#232946] rounded-xl py-2 px-3"
                >
                  <Check className="w-4 h-4" />
                  <span>{feedbackMsg}</span>
                </div>
              )}
            </div>

            <button
              type="button"
              data-start="true"
              onClick={onDrawAgain}
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 min-h-[52px] rounded-2xl bg-[#8AC926] hover:bg-[#7cb81e] text-[#232946] font-display text-xl font-bold border-3 border-[#232946] shadow-[0_4px_0_#232946] cursor-pointer mt-1"
            >
              <Play className="w-5 h-5 fill-[#232946]" aria-hidden="true" />
              <span>Keep Drawing</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
