import axios from "axios";

const api = axios.create({
  baseURL: "http://127.0.0.1:8000",
});

// =======================
// Authentication
// =======================

export const registerUser = (data) =>
  api.post("/auth/register", data);

export const loginUser = (data) =>
  api.post("/auth/login", data);

// =======================
// Helpers
// =======================

export const getHelpers = () =>
  api.get("/helpers");

export const getAvailableHelpers = () =>
  api.get("/helpers/available");

export const getHelpersBySkill = (skill) =>
  api.get(`/helpers/skill/${skill}`);

export const getHelperLocation = (id) =>
  api.get(`/helpers/location/${id}`);

export const updateHelperLocation = (
  id,
  latitude,
  longitude
) =>
  api.put(
    `/helpers/location/${id}`,
    null,
    {
      params: {
        latitude,
        longitude,
      },
    }
  );

// =======================
// Booking
// =======================

export const createBooking = (data) =>
  api.post("/booking/create", data);

export const getUserBookings = (userId) =>
  api.get(`/booking/user/${userId}`);

// =======================
// Payment
// =======================

export const createOrder = (data) =>
  api.post("/payment/create", data);

export const verifyPayment = (data) =>
  api.post("/payment/verify", data);

export const getBooking = (bookingId) =>
    api.get(`/booking/${bookingId}`);

// =======================

export default api;