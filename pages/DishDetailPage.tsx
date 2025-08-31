import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { MENU_ITEMS } from '../constants';
import { useCart } from '../context/CartContext';

const DishDetailPage: React.FC = () => {
  const { dishId } = useParams<{ dishId: string }>();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);

  const dish = MENU_ITEMS.find(item => item.id === dishId);

  if (!dish) {
    return (
      <div className="container mx-auto py-40 text-center">
        <h1 className="text-4xl font-display text-gray-900">Dish Not Found</h1>
        <p className="text-gray-600 mt-4">We couldn't find the dish you were looking for.</p>
        <Link to="/menu" className="mt-8 inline-block bg-gold text-black font-bold py-3 px-8 rounded-md hover:bg-yellow-500 transition-colors">
          Back to Menu
        </Link>
      </div>
    );
  }

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
        addToCart(dish);
    }
  };

  return (
    <div className="container mx-auto py-20 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Image Column */}
            <div className="rounded-lg overflow-hidden shadow-2xl">
                <img src={dish.imageUrl.replace('400x300', '800x600')} alt={dish.name} className="w-full h-full object-cover" />
            </div>

            {/* Details Column */}
            <div>
                <Link to="/menu" className="text-sm font-semibold text-gold hover:text-yellow-500 transition-colors">
                    &larr; Back to Menu
                </Link>
                <span className="block mt-4 text-sm font-semibold text-gray-500 uppercase tracking-wider">{dish.category}</span>
                <h1 className="text-5xl md:text-6xl font-display text-gray-900 mt-2">{dish.name}</h1>
                <p className="text-3xl font-bold text-gold mt-6">₹{dish.price.toFixed(2)}</p>
                <p className="text-lg text-gray-700 mt-6 leading-relaxed">
                    {dish.detailedDescription || dish.description}
                </p>
                
                <div className="mt-10 flex items-center gap-6">
                    {/* Quantity Selector */}
                    <div className="flex items-center border border-gray-300 rounded-md">
                        <button onClick={() => setQuantity(q => Math.max(1, q - 1))} className="px-4 py-3 text-lg font-bold text-gray-700 hover:bg-gray-100 rounded-l-md">-</button>
                        <input 
                            type="number"
                            value={quantity}
                            readOnly
                            className="w-16 text-center font-bold text-lg border-x border-gray-300 focus:outline-none bg-white"
                        />
                        <button onClick={() => setQuantity(q => q + 1)} className="px-4 py-3 text-lg font-bold text-gray-700 hover:bg-gray-100 rounded-r-md">+</button>
                    </div>

                    {/* Add to Cart Button */}
                    <button
                        onClick={handleAddToCart}
                        className="flex-grow bg-gold text-black font-bold py-4 px-8 rounded-md text-lg hover:bg-yellow-500 transition-all transform hover:scale-105 duration-300"
                    >
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    </div>
  );
};

export default DishDetailPage;
