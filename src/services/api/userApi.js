import axiosClient from "./axiosClient";

const userApi = {
  get: (params) => {
    const url = "/users";
    return axiosClient.get(url, { params: params });
  },
};
export default userApi;
