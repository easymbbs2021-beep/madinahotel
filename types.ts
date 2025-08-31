export interface MenuItem {
  id: string;
  name: string;
  description: string;
  detailedDescription?: string;
  price: number;
  category: string;
  imageUrl: string;
}

export interface CartItem extends MenuItem {
  quantity: number;
}

export interface CustomerDetails {
  name: string;
  phone: string;
  address: string;
}

export enum OrderStatus {
  PLACED = "Order Placed",
  CONFIRMED = "Restaurant Confirmed",
  PREPARING = "Preparing Food",
  DELIVERY_FAILED = "Delivery Booking Failed",
  DRIVER_ASSIGNED = "Driver Assigned",
  PICKED_UP = "Picked Up",
  EN_ROUTE = "En Route",
  DELIVERED = "Delivered",
}

export enum PaymentStatus {
  PENDING = "Pending",
  PAID = "Paid",
  FAILED = "Failed",
}

export interface Order {
  id: string;
  customer: CustomerDetails;
  items: CartItem[];
  total: number;
  status: OrderStatus;
  paymentStatus: PaymentStatus;
  orderTime: Date;
  deliveryInfo?: {
    driverName: string;
    driverPhone: string;
    vehicleNumber: string;
  };
}