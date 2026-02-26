import React from 'react';

export const metadata = {
  title: 'Terms & Conditions - Biodata Maker',
  description: 'Terms and Conditions for Biodata Maker app and website.',
};

const TermsAndConditions = () => {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-orange-700 mb-2">Terms & Conditions</h1>
      <p className="text-sm text-gray-500 mb-10">Last updated: December 2024</p>

      <div className="space-y-8 text-gray-700 leading-relaxed">
        <section>
          <h2 className="text-lg font-semibold text-orange-700 mb-3">Acceptance of Terms</h2>
          <p>
            By using TrueBiodata, you agree to these terms of services and our privacy policy.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-orange-700 mb-3">Use of Service</h2>
          <p>
            You may use our service to create marriage biodata for personal use. Commercial use requires prior
            written permission.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-orange-700 mb-3">User Responsibilities</h2>
          <p>
            You are responsible for the accuracy of information provided and must not use the service for illegal or
            harmful purposes.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-orange-700 mb-3">Limitation of Liability</h2>
          <p>
            TrueBiodata is provided &quot;as is&quot; without warranties. We are not liable for any damages arising from use of
            our service.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-orange-700 mb-3">Contact</h2>
          <p>
            For questions about these terms, contact us at{' '}
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

export default TermsAndConditions;
