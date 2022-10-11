import { Link } from 'react-router-dom';
import { Camera } from '../../types/Camera';
import Rating from '../rating/rating';

type CameraCardProps = {
  cameraCard: Camera;
  onAddClick: (cameraCard: Camera) => void;
  modifiedSrc?: string;
  modifiedSrc2x?: string;
  shownSimilarItems?: number[];
  cardNumber?: number;
}

function CameraCard ({cameraCard, onAddClick, modifiedSrc, modifiedSrc2x, shownSimilarItems, cardNumber}: CameraCardProps) {
  return (
    <div
      className={shownSimilarItems?.filter((similarItem) => similarItem === cardNumber).length !== 0 ? 'product-card is-active' : 'product-card'}
    >
      <div className="product-card__img">
        <img
          src={modifiedSrc ? modifiedSrc : cameraCard.previewImg}
          srcSet={modifiedSrc2x ? modifiedSrc2x : cameraCard.previewImg2x}
          width="280"
          height="240"
          alt={cameraCard.name}
        />
      </div>
      <div className="product-card__info">
        <div className="rate product-card__rate">
          <Rating currentRating={cameraCard.rating} />
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
