
import React from 'react';

const PrivacyPolicyPage: React.FC = () => {
  return (
    <div className="container mx-auto py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto prose prose-p:text-gray-600 prose-h2:text-gold prose-h1:text-gray-900">
        <h1>Privacy Policy</h1>
        <p><em>Last Updated: {new Date().toLocaleDateString()}</em></p>
        
        <p>Madina Hotel ("us", "we", or "our") operates the Madina Hotel website (the "Service"). This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our Service and the choices you have associated with that data.</p>

        <h2>Information Collection and Use</h2>
        <p>We collect several different types of information for various purposes to provide and improve our Service to you. When you place an order, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you ("Personal Data"). Personally identifiable information may include, but is not limited to: Name, Phone Number, and Address.</p>

        <h2>Use of Data</h2>
        <p>Madina Hotel uses the collected data for various purposes: to process and manage your orders for delivery, to notify you about the status of your order, to provide customer care and support, and to comply with legal obligations.</p>

        <h2>Security of Data</h2>
        <p>The security of your data is important to us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security.</p>

        <h2>Changes to This Privacy Policy</h2>
        <p>We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes.</p>

        <h2>Contact Us</h2>
        <p>If you have any questions about this Privacy Policy, please contact us.</p>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;