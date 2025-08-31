import React from 'react';
import { useNavigate } from 'react-router-dom';
import { MenuItem } from '../types';
import { useCart } from '../context/CartContext';

interface MenuItemCardProps {
  item: MenuItem;
}

const MenuItemCard: React.FC<MenuItemCardProps> = ({ item }) => {
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const handleCardClick = () => {
    navigate(`/menu/${item.id}`);
  };

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    addToCart(item);
  };

  return (
    <div 
      className="bg-white rounded-lg border border-gray-200 overflow-hidden group transition-all duration-300 hover:shadow-xl hover:-translate-y-2 flex flex-col"
    >
      <div className="overflow-hidden cursor-pointer" onClick={handleCardClick}>
        <img src={item.imageUrl} alt={item.name} className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500" />
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-2xl font-bold font-display text-gray-900 cursor-pointer" onClick={handleCardClick}>{item.name}</h3>
        <p className="text-gray-600 mt-2 flex-grow">{item.description}</p>
        <div className="flex justify-between items-center mt-6">
          <span className="text-xl font-bold text-gold">₹{item.price.toFixed(2)}</span>
          <button 
            onClick={handleAddToCart}
            className="bg-gold text-black font-bold py-2 px-5 rounded-md text-sm hover:bg-yellow-500 transition-all transform hover:scale-105 duration-300"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default MenuItemCard;
