import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function WalletNotFound() {
  return (
    <div className="min-h-screen dark:bg-navy-950 bg-gray-50">
      <Navbar />
      <main className="flex flex-col items-center justify-center py-32 px-4 text-center">
        <div className="text-6xl font-extrabold bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent mb-4">
          404
        </div>
        <h1 className="text-2xl font-bold dark:text-white text-gray-900 mb-2">Wallet Not Found</h1>
        <p className="dark:text-gray-400 text-gray-600 mb-8 max-w-sm">
          This wallet integration doesn&apos;t exist yet. Browse our supported wallets below.
        </p>
        <Link
          href="/portfolio"
          className="px-8 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-teal-400 text-white font-semibold"
        >
          View All Wallets
        </Link>
      </main>
      <Footer />
    </div>
  );
}
