import { ShoppingCart } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router-dom';
import useLocalStorageState from 'use-local-storage-state';

import { CartProps } from '../../ArticleCard/ArticleCard';
import './style.css';

const Navbar = () => {
  const [cart] = useLocalStorageState<CartProps>('cart', {} as CartProps);

  return (
    <header className={'header'}>
      <div className="header__logo">
        <strong>home24</strong>
      </div>

      <div className="header__content">
        <input className="header__search" placeholder={'Search'} />
        <Link to={'/cart'}>
          {Object.keys(cart!).length !== 0 && (
            <span className="header__cartcount">
              {Object.keys(cart!).length}
            </span>
          )}
          <ShoppingCart className="header__cart" />
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
