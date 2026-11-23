import React, { useEffect, useRef } from 'react';
import { Sparkles, X } from 'lucide-react';
import { COLORING_PAGES, renderColoringTemplate } from '../game/coloringPages';
import { ColoringPageDef } from '../game/types';

interface PageThumbProps {
  page: ColoringPageDef;
}

const PageThumb: React.FC<PageThumbProps> = ({ page }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    if (page.mode === 'glow') {
      ctx.fillStyle = '#141B38';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      const colors = ['#FF595E', '#FFCA3A', '#4CC9F0', '#8AC926'];
      for (let i = 0; i < 4; i++) {
        ctx.strokeStyle = colors[i];
        ctx.lineWidth = 4;
        ctx.beginPath();
        ctx.arc(85 + i * 24, 95, 22 + i * 8, 0, Math.PI * 1.4);
        ctx.stroke();
      }
    } else if (page.mode === 'freedraw') {
      ctx.fillStyle = '#FFFFFF';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.strokeStyle = '#2EC4B6';
      ctx.lineWidth = 6;
      ctx.lineCap = 'round';
      ctx.beginPath();
      ctx.moveTo(45, 110);
      ctx.quadraticCurveTo(110, 40, 175, 110);
      ctx.stroke();
      ctx.strokeStyle = '#FF595E';
      ctx.beginPath();
      ctx.moveTo(85, 130);
      ctx.quadraticCurveTo(145, 70, 215, 120);
      ctx.stroke();
    } else {
      ctx.fillStyle = '#FFFFFF';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      renderColoringTemplate(ctx, page.id, canvas.width, canvas.height, '#232946');
    }
  }, [page]);

  return (
    <canvas
      ref={canvasRef}
      width={260}
      height={182}
      className="w-full h-auto aspect-[10/7] rounded-xl border-2 border-[#232946]/20 block"
    />
  );
};

interface PagePickerModalProps {
  currentPageId: string;
  onSelectPage: (page: ColoringPageDef) => void;
  onClose: () => void;
}

export const PagePickerModal: React.FC<PagePickerModalProps> = ({
  currentPageId,
  onSelectPage,
  onClose,
}) => {
  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="page-picker-title"
      className="fixed inset-0 z-50 bg-[#232946]/55 flex items-center justify-center p-4"
    >
      <div className="bg-[#FFFBF2] border-4 border-[#232946] rounded-3xl shadow-[0_10px_0_#232946] w-full max-w-4xl max-h-[90vh] flex flex-col overflow-hidden">
        <div className="flex items-center justify-between px-6 py-4 bg-[#F6EFE2] border-b-3 border-[#232946]">
          <div className="flex items-center gap-3">
            <Sparkles className="w-6 h-6 text-[#FF595E]" aria-hidden="true" />
            <h2 id="page-picker-title" className="font-display text-2xl font-bold text-[#232946]">
              Pick a Coloring Page or Mode
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close page picker"
            className="w-11 h-11 rounded-xl bg-white hover:bg-[#FF595E] hover:text-white border-3 border-[#232946] flex items-center justify-center transition-colors cursor-pointer"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="p-5 overflow-y-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {COLORING_PAGES.map((page) => {
            const isSelected = page.id === currentPageId;
            return (
              <button
                key={page.id}
                type="button"
                onClick={() => onSelectPage(page)}
                className={`group flex flex-col gap-2 p-3 rounded-2xl border-3 border-[#232946] text-left transition-transform active:translate-y-0.5 cursor-pointer ${
                  isSelected
                    ? 'bg-[#FFCA3A] shadow-[0_4px_0_#232946]'
                    : 'bg-white hover:bg-[#F6EFE2] shadow-[0_4px_0_#232946]'
                }`}
              >
                <PageThumb page={page} />
                <div className="flex items-center justify-between gap-1 px-0.5">
                  <span className="font-display font-bold text-base text-[#232946] truncate">
                    {page.title}
                  </span>
                  <span className="text-xs font-extrabold text-[#232946]/65 shrink-0">
                    {page.mode === 'glow'
                      ? 'Neon'
                      : page.mode === 'freedraw'
                      ? 'Free'
                      : 'Color'}
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
