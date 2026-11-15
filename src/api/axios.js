import axios from "axios";

const api = axios.create({
  baseURL: "https://sairna.abdulrahman-hares.com/api/v1/website",
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use((config) => {
  const token =
    localStorage.getItem("accessToken") || sessionStorage.getItem("accessToken");
    

  if (token) {
    config.headers.Authorization =` Bearer ${token}`;
  }

  return config;
});

export default api;