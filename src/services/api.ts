import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import { ConnectionParams } from '../const';

const options: AxiosRequestConfig = {
  baseURL: String(ConnectionParams.baseURL),
  timeout: Number(ConnectionParams.timeout),
};

const createAPI = (): AxiosInstance => axios.create(options);
const api = createAPI();

export default api;
