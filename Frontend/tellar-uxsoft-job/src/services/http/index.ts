import Axios, { AxiosInstance } from "axios";

const api: AxiosInstance = Axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
