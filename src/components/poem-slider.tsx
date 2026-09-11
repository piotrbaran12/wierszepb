import { useCallback, useLayoutEffect, useRef, useState, type PointerEvent, type ReactNode } from "react";
import { cn } from "@/lib/utils";

type PoemSliderProps = {
  children: ReactNode;
  className?: string;
};

export function PoemSlider({ children, className }: PoemSliderProps) {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);
  const [progress, setProgress] = useState(0);

  const measure = useCallback(() => {
    const el = scrollerRef.current;
    if (!el) return;
    const max = el.scrollHeight - el.clientHeight;
    setProgress(max <= 0 ? 0 : el.scrollTop / max);
  }, []);

  useLayoutEffect(() => {
    measure();
    const el = scrollerRef.current;
    if (!el) return;
    const observer = new ResizeObserver(measure);
    observer.observe(el);
    if (el.firstElementChild) observer.observe(el.firstElementChild);
    window.addEventListener("resize", measure);
    return () => {
      observer.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, [measure, children]);

  const setFromClientY = (clientY: number) => {
    const track = trackRef.current;
    const el = scrollerRef.current;
    if (!track || !el) return;
    const rect = track.getBoundingClientRect();
    const ratio = Math.min(1, Math.max(0, (clientY - rect.top - 16) / Math.max(1, rect.height - 32)));
    const max = Math.max(0, el.scrollHeight - el.clientHeight);
    el.scrollTop = ratio * max;
    setProgress(ratio);
  };

  const onPointerDown = (event: PointerEvent<HTMLDivElement>) => {
    dragging.current = true;
    event.currentTarget.setPointerCapture(event.pointerId);
    event.currentTarget.dataset.dragging = "true";
    setFromClientY(event.clientY);
  };

  const onPointerMove = (event: PointerEvent<HTMLDivElement>) => {
    if (!dragging.current) return;
    setFromClientY(event.clientY);
  };

  const onPointerUp = (event: PointerEvent<HTMLDivElement>) => {
    dragging.current = false;
    event.currentTarget.dataset.dragging = "false";
  };

  return (
    <div className={cn("relative flex min-h-0 flex-1", className)}>
      <div
        ref={scrollerRef}
        onScroll={measure}
        className="poem-scroll min-h-0 flex-1 overflow-y-auto overscroll-contain pr-1 md:pr-4"
      >
        {children}
      </div>
      <div
        ref={trackRef}
        className="bookmark-track ml-1 hidden max-md:flex"
        role="slider"
        aria-orientation="vertical"
        aria-label="Przewiń wiersz"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={Math.round(progress * 100)}
        tabIndex={0}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
        onKeyDown={(event) => {
          const el = scrollerRef.current;
          if (!el) return;
          if (event.key === "ArrowDown" || event.key === "ArrowRight") {
            el.scrollTop += 48;
            event.preventDefault();
          }
          if (event.key === "ArrowUp" || event.key === "ArrowLeft") {
            el.scrollTop -= 48;
            event.preventDefault();
          }
        }}
      >
        <span className="bookmark-cap bookmark-cap-top" />
        <span
          className="bookmark-thumb"
          style={{ top: `${16 + progress * (100 - 32)}%` }}
        />
        <span className="bookmark-cap bookmark-cap-bottom" />
      </div>
    </div>
  );
}
