import React from 'react';
import { Link } from 'react-router-dom';
import { RESTAURANT_DETAILS } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 text-gray-600 mt-20">
      <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <h3 className="text-3xl font-display text-black mb-2">Madina Hotel</h3>
            <p className="text-gray-500">Crafting Culinary Heritage Since 1947.</p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-black mb-4 tracking-wider uppercase">Explore</h4>
            <ul className="space-y-2">
              <li><Link to="/menu" className="hover:text-gold transition-colors">Menu</Link></li>
              <li><Link to="/gallery" className="hover:text-gold transition-colors">Gallery</Link></li>
              <li><Link to="/reviews" className="hover:text-gold transition-colors">Reviews</Link></li>
              <li><Link to="/history" className="hover:text-gold transition-colors">Order History</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-black mb-4 tracking-wider uppercase">Information</h4>
            <ul className="space-y-2">
              <li><Link to="/contact" className="hover:text-gold transition-colors">Contact Us</Link></li>
              <li><Link to="/terms" className="hover:text-gold transition-colors">Terms & Conditions</Link></li>
              <li><Link to="/privacy" className="hover:text-gold transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-black mb-4 tracking-wider uppercase">Contact</h4>
            <p>{RESTAURANT_DETAILS.address}</p>
            <p className="mt-2">{RESTAURANT_DETAILS.contact}</p>
            <p className="mt-2">{RESTAURANT_DETAILS.email}</p>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-200 pt-8 flex flex-col sm:flex-row justify-between items-center text-sm">
          <p className="text-gray-500">&copy; {new Date().getFullYear()} Madina Hotel. All Rights Reserved.</p>
          <div className="flex space-x-4 mt-4 sm:mt-0">
             <a href="#" className="hover:text-gold transition-colors">Facebook</a>
             <a href="#" className="hover:text-gold transition-colors">Instagram</a>
             <a href="#" className="hover:text-gold transition-colors">Twitter</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
