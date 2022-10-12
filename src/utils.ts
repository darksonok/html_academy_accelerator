import dayjs from 'dayjs';
import { MonthsInParentCase, NUMBER_OF_CARDS_TO_PAGINATE } from './const';
import { Camera } from './types/Camera';
import 'dayjs/locale/ru';
import updateLocale from 'dayjs/plugin/updateLocale';

const getPaginationPages = (cameras: Camera[]) => {
  const paginationPages = [];
  for (let i = 1; i < (cameras.length / NUMBER_OF_CARDS_TO_PAGINATE) + 1; i++) {
    paginationPages.push(i);
  }
  return paginationPages;
};

const humanizeDate = (date: string) => {
  dayjs.extend(updateLocale);
  dayjs.updateLocale('ru', {
    months: MonthsInParentCase
  });
  const humanizedDate = dayjs(date).locale('ru').format('MM MMMM');
  return humanizedDate;
};

export {
  getPaginationPages,
  humanizeDate
};
