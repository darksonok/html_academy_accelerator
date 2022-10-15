import { render, screen } from '@testing-library/react';
import { makeFakeReview } from '../../../utils/mock';
import ReviewElement from './review';

const mockReview = makeFakeReview();

describe('Review component', () => {
  it('should render correctly', () => {

    render(
      <ReviewElement review={mockReview}/>
    );

    const userElement = screen.getByText(`${mockReview.userName}`);
    const advantageElement = screen.getByText(`${mockReview.advantage}`);
    const disadvantageElement = screen.getByText(`${mockReview.disadvantage}`);

    expect(userElement).toBeInTheDocument();
    expect(advantageElement).toBeInTheDocument();
    expect(disadvantageElement).toBeInTheDocument();
  });
});
