import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import { ConnectionParams } from '../const';


const options: AxiosRequestConfig = {
  baseURL: String(ConnectionParams.BaseURL),
  timeout: Number(ConnectionParams.Timeout),
};

export const createAPI = (): AxiosInstance => axios.create(options);
const api = createAPI();

export default api;

