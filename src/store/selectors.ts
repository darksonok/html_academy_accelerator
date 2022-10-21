import { State } from '../types/state';

const getCamerasLoadingStatus = (state: State) => state.isCamerasLoading;
const getCameras = (state: State) => state.cameras;
const getPromo = (state: State) => state.promo;
const getPromoLoadingStatus = (state: State) => state.isPromoLoading;
const getOpenedCameraCard = (state: State) => state.openedCameraCard;
const getOpenedCameraCardLoadingStatus = (state: State) => state.isCameraCardLoading;
const getSimilarCameraCards = (state: State) => state.similarCameraCards;
const getSimilarCameraCardsLoadingStatus = (state: State) => state.isSimilarCameraCardsLoading;
const getReviews = (state: State) => state.reviews;
const getReviewsLoadingStatus = (state: State) => state.isReviewsLoading;
const getReviewSubmitStatus = (state: State) => state.isReviewSuccesfullyPosted;

export {
  getCamerasLoadingStatus,
  getCameras,
  getPromo,
  getPromoLoadingStatus,
  getOpenedCameraCard,
  getOpenedCameraCardLoadingStatus,
  getSimilarCameraCards,
  getSimilarCameraCardsLoadingStatus,
  getReviews,
  getReviewsLoadingStatus,
  getReviewSubmitStatus
};
