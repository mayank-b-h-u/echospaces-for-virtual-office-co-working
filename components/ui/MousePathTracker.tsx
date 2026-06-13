"use client";

import { useEffect, useRef, useCallback } from "react";

type Point = { x: number; y: number; id: number };

/**
 * Convert an array of points into a smooth SVG quadratic bezier path string.
 * Uses midpoints between consecutive points as control points for smoothness.
 */
function pointsToSmoothPath(points: Point[]): string {
  if (points.length < 2) return "";

  let d = `M ${points[0].x},${points[0].y}`;

  if (points.length === 2) {
    d += ` L ${points[1].x},${points[1].y}`;
    return d;
  }

  // First segment: quadratic to midpoint of first two points
  const midX0 = (points[0].x + points[1].x) / 2;
  const midY0 = (points[0].y + points[1].y) / 2;
  d += ` Q ${points[0].x},${points[0].y} ${midX0},${midY0}`;

  // Middle segments
  for (let i = 1; i < points.length - 1; i++) {
    const midX = (points[i].x + points[i + 1].x) / 2;
    const midY = (points[i].y + points[i + 1].y) / 2;
    d += ` Q ${points[i].x},${points[i].y} ${midX},${midY}`;
  }

  // Last point
  const last = points[points.length - 1];
  d += ` L ${last.x},${last.y}`;

  return d;
}

const SEGMENT_SIZE = 30;
const MAX_POINTS = 120;
const MOVE_THRESHOLD = 2;

const SEGMENT_OPACITIES = [1.0, 0.6, 0.3, 0.1];

export default function MousePathTracker() {
  const svgRef = useRef<SVGSVGElement>(null);
  const pointsRef = useRef<Point[]>([]);
  const animFrameRef = useRef<number>(0);
  const counterRef = useRef<number>(0);
  const cursorRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const pageDimsRef = useRef<{ w: number; h: number }>({ w: 0, h: 0 });

  // Build and render SVG content via direct DOM manipulation (no setState)
  const renderFrame = useCallback(() => {
    const svg = svgRef.current;
    if (!svg) {
      animFrameRef.current = requestAnimationFrame(renderFrame);
      return;
    }

    // Update page dimensions
    const w = Math.max(
      document.body.scrollWidth,
      document.documentElement.scrollWidth
    );
    const h = Math.max(
      document.body.scrollHeight,
      document.documentElement.scrollHeight
    );

    if (w !== pageDimsRef.current.w || h !== pageDimsRef.current.h) {
      pageDimsRef.current = { w, h };
      svg.setAttribute("viewBox", `0 0 ${w} ${h}`);
      svg.style.width = `${w}px`;
      svg.style.height = `${h}px`;
    }

    const points = pointsRef.current;

    // Update path segments
    for (let seg = 0; seg < 4; seg++) {
      const pathEl = svg.querySelector(`#mouse-seg-${seg}`) as SVGPathElement | null;
      if (!pathEl) continue;

      const start = seg * SEGMENT_SIZE;
      // Overlap by 1 point for continuity between segments
      const end = Math.min(start + SEGMENT_SIZE + 1, points.length);
      const slice = points.slice(start, end);

      if (slice.length >= 2) {
        pathEl.setAttribute("d", pointsToSmoothPath(slice));
        pathEl.setAttribute("opacity", String(SEGMENT_OPACITIES[seg]));
      } else {
        pathEl.setAttribute("d", "");
      }
    }

    // Update cursor dot
    const dot = svg.querySelector("#cursor-dot") as SVGCircleElement | null;
    if (dot && points.length > 0) {
      dot.setAttribute("cx", String(cursorRef.current.x));
      dot.setAttribute("cy", String(cursorRef.current.y));
      dot.setAttribute("opacity", "1");
    }

    animFrameRef.current = requestAnimationFrame(renderFrame);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = e.pageX;
      const y = e.pageY;

      cursorRef.current = { x, y };

      const pts = pointsRef.current;

      // Throttle: only add point if moved > threshold
      if (pts.length > 0) {
        const dx = x - pts[0].x;
        const dy = y - pts[0].y;
        if (Math.sqrt(dx * dx + dy * dy) < MOVE_THRESHOLD) return;
      }

      counterRef.current++;
      pts.unshift({ x, y, id: counterRef.current });

      if (pts.length > MAX_POINTS) {
        pts.length = MAX_POINTS;
      }
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    animFrameRef.current = requestAnimationFrame(renderFrame);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animFrameRef.current);
    };
  }, [renderFrame]);

  return (
    <svg
      ref={svgRef}
      aria-hidden="true"
      className="absolute top-0 left-0 z-[9999] pointer-events-none"
      style={{ width: "100%", height: "100%", overflow: "hidden" }}
      viewBox="0 0 1 1"
      preserveAspectRatio="none"
    >
      <defs>
        {/* Gradient for the stroke */}
        <linearGradient id="mouse-path-grad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#40916C" />
          <stop offset="50%" stopColor="#74C69D" />
          <stop offset="100%" stopColor="#D8F3DC" />
        </linearGradient>

        {/* Glow filter */}
        <filter id="mouse-glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="3" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        {/* Dot pulse animation */}
        <style>{`
          @keyframes cursorPulse {
            0%, 100% { r: 5; opacity: 1; }
            50% { r: 8; opacity: 0.6; }
          }
          #cursor-dot {
            animation: cursorPulse 1.5s ease-in-out infinite;
          }
        `}</style>
      </defs>

      {/* Path segments — 4 segments with decreasing opacity */}
      {[0, 1, 2, 3].map((seg) => (
        <path
          key={seg}
          id={`mouse-seg-${seg}`}
          d=""
          fill="none"
          stroke="url(#mouse-path-grad)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          filter="url(#mouse-glow)"
          opacity="0"
        />
      ))}

      {/* Cursor dot */}
      <circle
        id="cursor-dot"
        cx="0"
        cy="0"
        r="5"
        fill="#52B788"
        opacity="0"
        filter="url(#mouse-glow)"
      />
    </svg>
  );
}
