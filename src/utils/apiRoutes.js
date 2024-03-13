import axios from "axios";

const backendUrl = "http://localhost:5003";

const api = axios.create({
  baseURL: backendUrl,
  timeout: 5000,
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

export default apiRoutes;
