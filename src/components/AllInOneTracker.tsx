"use client";

import React from "react";
import { useTheme } from "next-themes";
import { useEffect, useState, useRef } from "react";

/* ── donut arc path ─────────────────────────────────────────────── */
function donutPath(
  cx: number, cy: number,
  outerR: number, innerR: number,
  startDeg: number, endDeg: number,
) {
  const rad = Math.PI / 180;
  const a1 = startDeg * rad, a2 = endDeg * rad;
  const large = endDeg - startDeg > 180 ? 1 : 0;
  const f = (n: number) => n.toFixed(2);
  const ox1 = cx + outerR * Math.cos(a1), oy1 = cy + outerR * Math.sin(a1);
  const ox2 = cx + outerR * Math.cos(a2), oy2 = cy + outerR * Math.sin(a2);
  const ix2 = cx + innerR * Math.cos(a2), iy2 = cy + innerR * Math.sin(a2);
  const ix1 = cx + innerR * Math.cos(a1), iy1 = cy + innerR * Math.sin(a1);
  return `M${f(ox1)},${f(oy1)} A${outerR},${outerR} 0 ${large} 1 ${f(ox2)},${f(oy2)} L${f(ix2)},${f(iy2)} A${innerR},${innerR} 0 ${large} 0 ${f(ix1)},${f(iy1)}Z`;
}

/* ── radial dot ring ─────────────────────────────────────────────── */
function RadialDots({ cx, cy, radius, count, dotR = 1.5, dotColor }: {
  cx: number; cy: number; radius: number; count: number; dotR?: number; dotColor: string;
}) {
  return (
    <>
      {Array.from({ length: count }, (_, i) => {
        const angle = (i / count) * 2 * Math.PI - Math.PI / 2;
        // Round to 2 dp so server and browser V8 produce identical values
        const dcx = Math.round((cx + radius * Math.cos(angle)) * 100) / 100;
        const dcy = Math.round((cy + radius * Math.sin(angle)) * 100) / 100;
        return (
          <circle
            key={i}
            cx={dcx}
            cy={dcy}
            r={dotR}
            fill={dotColor}
          />
        );
      })}
    </>
  );
}

