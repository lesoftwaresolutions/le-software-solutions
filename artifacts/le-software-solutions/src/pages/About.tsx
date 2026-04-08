import { useState } from "react";
import { Link } from "wouter";

const commitments = [
  "Build reliable and future-ready SaaS applications",
  "Offer personalised solutions tailored to each client's needs",
  "Provide ongoing support to ensure long-term success",
  "Continuously innovate to stay ahead of the market",
];

export default function About() {
  const [visionExpanded, setVisionExpanded] = useState(false);

  return (
    <main>
      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-blue-400 font-semibold text-sm uppercase tracking-widest">ABOUT US</span>
          <h1 className="text-4xl lg:text-5xl font-extrabold mt-3">About Us</h1>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-blue-600 font-semibold text-sm uppercase tracking-widest">OUR STORY</span>
              <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 mt-3 mb-2 leading-tight">
                Building Smarter Solutions
              </h2>
              <p className="text-2xl font-bold text-cyan-500 mb-6">SaaS Experts</p>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Le Software Solutions is a next-generation technology startup driven by a single purpose — to help
                businesses thrive through smart, scalable, and user-focused software. As a young and agile company,
                we bring fresh thinking, modern design, and cutting-edge technology to every project.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                Our journey began with a simple belief: that software should be powerful yet simple, flexible yet
                reliable. We're building a brand that redefines how businesses adopt and benefit from SaaS
                platforms — with a focus on real impact and measurable results.
              </p>
              <div className="flex gap-6">
                <div>
                  <div className="text-3xl font-extrabold text-cyan-500">50+</div>
                  <div className="text-gray-500 text-sm mt-1">Projects Delivered</div>
                </div>
                <div className="w-px bg-gray-200" />
                <div>
                  <div className="text-3xl font-extrabold text-cyan-500">30+</div>
                  <div className="text-gray-500 text-sm mt-1">Happy Clients</div>
                </div>
                <div className="w-px bg-gray-200" />
                <div>
                  <div className="text-3xl font-extrabold text-cyan-500">5+</div>
                  <div className="text-gray-500 text-sm mt-1">Years Experience</div>
                </div>
              </div>
            </div>
            <div className="bg-slate-900 rounded-3xl p-10 flex items-center justify-center shadow-xl">
              <div className="text-center">
                <img
                  src="/images/logo.png"
                  alt="Le Software Solutions"
                  className="w-28 h-28 rounded-2xl object-cover mx-auto mb-6 shadow-lg shadow-cyan-500/20"
                />
                <div className="font-bold text-2xl text-white">Le Software Solutions</div>
                <div className="text-slate-400 mt-2">Hastings, East Sussex, UK</div>
                <div className="mt-6 flex flex-wrap gap-2 justify-center">
                  {["SaaS", "Web Dev", "Digital Marketing", "SEO", "Analytics", "Branding"].map((tag) => (
                    <span key={tag} className="bg-slate-800 text-cyan-400 text-xs font-medium px-3 py-1 rounded-full border border-slate-700">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-4">
            <span className="text-blue-400 font-semibold text-sm uppercase tracking-widest">OUR VISION & MISSION</span>
          </div>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-extrabold leading-tight mb-8">
                Revolutionising SaaS with<br />Smarter Approaches.
              </h2>
              <div className="space-y-6">
                <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                  <h3 className="text-cyan-400 font-bold text-lg mb-2">Vision</h3>
                  <p className="text-gray-300 leading-relaxed">
                    To be a leading force in creating intelligent SaaS platforms that transform the way businesses operate, compete, and grow.
                  </p>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                  <h3 className="text-cyan-400 font-bold text-lg mb-2">Mission</h3>
                  <p className="text-gray-300 leading-relaxed">
                    To deliver innovative, affordable, and scalable software solutions that empower startups, SMEs, and enterprises to achieve more with less effort. We aim to make advanced technology accessible for all, without complexity or unnecessary cost.
                  </p>
                </div>
              </div>
              <div className="mt-8">
                <Link
                  href="/contact"
                  className="inline-block bg-blue-600 hover:bg-blue-500 text-white font-semibold px-7 py-3 rounded-xl transition-colors"
                >
                  Learn More
                </Link>
              </div>
            </div>
            <div className="space-y-4">
              {[
                { title: "Trust & Reliability", desc: "We deliver on our promises, every time. Our clients trust us with their most critical digital assets." },
                { title: "Innovation First", desc: "We embrace cutting-edge technologies to keep our clients ahead of the competition." },
                { title: "Client-Centric", desc: "Your success is our success. We collaborate closely to understand your unique needs." },
                { title: "Measurable Results", desc: "Every solution we build is designed to deliver real, measurable business outcomes." },
              ].map((v) => (
                <div key={v.title} className="bg-white/5 border border-white/10 rounded-xl p-5 hover:border-cyan-400/30 transition-colors">
                  <h4 className="font-bold text-white mb-1">{v.title}</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Commitment */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-10 border border-blue-100">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600 mb-6">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-2xl font-extrabold text-gray-900 mb-2">Elevating Businesses through</h3>
              <p className="text-3xl font-extrabold text-blue-600 mb-6">Intelligent SaaS Platforms.</p>
              <ul className="space-y-3">
                {commitments.map((c) => (
                  <li key={c} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700 text-sm leading-relaxed">{c}</span>
                  </li>
                ))}
              </ul>
              <p className="text-gray-500 text-sm leading-relaxed mt-6">
                We believe that our success is measured by the growth and satisfaction of our clients.
              </p>
            </div>
            <div>
              <span className="text-blue-600 font-semibold text-sm uppercase tracking-widest">OUR COMMITMENT</span>
              <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 mt-3 mb-6">
                At Le Software Solutions, our commitment is to you.
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                We build lasting relationships with our clients by staying accountable, transparent, and genuinely invested in their success. Every engagement is a partnership, not just a transaction.
              </p>
              <Link
                href="/contact"
                className="inline-block bg-blue-600 hover:bg-blue-500 text-white font-semibold px-7 py-3 rounded-xl transition-colors"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Founder — sole trader */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-widest">THE VISIONARY</span>
            <h2 className="text-3xl font-extrabold text-gray-900 mt-3 mb-3">The Visionary Driving Success</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              A passionate innovator, designer, and strategist dedicated to helping businesses succeed.
            </p>
          </div>

          <div className="flex justify-center">
            <div className="bg-white rounded-3xl border border-gray-100 shadow-lg overflow-hidden max-w-sm w-full">
              {/* Founder photo */}
              <div className="w-full h-72 bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center overflow-hidden">
                <img
                  src="/images/charan-photo.png"
                  alt="Charan — Founder & CEO"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-extrabold text-gray-900">Charan</h3>
                <p className="text-blue-600 font-semibold text-sm mt-1">Founder &amp; CEO</p>
                <p className="text-gray-500 text-sm mt-3 leading-relaxed">
                  Building Le Software Solutions from the ground up — delivering smart, scalable digital solutions to businesses across the UK.
                </p>
                <div className="flex justify-center gap-3 mt-4">
                  {["SaaS", "Strategy", "Digital"].map((t) => (
                    <span key={t} className="bg-blue-50 text-blue-600 text-xs font-medium px-3 py-1 rounded-full">{t}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-extrabold mb-4">Boost Your Online Presence Today!</h2>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            We're making our mark in the digital world, one project at a time. Le Software Solutions is committed
            to delivering value and excellence in every collaboration.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-blue-600 hover:bg-blue-500 text-white font-semibold px-8 py-3.5 rounded-xl transition-colors"
          >
            Schedule Quick Call
          </Link>
        </div>
      </section>
    </main>
  );
}
