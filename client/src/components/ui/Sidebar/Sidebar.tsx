import React from 'react';

import { usePromotionContext } from '../../../providers/CategoryContextProvider';
import './style.css';

const Sidebar = () => {
  const { categories } = usePromotionContext();

  return (
    <div className={'sidebar'}>
      <h3>Kategorien</h3>
      {categories.length ? (
        <ul>
          {categories[0].childrenCategories.list.map(({ name, urlPath }, i) => {
            return (
              <li key={i}>
                <a href={`/${urlPath}`}>{name}</a>
              </li>
            );
          })}
        </ul>
      ) : (
        'Loading...'
      )}
    </div>
  );
};

export default Sidebar;
