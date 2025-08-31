
import { Order } from '../types';
import { RESTAURANT_DETAILS, RAPIDO_API_ENDPOINT } from '../constants';

// This is a mock implementation of the Rapido API booking.
export const bookDelivery = (order: Order): Promise<{ deliveryId: string; deliveryInfo: any }> => {
  return new Promise((resolve, reject) => {
    console.log(`Sending booking request to Rapido API: ${RAPIDO_API_ENDPOINT}`);

    const payload = {
      pickup_details: {
        name: RESTAURANT_DETAILS.name,
        address: RESTAURANT_DETAILS.address,
        coordinates: RESTAURANT_DETAILS.gps,
        contact: RESTAURANT_DETAILS.contact,
      },
      drop_details: {
        name: order.customer.name,
        address: order.customer.address,
        coordinates: { lat: 17.4065, lng: 78.4772 }, // Mock customer GPS
        contact: order.customer.phone,
      },
      order_details: {
        order_id: order.id,
        items: order.items.map(item => ({ name: item.name, quantity: item.quantity })),
        total_price: order.total,
      },
    };

    console.log('Rapido API Payload:', JSON.stringify(payload, null, 2));

    // Simulate network delay
    setTimeout(() => {
      // Simulate a 80% success rate
      if (Math.random() < 0.8) {
        const deliveryInfo = {
          deliveryId: `RAP-${Date.now()}`,
          deliveryInfo: {
            driverName: "Raju Kumar",
            driverPhone: "9876543210",
            vehicleNumber: "TS09AB1234",
          }
        };
        resolve(deliveryInfo);
      } else {
        reject(new Error("Delivery slots full, try again in 5 mins"));
      }
    }, 2000);
  });
};
