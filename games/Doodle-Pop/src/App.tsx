import React, { useCallback, useEffect, useRef, useState } from 'react';
import {
  Award,
  Brush,
  CheckCircle2,
  Eraser,
  Images,
  LayoutGrid,
  PaintBucket,
  Pause,
  Pencil,
  Rainbow,
  Redo2,
  Sparkles,
  Sticker,
  Trash2,
  Undo2,
  Volume2,
  VolumeX,
} from 'lucide-react';
import { ArtWallModal } from './components/ArtWallModal';
import { CelebrationShareModal } from './components/CelebrationShareModal';
import { DrawingCanvas, DrawingCanvasHandle } from './components/DrawingCanvas';
import { PagePickerModal } from './components/PagePickerModal';
import { PauseModal } from './components/PauseModal';
import { StickerAlbumModal } from './components/StickerAlbumModal';
import { StickerArt } from './components/StickerArt';
import { TitleScreen } from './components/TitleScreen';
import { COLORING_PAGES, getPageById } from './game/coloringPages';
import {
  awardStickerForCompletion,
  BRUSH_SIZES,
  calculateArtworkScore,
  COLOR_SWATCHES,
  createDefaultSaveData,
  createSharedArtwork,
} from './game/gameLogic';
import { STICKER_CATALOG } from './game/stickers';
import {
  ArtworkFrameId,
  BrushSizeOption,
  ColoringPageDef,
  GameState,
  PlacedSticker,
  SaveDataPayload,
  ToolType,
} from './game/types';
import { soundEngine } from './utils/soundEngine';
import {
  createRealtimeGalleryChannel,
  GallerySyncEvent,
  loadPlayablesSaveData,
  notifyFirstFrameReady,
  notifyGameReady,
  persistPlayablesSaveData,
  sendPlayablesScore,
  subscribePlayablesLifecycle,
} from './utils/ytPlayables';

const TOOL_ITEMS: { id: ToolType; label: string; icon: React.ComponentType<{ className?: string }> }[] = [
  { id: 'bucket', label: 'Fill', icon: PaintBucket },
  { id: 'brush', label: 'Brush', icon: Brush },
  { id: 'crayon', label: 'Crayon', icon: Pencil },
  { id: 'rainbow', label: 'Rainbow', icon: Rainbow },
  { id: 'glitter', label: 'Glitter', icon: Sparkles },
  { id: 'sticker', label: 'Stickers', icon: Sticker },
  { id: 'eraser', label: 'Eraser', icon: Eraser },
];

