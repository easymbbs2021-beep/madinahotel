export interface MenuItem {
  id: string;
  name: string;
  description: string;
  detailedDescription?: string;
  price: number;
  category: string;
  imageUrl: string;
}

// FIX: Added CartItem type by extending MenuItem with a quantity property. This resolves import errors for CartItem.
export interface CartItem extends MenuItem {
  quantity: number;
}

// FIX: Added CustomerDetails interface to define the shape of customer data. This resolves import errors for CustomerDetails.
export interface CustomerDetails {
  name: string;
  phone: string;
  address: string;
}

// FIX: Added OrderStatus enum to represent the different stages of an order. This resolves import errors for OrderStatus.
export enum OrderStatus {
  PLACED = 'Placed',
  CONFIRMED = 'Confirmed',
  PREPARING = 'Preparing',
  DRIVER_ASSIGNED = 'Driver Assigned',
  PICKED_UP = 'Picked Up',
  EN_ROUTE = 'En Route',
  DELIVERED = 'Delivered',
  DELIVERY_FAILED = 'Delivery Failed',
}

// FIX: Added PaymentStatus enum. This resolves import errors for PaymentStatus.
export enum PaymentStatus {
  PAID = 'Paid',
  PENDING = 'Pending',
  FAILED = 'Failed',
}

// FIX: Added DeliveryInfo interface for consistency. This is used within the Order type.
export interface DeliveryInfo {
  driverName: string;
  driverPhone: string;
  vehicleNumber: string;
}

// FIX: Added Order interface to define the structure of an order object. This resolves import errors for Order.
export interface Order {
  id: string;
  customer: CustomerDetails;
  items: CartItem[];
  total: number;
  status: OrderStatus;
  paymentStatus: PaymentStatus;
  orderTime: Date;
  deliveryInfo?: DeliveryInfo;
}
