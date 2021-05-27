import axiosClient from "./axiosClient";

const assigneeApi = {
  get: () => {
    const url = "/users/list-admin";
    return axiosClient.get(url);
  },
};
export default assigneeApi;
