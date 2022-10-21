import { Camera } from './Camera';
import { Promo } from './Promo';
import { Review } from './Review';

export type InitialState = {
  isCamerasLoading: boolean;
  cameras: Camera[];
  promo: Promo;
  isPromoLoading: boolean;
  openedCameraCard: Camera;
  isCameraCardLoading: boolean;
  similarCameraCards: Camera[];
  isSimilarCameraCardsLoading: boolean;
  reviews: Review[];
  isReviewsLoading: boolean;
  isReviewSuccesfullyPosted: boolean;
}
