
import React from 'react';
import { useOrders } from '../context/OrderContext';
import { OrderStatus } from '../types';

const AdminPage: React.FC = () => {
  const { orders, retryDeliveryBooking } = useOrders();
  const sortedOrders = [...orders].sort((a, b) => b.orderTime.getTime() - a.orderTime.getTime());

  const getStatusColor = (status: OrderStatus) => {
    switch (status) {
      case OrderStatus.DELIVERED: return 'bg-emerald-100 text-emerald-800';
      case OrderStatus.DELIVERY_FAILED: return 'bg-red-100 text-red-800';
      case OrderStatus.EN_ROUTE:
      case OrderStatus.PICKED_UP:
      case OrderStatus.DRIVER_ASSIGNED:
        return 'bg-sky-100 text-sky-800';
      case OrderStatus.CONFIRMED:
      case OrderStatus.PREPARING:
        return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-gray-200 text-gray-800';
    }
  };

  return (
    <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
      <h1 className="text-5xl font-display text-center mb-10 text-gray-900">Admin Dashboard</h1>
      <div className="bg-white p-6 rounded-lg shadow-xl border border-gray-200">
        <h2 className="text-3xl font-display mb-6 text-gray-900">Live Orders</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Order ID</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Customer</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Total</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {sortedOrders.map(order => (
                <tr key={order.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 font-mono">{order.id}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                    <div className="font-medium text-gray-900">{order.customer.name}</div>
                    <div>{order.customer.phone}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-gray-800">₹{order.total.toFixed(2)}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-3 py-1 inline-flex text-xs leading-5 font-bold rounded-full ${getStatusColor(order.status)}`}>
                      {order.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    {order.status === OrderStatus.DELIVERY_FAILED && (
                      <button 
                        onClick={() => retryDeliveryBooking(order.id)}
                        className="text-indigo-600 hover:text-indigo-900 bg-indigo-100 px-4 py-2 rounded-md font-semibold text-xs transition-all hover:bg-indigo-200"
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