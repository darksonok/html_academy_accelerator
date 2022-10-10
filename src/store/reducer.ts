import { createReducer } from '@reduxjs/toolkit';
import { InitialState } from '../types/initial-state';
import { Promo } from '../types/Promo';
import { changeCameraLoadingStatus, changePromoLoadingStatus, loadCameras, loadPromo } from './actions';

export const initialState: InitialState = {
  isCamerasLoading: true,
  cameras: [],
  promo: {} as Promo,
  isPromoLoading: true,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(loadCameras, (state, action) => {
      state.cameras = action.payload;
    })
    .addCase(changeCameraLoadingStatus, (state, action) => {
      state.isCamerasLoading = action.payload;
    })
    .addCase(loadPromo, (state, action) => {
      state.promo = action.payload;
    })
    .addCase(changePromoLoadingStatus, (state, action) => {
      state.isPromoLoading = action.payload;
    });
});

export default reducer;

