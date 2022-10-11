import { Link } from 'react-router-dom';
import { NUMBER_OF_RATING_STARS_VALUE } from '../../const';
import { Camera } from '../../types/Camera';

type CameraCardProps = {
  cameraCard: Camera;
  onAddClick: (cameraCard: Camera) => void;
}

function CameraCard ({cameraCard, onAddClick}: CameraCardProps) {
  return (
    <div className="product-card">
      <div className="product-card__img">
        <img src={cameraCard.previewImg} srcSet={cameraCard.previewImg2x} width="280" height="240" alt={cameraCard.name} />
      </div>
      <div className="product-card__info">
        <div className="rate product-card__rate">
          {NUMBER_OF_RATING_STARS_VALUE.map((ratingStar) => (
            <svg key={`${ratingStar}-rating`} width="17" height="16" aria-hidden="true">
              <use xlinkHref={ratingStar <= cameraCard.rating ? '#icon-full-star' : '#icon-star'}></use>
            </svg>
          ))}
          <p className="visually-hidden">Рейтинг: {cameraCard.rating}</p>
          <p className="rate__count"><span className="visually-hidden">Всего оценок:</span>{cameraCard.reviewCount}</p>
        </div>
        <p className="product-card__title">{cameraCard.name}</p>
        <p className="product-card__price"><span className="visually-hidden">Цена:</span>{cameraCard.price} ₽
        </p>
      </div>
      <div className="product-card__buttons">
        <button
          className="btn btn--purple product-card__btn"
          type="button"
          onClick={() => onAddClick(cameraCard)}
        >
          Купить
        </button>
        <Link
          className="btn btn--transparent"
          to={`/item/${cameraCard.id}`}
        >Подробнее
        </Link>
      </div>
    </div>
  );
}

export default CameraCard;
