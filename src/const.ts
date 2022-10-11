export const ConnectionParams = {
  baseURL: 'https://camera-shop.accelerator.pages.academy',
  timeout: 5000,
};

export const APIRoute = {
  Cameras: '/cameras',
  Promo: '/promo',
};

export enum AppRoute {
  Main = '/',
  Item ='/item/:pageId',
  CatalogPage = '/:pageId'
}

const NUMBER_OF_CARDS_TO_PAGINATE = 9;

const NUMBER_OF_RATING_STARS_VALUE = [1,2,3,4,5];

export {
  NUMBER_OF_CARDS_TO_PAGINATE,
  NUMBER_OF_RATING_STARS_VALUE
};

