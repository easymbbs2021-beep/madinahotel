
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useOrders } from '../context/OrderContext';
import { OrderStatus } from '../types';

const OrderHistoryPage: React.FC = () => {
  const { orders } = useOrders();
  const [searchTerm, setSearchTerm] = useState('');

  const getStatusColor = (status: OrderStatus) => {
    switch (status) {
      case OrderStatus.DELIVERED: return 'bg-emerald-900/50 text-emerald-300';
      case OrderStatus.DELIVERY_FAILED: return 'bg-red-900/50 text-red-300';
      case OrderStatus.EN_ROUTE:
      case OrderStatus.PICKED_UP:
      case OrderStatus.DRIVER_ASSIGNED:
        return 'bg-sky-900/50 text-sky-300';
      case OrderStatus.CONFIRMED:
      case OrderStatus.PREPARING:
        return 'bg-yellow-900/50 text-yellow-300';
      default: return 'bg-gray-700 text-gray-300';
    }
  };

  const filteredOrders = orders
    .filter(order =>
      order.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.customer.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => b.orderTime.getTime() - a.orderTime.getTime());

  return (
    <div className="container mx-auto py-20 px-4 sm:px-6 lg:px-8">
      <h1 className="text-5xl font-display text-center mb-4 text-white">Your Order History</h1>
      <p className="text-center text-lg text-gray-400 mb-12 max-w-2xl mx-auto">Review your past orders and track their status.</p>

      <div className="max-w-xl mx-auto mb-12">
        <input
          type="search"
          placeholder="Search by Order ID or name..."
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
          className="w-full px-5 py-3 bg-[#2C2C2C] border border-gray-700 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-gold focus:border-gold transition text-white"
        />
      </div>
      
      <div className="space-y-6 max-w-4xl mx-auto">
        {filteredOrders.length > 0 ? (
          filteredOrders.map(order => (
            <div key={order.id} className="bg-[#2C2C2C] p-6 rounded-lg border border-gray-700/50 shadow-lg shadow-black/20 hover:border-gray-600 transition-all">
              <div className="flex flex-col md:flex-row justify-between md:items-center">
                <div>
                  <p className="font-mono text-sm text-gray-500">Order ID: {order.id}</p>
                  <p className="text-lg font-bold text-white">Order placed on {order.orderTime.toLocaleDateString()}</p>
                </div>
                <div className="mt-4 md:mt-0 md:text-right">
                  <p className="text-xl font-bold text-gold">₹{order.total.toFixed(2)}</p>
                  <span className={`mt-1 px-3 py-1 inline-flex text-xs leading-5 font-bold rounded-full ${getStatusColor(order.status)}`}>
                    {order.status}
                  </span>
                </div>
              </div>
              <hr className="my-4 border-gray-700/50" />
              <div className="flex justify-between items-center">
                <div className="text-sm text-gray-300">
                    <p><strong>Recipient:</strong> {order.customer.name}</p>
                    <p>{order.items.length} item(s)</p>
                </div>
                <Link to={`/track/${order.id}`} className="bg-gold text-black font-bold px-5 py-2 rounded-md hover:bg-yellow-500 transition-colors duration-300">
                  Track Order
                </Link>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center py-20 bg-[#2C2C2C] rounded-lg border border-gray-700/50">
            <h3 className="text-2xl font-semibold text-white">No Orders Found</h3>
            <p className="text-gray-500 mt-2">
                {orders.length > 0 ? "Your search returned no results." : "You haven't placed any orders yet."}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default OrderHistoryPage;