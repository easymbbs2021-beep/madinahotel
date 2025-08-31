
import React, { useEffect, useState, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { useOrders } from '../context/OrderContext';
import { Order, OrderStatus } from '../types';
import Spinner from '../components/Spinner';
import MapPlaceholder from '../components/MapPlaceholder';

const statusSteps = [
    OrderStatus.PLACED,
    OrderStatus.CONFIRMED,
    OrderStatus.PREPARING,
    OrderStatus.DRIVER_ASSIGNED,
    OrderStatus.PICKED_UP,
    OrderStatus.EN_ROUTE,
    OrderStatus.DELIVERED
];

const TrackOrderPage: React.FC = () => {
    const { orderId } = useParams<{ orderId: string }>();
    const { orders } = useOrders();
    const [order, setOrder] = useState<Order | undefined>(undefined);
    const [eta, setEta] = useState<number | null>(null);
    const [driverPosition, setDriverPosition] = useState({ x: 15, y: 80 }); // Start at restaurant
    const intervalRef = useRef<number | null>(null);

    useEffect(() => {
        // Find order on initial load or when orders array changes
        const foundOrder = orders.find(o => o.id === orderId);
        setOrder(foundOrder);
    }, [orders, orderId]);

    // This single, robust effect manages the ETA countdown and driver position.
    useEffect(() => {
        // Clear any existing timer when the effect re-runs to avoid memory leaks
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
        }

        if (!order) return;

        const startPos = { x: 15, y: 80 }; // Restaurant
        const endPos = { x: 85, y: 20 };   // Home
        const totalDurationEnRoute = 15;  // Mock total time for the "En Route" phase in minutes

        // Function to update driver position based on current ETA
        const updatePosition = (currentEta: number) => {
            const progress = Math.max(0, (totalDurationEnRoute - currentEta) / totalDurationEnRoute);
            setDriverPosition({
                x: startPos.x + (endPos.x - startPos.x) * progress,
                y: startPos.y + (endPos.y - startPos.y) * progress,
            });
        };

        switch (order.status) {
            case OrderStatus.DRIVER_ASSIGNED:
            case OrderStatus.PICKED_UP:
                setEta(20);
                setDriverPosition(startPos);
                break;
            case OrderStatus.EN_ROUTE:
                const initialEta = eta === null || eta > totalDurationEnRoute ? totalDurationEnRoute : eta;
                setEta(initialEta);
                updatePosition(initialEta);

                // Start a new interval and store its ID in the ref for cleanup
                intervalRef.current = window.setInterval(() => {
                    setEta(prev => {
                        const newEta = prev !== null ? Math.max(0, prev - 1) : 0;
                        updatePosition(newEta); // Synchronize position update with ETA change
                        if (newEta === 0 && intervalRef.current) {
                           clearInterval(intervalRef.current); // Stop timer when ETA reaches 0
                        }
                        return newEta;
                    });
                }, 60 * 1000); // Decrement every minute for a realistic countdown
                break;
            case OrderStatus.DELIVERED:
                setEta(0);
                setDriverPosition(endPos);
                break;
            default:
                setEta(null);
                setDriverPosition(startPos);
                break;
        }

        // Cleanup function for when the component unmounts or order status changes
        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
            }
        };
    }, [order]); // Reruns only when the order object itself changes

    if (!order) {
        return (
            <div className="flex justify-center items-center py-40">
                <Spinner className="w-12 h-12 text-gold" />
            </div>
        );
    }

    const currentStatusIndex = statusSteps.indexOf(order.status);
    const isDeliveryFailed = order.status === OrderStatus.DELIVERY_FAILED;

    return (
        <div className="container mx-auto py-20 px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
                <h1 className="text-5xl font-display text-white">Track Your Order</h1>
                <p className="text-gray-400 mt-2">Order ID: <span className="font-mono">{order.id}</span></p>
                 {eta !== null && order.status !== OrderStatus.DELIVERED && (
                    <p className="mt-4 text-2xl font-bold text-gold">
                        Estimated Arrival: {eta > 0 ? `~${eta} mins` : 'Arriving now!'}
                    </p>
                )}
            </div>

            <div className="max-w-5xl mx-auto bg-[#2C2C2C] p-8 sm:p-12 rounded-lg border border-gray-700/50">
                {/* Status Stepper */}
                <div className="mb-12 overflow-x-auto pb-4">
                    <div className="flex items-center min-w-max">
                        {statusSteps.map((status, index) => (
                            <React.Fragment key={status}>
                                <div className="flex flex-col items-center text-center w-32">
                                    <div className={`w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all duration-500 ${index <= currentStatusIndex && !isDeliveryFailed ? 'bg-gold border-gold text-black' : 'bg-transparent border-gray-600 text-gray-400'}`}>
                                      {index < currentStatusIndex && !isDeliveryFailed ? (
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                      ) : (
                                        <span className="font-bold">{index + 1}</span>
                                      )}
                                    </div>
                                    <p className={`text-xs md:text-sm mt-2 transition-colors duration-500 ${index <= currentStatusIndex && !isDeliveryFailed ? 'font-semibold text-gold' : 'text-gray-500'}`}>{status}</p>
                                </div>
                                {index < statusSteps.length - 1 && (
                                    <div className={`flex-1 h-1 transition-colors duration-500 ${index < currentStatusIndex && !isDeliveryFailed ? 'bg-gold' : 'bg-gray-700'}`}></div>
                                )}
                            </React.Fragment>
                        ))}
                    </div>
                </div>

                <div className="mb-12">
                   <MapPlaceholder driverPosition={driverPosition} />
                </div>
                
                {isDeliveryFailed && (
                    <div className="text-center bg-red-900/50 border border-red-700 text-red-300 px-4 py-4 rounded-lg relative mb-8" role="alert">
                        <strong className="font-bold text-lg">Delivery Booking Failed!</strong>
                        <p className="mt-1">We couldn't book a driver automatically. Our team has been notified and will retry shortly. Thank you for your patience.</p>
                    </div>
                )}
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
                    <div>
                        <h3 className="text-2xl font-display mb-4 text-white">Order Summary</h3>
                        <ul className="space-y-3">
                            {order.items.map(item => (
                                <li key={item.id} className="flex justify-between text-gray-300">
                                    <span>{item.name} <span className="text-gray-500">x {item.quantity}</span></span>
                                    <span className="font-medium">₹{(item.price * item.quantity).toFixed(2)}</span>
                                </li>
                            ))}
                        </ul>
                        <hr className="my-4 border-gray-700/50" />
                        <p className="flex justify-between font-bold text-lg text-white">
                            <span>Total</span>
                            <span className="text-gold">₹{order.total.toFixed(2)}</span>
                        </p>
                    </div>

                    <div>
                        <h3 className="text-2xl font-display mb-4 text-white">Delivery Details</h3>
                        {order.deliveryInfo ? (
                             <div className="space-y-2 text-gray-300">
                                <p><strong>Driver:</strong> {order.deliveryInfo.driverName}</p>
                                <p><strong>Phone:</strong> {order.deliveryInfo.driverPhone}</p>
                                <p><strong>Vehicle:</strong> {order.deliveryInfo.vehicleNumber}</p>
                             </div>
                        ) : (
                            <p className="text-gray-500">Driver not assigned yet.</p>
                        )}
                        <p className="mt-4 text-gray-300"><strong>Deliver to:</strong> {order.customer.address}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TrackOrderPage;