/* ── animated green dots along a path ───────────────────────────── */
function FlowDots({ pathId, dur }: { pathId: string; dur: number }) {
  return (
    <>
      {([0, -dur / 2.2, -dur / 3.5] as number[]).map((offset, i) => (
        <circle
          key={i}
          r={i === 0 ? 3.8 : 2.6}
          fill="#22c55e"
          filter="url(#dotGlow)"
          opacity={i === 0 ? 1 : 0.5}
        >
          <animateMotion dur={`${dur}s`} repeatCount="indefinite" begin={`${offset}s`}>
            {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
            <mpath href={`#${pathId}`} />
          </animateMotion>
        </circle>
      ))}
    </>
  );
}

/* ── logo circle wrapper ─────────────────────────────────────────── */
function LogoCircle({ cx, cy, bgDark, bgLight, isDark, children }: {
  cx: number; cy: number; bgDark: string; bgLight: string; isDark: boolean; children: React.ReactNode;
}) {
  const bg = isDark ? bgDark : bgLight;
  const strokeColor = isDark ? "rgba(255,255,255,0.14)" : "rgba(0,0,0,0.1)";
  return (
    <g>
      <circle cx={cx} cy={cy} r={24} fill={bg} />
      <circle cx={cx} cy={cy} r={24} fill="none" stroke={strokeColor} strokeWidth={1.2} />
      <g transform={`translate(${cx},${cy})`}>{children}</g>
    </g>
  );
}

/* ── company logo icons (drawn relative to 0,0 center) ──────────── */

const BinanceLogo = () => (
  <g fill="#F3BA2F">
    <polygon points="0,-5 4.5,0 0,5 -4.5,0" />
    <polygon points="0,-14 3.2,-10.8 0,-7.5 -3.2,-10.8" />
    <polygon points="13,0 9.8,-3.2 6.5,0 9.8,3.2" />
    <polygon points="0,14 3.2,10.8 0,7.5 -3.2,10.8" />
    <polygon points="-13,0 -9.8,-3.2 -6.5,0 -9.8,3.2" />
  </g>
);

const CoinbaseLogo = () => (
  <>
    <circle r="13" fill="#0052FF" />
    <path
      d="M 5,-9.5 A 10,10 0 1 0 5,9.5"
      stroke="white" strokeWidth="4.5" fill="none" strokeLinecap="round"
    />
  </>
);

const PhantomLogo = () => (
  <>
    <path
      d="M 0,-12 Q 9,-12 9.5,-4 Q 10,3 8,7 Q 6,10 4,8 Q 2,6 0,8 Q -2,10 -4,8 Q -6,9 -8,7 Q -10,3 -9.5,-4 Q -9,-12 0,-12 Z"
      fill="#AB9FF2"
    />
    <ellipse cx="-3" cy="-2" rx="2.8" ry="3" fill="white" />
    <ellipse cx="3" cy="-2" rx="2.8" ry="3" fill="white" />
    <circle cx="-2" cy="-2.5" r="1.4" fill="#2D0045" />
    <circle cx="4" cy="-2.5" r="1.4" fill="#2D0045" />
  </>
);

const TrustLogo = () => (
  <>
    <path
      d="M 0,-13 L 10.5,-7.5 L 10.5,2.5 Q 9.5,11.5 0,14.5 Q -9.5,11.5 -10.5,2.5 L -10.5,-7.5 Z"
      fill="#3375BB"
    />
    <path
      d="M -5.5,2 L -1.5,6.5 L 7,-4.5"
      stroke="white" strokeWidth="2.5" fill="none"
      strokeLinecap="round" strokeLinejoin="round"
    />
  </>
);

const MetaMaskLogo = () => (
  <>
    <polygon points="-9,-2 -13,-12 -3,-6" fill="#E4761B" />
    <polygon points="9,-2 13,-12 3,-6" fill="#E4761B" />
    <ellipse ry="8" rx="8.5" cy="2" fill="#E2761B" />
    <ellipse cx="-3" cy="2" rx="2.8" ry="3.5" fill="#CD6116" />
    <ellipse cx="3" cy="2" rx="2.8" ry="3.5" fill="#CD6116" />
    <circle cx="-4" cy="0" r="1.6" fill="white" />
    <circle cx="4" cy="0" r="1.6" fill="white" />
    <circle cx="-3.5" cy="0" r="0.9" fill="#1a1a1a" />
    <circle cx="4.5" cy="0" r="0.9" fill="#1a1a1a" />
    <path d="M -3,5.5 Q 0,8 3,5.5" stroke="#CD6116" strokeWidth="1.4" fill="none" strokeLinecap="round" />
  </>
);

const SolanaLogo = () => (
  <>
    <path d="M -9,-9.5 H 3 L 9,-4.5 H -3 Z" fill="#9945FF" />
    <path d="M -9,-1.5 H 3 L 9,3.5 H -3 Z" fill="#14b8a6" />
    <path d="M -9,6 H 3 L 9,11 H -3 Z" fill="#9945FF" />
  </>
);

const BitcoinLogo = () => (
  <>
    <circle r="13" fill="#F7931A" />
    <text
      fontSize="18" fontWeight="900" fill="white"
      dy="6.5" textAnchor="middle" fontFamily="system-ui, sans-serif"
    >
      &#x20BF;
    </text>
  </>
);

const UniswapLogo = () => (
  <>
    <ellipse cx="1" cy="3" rx="9" ry="8" fill="#FF007A" />
    <polygon points="5,-5 3,-14 10,-8" fill="#FF007A" />
    <polygon points="-5,-3 -8,-11 -1,-5" fill="#FF007A" />
    <circle cx="5" cy="1" r="2.8" fill="white" />
    <circle cx="5.8" cy="1" r="1.3" fill="#1a0010" />
    <circle cx="-1" cy="6" r="1.2" fill="#c0005c" />
  </>
);

/* ── price badge ─────────────────────────────────────────────────── */
function PriceBadge({ x, y, value, up, isDark, opacity = 1 }: {
  x: number; y: number; value: string; up: boolean; isDark: boolean; opacity?: number;
}) {
  const fg = up ? "#22c55e" : "#ef4444";
  const bg = up
    ? (isDark ? "rgba(34,197,94,0.18)" : "rgba(34,197,94,0.12)")
    : (isDark ? "rgba(239,68,68,0.18)" : "rgba(239,68,68,0.12)");
  const border = up
    ? (isDark ? "rgba(34,197,94,0.4)" : "rgba(34,197,94,0.3)")
    : (isDark ? "rgba(239,68,68,0.4)" : "rgba(239,68,68,0.3)");
  return (
    <g transform={`translate(${x},${y})`} opacity={opacity}>
      <rect x={0} y={0} width={66} height={22} rx={7} fill={bg} stroke={border} strokeWidth={0.8} />
      <text x={33} y={15} textAnchor="middle" fontSize={10} fontWeight="700" fill={fg} fontFamily="system-ui, sans-serif">
        {up ? "\u25B2" : "\u25BC"} {value}
      </text>
    </g>
  );
}

/* ── floating badge animation helpers ───────────────────────────── */
const PRICE_POOL = [
  { value: "7.28%", up: true  }, { value: "5.31%", up: true  },
  { value: "2.30%", up: true  }, { value: "1.84%", up: true  },
  { value: "4.17%", up: true  }, { value: "9.43%", up: true  },
  { value: "0.92%", up: true  }, { value: "3.61%", up: true  },
  { value: "6.32%", up: false }, { value: "3.45%", up: false },
  { value: "0.12%", up: false }, { value: "8.71%", up: false },
  { value: "2.09%", up: false }, { value: "5.88%", up: false },
];

// All circles to stay away from: logos (r≈40) + center hub (r≈90)
const AVOID_ZONES = [
  { cx: 44,  cy: 65,  r: 46 }, { cx: 44,  cy: 158, r: 46 },
  { cx: 44,  cy: 252, r: 46 }, { cx: 44,  cy: 328, r: 46 },
  { cx: 516, cy: 65,  r: 46 }, { cx: 516, cy: 158, r: 46 },
  { cx: 516, cy: 252, r: 46 }, { cx: 516, cy: 328, r: 46 },
  { cx: 280, cy: 195, r: 90 },
];

function randomBadgePos(others: { x: number; y: number }[] = []): { x: number; y: number } {
  let x: number, y: number, attempts = 0;
  do {
    x = 80  + Math.random() * 370;
    y = 40  + Math.random() * 300;
    attempts++;
    const bx = x + 33, by = y + 11;
    const hitsZone = AVOID_ZONES.some(z => Math.hypot(bx - z.cx, by - z.cy) < z.r);
    const hitsOther = others.some(o => Math.abs(bx - (o.x + 33)) < 76 && Math.abs(by - (o.y + 11)) < 32);
    if (!hitsZone && !hitsOther) break;
  } while (attempts < 300);
  return { x, y };
}

type BadgeAnim = {
  x: number; y: number;
  opacity: number; targetOpacity: number;
  value: string; up: boolean; timer: number;
};

/* ── static data ─────────────────────────────────────────────────── */
const FEATURES = [
  {
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a2.25 2.25 0 00-2.25-2.25H15a3 3 0 11-6 0H5.25A2.25 2.25 0 003 12m18 0v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6m18 0V9M3 12V9m18-3a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v3" />
      </svg>
    ),
    label: "300+ Wallets/Exchanges",
    desc: "Track everything wherever you keep it: Binance, Trust Wallet, and others.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z" />
      </svg>
    ),
    label: "1,000+ DeFi Protocols",
    desc: "Track and manage all your DeFi on 1000+ protocols and 10+ chains.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    label: "20,000+ Cryptocurrencies",
    desc: "Research, track, and manage any coin, set custom crypto alerts and more.",
  },
];

