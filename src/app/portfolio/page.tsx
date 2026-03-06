import { Navbar } from "@/components/Navbar";
import { WalletConnectRow } from "@/components/WalletConnectRow";
import { PremiumSection } from "@/components/PremiumSection";
import { Footer } from "@/components/Footer";

export const metadata = {
  title: "Crypto Portfolio Tracker | Krypex",
  description:
    "Track all your crypto wallets and exchanges in one place. Connect 300+ integrations including Binance, MetaMask, OKX, and more.",
};

const benefits = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
    title: "Real-time P&L Tracking",
    description: "See your profit and loss across all assets in real time. Advanced analytics with entry price tracking.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
      </svg>
    ),
    title: "AI Price Predictions",
    description: "Machine learning models analyze market trends and provide price forecasts for your holdings.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
      </svg>
    ),
    title: "Tax Report Generation",
    description: "Automatically generate tax reports for your crypto transactions. Export to CSV or PDF for your accountant.",
  },
];

export default function PortfolioPage() {
  return (
    <div className="min-h-screen dark:bg-navy-950 bg-gray-50">
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative overflow-hidden py-20 sm:py-28">
          <div className="absolute inset-0 dark:bg-gradient-to-b dark:from-cyan-500/5 dark:to-transparent bg-gradient-to-b from-cyan-50 to-transparent" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] dark:bg-cyan-500/8 bg-cyan-100/40 rounded-full blur-3xl" />
          <div className="relative max-w-4xl mx-auto px-4 text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold dark:text-white text-gray-900 tracking-tight mb-6">
              The Ultimate{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">
                Crypto Portfolio
              </span>{" "}
              Tracker
            </h1>
            <p className="text-lg dark:text-gray-400 text-gray-600 max-w-2xl mx-auto mb-10">
              Connect your wallets and exchanges to get a complete picture of
              your crypto portfolio. Track performance, analyze DeFi, and
              generate tax reports — all in one place.
            </p>
            <WalletConnectRow />
          </div>
        </section>

        {/* Benefits */}
        <section className="py-16 sm:py-20">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-2xl sm:text-3xl font-bold dark:text-white text-gray-900 text-center mb-12">
              Everything in One Dashboard
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {benefits.map((b) => (
                <div
                  key={b.title}
                  className="p-8 rounded-2xl dark:bg-white/[0.03] bg-white dark:border-white/10 border border-gray-200 hover:shadow-lg transition-all"
                >
                  <div className="w-12 h-12 rounded-xl dark:bg-cyan-500/10 bg-cyan-50 flex items-center justify-center dark:text-cyan-400 text-cyan-600 mb-5">
                    {b.icon}
                  </div>
                  <h3 className="text-lg font-semibold dark:text-white text-gray-900 mb-2">{b.title}</h3>
                  <p className="text-sm dark:text-gray-400 text-gray-600 leading-relaxed">{b.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <PremiumSection />
      </main>
      <Footer />
    </div>
  );
}
