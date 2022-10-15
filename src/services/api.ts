import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import { NavigateFunction } from 'react-router-dom';
import { APIRoute, AppRoute, ConnectionParams, StatusCodes } from '../const';
import { Camera } from '../types/Camera';
import { HttpErrors } from '../types/HttpErrors';
import { Review, ReviewPost } from '../types/Review';

const options: AxiosRequestConfig = {
  baseURL: String(ConnectionParams.BaseURL),
  timeout: Number(ConnectionParams.Timeout),
};

export const createAPI = (): AxiosInstance => axios.create(options);
const api = createAPI();

export default api;

export const fetchChosenItem = async (
  id: number,
  callbackForSetItemLoadingStatus: React.Dispatch<React.SetStateAction<boolean>>,
  callbackForSetItem: React.Dispatch<React.SetStateAction<Camera>>,
  calbackForNavigate: NavigateFunction
) => {
  await api.get<Camera>(`${APIRoute.Cameras}/${id}`)
    .then( ({data}) => {
      callbackForSetItemLoadingStatus(false);
      callbackForSetItem(data);
    },
    (error: HttpErrors) => {
      if (error.response.status === StatusCodes.NOT_FOUND) {
        calbackForNavigate(AppRoute.NotFound);
      }
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

export const fetchItemReviews = async (
  id: number,
  callbackForSetReviewLoadingStatus: React.Dispatch<React.SetStateAction<boolean>>,
  callbackForSetReviews: React.Dispatch<React.SetStateAction<Review[]>>,
) => {
  await api.get<Review[]>(`${APIRoute.Cameras}/${id}/reviews`)
    .then( ({data}) => {
      callbackForSetReviewLoadingStatus(false);
      callbackForSetReviews(data);
    }
    );
};

export const postReview = async (
  review: ReviewPost,
  callbackForSuccessMessage: React.Dispatch<React.SetStateAction<boolean>>
) => {
  await api.post<ReviewPost>(APIRoute.Reviews, review)
    .then( () => {
      callbackForSuccessMessage(true);
    }
    );
};
