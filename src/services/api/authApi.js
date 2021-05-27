import axiosClient from "./axiosClient";

const LoginApi = {
  login: (data) => {
    const url = "/login";
    return axiosClient.post(url, data);
  },
  logout: (data) => {
    const url = "/logout";
    return axiosClient.get(url);
  },
};
export default LoginApi;
