const caseStudies = [
  {
    name: "LeCorn",
    status: "Live",
    statusColor: "bg-green-100 text-green-700",
    description:
      "We designed and developed a complete website for LeCorn, a startup snack and street-food brand. The project included a visually appealing menu with UX-focused navigation, franchise information pages, and a fully integrated contact system. The branding was developed to reflect the energetic and modern personality of the brand.",
    tags: ["Website Design", "Menu UX", "Branding"],
    icon: "🌽",
    bgColor: "from-yellow-400 to-orange-500",
    metrics: [
      { label: "Timeline", value: "4 weeks" },
      { label: "Pages", value: "12+" },
      { label: "Mobile First", value: "Yes" },
    ],
  },
  {
    name: "LeCaffee",
    status: "In Progress",
    statusColor: "bg-amber-100 text-amber-700",
    description:
      "LeCaffee is a coffee and takeaway concept that needed a website capable of showcasing their full-day menu — from morning pastries to evening specials. We built a scalable content system that allows easy updates to menu items, pricing, and seasonal offerings. The site was designed with SEO best practices from the ground up.",
    tags: ["Website Design", "Menu System", "SEO-ready"],
    icon: "☕",
    bgColor: "from-amber-600 to-brown-700",
    metrics: [
      { label: "Timeline", value: "6 weeks" },
      { label: "Menu Items", value: "50+" },
      { label: "SEO Ready", value: "Yes" },
    ],
  },
];

const capabilities = [
  "Brand Identity & Logo Design",
  "UI/UX Design & Prototyping",
  "Full-Stack Web Development",
  "E-Commerce Integration",
  "Content Management Systems",
  "SEO & Performance Optimisation",
  "Digital Marketing Campaigns",
  "Analytics & Reporting",
];

export default function CaseStudies() {
  return (
    <main>
      <section className="bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-blue-400 font-semibold text-sm uppercase tracking-widest">PORTFOLIO</span>
          <h1 className="text-4xl lg:text-5xl font-extrabold mt-3 mb-4">Case Studies</h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            At Le Software Solutions, we partner with businesses to create impactful, scalable, and visually stunning solutions across various industries.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="space-y-12">
          {caseStudies.map((cs, index) => (
            <div key={cs.name} className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-shadow overflow-hidden">
              <div className="grid lg:grid-cols-3">
                <div className={`bg-gradient-to-br ${cs.bgColor} p-12 flex items-center justify-center lg:min-h-0 min-h-40`}>
                  <div className="text-center">
                    <div className="text-6xl mb-3">{cs.icon}</div>
                    <div className="text-white font-bold text-xl">{cs.name}</div>
                  </div>
                </div>

                <div className="lg:col-span-2 p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <h2 className="text-2xl font-extrabold text-gray-900">{cs.name}</h2>
                    <span className={`text-xs font-semibold px-3 py-1 rounded-full ${cs.statusColor}`}>
                      {cs.status}
                    </span>
                  </div>

                  <p className="text-gray-600 leading-relaxed mb-6">{cs.description}</p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {cs.tags.map((tag) => (
                      <span key={tag} className="bg-blue-50 text-blue-700 text-xs font-medium px-3 py-1.5 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="grid grid-cols-3 gap-4 mb-6 p-4 bg-gray-50 rounded-xl">
                    {cs.metrics.map((m) => (
                      <div key={m.label} className="text-center">
                        <div className="font-bold text-gray-900 text-lg">{m.value}</div>
                        <div className="text-gray-500 text-xs mt-0.5">{m.label}</div>
                      </div>
                    ))}
                  </div>

                  <button className="inline-flex items-center gap-2 border border-blue-600 text-blue-600 px-5 py-2.5 rounded-xl text-sm font-semibold hover:bg-blue-50 transition-colors">
                    View Project
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-3xl p-10 text-white">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl font-extrabold mb-4">Our Capabilities</h2>
              <p className="text-blue-100 leading-relaxed mb-6">
                Every project we take on is approached with the same level of dedication and expertise. Here's what we bring to every engagement.
              </p>
              <div className="grid grid-cols-2 gap-3">
                {capabilities.map((c) => (
                  <div key={c} className="flex items-center gap-2 text-sm text-blue-100">
                    <svg className="w-4 h-4 text-blue-300 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    {c}
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white/10 rounded-2xl p-8 backdrop-blur-sm">
              <h3 className="text-xl font-bold mb-4">Start Your Project</h3>
              <p className="text-blue-100 text-sm leading-relaxed mb-6">
                Ready to create something amazing? Let's discuss how we can help your business achieve its digital goals.
              </p>
              <a
                href="/contact"
                className="block w-full text-center bg-white text-blue-700 font-semibold py-3 rounded-xl hover:bg-blue-50 transition-colors"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
