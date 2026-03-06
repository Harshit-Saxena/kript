import Link from "next/link";
import { Navbar } from "@/components/Navbar";

export const metadata = {
  title: "Sign Up | Krypex",
};

export default function SignUpPage() {
  return (
    <div className="min-h-screen dark:bg-navy-950 bg-gray-50">
      <Navbar />
      <main className="flex items-center justify-center py-20 px-4">
        <div className="w-full max-w-md">
          <div className="p-8 sm:p-10 rounded-3xl dark:bg-navy-800/60 bg-white dark:border-white/10 border border-gray-200 shadow-xl">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-extrabold dark:text-white text-gray-900">Create account</h1>
              <p className="mt-2 text-sm dark:text-gray-400 text-gray-600">
                Start your 7-day free trial · No credit card required
              </p>
            </div>

            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium dark:text-gray-300 text-gray-700 mb-1.5">
                    First name
                  </label>
                  <input
                    type="text"
                    placeholder="John"
                    className="w-full px-4 py-3 rounded-xl dark:bg-navy-900/60 bg-gray-50 dark:border-white/10 border border-gray-300 dark:text-white text-gray-900 dark:placeholder-gray-600 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 transition-all text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium dark:text-gray-300 text-gray-700 mb-1.5">
                    Last name
                  </label>
                  <input
                    type="text"
                    placeholder="Doe"
                    className="w-full px-4 py-3 rounded-xl dark:bg-navy-900/60 bg-gray-50 dark:border-white/10 border border-gray-300 dark:text-white text-gray-900 dark:placeholder-gray-600 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 transition-all text-sm"
                  />
                </div>
              </div>
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
                  placeholder="Min. 8 characters"
                  className="w-full px-4 py-3 rounded-xl dark:bg-navy-900/60 bg-gray-50 dark:border-white/10 border border-gray-300 dark:text-white text-gray-900 dark:placeholder-gray-600 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 transition-all text-sm"
                />
              </div>
              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-teal-400 hover:from-cyan-400 hover:to-teal-300 text-white font-semibold transition-all shadow-lg shadow-cyan-500/20 text-sm"
              >
                Create Free Account
              </button>
            </form>

            <p className="mt-4 text-center text-xs dark:text-gray-600 text-gray-400">
              By signing up you agree to our{" "}
              <a href="#" className="dark:text-gray-400 text-gray-600 hover:underline">Terms</a>{" "}
              and{" "}
              <a href="#" className="dark:text-gray-400 text-gray-600 hover:underline">Privacy Policy</a>
            </p>

            <p className="mt-4 text-center text-sm dark:text-gray-500 text-gray-500">
              Already have an account?{" "}
              <Link href="/login" className="dark:text-cyan-400 text-cyan-600 font-medium hover:underline">
                Log in
              </Link>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
