import { Camera } from './Camera';
import { Promo } from './Promo';

export type InitialState = {
  isCamerasLoading: boolean;
  cameras: Camera[];
  promo: Promo;
  isPromoLoading: boolean;
}
