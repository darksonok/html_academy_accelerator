import { useAppSelector } from '../../hooks';
import Catalog from '../../pages/catalog/catalog';
import { getCamerasLoadingStatus } from '../../store/selectors';

function App(): JSX.Element {

  const isLoading = useAppSelector(getCamerasLoadingStatus);


  return isLoading
    ? <p> Подождите, данные загружаются</p>
    : <Catalog />;
}

export default App;
