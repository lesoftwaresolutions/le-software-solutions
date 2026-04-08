const values = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: "Trust & Reliability",
    desc: "We deliver on our promises, every time. Our clients trust us with their most critical digital assets.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "Innovation First",
    desc: "We embrace cutting-edge technologies to keep our clients ahead of the competition.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    title: "Client-Centric",
    desc: "Your success is our success. We collaborate closely with you to understand your unique needs.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    title: "Measurable Results",
    desc: "We focus on real impact — every solution we build is designed to deliver measurable business outcomes.",
  },
];

const team = [
  { name: "Alex Johnson", role: "CEO & Founder", initials: "AJ" },
  { name: "Sophie Williams", role: "Lead Developer", initials: "SW" },
  { name: "Marcus Chen", role: "UX/UI Designer", initials: "MC" },
  { name: "Priya Patel", role: "Digital Marketing Lead", initials: "PP" },
];

export default function About() {
  return (
    <main>
      <section className="bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-blue-400 font-semibold text-sm uppercase tracking-widest">ABOUT US</span>
          <h1 className="text-4xl lg:text-5xl font-extrabold mt-3">About Us</h1>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-blue-600 font-semibold text-sm uppercase tracking-widest">OUR STORY</span>
              <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 mt-3 mb-6">
                Building Smarter Solutions — SaaS Experts
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Le Software Solutions is a next-generation technology startup driven by a single purpose — to help businesses thrive through smart, scalable, and user-focused software. As a young and agile company, we bring fresh thinking, modern design, and cutting-edge technology to every project.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                Our journey began with a simple belief: that software should be powerful yet simple, flexible yet reliable. We're building a brand that redefines how businesses adopt and benefit from SaaS platforms — with a focus on real impact and measurable results.
              </p>
              <div className="flex gap-6">
                <div>
                  <div className="text-3xl font-extrabold text-blue-600">50+</div>
                  <div className="text-gray-500 text-sm mt-1">Projects Delivered</div>
                </div>
                <div className="w-px bg-gray-200" />
                <div>
                  <div className="text-3xl font-extrabold text-blue-600">30+</div>
                  <div className="text-gray-500 text-sm mt-1">Happy Clients</div>
                </div>
                <div className="w-px bg-gray-200" />
                <div>
                  <div className="text-3xl font-extrabold text-blue-600">5+</div>
                  <div className="text-gray-500 text-sm mt-1">Years Experience</div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-10 flex items-center justify-center">
              <div className="text-center">
                <div className="w-24 h-24 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <span className="text-white font-extrabold text-4xl">L</span>
                </div>
                <div className="font-bold text-2xl text-gray-900">Le Software Solutions</div>
                <div className="text-gray-500 mt-2">Hastings, East Sussex, UK</div>
                <div className="mt-6 flex flex-wrap gap-2 justify-center">
                  {["SaaS", "Web Dev", "Digital Marketing", "SEO", "Analytics", "Branding"].map((tag) => (
                    <span key={tag} className="bg-blue-100 text-blue-700 text-xs font-medium px-3 py-1 rounded-full">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 mb-4">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To empower businesses of all sizes with powerful, user-friendly digital solutions that drive growth, improve efficiency, and deliver measurable results in the ever-evolving digital landscape.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
              <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center text-indigo-600 mb-4">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                To become the leading digital transformation partner for SMBs across the UK and beyond, recognised for our innovation, quality, and commitment to our clients' long-term success.
              </p>
            </div>
          </div>

          <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-12">Our Core Values</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <div key={v.title} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 mb-4">
                  {v.icon}
                </div>
                <h4 className="font-bold text-gray-900 mb-2">{v.title}</h4>
                <p className="text-gray-500 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-12">Meet Our Team</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {team.map((member) => (
              <div key={member.name} className="text-center group">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white font-bold text-xl mx-auto mb-3 group-hover:shadow-lg group-hover:shadow-blue-200 transition-shadow">
                  {member.initials}
                </div>
                <div className="font-semibold text-gray-900">{member.name}</div>
                <div className="text-sm text-gray-500 mt-0.5">{member.role}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
