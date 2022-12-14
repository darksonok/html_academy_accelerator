import { useEffect, useRef } from 'react';
import './review-form-success.css';

type ReviewFormSuccessProps = {
  onCloseButtonClick: (modalStatus: boolean) => void;
}

function ReviewFormSuccess ({ onCloseButtonClick }: ReviewFormSuccessProps) {
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const handleLastElementBlur = () => {
    if(buttonRef.current){
      buttonRef.current.focus();
    }
  };
  const handleCloseButtonClick = (modalStatus: boolean) => {
    onCloseButtonClick(modalStatus);
  };

  const handleEscapeKeyClick = (evt: KeyboardEvent) => {
    evt.key === 'Escape' && handleCloseButtonClick(false);
  };

  useEffect(() => {
    document.addEventListener('keyup', handleEscapeKeyClick);
    return (() => {
      document.removeEventListener('keyup', handleEscapeKeyClick);
    });
  });

  return (
    <div className="modal is-active modal--narrow">
      <div className="modal__wrapper">
        <div
          className="modal__overlay"
          onClick={() => handleCloseButtonClick(false)}
        >
        </div>
        <div className="modal__content">
          <p className="title title--h4">Спасибо за отзыв</p>
          <svg className="modal__icon" width="80" height="78" aria-hidden="true">
            <use xlinkHref="#icon-review-success"></use>
          </svg>
          <div className="modal__buttons">
            <button
              className="btn btn--purple modal__btn modal__btn--fit-width"
              type="button"
              onClick={() => {
                handleCloseButtonClick(false);
              }}
              autoFocus
              ref={buttonRef}
            >
              Вернуться к покупкам
            </button>
          </div>
          <button
            className="cross-btn"
            type="button"
            aria-label="Закрыть попап"
            onClick={() => {
              handleCloseButtonClick(false);
            }}
            onBlur={handleLastElementBlur}
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

export default ReviewFormSuccess;

