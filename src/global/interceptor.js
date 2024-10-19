import axios from "axios";

const token = localStorage.getItem('accessToken'); 
const baseAuthURL = "https://localhost:8080/api/v1"; 

const authAPI = axios.create({
  baseURL: baseAuthURL,
});

authAPI.interceptors.request.use(
  function (config) {
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    config.headers["Content-Type"] = "application/json";
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

authAPI.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    const { status } = error.response;
    console.log(error.response);
    
    switch (status) {
      case 200:
        console.log("Success");
        break;
      case 204:
        console.log("No Content (204)");
        break;
      case 400:
        console.log("Bad Request (400)");
        break;
      case 401:
        console.log("Unauthorized (401)");
        break;
      case 404:
        console.log("Not Found (404)");
        break;
      case 500:
        console.log("Server Error (500)");
        break;
      default:
        console.log("An unknown error occurred");
        break;
    }
    return Promise.reject(error);
  }
);

export default authAPI;
