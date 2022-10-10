import { NUMBER_OF_CARDS_TO_PAGINATE } from './const';
import { Camera } from './types/Camera';

const getPaginationPages = (cameras: Camera[]) => {
  const paginationPages = [];
  for (let i = 1; i < (cameras.length / NUMBER_OF_CARDS_TO_PAGINATE) + 1; i++) {
    paginationPages.push(i);
  }
  return paginationPages;
};

export {
  getPaginationPages
};
