
import React from 'react';
import { TESTIMONIALS } from '../constants';

const StarRating: React.FC<{ rating: number }> = ({ rating }) => (
    <div className="flex text-gold">
        {[...Array(5)].map((_, index) => (
            <svg
                key={index}
                className={`w-5 h-5 ${index < rating ? 'text-gold' : 'text-gray-600'}`}
                fill="currentColor"
                viewBox="0 0 20 20"
            >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.368 2.448a1 1 0 00-.364 1.118l1.287 3.957c.3.921-.755 1.688-1.54 1.118l-3.368-2.448a1 1 0 00-1.175 0l-3.368 2.448c-.784.57-1.838-.197-1.539-1.118l1.287-3.957a1 1 0 00-.364-1.118L2.05 9.384c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69L9.049 2.927z" />
            </svg>
        ))}
    </div>
);

const ReviewsPage: React.FC = () => {
    return (
        <div className="container mx-auto py-20 px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                <h1 className="text-5xl font-display text-white">Guest Testimonials</h1>
                <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">We are honored to share the experiences of our valued guests. Their words are a testament to the legacy we uphold.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {TESTIMONIALS.map((testimonial) => (
                    <div 
                        key={testimonial.id} 
                        className="bg-[#2C2C2C] p-8 rounded-lg border border-gray-700/50 shadow-lg shadow-black/20 flex flex-col"
                    >
                        <div className="flex-grow">
                            <p className="text-gray-300 italic">"{testimonial.review}"</p>
                        </div>
                        <div className="mt-6 pt-6 border-t border-gray-700/50">
                            <div className="flex items-center justify-between">
                                <p className="font-bold text-lg text-white">- {testimonial.name}</p>
                                <StarRating rating={testimonial.stars} />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ReviewsPage;