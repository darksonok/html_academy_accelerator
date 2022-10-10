import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AppRoute } from '../../const';
import { useAppSelector } from '../../hooks';
import Catalog from '../../pages/catalog/catalog';
import { getCamerasLoadingStatus } from '../../store/selectors';

function App(): JSX.Element {

  const isLoading = useAppSelector(getCamerasLoadingStatus);

  return isLoading
    ? <p> Подождите, данные загружаются</p>
    : (
      <BrowserRouter>
        <Routes>
          <Route
            path={AppRoute.Main}
            element={<Catalog />}
          />
          <Route
            path={AppRoute.CatalogPage}
            element={<Catalog />}
          />
        </Routes>
      </BrowserRouter>
    );
}

export default App;
