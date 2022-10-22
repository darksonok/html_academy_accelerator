import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import AddItemModal from '../../components/add-item-modal/add-item-modal';
import Breadcrumbs from '../../components/breadcrumbs/breadcrumbs';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import Rating from '../../components/rating/rating';
import ReviewsList from '../../components/reviews-list/reviews-list';
import SimilarItems from '../../components/similar-items/similar-items';
import Tabs from '../../components/tabs/tabs';
import { BreadcrumbsPaths } from '../../const';
import { useAppSelector } from '../../hooks/use-app-selector';
import { store } from '../../store';
import { changeOpenedCameraCardLoadingStatus, loadOpenedCameraCard } from '../../store/actions';
import { fetchOpenedCameraCardAction } from '../../store/api-actions';
import { getOpenedCameraCard, getOpenedCameraCardLoadingStatus } from '../../store/selectors';
import { Camera } from '../../types/Camera';

function Item () {

  const { id } = useParams();
  const [isAddItemModalOpened, setAddItemModalOpenStatus] = useState(false);
  const [chosenCameraCard, setChosenCameraCard] = useState({} as Camera);
  const dispatch = useDispatch();

  const handleAddToBusketClick = (cameraCard: Camera) => {
    setAddItemModalOpenStatus(true);
    setChosenCameraCard(cameraCard);
  };

  const handleAddItemModalCloseButtonClick = (modalStatus: boolean) => {
    setAddItemModalOpenStatus(modalStatus);
  };

  const item: Camera = useAppSelector(getOpenedCameraCard);
  const isItemLoading = useAppSelector(getOpenedCameraCardLoadingStatus);

  useEffect(() => {
    store.dispatch(fetchOpenedCameraCardAction(Number(id)));
    return (() => {
      dispatch(changeOpenedCameraCardLoadingStatus(true));
      dispatch(loadOpenedCameraCard({} as Camera));
    });
  }, [dispatch, id]);

  return (
    isItemLoading
      ? <p> Данные грузятся</p>
      :
      <>
        <Header />
        <main>
          <div className="page-content">
            <Breadcrumbs secondPath={BreadcrumbsPaths.catalog} thirdPath={item.name} />
            <div className="page-content__section">
              <section className="product">
                <div className="container">
                  <div className="product__img">
                    <img src={`../${item.previewImg}`} srcSet={`../${item.previewImg2x}`} width="560" height="480" alt={item.name}/>
                  </div>
                  <div className="product__content">
                    <h1 className="title title--h3">{item.name}</h1>
                    <div className="rate product__rate">
                      <Rating currentRating={item.rating} />
                      <p className="visually-hidden">Рейтинг: {item.rating}</p>
                      <p className="rate__count"><span className="visually-hidden">Всего оценок:</span>{item.reviewCount}</p>
                    </div>
                    <p className="product__price"><span className="visually-hidden">Цена:</span>{item.price} ₽</p>
                    <button
                      className="btn btn--purple"
                      type="button"
                      onClick={() => handleAddToBusketClick(item)}
                    >
                      <svg width="24" height="16" aria-hidden="true">
                        <use xlinkHref="#icon-add-basket"></use>
                      </svg>Добавить в корзину
                    </button>
                    <Tabs item={item} />
                  </div>
                </div>
              </section>
            </div>
            <div className="page-content__section">
              <SimilarItems
                onAddToBusketClick={handleAddToBusketClick}
              />
            </div>
            <div className="page-content__section">
              <ReviewsList />
            </div>
          </div>
          {isAddItemModalOpened
           &&
           <AddItemModal
             cameraCard={chosenCameraCard}
             onCloseButtonClick={handleAddItemModalCloseButtonClick}
           />}
        </main>
        <a className="up-btn" href="#header">
          <svg width="12" height="18" aria-hidden="true">
            <use xlinkHref="#icon-arrow2"></use>
          </svg>
        </a>
        <Footer />
      </>
  );
}

export default Item;
