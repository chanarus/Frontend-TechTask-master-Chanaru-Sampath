import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import useLocalStorageState from 'use-local-storage-state';

import { Article, Operation } from '../../types';
import { CartProps } from '../ArticleCard/ArticleCard';
import Quantifier from '../Quantifier/Quantifier';
import TotalPrice from '../TotalPrice/TotalPrice';
import './style.css';

const Cart = () => {
  const [cart, setCart] = useLocalStorageState<CartProps>(
    'cart',
    {} as CartProps,
  );
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const handleRemoveProduct = (productId: string): void => {
    setCart((prevCart) => {
      const updatedCart = { ...prevCart };
      delete updatedCart[productId];
      return updatedCart;
    });
  };

  const handleUpdateQuantity = (productId: string, operation: Operation) => {
    setCart((prevCart) => {
      const updatedCart = { ...prevCart };
      if (updatedCart[productId]) {
        if (operation === 'increase') {
          updatedCart[productId] = {
            ...updatedCart[productId],
            quantity: updatedCart[productId].quantity + 1,
          };
        } else {
          updatedCart[productId] = {
            ...updatedCart[productId],
            quantity: updatedCart[productId].quantity - 1,
          };
        }
      }
      return updatedCart;
    });
  };

  const getProducts = (): Array<Article> => Object.values(cart || {});

  const totalPrice = getProducts().reduce(
    (accumulator: number, product: Article) =>
      accumulator + (product.prices.regular.value / 100) * product.quantity,
    0,
  );

  return (
    <section className="cart">
      <h1>Cart</h1>

      <div className={'container'}>
        {getProducts().map((product) => (
          <div className={'product'} key={product.name}>
            <img src={product.images[0].path} alt={product.name} />
            <h3>{product.name}</h3>
            <Quantifier
              removeProductCallback={() => handleRemoveProduct(product.name)}
              productId={product.name}
              handleUpdateQuantity={handleUpdateQuantity}
            />
          </div>
        ))}
      </div>
      <TotalPrice amount={totalPrice} />
    </section>
  );
};

export default Cart;
