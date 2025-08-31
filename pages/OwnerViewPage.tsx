
import React from 'react';
import { useOrders } from '../context/OrderContext';
import { Order, OrderStatus } from '../types';

// A reusable card for displaying key metrics
const MetricCard: React.FC<{ title: string; value: string | number; icon: JSX.Element }> = ({ title, value, icon }) => (
    <div className="bg-[#2C2C2C] p-6 rounded-lg shadow-2xl shadow-black/30 border border-gray-700/50 flex items-start">
    <div className="bg-gold/10 text-gold rounded-lg p-3 mr-4">
      {icon}
    </div>
    <div>
      <p className="text-sm text-gray-400 font-medium">{title}</p>
      <p className="text-3xl font-bold text-white mt-1">{value}</p>
    </div>
  </div>
);

// Helper to check if a date is today
const isToday = (someDate: Date) => {
  const today = new Date();
  return someDate.getDate() === today.getDate() &&
    someDate.getMonth() === today.getMonth() &&
    someDate.getFullYear() === today.getFullYear();
};

const OwnerViewPage: React.FC = () => {
  const { orders, retryDeliveryBooking } = useOrders();

  // Calculate metrics
  const ordersToday = orders.filter(o => isToday(o.orderTime));
  const totalRevenueToday = ordersToday.reduce((sum, order) => sum + order.total, 0).toFixed(2);
  const ongoingDeliveries = orders.filter(o => [
    OrderStatus.DRIVER_ASSIGNED,
    OrderStatus.PICKED_UP,
    OrderStatus.EN_ROUTE
  ].includes(o.status)).length;
  const failedBookings = orders.filter(o => o.status === OrderStatus.DELIVERY_FAILED).length;

  // Sort orders for the table, most recent first
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
    <div className="bg-[#1C1C1C] min-h-screen">
      <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl font-display text-white">Owner's Dashboard</h1>
        <p className="text-gray-400 mt-2 mb-10">A real-time overview of Madina Hotel's performance.</p>

        {/* Key Metrics Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <MetricCard 
            title="Total Revenue Today" 
            value={`₹${totalRevenueToday}`} 
            icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v.01" /></svg>} 
          />
          <MetricCard 
            title="Orders Today" 
            value={ordersToday.length} 
            icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" /></svg>}
          />
          <MetricCard 
            title="Ongoing Deliveries" 
            value={ongoingDeliveries} 
            icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10l2 2h8a1 1 0 001-1zM3 11h10" /></svg>}
          />
          <MetricCard 
            title="Failed Bookings" 
            value={failedBookings} 
            icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>}
          />
        </div>

        {/* Orders Table */}
        <div className="bg-[#2C2C2C] p-6 rounded-lg shadow-2xl shadow-black/30 border border-gray-700/50">
          <h2 className="text-3xl font-display mb-6 text-white">Recent Orders</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead className="bg-[#1C1C1C]">
                <tr>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-400 uppercase tracking-wider">Order Details</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-400 uppercase tracking-wider">Customer</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-400 uppercase tracking-wider">Total</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-400 uppercase tracking-wider">Status</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-400 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-700/50">
                {sortedOrders.map(order => (
                  <tr key={order.id} className="hover:bg-[#383838] transition-colors">
                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                        <div className="font-medium text-white font-mono">{order.id}</div>
                        <div className="text-gray-400">{order.orderTime.toLocaleString()}</div>
                    </td>
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
    </div>
  );
};

export default OwnerViewPage;