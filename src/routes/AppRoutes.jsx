import { BrowserRouter, Routes, Route } from "react-router-dom";

import DashboardHelper from "../pages/helper/dashboard_helper";
import RequestsHelper from "../pages/helper/requests_helper";
import ActiveJobsHelper from "../pages/helper/activeJobs_helper";
import EarningsHelper from "../pages/helper/earning_helper";
import ReviewsHelper from "../pages/helper/reviews_helper";
import ProfileHelper from "../pages/helper/profile_helper";
import NotificationsHelper from "../pages/helper/notifications_helper";

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


{/* Helper Dashboard */}
<Route
  path="/helper/dashboard_helper"
  element={<DashboardHelper />}
/>

<Route
  path="/helper/requests_helper"
  element={<RequestsHelper />}
/>

<Route
  path="/helper/activeJobs_helper"
  element={<ActiveJobsHelper />}
/>

<Route
  path="/helper/earning_helper"
  element={<EarningsHelper />}
/>

<Route
  path="/helper/reviews_helper"
  element={<ReviewsHelper />}
/>

<Route
  path="/helper/profile_helper"
  element={<ProfileHelper />}
/>

<Route
  path="/helper/notifications_helper"
  element={<NotificationsHelper />}
/>


      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;