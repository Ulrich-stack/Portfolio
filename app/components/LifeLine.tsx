"use client";
import { useCallback, useEffect, useLayoutEffect, useRef, useState, type ReactNode } from "react";
import { area, curveBumpY, line } from "d3-shape";
import type { MilestoneKind } from "../data";

type Item = { id: string; kind: MilestoneKind; level: number; content: ReactNode };
type Point = { x: number; y: number };

const DOT: Record<MilestoneKind, string> = {
  cdi: "#e0603a",
  job: "#e0603a",
  school: "#1f3a5f",
  projects: "#3f6b55",
};

function metrics() {
  const wide = window.innerWidth >= 768;
  return { gutter: wide ? 210 : 48, pad: wide ? 26 : 12 };
}

export default function LifeLine({ items }: { items: Item[] }) {
  const wrap = useRef<HTMLDivElement>(null);
  const anchors = useRef<(HTMLSpanElement | null)[]>([]);
  const pathRef = useRef<SVGPathElement>(null);
  const [geo, setGeo] = useState<{ gutter: number; h: number; pts: Point[] } | null>(null);
  const [length, setLength] = useState(0);
  const [reached, setReached] = useState(0);

  const measure = useCallback(() => {
    const el = wrap.current;
    if (!el) return;
    const { gutter, pad } = metrics();
    const box = el.getBoundingClientRect();
    const pts = items.map((it, i) => {
      const a = anchors.current[i]?.getBoundingClientRect();
      return { x: pad + it.level * (gutter - 2 * pad), y: a ? a.top - box.top : 0 };
    });
    setGeo({ gutter, h: box.height, pts });
  }, [items]);

  useLayoutEffect(() => {
    measure();
    const el = wrap.current;
    if (!el) return;
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    window.addEventListener("resize", measure);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, [measure]);

  useEffect(() => {
    if (pathRef.current) setLength(pathRef.current.getTotalLength());
  }, [geo]);

  useEffect(() => {
    if (!geo) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setReached(geo.h);
      return;
    }
    let raf = 0;
    const update = () => {
      const top = wrap.current?.getBoundingClientRect().top ?? 0;
      setReached(Math.min(geo.h, Math.max(0, window.innerHeight * 0.7 - top)));
    };
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
    };
  }, [geo]);

  let d = "";
  let fill = "";
  if (geo) {
    const first = geo.pts[0];
    const last = geo.pts[geo.pts.length - 1];
    const path: Point[] = [{ x: first.x, y: 0 }, ...geo.pts, { x: last.x, y: geo.h }];
    d = line<Point>().x((p) => p.x).y((p) => p.y).curve(curveBumpY)(path) ?? "";
    fill = area<Point>().x0(0).x1((p) => p.x).y((p) => p.y).curve(curveBumpY)(path) ?? "";
  }
  const clipId = "lifeline-clip";

  return (
    <div ref={wrap} className="relative">
      {geo && (
        <svg
          aria-hidden
          className="pointer-events-none absolute left-0 top-0"
          width={geo.gutter}
          height={geo.h}
          viewBox={`0 0 ${geo.gutter} ${geo.h}`}
          overflow="visible"
        >
          <defs>
            <clipPath id={clipId}>
              <rect x="0" y="0" width={geo.gutter} height={reached} />
            </clipPath>
          </defs>
          <path d={fill} fill="#f3c9a8" opacity="0.6" clipPath={`url(#${clipId})`} />
          <path d={d} fill="none" stroke="#1f3a5f" strokeOpacity="0.12" strokeWidth="3" />
          <path
            ref={pathRef}
            d={d}
            fill="none"
            stroke="#1f3a5f"
            strokeWidth="3.5"
            strokeLinecap="round"
            strokeDasharray={length || undefined}
            strokeDashoffset={length ? length * (1 - reached / geo.h) : undefined}
          />
          {geo.pts.map((p, i) => {
            const it = items[i];
            const on = reached >= p.y;
            const big = it.kind === "cdi";
            return (
              <circle
                key={it.id}
                cx={p.x}
                cy={p.y}
                r={big ? 11 : 8}
                fill={on ? DOT[it.kind] : "#f7efe6"}
                stroke="#1f3a5f"
                strokeWidth="3"
                style={{ transition: "fill 0.4s" }}
              />
            );
          })}
        </svg>
      )}

      {items.map((it, i) => (
        <div key={it.id} id={it.id} className="relative pb-14 pl-[68px] last:pb-0 md:pb-20 md:pl-[240px]">
          <span
            ref={(el) => {
              anchors.current[i] = el;
            }}
            aria-hidden
            className="absolute left-0 top-[0.6rem] h-0 w-0"
          />
          {it.content}
        </div>
      ))}
    </div>
  );
}
