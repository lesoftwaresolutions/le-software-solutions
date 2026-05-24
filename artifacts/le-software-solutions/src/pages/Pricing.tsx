import { Link } from "wouter";
import { useState } from "react";

const agencyPlans = [
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

const lehrFeatures = [
  "Digital Rota Builder",
  "Real-time Clock-in / Clock-out",
  "Staff Profiles & Records",
  "Leave & Absence Tracking",
  "WhatsApp Rota Export",
  "Manager Dashboard",
  "Email Support",
];

const lehrPlans = [
  {
    name: "Micro",
    staffRange: "Up to 5 Employees",
    staffLimit: "5",
    price: "£15",
    period: "/month",
    recommended: false,
  },
  {
    name: "Growth",
    staffRange: "Up to 15 Employees",
    staffLimit: "15",
    price: "£29",
    period: "/month",
    recommended: true,
  },
  {
    name: "Professional",
    staffRange: "Up to 30 Employees",
    staffLimit: "30",
    price: "£59",
    period: "/month",
    recommended: false,
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
  {
    q: "Can I cancel my LEHR subscription?",
    a: "Yes. LEHR subscriptions can be cancelled at any time directly through your account dashboard. You'll retain access until the end of your current billing period.",
  },
];

export default function Pricing() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <main>
      <section className="bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-blue-400 font-semibold text-sm uppercase tracking-widest">PRICING & PLANS</span>
          <h1 className="text-4xl lg:text-5xl font-extrabold mt-3">Simple Plans, Powerful Value</h1>
          <p className="text-gray-300 mt-4 max-w-2xl mx-auto">
            Whether you need ongoing website support or smart staff management software, we have a plan that fits your business.
          </p>
        </div>
      </section>

      {/* Agency Plans */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-extrabold text-gray-900">Website & Digital Services</h2>
            <p className="text-gray-500 mt-2 text-sm">Monthly retainer plans for ongoing website management and growth.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 items-stretch">
            {agencyPlans.map((plan) => (
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

      {/* LEHR SaaS Plans */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <img src="/images/lehr-logo.png" alt="LEHR logo" className="h-12 w-12 object-contain" />
              <span className="text-2xl font-extrabold text-gray-900">LEHR — Staff Management Software</span>
            </div>
            <p className="text-gray-500 max-w-xl mx-auto text-sm">
              AI-powered HR and Rota management for UK SMEs. Pick the plan that matches your team size.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 items-stretch">
            {lehrPlans.map((plan) => (
              <div
                key={plan.name}
                className={`rounded-2xl flex flex-col relative border-2 transition-all ${
                  plan.recommended
                    ? "border-blue-600 shadow-xl shadow-blue-100 scale-[1.02] bg-gradient-to-b from-blue-600 to-blue-700 text-white"
                    : "border-gray-200 bg-white shadow-sm"
                }`}
              >
                {plan.recommended && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span className="bg-white text-blue-600 text-xs font-bold px-4 py-1.5 rounded-full shadow">
                      Recommended
                    </span>
                  </div>
                )}
                <div className="p-8 pb-4">
                  <h3 className={`text-2xl font-extrabold mb-1 ${plan.recommended ? "text-white" : "text-gray-900"}`}>
                    {plan.name}
                  </h3>
                  <div className={`text-4xl font-extrabold mt-3 mb-1 ${plan.recommended ? "text-white" : "text-gray-900"}`}>
                    {plan.price}
                    <span className={`text-base font-semibold ml-1 ${plan.recommended ? "text-blue-200" : "text-gray-500"}`}>
                      {plan.period}
                    </span>
                  </div>

                  {/* Employee limit — the only differentiator */}
                  <div className={`mt-4 mb-6 flex items-center gap-2 rounded-xl px-4 py-3 ${plan.recommended ? "bg-white/15" : "bg-blue-50"}`}>
                    <svg className={`w-4 h-4 shrink-0 ${plan.recommended ? "text-blue-200" : "text-blue-500"}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span className={`text-sm font-semibold ${plan.recommended ? "text-white" : "text-blue-700"}`}>
                      {plan.staffRange}
                    </span>
                  </div>

                  <ul className="space-y-3">
                    {lehrFeatures.map((f) => (
                      <li key={f} className="flex items-start gap-2.5 text-sm">
                        <svg
                          className={`w-4 h-4 shrink-0 mt-0.5 ${plan.recommended ? "text-blue-200" : "text-blue-500"}`}
                          fill="none" viewBox="0 0 24 24" stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className={plan.recommended ? "text-blue-100" : "text-gray-600"}>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="p-8 pt-4 mt-auto space-y-3">
                  <a
                    href="#"
                    className={`block w-full text-center py-3 px-6 rounded-xl font-semibold transition-all duration-150 ${
                      plan.recommended
                        ? "bg-white text-blue-700 hover:bg-blue-50"
                        : "bg-blue-600 text-white hover:bg-blue-700"
                    }`}
                  >
                    Get Started
                  </a>
                  <p className={`text-xs text-center flex items-center justify-center gap-1 ${plan.recommended ? "text-blue-200" : "text-gray-400"}`}>
                    <svg className="w-3.5 h-3.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                    Secure payments via Stripe
                  </p>
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-gray-500 text-sm mt-6">
            Cancel anytime from your account dashboard. No long-term commitment required.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-12">Frequently Asked Questions</h2>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div key={faq.q} className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
                <button
                  className="w-full flex items-center justify-between px-6 py-5 text-left"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <span className="font-semibold text-gray-900 text-sm">{faq.q}</span>
                  <svg
                    className={`w-4 h-4 text-gray-400 shrink-0 transition-transform ${openFaq === i ? "rotate-180" : ""}`}
                    fill="none" viewBox="0 0 24 24" stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-5">
                    <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
                  </div>
                )}
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
