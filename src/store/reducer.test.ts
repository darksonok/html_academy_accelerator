import { Camera } from '../types/Camera';
import { Promo } from '../types/Promo';
import { Review } from '../types/Review';
import { makeFakeCameraCards, makeFakePromo } from '../utils/mock';
import { changeCameraLoadingStatus, changePromoLoadingStatus, loadCameras, loadPromo } from './actions';
import reducer from './reducer';

const mockCameraCards = makeFakeCameraCards();
const mockPromo = makeFakePromo();
const state = {
  isCamerasLoading: true,
  cameras: [],
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


describe('Reducer: reducer', () => {
  it('without parameters return initial state', () => {
    expect(reducer(void 0, {type: 'UNKNOW_ACTION'}))
      .toEqual({
        isCamerasLoading: true,
        cameras: [],
        promo: {} as Promo,
        isPromoLoading: true,
      });
  });

  it('should load cards into state after loadCards action', () => {
    expect(reducer(state, loadCameras(mockCameraCards)))
      .toEqual({
        isCamerasLoading: true,
        cameras: mockCameraCards,
        promo: {} as Promo,
        isPromoLoading: true,
      });
  });

  it('should change cardsLoading status after loading change action', () => {
    expect(reducer(state, changeCameraLoadingStatus(false)))
      .toEqual({
        isCamerasLoading: false,
        cameras: [],
        promo: {} as Promo,
        isPromoLoading: true,
      });
  });

  it('should load promo after loadingPromo action', () => {
    expect(reducer(state, loadPromo(mockPromo)))
      .toEqual(
        {
          isCamerasLoading: true,
          cameras: [],
          promo: mockPromo,
          isPromoLoading: true,
        }
      );
  });

  it('should change promoLoading status after promoLoading change action', () => {
    expect(reducer(state, changePromoLoadingStatus(false)))
      .toEqual(
        {
          isCamerasLoading: true,
          cameras: [],
          promo: {} as Promo,
          isPromoLoading: false,
        }
      );
  });
});
