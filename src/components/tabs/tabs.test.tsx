import { render, screen } from '@testing-library/react';
import { TabsValues } from '../../const';
import { makeFakeCameraCard } from '../../utils/mock';
import Tabs from './tabs';

const mockCameraCard = makeFakeCameraCard();

describe('Tabs component', () => {
  it('should render correctly', () => {

    render(
      <Tabs item={mockCameraCard} />
    );

    const characteristicButtonElement = screen.getByText(TabsValues.Characteristics);
    const descriptionButtonElement = screen.getByText(TabsValues.Description);

    expect(characteristicButtonElement).toBeInTheDocument();
    expect(descriptionButtonElement).toBeInTheDocument();
  });
});
