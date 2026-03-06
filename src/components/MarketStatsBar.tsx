import { MARKET_STATS, isPositive, formatPercent } from "@/lib/mockData";

export function MarketStatsBar() {
  const pos = isPositive(MARKET_STATS.marketCapChange);

  return (
    <div className="border-y dark:border-white/10 border-gray-200 dark:bg-navy-900/40 bg-gray-50 py-2.5">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-center flex-wrap gap-x-6 gap-y-1">
          <StatItem
            label="Market Cap"
            value={MARKET_STATS.totalMarketCap}
            change={MARKET_STATS.marketCapChange}
            positive={pos}
          />
          <Divider />
          <StatItem label="24h Volume" value={MARKET_STATS.volume24h} />
          <Divider />
          <StatItem label="BTC Dominance" value={MARKET_STATS.btcDominance} />
          <Divider />
          <div className="flex items-center gap-2 text-xs">
            <span className="dark:text-gray-500 text-gray-500">Coins</span>
            <span className="dark:text-gray-300 text-gray-700 font-medium">20,433</span>
          </div>
          <Divider />
          <div className="flex items-center gap-2 text-xs">
            <span className="dark:text-gray-500 text-gray-500">Exchanges</span>
            <span className="dark:text-gray-300 text-gray-700 font-medium">783</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function Divider() {
  return <span className="hidden sm:block dark:text-white/10 text-gray-300 text-xs">|</span>;
}

function StatItem({
  label,
  value,
  change,
  positive,
}: {
  label: string;
  value: string;
  change?: number;
  positive?: boolean;
}) {
  return (
    <div className="flex items-center gap-1.5 text-xs">
      <span className="dark:text-gray-500 text-gray-500">{label}:</span>
      <span className="dark:text-gray-200 text-gray-800 font-semibold">{value}</span>
      {change !== undefined && positive !== undefined && (
        <span className={`font-medium ${positive ? "text-green-500" : "text-red-500"}`}>
          {formatPercent(change)}
        </span>
      )}
    </div>
  );
}
