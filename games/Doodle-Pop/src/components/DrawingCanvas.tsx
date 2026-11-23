import React, {
  forwardRef,
  useCallback,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';
import { X } from 'lucide-react';
import { renderColoringTemplate } from '../game/coloringPages';
import { floodFillRGBA } from '../game/floodFill';
import { getRainbowHex } from '../game/gameLogic';
import { BrushSizeOption, CanvasMode, PlacedSticker, ToolType } from '../game/types';
import { soundEngine } from '../utils/soundEngine';
import { StickerArt, drawStickerOnCanvas } from './StickerArt';

export const LOGICAL_WIDTH = 1200;
export const LOGICAL_HEIGHT = 840;

interface HistorySnapshot {
  imageData: ImageData;
  stickers: PlacedSticker[];
}

interface BurstDot {
  id: number;
  x: number; // % 0..100
  y: number; // % 0..100
  color: string;
}

export interface DrawingStats {
  strokeCount: number;
  fillCount: number;
  stickerCount: number;
  colorsUsedCount: number;
}

export interface DrawingCanvasHandle {
  undo: () => void;
  redo: () => void;
  clear: () => void;
  exportBaseDataUrl: () => string;
  exportCompositeDataUrl: () => string;
  getStickers: () => PlacedSticker[];
  getStats: () => DrawingStats;
}

interface DrawingCanvasProps {
  pageId: string;
  mode: CanvasMode;
  activeTool: ToolType;
  activeColor: string;
  brushSize: BrushSizeOption;
  selectedStickerId: string;
  onHistoryChange: (canUndo: boolean, canRedo: boolean, stickerCount: number) => void;
  onActivityPulse?: () => void;
}

export const DrawingCanvas = forwardRef<DrawingCanvasHandle, DrawingCanvasProps>(
  (
    {
      pageId,
      mode,
      activeTool,
      activeColor,
      brushSize,
      selectedStickerId,
      onHistoryChange,
      onActivityPulse,
    },
    ref
  ) => {
    const paintCanvasRef = useRef<HTMLCanvasElement | null>(null);
    const outlineCanvasRef = useRef<HTMLCanvasElement | null>(null);
    const outlineMaskRef = useRef<Uint8ClampedArray | null>(null);
    const wrapperRef = useRef<HTMLDivElement | null>(null);
    const boardRef = useRef<HTMLDivElement | null>(null);
    const [boardDims, setBoardDims] = useState<{ w: number; h: number } | null>(null);

    const historyRef = useRef<HistorySnapshot[]>([]);
    const historyIndexRef = useRef<number>(-1);

    const [stickers, setStickers] = useState<PlacedSticker[]>([]);
    const stickersRef = useRef<PlacedSticker[]>([]);
    const [selectedPlacedUid, setSelectedPlacedUid] = useState<string | null>(null);
    const [bursts, setBursts] = useState<BurstDot[]>([]);

    // Drawing pointer state
    const isDrawingRef = useRef(false);
    const lastPointRef = useRef<{ x: number; y: number } | null>(null);
    const strokeDistanceRef = useRef(0);
    const draggingStickerRef = useRef<{ uid: string; offsetX: number; offsetY: number } | null>(null);

    // Creative activity metrics for score / badge calculation
    const statsRef = useRef({
      strokeCount: 0,
      fillCount: 0,
      colorsUsed: new Set<string>([activeColor]),
    });

    // ResizeObserver guarantees exact 10:7 artboard fit on both desktop & mobile portrait
    useEffect(() => {
      const el = wrapperRef.current;
      if (!el) return;
      const updateFit = () => {
        const pad = window.innerWidth < 640 ? 12 : 28;
        const availW = Math.max(200, el.clientWidth - pad);
        const availH = Math.max(140, el.clientHeight - pad);
        const scale = Math.min(availW / LOGICAL_WIDTH, availH / LOGICAL_HEIGHT);
        setBoardDims({
          w: Math.floor(LOGICAL_WIDTH * scale),
          h: Math.floor(LOGICAL_HEIGHT * scale),
        });
      };
      updateFit();
      const observer = new ResizeObserver(updateFit);
      observer.observe(el);
      return () => observer.disconnect();
    }, []);

    const syncHistoryMeta = useCallback(
      (nextStickers: PlacedSticker[]) => {
        const idx = historyIndexRef.current;
        const len = historyRef.current.length;
        onHistoryChange(idx > 0, idx < len - 1, nextStickers.length);
      },
      [onHistoryChange]
    );

    const pushHistorySnapshot = useCallback(
      (nextStickers: PlacedSticker[]) => {
        const canvas = paintCanvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d', { willReadFrequently: true });
        if (!ctx) return;

        const imgData = ctx.getImageData(0, 0, LOGICAL_WIDTH, LOGICAL_HEIGHT);
        const clonedStickers = nextStickers.map((s) => ({ ...s }));

        const truncated = historyRef.current.slice(0, historyIndexRef.current + 1);
        truncated.push({ imageData: imgData, stickers: clonedStickers });
        if (truncated.length > 22) {
          truncated.shift();
        }
        historyRef.current = truncated;
        historyIndexRef.current = truncated.length - 1;
        syncHistoryMeta(clonedStickers);
      },
      [syncHistoryMeta]
    );

    const spawnBurst = useCallback((normX: number, normY: number, color: string) => {
      const id = Date.now() + Math.random();
      setBursts((prev) => [
        ...prev.slice(-8),
        { id, x: normX * 100, y: normY * 100, color },
      ]);
      window.setTimeout(() => {
        setBursts((prev) => prev.filter((b) => b.id !== id));
      }, 450);
    }, []);

    const fillCanvasBase = useCallback(
      (ctx: CanvasRenderingContext2D, targetMode: CanvasMode) => {
        if (targetMode === 'glow') {
          ctx.fillStyle = '#141B38';
          ctx.fillRect(0, 0, LOGICAL_WIDTH, LOGICAL_HEIGHT);
          // Subtle starry backdrop dots for Glow Neon mode
          ctx.fillStyle = 'rgba(255, 255, 255, 0.22)';
          for (let i = 0; i < 42; i++) {
            const sx = ((i * 257 + 71) % (LOGICAL_WIDTH - 40)) + 20;
            const sy = ((i * 193 + 43) % (LOGICAL_HEIGHT - 40)) + 20;
            const r = (i % 3) + 1;
            ctx.beginPath();
            ctx.arc(sx, sy, r, 0, Math.PI * 2);
            ctx.fill();
          }
        } else {
          ctx.fillStyle = '#FFFFFF';
          ctx.fillRect(0, 0, LOGICAL_WIDTH, LOGICAL_HEIGHT);
        }
      },
      []
    );

    // Initialize or reset page when pageId or mode changes
    useEffect(() => {
      const paintCanvas = paintCanvasRef.current;
      const outlineCanvas = outlineCanvasRef.current;
      if (!paintCanvas || !outlineCanvas) return;

      const pCtx = paintCanvas.getContext('2d', { willReadFrequently: true });
      const oCtx = outlineCanvas.getContext('2d', { willReadFrequently: true });
      if (!pCtx || !oCtx) return;

      fillCanvasBase(pCtx, mode);

      renderColoringTemplate(oCtx, pageId, LOGICAL_WIDTH, LOGICAL_HEIGHT, '#232946');
      if (mode === 'coloring') {
        outlineMaskRef.current = oCtx.getImageData(
          0,
          0,
          LOGICAL_WIDTH,
          LOGICAL_HEIGHT
        ).data;
      } else {
        outlineMaskRef.current = null;
      }

      stickersRef.current = [];
      setStickers([]);
      setSelectedPlacedUid(null);
      statsRef.current = {
        strokeCount: 0,
        fillCount: 0,
        colorsUsed: new Set<string>([activeColor]),
      };

      const initialSnap = pCtx.getImageData(0, 0, LOGICAL_WIDTH, LOGICAL_HEIGHT);
      historyRef.current = [{ imageData: initialSnap, stickers: [] }];
      historyIndexRef.current = 0;
      syncHistoryMeta([]);
    }, [pageId, mode, fillCanvasBase, syncHistoryMeta]);

    useImperativeHandle(
      ref,
      () => ({
        undo: () => {
          if (historyIndexRef.current <= 0) return;
          const paintCanvas = paintCanvasRef.current;
          const pCtx = paintCanvas?.getContext('2d', { willReadFrequently: true });
          if (!pCtx) return;

          historyIndexRef.current -= 1;
          const snap = historyRef.current[historyIndexRef.current];
          pCtx.putImageData(snap.imageData, 0, 0);
          const restoredStickers = snap.stickers.map((s) => ({ ...s }));
          stickersRef.current = restoredStickers;
          setStickers(restoredStickers);
          setSelectedPlacedUid(null);
          syncHistoryMeta(restoredStickers);
          soundEngine.playUndo();
        },
        redo: () => {
          if (historyIndexRef.current >= historyRef.current.length - 1) return;
          const paintCanvas = paintCanvasRef.current;
          const pCtx = paintCanvas?.getContext('2d', { willReadFrequently: true });
          if (!pCtx) return;

          historyIndexRef.current += 1;
          const snap = historyRef.current[historyIndexRef.current];
          pCtx.putImageData(snap.imageData, 0, 0);
          const restoredStickers = snap.stickers.map((s) => ({ ...s }));
          stickersRef.current = restoredStickers;
          setStickers(restoredStickers);
          setSelectedPlacedUid(null);
          syncHistoryMeta(restoredStickers);
          soundEngine.playPop(3);
        },
        clear: () => {
          const paintCanvas = paintCanvasRef.current;
          const pCtx = paintCanvas?.getContext('2d', { willReadFrequently: true });
          if (!pCtx) return;

          fillCanvasBase(pCtx, mode);
          stickersRef.current = [];
          setStickers([]);
          setSelectedPlacedUid(null);
          pushHistorySnapshot([]);
          soundEngine.playUndo();
        },
        exportBaseDataUrl: () => {
          const out = document.createElement('canvas');
          out.width = LOGICAL_WIDTH;
          out.height = LOGICAL_HEIGHT;
          const ctx = out.getContext('2d');
          if (!ctx) return '';

          if (paintCanvasRef.current) {
            ctx.drawImage(paintCanvasRef.current, 0, 0);
          }
          if (mode === 'coloring' && outlineCanvasRef.current) {
            ctx.drawImage(outlineCanvasRef.current, 0, 0);
          }
          return out.toDataURL('image/png');
        },
        exportCompositeDataUrl: () => {
          const out = document.createElement('canvas');
          out.width = LOGICAL_WIDTH;
          out.height = LOGICAL_HEIGHT;
          const ctx = out.getContext('2d');
          if (!ctx) return '';

          if (paintCanvasRef.current) {
            ctx.drawImage(paintCanvasRef.current, 0, 0);
          }
          if (mode === 'coloring' && outlineCanvasRef.current) {
            ctx.drawImage(outlineCanvasRef.current, 0, 0);
          }
          for (const st of stickersRef.current) {
            drawStickerOnCanvas(
              ctx,
              st.stickerId,
              st.x * LOGICAL_WIDTH,
              st.y * LOGICAL_HEIGHT,
              96 * st.scale,
              st.rotation
            );
          }
          return out.toDataURL('image/png');
        },
        getStickers: () => stickersRef.current.map((s) => ({ ...s })),
        getStats: () => ({
          strokeCount: statsRef.current.strokeCount,
          fillCount: statsRef.current.fillCount,
          stickerCount: stickersRef.current.length,
          colorsUsedCount: statsRef.current.colorsUsed.size,
        }),
      }),
      [fillCanvasBase, mode, pushHistorySnapshot, syncHistoryMeta]
    );

    const getCanvasCoords = (clientX: number, clientY: number) => {
      const canvas = paintCanvasRef.current;
      if (!canvas) return { x: 0, y: 0, normX: 0, normY: 0 };
      const rect = canvas.getBoundingClientRect();
      const normX = Math.max(0, Math.min(1, (clientX - rect.left) / rect.width));
      const normY = Math.max(0, Math.min(1, (clientY - rect.top) / rect.height));
      return {
        x: normX * LOGICAL_WIDTH,
        y: normY * LOGICAL_HEIGHT,
        normX,
        normY,
      };
    };

    const drawSegment = (
      ctx: CanvasRenderingContext2D,
      from: { x: number; y: number },
      to: { x: number; y: number },
      distSoFar: number
    ) => {
      const strokeColor =
        activeTool === 'eraser'
          ? mode === 'glow'
            ? '#141B38'
            : '#FFFFFF'
          : activeTool === 'rainbow'
          ? getRainbowHex(distSoFar)
          : activeColor;

      statsRef.current.colorsUsed.add(strokeColor);

      ctx.save();
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';

      if (mode === 'glow' && activeTool !== 'eraser') {
        ctx.shadowColor = strokeColor;
        ctx.shadowBlur = brushSize.px * 1.15;
      }

      if (activeTool === 'crayon') {
        // Textured crayon grain along segment
        const dist = Math.hypot(to.x - from.x, to.y - from.y);
        const steps = Math.max(1, Math.ceil(dist / 3));
        ctx.fillStyle = strokeColor;
        for (let i = 0; i <= steps; i++) {
          const t = i / steps;
          const cx = from.x + (to.x - from.x) * t;
          const cy = from.y + (to.y - from.y) * t;
          for (let g = 0; g < 6; g++) {
            const angle = Math.random() * Math.PI * 2;
            const rad = Math.random() * (brushSize.px * 0.55);
            const dotSize = Math.max(1.8, brushSize.px * 0.18);
            ctx.globalAlpha = 0.45 + Math.random() * 0.45;
            ctx.beginPath();
            ctx.arc(
              cx + Math.cos(angle) * rad,
              cy + Math.sin(angle) * rad,
              dotSize,
              0,
              Math.PI * 2
            );
            ctx.fill();
          }
        }
      } else if (activeTool === 'glitter') {
        const dist = Math.hypot(to.x - from.x, to.y - from.y);
        const steps = Math.max(1, Math.ceil(dist / 8));
        const glitterColors = [strokeColor, '#FFCA3A', '#FFFFFF', '#4CC9F0', '#FF6B9D'];
        for (let i = 0; i <= steps; i++) {
          const t = i / steps;
          const cx = from.x + (to.x - from.x) * t;
          const cy = from.y + (to.y - from.y) * t;
          for (let s = 0; s < 3; s++) {
            const ox = (Math.random() - 0.5) * brushSize.px * 2.1;
            const oy = (Math.random() - 0.5) * brushSize.px * 2.1;
            const r = 2.5 + Math.random() * (brushSize.px * 0.25);
            ctx.fillStyle = glitterColors[Math.floor(Math.random() * glitterColors.length)];
            ctx.globalAlpha = 0.85;
            ctx.beginPath();
            ctx.arc(cx + ox, cy + oy, r, 0, Math.PI * 2);
            ctx.fill();
          }
        }
      } else if (activeTool === 'rainbow') {
        // Interpolate along segment so Rainbow brush transitions smoothly without sharp color jumps
        const segLen = Math.hypot(to.x - from.x, to.y - from.y);
        const steps = Math.max(1, Math.ceil(segLen / 6));
        ctx.lineWidth = brushSize.px;
        for (let i = 0; i < steps; i++) {
          const t0 = i / steps;
          const t1 = (i + 1) / steps;
          const x0 = from.x + (to.x - from.x) * t0;
          const y0 = from.y + (to.y - from.y) * t0;
          const x1 = from.x + (to.x - from.x) * t1;
          const y1 = from.y + (to.y - from.y) * t1;
          const segColor = getRainbowHex(distSoFar + i * 6);
          if (mode === 'glow') {
            ctx.shadowColor = segColor;
            ctx.shadowBlur = brushSize.px * 1.1;
          }
          ctx.strokeStyle = segColor;
          ctx.beginPath();
          ctx.moveTo(x0, y0);
          ctx.lineTo(x1, y1);
          ctx.stroke();
        }
      } else {
        ctx.strokeStyle = strokeColor;
        ctx.lineWidth = activeTool === 'eraser' ? brushSize.px * 1.4 : brushSize.px;
        ctx.beginPath();
        ctx.moveTo(from.x, from.y);
        ctx.lineTo(to.x, to.y);
        ctx.stroke();

        if (mode === 'glow' && activeTool !== 'eraser') {
          ctx.shadowBlur = 0;
          ctx.strokeStyle = '#FFFFFF';
          ctx.globalAlpha = 0.72;
          ctx.lineWidth = Math.max(2, brushSize.px * 0.36);
          ctx.beginPath();
          ctx.moveTo(from.x, from.y);
          ctx.lineTo(to.x, to.y);
          ctx.stroke();
        }
      }

      ctx.restore();
    };

    const handlePointerDown = (e: React.PointerEvent<HTMLCanvasElement>) => {
      e.preventDefault();
      const { x, y, normX, normY } = getCanvasCoords(e.clientX, e.clientY);

      if (activeTool === 'sticker') {
        // Stamp a new animated sticker
        const newSticker: PlacedSticker = {
          uid: `stk_${Date.now()}_${Math.random().toString(36).slice(2, 6)}`,
          stickerId: selectedStickerId,
          x: Math.max(0.06, Math.min(0.94, normX)),
          y: Math.max(0.08, Math.min(0.92, normY)),
          scale: brushSize.id === 'sm' ? 0.78 : brushSize.id === 'lg' ? 1.25 : 1,
          rotation: Math.round((Math.random() - 0.5) * 16),
        };
        const next = [...stickersRef.current, newSticker];
        stickersRef.current = next;
        setStickers(next);
        setSelectedPlacedUid(newSticker.uid);
        pushHistorySnapshot(next);
        spawnBurst(normX, normY, '#FFCA3A');
        soundEngine.playStamp();
        onActivityPulse?.();
        return;
      }

      setSelectedPlacedUid(null);

      if (activeTool === 'bucket') {
        const canvas = paintCanvasRef.current;
        const ctx = canvas?.getContext('2d', { willReadFrequently: true });
        if (!ctx) return;

        const imgData = ctx.getImageData(0, 0, LOGICAL_WIDTH, LOGICAL_HEIGHT);
        const filled = floodFillRGBA(
          imgData.data,
          LOGICAL_WIDTH,
          LOGICAL_HEIGHT,
          x,
          y,
          activeColor,
          38,
          outlineMaskRef.current ?? undefined,
          105
        );
        if (filled > 0) {
          ctx.putImageData(imgData, 0, 0);
          statsRef.current.fillCount += 1;
          statsRef.current.colorsUsed.add(activeColor);
          pushHistorySnapshot(stickersRef.current);
          spawnBurst(normX, normY, activeColor);
          soundEngine.playSplash();
          onActivityPulse?.();
        }
        return;
      }

      // Freehand brush / crayon / rainbow / glitter / eraser
      e.currentTarget.setPointerCapture(e.pointerId);
      isDrawingRef.current = true;
      lastPointRef.current = { x, y };
      strokeDistanceRef.current = 0;

      const canvas = paintCanvasRef.current;
      const ctx = canvas?.getContext('2d', { willReadFrequently: true });
      if (ctx) {
        drawSegment(ctx, { x, y }, { x: x + 0.1, y: y + 0.1 }, 0);
      }
    };

    const handlePointerMove = (e: React.PointerEvent<HTMLCanvasElement>) => {
      if (!isDrawingRef.current || !lastPointRef.current) return;
      const canvas = paintCanvasRef.current;
      const ctx = canvas?.getContext('2d', { willReadFrequently: true });
      if (!ctx) return;

      const { x, y } = getCanvasCoords(e.clientX, e.clientY);
      const dist = Math.hypot(x - lastPointRef.current.x, y - lastPointRef.current.y);
      strokeDistanceRef.current += dist;
      drawSegment(ctx, lastPointRef.current, { x, y }, strokeDistanceRef.current);
      lastPointRef.current = { x, y };
    };

    const finishStroke = () => {
      if (!isDrawingRef.current) return;
      isDrawingRef.current = false;
      lastPointRef.current = null;
      statsRef.current.strokeCount += 1;
      pushHistorySnapshot(stickersRef.current);
      onActivityPulse?.();
    };

    // Sticker drag handlers
    const handleStickerPointerDown = (
      e: React.PointerEvent<HTMLDivElement>,
      uid: string
    ) => {
      e.stopPropagation();
      e.preventDefault();
      setSelectedPlacedUid(uid);
      const board = boardRef.current;
      if (!board) return;
      const rect = board.getBoundingClientRect();
      const target = stickersRef.current.find((s) => s.uid === uid);
      if (!target) return;

      const pointerNormX = (e.clientX - rect.left) / rect.width;
      const pointerNormY = (e.clientY - rect.top) / rect.height;
      draggingStickerRef.current = {
        uid,
        offsetX: target.x - pointerNormX,
        offsetY: target.y - pointerNormY,
      };
      e.currentTarget.setPointerCapture(e.pointerId);
      soundEngine.playPop(4);
    };

    const handleStickerPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
      const drag = draggingStickerRef.current;
      const board = boardRef.current;
      if (!drag || !board) return;
      const rect = board.getBoundingClientRect();
      const nx = Math.max(0.05, Math.min(0.95, (e.clientX - rect.left) / rect.width + drag.offsetX));
      const ny = Math.max(0.07, Math.min(0.93, (e.clientY - rect.top) / rect.height + drag.offsetY));

      const updated = stickersRef.current.map((s) =>
        s.uid === drag.uid ? { ...s, x: nx, y: ny } : s
      );
      stickersRef.current = updated;
      setStickers(updated);
    };

    const handleStickerPointerUp = () => {
      if (!draggingStickerRef.current) return;
      draggingStickerRef.current = null;
      pushHistorySnapshot(stickersRef.current);
    };

    const removeSticker = (uid: string) => {
      const next = stickersRef.current.filter((s) => s.uid !== uid);
      stickersRef.current = next;
      setStickers(next);
      setSelectedPlacedUid(null);
      pushHistorySnapshot(next);
      soundEngine.playUndo();
    };

    return (
      <div
        ref={wrapperRef}
        className="relative w-full h-full flex items-center justify-center p-1.5 sm:p-4 overflow-hidden"
      >
        <div
          ref={boardRef}
          className={`relative rounded-2xl sm:rounded-3xl border-4 border-[#232946] shadow-[0_10px_0_rgba(35,41,70,0.16)] overflow-hidden ${
            mode === 'glow' ? 'bg-[#141B38]' : 'bg-white'
          }`}
          style={
            boardDims
              ? { width: boardDims.w, height: boardDims.h }
              : { width: '100%', aspectRatio: '10 / 7', maxHeight: '100%' }
          }
        >
          {/* Paint Layer */}
          <canvas
            ref={paintCanvasRef}
            data-testid="drawing-canvas"
            width={LOGICAL_WIDTH}
            height={LOGICAL_HEIGHT}
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={finishStroke}
            onPointerCancel={finishStroke}
            className="w-full h-full block touch-none cursor-crosshair"
          />

          {/* Coloring Book Crisp Non-Erasable Outline Overlay */}
          <canvas
            ref={outlineCanvasRef}
            width={LOGICAL_WIDTH}
            height={LOGICAL_HEIGHT}
            className={`absolute inset-0 w-full h-full pointer-events-none transition-opacity duration-150 ${
              mode === 'coloring' ? 'opacity-100' : 'opacity-0'
            }`}
          />

          {/* Live Animated Sticker Layer */}
          <div className="absolute inset-0 pointer-events-none">
            {stickers.map((st) => {
              const isSelected = selectedPlacedUid === st.uid;
              const pxSize = Math.round(74 * st.scale);
              return (
                <div
                  key={st.uid}
                  role="button"
                  tabIndex={0}
                  aria-label={`Move ${st.stickerId} sticker`}
                  onPointerDown={(e) => handleStickerPointerDown(e, st.uid)}
                  onPointerMove={handleStickerPointerMove}
                  onPointerUp={handleStickerPointerUp}
                  onPointerCancel={handleStickerPointerUp}
                  className={`absolute pointer-events-auto cursor-grab active:cursor-grabbing touch-none animate-sticker-pop ${
                    isSelected ? 'ring-3 ring-[#FF595E] ring-dashed rounded-2xl bg-white/25' : ''
                  }`}
                  style={{
                    left: `${st.x * 100}%`,
                    top: `${st.y * 100}%`,
                    transform: `translate(-50%, -50%) rotate(${st.rotation}deg)`,
                  }}
                >
                  <StickerArt stickerId={st.stickerId} size={pxSize} animated />
                  {isSelected && (
                    <button
                      type="button"
                      aria-label="Remove sticker"
                      onPointerDown={(e) => e.stopPropagation()}
                      onClick={(e) => {
                        e.stopPropagation();
                        removeSticker(st.uid);
                      }}
                      className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-[#FF595E] text-white border-2 border-[#232946] flex items-center justify-center shadow-sm cursor-pointer"
                    >
                      <X className="w-4 h-4 stroke-[3]" />
                    </button>
                  )}
                </div>
              );
            })}
          </div>

          {/* Lightweight Burst Pop Effect on Flood Fill / Sticker Stamp */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {bursts.map((b) => (
              <div
                key={b.id}
                className="absolute w-14 h-14 -translate-x-1/2 -translate-y-1/2 rounded-full border-4 animate-ping opacity-70"
                style={{ left: `${b.x}%`, top: `${b.y}%`, borderColor: b.color }}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
);

DrawingCanvas.displayName = 'DrawingCanvas';
