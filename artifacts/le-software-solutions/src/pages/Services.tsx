import { Link } from "wouter";

const services = [
  {
    number: "01",
    category: "WEB DEVELOPMENT",
    title: "Website Design & Development",
    subtitle: "Professional and responsive websites tailored for small businesses, startups, and e-commerce.",
    description: "Professional and responsive websites tailored for small businesses, startups, and e-commerce.",
    whatWeDo: [
      "Custom website designs with modern UI/UX",
      "WordPress development and block-based builds",
      "Responsive, mobile-first development",
      "E-commerce website solutions",
    ],
    whoFor: "Small businesses, startups, and growing brands looking for a professional online presence.",
    deliverables: [
      "Fully responsive website",
      "SEO-optimized pages",
      "Contact forms and integrations",
      "CMS setup for easy management",
    ],
    timeline: "2-6 weeks depending on complexity",
    color: "blue",
  },
  {
    number: "02",
    category: "E-COMMERCE",
    title: "E-Commerce Solutions",
    subtitle: "Fully integrated online stores with payment systems, inventory management, and seamless UX.",
    description: "We build powerful e-commerce platforms that convert visitors into customers with intuitive shopping experiences.",
    whatWeDo: [
      "Custom e-commerce store design",
      "Payment gateway integration",
      "Product management systems",
      "Shopping cart & checkout optimisation",
    ],
    whoFor: "Retail businesses and entrepreneurs looking to sell products or services online.",
    deliverables: [
      "Fully functional online store",
      "Payment integration",
      "Mobile-optimised shopping experience",
      "Order management dashboard",
    ],
    timeline: "3-8 weeks depending on product catalogue size",
    color: "indigo",
  },
  {
    number: "03",
    category: "DIGITAL MARKETING",
    title: "Digital Marketing",
    subtitle: "Strategic campaigns across all digital channels to grow your audience and increase conversions.",
    description: "Data-driven digital marketing strategies that target the right audience at the right time, maximising your ROI.",
    whatWeDo: [
      "Social media management",
      "Google Ads & PPC campaigns",
      "Email marketing campaigns",
      "Content marketing strategy",
    ],
    whoFor: "Businesses looking to increase their online presence and generate more leads.",
    deliverables: [
      "Comprehensive marketing plan",
      "Campaign management",
      "Monthly performance reports",
      "Conversion rate optimisation",
    ],
    timeline: "Ongoing monthly retainer",
    color: "violet",
  },
  {
    number: "04",
    category: "SEO",
    title: "Search Engine Optimisation",
    subtitle: "Strategies that drive organic traffic and boost your search engine rankings.",
    description: "Comprehensive SEO services that improve your website's visibility in search engines and attract high-quality organic traffic.",
    whatWeDo: [
      "Technical SEO audit and fixes",
      "On-page optimisation",
      "Keyword research & strategy",
      "Link building campaigns",
    ],
    whoFor: "Businesses that want sustainable, long-term organic growth from search engines.",
    deliverables: [
      "SEO audit report",
      "Keyword strategy document",
      "Monthly SEO checklist",
      "Rankings and traffic reports",
    ],
    timeline: "Results typically visible within 3-6 months",
    color: "green",
  },
  {
    number: "05",
    category: "DATA ANALYTICS",
    title: "Data Analytics",
    subtitle: "Turn raw data into actionable insights with our advanced analytics solutions.",
    description: "We help businesses harness the power of their data to make informed decisions and identify growth opportunities.",
    whatWeDo: [
      "Google Analytics setup & configuration",
      "Custom dashboard creation",
      "Data tracking implementation",
      "Business intelligence reporting",
    ],
    whoFor: "Data-driven businesses wanting to understand customer behaviour and performance metrics.",
    deliverables: [
      "Analytics implementation",
      "Custom reporting dashboards",
      "Monthly data insights reports",
      "Action recommendations",
    ],
    timeline: "2-4 weeks for setup, ongoing for reporting",
    color: "orange",
  },
  {
    number: "06",
    category: "BRANDING",
    title: "Branding & Identity",
    subtitle: "Create a powerful brand identity that resonates with your audience and sets you apart.",
    description: "We craft compelling brand identities that tell your story, connect with your audience, and stand out in your market.",
    whatWeDo: [
      "Logo design & brand guidelines",
      "Brand voice & messaging strategy",
      "Visual identity systems",
      "Brand collateral design",
    ],
    whoFor: "New businesses or established brands looking to refresh or reposition their identity.",
    deliverables: [
      "Logo suite (all formats)",
      "Brand guidelines document",
      "Colour & typography system",
      "Business card & stationery design",
    ],
    timeline: "2-4 weeks depending on scope",
    color: "pink",
  },
];

const colorMap: Record<string, string> = {
  blue: "bg-blue-50 text-blue-600",
  indigo: "bg-indigo-50 text-indigo-600",
  violet: "bg-violet-50 text-violet-600",
  green: "bg-green-50 text-green-600",
  orange: "bg-orange-50 text-orange-600",
  pink: "bg-pink-50 text-pink-600",
};

export default function Services() {
  return (
    <main>
      <section className="bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-blue-400 font-semibold text-sm uppercase tracking-widest">WHAT WE DO</span>
          <h1 className="text-4xl lg:text-5xl font-extrabold mt-3">What We Do</h1>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="space-y-16">
          {services.map((service, index) => (
            <div
              key={service.number}
              className={`grid lg:grid-cols-2 gap-12 items-start ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
            >
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-4xl font-black text-gray-100">{service.number}</span>
                  <span className="text-xs font-semibold text-blue-600 uppercase tracking-widest bg-blue-50 px-3 py-1 rounded-full">
                    {service.category}
                  </span>
                </div>
                <h2 className="text-2xl lg:text-3xl font-extrabold text-gray-900 mb-4">{service.title}</h2>
                <p className="text-gray-600 leading-relaxed mb-6">{service.description}</p>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">What we do</h4>
                  <ul className="space-y-2">
                    {service.whatWeDo.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-gray-600 text-sm">
                        <svg className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-1">Who it's for</h4>
                  <p className="text-gray-600 text-sm">{service.whoFor}</p>
                </div>

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-blue-600 text-white px-5 py-2.5 rounded-xl text-sm font-semibold hover:bg-blue-700 transition-colors"
                >
                  Request a Quote
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>

              <div className={`rounded-2xl p-8 ${colorMap[service.color]} bg-opacity-50`}>
                <div className={`rounded-xl p-4 mb-6 font-semibold text-sm ${colorMap[service.color]}`}>
                  {service.subtitle}
                </div>
                <div className="mb-5">
                  <h4 className="font-semibold text-gray-900 mb-3 text-sm uppercase tracking-wide">Deliverables</h4>
                  <ul className="space-y-2">
                    {service.deliverables.map((d) => (
                      <li key={d} className="flex items-start gap-2 text-sm text-gray-700">
                        <svg className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="border-t border-current border-opacity-20 pt-4">
                  <span className="text-xs font-semibold uppercase tracking-wide text-gray-500">Timeline</span>
                  <p className="text-sm text-gray-700 mt-1">{service.timeline}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
