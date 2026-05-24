export default function RefundPolicy() {
  return (
    <main className="bg-gray-50 min-h-screen">
      <section className="bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-blue-400 font-semibold text-sm uppercase tracking-widest">Legal</span>
          <h1 className="text-4xl font-extrabold mt-3">Refund &amp; Cancellation Policy</h1>
          <p className="text-gray-300 mt-2 text-sm">Last updated: 1 January 2025</p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-10 space-y-10 text-gray-700 text-sm leading-relaxed">

            <div>
              <h2 className="text-lg font-bold text-gray-900 mb-3">1. Overview</h2>
              <p>
                This Refund and Cancellation Policy sets out the terms under which Le Software Solutions ("we", "us") will consider requests for refunds or cancellations across our services. We are committed to fair and transparent practices and handling all requests promptly and professionally.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-bold text-gray-900 mb-3">2. SaaS Subscriptions (LEHR and Other Software Products)</h2>
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 mb-4">
                <p className="text-blue-800 font-medium">
                  Subscriptions to our SaaS products (including LEHR) can be cancelled at any time through your account dashboard. No notice period is required.
                </p>
              </div>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <strong>Cancellation:</strong> You may cancel your subscription at any time by logging into your account dashboard and selecting the cancellation option. Your access will continue until the end of the current billing period.
                </li>
                <li>
                  <strong>No partial refunds:</strong> We do not provide partial refunds for unused days within a billing cycle. Upon cancellation, your account will remain active until the end of the period for which you have already paid.
                </li>
                <li>
                  <strong>Refunds within 7 days:</strong> If you cancel within 7 days of your first payment on a new subscription and have not actively used the service, you may be eligible for a full refund of that payment. Please contact us at <a href="mailto:info@lesoftwaresolutions.com" className="text-blue-600 hover:underline">info@lesoftwaresolutions.com</a> within that window.
                </li>
                <li>
                  <strong>Renewals:</strong> Subscriptions renew automatically each month. If you do not wish to renew, please cancel before the renewal date via your account dashboard.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-lg font-bold text-gray-900 mb-3">3. Bespoke Project Work</h2>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <strong>Deposits:</strong> Where a deposit is required to commence a project, this deposit is non-refundable once work has begun, as it compensates us for time already allocated and resources committed.
                </li>
                <li>
                  <strong>Work in progress:</strong> If a project is cancelled after work has commenced, you will be invoiced for all work completed up to the date of cancellation, in proportion to the agreed project fee.
                </li>
                <li>
                  <strong>Completed milestones:</strong> Payments made for completed and approved milestones are non-refundable.
                </li>
                <li>
                  <strong>No work commenced:</strong> If you cancel before any work has begun and no deposit has been taken, no charge will apply.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-lg font-bold text-gray-900 mb-3">4. Monthly Retainer Plans</h2>
              <ul className="list-disc pl-5 space-y-2">
                <li>Monthly retainer plans may be cancelled with 30 days' written notice sent to <a href="mailto:info@lesoftwaresolutions.com" className="text-blue-600 hover:underline">info@lesoftwaresolutions.com</a>.</li>
                <li>No refunds will be issued for the current month's retainer fee once work for that month has commenced.</li>
                <li>Unused monthly allowances do not roll over to subsequent months.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-lg font-bold text-gray-900 mb-3">5. Exceptions</h2>
              <p>
                Nothing in this policy affects your statutory rights under UK consumer law. Where a service is found to be materially defective or not as described, we will work with you to resolve the issue, which may include re-doing the work, a partial credit, or a refund at our discretion. Each case will be assessed individually.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-bold text-gray-900 mb-3">6. How to Request a Refund or Cancellation</h2>
              <p className="mb-3">To request a refund or to cancel a service, please contact us with the following details:</p>
              <ul className="list-disc pl-5 space-y-1.5">
                <li>Your full name and email address used to register or make payment.</li>
                <li>The service or subscription you wish to cancel or request a refund for.</li>
                <li>The reason for your request.</li>
              </ul>
              <p className="mt-3">
                Contact us at:{" "}
                <a href="mailto:info@lesoftwaresolutions.com" className="text-blue-600 hover:underline">info@lesoftwaresolutions.com</a><br />
                We aim to respond to all refund and cancellation requests within 3 business days.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-bold text-gray-900 mb-3">7. Contact Us</h2>
              <p>
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
