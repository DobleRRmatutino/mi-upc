import { useRef } from 'react';

/**
 * Hook to trigger a callback when an element is tapped 3 times quickly (< 800ms)
 */
export const useTripleTap = (onTripleTap, maxDelay = 800) => {
  const tapCount = useRef(0);
  const lastTapTime = useRef(0);

  const handleTap = (e) => {
    const now = Date.now();
    if (now - lastTapTime.current < maxDelay) {
      tapCount.current += 1;
    } else {
      tapCount.current = 1;
    }
    lastTapTime.current = now;

    if (tapCount.current >= 3) {
      tapCount.current = 0;
      onTripleTap?.(e);
    }
  };

  return handleTap;
};
