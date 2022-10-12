import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { INITIAL_SHOWN_REVIEWS, REVIEW_TO_SHOW_STEP } from '../../const';
import { fetchIremReviews } from '../../services/api';
import { Review } from '../../types/Review';
import ReviewElement from './review/review';

function ReviewsList () {

  const { id } = useParams();
  const [reviews, setReviews] = useState([] as Review[]);
  const [isReviewsLoading, setReviewsLoadingStatus] = useState(true);
  const [shownReviews, setShownReview] = useState(INITIAL_SHOWN_REVIEWS);

  useEffect(() => {
    fetchIremReviews(Number(id), setReviewsLoadingStatus, setReviews);
    return (() => setShownReview(INITIAL_SHOWN_REVIEWS));
  }, [id]);

  return (
    isReviewsLoading
      ? <p>Погодите, отзывы еще не загрузились</p>
      :
      <section className="review-block">
        <div className="container">
          <div className="page-content__headed">
            <h2 className="title title--h3">Отзывы</h2>
            <button className="btn" type="button">Оставить свой отзыв</button>
          </div>
          <ul className="review-block__list">
            {reviews.slice(0, shownReviews).map((review) => (
              <ReviewElement key={`review-${review.id}`} review={review} />
            ))}
          </ul>
          <div className="review-block__buttons">
            {shownReviews < reviews.length
            &&
              <button
                className="btn btn--purple"
                type="button"
                onClick={() => setShownReview(shownReviews + REVIEW_TO_SHOW_STEP)}
              >
                Показать больше отзывов
              </button>}
          </div>
        </div>
      </section>
  );
}

export default ReviewsList;
