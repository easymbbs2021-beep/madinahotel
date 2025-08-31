
import React, { useState, useEffect } from 'react';
import { MENU_ITEMS } from '../constants';
import MenuItemCard from '../components/MenuItemCard';
import SkeletonCard from '../components/SkeletonCard';
import { MenuItem } from '../types';

const categories = ['All', ...Array.from(new Set(MENU_ITEMS.map(item => item.category)))];

const MenuPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredItems, setFilteredItems] = useState<MenuItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      const items = MENU_ITEMS.filter(item => {
        const categoryMatch = selectedCategory === 'All' || item.category === selectedCategory;
        const searchMatch = searchTerm === '' ||
          item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.description.toLowerCase().includes(searchTerm.toLowerCase());
        return categoryMatch && searchMatch;
      });
      setFilteredItems(items);
      setIsLoading(false);
    }, 500); // Simulate network/filtering delay

    return () => clearTimeout(timer);
  }, [selectedCategory, searchTerm]);

  return (
    <div className="container mx-auto py-20 px-4 sm:px-6 lg:px-8">
      <h1 className="text-5xl font-display text-center mb-4 text-white">Our Menu</h1>
      <p className="text-center text-lg text-gray-400 mb-12 max-w-2xl mx-auto">Discover a symphony of flavors, where every dish tells a story of Hyderabadi tradition.</p>

      {/* Search and Filters */}
      <div className="mb-12">
        <div className="max-w-xl mx-auto mb-8">
            <input 
                type="search"
                placeholder="Search for a dish..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-5 py-3 bg-[#2C2C2C] border border-gray-700 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-gold focus:border-gold transition text-white"
            />
        </div>
        <div className="flex justify-center flex-wrap gap-3 md:gap-4">
            {categories.map(category => (
            <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-5 py-2 text-sm md:text-base font-semibold rounded-md transition-all duration-300 border-2 ${
                selectedCategory === category
                    ? 'bg-gold text-black border-gold'
                    : 'bg-transparent text-gray-300 border-gray-600 hover:border-gold hover:text-gold'
                }`}
            >
                {category}
            </button>
            ))}
        </div>
      </div>


      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
        {isLoading ? (
          Array.from({ length: 8 }).map((_, index) => <SkeletonCard key={index} />)
        ) : filteredItems.length > 0 ? (
          filteredItems.map((item: MenuItem) => (
            <MenuItemCard key={item.id} item={item} />
          ))
        ) : (
          <div className="col-span-full text-center py-20">
            <h3 className="text-2xl font-semibold text-gray-300">No Dishes Found</h3>
            <p className="text-gray-500 mt-2">Try adjusting your search or filters.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MenuPage;