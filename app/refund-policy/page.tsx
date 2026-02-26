import React from 'react';

export const metadata = {
  title: 'Refund Policy - Biodata Maker',
  description: 'Refund Policy for Biodata Maker app and website.',
};

const RefundPolicy = () => {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-orange-700 mb-2">Refund Policy</h1>
      <p className="text-sm text-gray-500 mb-10">Last updated: December 2024</p>

      <div className="space-y-8 text-gray-700 leading-relaxed">
        <section>
          <h2 className="text-lg font-semibold text-orange-700 mb-3">No Refund Policy</h2>
          <div className="border-l-4 border-red-400 bg-red-50 p-4 rounded-r-md">
            <p className="text-red-800">
              All sales are final. No refunds will be provided under any circumstances once payment is completed.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-orange-700 mb-3">Digital Products</h2>
          <p>
            All our services are digital products delivered instantly. Once you have access to templates and download
            capabilities, the transaction is considered complete and non-refundable.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-orange-700 mb-3">Service Issues</h2>
          <p>
            If you experience technical issues, we will provide support to resolve problems but will not issue refunds.
            Contact us for technical assistance only.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-orange-700 mb-3">Chargebacks</h2>
          <p>
            Unauthorized chargebacks will result in service access being blocked.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-orange-700 mb-3">Contact</h2>
          <p>
            For refund requests or questions, contact us at{' '}
            <a
              href="mailto:manikbiradar365@gmail.com"
              className="text-orange-600 hover:text-orange-800 underline"
            >
              manikbiradar365@gmail.com
            </a>
          </p>
        </section>
      </div>
    </div>
  );
};

export default RefundPolicy;
