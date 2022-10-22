import { useEffect } from 'react';
import { Camera } from '../../types/Camera';

type AddItemModalProps = {
  cameraCard: Camera;
  onCloseButtonClick: (modalStatus: boolean) => void;
}

function AddItemModal ( { cameraCard, onCloseButtonClick }: AddItemModalProps) {

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
    <div className="modal is-active">
      <div className="modal__wrapper">
        <div
          className="modal__overlay"
          onClick={() => handleCloseButtonClick(false)}
        >
        </div>
        <div className="modal__content">
          <p className="title title--h4">Добавить товар в корзину</p>
          <div className="basket-item basket-item--short">
            <div className="basket-item__img">
              <img
                src={`/${cameraCard.previewImg}`}
                srcSet={`/${cameraCard.previewImg2x}`}
                width="140"
                height="120"
                alt={cameraCard.name}
              />

            </div>
            <div className="basket-item__description">
              <p className="basket-item__title">{cameraCard.name}</p>
              <ul className="basket-item__list">
                <li className="basket-item__list-item"><span className="basket-item__article">Артикул:</span> <span className="basket-item__number">{cameraCard.vendorCode}</span>
                </li>
                <li className="basket-item__list-item">{cameraCard.category}</li>
                <li className="basket-item__list-item">{cameraCard.level}</li>
              </ul>
              <p className="basket-item__price"><span className="visually-hidden">Цена:</span>{cameraCard.price} ₽</p>
            </div>
          </div>
          <div className="modal__buttons">
            <button className="btn btn--purple modal__btn modal__btn--fit-width" type="button">
              <svg width="24" height="16" aria-hidden="true">
                <use xlinkHref="#icon-add-basket"></use>
              </svg>Добавить в корзину
            </button>
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

export default AddItemModal;
