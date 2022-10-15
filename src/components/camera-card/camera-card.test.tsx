import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Camera } from '../../types/Camera';
import { makeFakeCameraCard } from '../../utils/mock';
import CameraCard from './camera-card';

const mockCameraCard = makeFakeCameraCard();


describe('Camera Card component', () => {
  it('should render correctly', () => {

    render(
      <BrowserRouter>
        <CameraCard cameraCard={mockCameraCard} onAddClick={null as unknown as (cameraCard: Camera) => void}/>
      </BrowserRouter>
    );

    const nameElement = screen.getByText(`${mockCameraCard.name}`);
    const reviewCountElement = screen.getByText(`${mockCameraCard.reviewCount}`);
    const addToBasketButtonElement = screen.getByText('Купить');
    const aboutButton = screen.getByText('Подробнее');

    expect(nameElement).toBeInTheDocument();
    expect(reviewCountElement).toBeInTheDocument();
    expect(addToBasketButtonElement).toBeInTheDocument();
    expect(aboutButton).toBeInTheDocument();
  });
});
