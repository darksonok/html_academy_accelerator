import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Breadcrumbs from './breadcrumbs';

const mockSecondPath = {
  name: 'secondPathTest',
  path: 'test'
};

const mockThirdPath = 'thirdPathTest';

describe('Breadcrumbs component', () => {
  it('should render correctly', () => {

    render(
      <BrowserRouter>
        <Breadcrumbs secondPath={mockSecondPath} thirdPath={mockThirdPath} />
      </BrowserRouter>
    );

    const secondPathElement = screen.getByText(`${mockSecondPath.name}`);
    const thirdPathElement = screen.getByText(mockThirdPath);

    expect(secondPathElement).toBeInTheDocument();
    expect(thirdPathElement).toBeInTheDocument();
  });
});
