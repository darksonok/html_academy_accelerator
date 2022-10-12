export const ConnectionParams = {
  baseURL: 'https://camera-shop.accelerator.pages.academy',
  timeout: 5000,
};

export const APIRoute = {
  Cameras: '/cameras',
  Promo: '/promo',
  Reviews: '/reviews'
};

export enum AppRoute {
  Main = '/',
  Item ='/item/:id',
  CatalogPage = '/catalog/:pageId',
  NotFound = '/not_found',
}

const NUMBER_OF_CARDS_TO_PAGINATE = 9;

const NumberOfRatingStarsValue = [1,2,3,4,5];

const BreadcrumbsPaths = {
  catalog: {
    name: 'Каталог',
    path: '/catalog/1',
  }
};

const TabsValues = {
  Description: 'Описание',
  Characteristics: 'Характеристики'
};

const SIMILAR_ITEMS_SHOW_STEP = 1;
const InitialSimilarItemToShow = [0,1,2];
const NUMBER_OF_FIRST_INITIAL_SIMILAR_ITEM_TO_SHOW = 0;
const MonthsInParentCase = [
  'Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля',
  'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря'
];
const INITIAL_SHOWN_REVIEWS = 3;
const REVIEW_TO_SHOW_STEP = 3;

const HumanazeRatingMap = [
  {
    rating: 1,
    name: 'Ужасно'
  },
  {
    rating: 2,
    name: 'Плохо'
  },
  {
    rating: 3,
    name: 'Нормально'
  },
  {
    rating: 4,
    name: 'Хорошо'
  },
  {
    rating: 5,
    name: 'Отлично'
  },
];

const NORMILIZE_CONSTANT_FOR_REVIEW_FORM = 6;

const StatusCodes = {
  NOT_FOUND: 404
};

export {
  NUMBER_OF_CARDS_TO_PAGINATE,
  NumberOfRatingStarsValue,
  BreadcrumbsPaths,
  TabsValues,
  SIMILAR_ITEMS_SHOW_STEP,
  InitialSimilarItemToShow,
  NUMBER_OF_FIRST_INITIAL_SIMILAR_ITEM_TO_SHOW,
  MonthsInParentCase,
  INITIAL_SHOWN_REVIEWS,
  REVIEW_TO_SHOW_STEP,
  HumanazeRatingMap,
  NORMILIZE_CONSTANT_FOR_REVIEW_FORM,
  StatusCodes
};