const L_PATHS = [
  { id: "lp1", d: "M 68 65  H 145 Q 168 65  168 88  V 170 Q 168 195 195 195 H 225", dur: 2.4 },
  { id: "lp2", d: "M 68 158 H 128 Q 168 158 168 172 V 182 Q 168 195 195 195 H 225", dur: 2.0 },
  { id: "lp3", d: "M 68 252 H 128 Q 168 252 168 235 V 210 Q 168 195 195 195 H 225", dur: 2.7 },
  { id: "lp4", d: "M 68 328 H 145 Q 168 328 168 305 V 210 Q 168 195 195 195 H 225", dur: 2.2 },
];

const R_PATHS = [
  { id: "rp1", d: "M 492 65  H 415 Q 392 65  392 88  V 170 Q 392 195 365 195 H 335", dur: 2.5 },
  { id: "rp2", d: "M 492 158 H 432 Q 392 158 392 172 V 182 Q 392 195 365 195 H 335", dur: 2.1 },
  { id: "rp3", d: "M 492 252 H 432 Q 392 252 392 235 V 210 Q 392 195 365 195 H 335", dur: 2.8 },
  { id: "rp4", d: "M 492 328 H 415 Q 392 328 392 305 V 210 Q 392 195 365 195 H 335", dur: 2.3 },
];

