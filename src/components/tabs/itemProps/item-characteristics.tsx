import { Camera } from '../../../types/Camera';

type ItemCharacteristicsProps = {
  item: Camera;
}

function ItemCharacteristics ({ item }: ItemCharacteristicsProps) {
  return (
    <div className="tabs__element is-active">
      <ul className="product__tabs-list">
        <li className="item-list"><span className="item-list__title">Артикул:</span>
          <p className="item-list__text"> {item.vendorCode}</p>
        </li>
        <li className="item-list"><span className="item-list__title">Категория:</span>
          <p className="item-list__text">{item.category}</p>
        </li>
        <li className="item-list"><span className="item-list__title">Тип камеры:</span>
          <p className="item-list__text">{item.type}</p>
        </li>
        <li className="item-list"><span className="item-list__title">Уровень:</span>
          <p className="item-list__text">{item.level}</p>
        </li>
      </ul>
    </div>
  );
}

export default ItemCharacteristics;
