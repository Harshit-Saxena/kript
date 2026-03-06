import { WalletConnectRow } from "./WalletConnectRow";
import { FloatingPriceTicker } from "./FloatingPriceTicker";

export function Hero() {
  return (
    <section className="relative overflow-hidden py-16 sm:py-24 lg:py-28">
      {/* Background glows */}
      <div className="absolute inset-0 dark:bg-gradient-to-b dark:from-cyan-500/5 dark:via-transparent dark:to-transparent bg-gradient-to-b from-cyan-50/80 via-transparent to-transparent" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] dark:bg-cyan-500/8 bg-cyan-200/30 rounded-full blur-3xl" />
      <div className="absolute top-32 left-1/4 w-[300px] h-[300px] dark:bg-teal-500/5 bg-teal-200/20 rounded-full blur-3xl" />
      <div className="absolute top-32 right-1/4 w-[300px] h-[300px] dark:bg-cyan-500/5 bg-cyan-200/20 rounded-full blur-3xl" />

      {/* Live price bubbles — pop in randomly, stay ~1s, disappear */}
      <FloatingPriceTicker />

      <div className="relative max-w-5xl mx-auto px-4 text-center" style={{ zIndex: 10 }}>
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full dark:bg-cyan-500/10 bg-cyan-50 dark:border-cyan-500/20 border border-cyan-200 mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
          <span className="text-xs font-semibold dark:text-cyan-400 text-cyan-600 uppercase tracking-wider">
            Trusted by 3M+ traders worldwide
          </span>
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight dark:text-white text-gray-900 leading-tight">
          Track All Your Wallets &amp;{" "}
          <span className="bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">
            Exchanges in One
          </span>{" "}
          Crypto App
        </h1>

        {/* Subheadline */}
        <p className="mt-6 max-w-2xl mx-auto text-lg dark:text-gray-400 text-gray-600 leading-relaxed">
          Connect your entire portfolio to track, buy, swap, and stake your
          assets. 300+ wallets and exchanges supported across 100+ blockchains.
        </p>

        {/* Wallet connector section */}
        <div className="mt-12">
          <WalletConnectRow />
        </div>

        {/* Stats row */}
        <div className="mt-14 grid grid-cols-3 gap-4 max-w-lg mx-auto">
          {[
            { value: "300+",   label: "Wallets & Exchanges" },
            { value: "20K+",   label: "Cryptocurrencies" },
            { value: "1,000+", label: "DeFi Protocols" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl font-extrabold bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">
                {stat.value}
              </div>
              <div className="text-xs dark:text-gray-500 text-gray-500 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
