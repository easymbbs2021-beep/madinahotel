
import React from 'react';

const timelineEvents = [
  { year: 1947, title: 'Grand Opening', description: 'Madina Hotel opens its doors, founded by Mr. Ahmed Hussain, bringing authentic Hyderabadi flavors to the heart of the city.', imageUrl: 'https://source.unsplash.com/400x300/?old-restaurant,black-and-white' },
  { year: 1965, title: 'A Landmark is Born', description: 'Became a beloved landmark, famous for our Haleem during Ramadan and Biryani that was second to none.', imageUrl: 'https://source.unsplash.com/400x300/?vintage-hyderabad,black-and-white' },
  { year: 1992, title: 'Passing the Torch', description: 'The second generation of the family takes over, preserving traditions while introducing subtle modern touches to the menu.', imageUrl: 'https://source.unsplash.com/400x300/?family-business,kitchen' },
  { year: 2024, title: 'Embracing the Future', description: 'Launching our digital presence to bring the timeless taste of Madina Hotel directly to your doorstep.', imageUrl: 'https://source.unsplash.com/400x300/?modern-restaurant-interior,dark' },
];

const Timeline: React.FC = () => {
  return (
    <div className="relative max-w-4xl mx-auto py-10">
      <div className="absolute top-0 h-full w-0.5 bg-gold/30 left-1/2 -translate-x-1/2"></div>
      {timelineEvents.map((event, index) => (
        <div key={index} className={`mb-12 flex items-center w-full ${index % 2 === 0 ? 'flex-row-reverse' : ''}`}>
          <div className="w-1/2"></div>
          <div className="z-10">
            <div className="w-8 h-8 bg-gold rounded-full flex items-center justify-center">
              <div className="w-3 h-3 bg-[#F8F5F0] rounded-full"></div>
            </div>
          </div>
          <div className="w-1/2 px-8">
            <div className={`bg-white p-6 rounded-lg border border-gray-200 shadow-xl ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
              <p className="text-3xl font-display text-gold mb-2">{event.year}</p>
              <h4 className="text-xl font-bold text-gray-900 mb-2">{event.title}</h4>
              <p className="text-gray-600">{event.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Timeline;