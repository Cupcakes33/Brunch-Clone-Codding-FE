import axios from "axios";
import { Cookies } from "react-cookie";

export const instance = axios.create({
  baseURL: process.env.REACT_APP_SERVER,
});

const cookie = new Cookies();

instance.interceptors.request.use(function (config) {
  config.headers.authorization = `bearer ${cookie.get("token")}`;
  return config;
});

instance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error?.response.status === 401) {
      cookie.remove("token");
      return 401;
    }
  }
);
