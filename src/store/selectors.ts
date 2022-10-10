import { State } from '../types/state';

const getCamerasLoadingStatus = (state: State) => state.isCamerasLoading;
const getCameras = (state: State) => state.cameras;
const getPromo = (state: State) => state.promo;
const getPromoLoadingStatus = (state: State) => state.isPromoLoading;

export {
  getCamerasLoadingStatus,
  getCameras,
  getPromo,
  getPromoLoadingStatus,
};
