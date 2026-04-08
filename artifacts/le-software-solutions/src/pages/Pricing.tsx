import { Link } from "wouter";

const plans = [
  {
    name: "Basic",
    price: "£99",
    period: "/Month",
    tagline: '"Starter presence + support"',
    popular: false,
    color: "border-gray-200",
    features: [
      "Hosting/updates + 1 small content change/month",
      "Basic on-page SEO checks",
      "Contact form monitoring",
    ],
    cta: "Get Started",
    ctaStyle: "border border-blue-600 text-blue-600 hover:bg-blue-50",
  },
  {
    name: "Medium",
    price: "£199",
    period: "/Month",
    tagline: '"Small business growth"',
    popular: true,
    color: "border-blue-600",
    features: [
      "Everything in Basic +",
      "2-4 content changes/month",
      "Google Analytics/Search Console monitoring",
      "Monthly SEO checklist + simple report",
    ],
    cta: "Get Started",
    ctaStyle: "bg-blue-600 text-white hover:bg-blue-700",
  },
  {
    name: "Advanced",
    price: "£299",
    period: "/Month",
    tagline: '"Lead gen + SEO momentum"',
    popular: false,
    color: "border-gray-200",
    features: [
      "Everything in Medium +",
      "More edits (e.g., up to 6-8 tasks/month)",
      "Local SEO focus (schema + GBP checklist)",
      "Priority support",
    ],
    cta: "Get Started",
    ctaStyle: "border border-blue-600 text-blue-600 hover:bg-blue-50",
  },
];

const faqs = [
  {
    q: "Can I change my plan at any time?",
    a: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect from the next billing cycle.",
  },
  {
    q: "Is there a setup fee?",
    a: "There are no hidden setup fees. The price you see is what you pay each month.",
  },
  {
    q: "What counts as a 'content change'?",
    a: "A content change is any update to your website content — text, images, contact details, adding a blog post, etc.",
  },
  {
    q: "Do you offer custom plans?",
    a: "Yes! If your needs don't fit neatly into our packages, contact us and we'll create a bespoke solution.",
  },
];

export default function Pricing() {
  return (
    <main>
      <section className="bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-blue-400 font-semibold text-sm uppercase tracking-widest">PRICING & PLANS</span>
          <h1 className="text-4xl lg:text-5xl font-extrabold mt-3">Simple Plans, Powerful Value</h1>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6 items-stretch">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`bg-white rounded-2xl border-2 ${plan.color} shadow-sm flex flex-col ${plan.popular ? "shadow-blue-100 shadow-lg scale-[1.02]" : ""} relative`}
              >
                {plan.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span className="bg-blue-600 text-white text-xs font-bold px-4 py-1.5 rounded-full">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="p-8 pb-6">
                  <div className="mb-4">
                    <div className="text-3xl font-extrabold text-gray-900 inline-flex items-end gap-0.5">
                      {plan.price}
                      <span className="text-base font-semibold text-gray-500 mb-1">{plan.period}</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{plan.name}</h3>
                  <p className="text-gray-500 text-sm italic mb-6">{plan.tagline}</p>
                  <ul className="space-y-3">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5 text-sm text-gray-600">
                        <svg className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                        </svg>
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-8 pt-4 mt-auto">
                  <Link
                    href="/contact"
                    className={`block w-full text-center py-3 px-6 rounded-xl font-semibold transition-all duration-150 ${plan.ctaStyle}`}
                  >
                    {plan.cta}
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-gray-500 text-sm mt-6">
            All plans include a free initial consultation. No long-term contracts required.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-12">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {faqs.map((faq) => (
              <div key={faq.q} className="bg-gray-50 rounded-2xl p-6">
                <h4 className="font-semibold text-gray-900 mb-2">{faq.q}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-2xl lg:text-3xl font-extrabold mb-4">Not sure which plan is right for you?</h2>
          <p className="text-blue-100 mb-8">Talk to us — we'll help you find the perfect solution for your business needs.</p>
          <Link
            href="/contact"
            className="bg-white text-blue-700 font-semibold px-8 py-3.5 rounded-xl hover:bg-blue-50 transition-colors inline-block"
          >
            Get a Free Consultation
          </Link>
        </div>
      </section>
    </main>
  );
}
