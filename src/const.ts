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
  Item ='/item/:id',
  CatalogPage = '/:pageId'
}

const NUMBER_OF_CARDS_TO_PAGINATE = 9;

const NumberOfRatingStarsValue = [1,2,3,4,5];

const BreadcrumbsPaths = {
  catalog: {
    name: 'Каталог',
    path: '/1',
  }
};

const TabsValues = {
  Description: 'Описание',
  Characteristics: 'Характеристики'
};

export {
  NUMBER_OF_CARDS_TO_PAGINATE,
  NumberOfRatingStarsValue,
  BreadcrumbsPaths,
  TabsValues
};