export default function App() {
  const autostart =
    typeof window !== 'undefined' &&
    new URLSearchParams(window.location.search).get('autostart') === '1';

  const [gameState, setGameState] = useState<GameState>(autostart ? 'playing' : 'title');
  const [saveData, setSaveData] = useState<SaveDataPayload>(() => createDefaultSaveData());
  const [currentPage, setCurrentPage] = useState<ColoringPageDef>(COLORING_PAGES[0]);

  const [activeTool, setActiveTool] = useState<ToolType>('bucket');
  const [activeColor, setActiveColor] = useState<string>(COLOR_SWATCHES[0].hex);
  const [brushSize, setBrushSize] = useState<BrushSizeOption>(BRUSH_SIZES[1]);
  const [selectedStickerId, setSelectedStickerId] = useState<string>('happy-star');

  const [canUndo, setCanUndo] = useState(false);
  const [canRedo, setCanRedo] = useState(false);
  const [placedStickerCount, setPlacedStickerCount] = useState(0);
  const [isMuted, setIsMuted] = useState(false);

  // Sub-modals (over Title or Playing)
  const [showPagePicker, setShowPagePicker] = useState(false);
  const [showStickerAlbum, setShowStickerAlbum] = useState(false);
  const [showArtWall, setShowArtWall] = useState(false);

  // Celebration snapshot state
  const [celebrationSnapshot, setCelebrationSnapshot] = useState<{
    previewBaseUrl: string;
    exportCompositeUrl: string;
    stickers: PlacedSticker[];
    score: number;
    newlyUnlockedId: string | null;
  } | null>(null);

  const canvasHandleRef = useRef<DrawingCanvasHandle | null>(null);
  const galleryChannelRef = useRef<ReturnType<typeof createRealtimeGalleryChannel> | null>(null);

  // Mirror game state to document.body.dataset.state for Game Shell compliance
  useEffect(() => {
    document.body.dataset.state = gameState === 'celebration' ? 'gameover' : gameState;
  }, [gameState]);

  // YouTube Playables SDK initialization + save loading + real-time gallery channel
  useEffect(() => {
    notifyFirstFrameReady();

    let mounted = true;
    void loadPlayablesSaveData().then((loaded) => {
      if (mounted) {
        setSaveData(loaded);
        notifyGameReady();
      }
    });

    const unsubPlayables = subscribePlayablesLifecycle({
      onAudioChange: (enabled) => {
        soundEngine.setSystemAudioEnabled(enabled);
      },
      onPause: () => {
        soundEngine.setSystemAudioEnabled(false);
        setGameState((prev) => (prev === 'playing' ? 'paused' : prev));
      },
      onResume: () => {
        soundEngine.setSystemAudioEnabled(true);
      },
    });

    const channel = createRealtimeGalleryChannel((evt: GallerySyncEvent) => {
      if (evt.type === 'ARTWORK_SHARED') {
        setSaveData((prev) => {
          if (prev.gallery.some((g) => g.id === evt.artwork.id)) return prev;
          const next = { ...prev, gallery: [evt.artwork, ...prev.gallery].slice(0, 24) };
          void persistPlayablesSaveData(next);
          return next;
        });
      } else if (evt.type === 'ARTWORK_REACTED') {
        setSaveData((prev) => {
          const nextGallery = prev.gallery.map((item) =>
            item.id === evt.artworkId
              ? {
                  ...item,
                  reactions: {
                    ...item.reactions,
                    [evt.kind]: item.reactions[evt.kind] + 1,
                  },
                }
              : item
          );
          const next = { ...prev, gallery: nextGallery };
          void persistPlayablesSaveData(next);
          return next;
        });
      }
    });
    galleryChannelRef.current = channel;

    return () => {
      mounted = false;
      unsubPlayables();
      channel.close();
    };
  }, []);

  const startStudio = useCallback(() => {
    if (document.activeElement instanceof HTMLElement) {
      document.activeElement.blur();
    }
    soundEngine.playPop(4);
    setGameState('playing');
  }, []);

  const toggleMute = useCallback(() => {
    setIsMuted((prev) => {
      const next = !prev;
      soundEngine.setUserMuted(next);
      if (!next) soundEngine.playPop(2);
      return next;
    });
  }, []);

  // Global keyboard shortcuts (Title Enter/Space, Playing Esc/P/M/Undo)
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement | null;
      const isInput =
        target &&
        (target.tagName === 'INPUT' ||
          target.tagName === 'TEXTAREA' ||
          target.isContentEditable);
      if (isInput) return;

      if (gameState === 'title' && !showStickerAlbum && !showArtWall) {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          startStudio();
        }
        return;
      }

      if (e.key === 'm' || e.key === 'M') {
        e.preventDefault();
        toggleMute();
        return;
      }

      if (e.key === 'Escape' || e.key === 'p' || e.key === 'P') {
        if (showPagePicker) {
          setShowPagePicker(false);
          return;
        }
        if (showStickerAlbum) {
          setShowStickerAlbum(false);
          return;
        }
        if (showArtWall) {
          setShowArtWall(false);
          return;
        }
        if (gameState === 'playing') {
          e.preventDefault();
          setGameState('paused');
        } else if (gameState === 'paused') {
          e.preventDefault();
          setGameState('playing');
        }
        return;
      }

      if (gameState === 'playing' && (e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'z') {
        e.preventDefault();
        canvasHandleRef.current?.undo();
      }
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [
    gameState,
    showPagePicker,
    showStickerAlbum,
    showArtWall,
    startStudio,
    toggleMute,
  ]);

  const handleHistoryChange = useCallback(
    (undoOk: boolean, redoOk: boolean, stickerCount: number) => {
      setCanUndo(undoOk);
      setCanRedo(redoOk);
      setPlacedStickerCount(stickerCount);
    },
    []
  );

  const handleSelectPage = (page: ColoringPageDef) => {
    setCurrentPage(page);
    setShowPagePicker(false);
    setGameState('playing');
    // Default to Glow Brush in Glow Neon mode, or Fill Bucket in Coloring Book
    if (page.mode === 'glow' || page.mode === 'freedraw') {
      if (activeTool === 'bucket' && page.mode === 'glow') {
        setActiveTool('brush');
      }
    }
    soundEngine.playPop(3);
  };

  const handleFinishAndShare = () => {
    const handle = canvasHandleRef.current;
    if (!handle) return;

    const previewBaseUrl = handle.exportBaseDataUrl();
    const exportCompositeUrl = handle.exportCompositeDataUrl();
    const stickers = handle.getStickers();
    const stats = handle.getStats();
    const score = calculateArtworkScore(stats);

    const { nextSaveData, newlyUnlockedId } = awardStickerForCompletion(saveData, score);
    setSaveData(nextSaveData);
    void persistPlayablesSaveData(nextSaveData);
    void sendPlayablesScore(score);

    setCelebrationSnapshot({
      previewBaseUrl,
      exportCompositeUrl,
      stickers,
      score,
      newlyUnlockedId,
    });
    setGameState('celebration');
    soundEngine.playFanfare();
  };

  const handlePublishToWall = ({
    title,
    artistName,
    frameId,
  }: {
    title: string;
    artistName: string;
    frameId: ArtworkFrameId;
  }) => {
    if (!celebrationSnapshot) return;
    const artwork = createSharedArtwork({
      id: `art_${Date.now()}_${Math.random().toString(36).slice(2, 6)}`,
      title,
      artistName,
      pageId: currentPage.id,
      mode: currentPage.mode,
      frameId,
      imageDataUrl: celebrationSnapshot.previewBaseUrl,
      stickers: celebrationSnapshot.stickers,
    });

    setSaveData((prev) => {
      const next = {
        ...prev,
        gallery: [artwork, ...prev.gallery].slice(0, 24),
      };
      void persistPlayablesSaveData(next);
      return next;
    });

    galleryChannelRef.current?.broadcast({ type: 'ARTWORK_SHARED', artwork });
  };

  const handleReactToArtwork = (artworkId: string, kind: 'hearts' | 'stars' | 'claps') => {
    soundEngine.playReaction();
    setSaveData((prev) => {
      const nextGallery = prev.gallery.map((item) =>
        item.id === artworkId
          ? {
              ...item,
              reactions: {
                ...item.reactions,
                [kind]: item.reactions[kind] + 1,
              },
            }
          : item
      );
      const next = { ...prev, gallery: nextGallery };
      void persistPlayablesSaveData(next);
      return next;
    });

    galleryChannelRef.current?.broadcast({
      type: 'ARTWORK_REACTED',
      artworkId,
      kind,
    });
  };

  return (
    <div className="relative w-full h-full overflow-hidden bg-[#FFFBF2] text-[#232946] flex flex-col">
      {gameState === 'title' ? (
        <TitleScreen
          onStart={startStudio}
          onOpenStickers={() => {
            soundEngine.playPop(2);
            setShowStickerAlbum(true);
          }}
          onOpenGallery={() => {
            soundEngine.playPop(3);
            setShowArtWall(true);
          }}
          unlockedCount={saveData.unlockedStickers.length}
          totalStickers={STICKER_CATALOG.length}
          galleryCount={saveData.gallery.length}
        />
      ) : (
        <div className="flex-1 flex flex-col h-full w-full overflow-hidden">
          {/* Compact Top Utility Strip (Game Shell HUD) */}
          <header className="shrink-0 px-2.5 sm:px-5 py-2 bg-[#F6EFE2] border-b-3 border-[#232946] flex flex-wrap items-center justify-between gap-2">
            {/* Left Cluster: Page Selector & History */}
            <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
              <button
                type="button"
                onClick={() => {
                  soundEngine.playPop(1);
                  setShowPagePicker(true);
                }}
                className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-2 min-h-[44px] rounded-xl bg-white hover:bg-[#FFCA3A] border-2 border-[#232946] shadow-[0_3px_0_#232946] font-display font-bold text-sm sm:text-base whitespace-nowrap cursor-pointer transition-colors"
              >
                <LayoutGrid className="w-5 h-5 text-[#FF595E]" aria-hidden="true" />
                <span>{getPageById(currentPage.id).title}</span>
              </button>

              <button
                type="button"
                onClick={() => canvasHandleRef.current?.undo()}
                disabled={!canUndo}
                aria-label="Undo"
                title="Undo"
                className="w-11 h-11 rounded-xl bg-white hover:bg-[#FFCA3A] disabled:opacity-40 disabled:hover:bg-white border-2 border-[#232946] shadow-[0_3px_0_#232946] flex items-center justify-center cursor-pointer disabled:cursor-not-allowed"
              >
                <Undo2 className="w-5 h-5" />
              </button>

              <button
                type="button"
                onClick={() => canvasHandleRef.current?.redo()}
                disabled={!canRedo}
                aria-label="Redo"
                title="Redo"
                className="hidden sm:flex w-11 h-11 rounded-xl bg-white hover:bg-[#FFCA3A] disabled:opacity-40 disabled:hover:bg-white border-2 border-[#232946] shadow-[0_3px_0_#232946] items-center justify-center cursor-pointer disabled:cursor-not-allowed"
              >
                <Redo2 className="w-5 h-5" />
              </button>

              <button
                type="button"
                onClick={() => canvasHandleRef.current?.clear()}
                aria-label="Clear canvas"
                title="Clear canvas"
                className="hidden sm:flex w-11 h-11 rounded-xl bg-white hover:bg-[#FF595E] hover:text-white border-2 border-[#232946] shadow-[0_3px_0_#232946] items-center justify-center cursor-pointer transition-colors"
              >
                <Trash2 className="w-5 h-5" />
              </button>
            </div>

            {/* Right Cluster: Album, Art Wall, Sound, Pause, Done & Share */}
            <div className="flex items-center gap-1.5 sm:gap-2 shrink-0 ml-auto">
              <button
                type="button"
                onClick={() => {
                  soundEngine.playPop(2);
                  setShowStickerAlbum(true);
                }}
                aria-label={`Sticker Album (${saveData.unlockedStickers.length} of ${STICKER_CATALOG.length})`}
                className="hidden md:inline-flex items-center gap-1.5 px-3 py-2 min-h-[44px] rounded-xl bg-[#FFCA3A] hover:bg-[#ffc01f] border-2 border-[#232946] shadow-[0_3px_0_#232946] font-bold text-sm whitespace-nowrap cursor-pointer"
              >
                <Award className="w-4 h-4" aria-hidden="true" />
                <span>Stickers</span>
                <span className="tabular-nums font-extrabold">
                  {saveData.unlockedStickers.length}/{STICKER_CATALOG.length}
                </span>
              </button>

              <button
                type="button"
                onClick={() => {
                  soundEngine.playPop(3);
                  setShowArtWall(true);
                }}
                aria-label={`Art Wall (${saveData.gallery.length})`}
                className="hidden md:inline-flex items-center gap-1.5 px-3 py-2 min-h-[44px] rounded-xl bg-white hover:bg-[#E0F4FF] border-2 border-[#232946] shadow-[0_3px_0_#232946] font-bold text-sm whitespace-nowrap cursor-pointer"
              >
                <Images className="w-4 h-4 text-[#1982C4]" aria-hidden="true" />
                <span>Wall</span>
                <span className="tabular-nums font-extrabold">{saveData.gallery.length}</span>
              </button>

              <button
                type="button"
                tabIndex={-1}
                onClick={(e) => {
                  e.currentTarget.blur();
                  toggleMute();
                }}
                aria-label={isMuted ? 'Unmute sound' : 'Mute sound'}
                title="Mute [M]"
                className="hidden sm:flex w-11 h-11 rounded-xl bg-white hover:bg-[#F6EFE2] border-2 border-[#232946] shadow-[0_3px_0_#232946] items-center justify-center cursor-pointer"
              >
                {isMuted ? <VolumeX className="w-5 h-5 text-[#FF595E]" /> : <Volume2 className="w-5 h-5" />}
              </button>

              <button
                type="button"
                tabIndex={-1}
                onClick={(e) => {
                  e.currentTarget.blur();
                  setGameState('paused');
                }}
                aria-label="Pause studio"
                title="Pause [P]"
                className="w-11 h-11 rounded-xl bg-white hover:bg-[#F6EFE2] border-2 border-[#232946] shadow-[0_3px_0_#232946] flex items-center justify-center cursor-pointer"
              >
                <Pause className="w-5 h-5" />
              </button>

              <button
                type="button"
                onClick={handleFinishAndShare}
                className="inline-flex items-center gap-1.5 sm:gap-2 px-3.5 sm:px-4 py-2 min-h-[44px] rounded-xl bg-[#8AC926] hover:bg-[#7cb81e] text-[#232946] font-display font-bold text-sm sm:text-base border-2 border-[#232946] shadow-[0_3px_0_#232946] whitespace-nowrap cursor-pointer"
              >
                <CheckCircle2 className="w-5 h-5" aria-hidden="true" />
                <span>Done</span>
                <span className="hidden sm:inline">&amp; Share</span>
              </button>
            </div>
          </header>

          {/* Center Workspace: Left Tool Dock + Unobstructed Drawing Canvas */}
          <div className="flex-1 min-h-0 flex flex-col md:flex-row overflow-hidden">
            {/* Left Tool Dock */}
            <aside
              aria-label="Drawing Tools"
              className="shrink-0 bg-[#F6EFE2] border-b-3 md:border-b-0 md:border-r-3 border-[#232946] px-2.5 py-2 md:py-3 flex md:flex-col items-center justify-between gap-2 overflow-x-auto md:overflow-y-auto tray-scroll"
            >
              <div className="flex md:flex-col items-center gap-1.5">
                {TOOL_ITEMS.map((tool) => {
                  const Icon = tool.icon;
                  const active = activeTool === tool.id;
                  return (
                    <button
                      key={tool.id}
                      type="button"
                      onClick={() => {
                        setActiveTool(tool.id);
                        soundEngine.playPop(1);
                      }}
                      aria-label={tool.label}
                      aria-pressed={active}
                      className={`flex flex-col items-center justify-center min-w-[56px] md:w-16 min-h-[50px] md:min-h-[54px] px-2 py-1 rounded-xl border-2 border-[#232946] transition-transform active:scale-95 cursor-pointer shrink-0 ${
                        active
                          ? 'bg-[#FF595E] text-white shadow-[0_3px_0_#232946] -translate-y-0.5'
                          : 'bg-white text-[#232946] hover:bg-[#FFCA3A]/40'
                      }`}
                    >
                      <Icon className="w-5 h-5" aria-hidden="true" />
                      <span className="text-[11px] font-extrabold leading-tight mt-0.5">
                        {tool.label}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Brush / Sticker Size Selector */}
              <div className="flex md:flex-col items-center gap-1.5 pl-2 md:pl-0 md:pt-2 border-l-2 md:border-l-0 md:border-t-2 border-[#232946]/15 shrink-0">
                {BRUSH_SIZES.map((sz, idx) => {
                  const active = brushSize.id === sz.id;
                  const dotPx = idx === 0 ? 10 : idx === 1 ? 16 : 24;
                  return (
                    <button
                      key={sz.id}
                      type="button"
                      onClick={() => {
                        setBrushSize(sz);
                        soundEngine.playPop(idx);
                      }}
                      aria-label={`${sz.label} size`}
                      aria-pressed={active}
                      className={`w-11 h-11 rounded-xl border-2 border-[#232946] flex items-center justify-center cursor-pointer transition-colors ${
                        active ? 'bg-[#1982C4] text-white' : 'bg-white hover:bg-[#FFCA3A]/40'
                      }`}
                    >
                      <span
                        className="rounded-full block"
                        style={{
                          width: dotPx,
                          height: dotPx,
                          backgroundColor: active ? '#FFFFFF' : '#232946',
                        }}
                      />
                    </button>
                  );
                })}
              </div>
            </aside>

            {/* Primary Canvas Playfield */}
            <main className="flex-1 min-w-0 min-h-0 flex items-center justify-center bg-[#FFFBF2] relative">
              <DrawingCanvas
                ref={canvasHandleRef}
                pageId={currentPage.id}
                mode={currentPage.mode}
                activeTool={activeTool}
                activeColor={activeColor}
                brushSize={brushSize}
                selectedStickerId={selectedStickerId}
                onHistoryChange={handleHistoryChange}
              />

              {/* Subtle bottom-right live sticker counter if stickers are stamped */}
              {placedStickerCount > 0 && (
                <div className="hidden sm:flex items-center gap-1.5 absolute bottom-3 right-5 px-3 py-1 rounded-xl bg-[#FFFBF2]/95 border-2 border-[#232946] text-xs font-extrabold pointer-events-none tabular-nums">
                  <Sticker className="w-3.5 h-3.5 text-[#FF595E]" aria-hidden="true" />
                  <span>{placedStickerCount} stamped</span>
                </div>
              )}
            </main>
          </div>

          {/* Bottom Swatch / Animated Sticker Tray */}
          <footer className="shrink-0 bg-[#F6EFE2] border-t-3 border-[#232946] px-3 sm:px-5 py-2.5">
            {activeTool === 'sticker' ? (
              <div className="flex items-center gap-2.5 overflow-x-auto tray-scroll py-0.5">
                <span className="text-xs font-extrabold text-[#232946]/75 whitespace-nowrap pr-1">
                  Tap canvas to stamp:
                </span>
                {saveData.unlockedStickers.map((stkId) => {
                  const selected = selectedStickerId === stkId;
                  return (
                    <button
                      key={stkId}
                      type="button"
                      onClick={() => {
                        setSelectedStickerId(stkId);
                        soundEngine.playPop(3);
                      }}
                      aria-label={`Select ${stkId} sticker`}
                      aria-pressed={selected}
                      className={`shrink-0 p-1.5 rounded-2xl border-3 border-[#232946] cursor-pointer transition-transform ${
                        selected
                          ? 'bg-[#FFCA3A] -translate-y-1 shadow-[0_4px_0_#232946]'
                          : 'bg-white hover:bg-[#FFFBF2]'
                      }`}
                    >
                      <StickerArt stickerId={stkId} size={44} animated />
                    </button>
                  );
                })}
                <button
                  type="button"
                  onClick={() => setShowStickerAlbum(true)}
                  className="shrink-0 px-3.5 py-2.5 min-h-[48px] rounded-2xl bg-white hover:bg-[#FFCA3A]/50 border-2 border-dashed border-[#232946] text-xs font-extrabold text-[#232946] whitespace-nowrap cursor-pointer"
                >
                  + Unlock More ({saveData.unlockedStickers.length}/{STICKER_CATALOG.length})
                </button>
              </div>
            ) : (
              <div
                role="group"
                aria-label="Color Palette"
                className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto tray-scroll py-0.5"
              >
                {COLOR_SWATCHES.map((swatch, idx) => {
                  const isActive =
                    activeColor === swatch.hex &&
                    activeTool !== 'eraser' &&
                    activeTool !== 'rainbow';
                  return (
                    <button
                      key={swatch.id}
                      type="button"
                      onClick={() => {
                        setActiveColor(swatch.hex);
                        if (activeTool === 'eraser' || activeTool === 'rainbow') {
                          setActiveTool('brush');
                        }
                        soundEngine.playPop((idx % 7) - 3);
                      }}
                      aria-label={swatch.name}
                      aria-pressed={isActive}
                      title={swatch.name}
                      className={`shrink-0 w-11 h-11 sm:w-12 sm:h-12 rounded-full border-3 border-[#232946] transition-transform cursor-pointer ${
                        isActive
                          ? '-translate-y-1.5 scale-110 shadow-[0_4px_0_#232946] ring-3 ring-white'
                          : 'hover:-translate-y-0.5 shadow-[0_2px_0_#232946]'
                      }`}
                      style={{ backgroundColor: swatch.hex }}
                    />
                  );
                })}
              </div>
            )}
          </footer>
        </div>
      )}

      {/* Modals */}
      {showPagePicker && (
        <PagePickerModal
          currentPageId={currentPage.id}
          onSelectPage={handleSelectPage}
          onClose={() => setShowPagePicker(false)}
        />
      )}

      {showStickerAlbum && (
        <StickerAlbumModal
          unlockedStickers={saveData.unlockedStickers}
          onSelectForCanvas={
            gameState === 'playing'
              ? (id) => {
                  setSelectedStickerId(id);
                  setActiveTool('sticker');
                }
              : undefined
          }
          onClose={() => setShowStickerAlbum(false)}
        />
      )}

      {showArtWall && (
        <ArtWallModal
          artworks={saveData.gallery}
          onReact={handleReactToArtwork}
          onClose={() => setShowArtWall(false)}
        />
      )}

      {gameState === 'paused' && (
        <PauseModal
          onResume={() => {
            soundEngine.playPop(2);
            setGameState('playing');
          }}
          onOpenPages={() => {
            setGameState('playing');
            setShowPagePicker(true);
          }}
          onClearCanvas={() => {
            canvasHandleRef.current?.clear();
            setGameState('playing');
          }}
          onBackToTitle={() => {
            soundEngine.playUndo();
            setGameState('title');
          }}
        />
      )}

      {gameState === 'celebration' && celebrationSnapshot && (
        <CelebrationShareModal
          imageDataUrl={celebrationSnapshot.previewBaseUrl}
          exportCompositeUrl={celebrationSnapshot.exportCompositeUrl}
          stickers={celebrationSnapshot.stickers}
          pageId={currentPage.id}
          pageTitle={currentPage.title}
          mode={currentPage.mode}
          score={celebrationSnapshot.score}
          newlyUnlockedStickerId={celebrationSnapshot.newlyUnlockedId}
          unlockedStickersCount={saveData.unlockedStickers.length}
          onPublishToWall={handlePublishToWall}
          onDrawAgain={() => {
            setCelebrationSnapshot(null);
            setGameState('playing');
            soundEngine.playPop(3);
          }}
          onBackToCanvas={() => {
            setCelebrationSnapshot(null);
            setGameState('playing');
          }}
          onOpenWall={() => {
            setCelebrationSnapshot(null);
            setGameState('playing');
            setShowArtWall(true);
          }}
        />
      )}
    </div>
  );
}
