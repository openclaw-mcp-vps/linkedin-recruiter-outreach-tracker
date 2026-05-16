export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'

  return (
    <main className="max-w-3xl mx-auto px-6 py-20">
      {/* Hero */}
      <section className="text-center mb-20">
        <span className="inline-block bg-[#58a6ff]/10 text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          AI-Powered Recruiter Tool
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Stop Guessing.<br />Start Getting Replies.
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          RecruiterTrack analyzes your LinkedIn outreach messages, tracks response rates, and gives you AI suggestions to dramatically improve your reply rate.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg transition-colors text-base"
        >
          Start for $15/mo
        </a>
        <p className="text-[#8b949e] text-sm mt-3">Cancel anytime. No contracts.</p>
      </section>

      {/* Features strip */}
      <section className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-20">
        {[
          { icon: '📊', title: 'Response Analytics', desc: 'See exactly which messages convert and which fall flat.' },
          { icon: '🤖', title: 'AI Suggestions', desc: 'Get instant rewrites that boost reply rates by up to 3x.' },
          { icon: '🧪', title: 'A/B Testing', desc: 'Test message variants and let data pick the winner.' }
        ].map((f) => (
          <div key={f.title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-2xl mb-3">{f.icon}</div>
            <h3 className="text-white font-semibold mb-1">{f.title}</h3>
            <p className="text-[#8b949e] text-sm">{f.desc}</p>
          </div>
        ))}
      </section>

      {/* Pricing */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff]/40 rounded-2xl p-8 max-w-sm mx-auto text-center">
          <p className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-2">Pro Plan</p>
          <p className="text-5xl font-bold text-white mb-1">$15</p>
          <p className="text-[#8b949e] text-sm mb-6">per month</p>
          <ul className="text-left space-y-3 mb-8">
            {[
              'Unlimited message tracking',
              'AI-powered rewrite suggestions',
              'A/B test up to 10 variants',
              'Response rate dashboard',
              'Message template library',
              'Email support'
            ].map((item) => (
              <li key={item} className="flex items-center gap-2 text-sm text-[#c9d1d9]">
                <span className="text-[#58a6ff] font-bold">✓</span> {item}
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-6 py-3 rounded-lg transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {[
            {
              q: 'How does the AI analysis work?',
              a: 'You paste your LinkedIn message into the dashboard. Our AI scores it on clarity, personalization, and call-to-action strength, then provides a rewritten version optimized for replies.'
            },
            {
              q: 'Do I need to connect my LinkedIn account?',
              a: 'No. RecruiterTrack works without any LinkedIn integration. You manually log messages and responses, keeping your account safe and compliant with LinkedIn\'s terms.'
            },
            {
              q: 'Can I cancel anytime?',
              a: 'Yes. Cancel with one click from your billing portal. You keep access until the end of your billing period with no questions asked.'
            }
          ].map((item) => (
            <div key={item.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <p className="text-white font-semibold mb-2">{item.q}</p>
              <p className="text-[#8b949e] text-sm leading-relaxed">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-[#8b949e] text-xs">
        &copy; {new Date().getFullYear()} RecruiterTrack. All rights reserved.
      </footer>
    </main>
  )
}
