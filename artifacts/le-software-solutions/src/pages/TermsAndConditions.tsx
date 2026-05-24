export default function TermsAndConditions() {
  return (
    <main className="bg-gray-50 min-h-screen">
      <section className="bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-blue-400 font-semibold text-sm uppercase tracking-widest">Legal</span>
          <h1 className="text-4xl font-extrabold mt-3">Terms and Conditions</h1>
          <p className="text-gray-300 mt-2 text-sm">Last updated: 1 January 2025</p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-10 space-y-10 text-gray-700 text-sm leading-relaxed">

            <div>
              <h2 className="text-lg font-bold text-gray-900 mb-3">1. Introduction</h2>
              <p>
                These Terms and Conditions ("Terms") govern your use of the website and services provided by Le Software Solutions, a sole trader registered in the United Kingdom ("we", "us", "our"). By accessing our website or engaging our services, you agree to be bound by these Terms. If you do not agree, please do not use our services.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-bold text-gray-900 mb-3">2. Our Services</h2>
              <p>
                Le Software Solutions provides software development, web design, digital marketing, branding, data analytics, SaaS products, and related digital services. The specific scope of work for each client engagement will be agreed in writing prior to commencement, including deliverables, timelines, and fees.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-bold text-gray-900 mb-3">3. Payments and Fees</h2>
              <ul className="list-disc pl-5 space-y-1.5">
                <li>All fees are quoted in British Pounds Sterling (GBP) and are exclusive of VAT unless stated otherwise.</li>
                <li>Payment terms will be specified in the relevant proposal or invoice. Standard payment terms are 14 days from invoice date.</li>
                <li>For subscription-based SaaS products, payments are processed monthly in advance via our secure payment provider (Stripe).</li>
                <li>We reserve the right to suspend services in the event of non-payment.</li>
                <li>All prices listed on our website are subject to change without notice.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-lg font-bold text-gray-900 mb-3">4. Intellectual Property</h2>
              <p className="mb-3">
                Upon full payment of all invoices, intellectual property rights in any bespoke work created specifically for the client will transfer to the client. Until full payment is received, all intellectual property remains the property of Le Software Solutions.
              </p>
              <p>
                Pre-existing materials, frameworks, tools, and third-party components used in delivering our services remain the property of their respective owners and are licensed, not transferred, to the client.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-bold text-gray-900 mb-3">5. Client Responsibilities</h2>
              <p className="mb-3">To enable us to deliver services effectively, clients agree to:</p>
              <ul className="list-disc pl-5 space-y-1.5">
                <li>Provide accurate, complete, and timely information and materials as required.</li>
                <li>Respond to requests for feedback, approval, or clarification within a reasonable timeframe (typically 5 business days).</li>
                <li>Ensure that any content or materials supplied to us do not infringe any third-party rights.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-lg font-bold text-gray-900 mb-3">6. Limitation of Liability</h2>
              <p>
                To the maximum extent permitted by applicable law, Le Software Solutions shall not be liable for any indirect, incidental, special, or consequential damages arising out of or in connection with the use of our services, including loss of revenue, profits, or data. Our total aggregate liability shall not exceed the total fees paid by the client in the three months immediately preceding the event giving rise to the claim.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-bold text-gray-900 mb-3">7. Confidentiality</h2>
              <p>
                Both parties agree to keep confidential any proprietary or sensitive information disclosed during the course of the engagement and not to disclose such information to any third party without prior written consent, except as required by law.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-bold text-gray-900 mb-3">8. Termination</h2>
              <p>
                Either party may terminate a project engagement by providing 30 days' written notice. In the event of termination, the client shall pay for all work completed up to the termination date. For SaaS subscriptions, please refer to our Refund and Cancellation Policy.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-bold text-gray-900 mb-3">9. Governing Law</h2>
              <p>
                These Terms shall be governed by and construed in accordance with the laws of England and Wales. Any disputes arising under or in connection with these Terms shall be subject to the exclusive jurisdiction of the courts of England and Wales.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-bold text-gray-900 mb-3">10. Changes to These Terms</h2>
              <p>
                We reserve the right to update these Terms at any time. Updated Terms will be posted on this page with a revised date. Continued use of our services following any changes constitutes your acceptance of the new Terms.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-bold text-gray-900 mb-3">11. Contact Us</h2>
              <p>
                For any questions regarding these Terms, please contact us:<br />
                <strong>Le Software Solutions</strong><br />
                Flat 3, 1 Stockleight Road, St Leonards on Sea, East Sussex, TN37 6DJ, UK<br />
                Email: <a href="mailto:info@lesoftwaresolutions.com" className="text-blue-600 hover:underline">info@lesoftwaresolutions.com</a><br />
                Phone: +44 7393 454245
              </p>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}
