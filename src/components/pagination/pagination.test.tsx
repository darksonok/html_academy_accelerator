import { configureMockStore } from '@jedmao/redux-mock-store';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { makeFakeCameraCards } from '../../utils/mock';
import HistoryRouter from '../history-route/history-route';
import { createMemoryHistory } from 'history';

import Pagination from './pagination';

const mockStore = configureMockStore();
const mockCameras = makeFakeCameraCards();
const history = createMemoryHistory();

const store = mockStore({
  isCamerasLoading: true,
  cameras: mockCameras,
  promo: {},
  isPromoLoading: false,
});

describe('Pagination component', () => {
  it('should render correctly', () => {
    history.push('/catalog/2');
    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <Pagination />
        </HistoryRouter>
      </Provider>
    );

    const linkElement = screen.getByText('Назад');

    expect(linkElement).toBeInTheDocument();
  });
});
