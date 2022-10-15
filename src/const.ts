export const ConnectionParams = {
  BaseURL: 'https://camera-shop.accelerator.pages.academy',
  Timeout: 5000,
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
  Guarantee = '/guarantee',
  Delivery = '/delivery',
  About = '/about',
  Courses = '/courses',
  Blog = '/blog',
  Community = '/community',
  Faq = '/faq',
  Ask = '/ask',
  Basket = '/basket',
}

const NUMBER_OF_CARDS_TO_PAGINATE = 9;

const numberOfRatingStarsValue = [1,2,3,4,5];

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

const SimilarItemsParams = {
  SimilarItemToShowStep: 1,
  InitialSimilarItemsToShow: [0,1,2],
  NumberOfFirstInitialSimilarItemToShow: 0,
};

const MonthsInParentCase = [
  'Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля',
  'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря'
];

const ReviewToShowParams = {
  InitialShownReviews: 3,
  ReviewToShowStep: 3,
  NormilizeConstantForReviewForm: 6
};


const HumanazeRatingsMap = [
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

const StatusCodes = {
  NOT_FOUND: 404
};

export {
  NUMBER_OF_CARDS_TO_PAGINATE,
  numberOfRatingStarsValue,
  BreadcrumbsPaths,
  TabsValues,
  MonthsInParentCase,
  HumanazeRatingsMap,
  StatusCodes,
  SimilarItemsParams,
  ReviewToShowParams
};

