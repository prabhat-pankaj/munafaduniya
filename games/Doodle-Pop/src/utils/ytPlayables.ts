import { createDefaultSaveData, normalizeSaveData } from '../game/gameLogic';
import { SaveDataPayload, SharedArtwork } from '../game/types';

interface YTGameSDK {
  IN_PLAYABLES_ENV?: boolean;
  game?: {
    firstFrameReady?: () => void;
    gameReady?: () => void;
    saveData?: (data: string) => Promise<void>;
    loadData?: () => Promise<string>;
  };
  system?: {
    isAudioEnabled?: () => boolean;
    onAudioEnabledChange?: (cb: (enabled: boolean) => void) => () => void;
    onPause?: (cb: () => void) => () => void;
    onResume?: (cb: () => void) => () => void;
  };
  engagement?: {
    sendScore?: (opts: { value: number }) => Promise<void>;
  };
}

declare global {
  interface Window {
    ytgame?: YTGameSDK;
  }
}

const LOCAL_SAVE_KEY = 'doodlepop_studio_save_v1';
const BROADCAST_CHANNEL_NAME = 'doodlepop_realtime_art_wall_v1';

let firstFrameSent = false;
let gameReadySent = false;

export function isInYouTubePlayables(): boolean {
  return Boolean(typeof window !== 'undefined' && window.ytgame?.IN_PLAYABLES_ENV);
}

export function notifyFirstFrameReady(): void {
  if (firstFrameSent) return;
  firstFrameSent = true;
  try {
    window.ytgame?.game?.firstFrameReady?.();
  } catch {
    // Ignore outside Playables
  }
}

export function notifyGameReady(): void {
  if (gameReadySent) return;
  gameReadySent = true;
  try {
    window.ytgame?.game?.gameReady?.();
  } catch {
    // Ignore outside Playables
  }
}

export function subscribePlayablesLifecycle(handlers: {
  onAudioChange: (enabled: boolean) => void;
  onPause: () => void;
  onResume: () => void;
}): () => void {
  const unsubs: Array<() => void> = [];
  const yt = typeof window !== 'undefined' ? window.ytgame : undefined;

  if (yt?.system) {
    try {
      if (typeof yt.system.isAudioEnabled === 'function') {
        handlers.onAudioChange(yt.system.isAudioEnabled());
      }
      if (typeof yt.system.onAudioEnabledChange === 'function') {
        const unsub = yt.system.onAudioEnabledChange(handlers.onAudioChange);
        if (typeof unsub === 'function') unsubs.push(unsub);
      }
      if (typeof yt.system.onPause === 'function') {
        const unsub = yt.system.onPause(handlers.onPause);
        if (typeof unsub === 'function') unsubs.push(unsub);
      }
      if (typeof yt.system.onResume === 'function') {
        const unsub = yt.system.onResume(handlers.onResume);
        if (typeof unsub === 'function') unsubs.push(unsub);
      }
    } catch {
      // Safe fallback outside Playables
    }
  }

  return () => {
    unsubs.forEach((fn) => {
      try {
        fn();
      } catch {
        // Ignore cleanup errors
      }
    });
  };
}

export async function loadPlayablesSaveData(): Promise<SaveDataPayload> {
  try {
    const yt = typeof window !== 'undefined' ? window.ytgame : undefined;
    if (yt?.IN_PLAYABLES_ENV && yt.game?.loadData) {
      const raw = await yt.game.loadData();
      if (raw) {
        return normalizeSaveData(JSON.parse(raw));
      }
    }
  } catch {
    // Fallback to localStorage
  }

  try {
    const localRaw = localStorage.getItem(LOCAL_SAVE_KEY);
    if (localRaw) {
      return normalizeSaveData(JSON.parse(localRaw));
    }
  } catch {
    // Ignore storage access errors
  }

  return createDefaultSaveData();
}

export async function persistPlayablesSaveData(data: SaveDataPayload): Promise<void> {
  const serialized = JSON.stringify(data);
  try {
    localStorage.setItem(LOCAL_SAVE_KEY, serialized);
  } catch {
    // Ignore storage quota errors
  }

  try {
    const yt = typeof window !== 'undefined' ? window.ytgame : undefined;
    if (yt?.IN_PLAYABLES_ENV && yt.game?.saveData) {
      await yt.game.saveData(serialized);
    }
  } catch {
    // Safe fallback
  }
}

export async function sendPlayablesScore(value: number): Promise<void> {
  try {
    const yt = typeof window !== 'undefined' ? window.ytgame : undefined;
    if (yt?.IN_PLAYABLES_ENV && yt.engagement?.sendScore) {
      await yt.engagement.sendScore({ value: Math.round(value) });
    }
  } catch {
    // Ignore outside Playables
  }
}

export type GallerySyncEvent =
  | { type: 'ARTWORK_SHARED'; artwork: SharedArtwork }
  | { type: 'ARTWORK_REACTED'; artworkId: string; kind: 'hearts' | 'stars' | 'claps' };

export function createRealtimeGalleryChannel(
  onMessage: (evt: GallerySyncEvent) => void
): { broadcast: (evt: GallerySyncEvent) => void; close: () => void } {
  if (typeof BroadcastChannel === 'undefined') {
    return { broadcast: () => {}, close: () => {} };
  }
  const channel = new BroadcastChannel(BROADCAST_CHANNEL_NAME);
  channel.onmessage = (event) => {
    if (event.data && typeof event.data === 'object') {
      onMessage(event.data as GallerySyncEvent);
    }
  };
  return {
    broadcast: (evt: GallerySyncEvent) => {
      try {
        channel.postMessage(evt);
      } catch {
        // Ignore
      }
    },
    close: () => {
      channel.close();
    },
  };
}
