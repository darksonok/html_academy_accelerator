import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { APIRoute } from '../const';
import { Camera } from '../types/Camera';
import { Promo } from '../types/Promo';
import { AppDispatch, State } from '../types/state';
import { changeCameraLoadingStatus, changePromoLoadingStatus, loadCameras, loadPromo } from './actions';

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
