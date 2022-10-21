import { Route, Routes } from 'react-router-dom';
import { AppRoute } from '../../const';
import { useAppSelector } from '../../hooks/use-app-selector';
import Catalog from '../../pages/catalog/catalog';
import Item from '../../pages/item/item';
import Main from '../../pages/main/main';
import { getCamerasLoadingStatus } from '../../store/selectors';
import NotFound from '../not-found/not-found';

function App(): JSX.Element {

  const isLoading = useAppSelector(getCamerasLoadingStatus);

  return isLoading
    ? <p> Подождите, данные загружаются</p>
    : (

      <Routes>
        <Route
          path={AppRoute.Main}
          element={<Main />}
        />
        <Route
          path={AppRoute.CatalogPage}
          element={<Catalog />}
        />
        <Route
          path={AppRoute.Item}
          element={<Item />}
        />
        <Route
          path={AppRoute.NotFound}
          element={<NotFound />}
        />
        <Route
          path='*'
          element={<NotFound />}
        />
      </Routes>

    );
}

export default App;
