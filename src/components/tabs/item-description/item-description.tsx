import './item-description.css';

type ItemDescriptionProps = {
  itemDescription: string;
}

function ItemDescription ({ itemDescription }: ItemDescriptionProps) {
  return (
    <div className="tabs__element is-active">
      <div className="product__tabs-text">
        <p>{itemDescription}</p>
      </div>
    </div>
  );
}

export default ItemDescription;

