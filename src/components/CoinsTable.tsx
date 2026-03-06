import Link from "next/link";
import { Coin } from "@/lib/mockData";
import { CoinRow } from "./CoinRow";

interface CoinsTableProps {
  coins: Coin[];
  limit?: number;
  showSeeMore?: boolean;
}

export function CoinsTable({ coins, limit, showSeeMore = false }: CoinsTableProps) {
  const displayCoins = limit ? coins.slice(0, limit) : coins;

  return (
    <div className="overflow-x-auto rounded-2xl dark:border-white/10 border border-gray-200">
      <table className="w-full min-w-[700px]">
        <thead>
          <tr className="border-b dark:border-white/10 border-gray-200 dark:bg-navy-900/60 bg-gray-50">
            <th className="py-3 pl-4 pr-2 text-left text-xs font-semibold dark:text-gray-500 text-gray-500 uppercase tracking-wider w-10">
              #
            </th>
            <th className="py-3 px-3 text-left text-xs font-semibold dark:text-gray-500 text-gray-500 uppercase tracking-wider">
              Name
            </th>
            <th className="py-3 px-3 text-right text-xs font-semibold dark:text-gray-500 text-gray-500 uppercase tracking-wider">
              Price
            </th>
            <th className="py-3 px-3 text-right text-xs font-semibold dark:text-gray-500 text-gray-500 uppercase tracking-wider hidden sm:table-cell">
              1h %
            </th>
            <th className="py-3 px-3 text-right text-xs font-semibold dark:text-gray-500 text-gray-500 uppercase tracking-wider">
              24h %
            </th>
            <th className="py-3 px-3 text-right text-xs font-semibold dark:text-gray-500 text-gray-500 uppercase tracking-wider hidden md:table-cell">
              7d %
            </th>
            <th className="py-3 px-3 text-right text-xs font-semibold dark:text-gray-500 text-gray-500 uppercase tracking-wider hidden lg:table-cell">
              Market Cap
            </th>
            <th className="py-3 px-3 text-right text-xs font-semibold dark:text-gray-500 text-gray-500 uppercase tracking-wider hidden xl:table-cell">
              Volume (24h)
            </th>
            <th className="py-3 pl-3 pr-4 text-right text-xs font-semibold dark:text-gray-500 text-gray-500 uppercase tracking-wider hidden sm:table-cell">
              7d Chart
            </th>
          </tr>
        </thead>
        <tbody>
          {displayCoins.map((coin) => (
            <CoinRow key={coin.id} coin={coin} />
          ))}
        </tbody>
      </table>
      {showSeeMore && (
        <div className="py-4 text-center border-t dark:border-white/10 border-gray-200 dark:bg-navy-900/30 bg-gray-50">
          <Link
            href="/coins"
            className="text-sm font-medium dark:text-cyan-400 text-cyan-600 hover:underline"
          >
            See all {coins.length}+ cryptocurrencies →
          </Link>
        </div>
      )}
    </div>
  );
}
