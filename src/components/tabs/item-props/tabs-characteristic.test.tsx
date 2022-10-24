import { render, screen } from '@testing-library/react';
import { makeFakeCameraCard } from '../../../utils/mock';
import ItemCharacteristics from './item-characteristics';


const mockCameraCard = makeFakeCameraCard();

describe('tabs-characteristic component', () => {
  it('should render correctly', () => {

    render(
      <ItemCharacteristics item={mockCameraCard} />
    );

    const vendorCodeElement = screen.getByText(mockCameraCard.vendorCode);
    const categoryElement = screen.getByText(mockCameraCard.category);
    const typeElement = screen.getByText(mockCameraCard.type);
    const levelElement = screen.getByText(mockCameraCard.level);


    expect(vendorCodeElement).toBeInTheDocument();
    expect(categoryElement).toBeInTheDocument();
    expect(typeElement).toBeInTheDocument();
    expect(levelElement).toBeInTheDocument();
  });
});
