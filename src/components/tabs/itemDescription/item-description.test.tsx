import { render, screen } from '@testing-library/react';
import { makeFakeCameraCard } from '../../../utils/mock';
import ItemDescription from './item-description';


const mockCameraCard = makeFakeCameraCard();

describe('item description component', () => {
  it('should render correctly', () => {

    render(
      <ItemDescription itemDescription={mockCameraCard.description} />
    );

    const descriptionElement = screen.getByText(mockCameraCard.description);

    expect(descriptionElement).toBeInTheDocument();
  });
});
