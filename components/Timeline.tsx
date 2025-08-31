
import React from 'react';

const timelineEvents = [
  { year: 1947, title: 'Grand Opening', description: 'Madina Hotel opens its doors, founded by Mr. Ahmed Hussain, bringing authentic Hyderabadi flavors to the heart of the city.', imageUrl: 'https://source.unsplash.com/400x300/?old-restaurant,black-and-white' },
  { year: 1965, title: 'A Landmark is Born', description: 'Became a beloved landmark, famous for our Haleem during Ramadan and Biryani that was second to none.', imageUrl: 'https://source.unsplash.com/400x300/?vintage-hyderabad,black-and-white' },
  { year: 1992, title: 'Passing the Torch', description: 'The second generation of the family takes over, preserving traditions while introducing subtle modern touches to the menu.', imageUrl: 'https://source.unsplash.com/400x300/?family-business,kitchen' },
  { year: 2024, title: 'Embracing the Future', description: 'Launching our digital presence to bring the timeless taste of Madina Hotel directly to your doorstep.', imageUrl: 'https://source.unsplash.com/400x300/?modern-restaurant-interior' },
];

const Timeline: React.FC = () => {
  return (
    <div className="relative max-w-4xl mx-auto">
      <div className="absolute left-0 top-0 h-full w-0.5 bg-amber-200 ml-3.5"></div>
      <div className="space-y-16">
        {timelineEvents.map((event, index) => (
          <div key={index} className="relative flex items-start">
            <div className="absolute left-0 top-1.5 z-10">
              <div className="w-8 h-8 bg-amber-800 rounded-full flex items-center justify-center">
                <div className="w-3 h-3 bg-white rounded-full"></div>
              </div>
            </div>
            <div className="ml-16 w-full">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="text-left">
                  <h3 className="text-3xl font-display font-bold text-slate-800">{event.year}</h3>
                  <h4 className="text-xl font-semibold text-amber-900 mt-1">{event.title}</h4>
                  <p className="mt-3 text-slate-600">{event.description}</p>
                </div>
                <div>
                  <img src={event.imageUrl} alt={event.title} className="rounded-lg shadow-lg w-full h-48 object-cover aspect-video" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;