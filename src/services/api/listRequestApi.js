import axiosClient from "./axiosClient";

const listRequestApi = {
  getAll: (filters) => {
    const url = "/requests";
    return axiosClient.get(url, { params: filters.payload.params });
  },

  get: (id) => {
    const url = `/requests/${id}`;
    return axiosClient.get(url);
  },
  //******* */

  post: (data) => {
    console.log({ data });
    const url = "/requests/create";
    return axiosClient.post(url, data.payload.values);
  },
  getFilters: (filters) => {
    const url = "/requests";
    return axiosClient.get(url, { params: filters.payload.values });
  },
};
export default listRequestApi;
