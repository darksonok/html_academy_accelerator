import { configureMockStore } from '@jedmao/redux-mock-store';
import { render, screen } from '@testing-library/react';
import MockAdapter from 'axios-mock-adapter';
import { createMemoryHistory } from 'history';
import { Provider } from 'react-redux';
import { AppRoute } from '../../const';
import { createAPI } from '../../services/api';
import { Promo } from '../../types/Promo';
import { makeFakeCameraCard } from '../../utils/mock';
import HistoryRouter from '../history-route/history-route';
import App from './app';

const mockStore = configureMockStore();
const mockCameraCard = makeFakeCameraCard();

const store = mockStore({
  isCamerasLoading: false,
  cameras: [],
  promo: {} as Promo,
  isPromoLoading: false,
});

const history = createMemoryHistory();

const fakeApp = (
  <Provider store={store}>
    <HistoryRouter history={history}>
      <App />
    </HistoryRouter>
  </Provider>
);

describe('Application routing', () => {
  const api = createAPI();
  const mockAPI = new MockAdapter(api);
  it('should render MainPage when user navigate to "/"', () => {
    history.push(AppRoute.Main);

    render(fakeApp);

    expect(screen.getByText(/Привет/i)).toBeInTheDocument();
  });

  it('should render CatalogPage when user navigate to "/catalog/1"', () => {
    history.push('/Catalog/1');

    render(fakeApp);
    expect(screen.getByText(/Каталог фото- и видеотехники/i)).toBeInTheDocument();
  });

  it('should render ItemPage when user navigate to "item/1"', () => {
    history.push('/item/1');
    mockAPI
      .onGet('/item/1')
      .reply(200, mockCameraCard);
    render(fakeApp);
    expect(screen.getByText(/Данные грузятся/i)).toBeInTheDocument();
  });

  it('should render NotFoundPage with bad url', () => {
    history.push('/blablabla');

    render(fakeApp);
    expect(screen.getByText(/К сожалению, такой страницы не существует/i)).toBeInTheDocument();
  });
});

