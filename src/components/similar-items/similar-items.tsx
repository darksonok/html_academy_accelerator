import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { SimilarItemsParams } from '../../const';
import { useAppSelector } from '../../hooks/use-app-selector';
import { store } from '../../store';
import { changeSimilarCameraCardsLoadingStatus, loadSimilarCameraCards } from '../../store/actions';
import { fetchSimilarCameraCardsAction } from '../../store/api-actions';
import { getSimilarCameraCards, getSimilarCameraCardsLoadingStatus } from '../../store/selectors';
import { Camera } from '../../types/Camera';
import CameraCard from '../camera-card/camera-card';

type SimilarItemsProps = {
  onAddToBusketClick: (cameraCard: Camera) => void;
}

function SimilarItems ({ onAddToBusketClick }: SimilarItemsProps) {

  const handleAddToBusketClick = (camera: Camera) => {
    onAddToBusketClick(camera);
  };

  const dispatch = useDispatch();
  const { id } = useParams();
  const [shownSimilarItems, setShownSimilarItems] = useState(SimilarItemsParams.InitialSimilarItemsToShow);

  const isSimilarItemsLoading = useAppSelector(getSimilarCameraCardsLoadingStatus);
  const similarItems = useAppSelector(getSimilarCameraCards);

  useEffect(() => {
    store.dispatch(fetchSimilarCameraCardsAction(Number(id)));
    return (() => {
      dispatch(changeSimilarCameraCardsLoadingStatus(true));
      dispatch(loadSimilarCameraCards([] as Camera[]));
    });
  }, [dispatch, id]);

  return (
    isSimilarItemsLoading
      ? <p> Похожие камеры грузятся</p>
      :
      <section className="product-similar">
        { similarItems.length > 0 &&
          <div className="container">
            <h2 className="title title--h3">Похожие товары</h2>
            <div className="product-similar__slider">
              <div className="product-similar__slider-list">
                {similarItems.map((similarItem, index) => (
                  <CameraCard
                    key={`similar-${similarItem.id}`}
                    cameraCard={similarItem}
                    onAddToBusketClick={() => handleAddToBusketClick(similarItem)}
                    cardNumber={index}
                    shownSimilarItems={shownSimilarItems}
                  />))}
              </div>
              <button
                className="slider-controls slider-controls--prev"
                type="button"
                aria-label="Предыдущий слайд"
                onClick={() => setShownSimilarItems(shownSimilarItems.map((item) => item - SimilarItemsParams.SimilarItemToShowStep))}
                disabled={shownSimilarItems[0] === SimilarItemsParams.NumberOfFirstInitialSimilarItemToShow}
              >
                <svg width="7" height="12" aria-hidden="true">
                  <use xlinkHref="#icon-arrow"></use>
                </svg>
              </button>
              <button
                className="slider-controls slider-controls--next"
                type="button"
                aria-label="Следующий слайд"
                onClick={() => setShownSimilarItems(shownSimilarItems.map((item) => item + SimilarItemsParams.SimilarItemToShowStep))}
                disabled={shownSimilarItems[shownSimilarItems.length - 1] === similarItems.length - 1}
              >
                <svg width="7" height="12" aria-hidden="true">
                  <use xlinkHref="#icon-arrow"></use>
                </svg>
              </button>
            </div>
          </div>}
      </section>
  );
}

export default SimilarItems;

