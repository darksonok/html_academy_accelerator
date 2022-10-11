import { useState } from 'react';
import { TabsValues } from '../../const';
import { Camera } from '../../types/Camera';
import ItemDescription from './itemDescription/itemDescription';
import ItemCharacteristics from './itemProps/itemCharacteristics';

type TabsProps = {
  item: Camera;
}

function Tabs ({ item }: TabsProps) {

  const [activeTab, setActiveTab] = useState(TabsValues.Description);

  return (
    <div className="tabs product__tabs">
      <div className="tabs__controls product__tabs-controls">
        <button
          className={activeTab === TabsValues.Characteristics ? 'tabs__control is-active' : 'tabs__control'}
          type="button"
          onClick={() => setActiveTab(TabsValues.Characteristics)}
        >
          {TabsValues.Characteristics}
        </button>
        <button
          className={activeTab === TabsValues.Description ? 'tabs__control is-active' : 'tabs__control'}
          type="button"
          onClick={() => setActiveTab(TabsValues.Description)}
        >
          {TabsValues.Description}
        </button>
      </div>
      <div className="tabs__content">
        {activeTab === TabsValues.Characteristics
          ? <ItemCharacteristics item={item} />
          : <ItemDescription itemDescription={item.description} />}
      </div>
    </div>
  );
}

export default Tabs;