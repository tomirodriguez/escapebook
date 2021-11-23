import { useCallback, useEffect, useRef } from "react";

export default function useTimeout(callback: () => void, delay: number, timerOnStart: boolean = true) {
  const callbackRef = useRef(callback);
  const timeoutRef = useRef<number>();

  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  const set = useCallback(() => {
    timeoutRef.current = window.setTimeout(() => callbackRef.current(), delay);
  }, [delay]);

  const clear = useCallback(() => {
    timeoutRef.current && clearTimeout(timeoutRef.current);
  }, []);

  useEffect(() => {
    if (timerOnStart) set();
    return clear;
  }, [delay, set, clear, timerOnStart]);

  const reset = useCallback(() => {
    clear();
    set();
  }, [clear, set]);

  return { reset, clear };
}
