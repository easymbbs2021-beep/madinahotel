
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useOrders } from '../context/OrderContext';
import { CustomerDetails } from '../types';
import Spinner from '../components/Spinner';

const CheckoutPage: React.FC = () => {
  const { cartItems, cartTotal, updateQuantity, removeFromCart, clearCart } = useCart();
  const { placeOrder } = useOrders();
  const navigate = useNavigate();
  const [customer, setCustomer] = useState<CustomerDetails>({ name: '', phone: '', address: '' });
  const [isProcessing, setIsProcessing] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCustomer(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (cartItems.length === 0) {
      alert("Your cart is empty!");
      return;
    }
    setIsProcessing(true);
    try {
      const newOrder = await placeOrder(customer, cartItems, cartTotal);
      clearCart();
      navigate(`/track/${newOrder.id}`);
    } catch (error) {
      alert("There was an issue placing your order. Please try again.");
      setIsProcessing(false);
    }
  };

  return (
    <div className="container mx-auto py-20 px-4 sm:px-6 lg:px-8">
      <h1 className="text-5xl font-display text-center mb-12 text-white">Checkout</h1>
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
        {/* Order Summary */}
        <div className="lg:col-span-3 bg-[#2C2C2C] p-8 rounded-lg border border-gray-700/50">
          <h2 className="text-3xl font-display mb-6 text-white">Your Order</h2>
          {cartItems.length > 0 ? (
            <div className="space-y-5">
              {cartItems.map(item => (
                <div key={item.id} className="flex items-center justify-between border-b border-gray-700/50 pb-5 last:border-b-0">
                  <div className="flex items-center">
                    <img src={item.imageUrl} alt={item.name} className="w-20 h-20 object-cover rounded-lg mr-5" />
                    <div>
                      <p className="font-bold text-lg text-white">{item.name}</p>
                      <p className="text-sm text-gray-400">₹{item.price.toFixed(2)}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <input
                      type="number"
                      value={item.quantity}
                      onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                      className="w-16 p-2 bg-[#1C1C1C] border border-gray-600 rounded-md text-center focus:ring-2 focus:ring-gold focus:border-gold"
                      min="1"
                    />
                    <button onClick={() => removeFromCart(item.id)} className="text-gray-500 hover:text-red-500 transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm4 0a1 1 0 012 0v6a1 1 0 11-2 0V8z" clipRule="evenodd" />
                      </svg>
                    </button>
                  </div>
                </div>
              ))}
              <div className="text-right font-bold text-2xl mt-6 pt-4 border-t border-gray-700/50">
                Total: <span className="text-gold">₹{cartTotal.toFixed(2)}</span>
              </div>
            </div>
          ) : (
            <p className="text-gray-400 py-10 text-center">Your cart is empty.</p>
          )}
        </div>

        {/* Customer Details Form */}
        <div className="lg:col-span-2 bg-[#2C2C2C] p-8 rounded-lg border border-gray-700/50">
          <h2 className="text-3xl font-display mb-6 text-white">Delivery Details</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">Full Name</label>
              <input type="text" id="name" name="name" value={customer.name} onChange={handleInputChange} required className="mt-1 block w-full px-4 py-3 bg-[#1C1C1C] border border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-gold focus:border-gold" />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-1">Phone Number</label>
              <input type="tel" id="phone" name="phone" value={customer.phone} onChange={handleInputChange} required className="mt-1 block w-full px-4 py-3 bg-[#1C1C1C] border border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-gold focus:border-gold" />
            </div>
            <div>
              <label htmlFor="address" className="block text-sm font-medium text-gray-300 mb-1">Address</label>
              <input type="text" id="address" name="address" value={customer.address} onChange={handleInputChange} required className="mt-1 block w-full px-4 py-3 bg-[#1C1C1C] border border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-gold focus:border-gold" />
            </div>
            <button
              type="submit"
              disabled={isProcessing || cartItems.length === 0}
              className="w-full bg-gold text-black font-bold py-4 px-4 rounded-md hover:bg-yellow-500 disabled:bg-gray-600 disabled:cursor-not-allowed transition-colors text-lg flex items-center justify-center"
            >
              {isProcessing ? <Spinner className="w-7 h-7" /> : `Place Order (₹${cartTotal.toFixed(2)})`}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;