import { Coin, formatPrice, formatLargeNumber, formatPercent, isPositive, COIN_COLORS } from "@/lib/mockData";
import { Sparkline } from "./Sparkline";

interface CoinRowProps {
  coin: Coin;
}

function ChangeCell({ value }: { value: number }) {
  const pos = isPositive(value);
  return (
    <span
      className={`text-sm font-medium ${pos ? "text-green-500" : "text-red-500"}`}
    >
      {formatPercent(value)}
    </span>
  );
}

export function CoinRow({ coin }: CoinRowProps) {
  const avatarColor = COIN_COLORS[coin.symbol] ?? "#374151";

  return (
    <tr className="border-b dark:border-white/5 border-gray-100 dark:hover:bg-white/[0.03] hover:bg-gray-50 transition-colors cursor-pointer">
      <td className="py-4 pl-4 pr-2 text-sm text-gray-500 font-mono w-10">
        {coin.rank}
      </td>
      <td className="py-4 px-3">
        <div className="flex items-center gap-3">
          <div
            className="w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold shrink-0"
            style={{ backgroundColor: avatarColor }}
          >
            {coin.symbol.slice(0, 2)}
          </div>
          <div>
            <div className="text-sm font-semibold dark:text-white text-gray-900">{coin.name}</div>
            <div className="text-xs text-gray-500">{coin.symbol}</div>
          </div>
        </div>
      </td>
      <td className="py-4 px-3 text-sm font-mono dark:text-white text-gray-900 text-right">
        {formatPrice(coin.price)}
      </td>
      <td className="py-4 px-3 text-right hidden sm:table-cell">
        <ChangeCell value={coin.change1h} />
      </td>
      <td className="py-4 px-3 text-right">
        <ChangeCell value={coin.change24h} />
      </td>
      <td className="py-4 px-3 text-right hidden md:table-cell">
        <ChangeCell value={coin.change7d} />
      </td>
      <td className="py-4 px-3 text-right hidden lg:table-cell text-sm dark:text-gray-400 text-gray-500 font-mono">
        {formatLargeNumber(coin.marketCap)}
      </td>
      <td className="py-4 px-3 text-right hidden xl:table-cell text-sm dark:text-gray-400 text-gray-500 font-mono">
        {formatLargeNumber(coin.volume24h)}
      </td>
      <td className="py-4 pl-3 pr-4 hidden sm:table-cell">
        <Sparkline data={coin.sparkline} positive={isPositive(coin.change7d)} />
      </td>
    </tr>
  );
}
