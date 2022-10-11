import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { SIMILAR_ITEMS_SHOW_STEP } from '../../const';
import { fetchSimilarItems } from '../../services/api';
import { Camera } from '../../types/Camera';
import CameraCard from '../camera-card/camera-card';

function SimilarItems () {

  const { id } = useParams();
  const [isSimilarItemsLoading, setSimilarItemsLoadingStatus] = useState(true);
  const [similarItems, setSimilarItems] = useState([] as Camera[]);
  const [shownSimilarItems, setShownSimilarItems] = useState([0,1,2]);

  useEffect(() => {
    fetchSimilarItems(Number(id), setSimilarItemsLoadingStatus, setSimilarItems);
  }, [id]);

  return (
    isSimilarItemsLoading
      ? <p> Похожие камеры грузятся</p>
      :
      <section className="product-similar">
        <div className="container">
          <h2 className="title title--h3">Похожие товары</h2>
          <div className="product-similar__slider">
            <div className="product-similar__slider-list">
              {similarItems.map((similarItem, index) => (
                <CameraCard
                  key={`similar-${similarItem.id}`}
                  cameraCard={similarItem}
                  onAddClick={() => null}
                  modifiedSrc={`../${similarItem.previewImg}`}
                  modifiedSrc2x={`../${similarItem.previewImg2x}`}
                  cardNumber={index}
                  shownSimilarItems={shownSimilarItems}
                />))}
            </div>
            <button
              className="slider-controls slider-controls--prev"
              type="button"
              aria-label="Предыдущий слайд"
              onClick={() => setShownSimilarItems(shownSimilarItems.map((item) => item - SIMILAR_ITEMS_SHOW_STEP))}
              disabled={shownSimilarItems[0] === 0}
            >
              <svg width="7" height="12" aria-hidden="true">
                <use xlinkHref="#icon-arrow"></use>
              </svg>
            </button>
            <button
              className="slider-controls slider-controls--next"
              type="button"
              aria-label="Следующий слайд"
              onClick={() => setShownSimilarItems(shownSimilarItems.map((item) => item + SIMILAR_ITEMS_SHOW_STEP))}
              disabled={shownSimilarItems[shownSimilarItems.length - 1] === similarItems.length - 1}
            >
              <svg width="7" height="12" aria-hidden="true">
                <use xlinkHref="#icon-arrow"></use>
              </svg>
            </button>
          </div>
        </div>
      </section>
  );
}

export default SimilarItems;

