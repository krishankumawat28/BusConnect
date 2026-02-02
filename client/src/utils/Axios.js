import axios from "axios";
import SummaryApi, { baseURL } from "../Common/SummaryApi.js";

const Axios = axios.create({
  baseURL: baseURL,
  withCredentials: true
});

// Attach access token in header
// Axios.interceptors.request.use(
//   (config) => {
//     const accessToken = localStorage.getItem('accesstoken');
//     if (accessToken) {
//       config.headers.Authorization = `Bearer ${accessToken}`;
//     }
//     return config;
//   },
//   (error) => Promise.reject(error)
// );

// Correct response interceptor for token refresh
// Axios.interceptors.response.use(
//   (response) => response,
//   async (error) => {
//     const originalRequest = error.config;

//     if (error.response?.status === 401 && !originalRequest._retry) {
//       originalRequest._retry = true;
//       const refreshToken = localStorage.getItem("refreshToken");

//       if (refreshToken) {
//         const newAccessToken = await refreshAccessToken(refreshToken);
//         if (newAccessToken) {
//           localStorage.setItem('accesstoken', newAccessToken);
//           originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
//           return Axios(originalRequest);
//         }
//       }
//     }

//     return Promise.reject(error);
//   }
// );

// Token refresher
const refreshAccessToken = async (refreshToken) => {
  try {
    const response = await axios.post(
      `${baseURL}/api/user/refresh-token`,
      {},
      {
        headers: {
          Authorization: `Bearer ${refreshToken}`
        }
      }
    );
    return response.data.data.accessToken;
  } catch (err) {
    console.error("Refresh token failed", err);
  }
};

export default Axios;
