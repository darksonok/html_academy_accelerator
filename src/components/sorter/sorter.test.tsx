import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Sorter from './sorter';


describe('Sorter component', () => {
  it('should render correctly', () => {

    render(
      <BrowserRouter>
        <Sorter />
      </BrowserRouter>
    );

    const sorterElement = screen.getByText('Сортировать:');

    expect(sorterElement).toBeInTheDocument();
  });
});
