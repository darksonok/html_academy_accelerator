import { createAction } from '@reduxjs/toolkit';
import { Camera } from '../types/Camera';

export const loadCameras = createAction('goods/camers', (cameras: Camera[]) => ({
  payload: cameras
}));

export const changeCameraLoadingStatus = createAction('goods/camerasLoading', (loadingStatus: boolean) => ({
  payload: loadingStatus
}));
