import Link from "next/link";

const features = [
  "Unlimited portfolio connections",
  "100,000+ transaction tracking",
  "Advanced P&L analysis",
  "AI-powered price predictions",
  "Tax report generation",
  "Priority 24/7 support",
  "Custom price alerts",
  "NFT portfolio tracking",
];

export function PremiumSection() {
  return (
    <section className="py-20 sm:py-28 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 dark:bg-gradient-to-br dark:from-cyan-500/5 dark:via-teal-500/3 dark:to-transparent bg-gradient-to-br from-cyan-50 via-teal-50/50 to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] dark:bg-cyan-500/5 bg-cyan-100/50 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4">
        <div className="max-w-5xl mx-auto rounded-3xl dark:bg-navy-800/60 bg-white dark:border-white/10 border border-gray-200 backdrop-blur-md overflow-hidden shadow-xl dark:shadow-navy-950/50">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            {/* Left: Feature list */}
            <div className="p-8 sm:p-12">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full dark:bg-cyan-500/15 bg-cyan-100 dark:border-cyan-500/20 border border-cyan-200 mb-6">
                <span className="text-xs font-bold dark:text-cyan-400 text-cyan-600 uppercase tracking-wider">
                  PRO
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-bold dark:text-white text-gray-900 mb-4">
                Start Your 7-Day{" "}
                <span className="bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">
                  Free Trial
                </span>
              </h2>
              <p className="dark:text-gray-400 text-gray-600 mb-8">
                Unlock the full power of Krypex Premium. Connect unlimited
                wallets, get AI insights, and generate tax reports — free for 7
                days.
              </p>

              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5">
                    <svg
                      className="w-5 h-5 text-green-500 shrink-0 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2.5}
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    <span className="text-sm dark:text-gray-300 text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right: Pricing card */}
            <div className="dark:bg-navy-850/80 bg-gray-50 dark:border-l dark:border-white/10 border-l border-gray-200 p-8 sm:p-12 flex flex-col justify-center">
              <div className="text-center mb-8">
                <div className="text-5xl font-extrabold dark:text-white text-gray-900 mb-2">
                  Free
                </div>
                <div className="dark:text-gray-400 text-gray-500 text-sm">
                  for 7 days, then{" "}
                  <span className="dark:text-gray-300 text-gray-700 font-semibold">$4.99/mo</span>
                </div>
              </div>

              <Link
                href="/portfolio"
                className="block w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-cyan-500 to-teal-400 hover:from-cyan-400 hover:to-teal-300 text-white font-bold text-center text-lg transition-all shadow-lg shadow-cyan-500/25 mb-4"
              >
                Start Free Trial
              </Link>

              <p className="text-center text-xs dark:text-gray-500 text-gray-500 mb-8">
                No credit card required · Cancel anytime
              </p>

              <div className="space-y-3">
                {[
                  { icon: "🔒", text: "Military-grade encryption" },
                  { icon: "👁️", text: "Read-only access — we can't touch your funds" },
                  { icon: "🔓", text: "Revoke access at any time" },
                ].map((item) => (
                  <div key={item.text} className="flex items-center gap-3 text-sm dark:text-gray-400 text-gray-600">
                    <span>{item.icon}</span>
                    <span>{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
