export function HeroVisual() {
  return (
    <div aria-hidden="true" className="relative hidden min-h-[19rem] overflow-hidden rounded-[1.5rem] border border-border/80 bg-surface-raised p-6 shadow-[0_24px_70px_-40px_var(--accent)] md:block">
      <div className="editorial-grid absolute inset-0 opacity-40" />
      <div className="absolute inset-6 rounded-full border border-accent/25" />
      <div className="absolute inset-14 rounded-full border border-[color:var(--violet)]/20" />
      <svg viewBox="0 0 360 300" className="relative z-10 h-full w-full" fill="none"><path d="M30 205C85 205 87 89 145 89C205 89 211 222 264 222C303 222 307 135 337 135" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" /><path d="M30 226C91 226 93 132 150 132C212 132 211 188 264 188C303 188 307 92 337 92" stroke="var(--cyan)" strokeWidth="1" strokeOpacity=".65" strokeLinecap="round" strokeDasharray="3 8" />{[ [30,205], [145,89], [264,222], [337,135] ].map(([cx, cy], index) => <circle key={index} cx={cx} cy={cy} r="6" fill="var(--surface)" stroke="var(--accent)" strokeWidth="3" />)}</svg>
      <div className="absolute bottom-6 left-6 rounded-md border border-border bg-background/80 px-3 py-2 text-[10px] font-mono uppercase tracking-[.16em] text-muted backdrop-blur-sm">Evidence signal · decorative</div>
      <div className="absolute right-6 top-6 rounded-md border border-border bg-background/80 px-3 py-2 text-[10px] font-mono uppercase tracking-[.16em] text-accent backdrop-blur-sm">Reliable systems</div>
    </div>
  );
}
