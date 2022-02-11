import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios';

const BASE_PREFIX = '/api';

const service: AxiosInstance = axios.create({
  baseURL: BASE_PREFIX,
  timeout:5000,
  headers: {
    'Content-Type': 'application/json',
  },
})

// 请求拦截器
service.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    // TODO
    return config;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  },
);

// 响应拦截器
service.interceptors.response.use(
  (response: AxiosResponse) => {
    if (response.status === 200) {
      return response;
    }
    return response;
  },
  (error: AxiosError) => {
    const { response } = error;
    if (response) {
      return Promise.reject(response.data);
    }
    return Promise.reject(error);
  },
);

export default service;