import axios from "axios";
import { REQUEST_TIME_OUT, URL_BASE_API } from "helpers/constants";

const client = axios.create({
  timeout: REQUEST_TIME_OUT,
  baseURL: URL_BASE_API,
});

client.interceptors.request.use(
  (config) => config,
  (error) => Promise.reject(error),
);

client.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject(error),
);

export default client;
