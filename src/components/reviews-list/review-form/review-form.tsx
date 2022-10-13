import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { HumanazeRatingMap, NORMILIZE_CONSTANT_FOR_REVIEW_FORM, NumberOfRatingStarsValue } from '../../../const';
import { postReview } from '../../../services/api';
import { ReviewPost } from '../../../types/Review';
import ReviewFormSuccess from './review-form-success/review-form-success';

type ReviewFormProps = {
  onCloseButtonClick: React.Dispatch<React.SetStateAction<boolean>>;
  forceUpdateFunction: () => Promise<void>;
}

function ReviewForm ( { onCloseButtonClick, forceUpdateFunction }: ReviewFormProps) {

  const { id } = useParams();
  const [isSubmitSuccesed, setSubmitSuccessStatus] = useState(false);
  const [formData, setFormData] = useState({
    cameraId: Number(id),
    rating: 0,
  } as ReviewPost);
  const [isRatingValid, setRatingValidationStatus] = useState(true);
  const [isNameValid, setNameValidationStatus] = useState(true);
  const [isAdvantageValid, setAdvantageValidationStatus] = useState(true);
  const [isDisadvantageValid, setDisadvantageValidationStatus] = useState(true);
  const [isReviewValid, setReviewValidationStatus] = useState(true);

  const onEscapeKeyClick = (evt: KeyboardEvent) => {
    evt.key === 'Escape' && onCloseButtonClick(false);
  };

  useEffect(() => {
    document.addEventListener('keyup', onEscapeKeyClick);
    return (() => {
      document.removeEventListener('keyup', onEscapeKeyClick);
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

  const onChange = (evt: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {name, value} = evt.target;
    name === Object.keys(formData)[1]
      ? setFormData({...formData, [name]: Number(value)})
      : setFormData({...formData, [name]: value});
  };

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    validateForm()
    && postReview(formData, setSubmitSuccessStatus);
  };

  return (
    isSubmitSuccesed
      ? <ReviewFormSuccess onCloseButtonClick={onCloseButtonClick} forceUpdateFunction={forceUpdateFunction}/>
      :
      <div className="modal is-active">
        <div className="modal__wrapper">
          <div
            className="modal__overlay"
            onClick={() => onCloseButtonClick(false)}
          >

          </div>
          <div className="modal__content">
            <p className="title title--h4">Оставить отзыв</p>
            <div className="form-review">
              <form method="post" onSubmit={onSubmit}>
                <div className="form-review__rate">
                  <fieldset className={`rate form-review__item ${!isRatingValid ? 'is-invalid' : ''}`} >
                    <legend className="rate__caption">Рейтинг
                      <svg width="9" height="9" aria-hidden="true">
                        <use xlinkHref="#icon-snowflake"></use>
                      </svg>
                    </legend>
                    <div className="rate__bar">
                      <div className="rate__group">
                        {NumberOfRatingStarsValue.map((ratingStar) => (
                          <>
                            <input
                              className="visually-hidden"
                              id={`star=${ratingStar}`}
                              name="rating"
                              type="radio"
                              value={NORMILIZE_CONSTANT_FOR_REVIEW_FORM - ratingStar}
                              onChange={onChange}
                            />
                            <label
                              className="rate__label"
                              htmlFor={`star=${ratingStar}`}
                              title={(HumanazeRatingMap.filter((ratingValue) => ratingValue.rating === ratingStar))[0].name}
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
                        onChange={onChange}
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
                        onChange={onChange}
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
                        onChange={onChange}
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
                        onChange={onChange}
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
              onClick={() => onCloseButtonClick(false)}
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

