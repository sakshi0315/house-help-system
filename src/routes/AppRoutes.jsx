import { BrowserRouter, Routes, Route } from "react-router-dom";
import Profile from "../pages/Profile";
import Landing from "../pages/Landing";
import Auth from "../pages/Auth";
import Dashboard from "../pages/Dashboard";
import Booking from "../pages/Booking";
import AutoAssignment from "../pages/AutoAssignment";
import HelperAssigned from "../pages/HelperAssigned";
import LiveTracking from "../pages/LiveTracking";
import Notifications from "../pages/Notifications";
import Payment from "../pages/Payment";
import BookingHistory from "../pages/BookingHistory";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Landing Page */}
        <Route
          path="/"
          element={<Landing />}
        />

        {/* Login / Signup */}
        <Route
          path="/auth"
          element={<Auth />}
        />

        {/* Dashboard */}
        <Route
          path="/dashboard"
          element={<Dashboard />}
        />
        {/* Booking */}
        <Route
          path="/booking"
          element={<Booking />}
        />

        {/* AutoAssignment */}
        <Route
          path="/assignment"
          element={<AutoAssignment />}
        />

        {/* Helper Assigned */}
        <Route
          path="/helper-assigned"
          element={<HelperAssigned />}
        />

        {/* Live Tracking */}
        <Route
        path="/tracking"
        element={<LiveTracking />}
      />

      {/* Notifications */}
      <Route
      path="/notifications"
      element={<Notifications />}
      />

        {/* Payment */}
      <Route
      path="/payment"
      element={<Payment />}
    />

      {/* Booking History */}
    <Route
      path="/history"
      element={<BookingHistory />}
    />
    

      {/* Profile */}
      <Route
        path="/profile"
        element={<Profile />}
      />

      </Routes>

    </BrowserRouter>
  );
}

export default AppRoutes;