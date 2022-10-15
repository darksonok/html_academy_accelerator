import { nanoid } from '@reduxjs/toolkit';
import { Camera } from '../types/Camera';
import { Promo } from '../types/Promo';
import { datatype, lorem, name, random, system } from 'faker';
import { Review } from '../types/Review';
import { numberOfRatingStarsValue } from '../const';

export const makeFakeCameraCard = (): Camera => ({
  id: Number(nanoid()),
  name: name.title(),
  vendorCode: random.arrayElement(),
  type: random.word(),
  category: random.word(),
  description: lorem.paragraph(),
  level: random.word(),
  rating: Number(datatype.number(numberOfRatingStarsValue.length)),
  price: Number(datatype.number()),
  previewImg: system.filePath(),
  previewImg2x: system.filePath(),
  previewImgWebp: system.filePath(),
  previewImgWebp2x: system.filePath(),
  reviewCount: Number(datatype.number()),
});

export const makeFakeCameraCards = (): Camera[] => {
  const fakeCameraCards = new Array(datatype.number()).map((elem) => {
    const fakeCameraCard = makeFakeCameraCard();
    return fakeCameraCard;
  });
  return fakeCameraCards;
};

export const makeFakePromo = (): Promo => ({
  id: Number(nanoid()),
  name: name.title(),
  previewImg: system.filePath(),
  previewImg2x: system.filePath(),
  previewImgWebp: system.filePath(),
  previewImgWebp2x: system.filePath(),
});

export const makeFakeReview = (): Review => ({
  id: nanoid(),
  userName: name.title(),
  advantage: lorem.paragraph(),
  disadvantage: lorem.paragraph(),
  review: lorem.paragraphs(),
  rating: Number(datatype.number(numberOfRatingStarsValue.length)),
  createAt: String(new Date()),
  cameraId: Number(nanoid()),
});

