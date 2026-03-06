import { Navbar } from "@/components/Navbar";
import { MarketStatsBar } from "@/components/MarketStatsBar";
import { CoinsTable } from "@/components/CoinsTable";
import { Footer } from "@/components/Footer";
import { COINS } from "@/lib/mockData";

export const metadata = {
  title: "Cryptocurrency Prices by Market Cap | Krypex",
  description:
    "Live cryptocurrency prices, market cap, volume and chart data for 20,000+ coins. Track Bitcoin, Ethereum, and thousands more on Krypex.",
};

export default function CoinsPage() {
  return (
    <div className="min-h-screen dark:bg-navy-950 bg-gray-50">
      <Navbar />
      <main>
        <div className="max-w-7xl mx-auto px-4 pt-10 pb-4">
          <h1 className="text-3xl sm:text-4xl font-bold dark:text-white text-gray-900 mb-2">
            Cryptocurrency Prices by Market Cap
          </h1>
          <p className="dark:text-gray-400 text-gray-600 text-sm">
            The global crypto market cap is{" "}
            <span className="dark:text-white text-gray-900 font-semibold">$2.41T</span>, a{" "}
            <span className="text-green-500 font-semibold">+1.23%</span> increase over the last day.
          </p>
        </div>
        <MarketStatsBar />
        <div className="max-w-7xl mx-auto px-4 py-8">
          {/* Filter tabs */}
          <div className="flex items-center gap-2 mb-6 flex-wrap">
            {["All", "DeFi", "Layer 1", "Layer 2", "Meme", "Stablecoins", "NFT"].map((tab, i) => (
              <button
                key={tab}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
                  i === 0
                    ? "bg-gradient-to-r from-cyan-500 to-teal-400 text-white"
                    : "dark:bg-navy-800/60 bg-white dark:border-white/10 border border-gray-200 dark:text-gray-400 text-gray-600 dark:hover:text-white hover:text-gray-900"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          <CoinsTable coins={COINS} />

          <p className="text-center text-sm dark:text-gray-600 text-gray-400 mt-6">
            Showing top {COINS.length} of 20,433 cryptocurrencies · Data updates every 60 seconds
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
