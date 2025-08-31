
import React from 'react';

const TermsPage: React.FC = () => {
  return (
    <div className="container mx-auto py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto prose prose-p:text-gray-600 prose-h2:text-gold prose-h1:text-gray-900">
        <h1>Terms and Conditions</h1>
        <p><em>Last Updated: {new Date().toLocaleDateString()}</em></p>
        
        <p>Please read these Terms and Conditions ("Terms", "Terms and Conditions") carefully before using the Madina Hotel website (the "Service") operated by Madina Hotel ("us", "we", or "our"). Your access to and use of the Service is conditioned on your acceptance of and compliance with these Terms. These Terms apply to all visitors, users, and others who access or use the Service.</p>

        <h2>Online Orders</h2>
        <p>By placing an order through our website, you warrant that you are legally capable of entering into binding contracts and that the information you provide is accurate and complete. All orders are subject to availability and confirmation of the order price.</p>

        <h2>Payments</h2>
        <p>We use a third-party payment processor to handle all payments. We do not store your credit card details. Payment must be made at the time of ordering. We reserve the right to refuse any order you place with us.</p>

        <h2>Delivery</h2>
        <p>Delivery times are estimates and may vary. We utilize a third-party delivery service (Rapido) and are not responsible for delays or issues caused by the delivery service. We will, however, do our best to assist you in resolving any delivery issues.</p>
        
        <h2>Intellectual Property</h2>
        <p>The Service and its original content, features, and functionality are and will remain the exclusive property of Madina Hotel and its licensors. The Service is protected by copyright, trademark, and other laws of both India and foreign countries.</p>

        <h2>Limitation of Liability</h2>
        <p>In no event shall Madina Hotel, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the Service.</p>
        
        <h2>Changes</h2>
        <p>We reserve the right, at our sole discretion, to modify or replace these Terms at any time. What constitutes a material change will be determined at our sole discretion.</p>
        
        <h2>Contact Us</h2>
        <p>If you have any questions about these Terms, please contact us.</p>
      </div>
    </div>
  );
};

export default TermsPage;