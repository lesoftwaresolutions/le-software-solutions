import { useState } from "react";
import { Link } from "wouter";

const services = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: "Web Development",
    desc: "Professional and responsive websites tailored for small businesses, startups, and e-commerce. Custom designs, WordPress development and E-commerce solutions.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
      </svg>
    ),
    title: "E-Commerce",
    desc: "Helping businesses sell online with optimised e-commerce platforms. Shopify & WooCommerce store setup, payment gateway integration & conversion rate optimisation.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
      </svg>
    ),
    title: "Digital Marketing & SEO",
    desc: "Boost your online presence and attract more customers with data-driven marketing. SEO, Social Media Marketing & Management and Google Ads & PPC campaigns.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    title: "Data Analytics & Business Insights",
    desc: "Make data-driven decisions with expert analysis and reporting. Business intelligence & reporting, customer behaviour insights, marketing trend analysis.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
    title: "Mobile App Development",
    desc: "We design and develop mobile applications with intuitive UI, robust functionality, and seamless performance — helping brands connect with customers on the go.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
      </svg>
    ),
    title: "Branding",
    desc: "From logo design to full brand identity systems, we ensure your brand stands out, resonates with your audience, and builds lasting recognition.",
  },
];

const stats = [
  { value: "50+", label: "Projects Delivered" },
  { value: "30+", label: "Happy Clients" },
  { value: "5+", label: "Years Experience" },
  { value: "99%", label: "Client Satisfaction" },
];

const testimonials = [
  {
    quote: "Le Software Solutions brought a fresh energy to our restaurant, and their innovative approach exceeded our expectations.",
    name: "Francis",
    company: "Tocos",
    role: "Restaurant Owner",
  },
  {
    quote: "The team delivered exactly what I envisioned for my brand identity. Creative and reliable!",
    name: "Lexy",
    company: "Coxtera",
    role: "Content Writer",
  },
  {
    quote: "Even as a startup, their professionalism and skill are top-notch. I look forward to working with them again.",
    name: "Robert Mathew",
    company: "",
    role: "Product Owner",
  },
];

