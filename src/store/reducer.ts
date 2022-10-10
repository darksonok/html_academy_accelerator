import { createReducer } from '@reduxjs/toolkit';
import { InitialState } from '../types/initial-state';
import { changeCameraLoadingStatus, loadCameras } from './actions';

export const initialState: InitialState = {
  isCamerasLoading: true,
  cameras: []
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(loadCameras, (state, action) => {
      state.cameras = action.payload;
    })
    .addCase(changeCameraLoadingStatus, (state, action) => {
      state.isCamerasLoading = action.payload;
    });
});

export default reducer;

