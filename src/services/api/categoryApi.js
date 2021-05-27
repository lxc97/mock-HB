import axiosClient from "./axiosClient";

const categoryApi = {
  get: () => {
    const url = "/categories";
    return axiosClient.get(url);
  },

  post: (data) => {
    const url = "/categories/create";
    return axiosClient.post(url, data.payload);
  },

  put: (data) => {
    const url = `/categories/update/${data.payload.id}`;
    return axiosClient.put(url, data.payload);
  },

  delete: (data) => {
    console.log({data})
    const url = `/categories/destroy/${data.payload}`;
    return axiosClient.delete(url);
  },
};
export default categoryApi;
