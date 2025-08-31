import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { CartProvider } from './context/CartContext';
import { OrderProvider } from './context/OrderContext';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <OrderProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </OrderProvider>
  </React.StrictMode>
);
