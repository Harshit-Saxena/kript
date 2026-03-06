import { notFound } from "next/navigation";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WalletIcon } from "@/components/WalletIcon";
import { WALLETS } from "@/lib/mockData";

export function generateStaticParams() {
  return WALLETS.map((w) => ({ wallet: w.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ wallet: string }> }) {
  const { wallet: slug } = await params;
  const wallet = WALLETS.find((w) => w.slug === slug);
  if (!wallet) return { title: "Wallet Not Found | Krypex" };
  return {
    title: `Connect ${wallet.name} | Krypex`,
    description: wallet.description,
  };
}

export default async function WalletConnectPage({ params }: { params: Promise<{ wallet: string }> }) {
  const { wallet: slug } = await params;
  const wallet = WALLETS.find((w) => w.slug === slug);
  if (!wallet) notFound();

  return (
    <div className="min-h-screen dark:bg-navy-950 bg-gray-50">
      <Navbar />
      <main className="max-w-5xl mx-auto px-4 py-12 sm:py-16">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm dark:text-gray-500 text-gray-500 mb-8">
          <Link href="/" className="dark:hover:text-gray-300 hover:text-gray-700 transition-colors">Home</Link>
          <span>/</span>
          <Link href="/portfolio" className="dark:hover:text-gray-300 hover:text-gray-700 transition-colors">Connect</Link>
          <span>/</span>
          <span className="dark:text-gray-300 text-gray-700">{wallet.name}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Left: Wallet info */}
          <div className="lg:col-span-2">
            <div className="sticky top-24">
              <div className="p-8 rounded-2xl dark:bg-white/[0.03] bg-white dark:border-white/10 border border-gray-200">
                <div className="flex flex-col items-center text-center">
                  <WalletIcon wallet={wallet.slug} size={64} />
                  <h1 className="mt-4 text-2xl font-bold dark:text-white text-gray-900">{wallet.name}</h1>
                  <p className="mt-2 text-sm dark:text-gray-400 text-gray-600">{wallet.tagline}</p>
                </div>

                <div className="mt-6 space-y-3">
                  {[
                    { icon: "🔒", text: "Military-grade encryption" },
                    { icon: "👁️", text: "Read-only — we can't move funds" },
                    { icon: "🔓", text: "Revoke access anytime" },
                  ].map((item) => (
                    <div key={item.text} className="flex items-center gap-2.5 text-sm dark:text-gray-400 text-gray-600">
                      <span>{item.icon}</span>
                      <span>{item.text}</span>
                    </div>
                  ))}
                </div>

                <button className="mt-6 w-full py-3 px-6 rounded-xl bg-gradient-to-r from-cyan-500 to-teal-400 hover:from-cyan-400 hover:to-teal-300 text-white font-semibold transition-all shadow-lg shadow-cyan-500/20">
                  Connect Now →
                </button>
              </div>
            </div>
          </div>

          {/* Right: Steps */}
          <div className="lg:col-span-3">
            <h2 className="text-xl font-bold dark:text-white text-gray-900 mb-2">
              How to Connect {wallet.name}
            </h2>
            <p className="text-sm dark:text-gray-400 text-gray-600 mb-8">{wallet.description}</p>

            <ol className="space-y-5">
              {wallet.steps.map((step, i) => (
                <li key={i} className="flex gap-4">
                  <div className="shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-cyan-500 to-teal-400 flex items-center justify-center text-white text-sm font-bold">
                    {i + 1}
                  </div>
                  <div className="flex-1 pt-0.5">
                    <h3 className="font-semibold dark:text-white text-gray-900 mb-1">{step.title}</h3>
                    <p className="text-sm dark:text-gray-400 text-gray-600 leading-relaxed">{step.description}</p>
                  </div>
                </li>
              ))}
            </ol>

            {/* FAQs */}
            <div className="mt-12">
              <h3 className="text-lg font-bold dark:text-white text-gray-900 mb-6">Frequently Asked Questions</h3>
              <div className="space-y-4">
                {wallet.faqs.map((faq, i) => (
                  <div key={i} className="p-5 rounded-xl dark:bg-white/[0.03] bg-white dark:border-white/10 border border-gray-200">
                    <h4 className="font-semibold dark:text-white text-gray-900 mb-2">{faq.question}</h4>
                    <p className="text-sm dark:text-gray-400 text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Other wallets */}
            <div className="mt-10 pt-8 border-t dark:border-white/10 border-gray-200">
              <p className="text-sm dark:text-gray-500 text-gray-500 mb-3">Connect other wallets</p>
              <div className="flex flex-wrap gap-2">
                {WALLETS.filter((w) => w.slug !== wallet.slug).map((w) => (
                  <Link
                    key={w.slug}
                    href={`/connect/${w.slug}`}
                    className="flex items-center gap-2 px-3 py-2 rounded-lg dark:bg-navy-800/60 bg-gray-100 dark:border-white/10 border border-gray-200 dark:hover:border-cyan-500/30 hover:border-cyan-500/40 transition-all text-xs font-medium dark:text-gray-300 text-gray-700"
                  >
                    <WalletIcon wallet={w.slug} size={16} />
                    {w.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
