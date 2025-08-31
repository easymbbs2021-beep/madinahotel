import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Header: React.FC = () => {
  const { cartCount } = useCart();
  const activeLinkStyle = {
    color: '#D4AF37', // Royal Gold
    borderBottom: '2px solid #D4AF37',
  };

  return (
    <header className="bg-white/80 backdrop-blur-md shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          <div className="flex-shrink-0">
            <Link to="/" className="text-3xl font-display text-gray-900">
              Madina Hotel
            </Link>
          </div>
          <div className="flex items-center">
            <nav className="hidden md:flex items-center space-x-8">
                <NavLink to="/" style={({ isActive }) => isActive ? activeLinkStyle : {}} className="text-gray-600 hover:text-gold transition-colors duration-300 pb-2 font-medium">Home</NavLink>
                <NavLink to="/menu" style={({ isActive }) => isActive ? activeLinkStyle : {}} className="text-gray-600 hover:text-gold transition-colors duration-300 pb-2 font-medium">Menu</NavLink>
                <NavLink to="/gallery" style={({ isActive }) => isActive ? activeLinkStyle : {}} className="text-gray-600 hover:text-gold transition-colors duration-300 pb-2 font-medium">Gallery</NavLink>
                <NavLink to="/reviews" style={({ isActive }) => isActive ? activeLinkStyle : {}} className="text-gray-600 hover:text-gold transition-colors duration-300 pb-2 font-medium">Reviews</NavLink>
                <NavLink to="/history" style={({ isActive }) => isActive ? activeLinkStyle : {}} className="text-gray-600 hover:text-gold transition-colors duration-300 pb-2 font-medium">Order History</NavLink>
                <NavLink to="/contact" style={({ isActive }) => isActive ? activeLinkStyle : {}} className="text-gray-600 hover:text-gold transition-colors duration-300 pb-2 font-medium">Contact</NavLink>
            </nav>
            <Link to="/checkout" className="relative text-gray-600 hover:text-gold transition-colors duration-300 ml-8">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-3 bg-gold text-black text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
