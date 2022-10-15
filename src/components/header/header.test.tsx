import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Header from './header';


describe('Header component', () => {
  it('should render correctly', () => {

    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );

    const catalogElement = screen.getByText('Каталог');
    const guaranteeElement = screen.getByText('Гарантии');
    const deliveryElement = screen.getByText('Доставка');
    const aboutElement = screen.getByText('О компании');

    expect(catalogElement).toBeInTheDocument();
    expect(guaranteeElement).toBeInTheDocument();
    expect(deliveryElement).toBeInTheDocument();
    expect(aboutElement).toBeInTheDocument();
  });
});
