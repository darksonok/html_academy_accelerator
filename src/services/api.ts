import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import { APIRoute, ConnectionParams } from '../const';
import { Camera } from '../types/Camera';

const options: AxiosRequestConfig = {
  baseURL: String(ConnectionParams.baseURL),
  timeout: Number(ConnectionParams.timeout),
};

const createAPI = (): AxiosInstance => axios.create(options);
const api = createAPI();

export default api;

export const fetchChosenItem = async (
  id: number,
  callbackForSetItemLoadingStatus: React.Dispatch<React.SetStateAction<boolean>>,
  callbackForSetItem: React.Dispatch<React.SetStateAction<Camera>>,
) => {
  await api.get<Camera>(`${APIRoute.Cameras}/${id}`)
    .then( ({data}) => {
      callbackForSetItemLoadingStatus(false);
      callbackForSetItem(data);
    }
    );
};

export const fetchSimilarItems = async (
  id: number,
  callbackForSetItemLoadingStatus: React.Dispatch<React.SetStateAction<boolean>>,
  callbackForSetItem: React.Dispatch<React.SetStateAction<Camera[]>>,
) => {
  await api.get<Camera[]>(`${APIRoute.Cameras}/${id}/similar`)
    .then( ({data}) => {
      callbackForSetItemLoadingStatus(false);
      callbackForSetItem(data);
    }
    );
};
