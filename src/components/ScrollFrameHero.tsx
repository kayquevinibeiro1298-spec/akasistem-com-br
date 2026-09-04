import { useEffect, useRef, useState } from "react";
import { FRAME_URLS } from "@/lib/frames";
import logoAsset from "@/assets/aka-logo.png.asset.json";

const PHRASES = [
  { at: 0, title: "Sistemas sob medida", sub: "Software que nasce do seu processo." },
  { at: 0.4, title: "Automações inteligentes", sub: "Menos trabalho manual, mais resultado." },
  { at: 0.75, title: "Sites de alta performance", sub: "Presença digital que converte." },
];

export function ScrollFrameHero() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const progressRef = useRef(0);
  const rafRef = useRef<number | null>(null);
  const [loaded, setLoaded] = useState(0);
  const [ready, setReady] = useState(false);
  const [phrase, setPhrase] = useState(0);
  const [scrollPct, setScrollPct] = useState(0);

  useEffect(() => {
    let alive = true;
    let count = 0;
    const imgs = FRAME_URLS.map((url) => {
      const img = new Image();
      img.decoding = "async";
      img.src = url;
      const done = () => {
        if (!alive) return;
        count += 1;
        setLoaded(count);
        if (count >= 8) setReady(true);
      };
      img.onload = done;
      img.onerror = done;
      return img;
    });
    imagesRef.current = imgs;
    return () => {
      alive = false;
    };
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const draw = () => {
      rafRef.current = null;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const w = canvas.clientWidth;
      const h = canvas.clientHeight;
      if (canvas.width !== Math.round(w * dpr) || canvas.height !== Math.round(h * dpr)) {
        canvas.width = Math.round(w * dpr);
        canvas.height = Math.round(h * dpr);
      }
      const p = progressRef.current;
      const idx = Math.min(
        FRAME_URLS.length - 1,
        Math.max(0, Math.round(p * (FRAME_URLS.length - 1))),
      );
      let img = imagesRef.current[idx];
      if (!img || !img.complete || img.naturalWidth === 0) {
        for (let i = idx; i >= 0; i--) {
          const c = imagesRef.current[i];
          if (c && c.complete && c.naturalWidth > 0) {
            img = c;
            break;
          }
        }
      }
      if (!img || !img.complete || img.naturalWidth === 0) return;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, w, h);
      const scale = Math.max(w / img.naturalWidth, h / img.naturalHeight);
      const dw = img.naturalWidth * scale;
      const dh = img.naturalHeight * scale;
      ctx.drawImage(img, (w - dw) / 2, (h - dh) / 2, dw, dh);
    };

    const schedule = () => {
      if (rafRef.current === null) rafRef.current = requestAnimationFrame(draw);
    };

    const onScroll = () => {
      const el = wrapRef.current;
      if (!el) return;
      const total = el.offsetHeight - window.innerHeight;
      const p = total > 0 ? Math.min(1, Math.max(0, -el.getBoundingClientRect().top / total)) : 0;
      progressRef.current = p;
      let next = 0;
      PHRASES.forEach((ph, i) => {
        if (p >= ph.at) next = i;
      });
      setPhrase(next);
      setScrollPct(Math.round(p * 100));
      schedule();
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    };
  }, [ready]);

  const current = PHRASES[phrase] ?? PHRASES[0]!;
  const pct = Math.round((loaded / FRAME_URLS.length) * 100);

  return (
    <div ref={wrapRef} className="relative h-[420vh]">
      <div className="sticky top-0 h-screen w-full overflow-hidden bg-background">
        <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />
        <div className="pointer-events-none absolute inset-0 bg-hero-veil" />

        <div className="relative flex h-full flex-col justify-between px-6 py-8 sm:px-10 sm:py-12">
          <div className="flex items-center gap-3">
            <img
              src={logoAsset.url}
              alt="AKA Tech"
              className="h-10 w-auto sm:h-12"
              width={900}
              height={708}
            />
          </div>

          <div className="max-w-2xl">
            <p className="mb-4 font-mono text-xs tracking-[0.3em] text-brand uppercase">
              Software · Automação · Web
            </p>
            <h1 className="font-display text-4xl leading-[1.05] font-semibold text-foreground sm:text-6xl lg:text-7xl">
              {current.title}
            </h1>
            <p className="mt-4 max-w-md text-base text-muted-foreground sm:text-lg">
              {current.sub}
            </p>
          </div>

          <div className="flex items-end justify-between gap-6">
            <div className="font-mono text-[10px] tracking-[0.25em] text-muted-foreground uppercase">
              {loaded < FRAME_URLS.length ? `Carregando cena ${pct}%` : "Role para avançar"}
            </div>
            <div className="h-px w-40 bg-border sm:w-64">
              <div
                className="h-px bg-brand transition-[width] duration-150"
                style={{ width: `${scrollPct}%` }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
