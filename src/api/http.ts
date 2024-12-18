import axios, { AxiosRequestConfig } from "axios";

const BASE_URL = "http://localhost:8080";
const DEFAULT_TIMEOUT = 30000;

export const createClient = (config?: AxiosRequestConfig) => {
  const axiosInstance = axios.create({
    baseURL: BASE_URL,
    timeout: DEFAULT_TIMEOUT,
    headers: {
      "content-type": "application/json",
    },
    withCredentials: true,
    ...config,
  });

  axiosInstance.interceptors.response.use((response) => {
    return response;
  }, (error) => {
    return Promise.reject(error);
  });

  return axiosInstance;
}

const httpClient = createClient();

export const fetchData = async () => {
  const response = await httpClient.get("/");
  return response.data;
}