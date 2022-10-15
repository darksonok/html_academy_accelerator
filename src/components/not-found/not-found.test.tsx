import { configureMockStore } from '@jedmao/redux-mock-store';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { makeFakePromo } from '../../utils/mock';
import NotFound from './not-found';

const mockStore = configureMockStore();
const mockPromo = makeFakePromo();

const store = mockStore({
  isCamerasLoading: true,
  cameras: [],
  promo: mockPromo,
  isPromoLoading: false,
});

describe('Component NotFound', () => {
  it('should render correctly', () => {

    render(
      <Provider store={store}>
        <BrowserRouter>
          <NotFound />
        </BrowserRouter>
      </Provider>
    );

    const headerElement = screen.getByText('К сожалению, такой страницы не существует');
    const linkElement = screen.getByText('Но если хотите, можете вернуться на');

    expect(headerElement).toBeInTheDocument();
    expect(linkElement).toBeInTheDocument();
  });
});
