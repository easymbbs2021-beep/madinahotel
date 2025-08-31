
import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import MenuPage from './pages/MenuPage';
import CheckoutPage from './pages/CheckoutPage';
import TrackOrderPage from './pages/TrackOrderPage';
import AdminPage from './pages/AdminPage';
import OwnerViewPage from './pages/OwnerViewPage';
import Header from './components/Header';
import Footer from './components/Footer';
import OrderHistoryPage from './pages/OrderHistoryPage';
import DishDetailPage from './pages/DishDetailPage';
import GalleryPage from './pages/GalleryPage';
import ReviewsPage from './pages/ReviewsPage';
import ContactPage from './pages/ContactPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import TermsPage from './pages/TermsPage';

function App() {
  return (
    <HashRouter>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow bg-[#F8F5F0]">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/menu" element={<MenuPage />} />
            <Route path="/menu/:dishId" element={<DishDetailPage />} />
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route path="/track/:orderId" element={<TrackOrderPage />} />
            <Route path="/history" element={<OrderHistoryPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/reviews" element={<ReviewsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/privacy" element={<PrivacyPolicyPage />} />
            <Route path="/terms" element={<TermsPage />} />
            <Route path="/admin" element={<AdminPage />} />
            <Route path="/owner" element={<OwnerViewPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
}

export default App;