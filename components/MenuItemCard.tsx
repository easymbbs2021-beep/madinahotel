
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { MenuItem } from '../types';
import { useCart } from '../context/CartContext';

interface MenuItemCardProps {
  item: MenuItem;
}

const MenuItemCard: React.FC<MenuItemCardProps> = ({ item }) => {
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/menu/${item.id}`);
  };

  const handleAddToCartClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation(); // Prevent navigation when "Add to Cart" is clicked
    addToCart(item);
  };

  return (
    <div 
      className="bg-white rounded-lg border border-gray-200 overflow-hidden group transition-all duration-300 hover:shadow-xl hover:-translate-y-2 flex flex-col cursor-pointer"
      onClick={handleCardClick}
    >
      <div className="overflow-hidden">
        <img src={item.imageUrl} alt={item.name} className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500" />
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-2xl font-bold font-display text-gray-900">{item.name}</h3>
        <p className="text-gray-600 mt-2 flex-grow">{item.description}</p>
        <div className="flex justify-between items-center mt-6">
          <span className="text-xl font-bold text-gold">₹{item.price.toFixed(2)}</span>
          <button
            onClick={handleAddToCartClick}
            className="bg-gold text-black font-bold px-5 py-2 rounded-md hover:bg-yellow-500 transition-colors duration-300"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default MenuItemCard;