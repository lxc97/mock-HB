import axiosClient from "./axiosClient";

const requestDetailApi = {
  get: (id) => {
    const url = `/requests/show/${id}`;
    return axiosClient.get(url);
  },
};
export default requestDetailApi;
