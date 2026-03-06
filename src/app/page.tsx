import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { MarketStatsBar } from "@/components/MarketStatsBar";
import { CoinsTable } from "@/components/CoinsTable";
import { AllInOneTracker } from "@/components/AllInOneTracker";
import { PremiumSection } from "@/components/PremiumSection";
import { Footer } from "@/components/Footer";
import { COINS } from "@/lib/mockData";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen dark:bg-navy-950 bg-gray-50">
      <Navbar />
      <main>
        <Hero />
        <MarketStatsBar />

        {/* Featured Coins Table */}
        <section className="py-12 sm:py-16">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl sm:text-2xl font-bold dark:text-white text-gray-900">
                Top Cryptocurrencies by Market Cap
              </h2>
              <Link
                href="/coins"
                className="text-sm font-medium dark:text-cyan-400 text-cyan-600 hover:underline"
              >
                See all →
              </Link>
            </div>
            <CoinsTable coins={COINS} limit={7} showSeeMore />
          </div>
        </section>

        <AllInOneTracker />
        <PremiumSection />
      </main>
      <Footer />
    </div>
  );
}
