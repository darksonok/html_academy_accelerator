import { Camera } from '../../types/Camera';

type CameraCardProps = {
  cameraCard: Camera;
}

function CameraCard ({cameraCard}: CameraCardProps) {
  return (
    <div className="product-card">
      <div className="product-card__img">
        <img src={cameraCard.previewImg} srcSet={cameraCard.previewImg2x} width="280" height="240" alt={cameraCard.name} />
      </div>
      <div className="product-card__info">
        <div className="rate product-card__rate">
          <svg width="17" height="16" aria-hidden="true">
            <use xlinkHref="#icon-full-star"></use>
          </svg>
          <svg width="17" height="16" aria-hidden="true">
            <use xlinkHref="#icon-full-star"></use>
          </svg>
          <svg width="17" height="16" aria-hidden="true">
            <use xlinkHref="#icon-full-star"></use>
          </svg>
          <svg width="17" height="16" aria-hidden="true">
            <use xlinkHref="#icon-star"></use>
          </svg>
          <svg width="17" height="16" aria-hidden="true">
            <use xlinkHref="#icon-star"></use>
          </svg>
          <p className="visually-hidden">Рейтинг: {cameraCard.rating}</p>
          <p className="rate__count"><span className="visually-hidden">Всего оценок:</span>{cameraCard.reviewCount}</p>
        </div>
        <p className="product-card__title">{cameraCard.name}</p>
        <p className="product-card__price"><span className="visually-hidden">Цена:</span>{cameraCard.price} ₽
        </p>
      </div>
      <div className="product-card__buttons">
        <button className="btn btn--purple product-card__btn" type="button">Купить
        </button>
        <a className="btn btn--transparent" href="#">Подробнее
        </a>
      </div>
    </div>
  );
}

export default CameraCard;
