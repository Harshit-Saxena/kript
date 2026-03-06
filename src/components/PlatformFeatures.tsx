const features = [
  {
    number: "300+",
    label: "Wallets & Exchanges",
    description:
      "Connect all your crypto holdings in one place. Supports Binance, MetaMask, OKX, Coinbase, Kraken, and 290+ more.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a2.25 2.25 0 00-2.25-2.25H15a3 3 0 11-6 0H5.25A2.25 2.25 0 003 12m18 0v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6m18 0V9M3 12V9m18-3a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v3" />
      </svg>
    ),
    highlight: "Military-grade encryption · Read-only access",
  },
  {
    number: "1,000+",
    label: "DeFi Protocols",
    description:
      "Track your DeFi positions, liquidity pools, staking rewards, and yield farming across 100+ blockchains in real time.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z" />
      </svg>
    ),
    highlight: "10+ blockchains · Real-time P&L",
  },
  {
    number: "20,000+",
    label: "Cryptocurrencies",
    description:
      "Research any coin with live prices, market cap, historical charts, AI price predictions, and custom alerts.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    highlight: "AI predictions · Custom price alerts",
  },
];

export function PlatformFeatures() {
  return (
    <section className="py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold dark:text-white text-gray-900">
            Everything You Need to{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">
              Manage Crypto
            </span>
          </h2>
          <p className="mt-4 dark:text-gray-400 text-gray-600 max-w-2xl mx-auto">
            One app to track, trade, stake, and research all your digital assets
            across every wallet and exchange.
          </p>
        </div>

        {/* 3-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((f) => (
            <div
              key={f.label}
              className="group p-8 rounded-2xl dark:bg-white/[0.03] bg-white dark:border-white/10 border border-gray-200 dark:hover:border-cyan-500/30 hover:border-cyan-500/40 hover:shadow-lg hover:shadow-cyan-500/5 transition-all"
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-xl dark:bg-cyan-500/10 bg-cyan-50 flex items-center justify-center dark:text-cyan-400 text-cyan-600 mb-6">
                {f.icon}
              </div>

              {/* Big number */}
              <div className="text-5xl font-extrabold bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent mb-2">
                {f.number}
              </div>
              <div className="text-lg font-semibold dark:text-white text-gray-900 mb-3">
                {f.label}
              </div>
              <p className="text-sm dark:text-gray-400 text-gray-600 leading-relaxed mb-4">
                {f.description}
              </p>

              {/* Highlight tag */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full dark:bg-cyan-500/10 bg-cyan-50 dark:border-cyan-500/20 border border-cyan-200">
                <span className="w-1 h-1 rounded-full bg-cyan-400" />
                <span className="text-xs dark:text-cyan-400 text-cyan-600 font-medium">{f.highlight}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
