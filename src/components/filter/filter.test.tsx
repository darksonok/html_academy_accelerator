import { render, screen } from '@testing-library/react';
import Filter from './filter';


describe('Filter component', () => {
  it('should render correctly', () => {

    render(
      <Filter />
    );

    const headerElement = screen.getByText('Фильтр');
    const priceFilterElement = screen.getByText('Цена, ₽');
    const categoryFilterElement = screen.getByText('Категория');
    const typeFilterElement = screen.getByText('Тип камеры');
    const levelFilterElement = screen.getByText('Уровень');
    const dropFiltersElement = screen.getByText('Сбросить фильтры');


    expect(headerElement).toBeInTheDocument();
    expect(priceFilterElement).toBeInTheDocument();
    expect(categoryFilterElement).toBeInTheDocument();
    expect(typeFilterElement).toBeInTheDocument();
    expect(levelFilterElement).toBeInTheDocument();
    expect(dropFiltersElement).toBeInTheDocument();
  });
});
