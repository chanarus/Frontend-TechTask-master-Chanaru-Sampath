import React from 'react';
import useLocalStorageState from 'use-local-storage-state';

import { formatter } from '../../helpers/utils';
import { Article } from '../../types';

interface ArticleCardProps {
  article: Article;
}

export interface CartProps {
  [productId: string]: Article;
}

const ArticleCard = ({ article }: ArticleCardProps) => {
  const [cart, setCart] = useLocalStorageState<CartProps>('cart', {});

  const addToCart = (product: Article): void => {
    product.quantity = 1;
    setCart((prevCart) => ({
      ...prevCart,
      [product.name]: product,
    }));
  };

  const isInCart = (productId: string): boolean =>
    Object.keys(cart || {}).includes(productId);

  return (
    <div className={'article'}>
      <img src={article.images[0].path} alt="product" />
      <div>{article.name}</div>
      <div>{formatter.format(article.prices.regular.value / 100)}</div>
      <button
        disabled={isInCart(article.name)}
        onClick={() => addToCart(article)}
      >
        Add to cart
      </button>
    </div>
  );
};

export default ArticleCard;
