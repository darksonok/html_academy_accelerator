import { createReducer } from '@reduxjs/toolkit';
import { Camera } from '../types/Camera';
import { InitialState } from '../types/initial-state';
import { Promo } from '../types/Promo';
import { Review } from '../types/Review';
import { changeCameraLoadingStatus, changeOpenedCameraCardLoadingStatus, changePromoLoadingStatus, changeReviewsLoadingStatus, changeSimilarCameraCardsLoadingStatus, changeSuccesfullReviewPostStatus, loadCameras, loadOpenedCameraCard, loadPromo, loadReviews, loadSimilarCameraCards } from './actions';

export const initialState: InitialState = {
  isCamerasLoading: true,
  cameras: [] as Camera[],
  promo: {} as Promo,
  isPromoLoading: true,
  openedCameraCard: {} as Camera,
  isCameraCardLoading: true,
  similarCameraCards: [] as Camera [],
  isSimilarCameraCardsLoading: true,
  reviews: [] as Review[],
  isReviewsLoading: true,
  isReviewSuccesfullyPosted:false,
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
    })
    .addCase(loadOpenedCameraCard, (state, action) => {
      state.openedCameraCard = action.payload;
    })
    .addCase(changeOpenedCameraCardLoadingStatus, (state, action) => {
      state.isCameraCardLoading = action.payload;
    })
    .addCase(loadSimilarCameraCards, (state, action) => {
      state.similarCameraCards = action.payload;
    })
    .addCase(changeSimilarCameraCardsLoadingStatus, (state, action) => {
      state.isSimilarCameraCardsLoading = action.payload;
    })
    .addCase(changeReviewsLoadingStatus, (state, action) => {
      state.isReviewsLoading = action.payload;
    })
    .addCase(loadReviews, (state, action) => {
      state.reviews = action.payload;
    })
    .addCase(changeSuccesfullReviewPostStatus, (state, action) => {
      state.isReviewSuccesfullyPosted = action.payload;
    });
});

export default reducer;

