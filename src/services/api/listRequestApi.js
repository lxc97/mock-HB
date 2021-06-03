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

  //delete request
  delete: (data) => {
    console.log({ data });
    const url = `/requests/destroy/${data.payload}`;
    return axiosClient.delete(url);
  },

   //////update request
   put: (data) => {
    console.log("api update re", { data })
    const url = `/requests/update/${data.payload.request_id}`;
    return axiosClient.put(url, data.payload);
},
};
export default listRequestApi;
