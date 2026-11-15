import "./App.css";
import { Route, Routes } from "react-router-dom";
import MainLayout from "./layouts/layout";
import BookTripPage from "./pages/book-trip-page";
import HomePage from "./pages/home-page";
import { SearchProvider } from "./context/search-context";
import TransportCompanies from "./pages/transport-companies";
import AuthPage from "./pages/auth-page";
import ProfilePage from "./pages/profile-page";
import { Toaster } from "react-hot-toast";
import BookingCheckoutPage from "./pages/booking-checkout-page";
import BookingSuccessPage from "./pages/booking-success-page";
import MyBookingsPage from "./pages/my-bookings-page";
import PageTrack from "./pages/tracking-page";
import AboutSairnaPage from "./pages/about-sairna-page";
import FaqPage from "./pages/faq-page";
function App() {
  return (
    <>
    <Toaster
  position="bottom-right"
  toastOptions={{
    className: "!bg-[#103a4e] !text-white",
  }}
/>
    <SearchProvider>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/book-trip" element={<BookTripPage />} />
           <Route path="/transport-companies" element={<TransportCompanies />} />
           <Route path="/login" element={<AuthPage mode="login" />} />
<Route path="/register" element={<AuthPage mode="register" />} />
<Route path="/profile" element={<ProfilePage />} />
 <Route
  path="/booking-checkout"
  element={<BookingCheckoutPage />}
/>
<Route
  path="/booking-success"
  element={<BookingSuccessPage />}
/>
<Route path="/my-bookings" element={<MyBookingsPage />} />
<Route path="/track-trip/:id" element={<PageTrack />} />
<Route path="/about-sairna" element={<AboutSairnaPage />} />
<Route path="/faq" element={<FaqPage />} />
        </Route>
       
      </Routes>
      </SearchProvider>
    </>
  );
}

export default App;
