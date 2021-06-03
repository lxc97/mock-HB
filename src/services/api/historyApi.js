import axiosClient from "./axiosClient";

const historyApi = {
  get: (filters) => {
    const url = "/comment";
    return axiosClient.get(url, { params: filters.payload.params });
  },
};
export default historyApi;
