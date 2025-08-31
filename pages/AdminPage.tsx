
import React from 'react';
import { useOrders } from '../context/OrderContext';
import { OrderStatus } from '../types';

const AdminPage: React.FC = () => {
  const { orders, retryDeliveryBooking } = useOrders();
  const sortedOrders = [...orders].sort((a, b) => b.orderTime.getTime() - a.orderTime.getTime());

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

  return (
    <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
      <h1 className="text-5xl font-display text-center mb-10 text-white">Admin Dashboard</h1>
      <div className="bg-[#2C2C2C] p-6 rounded-lg shadow-2xl shadow-black/30 border border-gray-700/50">
        <h2 className="text-3xl font-display mb-6 text-white">Live Orders</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead className="bg-[#1C1C1C]">
              <tr>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-400 uppercase tracking-wider">Order ID</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-400 uppercase tracking-wider">Customer</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-400 uppercase tracking-wider">Total</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-400 uppercase tracking-wider">Status</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-400 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-700/50">
              {sortedOrders.map(order => (
                <tr key={order.id} className="hover:bg-[#383838] transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-white font-mono">{order.id}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                    <div className="font-medium">{order.customer.name}</div>
                    <div>{order.customer.phone}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-gray-200">₹{order.total.toFixed(2)}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-3 py-1 inline-flex text-xs leading-5 font-bold rounded-full ${getStatusColor(order.status)}`}>
                      {order.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    {order.status === OrderStatus.DELIVERY_FAILED && (
                      <button 
                        onClick={() => retryDeliveryBooking(order.id)}
                        className="text-indigo-300 hover:text-indigo-100 bg-indigo-900/50 px-4 py-2 rounded-md font-semibold text-xs transition-all hover:bg-indigo-900/80"
                      >
                        Retry Booking
                      </button>
                    )}
                  </td>
                </tr>
              ))}
              {sortedOrders.length === 0 && (
                <tr>
                  <td colSpan={5} className="px-6 py-10 text-center text-gray-500">No orders yet.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;