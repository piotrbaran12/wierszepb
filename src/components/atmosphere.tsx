export function Atmosphere() {
  return (
    <>
      <div className="site-vignette" aria-hidden="true" />
      <div className="site-grain" aria-hidden="true" />
      <div className="site-frame" aria-hidden="true">
        <span className="frame-corner frame-corner-tr" />
        <span className="frame-corner frame-corner-bl" />
      </div>
      <div className="dust-field" aria-hidden="true">
        {Array.from({ length: 18 }, (_, i) => (
          <span key={i} className={`dust-mote mote-${i + 1}`} />
        ))}
      </div>
    </>
  );
}

export function Diamond({ className = "size-1.5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 8 8" className={className} aria-hidden="true" fill="currentColor">
      <path d="M4 0.4 L7.6 4 L4 7.6 L0.4 4 Z" />
    </svg>
  );
}

export function OrnamentRule() {
  return (
    <div className="ornament-rule" aria-hidden="true">
      <Diamond className="size-1.5 text-stone" />
    </div>
  );
}
