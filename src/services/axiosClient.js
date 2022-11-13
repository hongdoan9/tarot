import axios from "axios";
import { stringify } from "qs";
export const API_ENDPOINT = "http://103.121.91.135:8080/api/tarot/";

const AxiosClient = axios.create({
  baseURL: API_ENDPOINT,
  responseType: "json",
  timeout: 50000,
  paramsSerializer: (params) => stringify(params, { arrayFormat: "repeat" }),
});

export default AxiosClient;

