import dayjs from 'dayjs';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { ReviewToShowParams } from '../../const';
import { useAppSelector } from '../../hooks/use-app-selector';
import { store } from '../../store';
import { changeReviewsLoadingStatus, loadReviews } from '../../store/actions';
import { fetchReviewsAction } from '../../store/api-actions';
import { getReviews, getReviewsLoadingStatus } from '../../store/selectors';
import { Review } from '../../types/Review';
import ReviewForm from './review-form/review-form';
import ReviewElement from './review/review';

function ReviewsList () {
  const dispatch = useDispatch();
  const { id } = useParams();
  const [shownReviews, setShownReview] = useState(ReviewToShowParams.InitialShownReviews);
  const [isReviewModalOpen, setReviewModalOpenStatus] = useState(false);
  const reviews: Review[] = useAppSelector(getReviews);
  const isReviewsLoading = useAppSelector(getReviewsLoadingStatus);
  const handleReviewButtonClick = () => {
    setReviewModalOpenStatus(true);
  };
  const handleMoreReviewButtonClick = () => {
    setShownReview(shownReviews + ReviewToShowParams.ReviewToShowStep);
  };
  const handleReviewCloseButtonClick = (modalStatus: boolean) => {
    setReviewModalOpenStatus(modalStatus);
  };

  useEffect(() => {
    store.dispatch(fetchReviewsAction(Number(id)));
    return (() => {
      dispatch(changeReviewsLoadingStatus(true));
      dispatch(loadReviews([] as Review[]));
    });
  }, [dispatch, id]);

  return (
    isReviewsLoading
      ? <p>Погодите, отзывы еще не загрузились</p>
      :
      <>
        <section className="review-block">
          <div className="container">
            <div className="page-content__headed">
              <h2 className="title title--h3">Отзывы</h2>
              <button
                className="btn"
                type="button"
                onClick={handleReviewButtonClick}
              >
                Оставить свой отзыв
              </button>
            </div>
            <ul className="review-block__list">
              {reviews.slice()
                .sort((a, b) => dayjs(b.createAt).diff(dayjs(a.createAt)))
                .slice(0, shownReviews)
                .map((review) => (
                  <ReviewElement key={`review-${review.id}`} review={review} />
                ))}
            </ul>
            <div className="review-block__buttons">
              {shownReviews < reviews.length
            &&
              <button
                className="btn btn--purple"
                type="button"
                onClick={handleMoreReviewButtonClick}
              >
                Показать больше отзывов
              </button>}
            </div>
          </div>
        </section>
        {isReviewModalOpen && <ReviewForm onCloseButtonClick={handleReviewCloseButtonClick} />}
      </>
  );
}

export default ReviewsList;
