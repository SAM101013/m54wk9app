import axios from "axios";

const backendUri = process.env.REACT_APP_BACKEND_URI;

const api = axios.create({
  baseURL: backendUri,
  timeout: 5000, // milliseconds
  headers: {
    "Content-Type": "application/json",
  },
});

const apiRoutes = {
  signupUser: async (userData) => {
    try {
      const response = await api.post("/users/signup", userData);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  getAllUsers: async () => {
    try {
      const response = await api.get("/getAllUsers");
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  loginUser: async (userData) => {
    try {
      const response = await api.post("/users/login", userData);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  getAllLoggedIn: async () => {
    try {
      const response = await api.get("/users/getAllLoggedIn");
      return response.data;
    } catch (error) {
      throw error;
    }
  },
};

export default backendUri;
