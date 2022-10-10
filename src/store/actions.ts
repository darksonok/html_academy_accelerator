import { createAction } from '@reduxjs/toolkit';
import { Camera } from '../types/Camera';
import { Promo } from '../types/Promo';

export const loadCameras = createAction('goods/camers', (cameras: Camera[]) => ({
  payload: cameras
}));

export const changeCameraLoadingStatus = createAction('goods/camerasLoading', (loadingStatus: boolean) => ({
  payload: loadingStatus
}));

export const loadPromo = createAction('goods/promo', (promo: Promo) => ({
  payload: promo
}));

export const changePromoLoadingStatus = createAction('goods/promoLoadingStatus', (promoLoadingStatus: boolean) => ({
  payload: promoLoadingStatus
}));

