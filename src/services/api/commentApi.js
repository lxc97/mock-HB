import axiosClient from "./axiosClient";

const commentApi = {
  get: (data) => {
    const url = `/requests/show/${data.payload.id.id}`;
    return axiosClient.get(url, { params: data.payload.params });
  },
  post: (data) => {
    const url = "/comment/create";
    return axiosClient.post(url, data);
  },
};
export default commentApi;
