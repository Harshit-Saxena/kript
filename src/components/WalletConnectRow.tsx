"use client";

import Link from "next/link";
import { WalletIcon } from "./WalletIcon";

const wallets = [
  { slug: "binance", label: "Binance" },
  { slug: "metamask", label: "MetaMask" },
  { slug: "okx", label: "OKX Wallet" },
];

// "Other" card with a collage of small coin icons
function OtherWalletCard() {
  return (
    <Link
      href="/portfolio"
      className="group flex flex-col items-center justify-between p-5 rounded-2xl bg-white dark:bg-[#1a1a2e] border border-gray-200 dark:border-white/10 hover:border-cyan-500/40 transition-all w-[140px] min-h-[160px] shadow-lg hover:shadow-cyan-500/10"
    >
      {/* Collage of small coin dots */}
      <div className="w-16 h-16 rounded-2xl bg-gray-100 dark:bg-[#0d0d1a] flex items-center justify-center relative overflow-hidden mb-3">
        <div className="grid grid-cols-3 gap-1 p-2">
          {[
            "#627EEA", "#F7931A", "#0033AD",
            "#9945FF", "#26A17B", "#C2A633",
            "#0500FF", "#F3BA2F", "#E84142",
          ].map((color, i) => (
            <div
              key={i}
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: color }}
            />
          ))}
        </div>
      </div>
      <span className="text-sm font-semibold text-gray-900 dark:text-white mb-3">Other</span>
      <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gray-100 dark:bg-white/10 group-hover:bg-cyan-500/20 transition-colors w-full justify-center">
        <span className="text-xs font-bold text-gray-800 dark:text-white">Connect</span>
        <svg className="w-3.5 h-3.5 text-gray-800 dark:text-white" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
        </svg>
      </div>
    </Link>
  );
}

export function WalletConnectRow() {
  return (
    <div className="flex flex-col items-center gap-6 w-full max-w-2xl mx-auto">
      {/* Wallet cards */}
      <div className="flex flex-wrap justify-center gap-3">
        {wallets.map((w) => (
          <Link
            key={w.slug}
            href={`/connect/${w.slug}`}
            className="group flex flex-col items-center justify-between p-5 rounded-2xl bg-white dark:bg-[#1a1a2e] border border-gray-200 dark:border-white/10 hover:border-cyan-500/40 transition-all w-[140px] min-h-[160px] shadow-lg hover:shadow-cyan-500/10"
          >
            {/* Large wallet icon */}
            <div className="w-16 h-16 rounded-2xl bg-gray-100 dark:bg-[#0d0d1a] flex items-center justify-center mb-3">
              <WalletIcon wallet={w.slug} size={44} />
            </div>
            {/* Name */}
            <span className="text-sm font-semibold text-gray-900 dark:text-white mb-3">{w.label}</span>
            {/* Connect button */}
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gray-100 dark:bg-white/10 group-hover:bg-cyan-500/20 transition-colors w-full justify-center">
              <span className="text-xs font-bold text-gray-800 dark:text-white">Connect</span>
              <svg className="w-3.5 h-3.5 text-gray-800 dark:text-white" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </div>
          </Link>
        ))}
        <OtherWalletCard />
      </div>

      {/* Search bar */}
      <div className="relative w-full max-w-lg">
        <svg
          className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 dark:text-gray-500 text-gray-400"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
        </svg>
        <input
          type="text"
          placeholder="Search wallet addresses, assets on any blockchain"
          className="w-full pl-11 pr-4 py-3.5 rounded-xl dark:bg-[#1a1a2e] bg-white dark:border-white/10 border border-gray-200 dark:text-gray-300 text-gray-700 dark:placeholder-gray-600 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/40 transition-all text-sm"
        />
      </div>

      {/* Connect Portfolio CTA */}
      <Link
        href="/portfolio"
        className="px-10 py-4 rounded-full bg-gradient-to-r from-orange-400 to-orange-500 hover:from-orange-300 hover:to-orange-400 text-white font-bold text-base transition-all shadow-lg shadow-orange-500/30 hover:shadow-orange-500/50"
      >
        Connect Portfolio
      </Link>
    </div>
  );
}
