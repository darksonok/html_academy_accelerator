import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { APIRoute, AppRoute, StatusCodes } from '../const';
import { Camera } from '../types/Camera';
import { HttpErrors } from '../types/HttpErrors';
import { Promo } from '../types/Promo';
import { Review, ReviewPost } from '../types/Review';
import { AppDispatch, State } from '../types/state';
import { changeCameraLoadingStatus, changeOpenedCameraCardLoadingStatus, changePromoLoadingStatus, changeReviewsLoadingStatus, changeSimilarCameraCardsLoadingStatus, changeSuccesfullReviewPostStatus, loadCameras, loadOpenedCameraCard, loadPromo, loadReviews, loadSimilarCameraCards, redirectToRoute } from './actions';

type thunkOptions = {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
};

export const fetchCamerasAction = createAsyncThunk<void, undefined, thunkOptions>(
  'data/fetchCameras',
  async (_arg, {dispatch, extra: api}) => {
    const {data} = await api.get<Camera[]>(APIRoute.Cameras);
    dispatch(loadCameras(data));
    dispatch(changeCameraLoadingStatus(false));
  }
);

export const fetchPromoAction = createAsyncThunk<void, undefined, thunkOptions>(
  'data/fetchPromo',
  async (_arg, {dispatch, extra: api}) => {
    const {data} = await api.get<Promo>(APIRoute.Promo);
    dispatch(loadPromo(data));
    dispatch(changePromoLoadingStatus(false));
  }
);

export const fetchOpenedCameraCardAction = createAsyncThunk<void, number, thunkOptions>(
  'data/fetchOpenedCard',
  async (id, {dispatch, extra: api}) => {
    await api.get<Camera>(`${APIRoute.Cameras}/${id}`)
      .then(({ data }) => {
        dispatch(loadOpenedCameraCard(data));
        dispatch(changeOpenedCameraCardLoadingStatus(false));
      },
      (error: HttpErrors) => {
        if (error.response.status === StatusCodes.NOT_FOUND) {
          dispatch(redirectToRoute(AppRoute.NotFound));
        }
      });
  },
);

export const fetchSimilarCameraCardsAction = createAsyncThunk<void, number, thunkOptions>(
  'data/fetchSimilarCameraCards',
  async (id, {dispatch, extra: api}) => {
    await api.get<Camera[]>(`${APIRoute.Cameras}/${id}/similar`)
      .then( ({data}) => {
        dispatch(changeSimilarCameraCardsLoadingStatus(false));
        dispatch(loadSimilarCameraCards(data));
      }
      );
  }
);

export const fetchReviewsAction = createAsyncThunk<void, number, thunkOptions>(
  'data/fetchReviews',
  async (id, {dispatch, extra: api}) => {
    await api.get<Review[]>(`${APIRoute.Cameras}/${id}/reviews`)
      .then( ({data}) => {
        dispatch(changeReviewsLoadingStatus(false));
        dispatch(loadReviews(data));
      }
      );
  }
);

export const postReviewAction = createAsyncThunk<void, ReviewPost, thunkOptions>(
  'data/postReview',
  async (review, {dispatch, extra: api}) => {
    await api.post<ReviewPost>(APIRoute.Reviews, review)
      .then( () => {
        dispatch(changeSuccesfullReviewPostStatus(true));
      }
      );
  }
);