const LEFT_LOGOS: { cx: number; cy: number; bgDark: string; bgLight: string; icon: React.ReactNode }[] = [
  { cx: 44, cy: 65,  bgDark: "#1a1200", bgLight: "#fef9ec", icon: <BinanceLogo /> },
  { cx: 44, cy: 158, bgDark: "#00143a", bgLight: "#eef4ff", icon: <CoinbaseLogo /> },
  { cx: 44, cy: 252, bgDark: "#160028", bgLight: "#f3eeff", icon: <PhantomLogo /> },
  { cx: 44, cy: 328, bgDark: "#000d2b", bgLight: "#eef4ff", icon: <TrustLogo /> },
];

const RIGHT_LOGOS: { cx: number; cy: number; bgDark: string; bgLight: string; icon: React.ReactNode }[] = [
  { cx: 516, cy: 65,  bgDark: "#1a0a00", bgLight: "#fef3ec", icon: <MetaMaskLogo /> },
  { cx: 516, cy: 158, bgDark: "#120028", bgLight: "#f3eeff", icon: <SolanaLogo /> },
  { cx: 516, cy: 252, bgDark: "#1a0f00", bgLight: "#fef6ec", icon: <BitcoinLogo /> },
  { cx: 516, cy: 328, bgDark: "#200014", bgLight: "#ffeef5", icon: <UniswapLogo /> },
];