const faqs = [
  {
    q: "What services does Le Software Solutions offer?",
    a: "We offer web development, e-commerce solutions, digital marketing & SEO, data analytics, mobile app development, and creative branding — all designed to help small and medium businesses grow online.",
  },
  {
    q: "How long does a typical website project take?",
    a: "Most websites are delivered within 2–6 weeks depending on complexity. E-commerce projects typically take 3–8 weeks. We'll give you a clear timeline during our initial consultation.",
  },
  {
    q: "Do you work with small businesses and startups?",
    a: "Absolutely. We specialise in working with small businesses, startups, and SMEs, providing enterprise-quality solutions at affordable prices.",
  },
  {
    q: "Can you help improve my existing website's SEO?",
    a: "Yes. We offer comprehensive SEO audits, on-page optimisation, keyword strategy, and ongoing monthly SEO management to help you rank higher and drive more organic traffic.",
  },
  {
    q: "What areas do you serve?",
    a: "We're based in Hastings, East Sussex, UK, and serve clients across the UK and internationally. All consultations can be done remotely.",
  },
  {
    q: "How do I get started?",
    a: "Simply get in touch via our Contact page or book a free consultation. We'll discuss your project, goals, and budget, then put together a tailored proposal.",
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-gray-200 rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-6 py-4 text-left bg-white hover:bg-gray-50 transition-colors"
      >
        <span className="font-semibold text-gray-900 text-sm pr-4">▶ {q}</span>
        <svg
          className={`w-5 h-5 text-gray-400 shrink-0 transition-transform ${open ? "rotate-180" : ""}`}
          fill="none" viewBox="0 0 24 24" stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {open && (
        <div className="px-6 pb-5 bg-white">
          <p className="text-gray-600 text-sm leading-relaxed">{a}</p>
        </div>
      )}
    </div>
  );
}

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-indigo-500 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-36">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-blue-600/20 border border-blue-500/30 rounded-full px-4 py-1.5 mb-6">
              <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
              <span className="text-blue-300 text-sm font-medium">Next-Generation Technology Startup</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
              Empowering Businesses with{" "}
              <span className="text-blue-400">Smart, Scalable,</span> and Innovative Digital Solutions!
            </h1>
            <p className="text-lg text-gray-300 mb-10 leading-relaxed">
              Le Software Solutions helps businesses grow with websites, SEO, and digital marketing.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="bg-blue-600 hover:bg-blue-500 text-white px-7 py-3.5 rounded-xl font-semibold transition-all duration-200 hover:shadow-lg hover:shadow-blue-500/25"
              >
                Get a Free Consultation
              </Link>
              <Link
                href="/services"
                className="border border-white/20 hover:border-white/40 text-white px-7 py-3.5 rounded-xl font-semibold transition-all duration-200 backdrop-blur-sm hover:bg-white/5"
              >
                Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-blue-600 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            {stats.map((s) => (
              <div key={s.label}>
                <div className="text-3xl font-extrabold">{s.value}</div>
                <div className="text-blue-100 text-sm mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-widest">OUR SERVICES</span>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 mt-3 mb-4">
              Ensure You Receive High-Quality Services
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-lg">
              We provide websites development, digital marketing, SEO, and analytics to help small businesses grow and succeed online.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <div
                key={s.title}
                className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 mb-4">
                  {s.icon}
                </div>
                <h3 className="font-bold text-gray-900 text-lg mb-2">{s.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Works */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-widest">FEATURED WORKS</span>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 mt-3 mb-4">
              Our Newest Ventures with Leading Companies
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              At Le Software Solutions, we partner with businesses to create impactful, scalable, and visually stunning solutions across various industries.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="group relative rounded-3xl overflow-hidden shadow-lg">
              <img
                src="/images/lecorn-case-study.jpg"
                alt="LeCorn project"
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent flex flex-col justify-end p-6">
                <span className="text-cyan-400 text-xs font-semibold uppercase tracking-widest mb-1">Mobile App</span>
                <h3 className="text-white text-xl font-extrabold">LeCorn</h3>
                <p className="text-gray-300 text-sm mt-1">Next-Generation Mobile Apps Development</p>
              </div>
            </div>
            <div className="group relative rounded-3xl overflow-hidden shadow-lg">
              <img
                src="/images/lecaffee-case-study.jpg"
                alt="LeCaffee project"
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent flex flex-col justify-end p-6">
                <span className="text-cyan-400 text-xs font-semibold uppercase tracking-widest mb-1">Branding</span>
                <h3 className="text-white text-xl font-extrabold">LeCaffee</h3>
                <p className="text-gray-300 text-sm mt-1">Creative Branding Solutions</p>
              </div>
            </div>
          </div>
          <div className="text-center mt-8">
            <Link
              href="/case-studies"
              className="inline-block border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-semibold px-7 py-3 rounded-xl transition-colors"
            >
              View All Case Studies
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-widest">TESTIMONIALS & REVIEWS</span>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 mt-3 mb-4">
              Hear From Our Happy Clients
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              As we build our portfolio, we are proud to start collaborations with forward-thinking businesses who believe in our potential. Here's what early partners and clients say:
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-white rounded-2xl p-7 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-5 italic">"{t.quote}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold text-sm">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 text-sm">{t.name}</div>
                    <div className="text-gray-400 text-xs">{t.company ? `${t.company} · ` : ""}{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-widest">FAQ</span>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 mt-3 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-500">
              Stay updated with insights, tips, and the latest trends in web development, digital marketing, and design — brought to you by Le Software Solutions.
            </p>
          </div>
          <div className="space-y-3">
            {faqs.map((faq) => (
              <FAQItem key={faq.q} q={faq.q} a={faq.a} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-extrabold mb-4">Boost Your Online Presence Today!</h2>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            We're making our mark in the digital world, one project at a time. From crafting innovative software solutions to building strong partnerships, Le Software Solutions is committed to delivering value and excellence in every collaboration.
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
