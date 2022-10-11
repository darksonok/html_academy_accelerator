import { NUMBER_OF_RATING_STARS_VALUE } from '../../const';

type RatingProps = {
  currentRating: number;
}

function Rating ( { currentRating}: RatingProps) {
  return (
    <>
      {NUMBER_OF_RATING_STARS_VALUE.map((ratingStar) => (
        <svg key={`${ratingStar}-rating`} width="17" height="16" aria-hidden="true">
          <use xlinkHref={ratingStar <= currentRating ? '#icon-full-star' : '#icon-star'}></use>
        </svg>
      ))}
    </>
  );
}

export default Rating;
