
import React, { createContext, useContext, useState, ReactNode, useCallback } from 'react';
import { Order, OrderStatus, CartItem, CustomerDetails, PaymentStatus } from '../types';
import { bookDelivery } from '../services/rapidoService';

interface OrderContextType {
  orders: Order[];
  getOrder: (orderId: string) => Order | undefined;
  placeOrder: (customer: CustomerDetails, items: CartItem[], total: number) => Promise<Order>;
  updateOrderStatus: (orderId: string, status: OrderStatus, deliveryInfo?: any) => void;
  retryDeliveryBooking: (orderId: string) => Promise<void>;
}

const OrderContext = createContext<OrderContextType | undefined>(undefined);

export const OrderProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [orders, setOrders] = useState<Order[]>([]);

  const getOrder = (orderId: string) => {
    return orders.find(o => o.id === orderId);
  };
  
  const updateOrderStatus = useCallback((orderId: string, status: OrderStatus, deliveryInfo?: any) => {
    setOrders(prevOrders => prevOrders.map(o => 
      o.id === orderId ? { ...o, status, deliveryInfo: deliveryInfo || o.deliveryInfo } : o
    ));
  }, []);


  const startDeliverySimulation = useCallback((orderId: string, deliveryInfo: any) => {
      setTimeout(() => updateOrderStatus(orderId, OrderStatus.DRIVER_ASSIGNED, deliveryInfo), 5000);
      setTimeout(() => updateOrderStatus(orderId, OrderStatus.PICKED_UP), 15000);
      setTimeout(() => updateOrderStatus(orderId, OrderStatus.EN_ROUTE), 30000);
      setTimeout(() => updateOrderStatus(orderId, OrderStatus.DELIVERED), 60000);
  }, [updateOrderStatus]);
  
  const placeOrder = async (customer: CustomerDetails, items: CartItem[], total: number): Promise<Order> => {
    const newOrder: Order = {
      id: `MH-${Date.now()}`,
      customer,
      items,
      total,
      status: OrderStatus.PLACED,
      paymentStatus: PaymentStatus.PAID, // Simulate successful payment
      orderTime: new Date(),
    };
    
    setOrders(prev => [...prev, newOrder]);
    
    setTimeout(() => updateOrderStatus(newOrder.id, OrderStatus.CONFIRMED), 2000);
    setTimeout(() => updateOrderStatus(newOrder.id, OrderStatus.PREPARING), 5000);

    setTimeout(async () => {
      try {
        const deliveryDetails = await bookDelivery(newOrder);
        console.log("Rapido Booking Successful:", deliveryDetails);
        startDeliverySimulation(newOrder.id, deliveryDetails.deliveryInfo);
      } catch (error) {
        console.error("Rapido Booking Failed:", error);
        updateOrderStatus(newOrder.id, OrderStatus.DELIVERY_FAILED);
      }
    }, 10000);

    return newOrder;
  };

  const retryDeliveryBooking = async (orderId: string) => {
    const order = getOrder(orderId);
    if (!order || order.status !== OrderStatus.DELIVERY_FAILED) {
      console.log("Not eligible for retry");
      return;
    }

    try {
      const deliveryDetails = await bookDelivery(order);
      console.log("Rapido Re-Booking Successful:", deliveryDetails);
      startDeliverySimulation(order.id, deliveryDetails.deliveryInfo);
    } catch (error) {
      console.error("Rapido Re-Booking Failed:", error);
      updateOrderStatus(order.id, OrderStatus.DELIVERY_FAILED);
      alert('Manual delivery booking failed again. Please check logs.');
    }
  };

  return (
    <OrderContext.Provider value={{ orders, getOrder, placeOrder, updateOrderStatus, retryDeliveryBooking }}>
      {children}
    </OrderContext.Provider>
  );
};

export const useOrders = () => {
  const context = useContext(OrderContext);
  if (context === undefined) {
    throw new Error('useOrders must be used within an OrderProvider');
  }
  return context;
};
