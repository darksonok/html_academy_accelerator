import {render, screen} from '@testing-library/react';
import { Dispatch, SetStateAction } from 'react';
import { Camera } from '../../types/Camera';
import AddItemModal from './add-item-modal';

test('Renders AddItemModal', () => {
  render(<AddItemModal cameraCard={{} as Camera} onCloseButtonClick={null as unknown as Dispatch<SetStateAction<boolean>>}/>);
  const addToBusket = screen.getByText(/Добавить в корзину/i);
  expect(addToBusket).toBeInTheDocument();
});
