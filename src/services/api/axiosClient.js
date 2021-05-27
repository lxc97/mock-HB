import axios from "axios";
import queryString from "query-string";
import { getToken } from "../../utils/LocalStorageHandler";
// Set up default config for http requests here

const token = getToken();

const axiosClient = axios.create({
  baseURL: `https://dev-api-talents03.hblab.dev/api/v1`, //demo baseURL
  // baseURL: `http://127.0.0.1:8000/api/v1`, //demo baseURL
  headers: {
    "content-type": "application/json",
    // "Authorization": "Bearer " + token,
  },
  paramsSerializer: (params) => queryString.stringify(params),
});
axiosClient.interceptors.request.use(async (config) => {
  config.headers["Authorization"] = "Bearer " + token;
  return config;
});

axiosClient.interceptors.response.use(
  (response) => {
    if (response && response.data) {
      return response.data;
    }
    return response;
  },
  (error) => {
    // Handle errors
    throw error;
  }
);
export default axiosClient;
