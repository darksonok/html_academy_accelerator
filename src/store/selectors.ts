import { State } from '../types/state';

const getCamerasLoadingStatus = (state: State) => state.isCamerasLoading;
const getCameras = (state: State) => state.cameras;

export {
  getCamerasLoadingStatus,
  getCameras
};
