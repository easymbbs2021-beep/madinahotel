
import React from 'react';
import { Link } from 'react-router-dom';
import Timeline from '../components/Timeline';
import { MENU_ITEMS, GALLERY_IMAGES, TESTIMONIALS } from '../constants';
import MenuItemCard from '../components/MenuItemCard';

const HomePage: React.FC = () => {
  const specials = MENU_ITEMS.slice(0, 3);
  const galleryPreview = GALLERY_IMAGES.slice(0, 4);
  const testimonialPreview = TESTIMONIALS.slice(0, 3);

  return (
    <div className="bg-[#1C1C1C]">
      {/* Hero Section */}
      <section className="relative h-[80vh] bg-cover bg-center text-white" style={{ backgroundImage: "url('https://source.unsplash.com/1600x900/?luxury-indian-restaurant-dark')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="relative container mx-auto h-full flex flex-col justify-center items-center text-center px-4">
          <h1 className="text-5xl md:text-7xl font-display font-bold drop-shadow-2xl">A Legacy of Flavor Since 1947</h1>
          <p className="mt-4 text-lg md:text-xl max-w-3xl drop-shadow-lg text-gray-200">Experience the authentic taste of Hyderabad, crafted with passion and served with tradition for over seven decades.</p>
          <Link to="/menu" className="mt-10 bg-gold text-black font-bold py-3 px-10 rounded-md text-lg hover:bg-yellow-500 transition-all transform hover:scale-105 duration-300 shadow-lg">
            Explore Our Menu
          </Link>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-5xl font-display text-white mb-6">Our Cherished History</h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto mb-20">From a small eatery to a culinary icon, our journey is as rich as our biryani. Walk through the moments that made us who we are today.</p>
          <Timeline />
        </div>
      </section>
      
      {/* Chef's Specials Section */}
      <section className="bg-black/50 py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-5xl font-display text-white mb-16">Chef's Specials</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {specials.map(item => (
              <MenuItemCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </section>
      
       {/* Gallery Preview Section */}
      <section className="py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-5xl font-display text-white mb-16">Moments & Masterpieces</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {galleryPreview.map(image => (
              <div key={image.id} className="overflow-hidden rounded-lg shadow-lg">
                <img src={image.src} alt={image.alt} className="w-full h-64 object-cover transform hover:scale-110 transition-transform duration-500" />
              </div>
            ))}
          </div>
          <Link to="/gallery" className="mt-12 inline-block bg-transparent border-2 border-gold text-gold font-bold py-3 px-10 rounded-md text-lg hover:bg-gold hover:text-black transition-all duration-300">
            View Full Gallery
          </Link>
        </div>
      </section>
      
      {/* Testimonials Preview Section */}
      <section className="bg-black/50 py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-5xl font-display text-white mb-16">What Our Guests Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonialPreview.map(testimonial => (
              <div key={testimonial.id} className="bg-[#2C2C2C] p-8 rounded-lg border border-gray-700/50">
                <p className="text-gray-300 italic">"{testimonial.review}"</p>
                <div className="mt-4 text-gold flex justify-center">
                  {'★'.repeat(testimonial.stars)}
                </div>
                <p className="mt-4 font-bold text-white">- {testimonial.name}</p>
              </div>
            ))}
          </div>
           <Link to="/reviews" className="mt-12 inline-block bg-gold text-black font-bold py-3 px-10 rounded-md text-lg hover:bg-yellow-500 transition-all duration-300">
            Read More Reviews
          </Link>
        </div>
      </section>

    </div>
  );
};

export default HomePage;