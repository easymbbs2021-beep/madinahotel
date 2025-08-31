
import React from 'react';
import { RESTAURANT_DETAILS } from '../constants';

const ContactPage: React.FC = () => {
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert("Thank you for your message! We will get back to you shortly.");
        // Here you would typically handle form submission, e.g., send to an API
    };

    return (
        <div className="container mx-auto py-20 px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                <h1 className="text-5xl font-display text-gray-900">Get In Touch</h1>
                <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">We would love to hear from you. For reservations, inquiries, or feedback, please reach out to us.</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                {/* Contact Info & Map */}
                <div className="lg:col-span-1 space-y-8">
                    <div>
                        <h3 className="text-2xl font-display text-gold mb-2">Location</h3>
                        <p className="text-gray-700">{RESTAURANT_DETAILS.address}</p>
                    </div>
                    <div>
                        <h3 className="text-2xl font-display text-gold mb-2">Contact</h3>
                        <p className="text-gray-700">Phone: {RESTAURANT_DETAILS.contact}</p>
                        <p className="text-gray-700">Email: {RESTAURANT_DETAILS.email}</p>
                    </div>
                    <div>
                        <h3 className="text-2xl font-display text-gold mb-2">Hours</h3>
                        <p className="text-gray-700">Daily: 12:00 PM - 12:00 AM</p>
                        <p className="text-gray-700">Breakfast: 7:00 AM - 11:00 AM</p>
                    </div>
                    <div className="h-64 rounded-lg overflow-hidden border-2 border-gold/30">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.595561081514!2d78.47202731536768!3d17.38280598808127!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb978a783b381b%3A0x3312384119f1807!2sMadina%20Hotel!5e0!3m2!1sen!2sin!4v1689335894123!5m2!1sen!2sin"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen={false}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Madina Hotel Location"
                        ></iframe>
                    </div>
                </div>

                {/* Contact Form */}
                <div className="lg:col-span-2 bg-white p-8 rounded-lg border border-gray-200 shadow-xl">
                    <h2 className="text-3xl font-display text-gray-900 mb-6">Send Us a Message</h2>
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                                <input type="text" id="name" name="name" required className="mt-1 block w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-gold focus:border-gold" />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                                <input type="email" id="email" name="email" required className="mt-1 block w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-gold focus:border-gold" />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                            <input type="text" id="subject" name="subject" required className="mt-1 block w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-gold focus:border-gold" />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                            <textarea id="message" name="message" rows={5} required className="mt-1 block w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-gold focus:border-gold"></textarea>
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-gold text-black font-bold py-3 px-4 rounded-md hover:bg-yellow-500 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors text-lg"
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;