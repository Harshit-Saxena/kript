export function About() {
  return (
    <section id="about" className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
            About <span className="bg-gradient-to-r from-cyan-500 to-teal-400 bg-clip-text text-transparent">Kript X</span>
          </h2>
          <p className="mt-6 text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
            Kript X was founded with a simple mission: make cryptocurrency trading
            accessible to everyone. We believe that the future of finance is
            decentralized, and we&apos;re building the tools to help you get there.
          </p>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
            With over 200 supported cryptocurrencies, institutional-grade
            security, and a user-friendly interface, Kript X is the platform of
            choice for both beginners and professional traders. Our team of
            experts works around the clock to ensure a seamless trading
            experience.
          </p>
          <div className="mt-12 grid grid-cols-3 gap-8">
            {[
              { value: "2M+", label: "Active Traders" },
              { value: "$5B+", label: "Daily Volume" },
              { value: "200+", label: "Cryptocurrencies" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-3xl font-bold bg-gradient-to-r from-cyan-500 to-teal-400 bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
