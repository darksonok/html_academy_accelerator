import { useAppSelector } from '../../hooks';
import { getPromo, getPromoLoadingStatus } from '../../store/selectors';

function Banner () {

  const promo = useAppSelector(getPromo);
  const promoLoadingStatus = useAppSelector(getPromoLoadingStatus);

  return (
    promoLoadingStatus
      ? <p> Данные загружаются </p>
      :
      <div className="banner">
        <img src={promo.previewImg} srcSet={promo.previewImg2x} width="1280" height="280" alt="баннер" />
        <p className="banner__info">
          <span className="banner__message">Новинка!</span>
          <span className="title title--h1">{promo.name}</span>
          <span className="banner__text"></span>
          <a className="btn" href="#">Подробнее</a>
        </p>
      </div>
  );
}

export default Banner;
