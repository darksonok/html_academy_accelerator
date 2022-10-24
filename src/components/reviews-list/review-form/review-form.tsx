import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { HumanazeRatingsMap, ReviewToShowParams, numberOfRatingStarsValue } from '../../../const';
import { useAppDispatch } from '../../../hooks/use-app-dispatch';
import { useAppSelector } from '../../../hooks/use-app-selector';
import { store } from '../../../store';
import { changeSuccesfullReviewPostStatus } from '../../../store/actions';
import { fetchReviewsAction, postReviewAction } from '../../../store/api-actions';
import { getReviewSubmitStatus } from '../../../store/selectors';
import { ReviewPost } from '../../../types/Review';
import ReviewFormSuccess from './review-form-success/review-form-success';
import './review-form.css';

type ReviewFormProps = {
  onCloseButtonClick: (modalStatus: boolean) => void;
}

function ReviewForm ( { onCloseButtonClick }: ReviewFormProps) {
  const dispatch = useAppDispatch();
  const { id } = useParams();

  const handleCloseButtonClick = (modalStatus: boolean) => {
    onCloseButtonClick(modalStatus);
    store.dispatch(fetchReviewsAction(Number(id)));
    dispatch(changeSuccesfullReviewPostStatus(false));
  };

  const isSubmitSuccesed = useAppSelector(getReviewSubmitStatus);
  const [formData, setFormData] = useState({
    cameraId: Number(id),
    rating: 0,
  } as ReviewPost);
  const [isRatingValid, setRatingValidationStatus] = useState(true);
  const [isNameValid, setNameValidationStatus] = useState(true);
  const [isAdvantageValid, setAdvantageValidationStatus] = useState(true);
  const [isDisadvantageValid, setDisadvantageValidationStatus] = useState(true);
  const [isReviewValid, setReviewValidationStatus] = useState(true);

  const handleEscapeKeyClick = (evt: KeyboardEvent) => {
    evt.key === 'Escape' && handleCloseButtonClick(false);
  };

  useEffect(() => {
    document.addEventListener('keyup', handleEscapeKeyClick);
    return (() => {
      document.removeEventListener('keyup', handleEscapeKeyClick);
    });
  });

  const validateForm = () => {

    formData.rating !== 0 ? setRatingValidationStatus(true) : setRatingValidationStatus(false);
    formData.userName.length !== 0 ? setNameValidationStatus(true) : setNameValidationStatus(false);
    formData.advantage.length !== 0 ? setAdvantageValidationStatus(true) : setAdvantageValidationStatus(false);
    formData.disadvantage.length !== 0 ? setDisadvantageValidationStatus(true) : setDisadvantageValidationStatus(false);
    formData.review.length > 5 ? setReviewValidationStatus(true) : setReviewValidationStatus(false);
    return (
      formData.rating !== 0
      && formData.userName.length !== 0
      && formData.advantage.length !== 0
      && formData.disadvantage.length !== 0
      && formData.review.length > 5
    );
  };

  const handleChangeEvent = (evt: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {name, value} = evt.target;
    name === Object.keys(formData)[1]
      ? setFormData({...formData, [name]: Number(value)})
      : setFormData({...formData, [name]: value});
  };

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    validateForm()
    && dispatch(postReviewAction(formData));
  };

  return (
    isSubmitSuccesed
      ? <ReviewFormSuccess onCloseButtonClick={handleCloseButtonClick} />
      :
      <div className="modal is-active">
        <div className="modal__wrapper">
          <div
            className="modal__overlay"
            onClick={() => handleCloseButtonClick(false)}
          >

          </div>
          <div className="modal__content">
            <p className="title title--h4">Оставить отзыв</p>
            <div className="form-review">
              <form method="post" onSubmit={handleFormSubmit}>
                <div className="form-review__rate">
                  <fieldset className={`rate form-review__item ${!isRatingValid ? 'is-invalid' : ''}`} >
                    <legend className="rate__caption">Рейтинг
                      <svg width="9" height="9" aria-hidden="true">
                        <use xlinkHref="#icon-snowflake"></use>
                      </svg>
                    </legend>
                    <div className="rate__bar">
                      <div className="rate__group">
                        {numberOfRatingStarsValue.map((ratingStar) => (
                          <>
                            <input
                              className="visually-hidden"
                              id={`star=${ratingStar}`}
                              name="rating"
                              type="radio"
                              value={ReviewToShowParams.NormilizeConstantForReviewForm - ratingStar}
                              onChange={handleChangeEvent}
                            />
                            <label
                              className="rate__label"
                              htmlFor={`star=${ratingStar}`}
                              title={(HumanazeRatingsMap.filter((ratingValue) => ratingValue.rating === ratingStar))[0].name}
                            >
                            </label>
                          </>
                        ))}
                      </div>
                      <div className="rate__progress"><span className="rate__stars">{formData.rating}</span> <span>/</span> <span className="rate__all-stars">5</span>
                      </div>
                    </div>
                    <p className="rate__message">Нужно оценить товар</p>
                  </fieldset>
                  <div className={`custom-input form-review__item ${!isNameValid ? 'is-invalid' : ''}`}>
                    <label>
                      <span className="custom-input__label">Ваше имя
                        <svg width="9" height="9" aria-hidden="true">
                          <use xlinkHref="#icon-snowflake"></use>
                        </svg>
                      </span>
                      <input
                        type="text"
                        name="userName"
                        placeholder="Введите ваше имя"
                        required
                        onChange={handleChangeEvent}
                      />
                    </label>
                    <p className="custom-input__error">Нужно указать имя</p>
                  </div>
                  <div className={`custom-input form-review__item ${!isAdvantageValid ? 'is-invalid' : ''}`}>
                    <label>
                      <span className="custom-input__label">Достоинства
                        <svg width="9" height="9" aria-hidden="true">
                          <use xlinkHref="#icon-snowflake"></use>
                        </svg>
                      </span>
                      <input
                        type="text"
                        name="advantage"
                        placeholder="Основные преимущества товара"
                        required
                        onChange={handleChangeEvent}
                      />
                    </label>
                    <p className="custom-input__error">Нужно указать достоинства</p>
                  </div>
                  <div className={`custom-input form-review__item ${!isDisadvantageValid ? 'is-invalid' : ''}`}>
                    <label>
                      <span className="custom-input__label">Недостатки
                        <svg width="9" height="9" aria-hidden="true">
                          <use xlinkHref="#icon-snowflake"></use>
                        </svg>
                      </span>
                      <input
                        type="text"
                        name="disadvantage"
                        placeholder="Главные недостатки товара"
                        required
                        onChange={handleChangeEvent}
                      />
                    </label>
                    <p className="custom-input__error">Нужно указать недостатки</p>
                  </div>
                  <div className={`custom-textarea form-review__item ${!isReviewValid ? 'is-invalid' : ''}`}>
                    <label>
                      <span className="custom-textarea__label">Комментарий
                        <svg width="9" height="9" aria-hidden="true">
                          <use xlinkHref="#icon-snowflake"></use>
                        </svg>
                      </span>
                      <textarea
                        name="review"
                        minLength={5}
                        placeholder="Поделитесь своим опытом покупки"
                        onChange={handleChangeEvent}
                      >
                      </textarea>
                    </label>
                    <div className="custom-textarea__error">Нужно добавить комментарий</div>
                  </div>
                </div>
                <button className="btn btn--purple form-review__btn" type="submit">Отправить отзыв</button>
              </form>
            </div>
            <button
              className="cross-btn"
              type="button"
              aria-label="Закрыть попап"
              onClick={() => handleCloseButtonClick(false)}
            >
              <svg width="10" height="10" aria-hidden="true">
                <use xlinkHref="#icon-close"></use>
              </svg>
            </button>
          </div>
        </div>
      </div>
  );
}

export default ReviewForm;