/* ── component ───────────────────────────────────────────────────── */
export function AllInOneTracker() {
  const cx = 280, cy = 195;
  const outerR = 60, innerR = 38;
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const isDark = !mounted || theme === "dark";

  /* floating badge animation */
  const badgesRef = useRef<BadgeAnim[]>([]);
  const [, forceUpdate] = useState(0);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const placed: { x: number; y: number }[] = [];
    badgesRef.current = Array.from({ length: 4 }, (_, i) => {
      const pos = randomBadgePos(placed);
      placed.push(pos);
      const pool = PRICE_POOL[(i * 3) % PRICE_POOL.length];
      return { x: pos.x, y: pos.y, opacity: 0, targetOpacity: 1, value: pool.value, up: pool.up, timer: 40 + i * 55 };
    });
    const animate = () => {
      badgesRef.current.forEach(b => {
        b.opacity += (b.targetOpacity - b.opacity) * 0.04;

        b.timer--;
        if (b.timer <= 0) {
          if (b.targetOpacity > 0.5) {
            // start fading out
            b.targetOpacity = 0;
            b.timer = 1; // check every frame until fully gone
          } else if (b.opacity < 0.02) {
            // fully invisible — now safe to teleport to new position
            const p = PRICE_POOL[Math.floor(Math.random() * PRICE_POOL.length)];
            b.value = p.value; b.up = p.up;
            const others = badgesRef.current.filter(o => o !== b);
            const np = randomBadgePos(others);
            b.x = np.x; b.y = np.y;
            b.targetOpacity = 1;
            b.timer = 120 + Math.floor(Math.random() * 120); // 2–4 s
          }
          // else still fading — keep timer at 1 to re-check next frame
        }
      });
      forceUpdate(n => n + 1);
      rafRef.current = requestAnimationFrame(animate);
    };
    rafRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  // Theme-aware SVG colors
  const lineColor = isDark ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.12)";
  const dotColor = isDark ? "rgba(255,255,255,0.18)" : "rgba(0,0,0,0.1)";
  const cardBg = isDark ? "#0a1628" : "#ffffff";
  const hubCenterBg1 = isDark ? "#1a1a2e" : "#f1f5f9";
  const hubCenterBg2 = isDark ? "#0a0a18" : "#e2e8f0";
  const hubSubTextColor = isDark ? "rgba(255,255,255,0.45)" : "rgba(0,0,0,0.4)";
  const segmentGapColor = isDark ? "#0a0a18" : "#ffffff";
  const hubStrokeColor = isDark ? "rgba(249,115,22,0.3)" : "rgba(249,115,22,0.4)";

  return (
    <section className="py-20 sm:py-28 dark:bg-navy-950 bg-gray-50 border-t dark:border-white/5 border-gray-100">
      <div className="max-w-7xl mx-auto px-4">

        {/* Header */}
        <div className="text-center mb-14 max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold dark:text-white text-gray-900 leading-tight">
            All-In-One Crypto Tracker to Manage Your Portfolio{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">
              More Efficiently
            </span>
          </h2>
          <p className="mt-4 dark:text-gray-400 text-gray-600 text-sm sm:text-base">
            We&apos;re the only platform on the market that supports all major crypto
            platforms and DeFi protocols.
          </p>
        </div>

        {/* Body */}
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-6">

          {/* Left: feature list */}
          <div className="flex flex-col gap-8 lg:w-72 flex-shrink-0 lg:pr-4">
            {FEATURES.map((f) => (
              <div key={f.label} className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-xl dark:bg-orange-500/10 bg-orange-50 border dark:border-orange-500/20 border-orange-200 flex items-center justify-center dark:text-orange-400 text-orange-600 flex-shrink-0">
                  {f.icon}
                </div>
                <div>
                  <div className="font-bold dark:text-white text-gray-900">{f.label}</div>
                  <div className="text-sm dark:text-gray-400 text-gray-500 mt-1 leading-relaxed">{f.desc}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Right: visualization — theme-aware */}
          <div
            className="flex-1 w-full min-w-0 rounded-2xl dark:border-white/5 border border-gray-200 p-4 sm:p-6 transition-colors"
            style={{ background: cardBg }}
          >
            <svg
              viewBox="0 0 560 390"
              className="w-full block"
              aria-hidden="true"
            >
              <defs>
                <filter id="dotGlow" x="-80%" y="-80%" width="260%" height="260%">
                  <feGaussianBlur in="SourceGraphic" stdDeviation="3.5" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
                <filter id="hubGlow" x="-40%" y="-40%" width="180%" height="180%">
                  <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
                <radialGradient id="hubBg" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor={hubCenterBg1} />
                  <stop offset="100%" stopColor={hubCenterBg2} />
                </radialGradient>
              </defs>

              {/* ── connector paths (dashed bracket lines) ── */}
              {L_PATHS.map((p) => (
                <path
                  key={p.id} id={p.id} d={p.d}
                  fill="none"
                  stroke={lineColor}
                  strokeWidth={1.5}
                  strokeDasharray="4 5"
                  strokeLinecap="round"
                />
              ))}
              {R_PATHS.map((p) => (
                <path
                  key={p.id} id={p.id} d={p.d}
                  fill="none"
                  stroke={lineColor}
                  strokeWidth={1.5}
                  strokeDasharray="4 5"
                  strokeLinecap="round"
                />
              ))}

              {/* ── animated green flow dots ── */}
              {L_PATHS.map((p) => (
                <FlowDots key={`d-${p.id}`} pathId={p.id} dur={p.dur} />
              ))}
              {R_PATHS.map((p) => (
                <FlowDots key={`d-${p.id}`} pathId={p.id} dur={p.dur} />
              ))}

              {/* ── radial dot rings ── */}
              <RadialDots cx={cx} cy={cy} radius={80}  count={24} dotR={1.5} dotColor={dotColor} />
              <RadialDots cx={cx} cy={cy} radius={98}  count={32} dotR={1.2} dotColor={dotColor} />
              <RadialDots cx={cx} cy={cy} radius={115} count={42} dotR={1.0} dotColor={dotColor} />

              {/* ── hub orange glow ── */}
              <circle cx={cx} cy={cy} r={outerR + 8} fill="#F97316" opacity={isDark ? 0.12 : 0.08} filter="url(#hubGlow)" />

              {/* ── ripple rings from center ── */}
              {[0, 1, 2].map((i) => (
                <circle key={i} cx={cx} cy={cy} r={outerR} fill="none" stroke="#F97316" strokeWidth={1.2} opacity={0}>
                  <animate attributeName="r" values={`${outerR};${outerR + 70}`} dur="3s" begin={`${i * 1}s`} repeatCount="indefinite" calcMode="spline" keySplines="0.2 0 0.8 1" />
                  <animate attributeName="opacity" values="0.5;0" dur="3s" begin={`${i * 1}s`} repeatCount="indefinite" calcMode="spline" keySplines="0.2 0 0.8 1" />
                </circle>
              ))}

              {/* ── donut segments ── */}
              <path d={donutPath(cx, cy, outerR, innerR, -90, 162)} fill="#F97316" />
              <path d={donutPath(cx, cy, outerR, innerR, 162, 270)} fill="#7C1D13" />
              {/* segment gap lines */}
              {[-90, 162].map((deg) => {
                const r = Math.PI / 180;
                return (
                  <line
                    key={deg}
                    x1={cx + innerR * Math.cos(deg * r)} y1={cy + innerR * Math.sin(deg * r)}
                    x2={cx + outerR * Math.cos(deg * r)} y2={cy + outerR * Math.sin(deg * r)}
                    stroke={segmentGapColor} strokeWidth={2}
                  />
                );
              })}

              {/* ── hub center ── */}
              <circle cx={cx} cy={cy} r={innerR - 1} fill="url(#hubBg)" />
              <circle cx={cx} cy={cy} r={innerR - 1} fill="none" stroke={hubStrokeColor} strokeWidth={1} />
              <image href="/logo-icon.svg" x={cx - 18} y={cy - 22} width={36} height={36} />
              <text
                x={cx} y={cy + 22}
                textAnchor="middle" fontSize={6}
                fill={hubSubTextColor}
                fontFamily="system-ui, sans-serif" letterSpacing="1.5"
              >
                PORTFOLIO
              </text>

              {/* ── logo circles ── */}
              {LEFT_LOGOS.map((l, i) => (
                <LogoCircle key={i} cx={l.cx} cy={l.cy} bgDark={l.bgDark} bgLight={l.bgLight} isDark={isDark}>{l.icon}</LogoCircle>
              ))}
              {RIGHT_LOGOS.map((l, i) => (
                <LogoCircle key={i} cx={l.cx} cy={l.cy} bgDark={l.bgDark} bgLight={l.bgLight} isDark={isDark}>{l.icon}</LogoCircle>
              ))}

              {/* ── floating price badges ── */}
              {badgesRef.current.map((b, i) => (
                <PriceBadge key={i} x={b.x} y={b.y} value={b.value} up={b.up} isDark={isDark} opacity={b.opacity} />
              ))}
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
