import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { SimilarItemsParams } from '../../const';
import { fetchSimilarItems } from '../../services/api';
import { Camera } from '../../types/Camera';
import CameraCard from '../camera-card/camera-card';

type SimilarItemsProps = {
  onAddClick: (cameraCard: Camera) => void;
}

function SimilarItems ({ onAddClick }: SimilarItemsProps) {

  const { id } = useParams();
  const [isSimilarItemsLoading, setSimilarItemsLoadingStatus] = useState(true);
  const [similarItems, setSimilarItems] = useState([] as Camera[]);
  const [shownSimilarItems, setShownSimilarItems] = useState(SimilarItemsParams.InitialSimilarItemsToShow);

  useEffect(() => {
    fetchSimilarItems(Number(id), setSimilarItemsLoadingStatus, setSimilarItems);
    return (() => setShownSimilarItems(SimilarItemsParams.InitialSimilarItemsToShow));
  }, [id]);

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
                    onAddClick={() => onAddClick(similarItem)}
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

