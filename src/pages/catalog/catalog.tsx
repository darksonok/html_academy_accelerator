import { useState } from 'react';
import { useParams } from 'react-router-dom';
import AddItemModal from '../../components/add-item-modal/add-item-modal';
import Banner from '../../components/banner/banner';
import Breadcrumbs from '../../components/breadcrumbs/breadcrumbs';
import CameraCard from '../../components/camera-card/camera-card';
import Filter from '../../components/filter/filter';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import Pagination from '../../components/pagination/pagination';
import Sorter from '../../components/sorter/sorter';
import { NUMBER_OF_CARDS_TO_PAGINATE } from '../../const';
import { useAppSelector } from '../../hooks';
import { getCameras } from '../../store/selectors';
import { Camera } from '../../types/Camera';

function Catalog () {

  const { pageId } = useParams();
  const cameraCards = useAppSelector(getCameras);
  const filteredCameraCards = cameraCards
    .slice((Number(pageId) - 1) * NUMBER_OF_CARDS_TO_PAGINATE, Number(pageId) * NUMBER_OF_CARDS_TO_PAGINATE);
  const [isAddItemModalOpened, setAddItemModalOpenStatus] = useState(false);
  const [chosenCameraCard, setChosenCameraCard] = useState({} as Camera);

  const onAddClick = (cameraCard: Camera) => {
    setAddItemModalOpenStatus(true);
    setChosenCameraCard(cameraCard);
  };

  return (
    <>
      <Header />
      <main>
        <Banner />
        <div className="page-content">
          <Breadcrumbs />
          <section className="catalog">
            <div className="container">
              <h1 className="title title--h2">Каталог фото- и видеотехники</h1>
              <div className="page-content__columns">
                <Filter />
                <div className="catalog__content">
                  <Sorter />
                  <div className="cards catalog__cards">
                    {filteredCameraCards.map((cameraCard) => (
                      <CameraCard
                        key={`${cameraCard.id}-cameraCard`}
                        cameraCard={cameraCard}
                        onAddClick={onAddClick}
                      />
                    ))}
                  </div>
                  <Pagination />
                </div>
              </div>
            </div>
          </section>
        </div>
        {isAddItemModalOpened
        &&
        <AddItemModal
          cameraCard={chosenCameraCard}
          onCloseButtonClick={setAddItemModalOpenStatus}
        />}
      </main>
      <Footer />
    </>
  );
}

export default Catalog;
