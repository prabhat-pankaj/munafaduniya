import React from 'react';
import { Home, LayoutGrid, Play, Trash2 } from 'lucide-react';

interface PauseModalProps {
  onResume: () => void;
  onOpenPages: () => void;
  onClearCanvas: () => void;
  onBackToTitle: () => void;
}

export const PauseModal: React.FC<PauseModalProps> = ({
  onResume,
  onOpenPages,
  onClearCanvas,
  onBackToTitle,
}) => {
  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="pause-modal-title"
      className="fixed inset-0 z-50 bg-[#232946]/60 flex items-center justify-center p-4"
    >
      <div className="bg-[#FFFBF2] border-4 border-[#232946] rounded-3xl shadow-[0_10px_0_#232946] w-full max-w-sm p-6 flex flex-col gap-4">
        <h2
          id="pause-modal-title"
          className="font-display text-3xl font-bold text-center text-[#232946]"
        >
          Studio Paused
        </h2>

        <div className="flex flex-col gap-3 pt-1">
          <button
            type="button"
            data-start="true"
            onClick={onResume}
            className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-3.5 min-h-[52px] rounded-2xl bg-[#8AC926] hover:bg-[#7cb81e] text-[#232946] font-display text-xl font-bold border-3 border-[#232946] shadow-[0_4px_0_#232946] cursor-pointer"
          >
            <Play className="w-5 h-5 fill-[#232946]" aria-hidden="true" />
            <span>Resume Drawing</span>
          </button>

          <button
            type="button"
            onClick={onOpenPages}
            className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-3 min-h-[48px] rounded-2xl bg-[#FFCA3A] hover:bg-[#ffc01f] text-[#232946] font-bold text-base border-3 border-[#232946] shadow-[0_4px_0_#232946] cursor-pointer"
          >
            <LayoutGrid className="w-5 h-5" aria-hidden="true" />
            <span>Switch Coloring Page</span>
          </button>

          <button
            type="button"
            onClick={onClearCanvas}
            className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-3 min-h-[48px] rounded-2xl bg-white hover:bg-[#F6EFE2] text-[#232946] font-bold text-base border-3 border-[#232946] shadow-[0_4px_0_#232946] cursor-pointer"
          >
            <Trash2 className="w-5 h-5 text-[#FF595E]" aria-hidden="true" />
            <span>Start Fresh Canvas</span>
          </button>

          <button
            type="button"
            onClick={onBackToTitle}
            className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-3 min-h-[48px] rounded-2xl bg-[#F6EFE2] hover:bg-[#ebe1cf] text-[#232946] font-bold text-base border-3 border-[#232946] cursor-pointer"
          >
            <Home className="w-5 h-5" aria-hidden="true" />
            <span>Title Screen</span>
          </button>
        </div>
      </div>
    </div>
  );
};
