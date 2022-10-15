import { configureMockStore } from '@jedmao/redux-mock-store';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { makeFakePromo } from '../../utils/mock';
import Banner from './banner';

const mockStore = configureMockStore();
const mockPromo = makeFakePromo();

const store = mockStore({
  isCamerasLoading: true,
  cameras: [],
  promo: mockPromo,
  isPromoLoading: false,
});

describe('Banner component', () => {
  it('should render correctly', () => {

    render(
      <Provider store={store}>
        <BrowserRouter>
          <Banner />
        </BrowserRouter>
      </Provider>
    );

    const headerElement = screen.getByText(`${mockPromo.name}`);
    const linkElement = screen.getByText('Подробнее');

    expect(headerElement).toBeInTheDocument();
    expect(linkElement).toBeInTheDocument();
  });
});
