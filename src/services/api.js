import axios from "axios";

export const api = ({ method, data, endpoint }) => {
  return axios({
    baseURL: "https://parque-para-perros.herokuapp.com/api",
    method: method,
    data,
    url: endpoint,
  });
};
