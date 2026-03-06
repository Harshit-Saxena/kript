import Link from "next/link";
import { Navbar } from "@/components/Navbar";

export const metadata = {
  title: "Log In | Krypex",
};

export default function LoginPage() {
  return (
    <div className="min-h-screen dark:bg-navy-950 bg-gray-50">
      <Navbar />
      <main className="flex items-center justify-center py-20 px-4">
        <div className="w-full max-w-md">
          <div className="p-8 sm:p-10 rounded-3xl dark:bg-navy-800/60 bg-white dark:border-white/10 border border-gray-200 shadow-xl">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-extrabold dark:text-white text-gray-900">Welcome back</h1>
              <p className="mt-2 text-sm dark:text-gray-400 text-gray-600">Log in to your Krypex account</p>
            </div>

            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium dark:text-gray-300 text-gray-700 mb-1.5">
                  Email address
                </label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full px-4 py-3 rounded-xl dark:bg-navy-900/60 bg-gray-50 dark:border-white/10 border border-gray-300 dark:text-white text-gray-900 dark:placeholder-gray-600 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 transition-all text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium dark:text-gray-300 text-gray-700 mb-1.5">
                  Password
                </label>
                <input
                  type="password"
                  placeholder="••••••••"
                  className="w-full px-4 py-3 rounded-xl dark:bg-navy-900/60 bg-gray-50 dark:border-white/10 border border-gray-300 dark:text-white text-gray-900 dark:placeholder-gray-600 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 transition-all text-sm"
                />
              </div>
              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center gap-2 dark:text-gray-400 text-gray-600 cursor-pointer">
                  <input type="checkbox" className="rounded" />
                  Remember me
                </label>
                <a href="#" className="dark:text-cyan-400 text-cyan-600 hover:underline">Forgot password?</a>
              </div>
              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-teal-400 hover:from-cyan-400 hover:to-teal-300 text-white font-semibold transition-all shadow-lg shadow-cyan-500/20 text-sm"
              >
                Log In
              </button>
            </form>

            <p className="mt-6 text-center text-sm dark:text-gray-500 text-gray-500">
              Don&apos;t have an account?{" "}
              <Link href="/signup" className="dark:text-cyan-400 text-cyan-600 font-medium hover:underline">
                Sign up free
              </Link>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
