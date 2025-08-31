
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { MENU_ITEMS } from '../constants';
import { useCart } from '../context/CartContext';

const DishDetailPage: React.FC = () => {
  const { dishId } = useParams<{ dishId: string }>();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  const dish = MENU_ITEMS.find(item => item.id === dishId);

  if (!dish) {
    return (
      <div className="container mx-auto py-40 text-center">
        <h1 className="text-4xl font-display text-white">Dish Not Found</h1>
        <p className="text-gray-400 mt-4">We couldn't find the dish you were looking for.</p>
        <Link to="/menu" className="mt-8 inline-block bg-gold text-black font-bold py-3 px-8 rounded-md hover:bg-yellow-500 transition-colors">
          Back to Menu
        </Link>
      </div>
    );
  }

  const handleAddToCart = () => {
    // The addToCart in context adds one item, so we loop to add the selected quantity
    for (let i = 0; i < quantity; i++) {
        addToCart(dish);
    }
    setAdded(true);
    setTimeout(() => setAdded(false), 2000); // Reset button state after 2 seconds
  };

  return (
    <div className="bg-[#1C1C1C]">
        <div className="container mx-auto py-20 px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
                {/* Image Column */}
                <div className="rounded-lg overflow-hidden shadow-2xl shadow-black/50">
                    <img src={dish.imageUrl.replace('400x300', '800x600')} alt={dish.name} className="w-full h-full object-cover" />
                </div>

                {/* Details Column */}
                <div>
                    <Link to="/menu" className="text-sm font-semibold text-gold hover:text-yellow-500 transition-colors">
                        &larr; Back to Menu
                    </Link>
                    <span className="block mt-4 text-sm font-semibold text-gray-400 uppercase tracking-wider">{dish.category}</span>
                    <h1 className="text-5xl md:text-6xl font-display text-white mt-2">{dish.name}</h1>
                    <p className="text-3xl font-bold text-gold mt-6">₹{dish.price.toFixed(2)}</p>
                    <p className="text-lg text-gray-300 mt-6 leading-relaxed">
                        {dish.detailedDescription || dish.description}
                    </p>

                    <div className="mt-10 flex items-center gap-4">
                        <div className="flex items-center border border-gray-600 rounded-md">
                            <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="px-4 py-3 text-gray-300 hover:bg-[#2C2C2C] rounded-l-md transition">-</button>
                            <input type="text" readOnly value={quantity} className="w-14 text-center font-bold text-lg bg-transparent border-x border-gray-600 py-3" />
                            <button onClick={() => setQuantity(quantity + 1)} className="px-4 py-3 text-gray-300 hover:bg-[#2C2C2C] rounded-r-md transition">+</button>
                        </div>
                        <button
                            onClick={handleAddToCart}
                            className={`w-full text-black font-bold py-4 px-4 rounded-md transition-colors text-lg ${added ? 'bg-emerald-600' : 'bg-gold hover:bg-yellow-500'}`}
                        >
                            {added ? 'Added!' : 'Add to Cart'}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default DishDetailPage;