import api from "../api/axios";

export const getCompanies = async () => {
  const { data } = await api.get("/companies");
  return data;
};

export const getCities = async () => {
  const { data } = await api.get("/cities");
  return data;
};
export const getTrips = async (date) => {
  const { data } = await api.get("/trips", {
    params: { date },
  });

  return data;
};

export const registerUser = async (userData) => {
  const { data } = await api.post("/auth/register", userData);
  return data;
};


export const loginUser = async (userData) => {
  const { data } = await api.post("/auth/login", userData);
  return data;
};
export const getCurrentUser = async () => {
  const { data } = await api.get("/auth/me");
  return data;
};
export const getTripSeats = async (tripId) => {
  const response = await api.get(`/trips/${tripId}/seats`);
  return response.data;
};
export const createBooking = async (bookingData) => {
  const { data } = await api.post("/bookings", bookingData);
  return data;
};
export const getMyBookings = async () => {
  const { data } = await api.get("/bookings/me");
  return data;
};
export const getBookingById = async (bookingId) => {
  const { data } = await api.get(`/bookings/${bookingId}`);
  return data;
};
export const cancelBooking = async (bookingId) => {
  const { data } = await api.post(`/bookings/${bookingId}/cancel`);
  return data;
};