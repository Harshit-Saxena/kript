"use client";

import { useEffect, useState, useCallback, useRef } from "react";

const COINS = [
  { symbol: "BTC",   price: 67432.18, change: +2.34,  color: "#F7931A" },
  { symbol: "ETH",   price: 3541.22,  change: +1.87,  color: "#627EEA" },
  { symbol: "SOL",   price: 178.92,   change: -1.24,  color: "#9945FF" },
  { symbol: "BNB",   price: 589.34,   change: -0.82,  color: "#F3BA2F" },
  { symbol: "XRP",   price: 0.6231,   change: +3.41,  color: "#346AA9" },
  { symbol: "ADA",   price: 0.4821,   change: +0.95,  color: "#0033AD" },
  { symbol: "AVAX",  price: 38.14,    change: -2.10,  color: "#E84142" },
  { symbol: "DOGE",  price: 0.1623,   change: +4.20,  color: "#C2A633" },
  { symbol: "DOT",   price: 7.84,     change: +1.65,  color: "#E6007A" },
  { symbol: "LINK",  price: 14.23,    change: -0.54,  color: "#2A5ADA" },
  { symbol: "MATIC", price: 0.8812,   change: +2.11,  color: "#8247E5" },
  { symbol: "UNI",   price: 9.43,     change: -1.33,  color: "#FF007A" },
];

// Spawn across most of the hero, heavily weighted to left/right wings
// so bubbles frame the center content naturally
const ZONES = [
  { xMin: 1,  xMax: 16, yMin: 8,  yMax: 85 }, // left wing
  { xMin: 82, xMax: 97, yMin: 8,  yMax: 85 }, // right wing
  { xMin: 18, xMax: 48, yMin: 5,  yMax: 18 }, // top-left
  { xMin: 50, xMax: 80, yMin: 5,  yMax: 18 }, // top-right
  { xMin: 20, xMax: 80, yMin: 75, yMax: 92 }, // bottom strip
];

// Zone weights — left/right wings get more spawns
const ZONE_WEIGHTS = [35, 35, 10, 10, 10];

function pickZone() {
  const total = ZONE_WEIGHTS.reduce((a, b) => a + b, 0);
  let r = Math.random() * total;
  for (let i = 0; i < ZONES.length; i++) {
    r -= ZONE_WEIGHTS[i];
    if (r <= 0) return ZONES[i];
  }
  return ZONES[0];
}

function formatPrice(price: number) {
  if (price >= 1000) return "$" + price.toLocaleString("en-US", { maximumFractionDigits: 0 });
  if (price >= 1)    return "$" + price.toFixed(2);
  return "$" + price.toFixed(4);
}

interface Bubble {
  id: number;
  coin: (typeof COINS)[0];
  x: number;
  y: number;
  zIndex: number;
  priceJitter: number;
  duration: number; // animation duration in ms
}

let uid = 0;

export function FloatingPriceTicker() {
  const [bubbles, setBubbles] = useState<Bubble[]>([]);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const spawnBubble = useCallback(() => {
    const coin   = COINS[Math.floor(Math.random() * COINS.length)];
    const zone   = pickZone();
    const x      = zone.xMin + Math.random() * (zone.xMax - zone.xMin);
    const y      = zone.yMin + Math.random() * (zone.yMax - zone.yMin);
    // ~50% on top of wallet cards (z=30), ~50% behind content (z=5)
    const zIndex = Math.random() > 0.5 ? 30 : 5;
    const priceJitter = (Math.random() - 0.5) * coin.price * 0.003;
    // Vary animation duration 1.8–2.6 s for organic feel
    const duration = 1800 + Math.random() * 800;

    setBubbles(prev => [...prev.slice(-12), { id: uid++, coin, x, y, zIndex, priceJitter, duration }]);
  }, []);

  const removeBubble = useCallback((id: number) => {
    setBubbles(prev => prev.filter(b => b.id !== id));
  }, []);

  useEffect(() => {
    // Spawn immediately, then keep scheduling
    spawnBubble();

    const loop = () => {
      const delay = 700 + Math.random() * 900; // 700–1600 ms between spawns
      timerRef.current = setTimeout(() => {
        spawnBubble();
        loop();
      }, delay);
    };
    loop();

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [spawnBubble]);

  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 pointer-events-none overflow-hidden"
    >
      {bubbles.map(b => {
        const isPos       = b.coin.change >= 0;
        const displayPrice = formatPrice(b.coin.price + b.priceJitter);
        const changeStr   = (isPos ? "+" : "") + b.coin.change.toFixed(2) + "%";

        return (
          <div
            key={b.id}
            onAnimationEnd={() => removeBubble(b.id)}
            style={{
              position:  "absolute",
              left:      `${b.x}%`,
              top:       `${b.y}%`,
              zIndex:    b.zIndex,
              animation: `float-price ${b.duration}ms ease-out forwards`,
              willChange: "transform, opacity",
            }}
          >
            <div
              style={{
                display:       "flex",
                alignItems:    "center",
                gap:           "6px",
                padding:       "6px 10px",
                borderRadius:  "10px",
                border:        "1px solid rgba(255,255,255,0.15)",
                backdropFilter:"blur(10px)",
                WebkitBackdropFilter: "blur(10px)",
                background:    "rgba(15, 29, 50, 0.82)",
                boxShadow:     "0 4px 20px rgba(0,0,0,0.35)",
                whiteSpace:    "nowrap",
              }}
            >
              {/* Coin color dot */}
              <span
                style={{
                  width: "8px", height: "8px",
                  borderRadius: "50%",
                  background: b.coin.color,
                  flexShrink: 0,
                  boxShadow: `0 0 6px ${b.coin.color}88`,
                }}
              />
              {/* Symbol */}
              <span style={{ fontSize: "11px", fontWeight: 700, color: "#fff", letterSpacing: "0.04em" }}>
                {b.coin.symbol}
              </span>
              {/* Price */}
              <span style={{ fontSize: "11px", fontFamily: "monospace", color: "#cbd5e1" }}>
                {displayPrice}
              </span>
              {/* Change */}
              <span style={{ fontSize: "11px", fontWeight: 600, color: isPos ? "#22c55e" : "#ef4444" }}>
                {changeStr}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
}
