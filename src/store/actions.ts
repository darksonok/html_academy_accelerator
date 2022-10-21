import { createAction } from '@reduxjs/toolkit';
import { Camera } from '../types/Camera';
import { Promo } from '../types/Promo';
import { Review } from '../types/Review';

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

export const loadOpenedCameraCard = createAction('goods/openedCameraCard', (cameraCard: Camera) => ({
  payload: cameraCard
}));

export const changeOpenedCameraCardLoadingStatus = createAction('goods/OpenedCameraCardLoadingStatus', (openCameraCardLoadingStatus: boolean) => ({
  payload: openCameraCardLoadingStatus
}));

export const redirectToRoute = createAction('router/redirectToRoute', (route: string) => ({
  payload: route
}));

export const loadSimilarCameraCards = createAction('goods/similarCameraCards', (cameraCards: Camera[]) => ({
  payload: cameraCards
}));

export const changeSimilarCameraCardsLoadingStatus = createAction('goods/SimilarCameraCardsLoadingStatus', (loadingStatus: boolean) => ({
  payload: loadingStatus
}));

export const loadReviews = createAction('goods/reviews', (reviews: Review[]) => ({
  payload: reviews
}));

export const changeReviewsLoadingStatus = createAction('goods/reviewsLoadingStatus', (reviewLoadingStatus: boolean) => ({
  payload: reviewLoadingStatus
}));

export const changeSuccesfullReviewPostStatus = createAction('goods/reviewPost', (postStatus: boolean) => ({
  payload: postStatus
}));
