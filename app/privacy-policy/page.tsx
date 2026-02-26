import React from 'react';

export const metadata = {
  title: 'Privacy Policy - Biodata Maker',
  description: 'Privacy Policy for Biodata Maker app and website.',
};

const PrivacyPolicy = () => {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-orange-700 mb-2">Privacy Policy</h1>
      <p className="text-sm text-gray-500 mb-10">Last updated: December 2024</p>

      <div className="space-y-8 text-gray-700 leading-relaxed">
        <section>
          <h2 className="text-lg font-semibold text-orange-700 mb-3">Information We Collect</h2>
          <p>
            We collect all information you provide including personal details, photos, family information, contact
            details, payment information, device data, IP addresses, and usage analytics.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-orange-700 mb-3">How We Use Information</h2>
          <p>
            We may use your information for service provision, marketing, analytics, legal compliance, and may share
            data with third-party partners, advertisers, and service providers as needed for business operations.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-orange-700 mb-3">Data Retention</h2>
          <p>
            We retain your data indefinitely for business purposes. Data may be stored on servers worldwide and
            accessed by our team and partners as required.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-orange-700 mb-3">Your Rights</h2>
          <p>
            By using our service, you consent to all data collection and usage practices outlined. Data deletion
            requests may not be honored due to business requirements.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-orange-700 mb-3">Contact</h2>
          <p>
            For privacy concerns, contact us at{' '}
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

export default PrivacyPolicy;
