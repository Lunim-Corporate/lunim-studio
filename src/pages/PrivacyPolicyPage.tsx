import React from 'react';

const PrivacyPolicyPage: React.FC = () => {
  return (
    <div className="pt-24 md:pt-16 bg-[#0f172a] text-white min-h-screen p-8">
      <div className="max-w-4xl mx-auto p-8">
        <h1 className="text-4xl font-bold mb-8 text-center" style={{ color: '#BBFEFF' }}>Privacy Policy</h1>

        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <p className="text-base text-gray-200 mb-6"><strong>Last Updated: July 31, 2025</strong></p>

          <h2 className="text-2xl font-semibold text-white mb-3">1. Introduction</h2>
          <p className="mb-4">Welcome to Lunim Innovation Studio. We are committed to protecting and respecting your privacy. This policy explains what personal data we collect from you, how we use it, and how we keep it safe.</p>
          <p className="mb-6">This policy applies to information we collect through our website, our contact forms, and during the delivery of our innovation services.</p>

          <h2 className="text-2xl font-semibold text-white mb-3">2. Who We Are</h2>
          <ul className="list-disc list-inside mb-6 space-y-1">
            <li><strong>Company Name:</strong> Risidio Ltd. T/A Lunim Innovation Studio</li>
            <li><strong>Phone Number:</strong> 020 3051 9057</li>
            <li><strong>Contact for Privacy Queries:</strong> hello@lunim.io</li>
            <li><strong>Registered Address:</strong> 124 City Road, London, England, EC1V 2NX</li>
          </ul>

          <h2 className="text-2xl font-semibold text-white mb-3">3. Information We Collect</h2>
          <h3 className="text-xl font-medium text-white mb-2">Information You Give Us Directly:</h3>
          <p className="mb-4">When you use our "Contact Us" form to make an enquiry, we will collect that information.</p>

          <h3 className="text-xl font-medium text-white mb-2">Information We Collect During Our Services:</h3>
          <p className="mb-4">During our workshops and sprints, we may process personal data of client employees and stakeholders. This data is processed solely for the purpose of delivering the agreed-upon facilitation services.</p>

          <h3 className="text-xl font-medium text-white mb-2">Information We Collect Automatically:</h3>
          <p className="mb-6">We use analytics tools to improve our website. We may automatically collect information about your visit.</p>

          <h2 className="text-2xl font-semibold text-white mb-3">4. How We Use Your Information</h2>
          <p className="mb-4">We use the data we collect for the following purposes:</p>
          <ul className="list-disc list-inside mb-6 space-y-1">
            <li><strong>To Respond to You:</strong> To reply to your enquiries and provide you with information about our services.</li>
            <li><strong>To Provide Our Services:</strong> To carry out our obligations arising from any contracts entered into between you and us, such as facilitating workshops and developing prototypes.</li>
            <li><strong>To Improve Our Website:</strong> We use Google Analytics to understand how our visitors use our site, which will help us improve the user experience.</li>
            <li><strong>For Marketing:</strong> In the future, we may wish to send you marketing communications. You will be able to unsubscribe at any time.</li>
          </ul>

          <h2 className="text-2xl font-semibold text-white mb-3">5. Data Storage and Third Parties</h2>
          <p className="mb-4">We will never sell your personal data. We only share it with trusted third-party organisations that help us operate our business and deliver our services. These include:</p>
          <ul className="list-disc list-inside mb-6 space-y-1">
            <li><strong>Netlify:</strong> Our website hosting provider, which serves the website content to you.</li>
            <li><strong>Supabase:</strong> Our backend and database provider, where we securely store information from our contact form and data related to client projects.</li>
            <li><strong>Google (Analytics):</strong> In the future, we will use Google Analytics to process anonymous data about website usage.</li>
            <li><strong>Notion:</strong> We use Notion for internal project management, which may involve processing client information related to a project.</li>
          </ul>

          <h2 className="text-2xl font-semibold text-white mb-3">6. Cookies</h2>
          <p className="mb-6">Currently, our website does not use cookies. In the future, we may use them for essential website functionality and for analytics purposes. When we implement cookies, we will provide you with a tool to manage your consent preferences.</p>

          <h2 className="text-2xl font-semibold text-white mb-3">7. Changes to Our Privacy Policy</h2>
          <p className="mb-6">We may update this policy from time to time. Any changes will be posted on this page, and, where appropriate, we may notify you by email.</p>

          <h2 className="text-2xl font-semibold text-white mb-3">8. How to Contact Us</h2>
          <p className="mb-6">If you have any questions about our privacy policy or the information we hold about you, please contact us at hello@lunim.io.</p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;
